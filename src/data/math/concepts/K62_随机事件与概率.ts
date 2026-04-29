// 知识节点 K62：随机事件与概率
import type { ConceptData } from './types'

export const K62: ConceptData = {
  id: 'K62',
  title: '随机事件与概率',
  subtitle: '不确定中的规律',
  module: '概率与统计',
  chapter: '随机事件与概率',
  difficulty: 1,

  preCheck: [
    {
      question: '抛一枚均匀硬币，正面朝上的概率是？',
      options: ['A. 0', 'B. 1/2', 'C. 1', 'D. 不确定'],
      answer: 'B',
      explanation: '一枚均匀硬币，正面朝上的概率是 1/2。',
    },
  ],

  narrative: {
    context: '概率论研究随机现象的数量规律。',
    confusion: '频率与概率的区别。',
    experiment: '大量重复抛硬币，观察正面朝上的频率。',
    concept: '随机事件在一次试验中可能发生也可能不发生，概率是其发生可能性的大小。',
    derivation: '概率的古典定义：P(A)=m/n，其中 m 是 A 包含的基本事件数，n 是总的基本事件数。',
    transfer: '概率的统计定义、几何定义。',
  },

  variations: {
    basic: [
      { label: '古典概型', formula: 'P(A)=m/n', note: '等可能性' },
      { label: '频率', formula: 'f=n(A)/n', note: '大量试验中的比例' },
    ],
    advanced: [
      { label: '几何概型', formula: 'P(A)=A的测度/总体测度', note: '无限样本空间' },
    ],
    challenge: [
      { label: '概率的性质', formula: '0≤P(A)≤1', note: '概率的基本性质' },
    ],
  },

  formulas: [
    { name: '古典概型', formula: 'P(A)=m/n', usage: '求概率' },
  ],

  selfEval: [
    { question: '概率值范围是？', level: 'A', description: '[0,1]' },
  ],

  relatedModels: ['MATH-P04'],
  crossLinks: [],
}
