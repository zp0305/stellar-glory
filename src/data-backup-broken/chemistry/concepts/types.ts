// 知识节点数据类型定义（化学）
// 对齐《星耀网站内容架构规格书 v1.0》第 3.3 节
// 复用物理 types.ts 结构，学科标识为 chemistry

export interface PreCheckItem {
  question: string
  options: string[]
  answer: string
  explanation: string
}

export interface NarrativeContent {
  context: string      // 情境锚定（实验现象/工业生产引入）
  confusion: string    // 困惑预设（概念混淆/操作误区）
  experiment: string   // 实验/现象呈现
  concept: string      // 概念涌现
  derivation: string   // 反应机理/结构分析
  transfer: string     // 新情境运用
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
  id: string           // 如 'C01'
  title: string
  subtitle: string
  module: string       // 所属板块（8大板块之一）
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
  relatedModels: string[]      // 关联模型ID（如 'CHE-M01'）
  crossLinks: CrossLink[]      // 跨学科关联
}
