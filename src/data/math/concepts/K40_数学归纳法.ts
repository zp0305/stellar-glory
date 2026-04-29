// 知识节点 K40：数学归纳法
import type { ConceptData } from './types'

export const K40: ConceptData = {
  id: 'K40',
  title: '数学归纳法',
  subtitle: '从特殊到一般的证明',
  module: '数列与归纳',
  chapter: '数学归纳法',
  difficulty: 2,

  preCheck: [
    {
      question: '数学归纳法证明的第一步是？',
      options: ['A. 假设 n=k 时成立', 'B. 证明 n=1 时成立', 'C. 假设 n=k+1 时成立', 'D. 直接证明'],
      answer: 'B',
      explanation: '数学归纳法第一步是验证 n=1（或初始值）时命题成立。',
    },
  ],

  narrative: {
    context: '数学归纳法是证明与正整数有关的命题的有力工具。',
    confusion: '数学归纳法的两步缺一不可。',
    experiment: '用数学归纳法证明 1+2+...+n=n(n+1)/2。',
    concept: '数学归纳法两步：(1) 验证初始值成立；(2) 假设 n=k 成立，推证 n=k+1 成立。',
    derivation: '若两步都成立，则命题对所有正整数 n 成立。',
    transfer: '数学归纳法用于证明数列公式、不等式等。',
  },

  variations: {
    basic: [
      { label: '第一步', formula: 'n=n₀ 时命题成立', note: '基础情况' },
      { label: '第二步', formula: '假设 n=k 成立，推 n=k+1 成立', note: '归纳推理' },
    ],
    advanced: [
      { label: '第二数学归纳法', note: '假设 n≤k 成立，推 n=k+1 成立' },
    ],
    challenge: [
      { label: '跳跃归纳法', note: '跳过某些情况' },
    ],
  },

  formulas: [
    { name: '归纳假设', formula: '假设 n=k 时成立', usage: '归纳假设' },
  ],

  selfEval: [
    { question: '数学归纳法的两步是？', level: 'A', description: '验证初始值+归纳假设推导' },
  ],

  relatedModels: ['MATH-S06'],
  crossLinks: [],
}
