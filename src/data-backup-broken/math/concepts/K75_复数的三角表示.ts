// 知识节点 K75：复数的三角表示
import type { ConceptData } from './types'

export const K75: ConceptData = {
  id: 'K75',
  title: '复数的三角表',
  subtitle: '复数的极坐标形式',
  module: '复数',
  chapter: '复数的三角表',
  difficulty: 2,

  preCheck: [
    {
      question: '复数 z=1+i 的三角形式是',
      options: ['A. (cos 45°+i sin 45°)', 'B. (cos 90°+i sin 90°)', 'C. cos 45°+i sin 45°', 'D. 2(cos 45°+i sin 45°)'],
      answer: 'A',
      explanation: '|z|=，arg z=45°，所z=(cos 45°+i sin 45°)',
    },
  ],

  narrative: {
    context: '复数的三角表示在复数运算中有重要作用',
    confusion: '辐角与辐角的区别',
    experiment: '将复-1-i 化为三角形式',
    concept: '复数 z=a+bi 可以表示z=r(cos θ+i sin θ)，其r=|z|，arg z',
    derivation: 'r=a²+b²)，cos θ=a/r，sin θ=b/r',
    transfer: '复数乘法的几何意义：模相乘，辐角相加',
  },

  variations: {
    basic: [
      { label: '三角形式', formula: 'z=r(cos θ+i sin θ)', note: 'r 为模，为辐 }',
      { label: '指数形式', formula: 'z=re^(iθ)', note: '欧拉公式' },
    ],
    advanced: [
      { label: '乘法几何意义', formula: 'z₁z的模=模相乘，辐角=辐角相加', note: '三角形式乘法' },
    ],
    challenge: [
      { label: '单位, formula: 'ω=cos(2π/n)+i sin(2π/n)', note: 'n 次单位根' }',
    ],
  },

  formulas: [
    { name: '复数三角形式', formula: 'z=r(cos θ+i sin θ)', usage: '三角表示' },
    { name: '欧拉公式', formula: 'e^(iθ)=cos θ+i sin θ', usage: '复数指数形式' },
  ],

  selfEval: [
    { question: '复数三角形式中，r 的取值范围是, level: 'A', description: 'r' }',
  ],

  relatedModels: ['MATH-B03'],
  crossLinks: [],
}
