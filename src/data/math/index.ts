// 数学学科数据主入口
// 实现 SubjectDataRegistry 接口，注册到学科数据注册表

import { registerSubject } from '../registry'
import { MATH_SUBJECT } from '../subjects'
import { allConcepts, conceptDataMap, getConceptById, getConceptsByModule, MATH_MODULES } from './concepts'
import { formulas, formulaChapters, searchFormulas } from './formulas'
import { allModels, modelDataMap, getModelById, getModelsByModule, MATH_MODEL_MODULES } from './models'
import { allQuestions, getQuestionsByFilter } from './questions'
import { allStrategies, strategyDataMap, getStrategyById, getStrategiesByModule } from './strategies'

const mathData = {
  getMeta: () => MATH_SUBJECT,

  getConceptChapters: () => {
    return MATH_MODULES.map(module => ({
      id: module,
      title: module,
      concepts: allConcepts.filter(c => c.module === module),
    }))
  },

  getConceptsByChapter: (chapter: string) => {
    return allConcepts.filter(c => c.chapter === chapter)
  },

  getConceptById,

  getModelChapters: () => {
    return MATH_MODEL_MODULES.map(module => ({
      id: module,
      title: module,
      models: allModels.filter(m => m.module === module),
    }))
  },

  getModelById,

  getFormulaChapters: () => formulaChapters,

  searchFormulas,

  getQuestionChapters: () => [],

  getQuestionsByFilter,

  getParadigmList: () => allStrategies,

  getParadigmById: getStrategyById,
}

registerSubject('math', mathData)

export {
  MATH_SUBJECT,
  MATH_MODULES,
  MATH_MODEL_MODULES,
  allConcepts,
  conceptDataMap,
  getConceptById,
  getConceptsByModule,
  formulas,
  formulaChapters,
  searchFormulas,
  allModels,
  modelDataMap,
  getModelById,
  getModelsByModule,
  allQuestions,
  getQuestionsByFilter,
  allStrategies,
  strategyDataMap,
  getStrategyById,
  getStrategiesByModule,
}
