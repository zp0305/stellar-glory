// 知识节点 K17：导数的概念
import type { ConceptData } from './types'

export const K17: ConceptData = {
  id: 'K17',
  title: '导数的概念',
  subtitle: '瞬间变化的精确度量',
  module: '函数与导数',
  chapter: '导数的概念',
  difficulty: 2,

  preCheck: [
    {
      question: '导数 f\'(x₀) 的几何意义是？',
      options: ['A. 割线斜率', 'B. 切线斜率', 'C. 函数值', 'D. 曲线高度'],
      answer: 'B',
      explanation: '导数是函数在该点切线的斜率。',
    },
  ],

  narrative: {
    context: '瞬时速度、加速度、边际成本都是"瞬间变化率"的具体体现。',
    confusion: '平均变化率与瞬时变化率的区别是什么？',
    experiment: '求 f(x)=x² 在 x=1 处的导数。',
    concept: '导数是函数的瞬时变化率，几何意义是切线斜率。',
    derivation: 'f\'(x₀)=lim(Δx→0) [f(x₀+Δx)-f(x₀)]/Δx',
    transfer: '可导必连续，但连续不一定可导。',
  },

  variations: {
    basic: [
      { label: '导数定义', formula: 'f\'(x)=lim Δx→0 [f(x+Δx)-f(x)]/Δx', note: '增量比值的极限' },
      { label: '几何意义', formula: 'f\'(x₀)=k切线', note: '切线斜率' },
      { label: '物理意义', formula: 'v=s\'(t)', note: '速度是位移的导数' },
    ],
    advanced: [
      { label: '单侧导数', formula: 'f\'₊(x₀) 和 f\'₋(x₀)', note: '左右导数' },
    ],
    challenge: [
      { label: '导数存在条件', note: '极限必须存在' },
    ],
  },

  formulas: [
    { name: '导数定义', formula: 'f\'(x₀)=lim Δx→0 Δy/Δx', usage: '求导数' },
    { name: '可导与连续', formula: '可导 ⇒ 连续', usage: '可导的必要条件' },
  ],

  selfEval: [
    { question: 'f(x)=|x| 在 x=0 处可导吗？', level: 'B', description: '不可导（左右导数不相等）' },
  ],

  relatedModels: ['MATH-F01', 'MATH-F03'],
  crossLinks: [],
}
