# 星耀 — 架构文档（实现层）

> **定位**：实现层参考手册。面向开发时查代码细节——路由怎么配、Supabase 保护怎么写、组件关系是什么。
> 版本：v2.2  
> 更新：2026-04-22（v1.6 固化）

---

## 一、技术架构

```
React 18 + Vite 5 + TypeScript
    ├── Tailwind CSS v3（样式）
    ├── shadcn/ui（UI组件库）
    ├── React Router v7（路由，懒加载）
    ├── Zustand（状态管理）
    │     ├── userStore（进度/理解度）
    │     ├── favoritesStore（收藏夹，Supabase保护）
    │     └── authStore（认证，Supabase保护）
    ├── KaTeX + MarkdownRenderer（数学公式）
    ├── AntV G6 v5（认知图谱）
    └── Supabase（云端持久化，isSupabaseConfigured 保护）
```

---

## 二、路由架构

### 2.1 懒加载分离

以下组件使用 `lazy()` 按需加载，避免首屏膨胀：

```ts
// 题库（按需加载，切断崩溃链）
const QuestionBankListPage = lazy(() => import('@/sections/QuestionBankList'))
const QuestionBankDetailPage = lazy(() => import('@/sections/QuestionBankDetail'))
const QuestionDoPage = lazy(() => import('@/sections/QuestionDo'))

// 高考/强基（路由多，首屏不加载）
const GaokaoZoneHome = lazy(() => import('@/sections/gaokao/GaokaoZoneHome'))
const FoundationZoneHome = lazy(() => import('@/sections/foundation/FoundationZoneHome'))
```

### 2.2 路由列表

| 路由 | 组件 | 加载方式 |
|------|------|----------|
| `/` | SiteHome | 静态 |
| `/physics` | PhysicsModuleGrid | 静态 |
| `/physics/guide` | PhysicsGuideContent | 静态 |
| `/physics/graph` | CognitionGraphPage | 静态 |
| `/physics/models` | ModelList | 静态 |
| `/physics/models/:modelId` | ModelPage | 静态 |
| `/physics/strategies` | StrategyListPage | 静态 |
| `/physics/strategies/:strategyId` | StrategyDetailPage | 静态 |
| `/physics/vision` | VisionListPage | 静态 |
| `/physics/vision/:storyId` | VisionDetailPage | 静态 |
| `/physics/exercises` | QuestionBankListPage | **懒加载** |
| `/physics/exercises/:modelId` | QuestionBankDetailPage | **懒加载** |
| `/physics/exercises/:modelId/do` | QuestionDoPage | **懒加载** |
| `/physics/practice*` | PracticeRedirect | 静态（旧路由跳转） |
| `/gaokao` | GaokaoZoneHome | **懒加载** |
| `/foundation` | FoundationZoneHome | **懒加载** |
| `/*` | ComingSoon | 静态 |

---

## 三、组件架构

### 3.1 AppLayout 系统（章节详情的骨架）

```tsx
<AppLayout
  showSubjectNav={true}    // 显示左侧学科导航
  anchors={[]}             // 右侧锚点导航（仅 VisionDetailPage 使用）
>
  {children}
</AppLayout>
```

**布局规则**：
- 详情页（模型/套路/视界）：`showSubjectNav=true`
- 锚点导航：仅 VisionDetailPage 需要时传入；其他详情页传入 `anchors={[]}`
- AppLayout 内部自动渲染：TopNav + LeftSidebar + 内容区 + （可选 RightAnchorNav）

### 3.2 题库组件关系

```
QuestionBankListPage           # /physics/exercises
  └── 搜索框 + 难度筛选 + 模型卡片网格

QuestionBankDetailPage         # /physics/exercises/:modelId
  └── DiffSection（可折叠）
        └── QuestionCard（预览，含开始做题按钮）

QuestionDoPage                # /physics/exercises/:modelId/do
  └── 进度条 + 计时器 + QuestionCard
        ├── 题干（MarkdownRenderer + KaTeX）
        ├── 选项（选中高亮）
        ├── 提示（可折叠）
        ├── 提交 → 答案解析
        └── 关联知识点/套路跳转
```

---

## 四、AppLayout 系统

### 4.1 showSubjectNav 规则

| 页面 | showSubjectNav | anchors |
|------|:---:|:---:|
| SiteHome | ❌ | — |
| PhysicsModuleGrid | ❌ | — |
| 模型列表页 | ✅ | — |
| 模型详情页 | ✅ | `anchors={[]}`（无锚点） |
| 套路详情页 | ✅ | `anchors={[]}`（无锚点） |
| VisionListPage | ✅ | — |
| VisionDetailPage | ✅ | `anchors={[...]}`（有锚点） |
| 题库三页 | ✅ | — |
| ComingSoon | ❌ | — |

### 4.2 旧路由处理

```
/physics/practice          → PracticeRedirect → navigate('/physics/exercises')
/physics/practice/bank    → PracticeRedirect → navigate('/physics/exercises')
/physics/practice/do      → PracticeRedirect → navigate('/physics/exercises/:modelId')
```

所有已删除的旧路由统一用 `PracticeRedirect.tsx` 处理，不污染 App.tsx 路由逻辑。

## 五、数据流

### 4.1 Supabase 保护原则

所有调用 Supabase 的代码必须先检查：

```ts
import { isSupabaseConfigured } from '@/lib/supabase'

// 原则：未配置时安静降级，不崩溃
if (isSupabaseConfigured) {
  // 调用 Supabase
}

// authStore 初始化
if (isSupabaseConfigured) {
  useAuthStore.getState().init()
}
```

### 4.2 题库数据流

```
M01_questions.ts          # 静态数据（无需网络）
        ↓
index.ts（汇总分组）
        ↓
QuestionBankDetailPage    # 读取 questionsByModel[modelId]
        ↓
QuestionDoPage            # 读取 allQuestions[currentIndex]
```

---

## 五、章节内容规范

### 5.1 章节导航结构（AppLayout anchors）

仅以下页面使用右侧锚点导航：

| 页面 | anchors |
|------|---------|
| VisionDetailPage | ✅ 有（各章节） |
| ModelPage | ❌ `anchors={[]}` |
| StrategyDetailPage | ❌ `anchors={[]}` |

---

## 六、部署

- **构建**：`npm run build`（`vite build`，无 `tsc` 前置）
- **部署**：MaxClaw CDN，`deploy` 工具
- **环境变量**：`.env`（VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY）
  - 未配置时：`isSupabaseConfigured = false`，所有 Supabase 调用跳过

## 六、部署规范

```ts
// vite.config.ts
export default defineConfig({
  base: '/',   // 必须为 '/'，不能为 './'（相对路径会导致子路由下资源404）
})
```

| 命令 | 说明 |
|------|------|
| `npm run build` | 构建（无 tsc 前置）|
| MaxClaw CDN | `deploy` 工具自动上传 dist/ |
| 环境变量 | `.env`（VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY）|
