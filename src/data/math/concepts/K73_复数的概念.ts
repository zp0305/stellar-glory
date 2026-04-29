// 知识节点 K73：复数的概念
import type { ConceptData } from './types'

export const K73: ConceptData = {
  id: 'K73',
  title: '复数的概念',
  subtitle: '扩展数域的边界',
  module: '复数',
  chapter: '复数的概念',
  difficulty: 1,

  preCheck: [
    {
      question: 'i² 等于？',
      options: ['A. 1', 'B. -1', 'C. i', 'D. -i'],
      answer: 'B',
      explanation: 'i 是虚数单位，i²=-1。',
    },
  ],

  narrative: {
    context: '复数是实数系的扩展，解决了负数开方的问题。',
    confusion: '复数的实部与虚部的概念。',
    experiment: '复平面上的点与复数一一对应。',
    concept: '复数形如 a+bi，其中 a,b∈R，i²=-1。',
    derivation: 'a 称为实部，b 称为虚部。当 b=0 时为实数，当 b≠0 时为虚数。',
    transfer: '复数的模、共轭复数的概念。',
  },

  variations: {
    basic: [
      { label: '复数形式', formula: 'z=a+bi', note: 'a 为实部，b 为虚部' },
      { label: '虚数单位', formula: 'i²=-1', note: '定义' },
    ],
    advanced: [
      { label: '复平面', note: '复数与平面点的对应' },
      { label: '共轭复数', formula: 'z=a+bi 的共轭是 a-bi', note: '记作 z̄' },
    ],
    challenge: [
      { label: '复数的模', formula: '|z|=√(a²+b²)', note: '复数的大小' },
    ],
  },

  formulas: [
    { name: '虚数单位', formula: 'i²=-1', usage: '复数定义' },
    { name: '复数模', formula: '|z|=√(a²+b²)', usage: '求模长' },
  ],

  selfEval: [
    { question: '复数 3+4i 的模是？', level: 'A', description: '5' },
  ],

  relatedModels: ['MATH-B01'],
  crossLinks: [],
}
