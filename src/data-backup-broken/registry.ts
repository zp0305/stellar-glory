import type { ConceptData } from './physics/concepts/types'
import type { FormulaCard, FormulaChapter } from './physics/formulas/types'

export interface SubjectDataRegistry {
  getConceptList(): { chapter: string; module: string; concepts: { id: string; name: string; difficulty: number }[] }[]
  getConceptDataMap(): Record<string, ConceptData>
  getAllConceptIds(): string[]
  getConceptMeta(id: string): { title: string; module: string; chapter: string; difficulty: number } | null

  getModelChapters(): { id: string; name: string; module: string; models: { id: string; name: string; difficulty: string }[] }[]
  getModelDataMap(): Record<string, any>
  getAllModelIds(): string[]

  getFormulaChapters(): FormulaChapter[]
  getAllFormulas(): FormulaCard[]
  searchFormulas(query: string): FormulaCard[]
  getFormulaData(): { formulaChapters: FormulaChapter[]; searchFormulas: (query: string) => FormulaCard[]; formulas: FormulaCard[] }

  getParadigmList(): any[]
  getParadigmDataMap(): Record<string, any>

  getModelQuestionStats(): Record<string, any>
  getAllQuestions(): any[]
  getQuestionsByModel(): Record<string, any[]>
  getQuestionBankData(): {
    allQuestions: any[]
    DIFF_LABEL: Record<string, string>
    DIFF_COLOR: Record<string, string>
    LEVEL_OPTIONS: { value: string; label: string }[]
    TARGET_OPTIONS: { value: string; label: string }[]
    FUNCTION_OPTIONS: { value: string; label: string }[]
    DIFFICULTY_D_OPTIONS: { value: number; label: string; color: string }[]
    TYPE_OPTIONS: { value: string; label: string }[]
  }

  getGraphData(): any
  getGraphModels(): any[]
}

const registry: Map<string, SubjectDataRegistry> = new Map()

export function registerSubject(id: string, data: SubjectDataRegistry) {
  registry.set(id, data)
}

export function getSubjectData(id: string): SubjectDataRegistry | undefined {
  return registry.get(id)
}