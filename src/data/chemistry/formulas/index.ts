// 化学公式库
// 空框架，待内容AI填充

import type { FormulaCard, FormulaChapter } from './formulas/types'

export const formulaChapters: FormulaChapter[] = []

export const formulas: FormulaCard[] = []

export function searchFormulas(query: string): FormulaCard[] {
  if (!query.trim()) return formulas
  const q = query.toLowerCase()
  return formulas.filter(f =>
    f.name.toLowerCase().includes(q) ||
    f.formula.toLowerCase().includes(q) ||
    f.tags.some(t => t.toLowerCase().includes(q))
  )
}
