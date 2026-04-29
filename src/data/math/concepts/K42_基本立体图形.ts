// 知识节点 K42：基本立体图形
import type { ConceptData } from './types'

export const K42: ConceptData = {
  id: 'K42',
  title: '基本立体图形',
  subtitle: '空间的形状',
  module: '立体几何',
  chapter: '基本立体图形',
  difficulty: 1,

  preCheck: [
    {
      question: '棱柱和棱锥的区别是？',
      options: ['A. 底面数量不同', 'B. 侧面形状不同', 'C. 顶点数量不同', 'D. 无法区分'],
      answer: 'A',
      explanation: '棱柱有两个平行的底面，棱锥只有一个底面。',
    },
  ],

  narrative: {
    context: '立体几何研究空间图形的性质和关系。',
    confusion: '正棱柱、正棱锥、正四面体的区别。',
    experiment: '观察教室中的立体图形。',
    concept: '基本立体图形包括棱柱、棱锥、圆柱、圆锥、球等。',
    derivation: '正棱柱：侧棱垂直于底面；正棱锥：顶点在底面的投影是底面中心。',
    transfer: '立体几何在建筑、工程中有广泛应用。',
  },

  variations: {
    basic: [
      { label: '棱柱', note: '两个平行底面+侧面' },
      { label: '棱锥', note: '一个底面+侧面' },
      { label: '圆柱圆锥', note: '旋转体' },
    ],
    advanced: [
      { label: '正多面体', note: '5种：正四面体、正六面体、正八面体、正十二面体、正二十面体' },
    ],
    challenge: [
      { label: '欧拉公式', formula: 'V-E+F=2', note: '多面体的顶点数-棱数+面数=2' },
    ],
  },

  formulas: [
    { name: '欧拉公式', formula: 'V-E+F=2', usage: '多面体性质' },
  ],

  selfEval: [
    { question: '正方体有几个面、几条棱、几个顶点？', level: 'A', description: '6个面、12条棱、8个顶点' },
  ],

  relatedModels: ['MATH-G01'],
  crossLinks: [],
}
