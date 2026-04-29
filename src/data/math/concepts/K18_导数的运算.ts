// 知识节点 K18：导数的运算
import type { ConceptData } from './types'

export const K18: ConceptData = {
  id: 'K18',
  title: '导数的运算',
  subtitle: '求导法则与常用公式',
  module: '函数与导数',
  chapter: '导数的运算',
  difficulty: 2,

  preCheck: [
    {
      question: '若 f(x)=x³+2x，则 f\'(x)=？',
      options: ['A. 3x²+2', 'B. 3x²', 'C. x²+2', 'D. 3x+2'],
      answer: 'A',
      explanation: '逐项求导：(x³)\'=3x²，(2x)\'=2。',
    },
  ],

  narrative: {
    context: '有了求导公式和法则，我们就可以求任意初等函数的导数。',
    confusion: '复合函数求导容易漏掉内层函数的导数。',
    experiment: '求 y=sin(2x+1) 的导数。',
    concept: '导数运算有系统的法则和公式。',
    derivation: '(u±v)\'=u\'±v\'；(uv)\'=u\'v+uv\'；(u/v)\'=(u\'v-uv\'/v²',
    transfer: '链式法则：(f(g(x)))\'=f\'(g(x))·g\'(x)',
  },

  variations: {
    basic: [
      { label: '和差求导', formula: '(u±v)\'=u\'±v\'', note: '逐项求导' },
      { label: '乘积求导', formula: '(uv)\'=u\'v+uv\'', note: '乘法法则' },
      { label: '商求导', formula: '(u/v)\'=(u\'v-uv\')/v²', note: '除法法则' },
    ],
    advanced: [
      { label: '链式法则', formula: '[f(g(x))]\'=f\'(g(x))·g\'(x)', note: '复合函数求导' },
      { label: '常用导数公式', formula: '(sin x)\'=cos x', note: '记住公式' },
    ],
    challenge: [
      { label: '高阶导数', formula: 'f\"(x)=(f\'(x))\'n阶导数 f⁽ⁿ⁾(x)', note: '多次求导' },
    ],
  },

  formulas: [
    { name: '链式法则', formula: '[f(g(x))]\'=f\'(g(x))·g\'(x)', usage: '复合函数求导' },
    { name: '(xⁿ)\'', formula: 'nxⁿ⁻¹', usage: '幂函数求导' },
    { name: '(sin x)\'', formula: 'cos x', usage: '三角函数求导' },
  ],

  selfEval: [
    { question: 'y=cos(3x) 的导数是？', level: 'B', description: '-3sin(3x)' },
  ],

  relatedModels: ['MATH-F03', 'MATH-F04'],
  crossLinks: [],
}
