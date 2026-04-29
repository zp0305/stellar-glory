import { registerSubject } from '../registry';
import { allConcepts, conceptDataMap, getConceptById, MATH_MODULES } from './concepts';
import { formulas, formulaChapters, searchFormulas } from './formulas';
import { allModels, modelDataMap, MATH_MODEL_MODULES } from './models';
import { allQuestions, getQuestionsByFilter } from './questions';
import { allStrategies, strategyDataMap } from './strategies';

const ALL_MODEL_IDS = allModels.map(m => m.id);

const paradigmDataMap = new Map(allStrategies.map(s => [s.id, s]));

function getConceptList() {
  return MATH_MODULES.map(module => {
    const concepts = allConcepts.filter(c => c.module === module);
    return {
      chapter: module,
      module: '',
      concepts: concepts.map(c => ({
        id: c.id,
        name: c.name,
        difficulty: c.difficulty || 1,
      })),
    };
  });
}

function getAllConceptIds() {
  return allConcepts.map(c => c.id);
}

function getConceptMeta(id: string) {
  const concept = conceptDataMap[id];
  if (!concept) return null;
  return {
    title: concept.name,
    module: concept.module,
    chapter: concept.chapter,
    difficulty: concept.difficulty || 1,
  };
}

function getModelChapters() {
  return MATH_MODEL_MODULES.map(module => {
    const models = allModels.filter(m => m.module === module);
    return {
      id: module,
      name: module,
      module: module,
      models: models.map(m => ({
        id: m.id,
        name: m.title,
        difficulty: String(m.difficulty || 1),
      })),
    };
  });
}

function getFormulaData() {
  return {
    formulaChapters,
    searchFormulas,
    formulas,
  };
}

function getQuestionBankData() {
  return {
    allQuestions: allQuestions,
    DIFF_LABEL: { B: '基础', J: '进阶', T: '挑战' },
    DIFF_COLOR: { B: 'bg-green-100 text-green-700', J: 'bg-blue-100 text-blue-700', T: 'bg-red-100 text-red-700' },
    LEVEL_OPTIONS: [
      { value: 'L1', label: 'L1 基础' },
      { value: 'L2', label: 'L2 进阶' },
      { value: 'L3', label: 'L3 挑战' },
    ],
    TARGET_OPTIONS: [
      { value: 'SYNC', label: '同步学习' },
      { value: 'EXAM', label: '期中期末' },
      { value: 'GAOKAO', label: '高考专项' },
      { value: 'COMP', label: '竞赛拓展' },
    ],
    FUNCTION_OPTIONS: [
      { value: 'PRAC', label: '巩固练习' },
      { value: 'REV', label: '复习检测' },
      { value: 'DIAG', label: '诊断评估' },
      { value: 'REAL', label: '真题演练' },
    ],
    DIFFICULTY_D_OPTIONS: [
      { value: 1, label: 'B 基础', color: 'bg-green-100 text-green-700' },
      { value: 2, label: 'J 进阶', color: 'bg-blue-100 text-blue-700' },
      { value: 3, label: 'T 挑战', color: 'bg-red-100 text-red-700' },
    ],
    TYPE_OPTIONS: [
      { value: 'CHOICE', label: '选择题' },
      { value: 'FILL', label: '填空题' },
      { value: 'JUDGE', label: '判断题' },
      { value: 'ANSWER', label: '解答题' },
    ],
  };
}

function generateGraphData() {
  return { nodes: [], edges: [] };
}

function getModelQuestionStats() {
  const stats: Record<string, { total: number; correct: number }> = {};
  allQuestions.forEach(q => {
    const modelId = q.modelId || 'unknown';
    if (!stats[modelId]) stats[modelId] = { total: 0, correct: 0 };
    stats[modelId].total++;
  });
  return stats;
}

function getQuestionsByModel() {
  const map: Record<string, typeof allQuestions> = {};
  allQuestions.forEach(q => {
    const modelId = q.modelId || 'unknown';
    if (!map[modelId]) map[modelId] = [];
    map[modelId].push(q);
  });
  return map;
}

registerSubject('math', {
  getConceptList,
  getConceptDataMap: () => conceptDataMap,
  getAllConceptIds,
  getConceptMeta,
  
  getModelChapters,
  getModelDataMap: () => modelDataMap,
  getAllModelIds: () => ALL_MODEL_IDS,
  
  getFormulaChapters: () => formulaChapters,
  getAllFormulas: () => formulas,
  searchFormulas,
  getFormulaData,
  
  getParadigmList: () => allStrategies,
  getParadigmDataMap: () => Object.fromEntries(paradigmDataMap),
  
  getModelQuestionStats,
  getAllQuestions: () => allQuestions,
  getQuestionsByModel,
  getQuestionBankData,
  
  getGraphData: generateGraphData,
  getGraphModels: () => allModels.map(m => ({ id: m.id, name: m.title, difficulty: String(m.difficulty || 1) })),
});

export {
  allConcepts,
  conceptDataMap,
  getConceptById,
  formulas,
  formulaChapters,
  searchFormulas,
  allModels,
  modelDataMap,
  allQuestions,
  getQuestionsByFilter,
  allStrategies,
  strategyDataMap,
};