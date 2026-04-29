// 知识节点 K52：圆的方程
import type { ConceptData } from './types'

export const K52: ConceptData = {
  id: 'K52',
  title: '圆的方程',
  subtitle: '到定点距离相等的轨迹',
  module: '解析几何',
  chapter: '圆的方程',
  difficulty: 1,

  preCheck: [
    {
      question: '圆心为 (2,3)，半径为 4 的圆的标准方程是？',
      options: ['A. (x-2)²+(y-3)²=4', 'B. (x-2)²+(y-3)²=16', 'C. (x+2)²+(y+3)²=4', 'D. x²+y²=16'],
      answer: 'B',
      explanation: '圆的标准方程：(x-a)²+(y-b)²=r²，(a,b) 为圆心，r 为半径。',
    },
  ],

  narrative: {
    context: '圆是解析几何中的基本曲线。',
    confusion: '圆的标准方程和一般方程的区别。',
    experiment: '将圆 x²+y²-4x+6y-12=0 化为标准方程。',
    concept: '圆是到定点距离相等的点的轨迹。',
    derivation: '标准方程：(x-a)²+(y-b)²=r²；一般方程：x²+y²+Dx+Ey+F=0',
    transfer: '求圆的方程需要确定圆心和半径。',
  },

  variations: {
    basic: [
      { label: '标准方程', formula: '(x-a)²+(y-b)²=r²', note: '圆心 (a,b)，半径 r' },
      { label: '一般方程', formula: 'x²+y²+Dx+Ey+F=0', note: '需配方化为标准' },
    ],
    advanced: [
      { label: '直径式', formula: '(x-x₁)(x-x₂)+(y-y₁)(y-y₂)=0', note: '以线段为直径' },
    ],
    challenge: [
      { label: '圆的参数方程', formula: 'x=a+r cos θ, y=b+r sin θ', note: '三角换元' },
    ],
  },

  formulas: [
    { name: '圆标准方程', formula: '(x-a)²+(y-b)²=r²', usage: '圆心 (a,b)，半径 r' },
  ],

  selfEval: [
    { question: 'x²+y²-4x+6y-12=0 的圆心和半径是？', level: 'B', description: '圆心 (2,-3)，半径 5' },
  ],

  relatedModels: ['MATH-A02'],
  crossLinks: [],
}
