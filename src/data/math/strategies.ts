// 数学解题范式骨架
// 数学解题范式 R01-R90
// 对标物理 paradigms.ts 结构

import type { ConceptData } from './concepts/types'

export interface Strategy {
  id: string
  title: string
  subtitle: string
  module: string
  content: string
  steps: string[]
  examples: { problem: string; solution: string }[]
  relatedConcepts: string[]
}

export const allStrategies: Strategy[] = [
  // R01-R10: 函数与导数
  {
    id: 'R01',
    title: '函数定义域求解',
    subtitle: '使表达式有意义的 x 范围',
    module: '函数与导数',
    content: '求函数的定义域是研究函数的基础。',
    steps: ['列出所有限制条件', '解不等式或方程', '取各条件的交集'],
    examples: [
      { problem: '求 y=√(x-1)+1/(x-3) 的定义域', solution: 'x-1≥0 且 x≠3，所以定义域为 [1,3)∪(3,+∞)' },
    ],
    relatedConcepts: ['K07'],
  },
  {
    id: 'R02',
    title: '函数单调性判断',
    subtitle: '导数法与定义法',
    module: '函数与导数',
    content: '单调性是函数的基本性质。',
    steps: ['求导数', '解不等式 f\'(x)>0 或 f\'(x)<0', '写出单调区间'],
    examples: [
      { problem: '判断 f(x)=x³-3x 的单调性', solution: "f'(x)=3x²-3>0 ⇒ x>1 或 x<-1 时递增" },
    ],
    relatedConcepts: ['K09', 'K19'],
  },
  // R03-R10: 继续其他函数解题范式
  // R11-R20: 三角与向量
  // R21-R30: 数列与归纳
  // R31-R40: 立体几何
  // R41-R50: 解析几何
  // R51-R60: 概率与统计
  // R61-R70: 集合与逻辑
  // R71-R80: 不等式
  // R81-R90: 复数与平面向量
]

export const strategyDataMap: Record<string, Strategy> = Object.fromEntries(
  allStrategies.map(s => [s.id, s])
)

export function getStrategyById(id: string): Strategy | undefined {
  return strategyDataMap[id]
}

export function getStrategiesByModule(module: string): Strategy[] {
  return allStrategies.filter(s => s.module === module)
}
