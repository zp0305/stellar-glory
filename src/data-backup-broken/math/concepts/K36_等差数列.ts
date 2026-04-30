// 知识节点 K36：等差数
import type { ConceptData } from './types'

export const K36: ConceptData = {
  id: 'K36',
  title: '等差数列',
  subtitle: '均匀变化的数',
  module: '数列与归',
  chapter: '等差数列',
  difficulty: 1,

  preCheck: [
    {
      question: '等差数列 2, 5, 8, 11, ... 的公差是',
      options: ['A. 2', 'B. 3', 'C. 5', 'D. 7'],
      answer: 'B',
      explanation: '5-2=3-5=31-8=3，所以公d=3',
    },
  ],

  narrative: {
    context: '等差数列是最简单的数列模型，广泛应用于利息、工资等问题',
    confusion: '等差数列的通项公式和前 n 项和公式',
    experiment: '求等差数2, 5, 8, 11, ... 的第 20 项',
    concept: '等差数列是后项减去前项等于常数的数列',
    derivation: '通项：aa(n-1)d；前 n 项和：Sn(aa/2=nan(n-1)d/2',
    transfer: '等差中项b=a+c',
  },

  variations: {
    basic: [
      { label: '通项公式', formula: 'aa(n-1)d', note: 'n  }',
      { label: 'n 项和', formula: 'Sn(aa/2', note: '求和公式' },
    ],
    advanced: [
      { label: '等差中项', formula: 'b=(a+c)/2', note: 'a,b,c 等差' },
    ],
    challenge: [
      { label: '等差数列判定', note: 'aₙ₊a常数' },
    ],
  },

  formulas: [
    { name: '等差通项', formula: 'aa(n-1)d', usage: '求任意项' },
    { name: '等差求和', formula: 'Sn(aa/2', usage: '求前 n 项和' },
  ],

  selfEval: [
    { question: '等差数列 1, 3, 5, ... 的第 100 项是, level: 'A', description: '199' }',
  ],

  relatedModels: ['MATH-S01', 'MATH-S02'],
  crossLinks: [],
}
