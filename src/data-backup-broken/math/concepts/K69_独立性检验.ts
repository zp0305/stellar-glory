// 知识节点 K69：独立性检
import type { ConceptData } from './types'

export const K69: ConceptData = {
  id: 'K69',
  title: '独立性检',
  subtitle: '用数据判断关联',
  module: '概率与统',
  chapter: '独立性检',
  difficulty: 3,

  preCheck: [
    {
      question: '独立性检验的目的是？',
      options: ['A. 判断两个变量是否独立', 'B. 求变量均, 'C. 求变量方, 'D. 判断变量类型'],
      answer: 'A',
      explanation: '独立性检验用于判断两个分类变量是否独立',
    },
  ],

  narrative: {
    context: '独立性检验是统计推断的重要方法',
    confusion: '卡方检验的基本思想',
    experiment: '分析吸烟与肺癌是否有关',
    concept: '独立性检验是用样本数据判断两个分类变量是否独立的方法',
    derivation: '卡方统计量：χ²=O-E)²/E，其O 为观察频数，E 为期望频数',
    transfer: '列联表分析',
  },

  variations: {
    basic: [
      { label: '原假, formula: 'H₀：两个变量独, note: '无关 }',
      { label: '卡方统计, formula: 'χ²=O-E)²/E', note: '衡量观察与期望的差距' }',
    ],
    advanced: [
      { label: '临界值法', note: '比较 χ² 与临界 }',
    ],
    challenge: [
      { label: 'p 值法', note: 'p 值判 }',
    ],
  },

  formulas: [
    { name: '卡方统计, formula: 'χ²=O-E)²/E', usage: '独立性检 },
  ],

  selfEval: [
    { question: 'χ² 值越大，说明什么？', level: 'B', description: '两个变量越可能不独立' },
  ],

  relatedModels: ['MATH-P11'],
  crossLinks: [],
}
