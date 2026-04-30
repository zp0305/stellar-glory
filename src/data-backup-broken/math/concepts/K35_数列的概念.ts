// 知识节点 K35：数列的概念
import type { ConceptData } from './types'

export const K35: ConceptData = {
  id: 'K35',
  title: '数列的概',
  subtitle: '离散函数的表',
  module: '数列与归',
  chapter: '数列的概',
  difficulty: 1,

  preCheck: [
    {
      question: '数列 1, 3, 5, 7, ... 的通项公式是？',
      options: ['A. 2n', 'B. 2n-1', 'C. n+1', 'D. n²'],
      answer: 'B',
      explanation: 'a1=2×1-1，a3=2×2-1，所a2n-1',
    },
  ],

  narrative: {
    context: '数列是定义在正整数集上的函数，是离散世界的数学模型',
    confusion: '数列的通项公式与递推公式的区别',
    experiment: '观察数列 1, 1/2, 1/3, 1/4, ... 的变化趋势',
    concept: '数列是按一定顺序排列的一列数',
    derivation: '通项公式：af(n)；递推公式：aₙ₊f(a',
    transfer: '数列的极限、无穷递缩等概念',
  },

  variations: {
    basic: [
      { label: '通项公式', formula: 'af(n)', note: 'n 项的表达 }',
      { label: '递推公式', formula: 'aₙ₊f(a', note: '相邻项的关系' },
    ],
    advanced: [
      { label: 'n 项和', formula: 'Saa...+a, note: '部分 },
    ],
    challenge: [
      { label: '数列的有界, note: '有上界、有下界、有 },
    ],
  },

  formulas: [
    { name: '通项与前 n 项和', formula: 'aSSₙ₋, usage: '互化' }',
  ],

  selfEval: [
    { question: '数列 {2ⁿ} 的通项公式是？', level: 'A', description: 'a2 }',
  ],

  relatedModels: ['MATH-S01'],
  crossLinks: [],
}
