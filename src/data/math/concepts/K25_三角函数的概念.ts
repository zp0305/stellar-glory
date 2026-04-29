// 知识节点 K25：三角函数的概念
import type { ConceptData } from './types'

export const K25: ConceptData = {
  id: 'K25',
  title: '三角函数的概念',
  subtitle: '直角三角形到单位圆的跨越',
  module: '三角与向量',
  chapter: '三角函数的概念',
  difficulty: 1,

  preCheck: [
    {
      question: '在单位圆中，点 P(cos θ, sin θ) 满足？',
      options: ['A. x²+y²=1', 'B. x+y=1', 'C. x=y', 'D. x²-y²=1'],
      answer: 'A',
      explanation: '单位圆上任意点的坐标满足 x²+y²=1。',
    },
  ],

  narrative: {
    context: '三角函数最初来自直角三角形的边长比，现在用单位圆定义更一般。',
    confusion: '三角函数值与点的坐标的关系。',
    experiment: '在单位圆中标记 0°、30°、45°、60°、90° 对应的点的坐标。',
    concept: '单位圆上任意角的终边与圆的交点坐标为 (cos θ, sin θ)。',
    derivation: 'sin θ=y/r, cos θ=x/r, tan θ=y/x (x≠0)',
    transfer: '任意角的三角函数值可以是正数或负数。',
  },

  variations: {
    basic: [
      { label: '正弦', formula: 'sin θ=y/r', note: '单位圆纵坐标' },
      { label: '余弦', formula: 'cos θ=x/r', note: '单位圆横坐标' },
      { label: '正切', formula: 'tan θ=sin θ/cos θ', note: '比值' },
    ],
    advanced: [
      { label: '三角函数线', note: '有向线段表示三角函数值' },
    ],
    challenge: [
      { label: '三角函数定义域', note: 'tan θ 中 θ≠π/2+kπ' },
    ],
  },

  formulas: [
    { name: '同角三角函数', formula: 'sin²θ+cos²θ=1', usage: '基本关系' },
    { name: '正切定义', formula: 'tan θ=sin θ/cos θ', usage: '求正切值' },
  ],

  selfEval: [
    { question: 'sin 90° 等于多少？', level: 'A', description: '1' },
  ],

  relatedModels: ['MATH-T01'],
  crossLinks: [],
}
