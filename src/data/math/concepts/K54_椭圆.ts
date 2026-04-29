// 知识节点 K54：椭圆
import type { ConceptData } from './types'

export const K54: ConceptData = {
  id: 'K54',
  title: '椭圆',
  subtitle: '到两定点距离之和为常数',
  module: '解析几何',
  chapter: '椭圆',
  difficulty: 2,

  preCheck: [
    {
      question: '椭圆 x²/25+y²/9=1 的焦点坐标是？',
      options: ['A. (±4,0)', 'B. (±5,0)', 'C. (±3,0)', 'D. (±√34,0)'],
      answer: 'A',
      explanation: 'a²=25，b²=9，c²=a²-b²=16，c=4，焦点在 x 轴，所以是 (±4,0)。',
    },
  ],

  narrative: {
    context: '椭圆是天体运动中行星轨道的基本形状。',
    confusion: '椭圆标准方程中 a、b、c 的关系。',
    experiment: '用绳子和图钉画椭圆。',
    concept: '椭圆是到两焦点距离之和为常数的点的轨迹。',
    derivation: '标准方程：x²/a²+y²/b²=1 (a>b>0)，c²=a²-b²',
    transfer: '椭圆参数方程、焦点弦等概念。',
  },

  variations: {
    basic: [
      { label: '标准方程', formula: 'x²/a²+y²/b²=1', note: 'a>b>0，焦点在 x 轴' },
      { label: '顶点', formula: '(±a,0), (0,±b)', note: '四个顶点' },
      { label: '焦点', formula: '(±c,0)', note: 'c²=a²-b²' },
    ],
    advanced: [
      { label: '第二定义', formula: 'e=c/a', note: '离心率' },
      { label: '焦半径', formula: 'PF₁=a+e·x 或 PF₂=a-e·x', note: '椭圆上一点到焦点距离' },
    ],
    challenge: [
      { label: '参数方程', formula: 'x=a cos θ, y=b sin θ', note: '三角换元' },
    ],
  },

  formulas: [
    { name: '椭圆标准方程', formula: 'x²/a²+y²/b²=1', usage: '标准形式' },
    { name: 'a、b、c 关系', formula: 'c²=a²-b²', usage: '求焦点' },
  ],

  selfEval: [
    { question: '椭圆 x²/16+y²/9=1 的离心率是？', level: 'A', description: '√7/4' },
  ],

  relatedModels: ['MATH-A04'],
  crossLinks: [],
}
