// 知识节点 K15：函数的零点与方程的解
import type { ConceptData } from './types'

export const K15: ConceptData = {
  id: 'K15',
  title: '函数的零点与方程的解',
  subtitle: '数形结合的桥梁',
  module: '函数与导数',
  chapter: '函数的零点与方程的解',
  difficulty: 2,

  preCheck: [
    {
      question: '方程 x²-2x-3=0 的解集用零点表示是？',
      options: ['A. {-1,3}', 'B. {1,-3}', 'C. {-1,1,3}', 'D. {3}'],
      answer: 'A',
      explanation: 'x²-2x-3=(x+1)(x-3)=0，所以解为 x=-1 或 x=3。',
    },
  ],

  narrative: {
    context: '求方程的解和求函数的零点本质上是同一个问题。',
    confusion: '零点不是"点"，而是函数值为 0 的 x 坐标。',
    experiment: '求 f(x)=x²-2x-3 的零点，并观察函数图像。',
    concept: '函数的零点就是方程 f(x)=0 的解。',
    derivation: '零点存在定理：若 f(a)·f(b)<0，则在 (a,b) 内至少有一个零点。',
    transfer: '二分法求近似零点。',
  },

  variations: {
    basic: [
      { label: '零点定义', formula: 'f(x₀)=0 则 x₀ 是零点', note: '零点是一个数' },
      { label: '零点存在定理', formula: 'f(a)·f(b)<0 ⇒ (a,b) 有零点', note: '前提连续' },
    ],
    advanced: [
      { label: '零点与交点', note: 'f(x)=0 的解就是 y=f(x) 与 x 轴的交点' },
    ],
    challenge: [
      { label: '迭代法求零点', note: '如牛顿迭代法' },
    ],
  },

  formulas: [
    { name: '零点定义', formula: 'f(x₀)=0 ⟺ x₀ 是零点', usage: '判断零点' },
    { name: '零点存在定理', formula: 'f(a)·f(b)<0 ⇒ ∃ξ∈(a,b), f(ξ)=0', usage: '证明零点存在' },
  ],

  selfEval: [
    { question: 'f(x)=x³-1 在 (0,2) 内有零点吗？', level: 'A', description: '有，因为 f(0)·f(2)<0' },
  ],

  relatedModels: ['MATH-F01', 'MATH-F02'],
  crossLinks: [],
}
