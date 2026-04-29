// 知识节点 K21：隐零点
import type { ConceptData } from './types'

export const K21: ConceptData = {
  id: 'K21',
  title: '隐零点',
  subtitle: '存在但不可求的零点',
  module: '函数与导数',
  chapter: '隐零点',
  difficulty: 3,

  preCheck: [
    {
      question: '隐零点是指？',
      options: ['A. 无法用公式表示的零点', 'B. 函数图像上看不见的零点', 'C. 复数范围内的零点', 'D. 不存在的零点'],
      answer: 'A',
      explanation: '隐零点是指存在但无法用初等公式表示的零点。',
    },
  ],

  narrative: {
    context: '很多方程如 x·eˣ=1 无法用初等方法求解，但我们可以证明零点存在并估计其范围。',
    confusion: '隐零点问题常常出现在导数综合题中。',
    experiment: '证明方程 xeˣ=1 有唯一解，并说明其大致范围。',
    concept: '隐零点问题是指数函数与多项式函数综合时常见的零点问题。',
    derivation: '通过同构变形，将方程转化为常见形式。',
    transfer: '设而不求，利用零点存在定理和单调性。',
  },

  variations: {
    basic: [
      { label: '隐零点处理', note: '设而不求' },
      { label: '零点范围估计', note: '利用零点存在定理' },
    ],
    advanced: [
      { label: '同构技巧', formula: 'xeˣ=x·eˣ=1', note: '构造相同结构' },
    ],
    challenge: [
      { label: '隐零点代换', note: '在需要时用 x₀ 表示零点' },
    ],
  },

  formulas: [
    { name: '零点存在', formula: 'f(a)·f(b)<0', usage: '证明存在' },
  ],

  selfEval: [
    { question: '如何证明 xeˣ=1 有解？', level: 'B', description: 'f(x)=xeˣ-1，f(0)=-1<0，f(1)=e-1>0' },
  ],

  relatedModels: ['MATH-F05', 'MATH-F06'],
  crossLinks: [],
}
