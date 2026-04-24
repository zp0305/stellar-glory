-- ============================================================
-- 星耀教育平台 · Supabase Schema
-- 运行方式：Supabase 后台 → SQL Editor → 粘贴运行
-- ============================================================

-- 启用 UUID 扩展
create extension if not exists "uuid-ossp";

-- ============================================================
-- 1. 用户档案（每用户一条）
-- ============================================================
create table public.profiles (
  id          uuid primary key references auth.users(id) on delete cascade,
  username    text,
  avatar_url  text,
  created_at  timestamptz default now(),
  updated_at  timestamptz default now()
);

-- 自动创建 profile 条目（注册时触发）
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public
as $$
begin
  insert into public.profiles (id)
  values (new.id)
  on conflict (id) do nothing;
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ============================================================
-- 2. 收藏夹
-- ============================================================
create table public.favorites (
  id          uuid    default uuid_generate_v4() primary key,
  user_id     uuid    references auth.users(id) on delete cascade not null,
  type        text    not null check (type in ('model', 'strategy', 'vision', 'question')),
  item_id     text    not null,
  title       text    not null,
  note        text,
  created_at  timestamptz default now(),

  -- 同一类型+itemId 只能收藏一次
  unique (user_id, type, item_id)
);

-- RLS：用户只能读写自己的收藏
alter table public.favorites enable row level security;

create policy "Users manage own favorites"
  on public.favorites
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- ============================================================
-- 3. 学习进度（理解度自评）
-- ============================================================
create table public.progress (
  id          uuid    default uuid_generate_v4() primary key,
  user_id     uuid    references auth.users(id) on delete cascade not null,
  model_id    text    not null,          -- 如 'PHY-M01'
  status      text    not null check (status in ('undone', 'learning', 'mastered')),
  progress    integer default 0,         -- 0~100
  last_accessed timestamptz default now(),
  created_at  timestamptz default now(),
  updated_at  timestamptz default now(),

  unique (user_id, model_id)
);

alter table public.progress enable row level security;

create policy "Users manage own progress"
  on public.progress
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- ============================================================
-- 4. 错题记录
-- ============================================================
create table public.wrong_questions (
  id            uuid    default uuid_generate_v4() primary key,
  user_id       uuid    references auth.users(id) on delete cascade not null,
  question_id   text    not null,
  model_id      text,
  difficulty    text,
  my_answer     text,
  correct_answer text,
  reason        text,         -- 错因分析（用户可写）
  review_count  integer default 0,
  is_resolved   boolean default false,
  created_at    timestamptz default now(),

  unique (user_id, question_id)
);

alter table public.wrong_questions enable row level security;

create policy "Users manage own wrong questions"
  on public.wrong_questions
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- ============================================================
-- 5. 做题记录（做过的题目历史）
-- ============================================================
create table public.question_history (
  id              uuid    default uuid_generate_v4() primary key,
  user_id         uuid    references auth.users(id) on delete cascade not null,
  question_id     text    not null,
  model_id        text,
  difficulty      text,
  my_answer       text,
  correct_answer  text,
  is_correct      boolean not null,
  time_spent      integer,    -- 秒
  created_at      timestamptz default now()
);

alter table public.question_history enable row level security;

create policy "Users manage own history"
  on public.question_history
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- ============================================================
-- 6. 学习会话（总览统计用）
-- ============================================================
create table public.study_sessions (
  id          uuid    default uuid_generate_v4() primary key,
  user_id     uuid    references auth.users(id) on delete cascade not null,
  date        date    not null default current_date,
  study_time  integer default 0,   -- 当日累计学习秒数
  questions_done integer default 0,
  correct_count integer default 0,
  created_at  timestamptz default now(),

  unique (user_id, date)
);

alter table public.study_sessions enable row level security;

create policy "Users manage own sessions"
  on public.study_sessions
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- ============================================================
-- 索引（查询加速）
-- ============================================================
create index if not exists favorites_user_id_idx     on public.favorites(user_id);
create index if not exists favorites_type_idx        on public.favorites(type);
create index if not exists progress_user_id_idx      on public.progress(user_id);
create index if not exists wrong_questions_user_id_idx on public.wrong_questions(user_id);
create index if not exists wrong_questions_resolved_idx on public.wrong_questions(is_resolved);
create index if not exists question_history_user_id_idx on public.question_history(user_id);
create index if not exists study_sessions_user_id_idx on public.study_sessions(user_id);

-- ============================================================
-- 匿名模式配置（重要！）
-- ============================================================
-- 启用匿名登录（无需注册即可使用）
alter table auth.users enable row level security;

-- 匿名用户可以插入 session（Supabase Auth 内部表）
-- 这个策略允许 Supabase 为匿名用户生成匿名 session
