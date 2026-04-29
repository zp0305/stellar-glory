// 知识节点 K02：集合间的基本关系
import type { ConceptData } from './types'

export const K02: ConceptData = {
  id: 'K02',
  title: '集合间的基本关系',
  subtitle: '包含与相等的逻辑',
  module: '集合与逻辑',
  chapter: '集合间的基本关系',
  difficulty: 1,

  preCheck: [
    {
      question: '若 A⊆B 且 B⊆A，则 A 与 B 的关系是？',
      options: ['A. A∈B', 'B. A=B', 'C. A⊂B', 'D. 无法确定'],
      answer: 'B',
      explanation: '若 A 是 B 的子集且 B 是 A 的子集，则 A=B，这是集合相等的定义。',
    },
  ],

  narrative: {
    context: '在分类问题时，我们需要明确各个集合之间的层次关系。',
    confusion: '子集⊆和真子集⊂容易混淆。空集是任何非空集合的真子集。',
    experiment: '设 A={1,2,3}，B={1,2}，C={1,2,3}，判断包含关系。',
    concept: '子集、真子集、空集是集合的基本关系。',
    derivation: 'A⊆B ⟺ ∀x∈A, x∈B；A⊂B ⟺ A⊆B 且 A≠B',
    transfer: '用 Venn 图直观理解集合的包含关系。',
  },

  variations: {
    basic: [
      { label: '子集', formula: 'A⊆B', note: 'A 中元素都是 B 的元素' },
      { label: '真子集', formula: 'A⊂B', note: 'A⊆B 且 A≠B' },
      { label: '空集', formula: '∅', note: '没有元素的集合' },
    ],
    advanced: [
      { label: '集合相等', formula: 'A=B ⟺ A⊆B 且 B⊆A', note: '双向子集证明法' },
      { label: '空集的性质', note: '∅⊆A 对任意集合 A 成立' },
    ],
    challenge: [
      { label: 'n元集合的子集数', formula: '2^n', note: '包括空集和自身' },
    ],
  },

  formulas: [
    { name: '子集性质', formula: 'A⊆A, ∅⊆A', usage: '自反性和空集性质' },
    { name: '子集传递性', formula: 'A⊆B 且 B⊆C ⇒ A⊆C', usage: '传递性证明' },
  ],

  selfEval: [
    { question: '空集是空集的真子集吗？', level: 'B', description: '不是，真子集要求 A⊂B 且 A≠B' },
  ],

  relatedModels: ['MATH-L01'],
  crossLinks: [],
}
