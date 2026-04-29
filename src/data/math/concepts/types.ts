// 知识节点数据类型定义（数学）
// 对齐《星耀网站内容架构规格书 v1.0》第 3.3 节
// 对标化学 concepts/types.ts 结构，学科标识为 math

export interface PreCheckItem {
  question: string
  options: string[]
  answer: string
  explanation: string
}

export interface NarrativeContent {
  context: string
  confusion: string
  experiment: string
  concept: string
  derivation: string
  transfer: string
}

export interface VariationItem {
  label: string
  formula?: string
  note: string
}

export interface Variations {
  basic: VariationItem[]
  advanced: VariationItem[]
  challenge: VariationItem[]
}

export interface FormulaItem {
  name: string
  formula: string
  usage: string
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
  id: string
  title: string
  subtitle: string
  module: string
  chapter: string
  difficulty: number

  preCheck: PreCheckItem[]

  narrative: NarrativeContent

  variations: Variations

  formulas: FormulaItem[]

  selfEval: SelfEvalItem[]

  relatedModels: string[]
  crossLinks: CrossLink[]
}
