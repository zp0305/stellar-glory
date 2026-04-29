// 化学知识节点索引
// C01-C57（共57个），按8大板块组织

import type { ConceptData } from './types'

import { C01 } from './C01_物质的分类'
import { C02 } from './C02_分散系与胶体'
import { C03 } from './C03_物质的量'
import { C04 } from './C04_气体摩尔体积'
import { C05 } from './C05_物质的量浓度'
import { C06 } from './C06_溶液配制'
import { C07 } from './C07_电解质与非电解质'
import { C08 } from './C08_离子反应与离子方程式'
import { C09 } from './C09_离子共存与离子推断'
import { C10 } from './C10_氧化还原反应'
import { C11 } from './C11_氧化剂与还原剂的强弱判断'
import { C12 } from './C12_氧化还原方程式配平'
import { C13 } from './C13_原子结构'
import { C14 } from './C14_元素周期表与元素周期律'
import { C15 } from './C15_化学键'
import { C16 } from './C16_分子结构与空间构型'
import { C17 } from './C17_分子间作用力与氢键'
import { C18 } from './C18_晶体结构与性质'
import { C19 } from './C19_化学反应与能量变化'
import { C20 } from './C20_热化学方程式与盖斯定律'
import { C21 } from './C21_化学反应速率'
import { C22 } from './C22_化学平衡与平衡常数'
import { C23 } from './C23_化学平衡的移动'
import { C24 } from './C24_弱电解质的电离平衡'
import { C25 } from './C25_水的电离与溶液的pH'
import { C26 } from './C26_盐类水解'
import { C27 } from './C27_沉淀溶解平衡'
import { C28 } from './C28_钠及其化合物'
import { C29 } from './C29_铝及其化合物'
import { C30 } from './C30_铁及其化合物'
import { C31 } from './C31_铜及其化合物'
import { C32 } from './C32_氯及其化合物'
import { C33 } from './C33_硫及其化合物'
import { C34 } from './C34_氮及其化合物'
import { C35 } from './C35_硅及其化合物'
import { C36 } from './C36_有机化合物的分类与命名'
import { C37 } from './C37_烷烃'
import { C38 } from './C38_烯烃与炔烃'
import { C39 } from './C39_苯与芳香烃'
import { C40 } from './C40_卤代烃'
import { C41 } from './C41_醇与酚'
import { C42 } from './C42_醛与酮'
import { C43 } from './C43_羧酸与酯'
import { C44 } from './C44_糖类'
import { C45 } from './C45_氨基酸与蛋白质'
import { C46 } from './C46_高分子化合物'
import { C47 } from './C47_原电池的工作原理'
import { C48 } from './C48_化学电源'
import { C49 } from './C49_电解池的工作原理'
import { C50 } from './C50_金属的腐蚀与防护'
import { C51 } from './C51_电化学计算'
import { C52 } from './C52_常见化学仪器与基本操作'
import { C53 } from './C53_物质的分离与提纯'
import { C54 } from './C54_常见气体的制备与收集'
import { C55 } from './C55_物质的检验与鉴别'
import { C56 } from './C56_实验方案设计与评价'
import { C57 } from './C57_综合探究实验'

// ── 知识节点数据映射 ─────────────────────────────────────────
export const conceptDataMap: Record<string, ConceptData> = {
  C01,
  C02,
  C03,
  C04,
  C05,
  C06,
  C07,
  C08,
  C09,
  C10,
  C11,
  C12,
  C13,
  C14,
  C15,
  C16,
  C17,
  C18,
  C19,
  C20,
  C21,
  C22,
  C23,
  C24,
  C25,
  C26,
  C27,
  C28,
  C29,
  C30,
  C31,
  C32,
  C33,
  C34,
  C35,
  C36,
  C37,
  C38,
  C39,
  C40,
  C41,
  C42,
  C43,
  C44,
  C45,
  C46,
  C47,
  C48,
  C49,
  C50,
  C51,
  C52,
  C53,
  C54,
  C55,
  C56,
  C57,
}

// ── 按板块分组的列表（供 ConceptList 组件使用） ──────────────
export const conceptList = [
  {
    chapter: '物质的分类与计量',
    module: '物质的分类与计量',
    concepts: [
      { id: 'C01', name: '物质的分类', difficulty: 1 },
      { id: 'C02', name: '分散系与胶体', difficulty: 1 },
      { id: 'C03', name: '物质的量', difficulty: 1 },
      { id: 'C04', name: '气体摩尔体积', difficulty: 1 },
      { id: 'C05', name: '物质的量浓度', difficulty: 1 },
      { id: 'C06', name: '溶液配制', difficulty: 1 },
    ],
  },
  {
    chapter: '离子反应与氧化还原',
    module: '离子反应与氧化还原',
    concepts: [
      { id: 'C07', name: '电解质与非电解质', difficulty: 1 },
      { id: 'C08', name: '离子反应与离子方程式', difficulty: 1 },
      { id: 'C09', name: '离子共存与离子推断', difficulty: 1 },
      { id: 'C10', name: '氧化还原反应', difficulty: 1 },
      { id: 'C11', name: '氧化剂与还原剂的强弱判断', difficulty: 1 },
      { id: 'C12', name: '氧化还原方程式配平', difficulty: 1 },
    ],
  },
  {
    chapter: '物质结构与元素周期律',
    module: '物质结构与元素周期律',
    concepts: [
      { id: 'C13', name: '原子结构', difficulty: 1 },
      { id: 'C14', name: '元素周期表与元素周期律', difficulty: 1 },
      { id: 'C15', name: '化学键', difficulty: 1 },
      { id: 'C16', name: '分子结构与空间构型', difficulty: 1 },
      { id: 'C17', name: '分子间作用力与氢键', difficulty: 1 },
      { id: 'C18', name: '晶体结构与性质', difficulty: 1 },
    ],
  },
  {
    chapter: '化学反应原理',
    module: '化学反应原理',
    concepts: [
      { id: 'C19', name: '化学反应与能量变化', difficulty: 1 },
      { id: 'C20', name: '热化学方程式与盖斯定律', difficulty: 1 },
      { id: 'C21', name: '化学反应速率', difficulty: 1 },
      { id: 'C22', name: '化学平衡与平衡常数', difficulty: 1 },
      { id: 'C23', name: '化学平衡的移动', difficulty: 1 },
      { id: 'C24', name: '弱电解质的电离平衡', difficulty: 1 },
      { id: 'C25', name: '水的电离与溶液的pH', difficulty: 1 },
      { id: 'C26', name: '盐类水解', difficulty: 1 },
      { id: 'C27', name: '沉淀溶解平衡', difficulty: 1 },
    ],
  },
  {
    chapter: '无机元素化学',
    module: '无机元素化学',
    concepts: [
      { id: 'C28', name: '钠及其化合物', difficulty: 1 },
      { id: 'C29', name: '铝及其化合物', difficulty: 1 },
      { id: 'C30', name: '铁及其化合物', difficulty: 1 },
      { id: 'C31', name: '铜及其化合物', difficulty: 1 },
      { id: 'C32', name: '氯及其化合物', difficulty: 1 },
      { id: 'C33', name: '硫及其化合物', difficulty: 1 },
      { id: 'C34', name: '氮及其化合物', difficulty: 1 },
      { id: 'C35', name: '硅及其化合物', difficulty: 1 },
    ],
  },
  {
    chapter: '有机化学',
    module: '有机化学',
    concepts: [
      { id: 'C36', name: '有机化合物的分类与命名', difficulty: 1 },
      { id: 'C37', name: '烷烃', difficulty: 1 },
      { id: 'C38', name: '烯烃与炔烃', difficulty: 1 },
      { id: 'C39', name: '苯与芳香烃', difficulty: 1 },
      { id: 'C40', name: '卤代烃', difficulty: 1 },
      { id: 'C41', name: '醇与酚', difficulty: 1 },
      { id: 'C42', name: '醛与酮', difficulty: 1 },
      { id: 'C43', name: '羧酸与酯', difficulty: 1 },
      { id: 'C44', name: '糖类', difficulty: 1 },
      { id: 'C45', name: '氨基酸与蛋白质', difficulty: 1 },
      { id: 'C46', name: '高分子化合物', difficulty: 1 },
    ],
  },
  {
    chapter: '电化学',
    module: '电化学',
    concepts: [
      { id: 'C47', name: '原电池的工作原理', difficulty: 1 },
      { id: 'C48', name: '化学电源', difficulty: 1 },
      { id: 'C49', name: '电解池的工作原理', difficulty: 1 },
      { id: 'C50', name: '金属的腐蚀与防护', difficulty: 1 },
      { id: 'C51', name: '电化学计算', difficulty: 1 },
    ],
  },
  {
    chapter: '化学实验基础',
    module: '化学实验基础',
    concepts: [
      { id: 'C52', name: '常见化学仪器与基本操作', difficulty: 1 },
      { id: 'C53', name: '物质的分离与提纯', difficulty: 1 },
      { id: 'C54', name: '常见气体的制备与收集', difficulty: 1 },
      { id: 'C55', name: '物质的检验与鉴别', difficulty: 1 },
      { id: 'C56', name: '实验方案设计与评价', difficulty: 1 },
      { id: 'C57', name: '综合探究实验', difficulty: 1 },
    ],
  },
]

// ── 元数据查询函数 ───────────────────────────────────────────
export function getConceptMeta(id: string): { name: string; module: string; chapter: string; difficulty: number } | null {
  const concept = conceptDataMap[id]
  if (!concept) return null
  return { name: concept.title, module: concept.module, chapter: concept.chapter, difficulty: concept.difficulty }
}

export function getAllConceptIds(): string[] {
  return Object.keys(conceptDataMap)
}
