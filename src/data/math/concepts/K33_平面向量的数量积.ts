// 知识节点 K33：平面向量的数量积
import type { ConceptData } from './types'

export const K33: ConceptData = {
  id: 'K33',
  title: '平面向量的数量积',
  subtitle: '向量到标量的映射',
  module: '三角与向量',
  chapter: '平面向量的数量积',
  difficulty: 2,

  preCheck: [
    {
      question: '若 a=(1,2)，b=(3,4)，则 a·b 等于？',
      options: ['A. (3,8)', 'B. 11', 'C. 10', 'D. 5'],
      answer: 'B',
      explanation: 'a·b=1×3+2×4=3+8=11。',
    },
  ],

  narrative: {
    context: '数量积给出了向量间"投影"关系的数学描述。',
    confusion: '数量积是标量，不是向量。',
    experiment: '求 a=(1,0) 与 b=(1,1) 的数量积，并说明几何意义。',
    concept: '数量积（点积）是两个向量相乘得到标量的运算。',
    derivation: 'a·b=|a||b|cos θ=a₁b₁+a₂b₂',
    transfer: '判断向量垂直：a·b=0。',
  },

  variations: {
    basic: [
      { label: '数量积定义', formula: 'a·b=|a||b|cos θ', note: '几何定义' },
      { label: '坐标公式', formula: 'a·b=a₁b₁+a₂b₂', note: '代数计算' },
    ],
    advanced: [
      { label: '垂直判定', formula: 'a·b=0 ⟺ a⊥b', note: '充要条件' },
      { label: '夹角公式', formula: 'cos θ=(a·b)/(|a||b|)', usage: '求向量夹角' },
    ],
    challenge: [
      { label: '向量投影', formula: 'proj_b a=(a·b)/|b|', note: 'a 在 b 方向上的投影' },
    ],
  },

  formulas: [
    { name: '数量积', formula: 'a·b=a₁b₁+a₂b₂', usage: '坐标运算' },
    { name: '垂直条件', formula: 'a·b=0 ⟺ a⊥b', usage: '判断垂直' },
  ],

  selfEval: [
    { question: '如何判断两个向量是否垂直？', level: 'A', description: '数量积等于 0' },
  ],

  relatedModels: ['MATH-T07'],
  crossLinks: [],
}
