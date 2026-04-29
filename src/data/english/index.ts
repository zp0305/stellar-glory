import { registerSubject, SubjectDataRegistry } from '@/data/registry';
import { allConcepts, conceptDataMap, conceptList, getConceptById } from './concepts';
import { allModels, modelDataMap, ALL_MODEL_IDS, englishModels, getModelById } from './models';
import { formulas, formulaDataMap, getFormulaById } from './formulas';
import { questions, questionDataMap, getQuestionById, getQuestionsByModelId } from './questions';
import { allStrategies, strategyDataMap, getStrategyById } from './strategies';

const englishRegistry: SubjectDataRegistry = {
  subjectId: 'english',
  allConcepts,
  conceptDataMap,
  conceptList,
  getConceptById,
  allModels,
  modelDataMap,
  ALL_MODEL_IDS,
  modelChapters: englishModels,
  getModelById,
  formulas,
  formulaDataMap,
  getFormulaById,
  questions,
  questionDataMap,
  getQuestionById,
  getQuestionsByModelId,
  strategies: allStrategies,
  strategyDataMap,
  getStrategyById,
};

registerSubject('english', englishRegistry);