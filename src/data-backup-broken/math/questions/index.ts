// 数学题库数据聚合
// 骨架文件，题目数据待填充

import type { Question } from './types'

export const allQuestions: Question[] = []

export const questionsByModel: Record<string, Question[]> = {}

export function getQuestionsByFilter(filter: Record<string, string>): Question[] {
  return allQuestions
}
