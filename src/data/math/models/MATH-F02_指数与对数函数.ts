// 模型 MATH-F02：指数与对数函数
import type { MathModel } from './types'

export const F02: MathModel = {
  id: 'MATH-F02',
  title: '指数与对数函数',
  module: '函数与导数',
  chapter: {
    id: 'F02',
    title: '指数与对数函数',
    subtitle: '图像、性质、运算',
    module: '函数与导数',
    content: '指数函数和对数函数是互逆的两种函数。',
    examples: [
      {
        title: '解指数方程',
        problem: '解方程 2^x=8',
        solution: '2^x=8=2³，所以 x=3',
        key: '化为同底数',
      },
    ],
    relatedConcepts: ['K12', 'K13'],
  },
}

export const F03: MathModel = {
  id: 'MATH-F03',
  title: '函数的零点',
  module: '函数与导数',
  chapter: {
    id: 'F03',
    title: '函数的零点',
    subtitle: '零点存在定理、零点个数',
    module: '函数与导数',
    content: '函数的零点就是方程 f(x)=0 的解。',
    examples: [
      {
        title: '判断零点存在',
        problem: '证明 f(x)=x³-x+1 在 R 上有唯一零点',
        solution: 'f(-1)=-1, f(0)=1，异号，所以存在零点',
        key: '零点存在定理',
      },
    ],
    relatedConcepts: ['K15'],
  },
}

export const F04: MathModel = {
  id: 'MATH-F04',
  title: '导数的应用',
  module: '函数与导数',
  chapter: {
    id: 'F04',
    title: '导数的应用',
    subtitle: '单调性、极值、最值',
    module: '函数与导数',
    content: '导数是研究函数性质的重要工具。',
    examples: [
      {
        title: '求极值',
        problem: '求 f(x)=x³-3x 的极值',
        solution: "f'(x)=3x²-3=0，x=±1，f(-1)=2 极大值，f(1)=-2 极小值",
        key: '求导、解方程、判断符号',
      },
    ],
    relatedConcepts: ['K17', 'K18', 'K19', 'K20'],
  },
}

export const F05: MathModel = {
  id: 'MATH-F05',
  title: '导数与不等式',
  module: '函数与导数',
  chapter: {
    id: 'F05',
    title: '导数与不等式',
    subtitle: '构造函数、证明不等式',
    module: '函数与导数',
    content: '利用导数证明不等式是导数应用的重要题型。',
    examples: [
      {
        title: '证明不等式',
        problem: '证明 x>ln(1+x) (x>0)',
        solution: '设 f(x)=x-ln(1+x)，f\'(x)=1-1/(1+x)=x/(1+x)>0，所以 f(x)>f(0)=0',
        key: '构造函数，研究单调性',
      },
    ],
    relatedConcepts: ['K23'],
  },
}

export const F06: MathModel = {
  id: 'MATH-F06',
  title: '导数与零点',
  module: '函数与导数',
  chapter: {
    id: 'F06',
    title: '导数与零点',
    subtitle: '隐零点问题',
    module: '函数与导数',
    content: '隐零点问题是指数函数与多项式函数综合时常见的零点问题。',
    examples: [
      {
        title: '隐零点问题',
        problem: '证明方程 xe^x=1 有唯一解',
        solution: '设 f(x)=xe^x-1，f\'(x)=(x+1)e^x>0，f 单调递增，f(0)=-1<0，f(1)=e-1>0',
        key: '利用单调性证明唯一性',
      },
    ],
    relatedConcepts: ['K21'],
  },
}

export const F07: MathModel = {
  id: 'MATH-F07',
  title: '函数与导数综合',
  module: '函数与导数',
  chapter: {
    id: 'F07',
    title: '函数与导数综合',
    subtitle: '综合应用',
    module: '函数与导数',
    content: '函数与导数综合题是高考常见题型。',
    examples: [
      {
        title: '导数综合题',
        problem: '已知 f(x)=xe^x，求曲线的切线方程',
        solution: 'f\'(x)=(x+1)e^x，切点横坐标为 x₀，切线方程为 y=(x₀+1)e^x₀(x-x₀)+x₀e^x₀',
        key: '求导数、代入公式',
      },
    ],
    relatedConcepts: ['K17', 'K18', 'K19', 'K20'],
  },
}

export const F08: MathModel = {
  id: 'MATH-F08',
  title: '函数图像变换',
  module: '函数与导数',
  chapter: {
    id: 'F08',
    title: '函数图像变换',
    subtitle: '平移、伸缩、对称',
    module: '函数与导数',
    content: '函数图像变换包括平移、伸缩、对称三种。',
    examples: [
      {
        title: '图像变换',
        problem: '由 y=f(x) 的图像如何得到 y=f(x-2)+1 的图像',
        solution: '右移 2 个单位，上移 1 个单位',
        key: '左加右减，上加下减',
      },
    ],
    relatedConcepts: ['K08'],
  },
}
