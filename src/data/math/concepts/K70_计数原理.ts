// 知识节点 K70：计数原理
import type { ConceptData } from './types'

export const K70: ConceptData = {
  id: 'K70',
  title: '计数原理',
  subtitle: '加法原理与乘法原理',
  module: '概率与统计',
  chapter: '计数原理',
  difficulty: 1,

  preCheck: [
    {
      question: '从甲地到乙地有 3 条路，从乙地到丙地有 2 条路，从甲地到丙地共有多少种走法？',
      options: ['A. 5', 'B. 6', 'C. 2', 'D. 3'],
      answer: 'B',
      explanation: '乘法原理：3×2=6 种走法。',
    },
  ],

  narrative: {
    context: '计数原理是排列组合的基础。',
    confusion: '加法原理与乘法原理的区别：分类 vs 分步。',
    experiment: '用加法原理和乘法原理解题。',
    concept: '加法原理：分类相加；乘法原理：分步相乘。',
    derivation: '加法原理：完成一件事有 n 类办法，每类办法分别有 m₁,m₂,...,mₙ 种，则共有 m₁+m₂+...+mₙ 种。',
    transfer: '排列、组合的基础。',
  },

  variations: {
    basic: [
      { label: '加法原理', formula: 'N=m₁+m₂+...+mₙ', note: '分类相加' },
      { label: '乘法原理', formula: 'N=m₁×m₂×...×mₙ', note: '分步相乘' },
    ],
    advanced: [
      { label: '分类与分步', note: '类类独立，步步相连' },
    ],
    challenge: [
      { label: '综合应用', note: '复杂问题的分解' },
    ],
  },

  formulas: [
    { name: '加法原理', formula: 'N=m₁+m₂+...+mₙ', usage: '分类计数' },
    { name: '乘法原理', formula: 'N=m₁×m₂×...×mₙ', usage: '分步计数' },
  ],

  selfEval: [
    { question: '完成一件事有两步，第一步有 3 种方法，第二步有 4 种方法，共有多少种？', level: 'A', description: '12 种' },
  ],

  relatedModels: ['MATH-P12'],
  crossLinks: [],
}
