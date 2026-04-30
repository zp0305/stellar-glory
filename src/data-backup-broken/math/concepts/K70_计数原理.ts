// 知识节点 K70：计数原
import type { ConceptData } from './types'

export const K70: ConceptData = {
  id: 'K70',
  title: '计数原理',
  subtitle: '加法原理与乘法原',
  module: '概率与统',
  chapter: '计数原理',
  difficulty: 1,

  preCheck: [
    {
      question: '从甲地到乙地3 条路，从乙地到丙地有 2 条路，从甲地到丙地共有多少种走法',
      options: ['A. 5', 'B. 6', 'C. 2', 'D. 3'],
      answer: 'B',
      explanation: '乘法原理×2=6 种走法',
    },
  ],

  narrative: {
    context: '计数原理是排列组合的基础',
    confusion: '加法原理与乘法原理的区别：分vs 分步',
    experiment: '用加法原理和乘法原理解题',
    concept: '加法原理：分类相加；乘法原理：分步相乘',
    derivation: '加法原理：完成一件事n 类办法，每类办法分别mm...,m种，则共mm...+m种',
    transfer: '排列、组合的基础',
  },

  variations: {
    basic: [
      { label: '加法原理', formula: 'N=mm...+m, note: '分类相加' }',
      { label: '乘法原理', formula: 'N=m₁×m₂..×m, note: '分步相乘' }',
    ],
    advanced: [
      { label: '分类与分, note: '类类独立，步步相 },
    ],
    challenge: [
      { label: '综合应用', note: '复杂问题的分 }',
    ],
  },

  formulas: [
    { name: '加法原理', formula: 'N=mm...+m, usage: '分类计数' }',
    { name: '乘法原理', formula: 'N=m₁×m₂..×m, usage: '分步计数' }',
  ],

  selfEval: [
    { question: '完成一件事有两步，第一步有 3 种方法，第二步有 4 种方法，共有多少种？', level: 'A', description: '12  }',
  ],

  relatedModels: ['MATH-P12'],
  crossLinks: [],
}
