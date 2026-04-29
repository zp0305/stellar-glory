// 知识节点 K57：直线与圆锥曲线的位置关系
import type { ConceptData } from './types'

export const K57: ConceptData = {
  id: 'K57',
  title: '直线与圆锥曲线的位置关系',
  subtitle: '交点与判别式',
  module: '解析几何',
  chapter: '直线与圆锥曲线的位置关系',
  difficulty: 2,

  preCheck: [
    {
      question: '直线与椭圆相交，联立方程组消去一个变量后，得到的方程是什么方程？',
      options: ['A. 一次方程', 'B. 二次方程', 'C. 常数方程', 'D. 无法确定'],
      answer: 'B',
      explanation: '直线是一次方程，椭圆是二次方程，联立后消去一个变量，得到的仍是二次方程。',
    },
  ],

  narrative: {
    context: '直线与圆锥曲线的位置关系是解析几何的核心问题。',
    confusion: '用判别式判断交点个数时需要注意特殊情况。',
    experiment: '讨论不同位置的直线与椭圆、双曲线、抛物线的交点情况。',
    concept: '直线与圆锥曲线的位置关系由交点个数决定。',
    derivation: '联立方程组，消去一个变量，得到一元二次方程。Δ>0 相交，Δ=0 相切，Δ<0 相离。',
    transfer: '弦长公式、中点弦问题等。',
  },

  variations: {
    basic: [
      { label: '相交', formula: 'Δ>0', note: '两个交点' },
      { label: '相切', formula: 'Δ=0', note: '一个切点' },
      { label: '相离', formula: 'Δ<0', note: '无交点' },
    ],
    advanced: [
      { label: '弦长公式', formula: '|AB|=√(1+k²)·√(Δ)/|A|', note: '韦达定理' },
      { label: '中点弦', note: '设点代入法' },
    ],
    challenge: [
      { label: '抛物线焦点弦', note: '过焦点的弦有特殊性质' },
    ],
  },

  formulas: [
    { name: '判别式', formula: 'Δ>0 相交，Δ=0 相切，Δ<0 相离', usage: '判断位置关系' },
  ],

  selfEval: [
    { question: '判断直线与圆锥曲线位置关系用什么方法？', level: 'A', description: '联立方程组用判别式' },
  ],

  relatedModels: ['MATH-A07'],
  crossLinks: [],
}
