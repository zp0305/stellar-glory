// 知识节点 K30：平面向量的概念
import type { ConceptData } from './types'

export const K30: ConceptData = {
  id: 'K30',
  title: '平面向量的概',
  subtitle: '有方向和大小的量',
  module: '三角与向',
  chapter: '平面向量的概',
  difficulty: 1,

  preCheck: [
    {
      question: '下列哪个是向量？',
      options: ['A. 长度', 'B. 速度', 'C. 质量', 'D. 温度'],
      answer: 'B',
      explanation: '向量是有大小和方向的量，速度符合',
    },
  ],

  narrative: {
    context: '向量是描述力、速度、位移等既有大小又有方向的量的数学工具',
    confusion: '向量与标量的区别',
    experiment: '在坐标系中表示向(3,4)',
    concept: '向量是有大小和方向的量，可以用有向线段表示',
    derivation: '向量 a = (aa，其|a| = a₁a₂',
    transfer: '向量的坐标表示简化了运算',
  },

  variations: {
    basic: [
      { label: '向量定义', note: '有大小和方向的量' },
      { label: '向量的模', formula: '|a|=a₁a₂', note: '向量的大 }',
      { label: '零向, formula: '0', note: '模为 0，方向任 },
    ],
    advanced: [
      { label: '单位向量', formula: 'a/|a|', note: '模为 1 的向 }',
    ],
    challenge: [
      { label: '向量的几何意, note: '平移、旋转的描述' }',
    ],
  },

  formulas: [
    { name: '向量模长', formula: '|a|=a₁a₂', usage: '求向量长 }',
  ],

  selfEval: [
    { question: '向量 (3,4) 的模是多少？', level: 'A', description: '5' },
  ],

  relatedModels: ['MATH-T06'],
  crossLinks: [],
}
