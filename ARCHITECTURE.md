# 星耀 — 架构文档（实现层）

> **定位**：实现层参考手册。面向开发时查代码细节——路由怎么配、Supabase 保护怎么写、组件关系是什么。
> 版本：v2.3
> 更新：2026-04-26（Navigation拆分 · GitHub Pages部署 · 衔接专区上线）

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
    ├── KaTeX（数学公式，ENABLE_KATEX=false 当前禁用）
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

// 高考/强基/衔接/竞赛（路由多，首屏不加载）
const GaokaoZoneHome = lazy(() => import('@/sections/gaokao/GaokaoZoneHome'))
const FoundationZoneHome = lazy(() => import('@/sections/foundation/FoundationZoneHome'))
const TransitionZoneHome = lazy(() => import('@/sections/transition/TransitionZoneHome'))
const CompetitionPages = lazy(() => import('@/sections/competition/CompetitionPages'))
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
| `/physics/concepts` | ConceptPage | 静态 |
| `/physics/concepts/:conceptId` | ConceptPage | 静态 |
| `/physics/exercises` | QuestionBankListPage | **懒加载** |
| `/physics/exercises/:modelId` | QuestionBankDetailPage | **懒加载** |
| `/physics/exercises/:modelId/do` | QuestionDoPage | **懒加载** |
| `/physics/practice*` | PracticeRedirect | 静态（旧路由跳转） |
| `/chemistry` | ChemistryGuidePage | 静态 |
| `/math` | MathGuidePage | 静态 |
| `/biology` | BiologyGuidePage | 静态 |
| `/chinese` | ChineseGuidePage | 静态 |
| `/english` | EnglishGuidePage | 静态 |
| `/competition` | CompetitionPages | **懒加载** |
| `/competition/physics` | CompetitionPages | **懒加载** |
| `/competition/math` | CompetitionPages | **懒加载** |
| `/competition/chemistry` | CompetitionPages | **懒加载** |
| `/competition/biology` | CompetitionPages | **懒加载** |
| `/competition/cs` | CompetitionPages | **懒加载** |
| `/transition` | TransitionZoneHome | **懒加载** |
| `/gaokao` | GaokaoZoneHome | **懒加载** |
| `/foundation` | FoundationZoneHome | **懒加载** |
| `/diagnosis` | DiagnosisPage | 静态 |
| `/planner` | PlannerPage | 静态 |
| `/methods` | MethodsPage | 静态 |
| `/*` | ComingSoon | 静态 |

---

## 三、Navigation 组件拆分

> **完成时间**：2026-04-25

Navigation 系统从单文件拆分为 7 个文件，实现关注点分离：

```
src/components/Navigation/
├── nav-data.ts          # 数据定义（subjects数组、module定义）
├── nav-hooks.ts         # Hook（useCurrentSubject、getSubjectModules）
├── TopNav.tsx           # 顶部导航栏（Logo、学科切换、学习工具下拉）
├── LeftSidebar.tsx      # 左侧栏（桌面/移动端自适应，动态模块列表）
├── RightAnchorNav.tsx   # 右侧锚点导航
├── AppLayout.tsx        # 统一布局（TopNav + LeftSidebar + children）
└── Navigation.tsx      # 统一导出
```

### 3.1 关键 Hook

```ts
// nav-hooks.ts
useCurrentSubject()    // 识别当前学科（返回 physics/chemistry/math 等）
getSubjectModules()     // 按学科返回模块列表（桌面端动态生成）
```

### 3.2 已知 Bug

| Bug | 位置 | 说明 | 状态 |
|:---|:---|:---|:---:|
| useCurrentModule 高亮错位 | nav-hooks.ts:297 | 物理子路径提前返回'guide' | 未修复 |
| 桌面端硬编码 physicsModules | LeftSidebar.tsx:553 | 所有科目桌面板用物理模块 | 未修复 |

---

## 四、组件架构

### 4.1 AppLayout 系统（章节详情的骨架）

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

### 4.2 题库组件关系

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

### 4.3 学习工具组件

```
DiagnosisPage     # /diagnosis — 学科选择 → 答题 → 评级 → 推荐
PlannerPage       # /planner   — 年级/目标 → 三年时间线
MethodsPage       # /methods   — 五法卡片 + 自评量表
```

### 4.4 竞赛组件

```
CompetitionPages  # /competition/* — 懒加载共享 chunk
  └── 按路由 params.type 渲染不同学科内容
```

---

## 五、AppLayout 系统

### 5.1 showSubjectNav 规则

| 页面 | showSubjectNav | anchors |
|------|:---:|:---:|
| SiteHome | ❌ | — |
| PhysicsModuleGrid | ❌ | — |
| 模型列表页 | ✅ | — |
| 模型详情页 | ✅ | `anchors={[]}` |
| 套路详情页 | ✅ | `anchors={[]}` |
| VisionListPage | ✅ | — |
| VisionDetailPage | ✅ | `anchors={[...]}` |
| 题库三页 | ✅ | — |
| 竞赛/衔接/强基/高考 | ✅ | — |
| 诊断/规划/方法 | ❌ | — |
| ComingSoon | ❌ | — |

### 5.2 旧路由处理

```
/physics/practice          → PracticeRedirect → navigate('/physics/exercises')
/physics/practice/bank    → PracticeRedirect → navigate('/physics/exercises')
/physics/practice/do      → PracticeRedirect → navigate('/physics/exercises/:modelId')
```

所有已删除的旧路由统一用 `PracticeRedirect.tsx` 处理，不污染 App.tsx 路由逻辑。

---

## 六、数据流

### 6.1 Supabase 保护原则

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

### 6.2 题库数据流

```
M01_questions.ts          # 静态数据（无需网络）
        ↓
index.ts（汇总分组）
        ↓
QuestionBankDetailPage    # 读取 questionsByModel[modelId]
        ↓
QuestionDoPage            # 读取 allQuestions[currentIndex]
```

### 6.3 paradigms.ts 数据结构

```
src/data/physics/routines/
├── R01.ts ~ R90.ts       # 90个独立文件
├── index.ts              # 导出 allParadigms[] + paradigmMap{}
└── paradigms.ts          # 转发层（从 index.ts re-export）
```

physicsModels.ts 包含全部 42 条完整定义，其他文件不得重复定义。

---

## 七、章节内容规范

### 7.1 章节导航结构（AppLayout anchors）

仅以下页面使用右侧锚点导航：

| 页面 | anchors |
|------|---------|
| VisionDetailPage | ✅ 有（各章节） |
| ModelPage | ❌ `anchors={[]}` |
| StrategyDetailPage | ❌ `anchors={[]}` |

---

## 八、部署

### 8.1 部署方式

**GitHub Pages + GitHub Actions**（Netlify 暂停使用，积分耗尽）

```
push main → GitHub Actions 自动构建 → 部署到 GitHub Pages
```

GitHub Pages 激活：仓库 Settings → Pages → Source 选 **GitHub Actions**（不是 Branch）。

GitHub Actions workflow：`.github/workflows/deploy.yml`（push main 自动触发）。

GitHub Token：**（需在 GitHub 仓库 Settings → Secrets 中配置 `GH_TOKEN`）**。

### 8.2 GitHub Pages SPA 路由

无需 `_redirects` 配置。SPA fallback 由 GitHub Pages 自动处理，404 → index.html 由 React Router 接管。

### 8.3 本地部署脚本

```bash
# Windows 环境（nodejs 不在 PATH）
cmd /c "set PATH=%ProgramFiles%\nodejs;%PATH% && node scripts/deploy.js all"

# 审计（10项检查）
cmd /c "set PATH=%ProgramFiles%\nodejs;%PATH% && node scripts/audit.js"

# 构建（含 TypeScript 检查）
cmd /c "cd /d C:\Users\stars\WorkBuddy\20260423131409\xingyao && node scripts/build.js"
```

### 8.4 构建命令

```bash
# 本地 Vite 构建
node node_modules\typescript\bin\tsc --noEmit  # TypeScript 检查
C:\Users\stars\...\node_modules\.bin\vite.cmd build  # Vite 构建
```

### 8.5 环境变量

`.env`（VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY）
- 未配置时：`isSupabaseConfigured = false`，所有 Supabase 调用跳过

### 8.6 Vite 配置

```ts
// vite.config.ts
export default defineConfig({
  base: '/',   // 必须为 '/'，不能为 './'
})
```

---

## 九、技术债务

| 项目 | 状态 | 说明 |
|:---|:---:|:---|
| KaTeX CDN 问题 | ⚠️ 禁用 | `ENABLE_KATEX = false`，CDN 问题未解决 |
| Navigation 高亮 Bug | ⚠️ 已知 | useCurrentModule 和 LeftSidebar 各有一个 bug |
| 生物/语文/英语题库 | ❌ 缺失 | 入口显示"题库建设中" |
| 强基 FK01-FK18 | ❌ 缺失 | 超纲知识大纲，完全无数据 |
| 强基 FB01-FB09 | ❌ 缺失 | 强基特有模型，完全无数据 |
| 强基 FI01-FI04 | ⚠️ 占位 | 只有提示语，内容为空 |
| GitHub 推送不稳定 | ⚠️ 已知 | 公司网络不稳定，Gitee 正常 |

---

## 十、目录结构速查

```
src/
├── App.tsx                  # 路由注册（懒加载配置）
├── components/Navigation/   # Navigation 拆分7文件
│   ├── nav-data.ts
│   ├── nav-hooks.ts
│   ├── TopNav.tsx
│   ├── LeftSidebar.tsx
│   ├── RightAnchorNav.tsx
│   ├── AppLayout.tsx
│   └── Navigation.tsx
├── data/
│   ├── physics/
│   │   ├── physicsModels.ts      # 42条完整模型定义
│   │   ├── paradigms.ts          # 转发层
│   │   └── routines/             # R01.ts ~ R90.ts + index.ts
│   ├── tools/                    # diagnosis/planner/methods 数据
│   ├── competition/              # 五科竞赛数据
│   ├── transition/               # 衔接专区数据
│   ├── gaokao/                   # 高考政策/升学参考
│   └── foundation/                # 强基专区
├── sections/
│   ├── SiteHome.tsx
│   ├── physics/                  # 物理全模块组件
│   ├── tools/                    # DiagnosisPage/PlannerPage/MethodsPage
│   ├── competition/             # CompetitionPages
│   ├── transition/              # TransitionZoneHome
│   ├── gaokao/                 # GaokaoZoneHome
│   └── foundation/             # FoundationZoneHome
└── lib/
    └── supabase.ts             # isSupabaseConfigured 保护
```
