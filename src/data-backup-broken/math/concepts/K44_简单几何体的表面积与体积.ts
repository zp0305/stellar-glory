// 知识节点 K44：简单几何体的表面积与体
import type { ConceptData } from './types'

export const K44: ConceptData = {
  id: 'K44',
  title: '简单几何体的表面积与体',
  subtitle: '度量的计',
  module: '立体几何',
  chapter: '简单几何体的表面积与体',
  difficulty: 1,

  preCheck: [
    {
      question: '正方体棱长为 a，体积是',
      options: ['A. a²', 'B. a³', 'C. 6a²', 'D. 4a³'],
      answer: 'B',
      explanation: '正方体体棱长³=a³',
    },
  ],

  narrative: {
    context: '计算几何体的表面积和体积是立体几何的基本技能',
    confusion: '不同几何体的体积公式不同',
    experiment: '推导圆柱、圆锥、球的体积公式',
    concept: '不同几何体有不同的表面积和体积计算公式',
    derivation: 'VSh，V1/3Sh，V4/3πR³',
    transfer: '祖暅原理：幂势既同，则积不容异',
  },

  variations: {
    basic: [
      { label: '正方, formula: 'S=6a², V=a³', note: '棱长 a' }',
      { label: '圆柱', formula: 'S=2πR(R+h), V=πR²h', note: '底面半径 R，高 h' },
      { label: '圆锥', formula: 'V=1/3πR²h', note: '底面半径 R，高 h' },
      { label: ', formula: 'S=4πR², V=4/3πR³', note: '半径 R' }',
    ],
    advanced: [
      { label: '棱柱', formula: 'V=Sh', note: '底面S，高 h' },
      { label: '棱锥', formula: 'V=1/3Sh', note: '底面S，高 h' },
    ],
    challenge: [
      { label: '组合, note: '分割或填补法' }',
    ],
  },

  formulas: [
    { name: '柱体体积', formula: 'V=Sh', usage: '棱柱、圆 }',
    { name: '锥体体积', formula: 'V=1/3Sh', usage: '棱锥、圆 }',
    { name: '球体, formula: 'V=4/3πR³', usage: ' },
  ],

  selfEval: [
    { question: '球的半径扩大2倍，体积扩大几倍？', level: 'A', description: '8 }',
  ],

  relatedModels: ['MATH-G02'],
  crossLinks: [],
}
