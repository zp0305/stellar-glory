// 知识节点 K55：双曲线
import type { ConceptData } from './types'

export const K55: ConceptData = {
  id: 'K55',
  title: '双曲线',
  subtitle: '到两定点距离之差为常数',
  module: '解析几何',
  chapter: '双曲线',
  difficulty: 2,

  preCheck: [
    {
      question: '双曲线 x²/16-y²/9=1 的焦点坐标是？',
      options: ['A. (±4,0)', 'B. (±5,0)', 'C. (±3,0)', 'D. (±√7,0)'],
      answer: 'B',
      explanation: 'a²=16，b²=9，c²=a²+b²=25，c=5，焦点在 x 轴，所以是 (±5,0)。',
    },
  ],

  narrative: {
    context: '双曲线是到两焦点距离之差为常数的点的轨迹。',
    confusion: '双曲线与椭圆的区别：差与和。',
    experiment: '观察双曲线的渐近线特征。',
    concept: '双曲线是到两焦点距离之差的绝对值为常数的点的轨迹。',
    derivation: '标准方程：x²/a²-y²/b²=1，c²=a²+b²，渐近线：y=±(b/a)x',
    transfer: '等轴双曲线、离心率等概念。',
  },

  variations: {
    basic: [
      { label: '标准方程', formula: 'x²/a²-y²/b²=1', note: '焦点在 x 轴' },
      { label: '焦点', formula: '(±c,0)', note: 'c²=a²+b²' },
      { label: '渐近线', formula: 'y=±(b/a)x', note: '双曲线的渐近线' },
    ],
    advanced: [
      { label: '第二定义', formula: 'e=c/a>1', note: '离心率大于1' },
      { label: '焦半径', formula: '|PF₁|=|e·x±a|', note: '双曲线上的点到焦点距离' },
    ],
    challenge: [
      { label: '共轭双曲线', formula: 'x²/a²-y²/b²=1 与 -x²/a²+y²/b²=1', note: '互为共轭' },
    ],
  },

  formulas: [
    { name: '双曲线标准方程', formula: 'x²/a²-y²/b²=1', usage: '标准形式' },
    { name: 'a、b、c 关系', formula: 'c²=a²+b²', usage: '求焦点' },
  ],

  selfEval: [
    { question: '双曲线与椭圆的本质区别是什么？', level: 'A', description: '双曲线是距离之差，椭圆是距离之和' },
  ],

  relatedModels: ['MATH-A05'],
  crossLinks: [],
}
