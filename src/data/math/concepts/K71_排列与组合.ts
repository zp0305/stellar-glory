// 知识节点 K71：排列与组合
import type { ConceptData } from './types'

export const K71: ConceptData = {
  id: 'K71',
  title: '排列与组合',
  subtitle: '有序与无序的选择',
  module: '概率与统计',
  chapter: '排列与组合',
  difficulty: 1,

  preCheck: [
    {
      question: '从 5 个人中选 3 个人排成一排，有多少种排法？',
      options: ['A. 10', 'B. 60', 'C. 20', 'D. 15'],
      answer: 'B',
      explanation: '排列数 A(5,3)=5×4×3=60。',
    },
  ],

  narrative: {
    context: '排列与组合是计数问题的核心工具。',
    confusion: '排列与组合的区别：有序 vs 无序。',
    experiment: '从 5 人中选 3 人参加比赛和选 3 人排成一排的区别。',
    concept: '排列：有序选择；组合：无序选择。',
    derivation: '排列数：A(m,n)=m!/(m-n)!；组合数：C(m,n)=m!/[n!(m-n)!]',
    transfer: '二项式定理是组合数的应用。',
  },

  variations: {
    basic: [
      { label: '排列数', formula: 'A(m,n)=m!/(m-n)!', note: '有序' },
      { label: '组合数', formula: 'C(m,n)=m!/[n!(m-n)!]', note: '无序' },
    ],
    advanced: [
      { label: '组合恒等式', formula: 'C(m,n)=C(m,m-n)', note: '对称性' },
    ],
    challenge: [
      { label: '排列组合混合', note: '先选后排' },
    ],
  },

  formulas: [
    { name: '排列数', formula: 'A(m,n)=m!/(m-n)!', usage: '有序选择' },
    { name: '组合数', formula: 'C(m,n)=m!/[n!(m-n)!]', usage: '无序选择' },
  ],

  selfEval: [
    { question: '排列与组合的本质区别是？', level: 'A', description: '排列有序，组合无序' },
  ],

  relatedModels: ['MATH-P13'],
  crossLinks: [],
}
