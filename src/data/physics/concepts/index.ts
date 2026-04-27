// 物理知识节点索引
// P01-P56（共56个），由 parse-knowledge.js 从 docs/knowledge/physics/*.md 自动生成

import type { ConceptData } from './types'

// ── P01 ~ P12：运动学 + 力学 ──────────────────────────────────
import { P01 } from './P01_位置位移路程时间'
import { P02 } from './P02_速度'
import { P03 } from './P03_加速度'
import { P04 } from './P04_匀变速直线运动'
import { P05 } from './P05_自由落体与竖直上抛'
import { P06 } from './P06_运动图像'
import { P07 } from './P07_力学常见力'
import { P08 } from './P08_力的合成与分解'
import { P09 } from './P09_牛顿三定律'
import { P10 } from './P10_超重与失重'
import { P11 } from './P11_连接体问题'
import { P12 } from './P12_多过程与临界极值'

// ── P13 ~ P18：曲线运动 + 万有引力 ────────────────────────────
import { P13 } from './P13_运动的合成与分解'
import { P14 } from './P14_抛体运动'
import { P15 } from './P15_圆周运动'
import { P16 } from './P16_万有引力定律'
import { P17 } from './P17_天体运动'
import { P18 } from './P18_宇宙速度'

// ── P19 ~ P27：能量与动量 ────────────────────────────────────
import { P19 } from './P19_功与功率'
import { P20 } from './P20_动能与动能定理'
import { P21 } from './P21_重力势能·弹性势能'
import { P22 } from './P22_机械能守恒定律'
import { P23 } from './P23_功能关系与能量守恒'
import { P24 } from './P24_动量与冲量'
import { P25 } from './P25_动量定理'
import { P26 } from './P26_动量守恒定律'
import { P27 } from './P27_碰撞与反冲'

// ── P28 ~ P44：电磁学 ────────────────────────────────────────
import { P28 } from './P28_电荷与库仑定律'
import { P29 } from './P29_静电场'
import { P30 } from './P30_电容器'
import { P31 } from './P31_带电粒子在电场中的运动'
import { P32 } from './P32_恒定电流'
import { P33 } from './P33_电功与电功率'
import { P34 } from './P34_闭合电路欧姆定律'
import { P35 } from './P35_电路分析与实验'
import { P36 } from './P36_磁场'
import { P37 } from './P37_洛伦兹力'
import { P38 } from './P38_带电粒子在磁场中的运动'
import { P39 } from './P39_复合场中的运动'
import { P40 } from './P40_电磁感应'
import { P41 } from './P41_电磁感应综合'
import { P42 } from './P42_交变电流'
import { P43 } from './P43_变压器与远距离输电'
import { P44 } from './P44_电磁波'

// ── P45 ~ P48：热学 ──────────────────────────────────────────
import { P45 } from './P45_分子动理论'
import { P46 } from './P46_气体实验定律'
import { P47 } from './P47_理想气体状态方程'
import { P48 } from './P48_热力学定律'

// ── P49 ~ P52：机械波 + 光学 ─────────────────────────────────
import { P49 } from './P49_机械振动'
import { P50 } from './P50_机械波'
import { P51 } from './P51_几何光学'
import { P52 } from './P52_物理光学'

// ── P53 ~ P56：近代物理 ──────────────────────────────────────
import { P53 } from './P53_相对论初步'
import { P54 } from './P54_波粒二象性'
import { P55 } from './P55_原子结构'
import { P56 } from './P56_原子核'

// ── 知识节点数据映射 ─────────────────────────────────────────
export const conceptDataMap: Record<string, ConceptData> = {
  P01, P02, P03, P04, P05, P06, P07, P08, P09, P10, P11, P12,
  P13, P14, P15, P16, P17, P18,
  P19, P20, P21, P22, P23, P24, P25, P26, P27,
  P28, P29, P30, P31, P32, P33, P34, P35, P36, P37, P38, P39, P40, P41, P42, P43, P44,
  P45, P46, P47, P48,
  P49, P50, P51, P52,
  P53, P54, P55, P56,
}

// ── 列表元信息 ────────────────────────────────────────────────
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

// 物理 56 个知识节点章节列表（从 MD 文件提取，章节以 MD 内 section 字段为准）
export const conceptList: ConceptChapter[] = [
  { id: 'C01', name: '描述运动的语言', module: '运动学', concepts: [
    { id: 'P01', name: '位置·位移·路程·时间', difficulty: 1 },
    { id: 'P02', name: '速度', difficulty: 1 },
    { id: 'P03', name: '加速度', difficulty: 1 },
    { id: 'P04', name: '匀变速直线运动', difficulty: 1 },
    { id: 'P05', name: '自由落体与竖直上抛', difficulty: 2 },
    { id: 'P06', name: '运动图像', difficulty: 2 },
  ]},
  { id: 'C02', name: '力学', module: '力学', concepts: [
    { id: 'P07', name: '力学常见力', difficulty: 1 },
    { id: 'P08', name: '力的合成与分解', difficulty: 1 },
    { id: 'P09', name: '牛顿三定律', difficulty: 1 },
    { id: 'P10', name: '超重与失重', difficulty: 2 },
    { id: 'P11', name: '连接体问题', difficulty: 2 },
    { id: 'P12', name: '多过程与临界极值', difficulty: 3 },
  ]},
  { id: 'C03', name: '曲线运动与万有引力', module: '曲线运动与万有引力', concepts: [
    { id: 'P13', name: '运动的合成与分解', difficulty: 2 },
    { id: 'P14', name: '抛体运动', difficulty: 2 },
    { id: 'P15', name: '圆周运动', difficulty: 2 },
    { id: 'P16', name: '万有引力定律', difficulty: 2 },
    { id: 'P17', name: '天体运动', difficulty: 2 },
    { id: 'P18', name: '宇宙速度', difficulty: 2 },
  ]},
  { id: 'C04', name: '能量与动量', module: '能量与动量', concepts: [
    { id: 'P19', name: '功与功率', difficulty: 1 },
    { id: 'P20', name: '动能与动能定理', difficulty: 2 },
    { id: 'P21', name: '重力势能·弹性势能', difficulty: 2 },
    { id: 'P22', name: '机械能守恒定律', difficulty: 2 },
    { id: 'P23', name: '功能关系与能量守恒', difficulty: 3 },
    { id: 'P24', name: '动量与冲量', difficulty: 2 },
    { id: 'P25', name: '动量定理', difficulty: 2 },
    { id: 'P26', name: '动量守恒定律', difficulty: 2 },
    { id: 'P27', name: '碰撞与反冲', difficulty: 3 },
  ]},
  { id: 'C05', name: '电磁学基础', module: '电磁学', concepts: [
    { id: 'P28', name: '电荷与库仑定律', difficulty: 1 },
    { id: 'P29', name: '静电场', difficulty: 2 },
    { id: 'P30', name: '电容器', difficulty: 2 },
    { id: 'P31', name: '带电粒子在电场中的运动', difficulty: 3 },
    { id: 'P32', name: '恒定电流', difficulty: 1 },
    { id: 'P33', name: '电功与电功率', difficulty: 2 },
    { id: 'P34', name: '闭合电路欧姆定律', difficulty: 2 },
    { id: 'P35', name: '电路分析与实验', difficulty: 2 },
    { id: 'P36', name: '磁场', difficulty: 1 },
    { id: 'P37', name: '洛伦兹力', difficulty: 2 },
    { id: 'P38', name: '带电粒子在磁场中的运动', difficulty: 3 },
    { id: 'P39', name: '复合场中的运动', difficulty: 3 },
    { id: 'P40', name: '电磁感应', difficulty: 2 },
    { id: 'P41', name: '电磁感应综合', difficulty: 3 },
    { id: 'P42', name: '交变电流', difficulty: 2 },
    { id: 'P43', name: '变压器与远距离输电', difficulty: 2 },
    { id: 'P44', name: '电磁波', difficulty: 1 },
  ]},
  { id: 'C06', name: '热学', module: '热学·光学·机械波', concepts: [
    { id: 'P45', name: '分子动理论', difficulty: 1 },
    { id: 'P46', name: '气体实验定律', difficulty: 2 },
    { id: 'P47', name: '理想气体状态方程', difficulty: 2 },
    { id: 'P48', name: '热力学定律', difficulty: 2 },
  ]},
  { id: 'C07', name: '机械波与光学', module: '热学·光学·机械波', concepts: [
    { id: 'P49', name: '机械振动', difficulty: 2 },
    { id: 'P50', name: '机械波', difficulty: 2 },
    { id: 'P51', name: '几何光学', difficulty: 1 },
    { id: 'P52', name: '物理光学', difficulty: 2 },
  ]},
  { id: 'C08', name: '近代物理', module: '近代物理', concepts: [
    { id: 'P53', name: '相对论初步', difficulty: 2 },
    { id: 'P54', name: '波粒二象性', difficulty: 2 },
    { id: 'P55', name: '原子结构', difficulty: 2 },
    { id: 'P56', name: '原子核', difficulty: 2 },
  ]},
]

// ── 辅助函数 ─────────────────────────────────────────────────

/** 按 ID 获取概念元信息 */
export function getConceptMeta(id: string): { name: string; module: string; chapter: string } | null {
  for (const ch of conceptList) {
    const c = ch.concepts.find(c => c.id === id)
    if (c) return { name: c.name, module: ch.module, chapter: ch.name }
  }
  return null
}

/** 获取所有概念 ID 列表（按章节顺序，用于翻页导航） */
export function getAllConceptIds(): string[] {
  const ids: string[] = []
  for (const ch of conceptList) {
    for (const c of ch.concepts) ids.push(c.id)
  }
  return ids
}
