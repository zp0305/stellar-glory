// 化学题库类型定义
// 复用物理结构，题型适配化学

export interface Question {
  id: string              // 'CHE-B01'
  modelId: string         // 'CHE-M01'
  difficulty: 'B' | 'J' | 'T'
  type: '选择题' | '填空题' | '计算题' | '多选题' | '图像分析题' | '实验设计题' | '无机推断题' | '有机推断题' | '流程分析题'
  estimatedMinutes: number
  tags: string[]
  hint: string | null

  question: string        // 题干（支持 Markdown + LaTeX）

  options: string[] | null

  answer: string
  explanation: string

  points: string[]
  routineIds?: string[]

  level?: 'L1' | 'L2' | 'L3'
  target?: 'SYNC' | 'EXAM' | 'GAOKAO' | 'FOUNDATION' | 'COMPETE'
  function?: 'DIAG' | 'PRACTICE' | 'VARIATION' | 'INTEGRATED' | 'REAL' | 'METHOD'
  difficultyD?: 1 | 2 | 3 | 4 | 5 | 6
}
