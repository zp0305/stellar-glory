// 批量生成化学知识节点空模板和索引文件
// 运行: node scripts/gen-chemistry-skeleton.js

import fs from 'fs'
import path from 'path'

const BASE = path.resolve('src/data/chemistry')

// 57个知识节点：编号 → (名称, 板块, 章节)
const concepts = [
  // 板块1：物质的分类与计量
  ['C01', '物质的分类', '物质的分类与计量', '纯净物·混合物·单质·化合物·酸碱盐氧化物'],
  ['C02', '分散系与胶体', '物质的分类与计量', '分散系·胶体·丁达尔效应'],
  ['C03', '物质的量', '物质的分类与计量', '摩尔·阿伏加德罗常数'],
  ['C04', '气体摩尔体积', '物质的分类与计量', '标准状况·22.4L/mol'],
  ['C05', '物质的量浓度', '物质的分类与计量', 'c=n/V'],
  ['C06', '溶液配制', '物质的分类与计量', '容量瓶·误差分析'],
  // 板块2：离子反应与氧化还原
  ['C07', '电解质与非电解质', '离子反应与氧化还原', '电离·强电解质·弱电解质'],
  ['C08', '离子反应与离子方程式', '离子反应与氧化还原', '离子方程式书写·拆分规则'],
  ['C09', '离子共存与离子推断', '离子反应与氧化还原', '共存条件·推断方法'],
  ['C10', '氧化还原反应', '离子反应与氧化还原', '化合价升降·电子转移'],
  ['C11', '氧化剂与还原剂的强弱判断', '离子反应与氧化还原', '强制弱·价态判断'],
  ['C12', '氧化还原方程式配平', '离子反应与氧化还原', '升降守恒法·电子守恒'],
  // 板块3：物质结构与元素周期律
  ['C13', '原子结构', '物质结构与元素周期律', '核外电子排布·电子层·电子云'],
  ['C14', '元素周期表与元素周期律', '物质结构与元素周期律', '周期律·位构性'],
  ['C15', '化学键', '物质结构与元素周期律', '离子键·共价键·金属键'],
  ['C16', '分子结构与空间构型', '物质结构与元素周期律', 'VSEPR理论·极性'],
  ['C17', '分子间作用力与氢键', '物质结构与元素周期律', '范德华力·氢键·熔沸点'],
  ['C18', '晶体结构与性质', '物质结构与元素周期律', '离子晶体·原子晶体·分子晶体·金属晶体'],
  // 板块4：化学反应原理
  ['C19', '化学反应与能量变化', '化学反应原理', '焓变·吸热放热·化学键断成'],
  ['C20', '热化学方程式与盖斯定律', '化学反应原理', '盖斯定律·反应热计算'],
  ['C21', '化学反应速率', '化学反应原理', '碰撞理论·有效碰撞'],
  ['C22', '化学平衡与平衡常数', '化学反应原理', '动态平衡·K·Qc'],
  ['C23', '化学平衡的移动', '化学反应原理', '勒夏特列原理'],
  ['C24', '弱电解质的电离平衡', '化学反应原理', '电离平衡·电离常数'],
  ['C25', '水的电离与溶液的pH', '化学反应原理', 'Kw·pH·酸碱指示剂'],
  ['C26', '盐类水解', '化学反应原理', '谁弱谁水解·谁强显谁性'],
  ['C27', '沉淀溶解平衡', '化学反应原理', 'Ksp·沉淀生成与溶解'],
  // 板块5：无机元素化学
  ['C28', '钠及其化合物', '无机元素化学', 'Na·Na₂O·Na₂O₂·NaOH·Na₂CO₃·NaHCO₃'],
  ['C29', '铝及其化合物', '无机元素化学', 'Al·Al₂O₃·Al(OH)₃·两性'],
  ['C30', '铁及其化合物', '无机元素化学', 'Fe·Fe₂O₃·FeCl₃·FeCl₂·铁三角'],
  ['C31', '铜及其化合物', '无机元素化学', 'Cu·CuO·Cu₂O·CuSO₄'],
  ['C32', '氯及其化合物', '无机元素化学', 'Cl₂·HCl·HClO·NaClO'],
  ['C33', '硫及其化合物', '无机元素化学', 'S·SO₂·H₂SO₄'],
  ['C34', '氮及其化合物', '无机元素化学', 'N₂·NH₃·HNO₃·NO·NO₂'],
  ['C35', '硅及其化合物', '无机元素化学', 'Si·SiO₂·硅酸盐'],
  // 板块6：有机化学
  ['C36', '有机化合物的分类与命名', '有机化学', '官能团·系统命名法'],
  ['C37', '烷烃', '有机化学', '结构·性质·同分异构体'],
  ['C38', '烯烃与炔烃', '有机化学', '不饱和烃·加成反应'],
  ['C39', '苯与芳香烃', '有机化学', '苯环·取代·加成'],
  ['C40', '卤代烃', '有机化学', '取代·消去·亲核取代'],
  ['C41', '醇与酚', '有机化学', '羟基·取代·氧化·消去'],
  ['C42', '醛与酮', '有机化学', '羰基·氧化·还原·银镜反应'],
  ['C43', '羧酸与酯', '有机化学', '酯化·水解·皂化'],
  ['C44', '糖类', '有机化学', '单糖·二糖·多糖'],
  ['C45', '氨基酸与蛋白质', '有机化学', '肽键·蛋白质结构'],
  ['C46', '高分子化合物', '有机化学', '加聚·缩聚'],
  // 板块7：电化学
  ['C47', '原电池的工作原理', '电化学', '化学能→电能·电子转移'],
  ['C48', '化学电源', '电化学', '一次电池·二次电池·燃料电池'],
  ['C49', '电解池的工作原理', '电化学', '电能→化学能·电解'],
  ['C50', '金属的腐蚀与防护', '电化学', '吸氧腐蚀·析氢腐蚀'],
  ['C51', '电化学计算', '电化学', '电子守恒·Q=nFe'],
  // 板块8：化学实验基础
  ['C52', '常见化学仪器与基本操作', '化学实验基础', '量取·加热·过滤·蒸发·蒸馏'],
  ['C53', '物质的分离与提纯', '化学实验基础', '过滤·蒸馏·萃取·结晶'],
  ['C54', '常见气体的制备与收集', '化学实验基础', '发生→净化→收集→尾气处理'],
  ['C55', '物质的检验与鉴别', '化学实验基础', '特征反应·先取样后操作'],
  ['C56', '实验方案设计与评价', '化学实验基础', '控制变量法·方案优化'],
  ['C57', '综合探究实验', '化学实验基础', '制备·分离·检验·定量综合'],
]

// 模板函数
function genConceptFile(id, name, module, subtitle) {
  return `// ${id} ${name} - 知识节点（占位模板）
// 待内容AI填充六段式内容

export const ${id} = {
  id: '${id}',
  title: '${name}',
  subtitle: '${subtitle}',
  module: '${module}',
  chapter: '${module}',
  difficulty: 1,

  preCheck: [
    { question: '本节点前置检测（待填充）', options: ['A', 'B', 'C', 'D'], answer: 'A', explanation: '待填充' },
  ],

  narrative: {
    context: '内容整理中...',
    confusion: '内容整理中...',
    experiment: '内容整理中...',
    concept: '内容整理中...',
    derivation: '内容整理中...',
    transfer: '内容整理中...',
  },

  variations: {
    basic: [{ label: '待填充', note: '内容整理中...' }],
    advanced: [{ label: '待填充', note: '内容整理中...' }],
    challenge: [{ label: '待填充', note: '内容整理中...' }],
  },

  formulas: [
    { name: '待填充', formula: '', usage: '内容整理中...' },
  ],

  selfEval: [
    { question: '内容整理中...', level: 'A', description: '待填充' },
  ],

  relatedModels: [] as string[],
  crossLinks: [] as any[],
} as const
`
}

// 生成所有文件
const conceptDir = path.join(BASE, 'concepts')

for (const [id, name, module, subtitle] of concepts) {
  const fileName = `${id}_${name}.ts`
  fs.writeFileSync(path.join(conceptDir, fileName), genConceptFile(id, name, module, subtitle), 'utf-8')
}

// 生成 index.ts
const imports = []
const exports = []
const mapEntries = []
const listEntries = []

for (const [id, name, module, subtitle] of concepts) {
  const varName = id
  imports.push(`import { ${varName} } from './${id}_${name}'`)
  exports.push(varName)
  mapEntries.push(`  ${varName},`)
  listEntries.push(`  { id: '${id}', name: '${name}', module: '${module}', chapter: '${module}', difficulty: 1 },`)
}

// conceptList 按板块分组
const modules = [...new Set(concepts.map(([, , m]) => m))]
const listByModule = modules.map(mod => {
  const items = concepts.filter(([, , m]) => m === mod)
  return `  {
    chapter: '${mod}',
    module: '${mod}',
    concepts: [
${items.map(([id, name]) => `      { id: '${id}', name: '${name}', difficulty: 1 },`).join('\n')}
    ],
  },`
}).join('\n')

const indexContent = `// 化学知识节点索引
// C01-C57（共57个），按8大板块组织

import type { ConceptData } from './types'

${imports.join('\n')}

// ── 知识节点数据映射 ─────────────────────────────────────────
export const conceptDataMap: Record<string, ConceptData> = {
${mapEntries.join('\n')}
}

// ── 按板块分组的列表（供 ConceptList 组件使用） ──────────────
export const conceptList = [
${listByModule}
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
`

fs.writeFileSync(path.join(conceptDir, 'index.ts'), indexContent, 'utf-8')
console.log(`Done: generated ${concepts.length} concept files + index.ts`)
