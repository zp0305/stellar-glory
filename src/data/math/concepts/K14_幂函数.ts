// 知识节点 K14：幂函数
import type { ConceptData } from './types'

export const K14: ConceptData = {
  id: 'K14',
  title: '幂函数',
  subtitle: 'y=xᵅ 的千变万化',
  module: '函数与导数',
  chapter: '幂函数',
  difficulty: 1,

  preCheck: [
    {
      question: '幂函数 y=x⁻¹ 的图像经过哪个象限？',
      options: ['A. 一、三', 'B. 二、四', 'C. 一、二、三', 'D. 一、二、四'],
      answer: 'B',
      explanation: 'y=1/x 的图像是双曲线，在第二、四象限。',
    },
  ],

  narrative: {
    context: '正方形面积 S=a²，边长与面积的关系就是幂函数。',
    confusion: '幂函数与指数函数的区别：幂函数是底数变，指数函数是指数变。',
    experiment: '比较 y=x、y=x²、y=x³、y=1/x 在第一象限的图像。',
    concept: '幂函数是形如 y=xᵅ（α 为常数）的函数。',
    derivation: 'α>0 时过原点，α<0 时不过原点。α 的奇偶性影响对称性。',
    transfer: '幂函数在各象限的图像形态与 α 有关。',
  },

  variations: {
    basic: [
      { label: '幂函数定义', formula: 'y=xᵅ', note: 'α 是常数' },
      { label: '常见幂函数', formula: 'y=x, y=x², y=x³, y=x½, y=x⁻¹', note: 'α=1,2,3,1/2,-1' },
    ],
    advanced: [
      { label: '幂函数单调性', note: 'α>0 时在 (0,+∞) 递增' },
    ],
    challenge: [
      { label: '幂指互化', note: '根据题目条件选择用对数还是幂函数性质' },
    ],
  },

  formulas: [
    { name: '幂函数定义', formula: 'y=xᵅ', usage: '幂函数形式' },
  ],

  selfEval: [
    { question: 'y=x³ 和 y=x² 在 (0,1) 内，哪个函数值更大？', level: 'B', description: 'y=x²' },
  ],

  relatedModels: ['MATH-F01', 'MATH-F02'],
  crossLinks: [],
}
