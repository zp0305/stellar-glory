// 知识节点 K38：数列求和
import type { ConceptData } from './types'

export const K38: ConceptData = {
  id: 'K38',
  title: '数列求和',
  subtitle: '化繁为简的技巧',
  module: '数列与归纳',
  chapter: '数列求和',
  difficulty: 2,

  preCheck: [
    {
      question: '求和 1+2+3+...+100 等于？',
      options: ['A. 5050', 'B. 5000', 'C. 10000', 'D. 10100'],
      answer: 'A',
      explanation: '等差数列求和：S=100×(1+100)/2=5050。',
    },
  ],

  narrative: {
    context: '数列求和是数学中的重要技能，有多种技巧可用。',
    confusion: '什么时候用错位相减，什么时候用裂项？',
    experiment: '求等比数列 1, 2, 4, 8, ... 前 10 项和。',
    concept: '数列求和是将数列的所有项加起来得到总和。',
    derivation: '错位相减：等比数列求和；裂项相消：分式数列求和。',
    transfer: '倒序求和、错位相减、裂项相消等技巧。',
  },

  variations: {
    basic: [
      { label: '等差求和', formula: 'S=n(a₁+aₙ)/2', note: '等差' },
      { label: '等比求和', formula: 'S=a₁(1-qⁿ)/(1-q)', note: '等比' },
    ],
    advanced: [
      { label: '错位相减', note: '等比数列求和常用' },
      { label: '裂项相消', note: '1/(n(n+1))=1/n-1/(n+1)' },
    ],
    challenge: [
      { label: '分组求和', note: '按规律分组' },
    ],
  },

  formulas: [
    { name: '裂项公式', formula: '1/(n(n+1))=1/n-1/(n+1)', usage: '裂项相消' },
  ],

  selfEval: [
    { question: '求和 1×2+2×3+...+n(n+1)？', level: 'B', description: 'n(n+1)(n+2)/3' },
  ],

  relatedModels: ['MATH-S04'],
  crossLinks: [],
}
