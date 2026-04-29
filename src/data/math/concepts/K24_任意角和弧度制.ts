// 知识节点 K24：任意角和弧度制
import type { ConceptData } from './types'

export const K24: ConceptData = {
  id: 'K24',
  title: '任意角和弧度制',
  subtitle: '角度的延展',
  module: '三角与向量',
  chapter: '任意角和弧度制',
  difficulty: 1,

  preCheck: [
    {
      question: '300° 转化为弧度是？',
      options: ['A. 5π/6', 'B. 4π/3', 'C. 5π/3', 'D. 7π/6'],
      answer: 'C',
      explanation: '180°=π 弧度，所以 300°=300×π/180=5π/3。',
    },
  ],

  narrative: {
    context: '三角函数不仅能描述直角三角形，还能描述旋转运动。',
    confusion: '弧度制与角度制的区别在于基准不同。',
    experiment: '将 0°、30°、45°、60°、90° 转化为弧度。',
    concept: '任意角是起点相同、旋转量任意的角。弧度制以弧长与半径的比值为度量。',
    derivation: '180°=π 弧度，1°=π/180 弧度，1 弧度=180/π 度。',
    transfer: '弧度制下的三角函数公式更简洁。',
  },

  variations: {
    basic: [
      { label: '角度转弧度', formula: 'α(弧度)=α(度)×π/180', note: '换算关系' },
      { label: '弧度转角度', formula: 'α(度)=α(弧度)×180/π', note: '换算关系' },
    ],
    advanced: [
      { label: '象限角', note: '终边在第几象限' },
      { label: '终边相同的角', formula: 'α+2kπ', note: 'k∈Z' },
    ],
    challenge: [
      { label: '弧度制优势', note: 'sin x 的麦克劳林展开更简洁' },
    ],
  },

  formulas: [
    { name: '角度弧度换算', formula: '180°=π', usage: '换算基准' },
  ],

  selfEval: [
    { question: 'π/4 弧度等于多少度？', level: 'A', description: '45°' },
  ],

  relatedModels: ['MATH-T01'],
  crossLinks: [],
}
