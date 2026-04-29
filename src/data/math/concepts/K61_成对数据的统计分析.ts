// 知识节点 K61：成对数据的统计分析
import type { ConceptData } from './types'

export const K61: ConceptData = {
  id: 'K61',
  title: '成对数据的统计分析',
  subtitle: '相关与回归',
  module: '概率与统计',
  chapter: '成对数据的统计分析',
  difficulty: 2,

  preCheck: [
    {
      question: '相关系数 r 的取值范围是？',
      options: ['A. [0,1]', 'B. [-1,1]', 'C. (-1,1)', 'D. R'],
      answer: 'B',
      explanation: '相关系数 r 的取值范围是 [-1,1]。',
    },
  ],

  narrative: {
    context: '成对数据反映了两个变量之间的关系。',
    confusion: '相关系数与回归系数的区别。',
    experiment: '分析身高与体重的数据相关性。',
    concept: '用相关系数和回归直线描述两个变量之间的关系。',
    derivation: 'r=∑(xᵢ-x̄)(yᵢ-ȳ)/√[∑(xᵢ-x̄)²∑(yᵢ-ȳ)²]',
    transfer: '正相关、负相关、线性相关。',
  },

  variations: {
    basic: [
      { label: '正相关', note: 'r>0' },
      { label: '负相关', note: 'r<0' },
      { label: '相关系数', formula: '|r|≤1', note: '衡量线性相关程度' },
    ],
    advanced: [
      { label: '回归直线', formula: 'ŷ=bx+a', note: '最小二乘法' },
    ],
    challenge: [
      { label: '相关程度判断', note: '|r|>0.75 强相关' },
    ],
  },

  formulas: [
    { name: '相关系数', formula: 'r=∑(xᵢ-x̄)(yᵢ-ȳ)/√[∑(xᵢ-x̄)²∑(yᵢ-ȳ)²]', usage: '衡量相关程度' },
  ],

  selfEval: [
    { question: 'r=0.9 表明什么？', level: 'A', description: '强正相关' },
  ],

  relatedModels: ['MATH-P03'],
  crossLinks: [],
}
