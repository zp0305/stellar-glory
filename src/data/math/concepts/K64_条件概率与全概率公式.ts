// 知识节点 K64：条件概率与全概率公式
import type { ConceptData } from './types'

export const K64: ConceptData = {
  id: 'K64',
  title: '条件概率与全概率公式',
  subtitle: '概率的链式法则',
  module: '概率与统计',
  chapter: '条件概率与全概率公式',
  difficulty: 2,

  preCheck: [
    {
      question: 'P(B|A) 的含义是？',
      options: ['A. A 发生时 B 发生的概率', 'B. B 发生时 A 发生的概率', 'C. A 和 B 同时发生的概率', 'D. A 或 B 发生的概率'],
      answer: 'A',
      explanation: 'P(B|A) 是在 A 发生的条件下 B 发生的概率。',
    },
  ],

  narrative: {
    context: '条件概率是概率论中的核心概念。',
    confusion: 'P(B|A) 与 P(A|B) 的区别。',
    experiment: '袋中有 3 白 2 黑球，不放回取两次，求第一次白第二次黑的概率。',
    concept: '条件概率是在一个事件发生的条件下，另一个事件发生的概率。',
    derivation: 'P(B|A)=P(AB)/P(A)；全概率公式：P(B)=∑P(Aᵢ)P(B|Aᵢ)',
    transfer: '贝叶斯公式。',
  },

  variations: {
    basic: [
      { label: '条件概率', formula: 'P(B|A)=P(AB)/P(A)', note: 'A 发生条件下 B 发生' },
      { label: '乘法公式', formula: 'P(AB)=P(A)P(B|A)', note: '链式法则' },
    ],
    advanced: [
      { label: '全概率公式', formula: 'P(B)=∑P(Aᵢ)P(B|Aᵢ)', note: '将复杂事件分解' },
      { label: '贝叶斯公式', formula: 'P(A|B)=P(A)P(B|A)/P(B)', note: '由结果推原因' },
    ],
    challenge: [
      { label: '全概率公式应用', note: '识别完备事件组' },
    ],
  },

  formulas: [
    { name: '条件概率', formula: 'P(B|A)=P(AB)/P(A)', usage: '条件概率计算' },
    { name: '全概率公式', formula: 'P(B)=∑P(Aᵢ)P(B|Aᵢ)', usage: '分解复杂事件' },
  ],

  selfEval: [
    { question: '全概率公式的应用场景是？', level: 'B', description: '求复杂事件的概率' },
  ],

  relatedModels: ['MATH-P06'],
  crossLinks: [],
}
