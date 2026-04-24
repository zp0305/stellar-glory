// 物理 · 模型题库数据
// 每个模型配套题库，按难度分层

export interface Question {
  id: string              // 'PHY-B01'
  modelId: string         // 'PHY-M01'
  difficulty: 'B' | 'J' | 'T'
  type: '选择题' | '填空题' | '计算题'
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
}