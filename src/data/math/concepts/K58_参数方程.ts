// 知识节点 K58：参数方程
import type { ConceptData } from './types'

export const K58: ConceptData = {
  id: 'K58',
  title: '参数方程',
  subtitle: '用参数表示曲线',
  module: '解析几何',
  chapter: '参数方程',
  difficulty: 2,

  preCheck: [
    {
      question: '参数方程 x=cos θ, y=sin θ (θ 为参数) 表示什么曲线？',
      options: ['A. 直线', 'B. 圆', 'C. 椭圆', 'D. 抛物线'],
      answer: 'B',
      explanation: 'cos²θ+sin²θ=1，所以 x²+y²=1，是单位圆。',
    },
  ],

  narrative: {
    context: '参数方程提供了另一种描述曲线的方式。',
    confusion: '参数方程与普通方程的互化。',
    experiment: '将参数方程化为普通方程。',
    concept: '参数方程是用参数表示曲线上点的坐标的方程。',
    derivation: '常见参数方程：圆 x=a+r cos θ, y=b+r sin θ；椭圆 x=a cos θ, y=b sin θ。',
    transfer: '参数法求轨迹、解析几何综合题。',
  },

  variations: {
    basic: [
      { label: '圆的参数方程', formula: 'x=a+r cos θ, y=b+r sin θ', note: '参数 θ' },
      { label: '椭圆的参数方程', formula: 'x=a cos θ, y=b sin θ', note: '参数 θ' },
    ],
    advanced: [
      { label: '抛物线的参数方程', formula: 'x=2pt, y=pt²', note: '参数 t' },
      { label: '直线的参数方程', formula: 'x=x₀+lt, y=y₀+mt', note: '方向向量 (l,m)' },
    ],
    challenge: [
      { label: '参数方程求轨迹', note: '消去参数得普通方程' },
    ],
  },

  formulas: [
    { name: '圆参数方程', formula: 'x=a+r cos θ, y=b+r sin θ', usage: '单位圆' },
    { name: '椭圆参数方程', formula: 'x=a cos θ, y=b sin θ', usage: '椭圆' },
  ],

  selfEval: [
    { question: '如何将参数方程化为普通方程？', level: 'A', description: '消去参数' },
  ],

  relatedModels: ['MATH-A08'],
  crossLinks: [],
}
