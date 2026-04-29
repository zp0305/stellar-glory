// 知识节点 K50：直线的倾斜角与斜率
import type { ConceptData } from './types'

export const K50: ConceptData = {
  id: 'K50',
  title: '直线的倾斜角与斜率',
  subtitle: '方向的刻画',
  module: '解析几何',
  chapter: '直线的倾斜角与斜率',
  difficulty: 1,

  preCheck: [
    {
      question: '直线 y=2x+1 的斜率是？',
      options: ['A. 1', 'B. 2', 'C. -1', 'D. 0'],
      answer: 'B',
      explanation: '斜率公式 k=tan α，y=kx+b 中 k 就是斜率。',
    },
  ],

  narrative: {
    context: '直线的倾斜角和斜率是描述直线方向的基本工具。',
    confusion: '倾斜角范围是 [0°, 180°)，斜率 k=tan α。',
    experiment: '比较斜率为正、负、零、无穷大的直线。',
    concept: '倾斜角是直线与 x 轴正方向的夹角；斜率是倾斜角的正切值。',
    derivation: 'k=tan α (α≠90°)；k=(y₂-y₁)/(x₂-x₁)',
    transfer: '斜率用于判断直线平行、垂直。',
  },

  variations: {
    basic: [
      { label: '斜率公式', formula: 'k=(y₂-y₁)/(x₂-x₁)', note: '两点确定斜率' },
      { label: '倾斜角', formula: 'k=tan α', note: 'α∈[0°,180°)' },
    ],
    advanced: [
      { label: '斜率与方向', note: 'k>0 倾斜，k=0 水平，k<0 下降，k 不存在 垂直' },
    ],
    challenge: [
      { label: '直线夹角公式', formula: 'tan θ=|k₁-k₂|/|1+k₁k₂|', note: '两直线夹角' },
    ],
  },

  formulas: [
    { name: '斜率公式', formula: 'k=(y₂-y₁)/(x₂-x₁)', usage: '求斜率' },
    { name: '斜率与倾斜角', formula: 'k=tan α', usage: '互化' },
  ],

  selfEval: [
    { question: '斜率不存在对应什么倾斜角？', level: 'A', description: '90°' },
  ],

  relatedModels: ['MATH-A01'],
  crossLinks: [],
}
