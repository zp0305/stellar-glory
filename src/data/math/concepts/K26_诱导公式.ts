// 知识节点 K26：诱导公式
import type { ConceptData } from './types'

export const K26: ConceptData = {
  id: 'K26',
  title: '诱导公式',
  subtitle: '任意角到锐角的转化',
  module: '三角与向量',
  chapter: '诱导公式',
  difficulty: 1,

  preCheck: [
    {
      question: 'sin(π-α) 等于？',
      options: ['A. sin α', 'B. -sin α', 'C. cos α', 'D. -cos α'],
      answer: 'A',
      explanation: '根据诱导公式，sin(π-α)=sin α。',
    },
  ],

  narrative: {
    context: '利用单位圆的对称性，可以将任意角的三角函数转化为锐角三角函数。',
    confusion: '诱导公式的记忆口诀：奇变偶不变，符号看象限。',
    experiment: '利用单位圆求 sin 150°、cos 120° 的值。',
    concept: '诱导公式建立了任意角三角函数与锐角三角函数的关系。',
    derivation: '口诀：奇变偶不变，符号看象限。',
    transfer: '利用诱导公式求任意角的三角函数值。',
  },

  variations: {
    basic: [
      { label: 'sin(π-α)', formula: 'sin α', note: '第二象限' },
      { label: 'cos(π-α)', formula: '-cos α', note: '第二象限' },
      { label: 'sin(π+α)', formula: '-sin α', note: '第三象限' },
    ],
    advanced: [
      { label: '奇变偶不变', note: 'π/2 的奇数倍变函数名' },
      { label: '符号看象限', note: '根据所在象限确定符号' },
    ],
    challenge: [
      { label: '综合应用', note: '多个诱导公式结合使用' },
    ],
  },

  formulas: [
    { name: '诱导公式', formula: 'sin(π-α)=sin α', usage: '求三角函数值' },
    { name: '余弦诱导', formula: 'cos(π-α)=-cos α', usage: '求三角函数值' },
  ],

  selfEval: [
    { question: 'cos 120° 等于多少？', level: 'A', description: '-1/2' },
  ],

  relatedModels: ['MATH-T01'],
  crossLinks: [],
}
