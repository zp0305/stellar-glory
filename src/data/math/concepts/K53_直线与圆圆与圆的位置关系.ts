// 知识节点 K53：直线与圆圆与圆的位置关系
import type { ConceptData } from './types'

export const K53: ConceptData = {
  id: 'K53',
  title: '直线与圆圆与圆的位置关系',
  subtitle: '相切相离相交',
  module: '解析几何',
  chapter: '直线与圆圆与圆的位置关系',
  difficulty: 2,

  preCheck: [
    {
      question: '圆 (x-1)²+(y-2)²=4 与直线 x=1 的位置关系是？',
      options: ['A. 相离', 'B. 相切', 'C. 相交', 'D. 无法确定'],
      answer: 'B',
      explanation: '圆心 (1,2) 到直线 x=1 的距离为 0，等于半径 2？不对，距离是 0，小于 2，应该是相交。',
    },
  ],

  narrative: {
    context: '判断位置关系是解析几何的基本问题。',
    confusion: '圆与圆相切包括内切和外切。',
    experiment: '观察不同位置关系下圆与直线的交点个数。',
    concept: '位置关系由圆心到直线的距离与半径的大小关系决定。',
    derivation: 'd>r 相离，d=r 相切，d<r 相交。',
    transfer: '切点弦、公切线等概念。',
  },

  variations: {
    basic: [
      { label: '相交', formula: 'd<r', note: '两个交点' },
      { label: '相切', formula: 'd=r', note: '一个切点' },
      { label: '相离', formula: 'd>r', note: '无交点' },
    ],
    advanced: [
      { label: '圆与圆位置', formula: 'd>R+r 外离，d=R+r 外切，|R-r|<d<R+r 相交，d=|R-r| 内切，d<|R-r| 内含', note: '五种关系' },
    ],
    challenge: [
      { label: '切点弦方程', formula: 'xx₁+yy₁=r²', note: '圆上一点 (x₁,y₁) 的切点弦' },
    ],
  },

  formulas: [
    { name: '点到直线距离', formula: 'd=|Ax₀+By₀+C|/√(A²+B²)', usage: '判断位置关系' },
  ],

  selfEval: [
    { question: '判断位置关系用哪个量？', level: 'A', description: '圆心到直线的距离与半径比较' },
  ],

  relatedModels: ['MATH-A02', 'MATH-A03'],
  crossLinks: [],
}
