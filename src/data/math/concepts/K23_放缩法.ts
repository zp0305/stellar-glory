// 知识节点 K23：放缩法
import type { ConceptData } from './types'

export const K23: ConceptData = {
  id: 'K23',
  title: '放缩法',
  subtitle: '不等式证明的艺术',
  module: '函数与导数',
  chapter: '放缩法',
  difficulty: 3,

  preCheck: [
    {
      question: '放缩法的本质是什么？',
      options: ['A. 将复杂式子化简', 'B. 将不易处理的量用易处理的量替代', 'C. 消去未知数', 'D. 求导'],
      answer: 'B',
      explanation: '放缩法是将不易处理的量用相近但更易处理的量来替代。',
    },
  ],

  narrative: {
    context: '在证明不等式时，直接证明困难，放缩法是一种迂回策略。',
    confusion: '放缩要有方向性，放过头就证不出来了。',
    experiment: '证明 ln x < x-1 (x>0 且 x≠1)。',
    concept: '放缩法是在证明不等式时，将复杂表达式适当放大或缩小。',
    derivation: '常见放缩：sin x < x < tan x (x>0)；ln x < x-1。',
    transfer: '放缩法与数学归纳法结合是常见技巧。',
  },

  variations: {
    basic: [
      { label: '直接放缩', note: '利用已知不等式' },
      { label: '求和放缩', note: '积分或裂项后放缩' },
    ],
    advanced: [
      { label: 'ln x 放缩', formula: 'ln x ≤ x-1', note: '常用放缩' },
    ],
    challenge: [
      { label: '构造数列放缩', note: '与数列结合' },
    ],
  },

  formulas: [
    { name: 'ln x 放缩', formula: 'ln x ≤ x-1', usage: '常用放缩公式' },
    { name: 'eˣ 放缩', formula: 'eˣ ≥ x+1', usage: '常用放缩公式' },
  ],

  selfEval: [
    { question: '如何放缩证明 ∑1/n > ln(n+1)？', level: 'C', description: '利用 1/k > ln(k+1)-ln k' },
  ],

  relatedModels: ['MATH-F07', 'MATH-S05'],
  crossLinks: [],
}
