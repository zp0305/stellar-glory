// 知识节点 K59：随机抽样
import type { ConceptData } from './types'

export const K59: ConceptData = {
  id: 'K59',
  title: '随机抽样',
  subtitle: '从总体中抽取样本',
  module: '概率与统计',
  chapter: '随机抽样',
  difficulty: 1,

  preCheck: [
    {
      question: '为了了解某市 10 万名学生的视力情况，抽取 1000 名学生进行调查，这是什么抽样方法？',
      options: ['A. 简单随机抽样', 'B. 系统抽样', 'C. 分层抽样', 'D. 无法确定'],
      answer: 'A',
      explanation: '简单随机抽样中，每个个体被抽到的概率相等。',
    },
  ],

  narrative: {
    context: '统计学的第一步是从总体中抽取有代表性的样本。',
    confusion: '各种抽样方法的适用场景。',
    experiment: '用随机数表法抽取样本。',
    concept: '随机抽样是用一定方法从总体中抽取样本，使样本具有代表性。',
    derivation: '简单随机抽样、系统抽样、分层抽样、整群抽样。',
    transfer: '抽样是统计推断的基础。',
  },

  variations: {
    basic: [
      { label: '简单随机抽样', note: '每个个体被抽到的概率相等' },
      { label: '系统抽样', note: '每隔 k 个抽一个' },
      { label: '分层抽样', note: '按比例从各层抽取' },
    ],
    advanced: [
      { label: '抽签法', note: '随机编号抽取' },
      { label: '随机数表法', note: '用随机数表选取' },
    ],
    challenge: [
      { label: '抽样偏差', note: '样本不具代表性' },
    ],
  },

  formulas: [
    { name: '抽样公平性', formula: '每个个体被抽到的概率相等', usage: '保证代表性' },
  ],

  selfEval: [
    { question: '系统抽样的优点是？', level: 'B', description: '易于操作' },
  ],

  relatedModels: ['MATH-P01'],
  crossLinks: [],
}
