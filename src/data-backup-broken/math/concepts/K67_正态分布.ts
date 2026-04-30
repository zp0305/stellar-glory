// 知识节点 K67：正态分
import type { ConceptData } from './types'

export const K67: ConceptData = {
  id: 'K67',
  title: '正态分',
  subtitle: '自然界最常见的分',
  module: '概率与统',
  chapter: '正态分',
  difficulty: 2,

  preCheck: [
    {
      question: '正态分布曲线关于什么对称？',
      options: ['A. y , 'B. x , 'C. 直线 x=μ', 'D. 直线 y=μ'],
      answer: 'A',
      explanation: '正态分布关于均μ 对称',
    },
  ],

  narrative: {
    context: '正态分布在自然界和社会科学中广泛存在',
    confusion: '正态分布的参数 μ σ² 的意义',
    experiment: '观察正态分布曲线的形态',
    concept: '正态分布是最重要的连续分布，N(μ,σ²) 表示',
    derivation: '概率密度函数：f(x)=1/(σπ)·e^[-(x-μ)²/(2σ²)]',
    transfer: '3σ 原则：约 99.7% 的数据落(μ-3σ, μ+3σ) 内',
  },

  variations: {
    basic: [
      { label: '标准正态分, formula: 'N(0,1)', note: 'μ=0, σ²=1' }',
      { label: '3σ 原则', formula: 'P(μ-3σ<X<μ+3σ)9.7%', note: '数据分布' },
    ],
    advanced: [
      { label: '正态分布标准化', formula: 'Z=(X-μ)/σ ~ N(0,1)', note: '化为标准正 }',
    ],
    challenge: [
      { label: '正态分布表', note: '查表求概 }',
    ],
  },

  formulas: [
    { name: '正态分布标准化', formula: 'Z=(X-μ)/σ ~ N(0,1)', usage: '查表求概 }',
  ],

  selfEval: [
    { question: '正态分N(μ,σ²) 中，μ σ² 分别表示什么？', level: 'B', description: 'μ 是均值，σ² 是方 }',
  ],

  relatedModels: ['MATH-P09'],
  crossLinks: [],
}
