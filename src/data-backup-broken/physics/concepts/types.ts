// 知识节点数据类型定义
// 对齐《星耀网站内容架构规格书 v1.0》第 3.3 节

export interface PreCheckItem {
  question: string
  options: string[]
  answer: string
  explanation: string
}

export interface NarrativeContent {
  context: string      // 情境锚定 100-150字
  confusion: string    // 困惑预设 150-200字
  experiment: string   // 实验/现象呈现 200-250字
  concept: string      // 概念涌现 150-200字
  derivation: string   // 推导叙事 300-400字
  transfer: string     // 迁移与应用 150-200字
}

export interface VariationItem {
  label: string
  formula?: string
  note: string
}

export interface Variations {
  basic: VariationItem[]       // B级
  advanced: VariationItem[]    // J级
  challenge: VariationItem[]   // T级
}

export interface FormulaItem {
  name: string
  formula: string
  usage: string      // 使用场景说明
}

export interface SelfEvalItem {
  question: string
  level: 'A' | 'B' | 'C'
  description: string
}

export interface CrossLink {
  subject: string
  conceptId: string
  conceptName: string
  relation: string
}

export interface ConceptData {
  id: string           // 如 'P01'
  title: string
  subtitle: string
  module: string       // 所属板块
  chapter: string      // 所属章节
  difficulty: number   // 1-3

  // 区块1：前置知识检测
  preCheck: PreCheckItem[]

  // 区块2：叙事正文
  narrative: NarrativeContent

  // 区块3：分层变形
  variations: Variations

  // 区块4：公式卡片
  formulas: FormulaItem[]

  // 区块5：理解度自评
  selfEval: SelfEvalItem[]

  // 关联链接
  relatedModels: string[]      // 关联模型ID（如 PHY-M01）
  crossLinks: CrossLink[]      // 跨学科关联
}
