// 知识节点 K05：全称量词与存在量词
import type { ConceptData } from './types'

export const K05: ConceptData = {
  id: 'K05',
  title: '全称量词与存在量词',
  subtitle: '从"所有"到"存在"的跨越',
  module: '集合与逻辑',
  chapter: '全称量词与存在量词',
  difficulty: 2,

  preCheck: [
    {
      question: '命题"∃x∈R, x²=2"的含义是？',
      options: ['A. 所有实数的平方都等于2', 'B. 存在一个实数，它的平方等于2', 'C. 不存在实数的平方等于2', 'D. x²=2 有无穷多解'],
      answer: 'B',
      explanation: '∃ 是存在量词，表示"存在至少一个"。该命题表示存在实数 x 使得 x²=2。',
    },
  ],

  narrative: {
    context: '数学命题常常涉及"所有"和"存在"的概念，这是量化命题的核心。',
    confusion: '全称量词命题的否定是存在量词命题，反之亦然。',
    experiment: '写出并比较：(1) ∀x∈R, x²≥0；(2) ∃x∈R, x²=2。',
    concept: '全称量词∀表示"所有"，存在量词∃表示"存在至少一个"。',
    derivation: '∀x∈A, P(x) 的否定：∃x∈A, ¬P(x)',
    transfer: '在不等式证明中，全称量词需要构造性证明或反例。',
  },

  variations: {
    basic: [
      { label: '全称量词', formula: '∀', note: '对所有' },
      { label: '存在量词', formula: '∃', note: '存在至少一个' },
    ],
    advanced: [
      { label: '全称命题否定', formula: '¬(∀x, P(x)) ≡ ∃x, ¬P(x)', note: '量词转化' },
      { label: '存在命题否定', formula: '¬(∃x, P(x)) ≡ ∀x, ¬P(x)', note: '量词转化' },
    ],
    challenge: [
      { label: '嵌套量词', note: '∀∃, ∃∀ 的顺序影响含义' },
    ],
  },

  formulas: [
    { name: '全称量词', formula: '∀x∈A, P(x)', usage: '对所有元素成立' },
    { name: '存在量词', formula: '∃x∈A, P(x)', usage: '存在元素使命题成立' },
  ],

  selfEval: [
    { question: '"所有奇数都是质数"的否定是？', level: 'B', description: '存在一个奇数不是质数' },
  ],

  relatedModels: ['MATH-L02'],
  crossLinks: [],
}
