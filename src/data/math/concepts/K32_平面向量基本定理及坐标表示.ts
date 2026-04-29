// 知识节点 K32：平面向量基本定理及坐标表示
import type { ConceptData } from './types'

export const K32: ConceptData = {
  id: 'K32',
  title: '平面向量基本定理及坐标表示',
  subtitle: '基底的智慧',
  module: '三角与向量',
  chapter: '平面向量基本定理及坐标表示',
  difficulty: 2,

  preCheck: [
    {
      question: '若 e₁、e₂ 是平面内不共线的向量，则该平面内任一向量 a 可以表示为？',
      options: ['A. a=e₁+e₂', 'B. a=λe₁', 'C. a=λe₁+μe₂', 'D. a=e₁·e₂'],
      answer: 'C',
      explanation: '平面向量基本定理：任一向量可唯一表示为两个不共线向量的线性组合。',
    },
  ],

  narrative: {
    context: '基底的选择决定了坐标系的表示方式。',
    confusion: '共线向量定理和平面向量基本定理的区别。',
    experiment: '用坐标法表示平面内的任意向量。',
    concept: '平面向量基本定理：平面内任一向量可唯一表示为两个不共线向量的线性组合。',
    derivation: 'a=xe₁+ye₂，(x,y) 就是向量 a 在基底 (e₁,e₂) 下的坐标。',
    transfer: '坐标系的建立和基底的选取。',
  },

  variations: {
    basic: [
      { label: '平面向量基本定理', formula: 'a=λe₁+μe₂', note: 'e₁、e₂ 不共线' },
      { label: '共线向量定理', formula: 'a=λb', note: 'a 与 b 共线' },
    ],
    advanced: [
      { label: '坐标表示', formula: 'a=(x,y)', note: '在标准正交基下' },
    ],
    challenge: [
      { label: '向量坐标的相对性', note: '不同基底下坐标不同' },
    ],
  },

  formulas: [
    { name: '向量坐标', formula: 'a=(x,y)=xe₁+ye₂', usage: '坐标表示' },
    { name: '共线判定', formula: 'a=λb ⟺ a∥b', usage: '向量平行' },
  ],

  selfEval: [
    { question: '向量 (3,6) 用 (1,2) 表示是什么？', level: 'A', description: '3(1,2)' },
  ],

  relatedModels: ['MATH-T06', 'MATH-T07'],
  crossLinks: [],
}
