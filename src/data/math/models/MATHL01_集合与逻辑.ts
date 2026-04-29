// 模型 MATH-L01：集合与逻辑
import type { MathModel } from './types'

export const L01: MathModel = {
  id: 'MATH-L01',
  title: '集合与逻辑',
  module: '集合与逻辑',
  chapter: {
    id: 'L01',
    title: '集合与逻辑',
    subtitle: '集合运算、充要条件',
    module: '集合与逻辑',
    content: '集合与逻辑是数学的基础语言。',
    examples: [
      {
        title: '集合运算',
        problem: '已知 A={1,2,3}，B={2,3,4}，求 A∩B',
        solution: 'A∩B={2,3}',
        key: '交集定义',
      },
    ],
    relatedConcepts: ['K01', 'K02', 'K03', 'K04', 'K05', 'K06'],
  },
}

export const L02: MathModel = {
  id: 'MATH-L02',
  title: '充要条件与量词',
  module: '集合与逻辑',
  chapter: {
    id: 'L02',
    title: '充要条件与量词',
    subtitle: '充分条件、必要条件、全称量词、存在量词',
    module: '集合与逻辑',
    content: '充要条件和量词是逻辑推理的基础。',
    examples: [
      {
        title: '判断条件',
        problem: 'x>0 是 x²>0 的什么条件',
        solution: '充分不必要条件',
        key: '推出关系',
      },
    ],
    relatedConcepts: ['K04', 'K05', 'K06'],
  },
}

export const L03: MathModel = {
  id: 'MATH-L03',
  title: '不等式基础',
  module: '集合与逻辑',
  chapter: {
    id: 'L03',
    title: '不等式基础',
    subtitle: '不等式性质、解法',
    module: '集合与逻辑',
    content: '不等式是数学中的重要工具。',
    examples: [
      {
        title: '解不等式',
        problem: '解不等式 |x-1|<3',
        solution: '-2<x<4',
        key: '去绝对值',
      },
    ],
    relatedConcepts: [],
  },
}

export const L04: MathModel = {
  id: 'MATH-L04',
  title: '基本不等式',
  module: '集合与逻辑',
  chapter: {
    id: 'L04',
    title: '基本不等式',
    subtitle: '均值不等式、柯西不等式',
    module: '集合与逻辑',
    content: '基本不等式是解决最值问题的重要工具。',
    examples: [
      {
        title: '求最值',
        problem: '已知 x>0，求 x+1/x 的最小值',
        solution: '最小值为 2',
        key: '均值不等式',
      },
    ],
    relatedConcepts: [],
  },
}

export const L05: MathModel = {
  id: 'MATH-L05',
  title: '线性规划',
  module: '集合与逻辑',
  chapter: {
    id: 'L05',
    title: '线性规划',
    subtitle: '可行域、最优解',
    module: '集合与逻辑',
    content: '线性规划是求最优解的方法。',
    examples: [
      {
        title: '线性规划',
        problem: '求 z=2x+y 的最大值',
        solution: '在可行域端点处取得',
        key: '端点法',
      },
    ],
    relatedConcepts: [],
  },
}

export const L06: MathModel = {
  id: 'MATH-L06',
  title: '推理与证明',
  module: '集合与逻辑',
  chapter: {
    id: 'L06',
    title: '推理与证明',
    subtitle: '直接证明、间接证明、反证法',
    module: '集合与逻辑',
    content: '推理与证明是数学的核心方法。',
    examples: [
      {
        title: '反证法',
        problem: '证明 √2 是无理数',
        solution: '假设 √2 是有理数，推出矛盾',
        key: '反证法步骤',
      },
    ],
    relatedConcepts: [],
  },
}

export const L07: MathModel = {
  id: 'MATH-L07',
  title: '复数基础',
  module: '集合与逻辑',
  chapter: {
    id: 'L07',
    title: '复数基础',
    subtitle: '复数四则运算',
    module: '集合与逻辑',
    content: '复数是实数的扩展。',
    examples: [
      {
        title: '复数运算',
        problem: '计算 (1+2i)+(3-4i)',
        solution: '4-2i',
        key: '实部虚部分别运算',
      },
    ],
    relatedConcepts: ['K73', 'K74'],
  },
}

export const L08: MathModel = {
  id: 'MATH-L08',
  title: '复数三角形式',
  module: '集合与逻辑',
  chapter: {
    id: 'L08',
    title: '复数三角形式',
    subtitle: '三角表示、乘法几何意义',
    module: '集合与逻辑',
    content: '复数的三角表示在复数运算中有重要作用。',
    examples: [
      {
        title: '三角形式',
        problem: '将 1+i 化为三角形式',
        solution: '√2(cos π/4+i sin π/4)',
        key: '求模和辐角',
      },
    ],
    relatedConcepts: ['K75'],
  },
}

export const B01: MathModel = {
  id: 'MATH-B01',
  title: '复数运算',
  module: '复数',
  chapter: {
    id: 'B01',
    title: '复数运算',
    subtitle: '加减乘除、模与共轭',
    module: '复数',
    content: '复数的四则运算。',
    examples: [
      {
        title: '乘法运算',
        problem: '计算 (1+i)²',
        solution: '2i',
        key: 'i²=-1',
      },
    ],
    relatedConcepts: ['K73', 'K74'],
  },
}

export const B02: MathModel = {
  id: 'MATH-B02',
  title: '复数与方程',
  module: '复数',
  chapter: {
    id: 'B02',
    title: '复数与方程',
    subtitle: '复数系数方程、根的性质',
    module: '复数',
    content: '复数在方程理论中的应用。',
    examples: [
      {
        title: '求根',
        problem: '解方程 x²+1=0',
        solution: 'x=±i',
        key: 'i²=-1',
      },
    ],
    relatedConcepts: ['K73'],
  },
}

export const B03: MathModel = {
  id: 'MATH-B03',
  title: '复数三角形式与乘法',
  module: '复数',
  chapter: {
    id: 'B03',
    title: '复数三角形式与乘法',
    subtitle: '棣莫弗公式、单位根',
    module: '复数',
    content: '复数三角形式的乘法有几何意义。',
    examples: [
      {
        title: '乘法几何意义',
        problem: '计算模相乘、辐角相加的意义',
        solution: 'z₁z₂ 的模等于模相乘，辐角等于辐角相加',
        key: '几何意义',
      },
    ],
    relatedConcepts: ['K75'],
  },
}

export const B04: MathModel = {
  id: 'MATH-B04',
  title: '复数与平面向量',
  module: '复数',
  chapter: {
    id: 'B04',
    title: '复数与平面向量',
    subtitle: '对应关系、向量运算',
    module: '复数',
    content: '复数与平面向量有一一对应关系。',
    examples: [
      {
        title: '对应关系',
        problem: '复数 z=3+4i 对应的向量',
        solution: '起点在原点，终点为 (3,4) 的向量',
        key: '一一对应',
      },
    ],
    relatedConcepts: ['K30', 'K31'],
  },
}

export const C01: MathModel = {
  id: 'MATH-C01',
  title: '导数综合',
  module: '函数与导数',
  chapter: {
    id: 'C01',
    title: '导数综合',
    subtitle: '单调性、极值、最值',
    module: '函数与导数',
    content: '导数的综合应用。',
    examples: [
      {
        title: '导数综合题',
        problem: '已知 f(x)，求单调区间和极值',
        solution: '求导、解不等式',
        key: '导数应用步骤',
      },
    ],
    relatedConcepts: ['K17', 'K18', 'K19', 'K20'],
  },
}

export const C02: MathModel = {
  id: 'MATH-C02',
  title: '导数与不等式',
  module: '函数与导数',
  chapter: {
    id: 'C02',
    title: '导数与不等式',
    subtitle: '构造函数、证明不等式',
    module: '函数与导数',
    content: '利用导数证明不等式。',
    examples: [
      {
        title: '不等式证明',
        problem: '证明 eˣ≥x+1',
        solution: '设 f(x)=eˣ-x-1，f\'(x)=eˣ-1≥0',
        key: '构造函数',
      },
    ],
    relatedConcepts: ['K23'],
  },
}

export const C03: MathModel = {
  id: 'MATH-C03',
  title: '导数与零点',
  module: '函数与导数',
  chapter: {
    id: 'C03',
    title: '导数与零点',
    subtitle: '隐零点、零点偏移',
    module: '函数与导数',
    content: '导数与零点问题的综合。',
    examples: [
      {
        title: '隐零点问题',
        problem: '讨论函数零点个数',
        solution: '利用单调性和极限',
        key: '数形结合',
      },
    ],
    relatedConcepts: ['K21', 'K22'],
  },
}

export const C04: MathModel = {
  id: 'MATH-C04',
  title: '导数与恒成立问题',
  module: '函数与导数',
  chapter: {
    id: 'C04',
    title: '导数与恒成立问题',
    subtitle: '参数范围、最值',
    module: '函数与导数',
    content: '导数在恒成立问题中的应用。',
    examples: [
      {
        title: '恒成立问题',
        problem: '求参数范围使不等式恒成立',
        solution: '分离参数或分类讨论',
        key: '转化思想',
      },
    ],
    relatedConcepts: ['K17', 'K18', 'K20'],
  },
}
