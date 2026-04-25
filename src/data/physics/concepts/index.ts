// 物理知识节点索引
// 规格书编号：P01-P56（共56个）
// 当前仅 P01 有示例数据，其余待内容方交付

import type { ConceptData } from './types'
import { P01 } from './P01_加速度'

// 知识节点数据映射（id → ConceptData）
export const conceptDataMap: Record<string, ConceptData> = {
  'P01': P01,
}

// 按章节分组的列表元信息
export interface ConceptListItem {
  id: string
  name: string
  difficulty: number
}

export interface ConceptChapter {
  id: string
  name: string
  module: string
  concepts: ConceptListItem[]
}

// 物理 56 个知识节点列表（仅 ID 和名称，数据待填充）
export const conceptList: ConceptChapter[] = [
  {
    id: 'C01',
    name: '运动的描述',
    module: '运动学',
    concepts: [
      { id: 'P01', name: '加速度', difficulty: 1 },
      { id: 'P02', name: '位移与路程', difficulty: 1 },
      { id: 'P03', name: '平均速度与瞬时速度', difficulty: 1 },
      { id: 'P04', name: '匀变速直线运动规律', difficulty: 1 },
      { id: 'P05', name: '自由落体与竖直上抛', difficulty: 2 },
    ],
  },
  {
    id: 'C02',
    name: '相互作用与牛顿运动定律',
    module: '力学',
    concepts: [
      { id: 'P06', name: '力与力的图示', difficulty: 1 },
      { id: 'P07', name: '重力与重心', difficulty: 1 },
      { id: 'P08', name: '弹力与胡克定律', difficulty: 1 },
      { id: 'P09', name: '摩擦力', difficulty: 2 },
      { id: 'P10', name: '牛顿第一定律', difficulty: 1 },
      { id: 'P11', name: '牛顿第二定律', difficulty: 2 },
      { id: 'P12', name: '牛顿第三定律', difficulty: 1 },
      { id: 'P13', name: '整体法与隔离法', difficulty: 2 },
    ],
  },
  {
    id: 'C03',
    name: '曲线运动与万有引力',
    module: '力学',
    concepts: [
      { id: 'P14', name: '曲线运动的条件', difficulty: 1 },
      { id: 'P15', name: '运动合成与分解', difficulty: 2 },
      { id: 'P16', name: '平抛运动规律', difficulty: 2 },
      { id: 'P17', name: '圆周运动', difficulty: 2 },
      { id: 'P18', name: '向心力与向心加速度', difficulty: 2 },
      { id: 'P19', name: '万有引力定律', difficulty: 2 },
      { id: 'P20', name: '宇宙速度与卫星轨道', difficulty: 3 },
    ],
  },
  {
    id: 'C04',
    name: '机械能',
    module: '能量',
    concepts: [
      { id: 'P21', name: '功', difficulty: 1 },
      { id: 'P22', name: '功率', difficulty: 1 },
      { id: 'P23', name: '动能与动能定理', difficulty: 2 },
      { id: 'P24', name: '势能（重力+弹性）', difficulty: 2 },
      { id: 'P25', name: '机械能守恒定律', difficulty: 2 },
      { id: 'P26', name: '功能关系', difficulty: 3 },
    ],
  },
  {
    id: 'C05',
    name: '动量',
    module: '动量',
    concepts: [
      { id: 'P27', name: '动量与冲量', difficulty: 2 },
      { id: 'P28', name: '动量定理', difficulty: 2 },
      { id: 'P29', name: '动量守恒定律', difficulty: 2 },
      { id: 'P30', name: '碰撞分类（弹/非弹/完全非弹）', difficulty: 2 },
    ],
  },
  {
    id: 'C06',
    name: '静电场',
    module: '电磁学',
    concepts: [
      { id: 'P31', name: '电荷与库仑定律', difficulty: 1 },
      { id: 'P32', name: '电场强度', difficulty: 2 },
      { id: 'P33', name: '电场线与等势面', difficulty: 2 },
      { id: 'P34', name: '电势与电势能', difficulty: 2 },
      { id: 'P35', name: '电容器与电容', difficulty: 2 },
      { id: 'P36', name: '带电粒子在电场中的运动', difficulty: 3 },
    ],
  },
  {
    id: 'C07',
    name: '恒定电流',
    module: '电磁学',
    concepts: [
      { id: 'P37', name: '电流与电阻', difficulty: 1 },
      { id: 'P38', name: '欧姆定律', difficulty: 1 },
      { id: 'P39', name: '串并联电路', difficulty: 2 },
      { id: 'P40', name: '电功与电功率', difficulty: 2 },
      { id: 'P41', name: '闭合电路欧姆定律', difficulty: 2 },
    ],
  },
  {
    id: 'C08',
    name: '磁场与电磁感应',
    module: '电磁学',
    concepts: [
      { id: 'P42', name: '磁感应强度', difficulty: 1 },
      { id: 'P43', name: '安培力', difficulty: 2 },
      { id: 'P44', name: '洛伦兹力', difficulty: 2 },
      { id: 'P45', name: '电磁感应定律', difficulty: 2 },
      { id: 'P46', name: '自感与互感', difficulty: 2 },
      { id: 'P47', name: '交变电流', difficulty: 2 },
    ],
  },
  {
    id: 'C09',
    name: '热学',
    module: '热学',
    concepts: [
      { id: 'P48', name: '分子动理论', difficulty: 1 },
      { id: 'P49', name: '气体实验定律', difficulty: 2 },
      { id: 'P50', name: '理想气体状态方程', difficulty: 2 },
      { id: 'P51', name: '热力学定律', difficulty: 2 },
    ],
  },
  {
    id: 'C10',
    name: '光学与近代物理',
    module: '近代物理',
    concepts: [
      { id: 'P52', name: '光的折射与反射', difficulty: 1 },
      { id: 'P53', name: '光的干涉与衍射', difficulty: 2 },
      { id: 'P54', name: '光电效应', difficulty: 2 },
      { id: 'P55', name: '原子结构与能级', difficulty: 2 },
      { id: 'P56', name: '核反应与核能', difficulty: 2 },
    ],
  },
]

// 辅助函数：按ID获取概念元信息
export function getConceptMeta(id: string): { name: string; module: string; chapter: string } | null {
  for (const ch of conceptList) {
    const c = ch.concepts.find(c => c.id === id)
    if (c) return { name: c.name, module: ch.module, chapter: ch.name }
  }
  return null
}

// 获取所有概念ID列表（用于翻页导航）
export function getAllConceptIds(): string[] {
  const ids: string[] = []
  for (const ch of conceptList) {
    for (const c of ch.concepts) {
      ids.push(c.id)
    }
  }
  return ids
}
