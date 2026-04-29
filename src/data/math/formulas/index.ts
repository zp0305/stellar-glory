// 数学公式数据聚合
// 骨架文件，数学公式待填充

import type { FormulaChapter } from './types'

export const formulaChapters: FormulaChapter[] = []

export const formulas: FormulaChapter[] = formulaChapters

export function searchFormulas(keyword: string): FormulaChapter[] {
  return formulas
}
