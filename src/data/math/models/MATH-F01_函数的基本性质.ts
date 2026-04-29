// 模型 MATH-F01：函数的基本性质
import type { MathModel } from './types'

export const F01: MathModel = {
  id: 'MATH-F01',
  title: '函数的基本性质',
  module: '函数与导数',
  chapter: {
    id: 'F01',
    title: '函数的基本性质',
    subtitle: '定义域、值域、单调性、奇偶性',
    module: '函数与导数',
    content: '函数的基本性质包括定义域、值域、单调性、奇偶性、周期性等。',
    examples: [
      {
        title: '求定义域',
        problem: '求 y=√(x-1) + 1/(x-3) 的定义域',
        solution: 'x-1≥0 且 x≠3，所以定义域为 [1,3)∪(3,+∞)',
        key: '使表达式有意义的 x 的取值范围',
      },
    ],
    relatedConcepts: ['K07', 'K09', 'K10'],
  },
}
