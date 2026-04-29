// 知识节点 K49：空间向量的应用
import type { ConceptData } from './types'

export const K49: ConceptData = {
  id: 'K49',
  title: '空间向量的应用',
  subtitle: '向量法解立体几何',
  module: '立体几何',
  chapter: '空间向量的应用',
  difficulty: 2,

  preCheck: [
    {
      question: '用空间向量求线面角的关键是？',
      options: ['A. 求直线的方向向量与平面的法向量', 'B. 直接用量角器', 'C. 求直线的斜率', 'D. 求平面上两点距离'],
      answer: 'A',
      explanation: '线面角是直线的方向向量与平面法向量夹角的余角。',
    },
  ],

  narrative: {
    context: '空间向量为立体几何提供了统一的解决方法。',
    confusion: '线面角与线与法向量夹角的区别。',
    experiment: '用向量法求二面角。',
    concept: '空间向量可以解决立体几何中的角度、距离等问题。',
    derivation: '线面角：θ=90°-〈a,n〉；面面角：〈n₁,n₂〉；异面直线距离：|AB·n|/|n|。',
    transfer: '向量法可以避免传统几何的辅助线构造。',
  },

  variations: {
    basic: [
      { label: '线面角', formula: 'sin θ=|cos〈a,n〉|', note: 'a 为直线方向向量，n 为平面法向量' },
      { label: '二面角', formula: 'cos θ=|cos〈n₁,n₂〉|', note: 'n₁,n₂ 为两平面法向量' },
    ],
    advanced: [
      { label: '点到平面距离', formula: 'd=|AB·n|/|n|', note: 'B 到过 A 的平面' },
    ],
    challenge: [
      { label: '异面直线距离', note: '公垂线向量法' },
    ],
  },

  formulas: [
    { name: '线面角', formula: 'sin θ=|cos〈a,n〉|', usage: '求线面角' },
    { name: '二面角', formula: 'cos θ=|cos〈n₁,n₂〉|', usage: '求二面角' },
  ],

  selfEval: [
    { question: '如何用向量法求二面角？', level: 'B', description: '求两平面法向量的夹角' },
  ],

  relatedModels: ['MATH-G07'],
  crossLinks: [],
}
