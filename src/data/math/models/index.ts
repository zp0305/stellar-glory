// 数学模型 barrel 文件
// 聚合导出所有数学模型

import { F01, F02, F03, F04, F05, F06, F07, F08 } from './MATH-F01_函数的基本性质'
import { T01, T02, T03, T04, T05, T06 } from './MATH-T01_三角函数基础'
import { S01, S02, S03, S04, S05, S06, S07, S08 } from './MATH-S01_数列基础'
import { G01, G02, G03, G04, G05, G06, G07 } from './MATH-G01_立体几何基础'
import { A01, A02, A03, A04, A05, A06, A07, A08 } from './MATH-A01_直线与圆'
import { P01, P02, P03, P04, P05, P06, P07 } from './MATH-P01_概率统计基础'
import { L01, L02, L03, L04, L05, L06, L07, L08 } from './MATH-L01_集合与逻辑'
import { B01, B02, B03, B04 } from './MATH-L01_集合与逻辑'
import { C01, C02, C03, C04 } from './MATH-L01_集合与逻辑'

import type { MathModel } from './types'

export {
  F01, F02, F03, F04, F05, F06, F07, F08,
  T01, T02, T03, T04, T05, T06,
  S01, S02, S03, S04, S05, S06, S07, S08,
  G01, G02, G03, G04, G05, G06, G07,
  A01, A02, A03, A04, A05, A06, A07, A08,
  P01, P02, P03, P04, P05, P06, P07,
  L01, L02, L03, L04, L05, L06, L07, L08,
  B01, B02, B03, B04,
  C01, C02, C03, C04,
}

export const allModels: MathModel[] = [
  F01, F02, F03, F04, F05, F06, F07, F08,
  T01, T02, T03, T04, T05, T06,
  S01, S02, S03, S04, S05, S06, S07, S08,
  G01, G02, G03, G04, G05, G06, G07,
  A01, A02, A03, A04, A05, A06, A07, A08,
  P01, P02, P03, P04, P05, P06, P07,
  L01, L02, L03, L04, L05, L06, L07, L08,
  B01, B02, B03, B04,
  C01, C02, C03, C04,
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
