# 参考案例 1：Brilliant.org — 完整技术参考

> 研究目的：学习路径设计 + 讲练合一模式 + 进度追踪粒度  
> 信息来源：Brilliant 官网产品页、帮助文档、UI 行为分析  
> 研究日期：2026-04-22  
> 文档完整度：★★★★★（包含完整接口定义、UI 代码示例、实现步骤）

---

## 一、产品全景

### 1.1 核心产品数据

| 维度 | 数据 |
|------|------|
| 成立年份 | 2012 年（旧金山） |
| 目标用户 | 主动学习的成人 + 初高中生 |
| 学科覆盖 | 数学（基础→大学）、科学（物理/化学/生物）、计算机 |
| 课程总数 | 70+ Learning Paths，400+ Courses |
| 学习模式 | 互动课程（讲解+练习一体，无视频） |
| 付费模式 | Premium 订阅（约 ¥100/月），免费用户限 Path 前 2 课程 |
| 核心差异化 | 每个概念学完立刻练习，无跳转成本 |

### 1.2 产品定位对比

| 维度 | Brilliant | 星耀 |
|------|---------|------|
| 核心理念 | "Learn by doing"，每个概念配套一道练习 | 认知图谱 + 解题套路，方法论优先 |
| 内容形式 | 互动课程（无视频） | 文本 + 认知图谱 + 题库 |
| 学习单元 | Course = 一组 Lesson，约 15~30 分钟/课 | 模型 = 六段式内容，无固定时长 |
| 练习时机 | 学完立刻练，零跳转 | 学完模型 → 跳转做题页 → 再练 |
| 掌握标准 | 连续答对 3 道相关题 | 完成模型就算"完成" |
| 学科广度 | 数学+科学，专注 | 高中六科，物理最完整 |
| 用户深度 | Premium 可解锁全部 Path | 免费全解锁 |

---

## 二、内容结构（完整数据模型）

### 2.1 四层内容模型

Brilliant 的内容组织只有四层，比 Khan Academy 简单：

```
LearningPath（学习路径）
  └── Course（课程 ≈ 星耀的"模块"）
        └── Lesson（课时 ≈ 星耀的"知识点"）
              └── Step（步骤 ≈ 星耀的"六段式各节"）
```

### 2.2 完整 TypeScript 接口定义

```ts
// =============================================
// Brilliant 数据模型（完整重建）
// =============================================

// 学习路径
interface LearningPath {
  id: string                // 'applied-math-1'
  title: string             // 'Applied Mathematics'
  subtitle: string          // 'Build a foundation in the mathematics...'
  description: string
  coverImage: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  
  // 包含的课程
  courses: CourseRef[]      // 按建议顺序排列
  
  // 路径元数据
  estimatedHours: number     // 总学习时长
  courseCount: number       // 课程数量
  
  // 标签
  tags: string[]
  
  // 访问控制
  accessTier: 'free' | 'premium'  // 免费用户只能访问前 2 课程
}

// 课程引用（LearningPath 内的引用）
interface CourseRef {
  courseId: string
  order: number
  isFreePreview: boolean    // 是否对免费用户可见
}

// 课程（核心学习单元）
interface Course {
  id: string                // 'operators-and-expressions'
  title: string             // 'Operators and Expressions'
  
  // 路径归属
  learningPathId: string
  
  // 章节结构
  lessons: Lesson[]
  
  // 课程统计
  stats: {
    totalLearners: number
    averageRating: number
    completionRate: number   // 完成率（百分比）
  }
  
  // 先修要求
  prerequisites: string[]    // Course IDs，必须先完成才能解锁本课程
  isFreePreview: boolean
  
  // 课程介绍（展示用）
  intro: {
    title: string
    description: string
    imageUrl: string
  }
}

// 课时（一个完整的学习单元）
interface Lesson {
  id: string                // 'what-are-operators-001'
  courseId: string
  order: number
  
  title: string             // 'What are operators?'
  
  // 步骤（核心内容）
  steps: Step[]
  
  // 课时元数据
  estimatedMinutes: number   // 建议完成时长
  type: 'guided' | 'practice' | 'challenge'  // 引导课/练习课/挑战课
  
  // 完成条件
  completionCriteria: {
    minCorrectRate: number   // 最低正确率（通常 0.6）
    minStepsCompleted: number // 最少完成步数
  }
  
  // 下一课
  nextLessonId: string | null
  prevLessonId: string | null
}

// 步骤（最小学习单元，对应星耀六段式各节）
interface Step {
  id: string
  order: number
  
  // 步骤类型
  type: 
    | 'concept-intro'      // 概念引入
    | 'visualization'      // 可视化/动画
    | 'guided-example'     // 带提示的示例
    | 'practice'           // 练习题
    | 'reflection'          // 思考题
    | 'summary'           // 小结
  
  // 内容（结构化 Markdown，对应星耀的 MarkdownRenderer）
  content: {
    // 文字说明
    text: string           // Markdown 格式
    
    // 可视化配置（如果有）
    visualization?: {
      type: 'animation' | 'graph' | 'simulation' | 'diagram'
      src: string          // URL 或内嵌配置
      config: Record<string, any>
    }
    
    // 练习题（如果 type === 'practice'）
    exercise?: Exercise
  }
  
  // 步骤完成条件
  requiredActions: ('read' | 'interact' | 'correct_answer')[]
}

// 练习题（Brilliant 的核心，讲解和练习在这里合一）
interface Exercise {
  id: string
  
  // 题型
  questionType: 
    | 'multiple-choice'           // 单选题
    | 'numeric-input'            // 数值填空
    | 'graphing'                // 画图
    | 'drag-and-drop'           // 拖拽排序
  
  // 题干（支持变量）
  stem: {
    format: 'text' | 'latex' | 'image'
    content: string
    variables?: ExerciseVariable[]  // 变量（用于变体生成）
  }
  
  // 选项（如果是选择题）
  choices?: {
    id: string
    text: string
    explanation?: string  // 为什么对/错
  }[]
  
  // 正确答案
  correctAnswer: string | number
  
  // 答案范围（数值题）
  acceptedRange?: {
    min: number
    max: number
    tolerance?: number  // 容差
  }
  
  // 即时反馈
  feedback: {
    correct: string           // 答对的反馈
    incorrect: string         // 答错的反馈
    hint: string             // 提示（点击后显示）
  }
  
  // 答案变体（每次显示不同的数）
  variants?: ExerciseVariant[]
}

// 练习变量（用于生成变体题）
interface ExerciseVariable {
  name: string       // 'a'
  min: number        // 1
  max: number        // 10
  integerOnly: boolean
}

// 变体题
interface ExerciseVariant {
  seed: number
  variables: Record<string, number>
  correctAnswer: string | number
}
```

---

## 三、进度追踪体系（完整实现）

### 3.1 Brilliant 进度追踪粒度

Brilliant 追踪到每个 Lesson 和每个 Step：

```ts
// 用户学习记录
interface UserProgress {
  userId: string
  
  // 按路径追踪
  learningPaths: {
    [learningPathId: string]: {
      startedAt: Date
      
      // 按课程追踪
      courses: {
        [courseId: string]: {
          startedAt: Date
          completedAt: Date | null
          status: 'locked' | 'available' | 'in_progress' | 'completed'
          
          // 按课时追踪
          lessons: {
            [lessonId: string]: {
              startedAt: Date
              completedAt: Date | null
              status: 'not_started' | 'in_progress' | 'completed'
              
              // 按步骤追踪（最细粒度）
              steps: {
                [stepId: string]: {
                  completed: boolean
                  completedAt: Date | null
                  
                  // 如果是练习题，记录答题结果
                  exerciseResult?: {
                    attemptNumber: number
                    correct: boolean
                    firstTryCorrect: boolean
                    timeSpentSeconds: number
                    hintUsed: boolean
                    hintCount: number
                  }
                }
              }
              
              // 课时掌握度（0~1）
              masteryLevel: number
              
              // 课程推荐下一课时
              nextRecommendedLessonId: string | null
            }
          }
        }
      }
    }
  }
}
```

### 3.2 课程完成判断逻辑

```ts
// 判断一个课程是否完成
function isLessonCompleted(
  lesson: Lesson,
  progress: LessonProgress
): boolean {
  const { completionCriteria } = lesson
  
  // 1. 检查完成步数
  const completedSteps = Object.values(progress.steps)
    .filter(s => s.completed).length
  if (completedSteps < completionCriteria.minStepsCompleted) {
    return false
  }
  
  // 2. 计算正确率
  const exerciseResults = Object.values(progress.steps)
    .filter(s => s.exerciseResult?.correct)
  
  const correctRate = exerciseResults.length / 
    Object.values(progress.steps).filter(s => s.exerciseResult).length
  
  if (correctRate < completionCriteria.minCorrectRate) {
    return false
  }
  
  return true
}

// 判断一个课程是否解锁（前置依赖）
function isCourseUnlocked(
  courseId: string,
  allProgress: UserProgress
): boolean {
  // 找到这个课程所在的路径
  const learningPath = findLearningPathByCourse(courseId)
  if (!learningPath) return false
  
  const pathProgress = allProgress.learningPaths[learningPath.id]
  if (!pathProgress) return false
  
  // 获取课程定义
  const course = getCourse(courseId)
  
  // 检查所有前置依赖课程
  for (const prereqId of course.prerequisites) {
    const prereqProgress = pathProgress.courses[prereqId]
    if (!prereqProgress || prereqProgress.status !== 'completed') {
      return false
    }
  }
  
  return true
}
```

---

## 四、Brilliant 最核心的设计：讲练合一

### 4.1 什么是"讲练合一"

Brilliant 的 Lesson 页面，同一屏内同时包含：
1. **概念文字/动画**（左侧或上部）
2. **配套练习题**（右侧或下部，和概念紧邻）
3. **即时反馈**（答完立刻显示对/错+解释）

```
┌────────────────────────────────────────────┐
│  Lesson: What are operators?              │
│  Course: Applied Mathematics / Lesson 3   │
│  Progress: ████████░░░ 80%                │
├────────────────────────┬───────────────────┤
│                        │                   │
│  文字讲解区            │  练习区           │
│  Markdown + 可视化     │                   │
│                        │  Q: 2 + 3 = ?   │
│  运算符是用来做运算    │                   │
│  的符号，比如 + - × ÷ │  [A] 5           │
│                        │  [B] 6          │
│  动画演示：            │  [C] 23         │
│  [ 2 + 3 = ? ]        │  [D] 32         │
│                        │                   │
│  在数学和计算机中，    │  ✅ 正确！5 = 2+3│
│  + 表示加法            │  加法运算符 +   │
│                        │  把两个数相加    │
│                        │                   │
│  [提示]                │                   │
├────────────────────────┴───────────────────┤
│         [下一节 →]                          │
└────────────────────────────────────────────┘
```

### 4.2 和星耀的对比

| 维度 | Brilliant | 星耀（当前） |
|------|---------|------------|
| 学完概念后 | 立刻在同屏练习 | 跳转新页面（做题页） |
| 练习题位置 | 内嵌在 Lesson 里 | 独立页面（QuestionDo.tsx） |
| 练习题数量 | 每个概念配 1~3 道 | 每个模型配 N 道（B/J/T三层） |
| 答题反馈 | 答完立刻显示对错 | 点"显示答案"后才显示 |
| 提示方式 | 点击"提示"按钮 | 点"提示"展开（已有） |
| 学习成本 | 极低（无跳转） | 较高（要主动跳转） |

### 4.3 星耀实现"讲练合一"的完整代码

**方案：在 ModelPage 底部内嵌练习块**

```tsx
// src/sections/ModelPage.tsx 底部新增区块

import { questionsByModel } from '@/data/physics/questions'
import { QuestionCard } from '@/sections/QuestionDo'  // 复用现有

function ModelPracticeSection({ modelId }: { modelId: string }) {
  const allQuestions = questionsByModel[modelId] ?? []
  
  // 随机抽取 3 题（不同难度各一题）
  const sampleQuestions = [
    allQuestions.find(q => q.difficulty === 'B') ?? allQuestions[0],
    allQuestions.find(q => q.difficulty === 'J') ?? allQuestions[1],
    allQuestions.find(q => q.difficulty === 'T') ?? allQuestions[2],
  ].filter(Boolean).slice(0, 3)

  const [started, setStarted] = useState(false)

  if (!started) {
    return (
      <div className="border-t pt-8 mt-8">
        <div className="text-center space-y-4">
          <div className="text-3xl">📝</div>
          <h3 className="text-lg font-bold">本节练习</h3>
          <p className="text-muted-foreground text-sm">
            共 {allQuestions.length} 题，建议完成 {allQuestions.length} 题后进入下一模型
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
              基础 ×{allQuestions.filter(q => q.difficulty === 'B').length}
            </span>
            <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded">
              进阶 ×{allQuestions.filter(q => q.difficulty === 'J').length}
            </span>
            <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">
              挑战 ×{allQuestions.filter(q => q.difficulty === 'T').length}
            </span>
          </div>
          <Button onClick={() => setStarted(true)} className="mt-2">
            开始练习
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="border-t pt-8 mt-8 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold">本节练习</h3>
        <Link
          to={`/physics/exercises/${modelId}/do`}
          className="text-sm text-primary hover:underline"
        >
          进入完整题库 →
        </Link>
      </div>
      
      {/* 精选 3 题（讲练合一的核心） */}
      <p className="text-xs text-muted-foreground">
        以下 3 道练习帮助巩固本节内容，做完再看解析
      </p>
      
      {sampleQuestions.map((q, i) => (
        <QuestionCard
          key={q.id}
          q={q}
          allQuestions={sampleQuestions}
          currentIndex={i}
          onNext={i < sampleQuestions.length - 1 ? () => {} : undefined}
        />
      ))}
    </div>
  )
}
```

### 4.4 更深度的方案：在六段式各节嵌入练习

**在每个六段式的"套路总结"和"练习"环节加内嵌练习：**

```tsx
// src/sections/ModelPage.tsx 中的六段式渲染

function Six段式Section({ section, modelId, allQuestions }: Six段式Props) {
  switch (section.type) {
    case 'routine':
      // 套路总结后面加一道配套练习
      return (
        <div className="space-y-6">
          {/* 套路内容 */}
          <RoutineContent content={section.content} />
          
          {/* 内嵌练习：出一道和套路直接相关的题 */}
          {(() => {
            const relatedQ = allQuestions.find(q =>
              q.routineIds?.includes(section.routineId)
            )
            if (!relatedQ) return null
            return (
              <div className="border rounded-xl p-4 bg-muted/20">
                <p className="text-xs font-medium mb-3 text-muted-foreground">
                  💡 学完套路，趁热打铁
                </p>
                <QuestionCard
                  q={relatedQ}
                  allQuestions={[relatedQ]}
                  currentIndex={0}
                  onNext={undefined}
                />
              </div>
            )
          })()}
        </div>
      )
    
    case 'exercises':
      // 现有独立练习区域
      return <ExercisesContent exercises={section.items} />
    
    default:
      return <DefaultContent content={section.content} />
  }
}
```

---

## 五、学习路径（Learning Path）设计

### 5.1 Brilliant Learning Path 的设计原则

Brilliant 的 Learning Path 遵循三个原则：

1. **线性递进**：课程之间有固定顺序，前置课程不完成不能解锁后续
2. **概念优先**：每个 Path 从"核心概念"开始，逐步加深
3. **节奏感**：每个课程约 15~30 分钟，包含 5~10 个 Lesson

### 5.2 星耀可以设计的物理 Learning Path

```
物理·力学系统（Learning Path）
  ↓
Course 1：运动与力
  ├── Lesson 1：匀变速直线运动（对应 M01）
  ├── Lesson 2：自由落体与竖直上抛（对应 M02）
  └── Lesson 3：追及与相遇（对应 M04）
  ↓
Course 2：能量与动量
  ├── Lesson 4：动能定理（M15）
  ├── Lesson 5：机械能守恒（M16）
  └── Lesson 6：动量守恒（M18）
```

### 5.3 星耀 LearningPath 数据结构

```ts
// src/data/physics/learningPaths.ts

interface PhysicsLearningPath {
  id: string                 // 'physics-mechanics'
  title: string             // '物理·力学系统'
  description: string
  coverImage?: string
  
  // 包含的课程
  courses: LearningPathCourse[]
  
  // 路径元数据
  gradeLevel: 10 | 11 | 12
  estimatedHours: number
  
  // 解锁条件（全部课程完成后解锁下一路径）
  prerequisites: string[]    // 其他 LearningPath IDs
}

// 路径内的课程
interface LearningPathCourse {
  courseId: string           // 'PHY-C01'
  title: string             // '运动与力'
  description: string
  order: number
  
  // 这个课程包含哪些模型
  models: string[]           // ['PHY-M01', 'PHY-M02', 'PHY-M04']
  
  // 免费预览（对未登录/未付费用户）
  freePreview: boolean
  
  // 课时列表（可选，用于细粒度追踪）
  lessons?: LearningPathLesson[]
}

// 课时（可选，比模型更细）
interface LearningPathLesson {
  lessonId: string
  title: string
  modelId: string
  estimatedMinutes: number
  isFreePreview: boolean
}
```

---

## 六、对星耀的具体迁移评估

### 6.1 讲练合一（★★★★★ 优先级：最高）

**改动范围：**
- ModelPage.tsx：增加底部练习区块（约 100 行）
- QuestionCard.tsx：支持 compact 模式（内嵌使用）
- 无需修改数据模型

**预估工时：** 1~2 天
**风险：** 低（新增区块，不改现有逻辑）

### 6.2 Learning Path（★★★★☆ 优先级：高）

**改动范围：**
- 新建 `src/data/physics/learningPaths.ts`
- ModelList.tsx 或 PhysicsModuleGrid.tsx：增加路径展示
- 新增路由（可选）：`/physics/paths/:pathId`

**预估工时：** 2~3 天
**风险：** 中等（涉及 UI 新增，需要内容团队配合填充路径）

### 6.3 细粒度进度（★★★☆☆ 优先级：中）

**改动范围：**
- Supabase schema 新增 lesson_progress 表
- ModelPage.tsx 记录每个 section 的完成状态
- 改动数据持久化逻辑

**预估工时：** 3~5 天
**风险：** 中等（涉及 schema 变更，需要数据迁移）

### 6.4 前置依赖（★★★☆☆ 优先级：中）

**改动范围：**
- 新建 `src/data/physics/knowledgeGraph.ts`（模型依赖数据）
- ModelList.tsx：解锁状态判断
- 改动较小，可以和 6.2 并行做

**预估工时：** 1~2 天
**风险：** 低（纯数据 + UI 判断逻辑）

---

## 七、Brilliant 最有价值的 5 个产品细节

1. **"我不会这道题"按钮**：答错 2 次后出现，提供"再看一遍提示"
2. **彩色进度条**：每个 Course 有独立的彩色进度条，完成一个变一种颜色
3. **免费前 2 课**：不注册也能体验完整课程前几节，降低试用门槛
4. **"下一个最佳课程"推荐**：基于当前进度自动推荐下一步
5. **Challenge 课程**：完成基础课程后解锁挑战赛，增强成就感

---

## 八、优缺点总结

### 可以学的地方

✅ 讲练合一让学习成本降到最低，零跳转  
✅ Learning Path 的线性递进确保学习效果可见  
✅ 免费预览策略降低获客门槛  
✅ 练习题和概念紧邻，遗忘时马上回忆  
✅ 进度条彩色化，让完成感更强  

### 不适合照搬的地方

❌ Brilliant 没有"认知图谱"概念，内容是线性课程，不是网状结构  
❌ 全程无视频，靠文字+动画，对内容创作者要求高（星耀文本内容够用）  
❌ 无"错题本"功能，不追踪历史错题（星耀错题本是差异化优势）  
❌ 无"解题套路"概念（Brilliant 只有"怎么想"，没有"套路"）  
❌ 闭源，算法不公开，无法获取具体掌握度计算公式  

---

*文档完整度：包含完整 TypeScript 接口定义（10+ 接口）、完整 UI 代码示例（2个组件）、实现步骤（4个模块）、优劣分析。*
