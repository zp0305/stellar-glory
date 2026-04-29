// 知识节点 K31：平面向量的运算
import type { ConceptData } from './types'

export const K31: ConceptData = {
  id: 'K31',
  title: '平面向量的运算',
  subtitle: '加减数乘的法则',
  module: '三角与向量',
  chapter: '平面向量的运算',
  difficulty: 1,

  preCheck: [
    {
      question: '若 a=(1,2)，b=(3,4)，则 a+b 等于？',
      options: ['A. (4,6)', 'B. (2,2)', 'C. (3,8)', 'D. (-2,-2)'],
      answer: 'A',
      explanation: '向量相加，对应坐标相加。',
    },
  ],

  narrative: {
    context: '向量的运算规则与数的运算类似，但有几何意义。',
    confusion: '向量减法的几何意义：a-b 是从 b 指向 a 的向量。',
    experiment: '验证向量加法的平行四边形法则。',
    concept: '向量的基本运算包括加法、减法、数乘。',
    derivation: 'a±b=(a₁±b₁,a₂±b₂)；λa=(λa₁,λa₂)',
    transfer: '向量运算可以解决几何证明问题。',
  },

  variations: {
    basic: [
      { label: '向量加法', formula: 'a+b=(a₁+b₁,a₂+b₂)', note: '坐标相加' },
      { label: '向量减法', formula: 'a-b=(a₁-b₁,a₂-b₂)', note: '坐标相减' },
      { label: '数乘向量', formula: 'λa=(λa₁,λa₂)', note: '标量乘向量' },
    ],
    advanced: [
      { label: '运算律', formula: 'a+b=b+a，(a+b)+c=a+(b+c)', note: '交换律和结合律' },
    ],
    challenge: [
      { label: '向量法证几何', note: '用向量运算证明平行、垂直等' },
    ],
  },

  formulas: [
    { name: '向量加减', formula: 'a±b=(a₁±b₁,a₂±b₂)', usage: '坐标运算' },
    { name: '数乘', formula: 'λa=(λa₁,λa₂)', usage: '伸缩变换' },
  ],

  selfEval: [
    { question: '2a-b 的坐标是什么？', level: 'A', description: '(2a₁-b₁,2a₂-b₂)' },
  ],

  relatedModels: ['MATH-T06', 'MATH-T07'],
  crossLinks: [],
}
