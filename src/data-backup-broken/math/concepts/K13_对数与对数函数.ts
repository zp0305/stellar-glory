// 知识节点 K13：对数与对数函数
import type { ConceptData } from './types'

export const K13: ConceptData = {
  id: 'K13',
  title: '对数与对数函数',
  subtitle: '指数的逆运算',
  module: '函数与导数',
  chapter: '对数与对数函数',
  difficulty: 1,

  preCheck: [
    {
      question: 'log₂8 的值是多少',
      options: ['A. 2', 'B. 3', 'C. 4', 'D. 8'],
      answer: 'B',
      explanation: 'log₂8=3，因2³=8',
    },
  ],

  narrative: {
    context: '地震震级、声音分贝都是用对数刻画的',
    confusion: '对数运算律与指数运算律容易混淆',
    experiment: '比较 ln e、log₁₀10、log₂8 的大小',
    concept: '对数是指数的逆运算。logₐb=c 意味着 a^c=b',
    derivation: 'logₐ(MN)=logₐM+logₐN；logₐ(M/N)=logₐM-logₐN',
    transfer: '换底公式：logₐb=ln b/ln a',
  },

  variations: {
    basic: [
      { label: '对数定义', formula: 'logₐb=c ⇔ a^c=b', note: '指数与对数互逆' },
      { label: '常用对数', formula: 'lg x = log₁₀x', note: '10 为底' },
      { label: '自然对数', formula: 'ln x = logₑx', note: 'e 为底' },
    ],
    advanced: [
      { label: '对数运算', formula: 'logₐ(MN)=logₐM+logₐN', note: '对数加法' },
      { label: '换底公式', formula: 'logₐb=ln b/ln a', usage: '底数转换' },
    ],
    challenge: [
      { label: '指数方程', note: '通过取对数求解' },
    ],
  },

  formulas: [
    { name: '对数定义', formula: 'logₐb=c ⇔ a^c=b', usage: '对数与指数互逆' },
    { name: '换底公式', formula: 'logₐb=ln b/ln a', usage: '底数变换' },
  ],

  selfEval: [
    { question: 'log₂(1/4) 等于多少', level: 'A', description: '-2' },
  ],

  relatedModels: ['MATH-F01', 'MATH-F02'],
  crossLinks: [],
}