// 知识节点 K04：充分条件与必要条件
import type { ConceptData } from './types'

export const K04: ConceptData = {
  id: 'K04',
  title: '充分条件与必要条件',
  subtitle: '逻辑推理的基石',
  module: '集合与逻辑',
  chapter: '充分条件与必要条件',
  difficulty: 2,

  preCheck: [
    {
      question: '"若 x>0，则 x²>0"这个命题中，x>0 是 x²>0 的什么条件？',
      options: ['A. 充分条件', 'B. 必要条件', 'C. 充要条件', 'D. 既不充分也不必要'],
      answer: 'A',
      explanation: 'x>0 能推出 x²>0，但 x²>0 推不出 x>0（如 x=-1），所以是充分不必要条件。',
    },
  ],

  narrative: {
    context: '在证明题中，我们经常需要判断条件与结论之间的逻辑关系。',
    confusion: '充分条件和必要条件的符号方向容易搞反。',
    experiment: '分析命题："若整数 n 能被 6 整除，则 n 能被 2 整除"。',
    concept: '充分条件、必要条件、充要条件是命题间逻辑关系的刻画。',
    derivation: '若 p⇒q，则 p 是 q 的充分条件，q 是 p 的必要条件。',
    transfer: '逆否命题与原命题等价：p⇒q 等价于 ¬q⇒¬p。',
  },

  variations: {
    basic: [
      { label: '充分条件', formula: 'p⇒q', note: '有它就够' },
      { label: '必要条件', formula: 'q⇒p', note: '缺它不行' },
      { label: '充要条件', formula: 'p⇔q', note: '等价关系' },
    ],
    advanced: [
      { label: '充分不必要', formula: 'p⇒q 且 q⇏p', note: '单向推导' },
      { label: '必要不充分', formula: 'q⇒p 且 p⇏q', note: '单向推导' },
    ],
    challenge: [
      { label: '逆否命题', formula: 'p⇒q 等价于 ¬q⇒¬p', note: '等价变形' },
    ],
  },

  formulas: [
    { name: '充分条件', formula: 'p⇒q', usage: 'p 推出 q' },
    { name: '必要条件', formula: 'q⇒p', usage: 'q 是 p 的必要' },
    { name: '充要条件', formula: 'p⇔q', usage: '双向等价' },
  ],

  selfEval: [
    { question: '"四边形是平行四边形"是"四边形对角线互相平分"的什么条件？', level: 'B', description: '必要不充分条件' },
  ],

  relatedModels: ['MATH-L02'],
  crossLinks: [],
}
