// 数学模型 barrel 文件
// 聚合导出所有数学模型

import { F01 } from './MATHF01_函数的基本性质'
import { F02 } from './MATHF02_指数与对数函数'
import { T01 } from './MATHT01_三角函数基础'
import { S01 } from './MATHS01_数列基础'
import { G01 } from './MATHG01_立体几何基础'
import { A01 } from './MATHA01_直线与圆'
import { P01 } from './MATHP01_概率统计基础'
import { L01 } from './MATHL01_集合与逻辑'

import type { MathModel } from './types'

export {
  F01, F02,
  T01,
  S01,
  G01,
  A01,
  P01,
  L01,
}

export const allModels: MathModel[] = [
  F01, F02,
  T01,
  S01,
  G01,
  A01,
  P01,
  L01,
]

export const modelDataMap: Record<string, MathModel> = Object.fromEntries(
  allModels.map(m => [m.id, m])
)

export const MATH_MODEL_MODULES = [
  '函数与导数',
  '三角与向量',
  '数列与归纳',
  '立体几何',
  '解析几何',
  '概率与统计',
  '集合与逻辑',
  '复数',
]

export function getModelById(id: string): MathModel | undefined {
  return modelDataMap[id]
}

export function getModelsByModule(module: string): MathModel[] {
  return allModels.filter(m => m.module === module)
}