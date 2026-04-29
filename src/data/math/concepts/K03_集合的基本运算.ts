// 知识节点 K03：集合的基本运算
import type { ConceptData } from './types'

export const K03: ConceptData = {
  id: 'K03',
  title: '集合的基本运算',
  subtitle: '交、并、补的运算法则',
  module: '集合与逻辑',
  chapter: '集合的基本运算',
  difficulty: 1,

  preCheck: [
    {
      question: '设 A={1,2,3}, B={2,3,4}，则 A∩B=？',
      options: ['A. {1,4}', 'B. {2,3}', 'C. {1,2,3,4}', 'D. ∅'],
      answer: 'B',
      explanation: '交集是同时属于 A 和 B 的元素组成的集合。',
    },
  ],

  narrative: {
    context: '在处理"满足条件 A 且满足条件 B"这类问题时，我们需要用到集合的交集。',
    confusion: '并集与交集的符号容易混淆。补集运算需要明确全集。',
    experiment: '用 Venn 图表示两个相交圆的阴影部分，分别表示并集、交集。',
    concept: '交集、并集、补集是集合的三种基本运算。',
    derivation: 'A∩B={x|x∈A 且 x∈B}；A∪B={x|x∈A 或 x∈B}；∁UA={x∈U 且 x∉A}',
    transfer: '德·摩根定律：(A∪B)^C = A^C ∩ B^C；(A∩B)^C = A^C ∪ B^C',
  },

  variations: {
    basic: [
      { label: '交集', formula: 'A∩B', note: '公共部分' },
      { label: '并集', formula: 'A∪B', note: '所有元素' },
      { label: '补集', formula: '∁UA', note: '相对于全集 U' },
    ],
    advanced: [
      { label: '德·摩根定律', formula: '(A∪B)^C = A^C∩B^C', note: '交并补的转化' },
      { label: '运算律', formula: 'A∩(B∪C) = (A∩B)∪(A∩C)', note: '分配律' },
    ],
    challenge: [
      { label: '容斥原理', formula: '|A∪B| = |A|+|B|-|A∩B|', note: '计数问题' },
    ],
  },

  formulas: [
    { name: '交集定义', formula: 'A∩B={x|x∈A且x∈B}', usage: '求共同元素' },
    { name: '并集定义', formula: 'A∪B={x|x∈A或x∈B}', usage: '合并所有元素' },
    { name: '德·摩根定律', formula: '(A∩B)^C=A^C∪B^C', usage: '转化运算' },
  ],

  selfEval: [
    { question: '若 A⊆B，则 A∩B 等于什么？', level: 'A', description: 'A' },
  ],

  relatedModels: ['MATH-L01'],
  crossLinks: [],
}
