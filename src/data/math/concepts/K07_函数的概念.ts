// 知识节点 K07：函数的概念
import type { ConceptData } from './types'

export const K07: ConceptData = {
  id: 'K07',
  title: '函数的概念',
  subtitle: '从变量关系到集合对应',
  module: '函数与导数',
  chapter: '函数的概念',
  difficulty: 1,

  preCheck: [
    {
      question: '下列哪个对应关系是函数？',
      options: ['A. y²=x', 'B. y=|x|', 'C. x²+y²=1', 'D. y=±√x'],
      answer: 'B',
      explanation: '函数要求每个 x 唯一对应一个 y 值。y=|x| 满足此条件。',
    },
  ],

  narrative: {
    context: '在研究变量关系时，我们需要用精确的数学语言描述"依赖"与"对应"。',
    confusion: '函数不是简单的代数式，而是一种对应关系。定义域、值域同样重要。',
    experiment: '分析 y=x²、y=1/x、y=√x 的定义域和值域。',
    concept: '函数是两个集合之间的对应关系，每个定义域中的元素唯一对应一个值域中的元素。',
    derivation: 'f: A→B 表示 f 是从定义域 A 到值域 B 的函数。',
    transfer: '分段函数、隐函数、反函数都是函数的拓展形式。',
  },

  variations: {
    basic: [
      { label: '函数三要素', formula: '定义域、对应法则、值域', note: '缺一不可' },
      { label: '表示法', formula: '解析法、图像法、列表法', note: '三种常见形式' },
    ],
    advanced: [
      { label: '相同函数', formula: '定义域相同 且 对应法则相同', note: '两个函数相等' },
      { label: '分段函数', note: '不同区间用不同解析式' },
    ],
    challenge: [
      { label: '隐函数', note: '方程确定的函数关系' },
    ],
  },

  formulas: [
    { name: '函数定义', formula: 'f: A→B', usage: '从 A 到 B 的对应' },
    { name: '函数值', formula: 'y=f(x)', usage: 'x 对应的 y 值' },
  ],

  selfEval: [
    { question: 'y=1/x 是函数吗？', level: 'A', description: '是，但定义域需排除 0' },
  ],

  relatedModels: ['MATH-F01'],
  crossLinks: [],
}
