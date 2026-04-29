// 知识节点 K65：离散型随机变量及其分布列
import type { ConceptData } from './types'

export const K65: ConceptData = {
  id: 'K65',
  title: '离散型随机变量及其分布列',
  subtitle: '随机变量的概率描述',
  module: '概率与统计',
  chapter: '离散型随机变量及其分布列',
  difficulty: 2,

  preCheck: [
    {
      question: '离散型随机变量 X 的分布列中，∑P(X=xᵢ) 等于？',
      options: ['A. 0', 'B. 1', 'C. 无法确定', 'D. 可能大于1'],
      answer: 'B',
      explanation: '离散型随机变量所有取值概率之和等于1。',
    },
  ],

  narrative: {
    context: '随机变量是研究随机现象的数量化工具。',
    confusion: '分布列与概率密度函数的区别。',
    experiment: '抛两枚硬币，设 X 为正面朝上的次数，求 X 的分布列。',
    concept: '离散型随机变量是取值可以一一列出的随机变量。',
    derivation: '分布列：P(X=xᵢ)=pᵢ，满足 pᵢ≥0，∑pᵢ=1',
    transfer: '数学期望、方差的计算。',
  },

  variations: {
    basic: [
      { label: '分布列', formula: 'P(X=xᵢ)=pᵢ', note: '列出取值和对应概率' },
      { label: '概率分布性质', formula: 'pᵢ≥0, ∑pᵢ=1', note: '基本性质' },
    ],
    advanced: [
      { label: '0-1 分布', formula: 'P(X=1)=p, P(X=0)=1-p', note: '伯努利分布' },
    ],
    challenge: [
      { label: '分布列的写法', note: '列表或写成函数形式' },
    ],
  },

  formulas: [
    { name: '分布列性质', formula: 'pᵢ≥0, ∑pᵢ=1', usage: '验证分布列' },
  ],

  selfEval: [
    { question: '离散型随机变量的所有概率之和是？', level: 'A', description: '1' },
  ],

  relatedModels: ['MATH-P07'],
  crossLinks: [],
}
