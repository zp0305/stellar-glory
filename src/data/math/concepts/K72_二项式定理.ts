// 知识节点 K72：二项式定理
import type { ConceptData } from './types'

export const K72: ConceptData = {
  id: 'K72',
  title: '二项式定理',
  subtitle: '(a+b)ⁿ 的展开',
  module: '概率与统计',
  chapter: '二项式定理',
  difficulty: 1,

  preCheck: [
    {
      question: '(a+b)⁴ 的展开式中，a²b² 的系数是？',
      options: ['A. 4', 'B. 6', 'C. 12', 'D. 24'],
      answer: 'B',
      explanation: 'C(4,2)=6。',
    },
  ],

  narrative: {
    context: '二项式定理是代数的重要内容，也是概率论的基础。',
    confusion: '二项展开式的通项公式。',
    experiment: '展开 (x+1)⁵ 并验证各项系数之和。',
    concept: '二项式定理给出了 (a+b)ⁿ 的展开公式。',
    derivation: '(a+b)ⁿ=∑C(n,k)aⁿ⁻ᵏbᵏ，k=0,1,...,n',
    transfer: '二项分布的系数就是二项式定理的系数。',
  },

  variations: {
    basic: [
      { label: '通项公式', formula: 'T_{k+1}=C(n,k)aⁿ⁻ᵏbᵏ', note: '第 k+1 项' },
      { label: '二项式系数', formula: 'C(n,k)', note: '系数' },
    ],
    advanced: [
      { label: '系数之和', formula: 'C(n,0)+C(n,1)+...+C(n,n)=2ⁿ', note: '令 a=b=1' },
    ],
    challenge: [
      { label: '最大系数', note: '中间项系数最大' },
    ],
  },

  formulas: [
    { name: '二项式定理', formula: '(a+b)ⁿ=∑C(n,k)aⁿ⁻ᵏbᵏ', usage: '展开' },
    { name: '通项公式', formula: 'T_{k+1}=C(n,k)aⁿ⁻ᵏbᵏ', usage: '求特定项' },
  ],

  selfEval: [
    { question: '二项式 (a+b)ⁿ 的系数和是？', level: 'A', description: '2ⁿ' },
  ],

  relatedModels: ['MATH-P14'],
  crossLinks: [],
}
