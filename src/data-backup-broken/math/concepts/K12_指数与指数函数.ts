// 知识节点 K12：指数与指数函数
import type { ConceptData } from './types'

export const K12: ConceptData = {
  id: 'K12',
  title: '指数与指数函',
  subtitle: '增长与衰减的指数',
  module: '函数与导',
  chapter: '指数与指数函',
  difficulty: 1,

  preCheck: [
    {
      question: '化简 2³×2的结果是',
      options: ['A. 2, 'B. 2¹, 'C. 4, 'D. 2³],
      answer: 'A',
      explanation: '同底数幂相乘，底数不变，指数相加',
    },
  ],

  narrative: {
    context: '细胞分裂、放射性衰变、人口增长都用指数函数建模',
    confusion: '指数运算律容易与对数运算律混淆',
    experiment: '比较 2⁻¹⁰¹² 的大小关系',
    concept: '指数函数 y=aˣ (a>0 a) 是基本初等函数',
    derivation: 'aᵐ×aaᵐ⁺ⁿ；(aaᵐⁿ；a1',
    transfer: '指数函数a>1 时递增，在 0<a<1 时递减',
  },

  variations: {
    basic: [
      { label: '指数运算, formula: 'aᵐ×aaᵐ⁺, note: '同底数相 }',
      { label: '指数函数', formula: 'y=aˣ', note: 'a>0 a' },
    ],
    advanced: [
      { label: '指数方程', note: '通过取对数或同底化简求解' },
    ],
    challenge: [
      { label: '复合指数', formula: 'y=aᵇ, note: '指数函数与一次函数的复合' }',
    ],
  },

  formulas: [
    { name: '指数运算', formula: 'aᵐ×aaᵐ⁺, usage: '指数乘法' }',
    { name: '指数函数定义', formula: 'y=aˣ (a>0,a)', usage: '指数函数形式' },
  ],

  selfEval: [
    { question: 'a>1 时，y=aˣ 是增函数还是减函数？', level: 'A', description: '增函 }',
  ],

  relatedModels: ['MATH-F01', 'MATH-F02'],
  crossLinks: [],
}
