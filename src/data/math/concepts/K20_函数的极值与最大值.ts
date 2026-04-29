// 知识节点 K20：函数的极值与最大值
import type { ConceptData } from './types'

export const K20: ConceptData = {
  id: 'K20',
  title: '函数的极值与最大值',
  subtitle: '峰谷之间的智慧',
  module: '函数与导数',
  chapter: '函数的极值与最大值',
  difficulty: 2,

  preCheck: [
    {
      question: 'x=1 是 f(x)=(x-1)² 的？',
      options: ['A. 极大值点', 'B. 极小值点', 'C. 极点', 'D. 非极点'],
      answer: 'B',
      explanation: 'f(x)=(x-1)²≥0，在 x=1 处取得最小值 0，是极小值点。',
    },
  ],

  narrative: {
    context: '在优化问题中，我们经常需要找到函数的极值和最值。',
    confusion: '极值是局部概念，最值是全局概念。',
    experiment: '观察 f(x)=x³-3x 的图像，找出极值点和最值点。',
    concept: '极值是函数在某点邻域内的最大或最小值。',
    derivation: '极值点判定：f\'(x)=0 且两侧导数异号。',
    transfer: '闭区间上连续函数必有最大值和最小值。',
  },

  variations: {
    basic: [
      { label: '极大值', formula: 'f(x₀) 为局部最大值', note: '邻域内最大' },
      { label: '极小值', formula: 'f(x₀) 为局部最小值', note: '邻域内最小' },
      { label: '极值点', formula: 'f\'(x₀)=0', note: '驻点' },
    ],
    advanced: [
      { label: '极值判定', formula: 'f\'(x₀)=0 且 f\'\'(x₀)>0 ⇒ 极小值', note: '第二充分条件' },
    ],
    challenge: [
      { label: '最值问题', note: '比较极值和端点值' },
    ],
  },

  formulas: [
    { name: '极值必要条件', formula: 'f\'(x₀)=0', usage: '可导函数极值点必为驻点' },
    { name: '极值充分条件', formula: 'f\'(x)=0 两侧异号', usage: '判断极值' },
  ],

  selfEval: [
    { question: '极值点一定是导数为零的点吗？', level: 'B', description: '不一定，如 f(x)=|x| 在 x=0 处' },
  ],

  relatedModels: ['MATH-F04', 'MATH-F05'],
  crossLinks: [],
}
