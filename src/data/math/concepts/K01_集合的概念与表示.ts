// 知识节点 K01：集合的概念与表示
import type { ConceptData } from './types'

export const K01: ConceptData = {
  id: 'K01',
  title: '集合的概念与表示',
  subtitle: '数学语言的"字典"从这里开始',
  module: '集合与逻辑',
  chapter: '集合的概念与表示',
  difficulty: 1,

  preCheck: [
    {
      question: '下列各对象能组成集合的是？',
      options: ['A. 很小的数', 'B. 2024年成为球队首发的年轻球员', 'C. 方程 x²+1=0 的实数解', 'D. 漂亮的人'],
      answer: 'C',
      explanation: '集合的元素必须具有确定性、互异性、无序性。选项A、D不确定，B表述模糊。',
    },
  ],

  narrative: {
    context: '在分类讨论时，我们经常说"有理数"和"无理数"，这个分类的依据是什么？',
    confusion: '初学者容易混淆"元素"与"集合"的关系，或者把"属于"符号∈和"包含于"符号⊆混用。',
    experiment: '观察以下对象：1, 2, 3；整数；正方形；所有偶数。哪些可以构成集合？',
    concept: '集合是具有某种特定性质的事物的总体。元素是集合中的每个对象。',
    derivation: '集合用大写字母表示，元素用小写字母表示。a∈A 表示 a 是集合 A 的元素。',
    transfer: '用描述法 {x|p(x)} 表示集合，其中 p(x) 是元素 x 满足的性质。',
  },

  variations: {
    basic: [
      { label: '列举法', formula: '{1, 2, 3}', note: '有限集合的表示' },
      { label: '描述法', formula: '{x∈R|x>0}', note: '无限集合的表示' },
      { label: '图示法', note: '韦恩图可视化' },
    ],
    advanced: [
      { label: '区间表示', formula: '(0,1] = {x|0<x≤1}', note: '实数集的子集' },
      { label: '符号约定', note: 'N自然数、Z整数、Q有理数、R实数' },
    ],
    challenge: [
      { label: '描述法的等价变形', note: '根据条件灵活切换列举法与描述法' },
    ],
  },

  formulas: [
    { name: '元素与集合关系', formula: 'a∈A 或 a∉A', usage: '判断元素是否属于集合' },
  ],

  selfEval: [
    { question: '能用列举法表示 {x∈N|x<5} 吗？', level: 'A', description: '能' },
    { question: '"很大的数"能构成集合吗？', level: 'B', description: '不能，元素不确定' },
  ],

  relatedModels: ['MATH-L01'],
  crossLinks: [],
}
