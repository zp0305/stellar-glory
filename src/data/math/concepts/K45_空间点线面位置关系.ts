// 知识节点 K45：空间点线面位置关系
import type { ConceptData } from './types'

export const K45: ConceptData = {
  id: 'K45',
  title: '空间点线面位置关系',
  subtitle: '空间的组织结构',
  module: '立体几何',
  chapter: '空间点线面位置关系',
  difficulty: 2,

  preCheck: [
    {
      question: '两条直线在空间中可能的位置关系有几种？',
      options: ['A. 2', 'B. 3', 'C. 4', 'D. 5'],
      answer: 'B',
      explanation: '空间中两条直线的关系：相交、平行（异面）、异面。共三种。',
    },
  ],

  narrative: {
    context: '空间中点、线、面的位置关系是立体几何的基础。',
    confusion: '异面直线的概念。',
    experiment: '观察教室中的墙角线，理解空间位置关系。',
    concept: '空间中的位置关系包括线线、线面、面面关系。',
    derivation: '线线平行：同位角相等或内错角相等；线面平行：线不在面内且无公共点。',
    transfer: '这些关系在证明和计算中广泛应用。',
  },

  variations: {
    basic: [
      { label: '线线关系', note: '相交、平行、异面' },
      { label: '线面关系', note: '平行、相交、在面内' },
      { label: '面面关系', note: '平行、相交' },
    ],
    advanced: [
      { label: '异面直线所成角', formula: '转化为相交直线所成角', note: '平移法' },
    ],
    challenge: [
      { label: '面面平行判定', formula: '线面平行⇒面面平行', note: '传递性' },
    ],
  },

  formulas: [
    { name: '异面直线所成角', formula: '范围 (0°, 90°]', usage: '求角度' },
  ],

  selfEval: [
    { question: '平行于同一平面的两条直线一定平行吗？', level: 'B', description: '不一定，可能异面' },
  ],

  relatedModels: ['MATH-G03'],
  crossLinks: [],
}
