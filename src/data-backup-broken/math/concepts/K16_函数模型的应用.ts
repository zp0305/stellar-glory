// 知识节点 K16：函数模型的应用
import type { ConceptData } from './types'

export const K16: ConceptData = {
  id: 'K16',
  title: '函数模型的应',
  subtitle: '用数学眼光看世界',
  module: '函数与导',
  chapter: '函数模型的应',
  difficulty: 2,

  preCheck: [
    {
      question: '用一次函数模型描出租车收问题，y=10+2x 表示',
      options: ['A. 起步0元，每公, 'B. 起步元，每公0, 'C. 每公2, 'D. 起步0元，总价']',
      answer: 'A',
      explanation: 'y=10+2x 表示起步0元，加上每公元',
    },
  ],

  narrative: {
    context: '现实生活中的很多问题都可以用函数来建模和解决',
    confusion: '选择合适的函数模型是关键',
    experiment: '分析人口增长、物体下落、复利计算等问题中的函数关系',
    concept: '函数模型是将实际问题数学化的一种方式',
    derivation: '根据数据特征选择模型类型（一次、二次、指数等），然后拟合参数',
    transfer: '用模型预测趋势，解决实际问题',
  },

  variations: {
    basic: [
      { label: '一次函数模, formula: 'y=kx+b', note: '均匀变化' }',
      { label: '二次函数模型', formula: 'y=ax²+bx+c', note: '抛物线变 }',
      { label: '指数函数模型', formula: 'y=a·bˣ', note: '指数增长或衰 }',
    ],
    advanced: [
      { label: '对数函数模型', formula: 'y=a·ln x+b', note: '增长率先慢后 }',
    ],
    challenge: [
      { label: '复合模型', note: '多种函数组合' },
    ],
  },

  formulas: [
    { name: '一次函, formula: 'y=kx+b', usage: '匀速变 },
    { name: '指数增长', formula: 'y=a(1+r)ˣ', usage: '增长率问 }',
  ],

  selfEval: [
    { question: '银行存款复利问题用什么函数模型？', level: 'A', description: '指数函数' },
  ],

  relatedModels: ['MATH-F01', 'MATH-F02'],
  crossLinks: [],
}
