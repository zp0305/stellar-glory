// 数学公式数据类型定义
// 与物理公式类似，但针对数学学科特点

export interface FormulaItem {
  name: string
  formula: string
  usage: string
}

export interface FormulaChapter {
  id: string
  title: string
  formulas: FormulaItem[]
}
