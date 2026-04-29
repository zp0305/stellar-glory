// 知识节点 K66：二项分布与超几何分布
import type { ConceptData } from './types'

export const K66: ConceptData = {
  id: 'K66',
  title: '二项分布与超几何分布',
  subtitle: '重复试验的模型',
  module: '概率与统计',
  chapter: '二项分布与超几何分布',
  difficulty: 2,

  preCheck: [
    {
      question: '10 次抛硬币中恰好 3 次正面朝上的概率用二项分布怎么表示？',
      options: ['A. C(10,3)×(1/2)³', 'B. C(10,3)×(1/2)¹⁰', 'C. C(10,3)×(1/2)³×(1/2)⁷', 'D. (1/2)³'],
      answer: 'C',
      explanation: '二项分布 P(X=k)=C(n,k)pᵏ(1-p)ⁿ⁻ᵏ，这里 k=3，p=1/2。',
    },
  ],

  narrative: {
    context: '二项分布和超几何分布是两种最重要的离散分布。',
    confusion: '二项分布与超几何分布的区别：有放回 vs 无放回。',
    experiment: '产品抽检问题：不合格品率 5%，抽 10 件，求恰有 2 件不合格的概率。',
    concept: '二项分布：n 次独立重复试验；超几何分布：不放回抽样。',
    derivation: '二项分布：X~B(n,p)，P(X=k)=C(n,k)pᵏ(1-p)ⁿ⁻ᵏ；超几何分布：X~H(N,M,n)',
    transfer: '期望与方差的计算公式。',
  },

  variations: {
    basic: [
      { label: '二项分布', formula: 'X~B(n,p), P(X=k)=C(n,k)pᵏ(1-p)ⁿ⁻ᵏ', note: 'n 次独立重复' },
      { label: '超几何分布', formula: 'X~H(N,M,n), P(X=k)=C(M,k)C(N-M,n-k)/C(N,n)', note: '不放回抽样' },
    ],
    advanced: [
      { label: '二项分布期望', formula: 'E(X)=np', note: '二项分布' },
      { label: '超几何分布期望', formula: 'E(X)=nM/N', note: '超几何分布' },
    ],
    challenge: [
      { label: '何时用二项，何时用超几何？', note: '有放回用二项，无放回用超几何' },
    ],
  },

  formulas: [
    { name: '二项分布', formula: 'P(X=k)=C(n,k)pᵏ(1-p)ⁿ⁻ᵏ', usage: '求概率' },
    { name: '超几何分布', formula: 'P(X=k)=C(M,k)C(N-M,n-k)/C(N,n)', usage: '求概率' },
  ],

  selfEval: [
    { question: '有放回抽样用什么分布？', level: 'A', description: '二项分布' },
  ],

  relatedModels: ['MATH-P08'],
  crossLinks: [],
}
