// 数学学科概念数据聚合
// 8大板块共 75 个知识节点

import { K01 } from './K01_集合的概念与表示'
import { K02 } from './K02_集合间的基本关系'
import { K03 } from './K03_集合的基本运算'
import { K04 } from './K04_充分条件与必要条件'
import { K05 } from './K05_全称量词与存在量词'
import { K06 } from './K06_命题的否定'
import { K07 } from './K07_函数的概念'
import { K08 } from './K08_函数的表示法'
import { K09 } from './K09_函数的单调性'
import { K10 } from './K10_函数的奇偶性'
import { K11 } from './K11_函数的周期性'
import { K12 } from './K12_指数与指数函数'
import { K13 } from './K13_对数与对数函数'
import { K14 } from './K14_幂函数'
import { K15 } from './K15_函数的零点与方程的解'
import { K16 } from './K16_函数模型的应用'
import { K17 } from './K17_导数的概念'
import { K18 } from './K18_导数的运算'
import { K19 } from './K19_导数与函数的单调性'
import { K20 } from './K20_函数的极值与最大值'
import { K21 } from './K21_隐零点'
import { K22 } from './K22_极值点偏移'
import { K23 } from './K23_放缩法'
import { K24 } from './K24_任意角和弧度制'
import { K25 } from './K25_三角函数的概念'
import { K26 } from './K26_诱导公式'
import { K27 } from './K27_三角函数的图像与性质'
import { K28 } from './K28_三角恒等变换'
import { K29 } from './K29_解三角形'
import { K30 } from './K30_平面向量的概念'
import { K31 } from './K31_平面向量的运算'
import { K32 } from './K32_平面向量基本定理及坐标表示'
import { K33 } from './K33_平面向量的数量积'
import { K34 } from './K34_平面向量的应用'
import { K35 } from './K35_数列的概念'
import { K36 } from './K36_等差数列'
import { K37 } from './K37_等比数列'
import { K38 } from './K38_数列求和'
import { K39 } from './K39_递推数列'
import { K40 } from './K40_数学归纳法'
import { K41 } from './K41_数列不等式放缩'
import { K42 } from './K42_基本立体图形'
import { K43 } from './K43_立体图形的直观图'
import { K44 } from './K44_简单几何体的表面积与体积'
import { K45 } from './K45_空间点线面位置关系'
import { K46 } from './K46_空间直线平面的平行'
import { K47 } from './K47_空间直线平面的垂直'
import { K48 } from './K48_空间向量及其运算'
import { K49 } from './K49_空间向量的应用'
import { K50 } from './K50_直线的倾斜角与斜率'
import { K51 } from './K51_直线的方程'
import { K52 } from './K52_圆的方程'
import { K53 } from './K53_直线与圆圆与圆的位置关系'
import { K54 } from './K54_椭圆'
import { K55 } from './K55_双曲线'
import { K56 } from './K56_抛物线'
import { K57 } from './K57_直线与圆锥曲线的位置关系'
import { K58 } from './K58_参数方程'
import { K59 } from './K59_随机抽样'
import { K60 } from './K60_用样本估计总体'
import { K61 } from './K61_成对数据的统计分析'
import { K62 } from './K62_随机事件与概率'
import { K63 } from './K63_事件的相互独立性'
import { K64 } from './K64_条件概率与全概率公式'
import { K65 } from './K65_离散型随机变量及其分布列'
import { K66 } from './K66_二项分布与超几何分布'
import { K67 } from './K67_正态分布'
import { K68 } from './K68_回归分析'
import { K69 } from './K69_独立性检验'
import { K70 } from './K70_计数原理'
import { K71 } from './K71_排列与组合'
import { K72 } from './K72_二项式定理'
import { K73 } from './K73_复数的概念'
import { K74 } from './K74_复数的四则运算'
import { K75 } from './K75_复数的三角表示'

import type { ConceptData } from './types'

export const allConcepts: ConceptData[] = [
  K01, K02, K03, K04, K05, K06, K07, K08, K09, K10,
  K11, K12, K13, K14, K15, K16, K17, K18, K19, K20,
  K21, K22, K23, K24, K25, K26, K27, K28, K29, K30,
  K31, K32, K33, K34, K35, K36, K37, K38, K39, K40,
  K41, K42, K43, K44, K45, K46, K47, K48, K49, K50,
  K51, K52, K53, K54, K55, K56, K57, K58, K59, K60,
  K61, K62, K63, K64, K65, K66, K67, K68, K69, K70,
  K71, K72, K73, K74, K75,
]

export const conceptDataMap: Record<string, ConceptData> = Object.fromEntries(
  allConcepts.map(c => [c.id, c])
)

export function getConceptById(id: string): ConceptData | undefined {
  return conceptDataMap[id]
}

export function getConceptsByModule(module: string): ConceptData[] {
  return allConcepts.filter(c => c.module === module)
}

export function getConceptsByChapter(chapter: string): ConceptData[] {
  return allConcepts.filter(c => c.chapter === chapter)
}

export const MATH_MODULES = [
  '集合与逻辑',
  '函数与导数',
  '三角与向量',
  '数列与归纳',
  '立体几何',
  '解析几何',
  '概率与统计',
  '复数',
]
