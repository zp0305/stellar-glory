// 知识节点 K29：解三角形
import type { ConceptData } from './types'

export const K29: ConceptData = {
  id: 'K29',
  title: '解三角形',
  subtitle: '边角关系的方程',
  module: '三角与向量',
  chapter: '解三角形',
  difficulty: 2,

  preCheck: [
    {
      question: '在△ABC 中，a=3，b=4，C=90°，则 c 等于？',
      options: ['A. 5', 'B. 7', 'C. 1', 'D. √7'],
      answer: 'A',
      explanation: '勾股定理：c²=a²+b²=9+16=25，c=5。',
    },
  ],

  narrative: {
    context: '解三角形是三角函数在实际问题中的重要应用。',
    confusion: '正弦定理和余弦定理的选择条件。',
    experiment: '已知两边及其夹角，求第三边。',
    concept: '解三角形是利用正弦定理、余弦定理等求出三角形的未知元素。',
    derivation: '正弦定理：a/sin A=b/sin B=c/sin C；余弦定理：c²=a²+b²-2ab cos C',
    transfer: '实际测量、航海、航空中的应用。',
  },

  variations: {
    basic: [
      { label: '正弦定理', formula: 'a/sin A=b/sin B=c/sin C=2R', note: 'R 为外接圆半径' },
      { label: '余弦定理', formula: 'c²=a²+b²-2ab cos C', note: '已知两边及夹角' },
    ],
    advanced: [
      { label: '面积公式', formula: 'S=1/2 ab sin C', note: '两边夹角求面积' },
    ],
    challenge: [
      { label: '多解情况', note: '已知两边和其中一边的对角时可能有两解' },
    ],
  },

  formulas: [
    { name: '正弦定理', formula: 'a/sin A=b/sin B=c/sin C', usage: '求边或角' },
    { name: '余弦定理', formula: 'c²=a²+b²-2ab cos C', usage: '求第三边' },
  ],

  selfEval: [
    { question: '已知 a=7，b=5，c=3，求最大角？', level: 'B', description: '用余弦定理求 cos C' },
  ],

  relatedModels: ['MATH-T04', 'MATH-T05'],
  crossLinks: [],
}
