// 知识节点 K34：平面向量的应用
import type { ConceptData } from './types'

export const K34: ConceptData = {
  id: 'K34',
  title: '平面向量的应用',
  subtitle: '向量法的威力',
  module: '三角与向量',
  chapter: '平面向量的应用',
  difficulty: 2,

  preCheck: [
    {
      question: '向量法可以证明几何中的什么问题？',
      options: ['A. 只有长度问题', 'B. 平行、垂直、夹角、长度等', 'C. 只有角度问题', 'D. 只有面积问题'],
      answer: 'B',
      explanation: '向量法可以解决平行、垂直、夹角、长度等多种几何问题。',
    },
  ],

  narrative: {
    context: '向量是解决几何问题的有力工具。',
    confusion: '什么时候用向量法，什么时候用传统几何方法？',
    experiment: '用向量法证明菱形对角线互相垂直。',
    concept: '向量法是用向量的运算来解决几何问题的方法。',
    derivation: '用坐标表示几何量，用向量的运算性质证明结论。',
    transfer: '在物理中，向量法用于力的合成与分解。',
  },

  variations: {
    basic: [
      { label: '证明平行', formula: 'a∥b ⟺ a=λb', note: '共线' },
      { label: '证明垂直', formula: 'a⊥b ⟺ a·b=0', note: '点积为零' },
    ],
    advanced: [
      { label: '求夹角', formula: 'cos θ=(a·b)/(|a||b|)', note: '数量积公式' },
    ],
    challenge: [
      { label: '向量法证几何', note: '建系、表示、运算、结论' },
    ],
  },

  formulas: [
    { name: '平行判定', formula: 'a∥b ⟺ a=λb', usage: '证明平行' },
    { name: '垂直判定', formula: 'a⊥b ⟺ a·b=0', usage: '证明垂直' },
  ],

  selfEval: [
    { question: '用向量法证明几何问题的步骤是？', level: 'B', description: '建系→表示→运算→结论' },
  ],

  relatedModels: ['MATH-T07'],
  crossLinks: [],
}
