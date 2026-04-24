// 题库数据汇总（所有模型题库）
import type { Question } from './types'

// 汇总
import { M01_questions } from './M01_questions'
import { M04_questions } from './M04_questions'

export const allQuestions: Question[] = [
  ...M01_questions,
  ...M04_questions,
]

// 按 modelId 分组
export const questionsByModel: Record<string, Question[]> = {
  'PHY-M01': M01_questions,
  'PHY-M04': M04_questions,
}

// 模型题库概览（用于列表页显示）
export const modelQuestionStats: Record<string, { modelId: string; title: string; B: number; J: number; T: number; total: number }> = {
  'PHY-M01': {
    modelId: 'PHY-M01',
    title: '匀变速直线运动',
    B: M01_questions.filter(q => q.difficulty === 'B').length,
    J: M01_questions.filter(q => q.difficulty === 'J').length,
    T: M01_questions.filter(q => q.difficulty === 'T').length,
    total: M01_questions.length,
  },
  'PHY-M04': {
    modelId: 'PHY-M04',
    title: '追及与相遇',
    B: M04_questions.filter(q => q.difficulty === 'B').length,
    J: M04_questions.filter(q => q.difficulty === 'J').length,
    T: M04_questions.filter(q => q.difficulty === 'T').length,
    total: M04_questions.length,
  },
}

// 难度标签
export const DIFF_LABEL: Record<string, string> = { B: '基础', J: '进阶', T: '挑战' }
export const DIFF_COLOR: Record<string, string> = {
  B: 'text-green-600 bg-green-50 border-green-200',
  J: 'text-amber-600 bg-amber-50 border-amber-200',
  T: 'text-red-600 bg-red-50 border-red-200',
}