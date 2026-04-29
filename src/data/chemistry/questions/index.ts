// 化学 · 模型题库数据（空框架）
// 待内容AI填充各模型配套题目

import type { Question } from './types'

export const allQuestions: Question[] = []

export const questionsByModel: Record<string, Question[]> = {}

export const modelQuestionStats: Record<string, { modelId: string; title: string; B: number; J: number; T: number; total: number }> = {}

// 难度标签
export const DIFF_LABEL: Record<string, string> = { B: '基础', J: '进阶', T: '挑战' }
export const DIFF_COLOR: Record<string, string> = {
  B: 'text-green-600 bg-green-50 border-green-200',
  J: 'text-amber-600 bg-amber-50 border-amber-200',
  T: 'text-red-600 bg-red-50 border-red-200',
}
