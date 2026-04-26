# 星耀项目 — 内容规范

> 版本：v2.1
> 更新：2026-04-26
> 状态：**范式拆分完毕 · 六科全上线 · 衔接专区上线 · 强基待推进**

---

## 一、内容体系的整体架构

### 1.1 网站应包含的内容模块

星耀的内容分为五个大区，每个大区向下延伸若干模块：

```
星耀内容体系
│
├── 物理（最完整，是其他学科的模板）
│   ├── K层  知识节点（K01-K56）  ← 认知网络底层（骨架就绪）
│   ├── M层  核心模型（M01-M42）  ← 认知网络主体
│   ├── R层  解题套路（R01-R90） ← 模型之上的方法层（✅已拆分）
│   ├── V层  物理视界（10分类）    ← 拓展视野
│   ├── P层  练习中心（B/J/T）    ← 实战训练（部分就绪）
│   └── L层  错题本 + 学习报告    ← 学习追踪
│
├── 化学（待建：复制物理结构）
│   └── M01-M?? / R01-R?? / ...
│
├── 数学（待建：复制物理结构）
│   └── M01-M?? / R01-R?? / ...
│
├── 高考专区（跨学科）
│   ├── P01-P05     高考政策与趋势
│   ├── A01-A06     升学路径参考
│   └── 时间线        高一→高三备考规划
│
└── 强基专区（跨学科）
    ├── FP01-FP07   强基政策解读
    ├── FI01-FI04   面试准备
    └── 时间线        高一→强基备考规划
```

### 1.2 模块之间的相互关系

```
学习路径（由浅入深）

高考专区 ──────────────────────────────→ 强基专区
  ↑                                         ↑
  │（高考是基础层，                  （强基是进阶层，
  │  提供政策+应试训练）                提供超纲内容）
  │
起点 ──→ K层知识 ──→ M层模型 ──→ R层套路 ──→ P层练习
          ↑                          ↑
          │                          │
       认知图谱                  套路详解页
      (K层+M层+G6)               关联跳转
                                   ──→ L层错题本
                                   ──→ V层视界故事
```

**依赖关系说明：**

| 关系 | 说明 |
|:---|:---|
| K → M | K层知识是M层模型的前置（如：匀速运动→匀变速运动） |
| M → R | M层模型是R层套路的基础（如：学会M01才能用R01） |
| R → P | R层套路提供练习入口（P层练习关联到R层套路） |
| P → L | 练习错题自动汇入L层错题本 |
| M → G6 | M层模型是认知图谱的节点，K层知识是底层节点 |
| K/M/R → 高考/强基 | 高考/强基专题引用物理/化学/数学的内容 |

---

## 二、各模块的模板规范

### 2.1 K层 - 知识节点（K01-K56）

> **定位**：物理认知网络的底层节点，比模型更小颗粒度的概念或规律。
> **与模型的关系**：一个模型可以由多个K节点组成。

**文件**：`src/data/physics/knowledge/K01.ts`（待新建目录）

```ts
export const K01 = {
  id: 'PHY-K01',
  title: '位移',                    // 知识节点名称
  module: '运动学',               // 所属板块
  chapter: '运动的描述',            // 所属章节
  // K节点不设难度，统一为基础层

  // 定义：简洁的概念定义（1句话）
  definition: '物体位置变化的物理量，是矢量。',

  // 核心公式（如无公式则写"无"）
  coreFormula: '$\\vec{x}$ 或 $x$',

  // 与本节点关联的模型（最多3个）
  linkedModels: ['PHY-M01', 'PHY-M02'],

  // 与本节点直接相关的其他K节点（上下游，≤4个）
  linkedKnowledge: ['PHY-K02', 'PHY-K03'],

  // 常见误解（如无则写"暂无"）
  commonMisconception: '位移大小等于路程。',
}
```

---

### 2.2 M层 - 核心模型（M01-M42）

> **定位**：认知网络的主体。每个模型对应一个可独立解决问题的能力单元。
> **结构**：七模块（详见 `3.3 M层模型七模块规范`）。

---

### 2.3 R层 - 解题套路（R01-R90）

> **定位**：跨模型的通用/特定解题方法。一个套路可以关联多个模型。
> **状态**：✅ 已从 `strategies.ts` 拆分为 90 个独立文件（R01.ts ~ R90.ts），通过 `src/data/physics/routines/index.ts` 统一导出 `allParadigms` 和 `paradigmMap`。

**文件**：`src/data/physics/routines/R01.ts` ~ `R90.ts`

```ts
export const R01 = {
  id: 'PHY-R01',
  title: '逐差法求加速度',

  // 元信息
  modelId: 'PHY-M01',            // 主要关联模型
  category: '运动学',             // 与套路Tab分类对应
  difficulty: 2,                   // 1=基础 2=中等 3=进阶

  // 一句话方法（显示在列表卡上）
  oneLine: '相邻相等时间间隔位移差 Δx = aT²',

  // ===== 7个标准字段 =====

  coreSteps: [
    '第一步：确认物体做匀变速直线运动',
    '第二步：找出两个相邻相等时间间隔 T',
    '第三步：代入 Δx = aT² 求 a',
  ],

  applicableTypes: [
    '纸带法求加速度实验',
    '打点计时器图像分析',
  ],

  commonMistakes: [
    'T 代入数值错误：T 是完整时间间隔，不是计数周期',
    '单位不统一：先把所有量换成国际单位',
  ],

  memoryTip: '逐差逐差，差就是加速度',

  content: `## 逐差法原理\n\n当物体做匀变速...`,
}
```

---

### 2.4 V层 - 物理视界

**文件**：`src/data/physics/visionStories.ts`（已有）

```ts
export const visionStories: VisionStory[] = [
  {
    id: 'PHY-V01',
    category: '生活物理',          // 10分类之一
    title: '刹车距离与安全驾驶',  // 标题
    subtitle: '为什么不能跟车太近',  // 一句话引言
    coverColor: 'blue',           // 封面渐变色
    icon: 'Car',                  // Lucide 图标
    readTime: 5,                  // 阅读时间（分钟）

    // 正文：Markdown，含标题、分段、公式
    content: `## 刹车距离的物理\n\n汽车刹车是典型的...`,
  },
]
```

**10个分类**：
`科技前沿` | `生活物理` | `物理学家` | `历史故事` | `自然现象` | `实验探究` | `技术应用` | `趣味科普` | `前沿热点` | `跨学科`

---

### 2.5 P层 - 配套题库（v1.6 新版）

> **定位**：`/physics/exercises` - 每个模型配套一套题（B/J/T三层）。

**文件**：`src/data/physics/questions/`

| 文件 | 内容 |
|------|------|
| `types.ts` | Question 接口定义 |
| `M01_questions.ts` | M01 示例数据（B×3/J×3/T×2，共8题） |
| `index.ts` | 汇总 + 按 modelId 分组 |

**Question 接口**：
```ts
interface Question {
  id: string              // 'PHY-B01'
  modelId: string         // 'PHY-M01'
  difficulty: 'B' | 'J' | 'T'
  type: '选择题' | '填空题' | '计算题'
  estimatedMinutes: number
  tags: string[]          // ['易错点', '真实情境']
  hint: string | null     // 可折叠提示，null=无提示
  question: string        // 题干（Markdown + LaTeX）
  options: string[] | null // 选项数组，填空/计算为 null
  answer: string          // 答案
  explanation: string     // 解析（Markdown + LaTeX）
  points: string[]       // 关联知识点
  routineIds?: string[]   // 关联套路 IDs
}
```

**难度说明**：
- `B` 基础题：考察单一模型，直接套公式
- `J` 进阶层：涉及多过程分析、综合应用
- `T` 挑战层：技巧性强、综合性高

**做题页交互**：
1. 选择题：选项点击 → 提交 → 标准化比对（去 $ / 去 \ / 去空格）→ 显示 ✅/❌ + 解析
2. 填空/计算题：输入答案 → 提交 → 直接显示"你的答案" vs"参考答案"（LaTeX渲染）→ 学生自评，不自动判分
3. 每题可折叠提示（点击展开/收起）
4. 提交后显示关联知识点 + 关联套路链接（可点击跳转）

**路由**：
- `/physics/exercises` - 题库列表（按模型筛选）
- `/physics/exercises/:modelId` - 模型题库（按难度折叠）
- `/physics/exercises/:modelId/do` - 做题页

---

### 2.6 L层 - 错题本 + 学习报告

> **定位**：自动从练习记录生成，无需手动填充内容。
> **数据结构**（由 Supabase 自动聚合）：
```ts
// 错题本：用户做错的题目聚合
interface WrongQuestion {
  questionId: string
  modelId: string
  wrongCount: number       // 错误次数
  lastWrongAt: string     // 最近一次错误时间
  userAnswer: string      // 用户的错误答案
  correctAnswer: string
}

// 学习报告：自动生成的分析摘要
interface LearningReport {
  userId: string
  week: string            // '2026-W16'
  totalQuestions: number
  accuracy: number          // 正确率
  weakModels: string[]     // 薄弱模型 TOP3
  strongModels: string[]   // 掌握模型 TOP3
}
```

---

### 2.7 高考专区（P01-P05 + A01-A06）

> **定位**：跨学科通用政策与升学信息。

```ts
// 政策页（P01-P05）
export const gaokaoPolicies: GaokaoPolicy[] = [
  {
    id: 'P01',
    title: '新高考政策解读',        // 显示在列表卡
    subtitle: '3+1+2 模式是什么',   // 一句话说明
    source: '教育部',                // 信息来源
    updateYear: '2026',
    category: '政策指南',            // 分类标签
    content: `## 新高考政策\n\n新高考改革的核心变化...`,
  },
]

// 升学参考（A01-A06）
export const admissionInfos: AdmissionInfo[] = [
  {
    id: 'A01',
    title: '理工科选科要求',       // 列表标题
    subtitle: '物理+化学+生物组合的利弊',  // 一句话
    content: `## 理工科选科\n\n物理是理工科的基础...`,
  },
]
```

---

### 2.8 强基专区（FP01-FP07 + FI01-FI04）

```ts
export const foundationPolicies: FoundationPolicy[] = [
  {
    id: 'FP01',
    title: '强基计划是什么',
    subtitle: '定位、目标、选拔机制',
    category: 'overview',            // overview | process | exam | major
    source: '阳光高考平台',
    updateYear: '2026',
    content: `## 强基计划定位\n\n强基计划是2020年起在36所...`,
  },
]

// 面试准备（待建立 FI01-FI04）
export const interviewInfos: InterviewInfo[] = [
  {
    id: 'FI01',
    title: '面试形式与流程',       // 各高校通用
    content: `## 面试流程\n\n1. 自我介绍...`,
  },
]
```

---

## 三、内容三层归类方案（扩展标准）

> **重要**：每新增一个内容类别时，必须遵循此三层归类方案。
> 内容团队只需填写数据文件；编程代码不变，新增路由/导航配置即可。

### 3.1 三层结构

```
内容层（内容只填数据）
├── M层模型    → 七字段模板（定位/原理/变形/网络/方法/自测/应用）
├── R层套路    → 五字段（步骤/题型/错误/口诀/讲解）
├── P层题库    → 题型卡片（B×3+J×3+T×2）+ 做题页
└── G层专题    → 政策/故事/路径（Markdown单字段，按分类聚合）

展示层（编程只做组件）
├── ListPage    → 筛选 + 卡片网格（所有内容类型共用）
├── DetailPage  → AppLayout(anchors=[]) + 平铺章节（模型/套路/题库）
└── TopicPage   → AppLayout(anchors=[]) + 顶部分类导航（视界/高考/强基）

导航层（内容决定导航结构）
├── 学科首页   → 跳转各模块
├── 模型列表   → 按学科筛选
├── 套路列表   → 按分类筛选
├── 题库列表   → 按模型+难度筛选
└── 专题列表   → 按分类筛选
```

### 3.2 新增内容类别流程

新增一个学科（如"生物"）时，编程工作量：

1. 创建数据文件：`src/data/biology/biologyData.ts`
2. 注册路由：App.tsx 加一行路由配置
3. 导航配置：Navigation.tsx 左侧栏加一个链接

**编程代码不变**，复用现有的 ListPage/DetailPage 组件。

### 3.3 已有示例

| 内容类别 | 数据文件 | 复用组件 |
|---------|---------|---------|
| M层模型（物理）| physicsData.ts | ModelList + ModelPage |
| R层套路（物理）| strategies.ts | StrategyListPage + StrategyDetailPage |
| P层题库（物理）| questions/*.ts | QuestionBankList + QuestionBankDetail + QuestionDo |
| V层视界（物理）| visionStories.ts | VisionListPage + VisionDetailPage |
| 高考政策（跨学科）| gaokaoData.ts | GaokaoZoneHome（独立实现）|

## 三、M层模型 - 七模块详细规范

每个M层模型文件固定包含以下七个模块：

| 模块 | 字段名 | 类型 | 是否可选 | 说明 |
|:---|:---|:---|:---:|:---|
| 模块1 | `positioning` | object | 否 | 定位与本质 |
| 模块2 | `principle` | string | 否 | 核心原理（Markdown） |
| 模块3 | `variations` | object | 否 | 分层变形 |
| 模块4 | `knowledgeNetwork` | object | 否 | 知识网络 |
| 模块5 | `methodology` | object | 否 | 方法论 |
| 模块6 | `selfCheck` | object | 否 | 自我检测 |
| 模块7 | `lifeApplication` | string | 否 | 生活应用 |

### 模块1：定位与本质 `positioning`
```ts
positioning: {
  core: "一句话核心定义（≤50字）",
  essence: "本质（≤80字）：为什么重要、与其他知识的区别",
  keyInsight: "学习这个模型的顿悟时刻（≤50字）",

  // 识别关键词：看到这些词/场景 → 立即联想到本模型
  keywords: [
    { word: "关键词/场景", implication: "意味着用本模型处理" },
    // 至少2个，最佳5-8个
  ],
}
```

### 模块2：核心原理 `principle`
- 内容：Markdown（含 LaTeX 公式 `$...$`）
- 章节结构（按顺序写）：
  1. 背景引入：生活中哪里见过
  2. 核心概念：怎么定义
  3. 公式推导：从第一性原理出发
  4. 适用条件：什么时候能用
  5. 边界情况：什么时候不适用
  6. 常见误区：为什么有人会做错

### 模块3：分层变形 `variations`
```ts
variations: {
  basic: [     // 基础变形（≤2道）
    { label: "场景", formula: "公式", note: "说明" },
  ],
  advanced: [], // 进阶变形（≤3道）
  challenge: [], // 挑战变形（≤2道）
}
```

### 模块4：知识网络 `knowledgeNetwork`
```ts
knowledgeNetwork: {
  parents: ["PHY-M01"],   // 前置模型（进入此模型前要会的）
  children: ["PHY-M03"],  // 后续模型（学完此模型后继续学的）
  related: ["PHY-M09"],   // 相关但不直接上下游（同一章节）
  coreFormula: "本模型最核心的公式（用于认知图谱节点）",
}
```

### 模块5：方法论 `methodology`
```ts
methodology: {
  approach: "解题总思路（1句话）",
  decisionTree: ["第一步：...", "第二步：..."],  // 2-4步
  commonPitfalls: ["陷阱1", "陷阱2"],              // 2-4个
}
```

### 模块6：自我检测 `selfCheck`
```ts
selfCheck: {
  questions: [
    { q: "问题描述", a: "答案（基础题给，进阶/挑战题不给）", type: "基础" },
    { q: "问题描述", a: "", type: "进阶" },  // 进阶不给答案
  ],
  confidenceLevel: 1,  // 1=初次学 2=已了解 3=已掌握
}
```

### 模块7：生活应用 `lifeApplication`
- 内容：3个生活/科技/安全实例
- 每个实例格式：
  ```
  ## 实例1：[标题]
  背景：[哪里见过]
  物理分析：[用本模型的什么知识分析]
  结论：[得出什么认识/行动建议]
  ```
- 总字数：400-600字

---

## 四、内容基础要求（所有模块通用）

| 要求 | 说明 |
|:---|:---|
| 中文优先 | 所有内容用简体中文，不得中英混杂 |
| 术语统一 | 物理术语用教育部统一下限（如"匀变速直线运动"而非"匀变速运动"） |
| 公式用 LaTeX | 公式写在 `$...$` 内，如 `$v = v_0 + at$` |
| 无死链 | 跳转链接的模型/套路 ID 必须在数据中存在 |
| 数据自洽 | `knowledgeNetwork` 的 parents/children 双向对应 |
| 空字段不允许 | `positioning.core` 等核心字段必须有内容，不能为空字符串 |
| 难度对应 | 基础题对应 `difficulty=1`，进阶题对应 `difficulty=2/3` |
| 数量限制 | 一个模型的 `coreSteps` 最多6步；`applicableTypes` 最多8个 |
| 命名规范 | 文件名只用字母/数字/下划线/中文，如 `M01_匀变速直线运动.ts` |
| 序列化 | 所有时间用 ISO 8601 格式：`2026-04-22` |

---

## 五、内容流转规则

```
来源 → 写入位置 → 显示位置
─────────────────────────────────────────────────────
用户做错题（P层）
  → Supabase wrong_questions 表
  → 错题本页面（自动聚合显示）

用户收藏模型（M层）
  → Supabase favorites 表 + FavoritesPage
  → 收藏夹页面

用户自评理解度（M层）
  → Zustand userStore
  → 本地 localStorage + Supabase profiles

学习记录（P层练习）
  → Supabase question_history 表
  → 学习报告（MyLearning）→ 认知图谱着色
```

---

## 六、后续待补充的内容模块

| 模块 | 状态 | 说明 |
|:---|:---:|:---|
| K01-K56 知识节点 | ⚠️ 骨架就绪 | 骨架文件已生成，仅 P01 有完整内容 |
| R01-R90 独立文件 | ✅ 已拆分 | 90条范式 → R01.ts~R90.ts + index.ts（allParadigms + paradigmMap） |
| 六科指南页 | ✅ 全部上线 | 物理/化学/数学/生物/语文/英语，均为5段式模板 |
| 学习工具模块 | ✅ 已上线 | 诊断/规划/方法三页，路由 /diagnosis /planner /methods |
| 五科竞赛页 | ✅ 已上线 | 物理/化学/数学/生物/信息，含 CMO/CChO/CBO/NOIP 数据 |
| 初高中衔接专区 | ✅ 已上线 | /transition，4个Tab（暑假计划/六科衔接/高中适应/容错方案） |
| 化学/生物题库 | ⚠️ 部分就绪 | 物理题库有示例题；化学/生物/语文/英语暂缺 |
| 强基专区 | 🔄 部分上线 | FP01-07 ✅ / 备考时间线 ✅ / FI01-04 ⚠️ / FK01-18 ❌ / FB01-09 ❌ |
| 物理题库 | 🔄 部分就绪 | 有示例题，需扩展至全量 |
| 高考专区 | 🔄 部分上线 | P01-P05 政策 ✅ / A01-A06 升学参考 ✅ / S01-S07 ❌ / T01-T09 ❌ |

---

## 七、K层知识节点规范（K01-K56）

> 定位：认知网络的底层节点，比模型更小颗粒度的概念或规律。
> 来源：v1.5 手册 Section 4.2，K01-K56 共7大板块。

### 7.1 七大板块与编号

| 板块 | 节点数 | 编号 |
|:---|:---:|:---|
| 板块1：运动学 | 6个 | K01-K06 |
| 板块2：力学 | 6个 | K07-K12 |
| 板块3：曲线运动与万有引力 | 6个 | K13-K18 |
| 板块4：能量与动量 | 9个 | K19-K27 |
| 板块5：电磁学 | 17个 | K28-K44 |
| 板块6：热学·光学·机械波 | 8个 | K45-K52 |
| 板块7：近代物理 | 4个 | K53-K56 |

### 7.2 节点模板

**文件**：`src/data/physics/knowledge/K{num}.ts`

```ts
export const K01 = {
  id: 'PHY-K01',           // 固定格式 PHY-K{编号}
  title: '位移',            // 节点名称

  // 归属
  module: '运动学',         // 所属板块
  chapter: '运动的描述',     // 所属章节

  // 核心内容
  definition: '物体位置变化的物理量，是矢量，方向由初位置指向末位置。',
  coreFormula: '$\\vec{x}$ 或 $x$',  // LaTeX，无公式写'无'

  // 依赖关系（最多3个前置，≤5个后续）
  prerequisites: [],         // 前置节点 ['PHY-K01']，进入本节点前要会的
  successors: [],             // 后续节点 学完本节点后继续学的

  // 与本节点直接相关的其他K节点（非上下游，但概念相近）
  related: ['PHY-K02'],

  // 典型误解（每个节点至少1条，没有写"暂无"）
  commonMisconception: '位移大小等于路程。实际上位移是矢量，路程是标量。',

  // 识别关键词（→ 意味着什么）
  keywords: [
    { word: '位置变化', meaning: '找位移' },
    { word: '从A到B', meaning: '找位移方向' },
  ],
}
```

### 7.3 节点关系校验规则

| 规则 | 说明 |
|:---|:---|
| 双向引用 | 若 A 在 B 的 `prerequisites` 里，则 B 应在 A 的 `successors` 里 |
| 无循环依赖 | K层链不能出现 A→B→C→A 的闭环 |
| K → M 关联 | 若模型 M 用到了知识 K，则 M 的 `knowledgeNetwork.parents` 应包含 K |
| 数量目标 | K01-K56 共56个节点，完成100%后知识网络才算完整 |

---

## 八、B/J/T 三层难度含义规范

> 来自 v1.5 手册 Section 3.2，每层有明确的学习目标。
> 适用：练习中心（P层）、模型自我检测（每模型至少含三层各1题）

### 8.1 难度层级定义

| 层级 | 代码 | 学习目标 | 题型特征 | 出处 |
|:---|:---|:---|:---|:---|
| 基础层 | `B` | 公式直接套用，1步出答案 | 直给题，有明确已知量 | 教材例题改编 |
| 进阶层 | `J` | 2步以上推理，含1个陷阱或隐含条件 | 进阶题，需审题识别 | 高考真题改编 |
| 挑战层 | `T` | 跨模型综合，多步骤或技巧性方法 | 高考难题/竞赛题 | 强基真题/竞赛 |

### 8.2 三层难度梯度设计原则

```
B层 → 建立信心：题目明确，套公式即可，让用户感受"我能做"
J层 → 建立能力：需要识别条件，有陷阱，训练审题和分步思维
T层 → 建立高度：综合题，跨多个模型，技巧性强，让用户感受"我可以挑战"
```

### 8.3 每模型自我检测的三层配置

```ts
selfCheck: {
  // 基础题（给答案）
  basics: [
    { q: "问题", a: "答案", type: "B" },
  ],
  // 进阶层（给答案）
  intermediates: [
    { q: "问题", a: "答案", type: "J" },
  ],
  // 挑战层（不给答案）
  challenges: [
    { q: "问题", a: "", type: "T" },
  ],
  // 自评理解度（用户主动选择）
  confidenceLevel: 1,  // 1=初次学 2=已了解 3=已掌握
}
```

---

## 九、全学科内容架构（通用模板）

> 来自 v1.5 手册 Section 3.1。
> 规则：物理/化学/生物/数学/语文/英语/政治均采用统一三层架构。
> 当前落地：物理（完整）/ 化学（待建）/ 数学（待建）。

### 9.1 通用三层架构

```
第一层：知识网络
  └── 每学科 N 个知识节点（K01-K{NN}）
  └── 作用：建立学科知识地图

第二层：核心模型
  └── 每学科 M 个模型（M01-M{MM}）
  └── 作用：连接知识与题目

第三层：解题套路
  └── 每学科 R 个套路（R01-R{RR}）
  └── 作用：可复用的解题操作手册
```

### 9.2 各学科内容规模规划

| 学科 | 状态 | K层节点 | M层模型 | R层套路 |
|:---|:---:|:---:|:---:|:---:|
| 物理 | ✅ 已落地 | K01-K56（骨架就绪） | M01-M42（42个完整） | R01-R90（90个，已拆分文件） |
| 化学 | 🔄 待建 | C-K01-C-K?? | C-M01-C-M?? | C-R01-C-R?? |
| 数学 | 🔄 待建 | M-K01-M-K?? | M-M01-M-M?? | M-R01-M-R?? |
| 生物 | 🔄 待建 | B-K01-B-K?? | B-M01-B-M?? | B-R01-B-R?? |
| 语文 | 🔄 远期 | - | - | - |
| 英语 | 🔄 远期 | - | - | - |
| 政治 | 🔄 远期 | - | - | - |

### 9.3 化学/数学内容模板说明

化学/数学的 M 层模型文件**完全复制**物理的七模块结构，
字段名一一对应，仅将学科前缀改为 `CHE-` / `MAT-`。

新增学科时，在 `src/data/` 下新建目录：
```
src/data/chemistry/
src/data/mathematics/
```

路由自动变为 `/chemistry/models/:id` 和 `/mathematics/models/:id`。

---

## 十、高考专区 - 阶段性内容规范

> 来自 v1.5 手册 Section 3.3 & 附录 B。
> 当前内容：P01-P05（政策）+ A01-A06（升学参考）。
> 规划内容：S01-S07（应试策略）+ T01-T09（专题突破）。

### 10.1 已落地内容

| 类型 | 编号 | 内容 |
|:---|:---|:---|
| 高考政策 | P01-P05 | 新高考解读/各省模式/考纲/命题趋势/新题型 |
| 升学参考 | A01-A06 | 选科/强基专业/强基解读/竞赛优惠/选科对比/综合评价 |

### 10.2 待建：应试策略（S01-S07）

**文件**：`src/data/gaokao/strategies.ts`

```ts
// 应试策略：针对某科某类题型的通用应对方法
export const gaokaoStrategies: GaokaoStrategy[] = [
  {
    id: 'PHY-S01',            // 物理-策略1
    subject: '物理',            // 物理 | 化学 | 数学
    category: '应试策略',
    title: '选择题提速技巧',   // 显示在列表卡
    subtitle: '30秒解一道选择题的方法',  // 一句话
    readTime: 5,               // 阅读时间（分钟）

    // 正文：Markdown，含方法+示例+练习
    content: `## 问题诊断\n\n选择题慢的原因通常有两个...\n\n## 技巧一：量纲法\n\n通过单位快速排除...\n\n## 练习题\n...`,
  },
]

// 规划编号
// PHY-S01 ~ PHY-S{N}  物理应试策略
// CHE-S01 ~ CHE-S{N}  化学应试策略
// MAT-S01 ~ MAT-S{N}  数学应试策略
```

### 10.3 待建：专题突破（T01-T09）

**文件**：`src/data/gaokao/topics.ts`

```ts
// 专题突破：高考重难点专题，含知识点梳理+典型例题+练习
export const gaokaoTopics: GaokaoTopic[] = [
  {
    id: 'PHY-T01',
    subject: '物理',
    category: '专题突破',       // 应试策略 | 专题突破
    title: '传送带模型综合',    // 列表标题
    subtitle: '涉及运动学+能量+相对运动的复合问题',  // 一句话
    relatedModels: ['PHY-M09', 'PHY-M16', 'PHY-M19'],  // 关联模型
    readTime: 15,               // 完整专题阅读时间

    // 专题正文结构
    sections: [
      {
        heading: '本专题涉及的知识',  // 知识梳理
        content: '传送带问题的核心是...\n1. 运动学关系\n2. 能量分析\n3. ...',
      },
      {
        heading: '典型例题',          // 例题讲解
        content: '## 例题\n\n题干...\n\n**分析**：...\n\n**答案**：...',
      },
      {
        heading: '变式练习',          // 练习入口
        content: '### 练习1\n...\n### 练习2\n...',
      },
    ],
  },
]

// 规划编号（按学科分prefix）
// PHY-T01 ~ PHY-T{N}  物理专题
// CHE-T01 ~ CHE-T{N}  化学专题
// MAT-T01 ~ MAT-T{N}  数学专题
```

---

## 十一、强基专区 - 全量内容规范

> 来自 v1.5 手册 Section 9.2。
> 当前内容：FP01-FP07（政策解读）。
> 规划内容：FK01-FK18（超纲知识）+ FB01-FB09（强基模型）+ FI01-FI04（面试）。

### 11.1 已落地：政策解读 FP01-FP07

| ID | 内容 |
|:---|:---|
| FP01 | 强基计划定位与选拔机制 |
| FP02 | 报名条件与选拔程序 |
| FP03 | 校测形式与内容（笔试+面试+体测）|
| FP04 | 各高校强基专业对比 |
| FP05 | 录取规则与综合成绩折算 |
| FP06 | 五大学科竞赛如何选择 |
| FP07 | 强基专业选择与职业规划 |

### 11.2 待建：超纲知识 FK01-FK18

> 强基笔试中涉及的大学知识，但高考不考。
> 规则：内容用大学视角讲解，但落脚点在高中问题的"高阶理解"。

```ts
// FK = Foundation Knowledge，超纲知识
export const foundationKnowledge: FoundationKnowledge[] = [
  {
    id: 'PHY-FK01',
    subject: '物理',
    category: '超纲知识',       // 统一标签
    title: '欧拉-拉格朗日方程初步',  // 大学知识名
    subtitle: '从更底层理解牛顿定律',  // 与高中的连接

    // 正文结构
    content: `## 高中在哪里见过\n\n本知识与高中物理的连接点是...\n\n## 大学知识拓展\n\n欧拉-拉格朗日方程是...\n\n## 强基怎么考\n\n（给出1-2道强基风格题目）\n\n## 结论\n\n回到高中：这个知识让我们对什么问题理解更深？`,
  },
]

// 规划编号
// PHY-FK01 ~ PHY-FK18   物理超纲知识（18个，覆盖竞赛一阶内容）
// CHE-FK01 ~ CHE-FK??   化学超纲知识
// MAT-FK01 ~ MAT-FK??   数学超纲知识
```

### 11.3 待建：强基模型 FB01-FB09

> 强基特有的典型物理模型，不出现在高考范围，但强基笔试高频。

```ts
// FB = Foundation Model，强基特有模型
export const foundationModels: FoundationModel[] = [
  {
    id: 'PHY-FB01',
    title: '有心力与轨道方程',   // 名称
    subtitle: '万有引力+角动量守恒的综合应用',
    difficulty: 3,               // 统一用3=进阶

    // 同M层七模块结构（完全复用M层模板）
    positioning: { ... },
    principle: '...',
    variations: { ... },
    knowledgeNetwork: { ... },
    methodology: { ... },
    selfCheck: { ... },
    lifeApplication: '...' ,
  },
]

// 规划编号
// PHY-FB01 ~ PHY-FB09   物理强基模型（9个）
// CHE-FB01 ~ CHE-FB??    化学强基模型
// MAT-FB01 ~ MAT-FB??    数学强基模型
```

### 11.4 待建：面试准备 FI01-FI04

> 通用面试内容，不分校。

```ts
// FI = Foundation Interview，强基面试
export const foundationInterviews: FoundationInterview[] = [
  {
    id: 'PHY-FI01',
    title: '面试形式与流程',
    subtitle: '36所强基高校通用流程指南',
    readTime: 5,
    content: `## 面试形式\n\n强基面试分为三种...\n\n## 流程\n\n1. 自我介绍（1-2分钟）\n2. 抽题回答\n3. 专家提问\n4. 自由交流\n\n## 注意事项\n\n- 不要刻意准备"标准答案"\n- 诚实回答不会的问题\n- 展示真实的学科兴趣...`,
  },
  {
    id: 'PHY-FI02',
    title: '自我介绍怎么准备',
    subtitle: '让面试官在2分钟内记住你',
    readTime: 5,
    content: `## 好的自我介绍的标准\n\n1. 有具体事例支撑\n2. 展示学科热情\n3. 结合强基专业谈规划\n\n## 禁忌\n\n- 背诵简历\n- 空喊口号（"我热爱物理"）\n- 说空话（"我品学兼优"）`,
  },
  {
    id: 'PHY-FI03',
    title: '物理学科问题库',
    subtitle: '高频物理问题+参考答案思路',
    readTime: 10,
    content: `## 常问问题类型\n\n### 概念辨析类\n**问题**："请解释一下动量和动能的区别。"\n**思路**：从定义、矢量/标量、做功特点、是否守恒四个维度回答\n\n### 开放思考类\n**问题**："如果地球半径减小一半，会发生什么？"\n**思路**：分运动学/力学/能量多角度分析，不要给确定数值答案`,
  },
  {
    id: 'PHY-FI04',
    title: '面试现场技巧',
    subtitle: '遇到不会的题怎么办+突发情况处理',
    readTime: 5,
    content: `## 遇到不会的题\n\n不要慌。按以下步骤：\n1. 承认不会（"这个问题我了解不深"）\n2. 展示思路（"但如果让我分析，我会从...角度入手"）\n3. 关联已知（"这可能和...知识点有关"）\n\n## 突发情况\n\n- 问题太简单：不要得意忘形，展示深入思考\n- 专家质疑你：不要防御过强，理性讨论\n- 时间不够：挑最核心的1-2点说清楚`,
  },
]
```

---

## 十二、内容流转与数据归属

> 整合：所有模块的数据写入位置 → 展示位置 → 生命周期。

| 内容来源 | 写入位置 | 展示页面 |
|:---|:---|:---|
| 内容团队填充 M01-M42 | `src/data/physics/models/M{num}.ts` | 模型详情页 |
| 内容团队填充 R01-R90 | `src/data/physics/routines/R{num}.ts` | 套路详情页 |
| 内容团队填充 V01-V10 | `src/data/physics/visionStories.ts` | 物理视界 |
| 内容团队填充 P01-P05 | `src/data/gaokao/policies.ts` | 高考政策 |
| 内容团队填充 A01-A06 | `src/data/gaokao/admission.ts` | 升学参考 |
| 内容团队填充 FP01-FP07 | `src/data/foundation/policies.ts` | 强基政策 |
| 内容团队填充 FI01-FI04 | `src/data/foundation/interviews.ts` | 强基面试 |
| 用户练习答题 | Supabase `question_history` | 学习报告 |
| 用户收藏模型 | Supabase `favorites` | 收藏夹 |
| 用户错题 | Supabase `wrong_questions` | 错题本 |
| 用户自评理解度 | Zustand localStorage | 模型详情页（理解度标签）|

---

## 十三、六科指南页规范

> **定位**：每个学科的入口页面，帮助学生快速了解该学科的学习方法和框架。
> **状态**：✅ 物理/化学/数学/生物/语文/英语均已上线。

### 13.1 统一5段式模板

所有学科指南页均采用相同结构：

```
Why（为什么学）→ 四维（四个能力维度）→ 四界（四个认知境界）→ 四习惯（四个学习习惯）→ 学科与你（与你的连接）
```

### 13.2 各学科颜色主题

| 学科 | 路由 | 颜色 | 图标 |
|:---|:---|:---|:---|
| 物理 | `/physics/guide` | blue | Atom |
| 化学 | `/chemistry` | green | Atom |
| 数学 | `/math` | violet | Sigma |
| 生物 | `/biology` | green/emerald | Dna |
| 语文 | `/chinese` | red/rose | Pencil |
| 英语 | `/english` | cyan/blue | Globe |

### 13.3 导航集成

`nav-data.ts` 中 subjects 数组均已设置 `available: true`，`useCurrentSubject()` hook 识别各学科路径，`getSubjectModules()` 按科返回对应模块列表。移动端侧边栏调用 `getSubjectModules()` 动态生成，不再硬编码。

---

## 十四、学习工具模块规范

> **定位**：帮助学生进行自我诊断、学习规划和方法改进的独立工具模块。
> **状态**：✅ 诊断/规划/方法三页已上线。

### 14.1 模块列表

| 路由 | 组件 | 数据文件 | 说明 |
|:---|:---|:---|:---|
| `/diagnosis` | DiagnosisPage | `src/data/tools/diagnosis.ts` | 学科选择 → 答题 → 评级 → 薄弱点分析 |
| `/planner` | PlannerPage | `src/data/tools/planner.ts` | 年级选择 → 目标 → 三年里程碑时间线 |
| `/methods` | MethodsPage | `src/data/tools/methods.ts` | 五法卡片（费曼/间隔重复/检索练习/联想链接/主动学习）|

### 14.2 诊断工具（DiagnosisPage）

- 学科选择 → 答题（多选） → 评级（A/B/C/D）→ 薄弱点分析 → 推荐跳转
- 诊断结果和历史记录存储于 localStorage

### 14.3 规划工具（PlannerPage）

- 年级选择 → 目标选择（高考/强基/竞赛）→ 三年里程碑时间线 + 目标分解
- 跳转到具体学科模块

### 14.4 方法工具（MethodsPage）

五法卡片：费曼技巧 / 间隔重复 / 检索练习 / 联想链接 / 主动学习
每个方法可展开，含步骤、场景、实例、自评量表；自评结果存 localStorage。

---

## 十五、竞赛内容模块规范

> **定位**：覆盖物理/化学/数学/生物/信息五大学科竞赛的备考内容。
> **状态**：✅ 五科路由全部注册，数据部分就绪。

### 15.1 路由结构

```
/competition                    ← 竞赛首页（入口）
/competition/physics            ← 物理竞赛（CPHO/决赛）
/competition/math               ← 数学竞赛（CMO）
/competition/chemistry          ← 化学竞赛（CChO）
/competition/biology             ← 生物竞赛（CBO）
/competition/cs                  ← 信息竞赛（NOIP）
```

全部路由走 `CompetitionPages` 组件（懒加载，共享 chunk）。

### 15.2 数据文件

| 学科 | 数据文件 | 状态 |
|:---|:---|:---:|
| 数学 | `src/data/competition/math.ts`（CMO） | contentStatus: 'partial' |
| 化学 | `src/data/competition/chemistry.ts`（CChO） | contentStatus: 'partial' |
| 生物 | `src/data/competition/biology.ts`（CBO） | contentStatus: 'partial' |
| 信息 | `src/data/competition/cs.ts`（NOIP） | contentStatus: 'partial' |

---

## 十六、初高中衔接专区规范

> **定位**：帮助初三升高一学生完成初高中过渡，提供暑假规划和各科衔接指导。
> **状态**：✅ 已上线。

### 16.1 路由与文件

- 路由：`/transition`
- 组件：`src/sections/transition/TransitionZoneHome.tsx`
- 数据文件：`src/data/transition/policy.ts`

### 16.2 四个Tab

| Tab | 内容 |
|:---|:---|
| 暑假计划 | 8周时间线 |
| 六科衔接 | 可展开科目切换 |
| 高中适应 | 高一5阶段时间线 + 6个坑 |
| 容错方案 | 6种偏差可展开卡片 |

### 16.3 导航入口

`nav-data.ts` subjects 数组添加 `id: 'transition'`，琥珀色主题。

---

## 十七、团队分工与内容交接规范

> **版本**：v2.0（2026-04-26 确认）

### 17.1 当前团队分工

| 角色 | 职责 |
|:---|:---|
| 网站AI（我） | 只负责编码，不负责内容生成 |
| 项目经理AI | 定规范、定模板、定标准，确保内容能和网站对接 |
| 内容AI | 负责内容生成 |

### 17.2 内容交接区（docs/）

内容方生成好的内容文档拷贝到 `docs/` 目录，作为网站页面开发的蓝本：

```
docs/
├── subjects/          ← 7份学科指南 + 物理模型模板
├── zones/             ← 高考/强基/竞赛/衔接规划
├── tools/             ← 学习方法/诊断/规划/路径
├── cross-cutting/     ← 跨学科网络/知识转化/压轴题
├── architecture/      ← 规格书/框架/题库架构/开发标准
└── references/        ← 竞品参考(brilliant/khan/studynotion)
```

### 17.3 内容命名约定

- **解题套路 = 分析范式**：网站 UI 统一显示"分析范式"
- **底层数据字段**：仍用 `Paradigm`，文件名/路由仍用 `paradigms`，避免大规模重构

---

## 十八、知识节点页（ConceptPage）规范

> **定位**：认知图谱的底层知识节点页，5段式结构。
> **状态**：✅ 已实现，P01 有完整内容，P02-P56 为"内容整理中"。

### 18.1 5段式结构

```
前置检测 → 叙事正文（6段）→ 分层变形 → 公式卡片 → 理解度自评
```

### 18.2 数据文件

- 类型定义：`src/data/physics/concepts/types.ts`
- 示例数据：`src/data/physics/concepts/P01_加速度.ts`
- 索引文件：`src/data/physics/concepts/index.ts`（P01-P56 完整列表）

### 18.3 路由

- `/physics/concepts` — 知识节点列表页
- `/physics/concepts/:conceptId` — 知识节点详情页

### 18.4 K01-K56 七大板块

| 板块 | 节点数 | 编号 |
|:---|:---:|:---|
| 板块1：运动学 | 6个 | K01-K06 |
| 板块2：力学 | 6个 | K07-K12 |
| 板块3：曲线运动与万有引力 | 6个 | K13-K18 |
| 板块4：能量与动量 | 9个 | K19-K27 |
| 板块5：电磁学 | 17个 | K28-K44 |
| 板块6：热学·光学·机械波 | 8个 | K45-K52 |
| 板块7：近代物理 | 4个 | K53-K56 |
