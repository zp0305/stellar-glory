// 物理 · 模型题库数据
// 每个模型配套题库，按难度分层

export interface Question {
  // === 保留原有字段 ===
  id: string              // 'PHY-B01'
  modelId: string         // 'PHY-M01'
  difficulty: 'B' | 'J' | 'T'      // B/J/T 三级难度（用户面向的标签）
  type: '选择题' | '填空题' | '计算题' | '多选题' | '图像分析题' | '多过程综合计算题' | '实验设计题' | '选做题'
  estimatedMinutes: number
  tags: string[]
  hint: string | null     // 可为 null

  question: string        // 题干（支持 Markdown）

  // 选择题选项（填空/计算题为 null）
  options: string[] | null

  // 答案
  answer: string

  // 解析（Markdown）
  explanation: string

  // 关联知识点
  points: string[]
  // 关联套路 IDs
  routineIds?: string[]

  // === 新增五维筛选字段 ===
  level?: 'L1' | 'L2' | 'L3'       // 能力层级
  target?: 'SYNC' | 'EXAM' | 'GAOKAO' | 'FOUNDATION' | 'COMPETE'  // 学习目标
  function?: 'DIAG' | 'PRACTICE' | 'VARIATION' | 'INTEGRATED' | 'REAL' | 'METHOD'  // 题目功能
  difficultyD?: 1 | 2 | 3 | 4 | 5 | 6  // 六级难度（D1-D6），与 B/J/T 映射关系：B=D2+D3, J=D4, T=D5
}