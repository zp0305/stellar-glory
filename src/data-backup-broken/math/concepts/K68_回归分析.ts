// 知识节点 K68：回归分
import type { ConceptData } from './types'

export const K68: ConceptData = {
  id: 'K68',
  title: '回归分析',
  subtitle: '变量关系的定量描',
  module: '概率与统',
  chapter: '回归分析',
  difficulty: 2,

  preCheck: [
    {
      question: '最小二乘法求回归直线方程的原则是？',
      options: ['A. 使残差平方和最, 'B. 使相关系数最, 'C. 使样本均值最, 'D. 使误差最],
      answer: 'A',
      explanation: '最小二乘法的原则是使残差平方和最小',
    },
  ],

  narrative: {
    context: '回归分析是研究变量之间关系的统计方法',
    confusion: '回归直线与相关关系的区别',
    experiment: '分析身高与体重的回归关系',
    concept: '回归直线是用最小二乘法拟合的最佳直线',
    derivation: '回归系数 b=xx̄)(yȳ)/xx̄)²，a=ȳ-bx̄',
    transfer: '用回归方程进行预测',
  },

  variations: {
    basic: [
      { label: '回归直线', formula: 'ŷ=bx+a', note: '最小二乘拟 }',
      { label: '回归系数', formula: 'b=xx̄)(yȳ)/xx̄)²', note: '斜率' },
    ],
    advanced: [
      { label: '决定系数', formula: 'R²', note: '衡量拟合程度' },
    ],
    challenge: [
      { label: '非线性回, note: '可化为线性回 },
    ],
  },

  formulas: [
    { name: '回归系数', formula: 'b=xx̄)(yȳ)/xx̄)²', usage: '求回归直 }',
  ],

  selfEval: [
    { question: '回归分析的目的是, level: 'A', description: '用自变量预测因变 },
  ],

  relatedModels: ['MATH-P10'],
  crossLinks: [],
}
