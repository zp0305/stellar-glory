// 知识节点 K47：空间直线平面的垂直
import type { ConceptData } from './types'

export const K47: ConceptData = {
  id: 'K47',
  title: '空间直线平面的垂直',
  subtitle: '垂直的判定与性质',
  module: '立体几何',
  chapter: '空间直线平面的垂直',
  difficulty: 2,

  preCheck: [
    {
      question: '线面垂直的判定定理是？',
      options: ['A. 若直线与平面内两条直线垂直，则线面垂直', 'B. 若直线与平面内一条直线垂直，则线面垂直', 'C. 若直线与平面平行，则线面垂直', 'D. 若直线与平面无公共点，则线面垂直'],
      answer: 'A',
      explanation: '线面垂直的判定：若一条直线与平面内两条相交直线都垂直，则该直线与平面垂直。',
    },
  ],

  narrative: {
    context: '垂直是空间中重要的位置关系。',
    confusion: '线面垂直的判定需要"两条相交直线"。',
    experiment: '观察墙角：每条墙线都垂直于地面。',
    concept: '空间中的垂直关系有线线垂直、线面垂直、面面垂直。',
    derivation: '线面垂直判定：a⊥b，a⊥c，b⊂α，c⊂α，b∩c=A ⇒ a⊥α',
    transfer: '三垂线定理及其逆定理。',
  },

  variations: {
    basic: [
      { label: '线面垂直判定', formula: 'a⊥b，a⊥c，b∩c=A，b,c⊂α ⇒ a⊥α', note: '判定定理' },
      { label: '面面垂直判定', formula: 'α⊥β，a⊂α，a⊥β ⇒ a⊥β', note: '线面垂直推面面垂直' },
    ],
    advanced: [
      { label: '三垂线定理', note: '在平面内的射影垂直，则直线垂直该平面' },
    ],
    challenge: [
      { label: '面面垂直性质', formula: 'α⊥β，α∩β=l，a⊂α，a⊥l ⇒ a⊥β', note: '性质定理' },
    ],
  },

  formulas: [
    { name: '线面垂直判定', formula: 'a⊥b，a⊥c，b∩c=A，b,c⊂α ⇒ a⊥α', usage: '判定线面垂直' },
  ],

  selfEval: [
    { question: '线面垂直判定定理的条件是什么？', level: 'B', description: '与平面内两条相交直线垂直' },
  ],

  relatedModels: ['MATH-G05'],
  crossLinks: [],
}
