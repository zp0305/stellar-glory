// 知识节点 K39：递推数列
import type { ConceptData } from './types'

export const K39: ConceptData = {
  id: 'K39',
  title: '递推数列',
  subtitle: '相邻项的关系',
  module: '数列与归纳',
  chapter: '递推数列',
  difficulty: 2,

  preCheck: [
    {
      question: '已知 a₁=1，aₙ₊₁=2aₙ，求 a₃？',
      options: ['A. 2', 'B. 4', 'C. 6', 'D. 8'],
      answer: 'B',
      explanation: 'a₂=2a₁=2，a₃=2a₂=4。',
    },
  ],

  narrative: {
    context: '递推数列给出了相邻项之间的关系，是求通项公式的基础。',
    confusion: '递推公式如何转化为通项公式？',
    experiment: '已知 a₁=1，aₙ₊₁=2aₙ+1，求前几项。',
    concept: '递推数列是用相邻项的关系来定义的数列。',
    derivation: '累加法、累乘法、构造法是将递推转化为通项的常用方法。',
    transfer: '斐波那契数列是著名的递推数列。',
  },

  variations: {
    basic: [
      { label: '累加法', formula: 'aₙ=a₁+∑(aₖ₊₁-aₖ)', note: '差列为等差或可求' },
      { label: '累乘法', formula: 'aₙ=a₁·∏(aₖ₊₁/aₖ)', note: '商列为等比或可求' },
    ],
    advanced: [
      { label: '构造等比', note: '将递推式转化为标准等比形式' },
    ],
    challenge: [
      { label: '二阶递推', note: '需用特征根方程' },
    ],
  },

  formulas: [
    { name: '累加法', formula: 'aₙ=a₁+∑(aₖ₊₁-aₖ)', usage: '差累加' },
    { name: '累乘法', formula: 'aₙ=a₁·∏(aₖ₊₁/aₖ)', usage: '商累乘' },
  ],

  selfEval: [
    { question: '已知 a₁=1，aₙ₊₁=aₙ+2，求 aₙ？', level: 'A', description: 'aₙ=2n-1' },
  ],

  relatedModels: ['MATH-S05'],
  crossLinks: [],
}
