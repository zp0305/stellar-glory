// 公式卡片数据类型定义（化学）
// 复用物理结构，学科标识预留 'chemistry'

export interface VariableDef {
  symbol: string
  name: string
  unit: string
}

export interface FormulaCard {
  id: string              // 唯一ID，如 "CHE-F-001"
  name: string            // 公式名称
  formula: string         // LaTeX表达式
  subject: 'chemistry'    // 学科
  chapter: string         // 所属章节
  section: string         // 所属板块
  conditions: string[]    // 适用条件
  variables: VariableDef[] // 变量说明
  derivation?: string     // 推导过程
  relatedFormulas?: string[] // 关联公式ID
  sourceConcepts: string[] // 来源知识节点ID
  tags: string[]          // 搜索标签
}

export interface FormulaChapter {
  id: string
  name: string
  section: string
  formulas: FormulaCard[]
}
