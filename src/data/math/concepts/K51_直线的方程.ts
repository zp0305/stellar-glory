// 知识节点 K51：直线的方程
import type { ConceptData } from './types'

export const K51: ConceptData = {
  id: 'K51',
  title: '直线的方程',
  subtitle: '方程描述直线',
  module: '解析几何',
  chapter: '直线的方程',
  difficulty: 1,

  preCheck: [
    {
      question: '斜截式 y=kx+b 中，b 的几何意义是？',
      options: ['A. 斜率', 'B. 截距', 'C. 倾斜角', 'D. 过原点'],
      answer: 'B',
      explanation: 'b 是直线在 y 轴上的截距。',
    },
  ],

  narrative: {
    context: '用方程描述直线是解析几何的基础。',
    confusion: '不同形式的直线方程适用于不同情况。',
    experiment: '将点斜式、两点式转化为斜截式。',
    concept: '直线方程有多种形式：斜截式、点斜式、两点式、一般式。',
    derivation: '斜截式：y=kx+b；点斜式：y-y₀=k(x-x₀)；一般式：Ax+By+C=0',
    transfer: '根据题目条件选择最方便的形式。',
  },

  variations: {
    basic: [
      { label: '斜截式', formula: 'y=kx+b', note: '已知斜率和截距' },
      { label: '点斜式', formula: 'y-y₀=k(x-x₀)', note: '已知一点和斜率' },
      { label: '一般式', formula: 'Ax+By+C=0', note: '通用形式' },
    ],
    advanced: [
      { label: '两点式', formula: '(y-y₁)/(y₂-y₁)=(x-x₁)/(x₂-x₁)', note: '已知两点' },
      { label: '截距式', formula: 'x/a+y/b=1', note: '已知两截距' },
    ],
    challenge: [
      { label: '方程的互化', note: '不同形式之间的转换' },
    ],
  },

  formulas: [
    { name: '斜截式', formula: 'y=kx+b', usage: '已知斜率和截距' },
    { name: '点斜式', formula: 'y-y₀=k(x-x₀)', usage: '已知一点和斜率' },
  ],

  selfEval: [
    { question: '过点 (1,2) 且斜率为 3 的直线方程是？', level: 'A', description: 'y-2=3(x-1)' },
  ],

  relatedModels: ['MATH-A01'],
  crossLinks: [],
}
