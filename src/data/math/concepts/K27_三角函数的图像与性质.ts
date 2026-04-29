// 知识节点 K27：三角函数的图像与性质
import type { ConceptData } from './types'

export const K27: ConceptData = {
  id: 'K27',
  title: '三角函数的图像与性质',
  subtitle: '周期性的直观体现',
  module: '三角与向量',
  chapter: '三角函数的图像与性质',
  difficulty: 2,

  preCheck: [
    {
      question: '函数 y=sin x 的最小正周期是？',
      options: ['A. π', 'B. 2π', 'C. 4π', 'D. π/2'],
      answer: 'B',
      explanation: 'sin x 的最小正周期是 2π。',
    },
  ],

  narrative: {
    context: '三角函数的图像直观展示了周期性、奇偶性等性质。',
    confusion: '正弦、余弦、正切函数的定义域、值域、周期各不相同。',
    experiment: '比较 y=sin x、y=cos x、y=tan x 的图像。',
    concept: '三角函数是典型的周期函数。',
    derivation: 'y=sin x 的值域为 [-1,1]，周期为 2π；y=tan x 的值域为 R，周期为 π。',
    transfer: '图像变换：平移、伸缩变换。',
  },

  variations: {
    basic: [
      { label: '正弦函数', formula: 'y=sin x', note: '定义域 R，值域 [-1,1]，周期 2π' },
      { label: '余弦函数', formula: 'y=cos x', note: '定义域 R，值域 [-1,1]，周期 2π' },
      { label: '正切函数', formula: 'y=tan x', note: '定义域 x≠π/2+kπ，值域 R，周期 π' },
    ],
    advanced: [
      { label: '图像变换', formula: 'y=Asin(ωx+φ)', note: '振幅、周期、相位变换' },
    ],
    challenge: [
      { label: '五点法作图', note: '用五个关键点描绘正弦曲线' },
    ],
  },

  formulas: [
    { name: '振幅变换', formula: 'y=Asin x，振幅 A', usage: '图像伸缩' },
    { name: '周期变换', formula: 'y=sin(ωx)，周期 2π/|ω|', usage: '周期变化' },
  ],

  selfEval: [
    { question: 'y=sin 2x 的周期是？', level: 'A', description: 'π' },
  ],

  relatedModels: ['MATH-T01', 'MATH-T02'],
  crossLinks: [],
}
