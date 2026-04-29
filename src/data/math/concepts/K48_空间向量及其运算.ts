// 知识节点 K48：空间向量及其运算
import type { ConceptData } from './types'

export const K48: ConceptData = {
  id: 'K48',
  title: '空间向量及其运算',
  subtitle: '向量从平面到空间',
  module: '立体几何',
  chapter: '空间向量及其运算',
  difficulty: 2,

  preCheck: [
    {
      question: '空间向量 a=(1,2,3) 的模是？',
      options: ['A. 5', 'B. 6', 'C. √14', 'D. 14'],
      answer: 'C',
      explanation: '|a|=√(1²+2²+3²)=√14。',
    },
  ],

  narrative: {
    context: '空间向量是平面向量的推广，用于描述空间中的有向线段。',
    confusion: '空间向量的运算律与平面向量类似。',
    experiment: '在长方体中表示对角线的向量。',
    concept: '空间向量是既有大小又有方向的量，可表示为坐标 (a,b,c)。',
    derivation: '空间向量加法、减法、数乘与平面向量相同。',
    transfer: '空间向量用于解决立体几何问题。',
  },

  variations: {
    basic: [
      { label: '空间向量坐标', formula: 'a=(a₁,a₂,a₃)', note: '三维坐标' },
      { label: '空间向量模', formula: '|a|=√(a₁²+a₂²+a₃²)', note: '长度' },
    ],
    advanced: [
      { label: '方向余弦', formula: 'cos α=a₁/|a|', note: '与坐标轴夹角' },
    ],
    challenge: [
      { label: '向量在几何中的应用', note: '证明平行垂直' },
    ],
  },

  formulas: [
    { name: '空间向量模', formula: '|a|=√(a₁²+a₂²+a₃²)', usage: '求长度' },
  ],

  selfEval: [
    { question: '空间向量 (1,0,0) 和 (0,1,0) 的数量积是？', level: 'A', description: '0' },
  ],

  relatedModels: ['MATH-G06'],
  crossLinks: [],
}
