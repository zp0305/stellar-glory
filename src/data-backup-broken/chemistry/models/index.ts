// 化学模型索引
// M01-M48（共48个），按9个子分类组织

import { M01 } from './M01_物质分类树模型'
import { M02 } from './M02_摩尔计算模型'
import { M03 } from './M03_离子方程式书写模型'
import { M04 } from './M04_离子共存分析模型'
import { M05 } from './M05_氧化还原双线桥模型'
import { M06 } from './M06_氧化还原配平与计算模型'
import { M07 } from './M07_原子结构与元素推断模型'
import { M08 } from './M08_元素周期表应用模型'
import { M09 } from './M09_分子结构预测模型'
import { M10 } from './M10_晶体结构分析模型'
import { M11 } from './M11_热化学盖斯定律模型'
import { M12 } from './M12_化学平衡分析模型'
import { M13 } from './M13_等效平衡模型'
import { M14 } from './M14_弱电解质电离平衡模型'
import { M15 } from './M15_沉淀溶解平衡模型'
import { M16 } from './M16_速率图像分析模型'
import { M17 } from './M17_pH综合计算模型'
import { M18 } from './M18_钠的转化链模型'
import { M19 } from './M19_铝的两性转化模型'
import { M20 } from './M20_铁三角氧化还原模型'
import { M21 } from './M21_铜的氧化还原模型'
import { M22 } from './M22_氯的歧化与归中模型'
import { M23 } from './M23_硫氮价态转化模型'
import { M24 } from './M24_工业流程分析模型'
import { M25 } from './M25_无机新材料模型'
import { M35 } from './M35_过氧化钠歧化模型'
import { M26 } from './M26_同分异构体推导模型'
import { M27 } from './M27_烃的反应分类模型'
import { M28 } from './M28_芳香烃定位规则模型'
import { M29 } from './M29_卤代烃反应条件模型'
import { M30 } from './M30_醇酚转化模型'
import { M31 } from './M31_酚的特性模型'
import { M32 } from './M32_醛的氧化还原模型'
import { M33 } from './M33_羧酸酯转化模型'
import { M34 } from './M34_有机推断与合成模型'
import { M36 } from './M36_高分子合成模型'
import { M37 } from './M37_生物大分子模型'
import { M38 } from './M38_原电池分析模型'
import { M39 } from './M39_新型电池分析模型'
import { M40 } from './M40_电解池与金属防护模型'
import { M41 } from './M41_电化学计算模型'
import { M42 } from './M42_分离提纯模型'
import { M43 } from './M43_气体制备流程模型'
import { M44 } from './M44_检验鉴别模型'
import { M45 } from './M45_定量滴定实验模型'
import { M46 } from './M46_探究实验设计模型'
import { M47 } from './M47_实验误差分析模型'
import { M48 } from './M48_综合实验评价模型'

export {
  M01, M02, M03, M04, M05, M06, M07, M08, M09, M10, M11, M12, M13, M14, M15, M16, M17, M18, M19, M20, M21, M22, M23, M24, M25, M35, M26, M27, M28, M29, M30, M31, M32, M33, M34, M36, M37, M38, M39, M40, M41, M42, M43, M44, M45, M46, M47, M48,
}

export const modelDataMap: Record<string, any> = {
  'CHE-M01': M01,
  'CHE-M02': M02,
  'CHE-M03': M03,
  'CHE-M04': M04,
  'CHE-M05': M05,
  'CHE-M06': M06,
  'CHE-M07': M07,
  'CHE-M08': M08,
  'CHE-M09': M09,
  'CHE-M10': M10,
  'CHE-M11': M11,
  'CHE-M12': M12,
  'CHE-M13': M13,
  'CHE-M14': M14,
  'CHE-M15': M15,
  'CHE-M16': M16,
  'CHE-M17': M17,
  'CHE-M18': M18,
  'CHE-M19': M19,
  'CHE-M20': M20,
  'CHE-M21': M21,
  'CHE-M22': M22,
  'CHE-M23': M23,
  'CHE-M24': M24,
  'CHE-M25': M25,
  'CHE-M35': M35,
  'CHE-M26': M26,
  'CHE-M27': M27,
  'CHE-M28': M28,
  'CHE-M29': M29,
  'CHE-M30': M30,
  'CHE-M31': M31,
  'CHE-M32': M32,
  'CHE-M33': M33,
  'CHE-M34': M34,
  'CHE-M36': M36,
  'CHE-M37': M37,
  'CHE-M38': M38,
  'CHE-M39': M39,
  'CHE-M40': M40,
  'CHE-M41': M41,
  'CHE-M42': M42,
  'CHE-M43': M43,
  'CHE-M44': M44,
  'CHE-M45': M45,
  'CHE-M46': M46,
  'CHE-M47': M47,
  'CHE-M48': M48,
}

export const ALL_MODEL_IDS: string[] = [
  'CHE-M01',
  'CHE-M02',
  'CHE-M03',
  'CHE-M04',
  'CHE-M05',
  'CHE-M06',
  'CHE-M07',
  'CHE-M08',
  'CHE-M09',
  'CHE-M10',
  'CHE-M11',
  'CHE-M12',
  'CHE-M13',
  'CHE-M14',
  'CHE-M15',
  'CHE-M16',
  'CHE-M17',
  'CHE-M18',
  'CHE-M19',
  'CHE-M20',
  'CHE-M21',
  'CHE-M22',
  'CHE-M23',
  'CHE-M24',
  'CHE-M25',
  'CHE-M35',
  'CHE-M26',
  'CHE-M27',
  'CHE-M28',
  'CHE-M29',
  'CHE-M30',
  'CHE-M31',
  'CHE-M32',
  'CHE-M33',
  'CHE-M34',
  'CHE-M36',
  'CHE-M37',
  'CHE-M38',
  'CHE-M39',
  'CHE-M40',
  'CHE-M41',
  'CHE-M42',
  'CHE-M43',
  'CHE-M44',
  'CHE-M45',
  'CHE-M46',
  'CHE-M47',
  'CHE-M48',
]

export const chemistryModels = [
  { id: 'CHE-M01', title: '物质分类树模型', module: '物质分类与计量', order: 1 },
  { id: 'CHE-M02', title: '摩尔计算模型', module: '物质分类与计量', order: 1 },
  { id: 'CHE-M03', title: '离子方程式书写模型', module: '离子反应与氧化还原', order: 1 },
  { id: 'CHE-M04', title: '离子共存分析模型', module: '离子反应与氧化还原', order: 2 },
  { id: 'CHE-M05', title: '氧化还原双线桥模型', module: '离子反应与氧化还原', order: 1 },
  { id: 'CHE-M06', title: '氧化还原配平与计算模型', module: '离子反应与氧化还原', order: 2 },
  { id: 'CHE-M07', title: '原子结构与元素推断模型', module: '物质结构与元素周期律', order: 2 },
  { id: 'CHE-M08', title: '元素周期表应用模型', module: '物质结构与元素周期律', order: 2 },
  { id: 'CHE-M09', title: '分子结构预测模型', module: '物质结构与元素周期律', order: 2 },
  { id: 'CHE-M10', title: '晶体结构分析模型', module: '物质结构与元素周期律', order: 2 },
  { id: 'CHE-M11', title: '热化学盖斯定律模型', module: '化学反应原理', order: 2 },
  { id: 'CHE-M12', title: '化学平衡分析模型', module: '化学反应原理', order: 2 },
  { id: 'CHE-M13', title: '等效平衡模型', module: '化学反应原理', order: 3 },
  { id: 'CHE-M14', title: '弱电解质电离平衡模型', module: '化学反应原理', order: 2 },
  { id: 'CHE-M15', title: '沉淀溶解平衡模型', module: '化学反应原理', order: 2 },
  { id: 'CHE-M16', title: '速率图像分析模型', module: '化学反应原理', order: 2 },
  { id: 'CHE-M17', title: 'pH综合计算模型', module: '化学反应原理', order: 3 },
  { id: 'CHE-M18', title: '钠的转化链模型', module: '无机元素化学', order: 1 },
  { id: 'CHE-M19', title: '铝的两性转化模型', module: '无机元素化学', order: 2 },
  { id: 'CHE-M20', title: '铁三角氧化还原模型', module: '无机元素化学', order: 2 },
  { id: 'CHE-M21', title: '铜的氧化还原模型', module: '无机元素化学', order: 2 },
  { id: 'CHE-M22', title: '氯的歧化与归中模型', module: '无机元素化学', order: 2 },
  { id: 'CHE-M23', title: '硫氮价态转化模型', module: '无机元素化学', order: 2 },
  { id: 'CHE-M24', title: '工业流程分析模型', module: '无机元素化学', order: 3 },
  { id: 'CHE-M25', title: '无机新材料模型', module: '无机元素化学', order: 2 },
  { id: 'CHE-M35', title: '过氧化钠歧化模型', module: '无机元素化学', order: 2 },
  { id: 'CHE-M26', title: '同分异构体推导模型', module: '有机化学', order: 3 },
  { id: 'CHE-M27', title: '烃的反应分类模型', module: '有机化学', order: 1 },
  { id: 'CHE-M28', title: '芳香烃定位规则模型', module: '有机化学', order: 2 },
  { id: 'CHE-M29', title: '卤代烃反应条件模型', module: '有机化学', order: 2 },
  { id: 'CHE-M30', title: '醇酚转化模型', module: '有机化学', order: 2 },
  { id: 'CHE-M31', title: '酚的特性模型', module: '有机化学', order: 2 },
  { id: 'CHE-M32', title: '醛的氧化还原模型', module: '有机化学', order: 2 },
  { id: 'CHE-M33', title: '羧酸酯转化模型', module: '有机化学', order: 2 },
  { id: 'CHE-M34', title: '有机推断与合成模型', module: '有机化学', order: 3 },
  { id: 'CHE-M36', title: '高分子合成模型', module: '有机化学', order: 2 },
  { id: 'CHE-M37', title: '生物大分子模型', module: '有机化学', order: 2 },
  { id: 'CHE-M38', title: '原电池分析模型', module: '电化学', order: 2 },
  { id: 'CHE-M39', title: '新型电池分析模型', module: '电化学', order: 3 },
  { id: 'CHE-M40', title: '电解池与金属防护模型', module: '电化学', order: 2 },
  { id: 'CHE-M41', title: '电化学计算模型', module: '电化学', order: 2 },
  { id: 'CHE-M42', title: '分离提纯模型', module: '化学实验基础', order: 1 },
  { id: 'CHE-M43', title: '气体制备流程模型', module: '化学实验基础', order: 1 },
  { id: 'CHE-M44', title: '检验鉴别模型', module: '化学实验基础', order: 2 },
  { id: 'CHE-M45', title: '定量滴定实验模型', module: '化学实验基础', order: 2 },
  { id: 'CHE-M46', title: '探究实验设计模型', module: '化学实验基础', order: 3 },
  { id: 'CHE-M47', title: '实验误差分析模型', module: '化学实验基础', order: 2 },
  { id: 'CHE-M48', title: '综合实验评价模型', module: '化学实验基础', order: 3 },
]
