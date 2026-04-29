// 知识节点 K19：导数与函数的单调性
import type { ConceptData } from './types'

export const K19: ConceptData = {
  id: 'K19',
  title: '导数与函数的单调性',
  subtitle: '导数法判断单调性',
  module: '函数与导数',
  chapter: '导数与函数的单调性',
  difficulty: 2,

  preCheck: [
    {
      question: '若 f\'(x)>0 在区间 (a,b) 上恒成立，则 f(x) 在 (a,b) 上？',
      options: ['A. 递增', 'B. 递减', 'C. 常数', 'D. 无法确定'],
      answer: 'A',
      explanation: '导数大于0说明函数在该区间递增。',
    },
  ],

  narrative: {
    context: '用导数判断单调性比用定义法更快捷。',
    confusion: '导数大于0是单调递增的充分条件，不是必要条件（可导函数是）。',
    experiment: '用导数法判断 f(x)=x³-x 的单调区间。',
    concept: '导数的正负直接反映函数的增减。',
    derivation: 'f\'(x)>0 ⇒ f(x) 递增；f\'(x)<0 ⇒ f(x) 递减',
    transfer: 'f\'(x)=0 的点可能是极值点，需要进一步判断。',
  },

  variations: {
    basic: [
      { label: '导数正', formula: 'f\'(x)>0 ⇒ f(x) 递增', note: '充分条件' },
      { label: '导数负', formula: 'f\'(x)<0 ⇒ f(x) 递减', note: '充分条件' },
    ],
    advanced: [
      { label: '导数法步骤', note: '求定义域→求导→解不等式→判断单调性' },
    ],
    challenge: [
      { label: '参数对单调性的影响', note: '分类讨论' },
    ],
  },

  formulas: [
    { name: '导数判单调', formula: 'f\'(x)>0 ⇔ f(x) 递增', usage: '导数法' },
  ],

  selfEval: [
    { question: 'f(x)=eˣ-x 的单调性是？', level: 'A', description: '在 R 上递增' },
  ],

  relatedModels: ['MATH-F01', 'MATH-F03'],
  crossLinks: [],
}
