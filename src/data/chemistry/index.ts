// 化学学科数据入口
// 对齐物理 physics/index.ts 结构，实现 SubjectDataRegistry 接口

import type { ConceptData } from '@/types'
import { registerSubject } from '../registry'
import { conceptDataMap, conceptList, getConceptMeta, getAllConceptIds } from './concepts'
import { modelDataMap, ALL_MODEL_IDS } from './models'
import { chemistryModels } from './models'
import { allParadigms } from './paradigms'

const paradigmDataMap = new Map(allParadigms.map(p => [p.id, p]))
import { formulaChapters, formulas as allFormulas, searchFormulas } from './formulas'
import { modelQuestionStats, allQuestions, questionsByModel, DIFF_LABEL, DIFF_COLOR } from './questions'
import {
  LEVEL_OPTIONS,
  TARGET_OPTIONS,
  FUNCTION_OPTIONS,
  DIFFICULTY_D_OPTIONS,
  CHEMISTRY_TYPE_OPTIONS,
} from './questions/filters'

export const chemistryMetadata = {
  id: 'CHE',
  name: '化学',
  name_en: 'Chemistry',
  color: '#10b981',
  modules: [
    {
      id: 'CHE-MOD01',
      title: '物质的分类与计量',
      order: 1,
      chapters: [
        { id: 'CHE-CH01', name: '物质的分类与计量', order: 1, knowledgeIds: ['C01','C02','C03','C04','C05','C06'] },
      ],
    },
    {
      id: 'CHE-MOD02',
      title: '离子反应与氧化还原',
      order: 2,
      chapters: [
        { id: 'CHE-CH02', name: '离子反应与氧化还原', order: 1, knowledgeIds: ['C07','C08','C09','C10','C11','C12'] },
      ],
    },
    {
      id: 'CHE-MOD03',
      title: '物质结构与元素周期律',
      order: 3,
      chapters: [
        { id: 'CHE-CH03', name: '物质结构与元素周期律', order: 1, knowledgeIds: ['C13','C14','C15','C16','C17','C18'] },
      ],
    },
    {
      id: 'CHE-MOD04',
      title: '化学反应原理',
      order: 4,
      chapters: [
        { id: 'CHE-CH04', name: '化学反应原理', order: 1, knowledgeIds: ['C19','C20','C21','C22','C23','C24','C25','C26','C27'] },
      ],
    },
    {
      id: 'CHE-MOD05',
      title: '无机元素化学',
      order: 5,
      chapters: [
        { id: 'CHE-CH05', name: '无机元素化学', order: 1, knowledgeIds: ['C28','C29','C30','C31','C32','C33','C34','C35'] },
      ],
    },
    {
      id: 'CHE-MOD06',
      title: '有机化学',
      order: 6,
      chapters: [
        { id: 'CHE-CH06', name: '有机化学', order: 1, knowledgeIds: ['C36','C37','C38','C39','C40','C41','C42','C43','C44','C45','C46'] },
      ],
    },
    {
      id: 'CHE-MOD07',
      title: '电化学',
      order: 7,
      chapters: [
        { id: 'CHE-CH07', name: '电化学', order: 1, knowledgeIds: ['C47','C48','C49','C50','C51'] },
      ],
    },
    {
      id: 'CHE-MOD08',
      title: '化学实验基础',
      order: 8,
      chapters: [
        { id: 'CHE-CH08', name: '化学实验基础', order: 1, knowledgeIds: ['C52','C53','C54','C55','C56','C57'] },
      ],
    },
  ],
}

// 模型分类映射
const MODEL_CATEGORY: Record<string, string> = {
  '物质分类与计量': '物质分类与计量',
  '离子反应与氧化还原': '离子反应与氧化还原',
  '物质结构与元素周期律': '物质结构与元素周期律',
  '化学反应原理': '化学反应原理',
  '无机元素化学': '无机元素化学',
  '有机化学': '有机化学',
  '电化学': '电化学',
  '化学实验基础': '化学实验基础',
}

const CAT_COLOR: Record<string, string> = {
  '物质分类与计量': 'bg-emerald-100 text-emerald-700',
  '离子反应与氧化还原': 'bg-blue-100 text-blue-700',
  '物质结构与元素周期律': 'bg-violet-100 text-violet-700',
  '化学反应原理': 'bg-amber-100 text-amber-700',
  '无机元素化学': 'bg-orange-100 text-orange-700',
  '有机化学': 'bg-pink-100 text-pink-700',
  '电化学': 'bg-cyan-100 text-cyan-700',
  '化学实验基础': 'bg-lime-100 text-lime-700',
}

function getModelChapters() {
  const modules = [...new Set(chemistryModels.map(m => m.module))]
  return modules.map(module => {
    const chapterModels = chemistryModels.filter(m => m.module === module)
    return {
      id: module,
      name: module,
      module: module,
      models: chapterModels.map(m => ({
        id: m.id,
        name: m.title,
        difficulty: String(m.order),
      })),
    }
  })
}

registerSubject('chemistry', {
  getConceptList: () => conceptList,
  getConceptDataMap: () => conceptDataMap,
  getAllConceptIds: () => getAllConceptIds(),
  getConceptMeta: (id: string) => {
    const meta = getConceptMeta(id)
    if (!meta) return null
    const concept = conceptDataMap[id]
    return {
      title: meta.name,
      module: meta.module,
      chapter: meta.chapter,
      difficulty: concept?.difficulty ?? 1,
    }
  },

  getModelChapters: () => getModelChapters(),
  getModelDataMap: () => modelDataMap,
  getAllModelIds: () => ALL_MODEL_IDS,

  getFormulaChapters: () => formulaChapters,
  getAllFormulas: () => allFormulas,
  searchFormulas: (query: string) => searchFormulas(query),
  getFormulaData: () => ({
    formulaChapters,
    searchFormulas: (query: string) => searchFormulas(query),
    formulas: allFormulas,
  }),

  getParadigmList: () => allParadigms,
  getParadigmDataMap: () => paradigmDataMap,

  getModelQuestionStats: () => modelQuestionStats,
  getAllQuestions: () => allQuestions,
  getQuestionsByModel: () => questionsByModel,
  getQuestionBankData: () => ({
    allQuestions,
    DIFF_LABEL,
    DIFF_COLOR,
    LEVEL_OPTIONS,
    TARGET_OPTIONS,
    FUNCTION_OPTIONS,
    DIFFICULTY_D_OPTIONS,
    TYPE_OPTIONS: CHEMISTRY_TYPE_OPTIONS,
  }),

  getGraphData: () => ({ nodes: [], edges: [] }),
  getGraphModels: () => chemistryModels,
})

export { MODEL_CATEGORY, CAT_COLOR }
