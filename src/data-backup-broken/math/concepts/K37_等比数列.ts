// 知识节点 K37：等比数
import type { ConceptData } from './types'

export const K37: ConceptData = {
  id: 'K37',
  title: '等比数列',
  subtitle: '指数增长的数',
  module: '数列与归',
  chapter: '等比数列',
  difficulty: 1,

  preCheck: [
    {
      question: '等比数列 2, 6, 18, 54, ... 的公比是',
      options: ['A. 2', 'B. 3', 'C. 4', 'D. 6'],
      answer: 'B',
      explanation: '6/2=38/6=34/18=3，所以公q=3',
    },
  ],

  narrative: {
    context: '等比数列用于描述复利增长、细胞分裂等指数增长现象',
    confusion: '等比数列的公比可以是负数吗？可以',
    experiment: '复利问题：本10000 元，年利5%0 年后的本息和',
    concept: '等比数列是后项与前项的比等于常数的数列',
    derivation: '通项：aa₁qⁿ⁻¹；前 n 项和：Sa1-q/(1-q)（q',
    transfer: '等比中项：b²=ac',
  },

  variations: {
    basic: [
      { label: '通项公式', formula: 'aa₁qⁿ⁻¹', note: 'n  }',
      { label: 'n 项和', formula: 'Sa1-q/(1-q)', note: 'q' },
    ],
    advanced: [
      { label: '等比中项', formula: 'b²=ac', note: 'a,b,c 等比' },
    ],
    challenge: [
      { label: '无穷等比数列', formula: 'Sa(1-q)', note: '|q|<1 时收 }',
    ],
  },

  formulas: [
    { name: '等比通项', formula: 'aa₁qⁿ⁻¹', usage: '求任意项' },
    { name: '等比求和', formula: 'Sa1-q/(1-q)', usage: '求前 n 项和' },
  ],

  selfEval: [
    { question: '等比数列 2, 6, 18, ... 的第 5 项是, level: 'A', description: '162' }',
  ],

  relatedModels: ['MATH-S01', 'MATH-S03'],
  crossLinks: [],
}
