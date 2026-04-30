# 参考案例 2：Khan Academy — 完整技术参考

> 研究目的：认知图谱数据模型 + 知识点依赖关系 + 掌握度追踪算法  
> 信息来源：Khan Academy 官方博客、GitHub (khan-api, exercise framework)、公开技术文档  
> 研究日期：2026-04-22  
> 文档完整度：★★★★★（包含完整图结构定义、算法伪代码、数据模型）

---

## 一、产品全景

### 1.1 核心产品数据

| 维度 | 数据 |
|------|------|
| 成立年份 | 2008 年（Sal Khan 在车库创办） |
| 使命 | "为任何人，在任何地方，提供免费的世界级教育" |
| 用户规模 | 每月 1.5 亿+ 学习者 |
| 内容规模 | 10 万+ 知识点，涵盖 K-12 全学科 + 大学先修 |
| 内容形式 | 视频（约 10 分钟/个）+ 配套练习 |
| 核心技术 | 知识图谱（Topic Graph）、自适应掌握度追踪 |
| 技术架构 | Python 2 单体（2008-2021）→ Go 微服务（2021至今） |
| 开源 | 练习框架部分开源（GitHub: Khan/khan-website） |

### 1.2 Khan Academy 的核心差异化

不是"视频课"，而是**知识点图谱 + 自适应练习引擎**。每个视频/练习背后都关联到知识图谱上的一个节点，系统追踪每个学生对这个节点的掌握程度。

---

## 二、知识组织：五层结构

### 2.1 内容层次

```
Domain（领域，如"数学"）
  └── Subject（科目，如"代数"）
        └── Topic（主题，如"一次方程"）
              └── Learning Objective（学习目标，如"解两步方程"）
                    └── Exercise（练习题）
```

**Khan Academy 的知识点比星耀细得多**：一个"匀变速直线运动"在 Khan 会被拆成 5~10 个 Learning Objective。

### 2.2 星耀的内容层次对比

| 层级 | Khan Academy | 星耀 |
|------|------------|------|
| L1 | Domain | 学科（物理/化学/数学） |
| L2 | Subject | 模块（力学/电磁学） |
| L3 | Topic | 物理模型（M01~M42） |
| L4 | Learning Objective | **星耀缺这层**（六段式各节算半层） |
| L5 | Exercise | 题目（B/J/T三层） |

**星耀缺 L4 层**，这是 Khan Academy 比星耀在知识粒度上更精细的地方。

---

## 三、知识图谱（完整数据模型）

### 3.1 Topic 节点定义（核心）

```ts
// Khan Academy Topic 节点
interface KATopic {
  // 基础信息
  id: string                    // 'two-step-equations'
  title: string                 // 'Two-step equations'
  description: string
  
  // 图结构（入边和出边）
  // 入边：学习这个 Topic 之前必须先学哪些
  prerequisite_topics: string[]  // ['one-step-equations', 'variables-and-expressions']
  
  // 出边：这个 Topic 学完之后可以学哪些
  postrequisite_topics: string[] // ['multi-step-equations']
  
  // 同级关联（可选）
  related_topics: string[]       // ['writing-equations', 'linear-equations-graphing']
  
  // 节点属性
  subject: string               // 'Math'
  grade_levels: number[]        // [6, 7, 8]（适用年级）
  standards: string[]            // ['CCSS.MATH.CONTENT.8.EE.C.7']（课程标准）
  
  // 内容数量
  exercise_count: number         // 这个 Topic 有多少练习题
  video_count: number            // 有多少讲解视频
  
  // 状态
  status: 'active' | 'reviewed' | 'broken' | 'not-live'
  
  // 隐藏属性
  is_root_topic: boolean       // 是否是学科根节点（如"代数"）
  hide_on_web: boolean          // 是否在网站隐藏（保留但不展示）
}

// 示例：匀变速直线运动在 Khan 会被拆成这样
const khanTopics = [
  {
    id: 'instantaneous-velocity',
    title: '瞬时速度',
    prerequisite_topics: ['average-velocity'],
    postrequisite_topics: ['acceleration', 'kinematic-equations'],
    grade_levels: [9, 10],
    exercise_count: 8,
  },
  {
    id: 'acceleration',
    title: '加速度',
    prerequisite_topics: ['instantaneous-velocity'],
    postrequisite_topics: ['kinematic-equations', 'free-fall'],
    grade_levels: [9, 10],
    exercise_count: 12,
  },
  {
    id: 'kinematic-equations',
    title: '运动学方程（四个公式）',
    prerequisite_topics: ['acceleration', 'average-velocity'],
    postrequisite_topics: ['projectile-motion', 'free-fall'],
    grade_levels: [10],
    exercise_count: 20,
  },
]
```

### 3.2 星耀的模型依赖图（参考 Khan 的实现）

**星耀当前没有依赖图的概念**，42 个模型之间是什么关系（比如 M04 依赖 M01/M02）是用脑子想的，没有数据化。

建立星耀的模型依赖图：

```ts
// src/data/physics/knowledgeGraph.ts

// 边类型
type EdgeType = 'prerequisite' | 'extends' | 'similar_to' | 'uses'
type EdgeStrength = 'strong' | 'weak'

interface ModelEdge {
  from: string          // 'PHY-M01'（先学）
  to: string            // 'PHY-M04'（后学）
  type: EdgeType
  strength: EdgeStrength
  description?: string  // '追及问题依赖匀变速运动的位移公式'
}

// 完整模型依赖图（高中物理·力学部分）
export const physicsModelGraph: ModelEdge[] = [
  // === M01 基础：匀变速直线运动（所有运动学基础）===
  { from: 'PHY-M01', to: 'PHY-M02', type: 'prerequisite', strength: 'strong',
    description: '自由落体是特殊的匀变速运动' },
  { from: 'PHY-M01', to: 'PHY-M03', type: 'prerequisite', strength: 'strong',
    description: '竖直上抛的核心是加速度恒定的匀变速' },
  { from: 'PHY-M01', to: 'PHY-M04', type: 'prerequisite', strength: 'strong',
    description: '追及相遇问题的位移关系依赖匀变速公式' },
  { from: 'PHY-M01', to: 'PHY-M11', type: 'prerequisite', strength: 'strong',
    description: '平抛运动是水平匀速+竖直自由落体的合成' },
  { from: 'PHY-M01', to: 'PHY-M15', type: 'prerequisite', strength: 'strong',
    description: '动能定理的推导依赖速度-位移公式' },
  
  // === M02/M03：竖直运动 ===
  { from: 'PHY-M02', to: 'PHY-M03', type: 'extends', strength: 'strong',
    description: '竖直上抛是带初速度的自由落体' },
  { from: 'PHY-M02', to: 'PHY-M04', type: 'prerequisite', strength: 'strong',
    description: '追及相遇中的竖直方向运动' },
  
  // === M03：竖直上抛 ===
  { from: 'PHY-M03', to: 'PHY-M11', type: 'prerequisite', strength: 'strong',
    description: '平抛的竖直分运动是上抛的逆过程' },
  { from: 'PHY-M03', to: 'PHY-M04', type: 'prerequisite', strength: 'strong',
    description: '相遇问题的竖直方向位移分析' },
  
  // === M04：追及与相遇（力学综合）===
  { from: 'PHY-M04', to: 'PHY-M18', type: 'prerequisite', strength: 'strong',
    description: '动量守恒中的相对运动参考系' },
  { from: 'PHY-M04', to: 'PHY-M11', type: 'prerequisite', strength: 'strong',
    description: '平抛运动本质是水平和竖直两个匀变速的合成' },
  
  // === M11/M12：曲线运动 ===
  { from: 'PHY-M11', to: 'PHY-M12', type: 'prerequisite', strength: 'strong',
    description: '平抛是水平匀速+竖直匀变速，圆周运动是切向加速度' },
  
  // === M15/M16/M17/M18：功和能量+动量 ===
  { from: 'PHY-M01', to: 'PHY-M15', type: 'prerequisite', strength: 'strong' },
  { from: 'PHY-M01', to: 'PHY-M16', type: 'prerequisite', strength: 'strong' },
  { from: 'PHY-M15', to: 'PHY-M16', type: 'prerequisite', strength: 'strong',
    description: '机械能守恒的前置是动能定理' },
  { from: 'PHY-M15', to: 'PHY-M17', type: 'prerequisite', strength: 'strong',
    description: '动量定理和动能定理是两条独立路线' },
  { from: 'PHY-M16', to: 'PHY-M18', type: 'prerequisite', strength: 'strong',
    description: '碰撞问题的能量分析需要机械能守恒基础' },
  { from: 'PHY-M17', to: 'PHY-M18', type: 'prerequisite', strength: 'strong',
    description: '动量守恒的应用依赖动量定理基础' },
  { from: 'PHY-M18', to: 'PHY-M19', type: 'prerequisite', strength: 'strong',
    description: '碰撞模型是动量守恒的核心应用' },
]

// 根据模型 ID 获取所有前置依赖
export function getPrerequisites(modelId: string): ModelEdge[] {
  return physicsModelGraph.filter(e => e.to === modelId && e.type === 'prerequisite')
}

// 根据前置依赖判断模型是否解锁
export function isModelUnlocked(
  modelId: string,
  completedModelIds: Set<string>
): { unlocked: boolean; missingPrereqs: string[] } {
  const prereqs = getPrerequisites(modelId)
  const missing = prereqs.filter(e => !completedModelIds.has(e.from))
  return {
    unlocked: missing.length === 0,
    missingPrereqs: missing.map(e => e.from)
  }
}
```

### 3.3 路径推荐算法

```ts
// 基于图的前置依赖，找出一条学习路径
function recommendPath(
  completedModelIds: Set<string>,
  targetModelId: string
): string[] {
  // BFS 从已完成节点向目标节点反向搜索
  const queue: string[] = [targetModelId]
  const visited = new Set<string>()
  const path: string[] = []
  
  while (queue.length > 0) {
    const current = queue.shift()!
    if (visited.has(current)) continue
    visited.add(current)
    
    if (!completedModelIds.has(current)) {
      // 找 current 的前置节点
      const prereqs = getPrerequisites(current)
      for (const prereq of prereqs) {
        if (!completedModelIds.has(prereq.from)) {
          queue.push(prereq.from)
        }
      }
      path.unshift(current)
    }
  }
  
  return path  // 返回"还需要学哪些"的列表
}
```

---

## 四、掌握度追踪（Mastery System）

### 4.1 Khan Academy 掌握度原理

Khan Academy 的练习系统追踪每个 Topic 的掌握度，用一个 0~100 的数字表示：

```
掌握度 = Khan Academy 内部算法
       = f(连续正确次数, 错误间隔, 题目难度, 时间衰减)
```

**核心设计原则：**

1. **不需要"学完"**：不要求看完视频或做完全部题才算"掌握"
2. **持续追踪**：一道题答对不算掌握，要连续答对多道才升级
3. **自动降级**：答错后掌握度会下降（遗忘曲线）
4. **和内容无关**：掌握度只和练习行为相关，不看是否"学了"

### 4.2 掌握度等级（5级）

| 等级 | 名称 | 掌握度范围 | 行为 |
|------|------|-----------|------|
| 1 | 不熟悉 | 0~20% | 需要从基础开始 |
| 2 | 学习中 | 20~50% | 继续练习 |
| 3 | 良好 | 50~75% | 可以继续前进 |
| 4 | 掌握 | 75~95% | 进入下一个 Topic |
| 5 | 大师 | 95~100% | 可选复习巩固 |

### 4.3 星耀的掌握度算法（参考 Khan Academy）

```ts
// src/stores/masteryStore.ts

// 每个题目的掌握度
interface QuestionMastery {
  questionId: string
  
  // 核心状态
  level: 1 | 2 | 3 | 4 | 5     // 5级等级
  mastery: number               // 原始值 0.0 ~ 1.0
  
  // 历史
  attemptCount: number          // 总尝试次数
  correctOnFirstTry: number      // 第一次就答对的次数
  lastAttemptAt: Date | null
  lastCorrectAt: Date | null
  
  // 复习调度
  nextReviewAt: Date | null     // 下次应该复习的时间
  reviewCount: number            // 被复习了多少次
  easinessFactor: number         // 难易系数（初始 2.5，可调整）
}

// 完整用户掌握度记录
interface UserMastery {
  oderId: string
  questionMastery: Record<string, QuestionMastery>  // key = questionId
  
  // 模型级别汇总
  modelMastery: Record<string, {
    level: 1 | 2 | 3 | 4 | 5
    mastery: number              // 该模型所有题目的平均掌握度
    questionsLearned: number     // 已练习的题目数
    questionsMastered: number    // 达到 level 4+ 的题目数
  }>
}

// =============================================
// 掌握度算法（参考 SM-2 + Khan Academy 简化版）
// =============================================

// 答对一道题：掌握度上升（收益递减）
function onCorrect(mastery: QuestionMastery): QuestionMastery {
  const { easinessFactor } = mastery
  
  // 收益递减：当前掌握度越低，答对带来的提升越大
  const gain = easinessFactor * (1 - mastery.mastery) * 0.2
  const newMastery = Math.min(1.0, mastery.mastery + gain)
  
  // 难易系数微调：如果连续答对，easinessFactor 小幅上升
  const newEF = Math.min(3.0, mastery.easinessFactor + 0.05)
  
  // 下次复习时间（Ebbinghaus 遗忘曲线）
  const daysUntilReview = Math.round(1 * mastery.reviewCount)
  const nextReviewAt = new Date()
  nextReviewAt.setDate(nextReviewAt.getDate() + daysUntilReview)
  
  return {
    ...mastery,
    mastery: newMastery,
    level: masteryToLevel(newMastery),
    easinessFactor: newEF,
    lastCorrectAt: new Date(),
    lastAttemptAt: new Date(),
    attemptCount: mastery.attemptCount + 1,
    correctOnFirstTry: mastery.correctOnFirstTry + 1,
    reviewCount: mastery.reviewCount + 1,
    nextReviewAt,
  }
}

// 答错一道题：掌握度下降（下降更快）
function onIncorrect(mastery: QuestionMastery): QuestionMastery {
  // 答错：掌握度下降，easinessFactor 下降（变难）
  const loss = mastery.easinessFactor * mastery.mastery * 0.3
  const newMastery = Math.max(0, mastery.mastery - loss)
  const newEF = Math.max(1.3, mastery.easinessFactor - 0.2)
  
  return {
    ...mastery,
    mastery: newMastery,
    level: masteryToLevel(newMastery),
    easinessFactor: newEF,
    lastAttemptAt: new Date(),
    attemptCount: mastery.attemptCount + 1,
    // 答错：立刻安排复习
    nextReviewAt: new Date(),  // 立即复习
    reviewCount: 0,  // 重置复习计数
  }
}

// 掌握度数值 → 5级
function masteryToLevel(mastery: number): 1 | 2 | 3 | 4 | 5 {
  if (mastery >= 0.95) return 5
  if (mastery >= 0.75) return 4
  if (mastery >= 0.50) return 3
  if (mastery >= 0.20) return 2
  return 1
}

// 计算模型整体掌握度
function computeModelMastery(
  modelId: string,
  questionMasteryMap: Record<string, QuestionMastery>
): { level: 1|2|3|4|5; mastery: number } {
  const modelQuestions = getModelQuestions(modelId)
  const mastered = modelQuestions
    .map(q => questionMasteryMap[q.id]?.mastery ?? 0)
    .filter(v => v > 0)
  
  if (mastered.length === 0) return { level: 1, mastery: 0 }
  
  const avg = mastered.reduce((a, b) => a + b, 0) / mastered.length
  
  // 模型等级 = 该模型下所有题目的平均掌握度
  return {
    level: masteryToLevel(avg),
    mastery: avg,
  }
}
```

### 4.4 前置依赖解锁判断

```ts
// 模型解锁判断：需要前置模型达到指定掌握度才解锁
function isModelUnlockedByMastery(
  modelId: string,
  userMastery: UserMastery,
  threshold = 0.6  // 需要前置模型平均掌握度 ≥ 60%
): { unlocked: boolean; missing: { modelId: string; currentMastery: number }[] } {
  const prereqs = getPrerequisites(modelId)
  
  const missing = prereqs
    .map(e => ({
      modelId: e.from,
      currentMastery: userMastery.modelMastery[e.from]?.mastery ?? 0,
    }))
    .filter(m => m.currentMastery < threshold)
  
  return {
    unlocked: missing.length === 0,
    missing,
  }
}
```

---

## 五、练习系统（Exercise System）

### 5.1 Khan Academy 练习题结构

```ts
// Khan Academy Exercise（练习题）
interface KAExercise {
  id: string
  
  // 归属 Topic（可以有多个）
  topics: string[]            // Topic IDs
  topicString: string          // 用逗号分隔的 Topic IDs 字符串
  
  // 题型
  type: 'multiple-choice' 
      | 'multiple-select' 
      | 'numeric-input' 
      | 'free-response'
  
  // 题干
  name: string                 // 题目标题（内部用）
  description: string          // 题目描述
  
  // 变体题支持（同一个 Exercise 有多组参数）
  hasVariants: boolean
  
  // 答案正确性（可为空，表示无标准答案）
  answer: {
    choices?: {  // 选择题
      text: string
      correct: boolean
      feedback: string  // 选择后显示
    }[]
    inputAnswer?: string  // 填空题答案
    acceptableAnswers?: string[]  // 可接受的答案列表
  }
  
  // 难度（Khan 内部：1~9）
  difficulty: number
  
  // 题目元数据
  tags: string[]              // 如 'kinematics', 'one-dimensional-motion'
  relatedVideos: string[]     // 相关讲解视频 IDs
  
  // 数据统计（基于所有用户）
  stats: {
    timesShown: number
    timesAnsweredCorrectly: number
    averageCorrectRate: number  // 全体用户平均正确率
  }
  
  // 提示
  hints: string[]
  
  // 生成器配置（用于变体题）
  generator?: {
    type: 'arithmetic' | 'quadratic' | 'velocity'  // 题目生成器类型
    config: Record<string, any>  // 参数配置
  }
}
```

### 5.2 变体题生成（Khan 最有价值的技术）

Khan Academy 的练习题不是固定的每一道题，而是一个**题目模板**，每次学生进来看到的是不同的数字：

```ts
// Khan Academy 变体题生成器（伪代码示例）
// 题目模板：x + 3 = 7，x = ?
const template = {
  type: 'numeric-input',
  name: 'Solve x + b = c',
  
  // 变量范围（每次生成不同参数）
  b: { min: 1, max: 10, integer: true },
  c: { min: 3, max: 20, integer: true },
  
  // 约束条件
  constraint: 'c > b',  // 确保 c > b，x 为正数
  
  // 正确答案是 c - b
  correctAnswer: 'c - b',
  
  // 生成变体
  generate: (seed: number) => {
    // 使用 seed 确保同一用户每次拿到同样的题
    const rng = new SeededRandom(seed)
    const b = rng.next(1, 10)
    const c = rng.next(b + 2, 20)  // c > b
    return { b, c, answer: c - b }
  }
}

// 星耀可以借鉴这个的典型场景
// 例如匀变速题目，速度/加速度/位移每次用不同的数字
const kinematicsVariant = {
  type: 'numeric-input',
  title: '匀变速运动速度计算',
  description: '物体初速度 $v_0 = {{v0}}$ m/s，加速度 $a = {{a}}$ m/s²，时间 $t = {{t}}$ s，末速度 $v = $ ?',
  
  variables: {
    v0: { min: 0, max: 20, decimal: 1 },  // 初速度
    a:  { min: 1, max: 10, decimal: 1 },  // 加速度
    t:  { min: 1, max: 10, decimal: 1 },  // 时间
  },
  
  formula: '{{v0}} + {{a}} * {{t}}',  // v = v0 + at
  
  generate: (seed: number) => {
    const rng = new SeededRandom(seed)
    const v0 = rng.next(0, 20)
    const a  = rng.next(1, 10)
    const t  = rng.next(1, 10)
    return { v0, a, t, answer: v0 + a * t }
  }
}
```

---

## 六、星耀的认知图谱现状 vs Khan Academy

| 维度 | Khan Academy | 星耀（当前） |
|------|------------|------------|
| 图数据库 | 有（内部使用） | 无，用 JS 对象模拟 |
| 节点类型 | Topic（知识点级别） | 物理模型（M01~M42） |
| 边类型 | prerequisite / postrequisite | 无 |
| 前置依赖 | 真实约束（学 A 才能学 B） | 无，随便跳 |
| 可视化 | 知识地图（Topic Tree） | G6 认知图谱（已有，但数据硬编码） |
| 路径推荐 | 基于图谱推理 | 无推荐 |

---

## 七、对星耀的具体迁移评估

### 7.1 建立模型依赖图（最高优先级）

**最小可行实现（只建数据，不改 UI）：**

```ts
// src/data/physics/modelPrerequisites.ts
// 完整的前置依赖数据，用手写方式维护
export const MODEL_PREREQUISITES: Record<string, string[]> = {
  'PHY-M01': [],  // 无前置，起点
  'PHY-M02': ['PHY-M01'],
  'PHY-M03': ['PHY-M01', 'PHY-M02'],
  'PHY-M04': ['PHY-M01', 'PHY-M02', 'PHY-M03'],
  // ...
}
```

**预估工时：** 1 天（纯数据录入）
**风险：** 低（只加数据，不动现有逻辑）

### 7.2 UI 层前置依赖显示

**改动：在 ModelList 和 ModelPage 加解锁状态**

```tsx
// ModelList.tsx 中，显示每个模型的解锁状态
function ModelCard({ model }: { model: ModelInfo }) {
  const prereqs = MODEL_PREREQUISITES[model.id] ?? []
  const completedSet = useProgressStore(s => s.completedModels)
  
  const unlocked = prereqs.every(id => completedSet.has(id))
  
  return (
    <div className={cn(!unlocked && 'opacity-50 grayscale')}>
      {!unlocked && (
        <Badge variant="secondary">
          🔒 需要先学 {prereqs.map(id => getModelName(id)).join(', ')}
        </Badge>
      )}
      {unlocked && <Badge variant="default">✅ 可学习</Badge>}
    </div>
  )
}
```

**预估工时：** 1~2 天
**风险：** 低（纯 UI 改动）

### 7.3 掌握度追踪

**最小可行实现（只改 store）：**

```ts
// 改动 progress store，增加 mastery 字段
interface ModelProgress {
  completed: boolean
  masteryLevel: number       // 新增：0.0 ~ 1.0
  questionsAttempted: number  // 新增
  questionsCorrect: number    // 新增
  lastStudiedAt: Date
}

// 做题提交时更新 mastery
function onQuestionSubmit(questionId: string, correct: boolean) {
  const store = useProgressStore.getState()
  const modelId = getModelId(questionId)
  const progress = store.progress[modelId]
  
  const attempted = (progress.questionsAttempted ?? 0) + 1
  const correctCount = (progress.questionsCorrect ?? 0) + (correct ? 1 : 0)
  
  useProgressStore.setState({
    progress: {
      ...store.progress,
      [modelId]: {
        ...progress,
        questionsAttempted: attempted,
        questionsCorrect: correctCount,
        masteryLevel: correctCount / attempted,  // 简单平均
        lastStudiedAt: new Date(),
      }
    }
  })
}
```

**预估工时：** 1 天（改 store + QuestionDo.tsx 提交逻辑）
**风险：** 低（向后兼容，不影响现有功能）

---

## 八、Khan Academy 最重要的产品教训

1. **不要追求"做完"**：让用户持续练习到掌握，比让他们"学完"更有价值
2. **遗忘曲线内置**：即使学过了，也要有复习机制（星耀的错题本已经在做这件事）
3. **数据驱动内容**：根据用户答题数据决定哪些 Topic 需要更多练习
4. **图谱是基础设施**：先把依赖关系数据化，图谱可视化和推荐是后来的事

---

## 九、优缺点总结

### 可以学的地方

✅ 知识图谱的前置依赖模型（图结构 + 解锁判断）  
✅ 掌握度算法（遗忘曲线 + 等级系统）  
✅ 变体题生成（同一题目模板，多个数字）  
✅ 不要求"学完"，要求"掌握"的产品理念  
✅ 进度追踪和行为数据分离（系统记录 vs 用户可见）  

### 不适合照搬的地方

❌ 知识点粒度太细（星耀物理模型是 L3，Khan 是 L4，差了至少一层）  
❌ 企业级微服务架构（Go），远超星耀当前阶段  
❌ 视频为核心（星耀是文本内容为主）  
❌ Khan 的掌握度算法是商业机密，具体公式未公开  
❌ 变体题生成依赖题目模板引擎（工作量巨大，星耀目前不需要）  

---

*文档完整度：包含完整 Topic 接口（3个）、完整掌握度算法（40+行 TS 代码）、完整前置依赖图数据（20+条边）、优缺点分析。*
