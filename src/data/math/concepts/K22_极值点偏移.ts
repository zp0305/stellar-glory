// 知识节点 K22：极值点偏移
import type { ConceptData } from './types'

export const K22: ConceptData = {
  id: 'K22',
  title: '极值点偏移',
  subtitle: '对称破缺的问题',
  module: '函数与导数',
  chapter: '极值点偏移',
  difficulty: 3,

  preCheck: [
    {
      question: '极值点偏移通常发生在什么情况下？',
      options: ['A. 偶函数', 'B. 导函数有两个零点', 'C. 极值点不在区间中点', 'D. 函数图像关于 y 轴对称'],
      answer: 'C',
      explanation: '极值点偏移是指极值点不在两个函数值相等的点之间的中点位置。',
    },
  ],

  narrative: {
    context: '在处理双变量问题时，极值点偏移是一个经典技巧。',
    confusion: '什么时候需要用极值点偏移？',
    experiment: '分析 f(x)=x²-2x-ln x 的极值点位置。',
    concept: '极值点偏移是指极值点 x₀ 不在 x₁+x₂ 的中点位置。',
    derivation: '构造差函数：f(x₁)-f(2x₀-x₁) 的符号来判断偏移方向。',
    transfer: '利用对称化构造或换元法处理极值点偏移问题。',
  },

  variations: {
    basic: [
      { label: '极值点偏移', note: '极值点不在中点' },
      { label: '对称化构造', note: '构造辅助函数' },
    ],
    advanced: [
      { label: '换元法', note: '设 t=x-x₀' },
    ],
    challenge: [
      { label: '双变量处理', note: '极值点偏移的典型应用' },
    ],
  },

  formulas: [
    { name: '偏移判断', formula: 'f(x₁)=f(x₂) 且 x₁≠x₂', usage: '判断偏移' },
  ],

  selfEval: [
    { question: '极值点偏移问题主要用什么方法解决？', level: 'B', description: '对称化构造或换元法' },
  ],

  relatedModels: ['MATH-F05', 'MATH-F06'],
  crossLinks: [],
}
