// 知识节点 K63：事件的相互独立性
import type { ConceptData } from './types'

export const K63: ConceptData = {
  id: 'K63',
  title: '事件的相互独立性',
  subtitle: '互不影响的事件',
  module: '概率与统计',
  chapter: '事件的相互独立性',
  difficulty: 2,

  preCheck: [
    {
      question: '若 P(AB)=P(A)P(B)，则 A 与 B 是什么关系？',
      options: ['A. 对立事件', 'B. 互斥事件', 'C. 独立事件', 'D. 必然事件'],
      answer: 'C',
      explanation: 'P(AB)=P(A)P(B) 是独立事件的定义。',
    },
  ],

  narrative: {
    context: '独立性是概率论中的重要概念。',
    confusion: '互斥与独立的区别。',
    experiment: '抛两枚硬币，研究正正、正反、反正、反反的概率。',
    concept: '若一个事件的发生不影响另一个事件发生的概率，则称这两个事件相互独立。',
    derivation: 'A 与 B 独立 ⟺ P(AB)=P(A)P(B)',
    transfer: '多个独立事件的乘法公式。',
  },

  variations: {
    basic: [
      { label: '独立定义', formula: 'P(AB)=P(A)P(B)', note: '独立' },
      { label: '互斥', formula: 'P(A∪B)=P(A)+P(B)', note: '无公共部分' },
    ],
    advanced: [
      { label: 'n 个独立事件', formula: 'P(A₁A₂...Aₙ)=P(A₁)P(A₂)...P(Aₙ)', note: '乘法公式' },
    ],
    challenge: [
      { label: '条件概率与独立', formula: 'P(B|A)=P(B) ⟺ A 与 B 独立', note: '独立性的等价条件' },
    ],
  },

  formulas: [
    { name: '独立乘法公式', formula: 'P(AB)=P(A)P(B)', usage: '独立事件概率' },
  ],

  selfEval: [
    { question: '独立事件与互斥事件的区别是？', level: 'B', description: '独立事件 P(AB)=P(A)P(B)，互斥事件 P(A∪B)=P(A)+P(B)' },
  ],

  relatedModels: ['MATH-P05'],
  crossLinks: [],
}
