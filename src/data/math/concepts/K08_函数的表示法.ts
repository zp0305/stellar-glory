// 知识节点 K08：函数的表示法
import type { ConceptData } from './types'

export const K08: ConceptData = {
  id: 'K08',
  title: '函数的表示法',
  subtitle: '解析法、图像法、列表法',
  module: '函数与导数',
  chapter: '函数的表示法',
  difficulty: 1,

  preCheck: [
    {
      question: '三种表示法中，最能直观显示函数单调性的是？',
      options: ['A. 解析法', 'B. 图像法', 'C. 列表法', 'D.都一样'],
      answer: 'B',
      explanation: '图像法通过视觉直观展示函数的变化趋势。',
    },
  ],

  narrative: {
    context: '同一种函数关系可以用不同方式表达，各有优劣。',
    confusion: '图像法虽然直观但不够精确，解析法精确但不够直观。',
    experiment: '用三种方式表示 f(x)=x² 的函数关系。',
    concept: '函数的表示法包括解析法、图像法和列表法。',
    derivation: '解析法：用代数式表达；图像法：用平面直角坐标系中的曲线表达；列表法：用表格表达。',
    transfer: '实际应用中根据需要选择合适的表示方法。',
  },

  variations: {
    basic: [
      { label: '解析法', note: '用公式表达函数关系' },
      { label: '图像法', note: '用平面直角坐标系中的曲线表达' },
      { label: '列表法', note: '用表格列出离散值' },
    ],
    advanced: [
      { label: '图像变换', formula: 'y=f(x)→y=f(x+a)+b', note: '平移变换' },
    ],
    challenge: [
      { label: '参数方程', note: '用参数表达的函数关系' },
    ],
  },

  formulas: [
    { name: '平移变换', formula: 'y=f(x-a) 左移 a', usage: '图像平移' },
  ],

  selfEval: [
    { question: '如何由 y=f(x) 的图像得到 y=f(x-2)+1 的图像？', level: 'B', description: '右移2单位，上移1单位' },
  ],

  relatedModels: ['MATH-F01'],
  crossLinks: [],
}
