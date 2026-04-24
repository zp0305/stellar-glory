# 星耀高中教育平台 — 技术方案 v1.0

> 日期：2026-04-22  
> 状态：初稿，待讨论  
> 背景：物理模块已基本完成，内容框架清晰，可提炼为通用方案

---

## 一、整体架构

### 1.1 平台定位

**星耀**是一个高中阶段"认知图谱 + 解题套路"学习平台。核心价值：
- 帮助学生建立学科知识网络（认知图谱）
- 提供可操作的解题思维框架（套路 + 练习）

### 1.2 内容组织层级

```
科目（物理 / 化学 / 数学 / 生物 / 语文 / 英语）
  └── 模块（6～8个）
        ├── 学科指南（内容模块）
        ├── 知识图谱（全局导航）
        ├── 知识详解（42个模型，内容+练习）
        ├── 解题套路（方法论，内容）
        ├── 物理视界（拓展内容，故事化）
        ├── 练习中心（题库，动态）
        ├── 错题本（学习记录）
        └── 学习报告（数据汇总）
  └── 高考/强基专区（独立体系）
```

---

## 二、模块分类与技术方案

根据内容性质，分三类：

### A 类：内容模块（静态为主）

**定义**：内容是核心，用户消费内容，不需要登录，不跟踪状态。

**代表模块**：
- 学科指南（`/physics/guide`）
- 物理视界（`/physics/vision`）
- 解题套路（`/physics/strategies`）

**技术方案**：
```
数据结构：TypeScript 文件（.ts）存放静态数据
渲染模式：AppLayout + 内容区（无状态）
内容编辑：直接修改 .ts 数据文件
适用场景：内容量<1000条、无搜索需求、内容相对稳定
```

**扩展方向**（未来）：
```
内容量大 → 迁移到 Markdown 文件 / Notion API
搜索需求 → 增加 Fuse.js 本地搜索
版本管理 → 迁移到 Git 管理内容文件
```

**物理视界示例数据结构**（当前实现）：

```ts
// src/data/physics/visionStories.ts
export const physicsVisionStories: VisionStory[] = [
  {
    id: 'origin-001',
    title: '伽利略的斜面实验',
    category: '溯源',        // 十大分类之一
    difficulty: '🟢',
    tags: ['经典物理', '方法论'],
    summary: '伽利略用斜面实验推翻了亚里士多德的运动观...',
    content: {
      background: '...',     // Markdown + KaTeX
      core: '...',
      principle: '...',
      thinking: '...',
    }
  }
]
```

---

### B 类：知识模块（内容 + 练习 + 状态）

**定义**：内容是核心，但每个知识点配有练习题，用户学习后需要记录进度。

**代表模块**：
- 知识详解（42个物理模型，`/physics/models/:modelId`）
- 题库练习（`/physics/exercises/:modelId/do`）

**技术方案**：

```
内容数据：TypeScript 文件（每个模型一个 .ts）
题库数据：TypeScript 文件（每个模型一个 _questions.ts）
练习状态：Supabase 匿名模式（云端同步，换设备不丢）

核心逻辑：
- 题库：questionsByModel['PHY-M04'] → Question[]
- 进度：useProgressStore → Supabase progress 表
- 错题：answer === wrong → 自动记录到 wrong_questions 表
```

**题库数据结构**（当前实现）：

```ts
// src/data/physics/questions/types.ts
interface Question {
  id: string              // 'PHY-B01'
  modelId: string         // 'PHY-M04'
  difficulty: 'B'|'J''T'  // 基础/进阶/挑战
  type: '选择题'|'填空题'|'计算题'
  estimatedMinutes: number
  tags: string[]
  hint: string | null
  question: string        // Markdown + KaTeX
  options: string[] | null  // 选择题有，填空/计算为 null
  answer: string         // 'B' 或 '2:1'
  explanation: string     // Markdown + KaTeX
  points: string[]        // 所属知识要点
  routineIds: string[]    // 关联解题套路
}
```

**扩展方向**（未来）：
```
题库规模 > 500题/模型 → 按难度分层加载（lazy load）
跨学科题库 → 抽象出通用 question 接口
AI 批改（计算题）→ 对接 AI 接口判断答案语义
```

---

### C 类：学习记录模块（动态状态为主）

**定义**：内容不关键，关键是学生的学习记录和行为数据。

**代表模块**：
- 错题本（`/physics/wrong`）
- 学习报告（`/learning`）
- 收藏夹（`/physics/favorites`）

**技术方案**：

```
状态存储：Supabase 匿名模式
核心数据模型：
  - progress：学习进度（模型完成度）
  - wrong_questions：错误题目记录
  - favorites：收藏内容（modelId / strategyId / storyId）
  - study_sessions：学习时间记录

匿名模式：
  - 用户无需注册，数据自动关联到设备
  - 换设备后数据不继承（接受这个限制）
  - 适合单人使用场景
```

**Supabase 表结构**（已有）：

```sql
profiles          -- 用户 profile（匿名）
favorites         -- 收藏（content_type, content_id）
progress          -- 模型学习进度（model_id, completed, score）
wrong_questions   -- 错题记录（question_id, model_id, times）
study_sessions    -- 学习记录（started_at, ended_at, type）
```

---

## 三、模块 URL 规范（已固化）

```
格式：[学科]/[模块]/[操作]

内容模块：
  /physics/vision              ← 列表页
  /physics/vision/:storyId     ← 详情页

知识模块：
  /physics/models              ← 模型列表
  /physics/models/:modelId     ← 模型详情（含章节导航）
  /physics/strategies          ← 套路列表
  /physics/strategies/:id      ← 套路详情

练习模块：
  /physics/exercises           ← 题库列表（按模型）
  /physics/exercises/:modelId  ← 题库概览
  /physics/exercises/:modelId/do  ← 做题页（固定 /do 后缀）

记录模块：
  /physics/wrong               ← 错题本
  /physics/favorites           ← 收藏夹
  /learning                    ← 学习报告
```

**规则**：
- 列表页 = 导航入口
- 详情页 = 独立页面，有左侧同学科导航
- 做题页 = 固定加 `/do` 后缀（避免和详情页路由冲突）

---

## 四、每个模块的实现模式（模板）

### 4.1 内容模块（物理视界 = 模板）

新增化学/数学内容模块时，复制"物理视界"模式：

```
步骤1：创建数据文件
  src/data/[学科]/[模块]Stories.ts
  └── 按 category 分类，每条 story 含 content（结构化 Markdown）

步骤2：创建页面组件
  src/sections/[学科][模块]Pages.tsx
  └── 导出 [模块]ListPage + [模块]DetailPage
  └── 使用 VisionListPage / VisionDetailPage 相同结构

步骤3：注册路由（App.tsx）
  /[学科]/[模块]            → [模块]ListPage
  /[学科]/[模块]/:storyId   → [模块]DetailPage
```

**示例：化学视界**

```ts
// src/data/chemistry/chemVisionStories.ts
export const chemVisionStories: VisionStory[] = [
  {
    id: 'chem-001',
    title: '拉瓦锡与现代化学',
    category: '溯源',
    difficulty: '🟢',
    // ... 同物理视界结构
  }
]
```

```tsx
// src/sections/ChemistryVisionPages.tsx
// 复制 VisionPages.tsx 结构，改数据源
import { chemVisionStories } from '@/data/chemistry/chemVisionStories'
```

### 4.2 知识模块（知识详解 = 模板）

新增跨学科知识模型时：

```
步骤1：创建模型数据文件
  src/data/[学科]/models/M01_[名称].ts
  └── 42个字段的模型数据（六段式结构）

步骤2：创建题库文件
  src/data/[学科]/questions/M01_questions.ts
  └── Question[] 数组（按 B/J/T 三层）

步骤3：更新汇总文件
  src/data/[学科]/models/index.ts  → 添加 M01
  src/data/[学科]/questions/index.ts → 添加 questionsByModel['M01']

步骤4：创建页面组件
  src/sections/[学科]ModelPages.tsx
  └── 左侧：同学科模型列表（sticky）
  └── 右侧：当前模型六段式内容
```

**已知问题**：42个模型全部静态导入，bundle 体积 ~1.4MB（可接受，暂无优化必要）。

### 4.3 题库模块

```
步骤1：准备 JSON 数据
  user_input_files/题库_题目_[模块].json

步骤2：运行转换脚本
  node scripts/convert_physics_questions.js
  → 生成 src/data/physics/questions/M0X_questions.ts

步骤3：确认 index.ts 条目
  questionsByModel['PHY-M0X'] → M0X_questions

步骤4：部署 + 验证
  打开 /physics/exercises/PHY-M0X/do
```

---

## 五、共享组件体系

所有模块共享以下基础设施：

| 组件 | 路径 | 用途 |
|------|------|------|
| AppLayout | `@/components/layout/Navigation` | 统一布局 |
| MarkdownRenderer | `@/components/MarkdownRenderer` | 内容渲染（含 KaTeX） |
| SharedDetail | `@/components/SharedDetail` | 详情页左右布局 |
| QuestionCard | 内联在 QuestionDo.tsx | 答题卡片 |

**AppLayout 配置说明**：

```tsx
// 左侧同学科导航（知识模块）
<AppLayout showSubjectNav anchors={[]}>
  <左侧导航 /> + <内容 />
</AppLayout>

// 右侧章节导航（视界等有锚点需求时）
<AppLayout showSubjectNav anchors={anchorArray}>
  <内容 /> + <右侧锚点 />
</AppLayout>
```

---

## 六、当前平台状态

| 模块 | 状态 | 说明 |
|------|------|------|
| 物理 · 学科指南 | ✅ 完成 | `/physics/guide` |
| 物理 · 知识图谱 | ✅ 完成 | G6 可视化，26模型 |
| 物理 · 知识详解 | ✅ 完成 | 42模型，六段式 |
| 物理 · 解题套路 | ✅ 完成 | 8个套路 |
| 物理 · 物理视界 | ✅ 完成 | 10分类，故事化 |
| 物理 · 题库 | ✅ 完成 | M04 已上线 |
| 物理 · 错题本 | ✅ 完成 | Supabase 同步 |
| 物理 · 学习报告 | ✅ 完成 | 趋势图 |
| 物理 · 收藏夹 | ✅ 完成 | 云端收藏 |
| 化学 · 学科指南 | 🟡 占位 | 需内容填充 |
| 数学 | ❌ 占位 | 筹备中 |
| 生物 | ❌ 占位 | 筹备中 |
| 高考/强基专区 | ✅ 完成 | 政策 + 录取数据 |

---

## 七、技术债务与优化方向

| 优先级 | 项目 | 说明 |
|--------|------|------|
| 高 | KaTeX 渲染稳定性 | 当前 `ENABLE_KATEX=false`，需解决 CDN 问题 |
| 高 | 右导航栏移除 | ModelPage / StrategyPages 仍有右侧导航 |
| 中 | 全局搜索 | 暂无搜索功能，内容多了必须加 |
| 中 | 六段式学习路径 | 内容框架已有，交互未实现 |
| 低 | 跨学科关联表 | M42之后的内容体系设计 |
| 低 | M02/M03 题库 | JSON 数据已提供，待导入 |

---

## 八、扩展一个新学科（以化学为例）

```
阶段1：创建数据目录
  src/data/chemistry/models/      （化学模型数据）
  src/data/chemistry/questions/   （化学题库）
  src/data/chemistry/chemVisionStories.ts  （化学视界内容）

阶段2：复用物理视界结构
  → 创建 ChemistryVisionPages.tsx（复制 VisionPages.tsx，改数据源）
  → 注册路由：/chemistry/vision, /chemistry/vision/:storyId

阶段3：内容填充
  → 填写化学视界数据（复用十大分类或自定义分类）
  → 化学学科指南内容

阶段4：题库（如果需要）
  → 准备 JSON → 转换脚本 → M01_questions.ts
  → 注册 /chemistry/exercises/:modelId/do
```

**总结**：扩展学科 = 复制已有模块结构 + 替换数据源 + 路由注册。内容模块的技术方案不需要变化。

---

*本文件为技术方案初稿，需与产品负责人确认模块优先级和内容框架后正式落地。*