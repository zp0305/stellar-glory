// 知识节点 K60：用样本估计总体
import type { ConceptData } from './types'

export const K60: ConceptData = {
  id: 'K60',
  title: '用样本估计总体',
  subtitle: '从样本到总体的推断',
  module: '概率与统计',
  chapter: '用样本估计总体',
  difficulty: 2,

  preCheck: [
    {
      question: '样本方差 s² 的计算公式是？',
      options: ['A. ∑(xᵢ-x̄)²/n', 'B. ∑(xᵢ-x̄)²/(n-1)', 'C. ∑(xᵢ-x̄)²', 'D. ∑xᵢ²/n - x̄²'],
      answer: 'B',
      explanation: '样本方差用 n-1 做分母，这是无偏估计。',
    },
  ],

  narrative: {
    context: '用样本的特征来推断总体的特征是统计的核心问题。',
    confusion: '样本方差和总体方差的区别。',
    experiment: '计算一组数据的均值和方差。',
    concept: '用样本均值、样本方差等统计量估计总体参数。',
    derivation: '样本均值：x̄=∑xᵢ/n；样本方差：s²=∑(xᵢ-x̄)²/(n-1)',
    transfer: '用样本估计总体的均值、方差等。',
  },

  variations: {
    basic: [
      { label: '样本均值', formula: 'x̄=∑xᵢ/n', note: '反映总体平均水平' },
      { label: '样本方差', formula: 's²=∑(xᵢ-x̄)²/(n-1)', note: '反映数据离散程度' },
    ],
    advanced: [
      { label: '样本标准差', formula: 's=√(s²)', note: '与数据单位一致' },
    ],
    challenge: [
      { label: '置信区间', note: '用样本估计总体参数的区间' },
    ],
  },

  formulas: [
    { name: '样本均值', formula: 'x̄=∑xᵢ/n', usage: '估计总体均值' },
    { name: '样本方差', formula: 's²=∑(xᵢ-x̄)²/(n-1)', usage: '估计总体方差' },
  ],

  selfEval: [
    { question: '为什么样本方差用 n-1 而不是 n？', level: 'B', description: '为了得到无偏估计' },
  ],

  relatedModels: ['MATH-P02'],
  crossLinks: [],
}
