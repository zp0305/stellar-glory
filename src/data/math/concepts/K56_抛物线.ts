// 知识节点 K56：抛物线
import type { ConceptData } from './types'

export const K56: ConceptData = {
  id: 'K56',
  title: '抛物线',
  subtitle: '到定点和定直线距离相等',
  module: '解析几何',
  chapter: '抛物线',
  difficulty: 1,

  preCheck: [
    {
      question: '抛物线 y²=4x 的焦点坐标是？',
      options: ['A. (1,0)', 'B. (0,1)', 'C. (4,0)', 'D. (2,0)'],
      answer: 'A',
      explanation: '抛物线 y²=2px 的焦点是 (p/2,0)，这里 2p=4，p=2，焦点是 (1,0)。',
    },
  ],

  narrative: {
    context: '抛物线是投掷物体的运动轨迹。',
    confusion: '不同开口方向的抛物线标准方程。',
    experiment: '用手电筒的光束观察抛物线。',
    concept: '抛物线是到焦点和准线距离相等的点的轨迹。',
    derivation: '标准方程：y²=2px，焦点 (p/2,0)，准线 x=-p/2',
    transfer: '焦半径、通径等概念。',
  },

  variations: {
    basic: [
      { label: 'y²=2px', note: '开口向右，焦点 (p/2,0)' },
      { label: 'x²=2py', note: '开口向上，焦点 (0,p/2)' },
      { label: '通径', formula: '长度 2p', note: '过焦点垂直于对称轴的弦' },
    ],
    advanced: [
      { label: '焦半径', formula: 'PF=x₀+p/2', note: '抛物线上一点到焦点距离' },
    ],
    challenge: [
      { label: '抛物线光学性质', note: '从焦点发出的光线经抛物线反射后平行于对称轴' },
    ],
  },

  formulas: [
    { name: '抛物线标准方程', formula: 'y²=2px', usage: '焦点 (p/2,0)' },
    { name: '通径长度', formula: '2p', usage: '过焦点垂直于对称轴的弦长' },
  ],

  selfEval: [
    { question: '抛物线 y²=8x 的焦点到准线的距离是？', level: 'A', description: '4' },
  ],

  relatedModels: ['MATH-A06'],
  crossLinks: [],
}
