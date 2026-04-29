// 公式卡片数据类型定义
// 对齐《星耀网站内容架构规格书 v1.0》P3 公式库（搜索+收藏）

export interface VariableDef {
  symbol: string          // 变量符号，如 "v"
  name: string            // 变量名称，如 "末速度"
  unit: string            // 单位，如 "m/s"
}

export interface FormulaCard {
  id: string              // 唯一ID，如 "PHY-F-001"
  name: string            // 公式名称，如 "速度公式"
  formula: string         // LaTeX表达式，如 "$v=v_0+at$"
  subject: 'physics'      // 学科（预留六科扩展）
  chapter: string         // 所属章节，如 "匀变速直线运动"
  section: string         // 所属小节/板块，如 "运动学"
  conditions: string[]    // 适用条件数组，如 ["匀变速直线运动", "加速度恒定"]
  variables: VariableDef[] // 变量说明
  derivation?: string     // 推导过程（关键步骤，可选）
  relatedFormulas?: string[] // 关联公式ID数组
  sourceConcepts: string[] // 来源知识节点ID，如 ["P03","P04","P05"]
  tags: string[]          // 搜索标签
}

export interface FormulaChapter {
  id: string
  name: string
  section: string
  formulas: FormulaCard[]
}