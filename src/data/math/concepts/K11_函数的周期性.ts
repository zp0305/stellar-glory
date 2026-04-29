// 知识节点 K11：函数的周期性
import type { ConceptData } from './types'

export const K11: ConceptData = {
  id: 'K11',
  title: '函数的周期性',
  subtitle: '重复规律的数学表达',
  module: '函数与导数',
  chapter: '函数的周期性',
  difficulty: 2,

  preCheck: [
    {
      question: '函数 f(x) 满足 f(x+2)=f(x)，则最小正周期是？',
      options: ['A. 2', 'B. 4', 'C. 6', 'D. 不能确定'],
      answer: 'D',
      explanation: '只知道 f(x+2)=f(x)，最小正周期可能是 2、1，或不存在（如常数函数）。',
    },
  ],

  narrative: {
    context: '在自然界中，很多现象具有重复性，如四季更替、潮汐变化。',
    confusion: '周期函数一定有最小正周期吗？不一定，如狄利克雷函数没有最小正周期。',
    experiment: '观察 sin x、cos x 的图像，它们的周期是多少？',
    concept: '周期函数是函数值按一定间隔重复的函数。',
    derivation: 'f(x+T)=f(x) 对定义域内所有 x 成立，则 T 是周期。',
    transfer: '若 f(x) 的周期为 T，则 f(ax+b) 的周期为 T/|a|。',
  },

  variations: {
    basic: [
      { label: '周期', formula: 'f(x+T)=f(x)', note: 'T 为周期' },
      { label: '最小正周期', note: '正周期中的最小值' },
    ],
    advanced: [
      { label: '周期运算', formula: 'f1 周期 T1，f2 周期 T2，则 f1±f2 周期为 T1,T2 的最小公倍数', note: '前提是存在最小公倍数' },
    ],
    challenge: [
      { label: '非最小正周期', note: '如 2T 也是周期' },
    ],
  },

  formulas: [
    { name: '周期定义', formula: 'f(x+T)=f(x)', usage: '判断周期性' },
    { name: '周期变换', formula: 'f(ax) 周期 T/|a|', usage: '伸缩变换' },
  ],

  selfEval: [
    { question: 'sin 2x 的最小正周期是？', level: 'A', description: 'π' },
  ],

  relatedModels: ['MATH-F01', 'MATH-T01'],
  crossLinks: [],
}
