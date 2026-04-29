// 模型 MATH-P01：概率统计基础
import type { MathModel } from './types'

export const P01: MathModel = {
  id: 'MATH-P01',
  title: '概率统计基础',
  module: '概率与统计',
  chapter: {
    id: 'P01',
    title: '概率统计基础',
    subtitle: '随机抽样、样本估计',
    module: '概率与统计',
    content: '概率统计基础包括随机抽样和用样本估计总体。',
    examples: [
      {
        title: '求样本均值',
        problem: '已知样本 2,3,5,7，求样本均值',
        solution: 'x̄=(2+3+5+7)/4=4.25',
        key: '均值公式',
      },
    ],
    relatedConcepts: ['K59', 'K60'],
  },
}

export const P02: MathModel = {
  id: 'MATH-P02',
  title: '随机事件与概率',
  module: '概率与统计',
  chapter: {
    id: 'P02',
    title: '随机事件与概率',
    subtitle: '古典概型、几何概型',
    module: '概率与统计',
    content: '随机事件及其概率的计算。',
    examples: [
      {
        title: '古典概型',
        problem: '抛一枚均匀硬币，正面朝上的概率',
        solution: 'P=1/2',
        key: '古典概型公式',
      },
    ],
    relatedConcepts: ['K62'],
  },
}

export const P03: MathModel = {
  id: 'MATH-P03',
  title: '条件概率与独立性',
  module: '概率与统计',
  chapter: {
    id: 'P03',
    title: '条件概率与独立性',
    subtitle: '条件概率、乘法公式',
    module: '概率与统计',
    content: '条件概率与事件的独立性是概率论的核心概念。',
    examples: [
      {
        title: '条件概率',
        problem: '袋中有 3 白 2 黑球，不放回取两次，第一次白第二次黑的概率',
        solution: 'P=3/5×2/4=3/10',
        key: '乘法公式',
      },
    ],
    relatedConcepts: ['K63', 'K64'],
  },
}

export const P04: MathModel = {
  id: 'MATH-P04',
  title: '离散型随机变量',
  module: '概率与统计',
  chapter: {
    id: 'P04',
    title: '离散型随机变量',
    subtitle: '分布列、期望、方差',
    module: '概率与统计',
    content: '离散型随机变量及其分布。',
    examples: [
      {
        title: '求期望',
        problem: '已知 X 的分布列为 P(X=1)=0.3, P(X=2)=0.7，求 E(X)',
        solution: 'E(X)=1×0.3+2×0.7=1.7',
        key: '期望公式',
      },
    ],
    relatedConcepts: ['K65'],
  },
}

export const P05: MathModel = {
  id: 'MATH-P05',
  title: '二项分布',
  module: '概率与统计',
  chapter: {
    id: 'P05',
    title: '二项分布',
    subtitle: '独立重复试验',
    module: '概率与统计',
    content: '二项分布是 n 次独立重复试验的分布。',
    examples: [
      {
        title: '二项分布',
        problem: '抛 10 次硬币，恰有 3 次正面的概率',
        solution: 'P=C(10,3)(1/2)¹⁰',
        key: '二项分布公式',
      },
    ],
    relatedConcepts: ['K66'],
  },
}

export const P06: MathModel = {
  id: 'MATH-P06',
  title: '正态分布',
  module: '概率与统计',
  chapter: {
    id: 'P06',
    title: '正态分布',
    subtitle: '正态分布曲线、3σ 原则',
    module: '概率与统计',
    content: '正态分布是最重要的连续分布。',
    examples: [
      {
        title: '正态分布',
        problem: '已知 X~N(50,10²)，求 P(X<60)',
        solution: 'Z=(60-50)/10=1，查表得 P(Z<1)=0.8413',
        key: '标准化',
      },
    ],
    relatedConcepts: ['K67'],
  },
}

export const P07: MathModel = {
  id: 'MATH-P07',
  title: '排列组合与二项式定理',
  module: '概率与统计',
  chapter: {
    id: 'P07',
    title: '排列组合与二项式定理',
    subtitle: '计数原理、二项式展开',
    module: '概率与统计',
    content: '排列组合和二项式定理是计数的工具。',
    examples: [
      {
        title: '二项式展开',
        problem: '求 (a+b)⁴ 的展开式中 a²b² 的系数',
        solution: 'C(4,2)=6',
        key: '二项式定理',
      },
    ],
    relatedConcepts: ['K70', 'K71', 'K72'],
  },
}
