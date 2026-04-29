// 数学题库数据类型定义
// 与物理题库类似，但针对数学学科特点

export interface Question {
  id: string
  stem: string
  options?: string[]
  answer: string
  analysis: string
  level: 'A' | 'B' | 'C'
  type: string
  knowledgePoints: string[]
  difficultyD?: number
}

export interface QuestionFilter {
  id: string
  label: string
  options: { value: string; label: string }[]
}
