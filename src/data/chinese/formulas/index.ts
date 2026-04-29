import { FormulaCard, FormulaChapter } from './types';

export const formulas: FormulaCard[] = [];

export const formulaChapters: FormulaChapter[] = [];

export const formulaDataMap = new Map<string, FormulaCard>(
  formulas.map((f) => [f.id, f])
);

export function getFormulaById(id: string): FormulaCard | undefined {
  return formulaDataMap.get(id);
}