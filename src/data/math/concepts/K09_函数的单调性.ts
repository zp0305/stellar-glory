// 知识节点 K09：函数的单调性
import type { ConceptData } from './types'

export const K09: ConceptData = {
  id: 'K09',
  title: '函数的单调性',
  subtitle: '上升与下降的数学语言',
  module: '函数与导数',
  chapter: '函数的单调性',
  difficulty: 1,

  preCheck: [
    {
      question: '函数 f(x)=x² 在 (0,+∞) 上是？',
      options: ['A. 递减', 'B. 递增', 'C. 不增不减', 'D. 无法确定'],
      answer: 'B',
      explanation: '当 x>0 时，x 越大 x² 越大，所以是递增的。',
    },
  ],

  narrative: {
    context: '在研究函数时，描述它的"增长"或"下降"趋势是基本问题。',
    confusion: '单调性是区间性质，必须指明区间。"在 R 上递增"意味着对任意 x1<x2 都有 f(x1)<f(x2)。',
    experiment: '观察 y=x、y=x²、y=1/x 在各自定义域上的图像变化。',
    concept: '单调性描述函数在某个区间内的增减趋势。',
    derivation: '递增：∀x1<x2, f(x1)<f(x2)；递减：∀x1<x2, f(x1)>f(x2)',
    transfer: '用导数判断单调性：f\'(x)>0 则递增，f\'(x)<0 则递减。',
  },

  variations: {
    basic: [
      { label: '增函数', formula: 'x1<x2 ⇒ f(x1)<f(x2)', note: '单调递增' },
      { label: '减函数', formula: 'x1<x2 ⇒ f(x1)>f(x2)', note: '单调递减' },
      { label: '单调区间', note: '单调性成立的 x 范围' },
    ],
    advanced: [
      { label: '单调性的证明', note: '定义法：作差或作商' },
      { label: '复合函数单调性', note: '同增异减' },
    ],
    challenge: [
      { label: '双勾函数', formula: 'y=x+1/x', note: '利用单调性求最值' },
    ],
  },

  formulas: [
    { name: '增函数定义', formula: '∀x1<x2, f(x1)<f(x2)', usage: '证明或判断递增' },
    { name: '导数判别', formula: 'f\'(x)>0 ⇒ 递增', usage: '导数法判断单调性' },
  ],

  selfEval: [
    { question: 'f(x)=1/x 在 (-∞,0) 上是增还是减？', level: 'B', description: '递增' },
  ],

  relatedModels: ['MATH-F01', 'MATH-F02'],
  crossLinks: [],
}
