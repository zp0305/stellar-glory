// 知识节点 K43：立体图形的直观图
import type { ConceptData } from './types'

export const K43: ConceptData = {
  id: 'K43',
  title: '立体图形的直观图',
  subtitle: '三维到二维的映射',
  module: '立体几何',
  chapter: '立体图形的直观图',
  difficulty: 1,

  preCheck: [
    {
      question: '在斜二测画法中，x 轴和 y 轴的夹角是？',
      options: ['A. 45°', 'B. 60°', 'C. 90°', 'D. 135°'],
      answer: 'A',
      explanation: '斜二测画法中，x 轴水平，y 轴与 x 轴成 45° 角。',
    },
  ],

  narrative: {
    context: '直观图是用二维图像表示三维形体的方法。',
    confusion: '斜二测画法的规则。',
    experiment: '用斜二测画法画一个正方体的直观图。',
    concept: '斜二测画法是常用的直观图画法规则。',
    derivation: '规则：平行于 x 轴的线段长度不变，平行于 y 轴的线段长度变为原来的一半。',
    transfer: '直观图用于展示立体图形的空间形状。',
  },

  variations: {
    basic: [
      { label: '斜二测画法规则', note: 'x 轴水平，y 轴成 45°' },
      { label: '长度规则', formula: 'x 轴长度不变，y 轴长度减半', note: '画法规则' },
    ],
    advanced: [
      { label: '正等测画法', note: '三个轴两两成 120°' },
    ],
    challenge: [
      { label: '三视图', note: '正视图、侧视图、俯视图' },
    ],
  },

  formulas: [
    { name: '斜二测规则', formula: 'x 不变，y 减半', usage: '画直观图' },
  ],

  selfEval: [
    { question: '斜二测画法中，水平线段长度？', level: 'A', description: '不变' },
  ],

  relatedModels: ['MATH-G01'],
  crossLinks: [],
}
