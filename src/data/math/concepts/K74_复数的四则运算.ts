// 知识节点 K74：复数的四则运算
import type { ConceptData } from './types'

export const K74: ConceptData = {
  id: 'K74',
  title: '复数的四则运算',
  subtitle: '代数形式的运算',
  module: '复数',
  chapter: '复数的四则运算',
  difficulty: 1,

  preCheck: [
    {
      question: '(1+2i)+(3-4i) 等于？',
      options: ['A. 4-2i', 'B. 4+6i', 'C. -2+6i', 'D. 4-6i'],
      answer: 'A',
      explanation: '实部相加，虚部相加：(1+3)+(2-4)i=4-2i。',
    },
  ],

  narrative: {
    context: '复数的四则运算与多项式的运算类似。',
    confusion: '复数乘法需要用到 i²=-1。',
    experiment: '计算 (1+i)(1-i) 的值。',
    concept: '复数的加减乘除运算规则。',
    derivation: '加减：实部虚部分别运算；乘法：(a+bi)(c+di)=(ac-bd)+(ad+bc)i',
    transfer: '共轭复数的性质：z·z̄=|z|²。',
  },

  variations: {
    basic: [
      { label: '加减运算', formula: '(a+bi)±(c+di)=(a±c)+(b±d)i', note: '实部虚部分别运算' },
      { label: '乘法运算', formula: '(a+bi)(c+di)=(ac-bd)+(ad+bc)i', note: '需计算 i²=-1' },
    ],
    advanced: [
      { label: '除法运算', formula: '(a+bi)/(c+di)=(ac+bd)/(c²+d²)+(bc-ad)i/(c²+d²)', note: '分子分母同乘分母的共轭' },
    ],
    challenge: [
      { label: 'i 的幂', note: 'i⁴ⁿ=1, i⁴ⁿ⁺¹=i, i⁴ⁿ⁺²=-1, i⁴ⁿ⁺³=-i' },
    ],
  },

  formulas: [
    { name: '复数乘法', formula: '(a+bi)(c+di)=(ac-bd)+(ad+bc)i', usage: '乘法运算' },
    { name: '共轭性质', formula: 'z·z̄=|z|²', usage: '求模' },
  ],

  selfEval: [
    { question: 'i¹⁰⁰ 等于多少？', level: 'A', description: '1' },
  ],

  relatedModels: ['MATH-B02'],
  crossLinks: [],
}
