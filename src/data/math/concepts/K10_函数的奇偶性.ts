// 知识节点 K10：函数的奇偶性
import type { ConceptData } from './types'

export const K10: ConceptData = {
  id: 'K10',
  title: '函数的奇偶性',
  subtitle: '对称美的数学刻画',
  module: '函数与导数',
  chapter: '函数的奇偶性',
  difficulty: 1,

  preCheck: [
    {
      question: '下列函数中是偶函数的是？',
      options: ['A. y=x³', 'B. y=x²', 'C. y=2x', 'D. y=1/x'],
      answer: 'B',
      explanation: '偶函数满足 f(-x)=f(x)。y=x² 满足此条件。',
    },
  ],

  narrative: {
    context: '在自然和工程中，对称性是美与秩序的体现。奇偶性就是函数的一种对称性。',
    confusion: '函数可以既不是奇函数也不是偶函数。奇函数一定过原点。',
    experiment: '画 y=x² 和 y=x³ 的图像，观察它们的对称性。',
    concept: '奇函数关于原点对称，偶函数关于 y 轴对称。',
    derivation: '奇函数：f(-x)=-f(x)；偶函数：f(-x)=f(x)',
    transfer: '利用奇偶性可以简化函数运算和作图。',
  },

  variations: {
    basic: [
      { label: '奇函数', formula: 'f(-x)=-f(x)', note: '关于原点对称' },
      { label: '偶函数', formula: 'f(-x)=f(x)', note: '关于 y 轴对称' },
    ],
    advanced: [
      { label: '非奇非偶', note: '如 y=x+1' },
      { label: '奇偶运算', formula: '奇±奇=奇，偶±偶=偶', note: '运算规律' },
    ],
    challenge: [
      { label: '分段函数奇偶性', note: '需分段验证定义域内每一点' },
    ],
  },

  formulas: [
    { name: '奇函数定义', formula: 'f(-x)=-f(x)', usage: '判断或证明奇函数' },
    { name: '偶函数定义', formula: 'f(-x)=f(x)', usage: '判断或证明偶函数' },
  ],

  selfEval: [
    { question: 'y=0 是什么函数？', level: 'B', description: '既是奇函数又是偶函数' },
  ],

  relatedModels: ['MATH-F01'],
  crossLinks: [],
}
