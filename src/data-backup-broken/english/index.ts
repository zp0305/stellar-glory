import { registerSubject } from '@/data/registry';
import { allConcepts, conceptDataMap, conceptList } from './concepts';
import { allModels, modelDataMap, ALL_MODEL_IDS, englishModels } from './models';
import { formulas, formulaChapters } from './formulas';
import { questions } from './questions';
import { allStrategies } from './strategies';

const paradigmDataMap = new Map(allStrategies.map(s => [s.id, s]));

function getConceptList() {
  return conceptList.map(chapter => ({
    chapter: chapter.chapter,
    module: '',
    concepts: chapter.items.map(c => ({
      id: c.id,
      name: c.name,
      difficulty: c.difficulty === 'core' ? 2 : c.difficulty === 'extended' ? 3 : 1,
    })),
  }));
}

function getAllConceptIds() {
  return allConcepts.map(c => c.id);
}

function getConceptMeta(id: string) {
  const concept = conceptDataMap.get(id);
  if (!concept) return null;
  return {
    title: concept.name,
    module: concept.module,
    chapter: concept.chapter,
    difficulty: concept.difficulty === 'core' ? 2 : concept.difficulty === 'extended' ? 3 : 1,
  };
}

function getModelChapters() {
  return englishModels.map(chapter => ({
    id: chapter.chapter,
    name: chapter.chapter,
    module: '',
    models: chapter.models.map(m => ({
      id: m.id,
      name: m.name,
      difficulty: m.difficulty,
    })),
  }));
}

function searchFormulas(query: string) {
  return formulas.filter(f => 
    f.name.toLowerCase().includes(query.toLowerCase()) ||
    f.chapter.toLowerCase().includes(query.toLowerCase())
  );
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
    allQuestions: questions,
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
  questions.forEach(q => {
    const modelId = q.modelId || 'unknown';
    if (!stats[modelId]) stats[modelId] = { total: 0, correct: 0 };
    stats[modelId].total++;
  });
  return stats;
}

function getQuestionsByModel() {
  const map: Record<string, typeof questions> = {};
  questions.forEach(q => {
    const modelId = q.modelId || 'unknown';
    if (!map[modelId]) map[modelId] = [];
    map[modelId].push(q);
  });
  return map;
}

registerSubject('english', {
  getConceptList,
  getConceptDataMap: () => Object.fromEntries(conceptDataMap),
  getAllConceptIds,
  getConceptMeta,
  
  getModelChapters,
  getModelDataMap: () => Object.fromEntries(modelDataMap),
  getAllModelIds: () => ALL_MODEL_IDS,
  
  getFormulaChapters: () => formulaChapters,
  getAllFormulas: () => formulas,
  searchFormulas,
  getFormulaData,
  
  getParadigmList: () => allStrategies,
  getParadigmDataMap: () => Object.fromEntries(paradigmDataMap),
  
  getModelQuestionStats,
  getAllQuestions: () => questions,
  getQuestionsByModel,
  getQuestionBankData,
  
  getGraphData: generateGraphData,
  getGraphModels: () => englishModels.map(chapter => chapter.models).flat(),
});