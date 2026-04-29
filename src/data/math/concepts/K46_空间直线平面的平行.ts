// 知识节点 K46：空间直线平面的平行
import type { ConceptData } from './types'

export const K46: ConceptData = {
  id: 'K46',
  title: '空间直线平面的平行',
  subtitle: '平行的判定与性质',
  module: '立体几何',
  chapter: '空间直线平面的平行',
  difficulty: 2,

  preCheck: [
    {
      question: '线面平行的判定定理是？',
      options: ['A. 若直线与平面内一条直线平行，则线面平行', 'B. 若直线与平面垂直，则线面平行', 'C. 若直线在平面内，则线面平行', 'D. 若直线与平面无公共点，则线面平行'],
      answer: 'A',
      explanation: '线面平行的判定：若平面外一条直线与平面内一条直线平行，则该直线与平面平行。',
    },
  ],

  narrative: {
    context: '空间中的平行关系比平面几何更复杂。',
    confusion: '线面平行判定和性质的区别。',
    experiment: '用教室中的墙角线验证线面平行。',
    concept: '空间中的平行关系有线线平行、线面平行、面面平行。',
    derivation: '线面平行判定：a∥b，a⊄α，b⊂α ⇒ a∥α',
    transfer: '线面平行的性质：a∥α，a⊂β，α∩β=b ⇒ a∥b',
  },

  variations: {
    basic: [
      { label: '线面平行判定', formula: 'a∥b，a⊄α，b⊂α ⇒ a∥α', note: '判定定理' },
      { label: '面面平行判定', formula: 'a∥b，a⊂α，b⊂β，a∥β ⇒ α∥β', note: '线面推面面' },
    ],
    advanced: [
      { label: '线面平行性质', formula: 'a∥α，a⊂β，α∩β=b ⇒ a∥b', note: '性质定理' },
    ],
    challenge: [
      { label: '面面平行性质', formula: 'α∥β，γ∩α=a，γ∩β=b ⇒ a∥b', note: '面面平行的性质' },
    ],
  },

  formulas: [
    { name: '线面平行判定', formula: 'a∥b，a⊄α，b⊂α ⇒ a∥α', usage: '判定线面平行' },
    { name: '线面平行性质', formula: 'a∥α，a⊂β，α∩β=b ⇒ a∥b', usage: '由面面平行得线线平行' },
  ],

  selfEval: [
    { question: '面面平行的性质定理是什么？', level: 'B', description: '面面平行，则交线平行' },
  ],

  relatedModels: ['MATH-G04'],
  crossLinks: [],
}
