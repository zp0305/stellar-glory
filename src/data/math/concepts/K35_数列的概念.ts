// 知识节点 K35：数列的概念
import type { ConceptData } from './types'

export const K35: ConceptData = {
  id: 'K35',
  title: '数列的概念',
  subtitle: '离散函数的表达',
  module: '数列与归纳',
  chapter: '数列的概念',
  difficulty: 1,

  preCheck: [
    {
      question: '数列 1, 3, 5, 7, ... 的通项公式是？',
      options: ['A. 2n', 'B. 2n-1', 'C. n+1', 'D. n²'],
      answer: 'B',
      explanation: 'a₁=1=2×1-1，a₂=3=2×2-1，所以 aₙ=2n-1。',
    },
  ],

  narrative: {
    context: '数列是定义在正整数集上的函数，是离散世界的数学模型。',
    confusion: '数列的通项公式与递推公式的区别。',
    experiment: '观察数列 1, 1/2, 1/3, 1/4, ... 的变化趋势。',
    concept: '数列是按一定顺序排列的一列数。',
    derivation: '通项公式：aₙ=f(n)；递推公式：aₙ₊₁=f(aₙ)',
    transfer: '数列的极限、无穷递缩等概念。',
  },

  variations: {
    basic: [
      { label: '通项公式', formula: 'aₙ=f(n)', note: '第 n 项的表达式' },
      { label: '递推公式', formula: 'aₙ₊₁=f(aₙ)', note: '相邻项的关系' },
    ],
    advanced: [
      { label: '前 n 项和', formula: 'Sₙ=a₁+a₂+...+aₙ', note: '部分和' },
    ],
    challenge: [
      { label: '数列的有界性', note: '有上界、有下界、有界' },
    ],
  },

  formulas: [
    { name: '通项与前 n 项和', formula: 'aₙ=Sₙ-Sₙ₋₁', usage: '互化' },
  ],

  selfEval: [
    { question: '数列 {2ⁿ} 的通项公式是？', level: 'A', description: 'aₙ=2ⁿ' },
  ],

  relatedModels: ['MATH-S01'],
  crossLinks: [],
}
