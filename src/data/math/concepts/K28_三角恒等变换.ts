// 知识节点 K28：三角恒等变换
import type { ConceptData } from './types'

export const K28: ConceptData = {
  id: 'K28',
  title: '三角恒等变换',
  subtitle: '角的艺术',
  module: '三角与向量',
  chapter: '三角恒等变换',
  difficulty: 2,

  preCheck: [
    {
      question: 'cos²α - sin²α 等于？',
      options: ['A. 1', 'B. cos 2α', 'C. sin 2α', 'D. 2cos²α-1'],
      answer: 'B',
      explanation: 'cos²α - sin²α = cos 2α。',
    },
  ],

  narrative: {
    context: '三角恒等变换是化简三角表达式和证明三角恒等式的基础。',
    confusion: '和差角公式、倍角公式容易混淆。',
    experiment: '证明 sin(α+β) = sin α cos β + cos α sin β。',
    concept: '三角恒等变换是利用三角函数公式进行变形。',
    derivation: 'cos(α-β)=cos α cos β+sin α sin β；sin(α+β)=sin α cos β+cos α sin β',
    transfer: '辅助角公式：a sin x + b cos x = √(a²+b²) sin(x+φ)',
  },

  variations: {
    basic: [
      { label: '两角和差', formula: 'sin(α±β)=sin α cos β±cos α sin β', note: '正弦和差' },
      { label: '二倍角', formula: 'sin 2α=2 sin α cos α', note: '倍角公式' },
    ],
    advanced: [
      { label: '辅助角公式', formula: 'a sin x+b cos x=√(a²+b²)sin(x+φ)', note: '化简为单个三角函数' },
    ],
    challenge: [
      { label: '万能公式', formula: 'sin α=2t/(1+t²)，cos α=(1-t²)/(1+t²)', note: 'tan(α/2)=t' },
    ],
  },

  formulas: [
    { name: 'cos二倍角', formula: 'cos 2α=cos²α-sin²α=2cos²α-1', usage: '化简' },
    { name: '辅助角公式', formula: 'a sin x+b cos x=√(a²+b²)sin(x+φ)', usage: '化简' },
  ],

  selfEval: [
    { question: 'sin 15° 的值为？', level: 'B', description: '(√6-√2)/4' },
  ],

  relatedModels: ['MATH-T02', 'MATH-T03'],
  crossLinks: [],
}
