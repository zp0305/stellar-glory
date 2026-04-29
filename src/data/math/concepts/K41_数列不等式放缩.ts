// 知识节点 K41：数列不等式放缩
import type { ConceptData } from './types'

export const K41: ConceptData = {
  id: 'K41',
  title: '数列不等式放缩',
  subtitle: '放缩的艺术',
  module: '数列与归纳',
  chapter: '数列不等式放缩',
  difficulty: 3,

  preCheck: [
    {
      question: '放缩法的关键是什么？',
      options: ['A. 将所有项都放大', 'B. 放缩有度，恰到好处', 'C. 尽量多放缩', 'D. 不需要放缩'],
      answer: 'B',
      explanation: '放缩要有方向和限度，放过头或不够都达不到目的。',
    },
  ],

  narrative: {
    context: '数列不等式证明中，放缩法是重要的技巧。',
    confusion: '什么时候放缩？放缩多少合适？',
    experiment: '证明 1+1/2+1/3+...+1/n > ln(n+1)。',
    concept: '放缩法是在证明不等式时，将不易处理的量用相近但更易处理的量来替代。',
    derivation: '常见放缩：1/k(k+1)=1/k-1/(k+1)。',
    transfer: '放缩后求和，再与目标比较。',
  },

  variations: {
    basic: [
      { label: '裂项放缩', formula: '1/k(k+1)=1/k-1/(k+1)', note: '常见技巧' },
    ],
    advanced: [
      { label: '积分放缩', note: '用积分比较数列和' },
    ],
    challenge: [
      { label: '综合放缩', note: '多种放缩技巧结合' },
    ],
  },

  formulas: [
    { name: '裂项放缩', formula: '1/k(k+1)=1/k-1/(k+1)', usage: '化简求和' },
  ],

  selfEval: [
    { question: '证明不等式时，放缩的目标是什么？', level: 'B', description: '得到可求的和再与目标比较' },
  ],

  relatedModels: ['MATH-S07'],
  crossLinks: [],
}
