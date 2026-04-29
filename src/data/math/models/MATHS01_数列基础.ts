// 模型 MATH-S01：数列基础
import type { MathModel } from './types'

export const S01: MathModel = {
  id: 'MATH-S01',
  title: '数列基础',
  module: '数列与归纳',
  chapter: {
    id: 'S01',
    title: '数列基础',
    subtitle: '数列的概念、通项公式',
    module: '数列与归纳',
    content: '数列是定义在正整数集上的函数。',
    examples: [
      {
        title: '求通项',
        problem: '已知数列 2,4,6,8,... 求通项公式',
        solution: 'aₙ=2n',
        key: '观察规律',
      },
    ],
    relatedConcepts: ['K35'],
  },
}

export const S02: MathModel = {
  id: 'MATH-S02',
  title: '等差数列',
  module: '数列与归纳',
  chapter: {
    id: 'S02',
    title: '等差数列',
    subtitle: '通项公式、前 n 项和',
    module: '数列与归纳',
    content: '等差数列是后项减去前项等于常数的数列。',
    examples: [
      {
        title: '求和',
        problem: '求 1+2+3+...+100',
        solution: 'S₁₀₀=100×(1+100)/2=5050',
        key: '等差数列求和公式',
      },
    ],
    relatedConcepts: ['K36'],
  },
}

export const S03: MathModel = {
  id: 'MATH-S03',
  title: '等比数列',
  module: '数列与归纳',
  chapter: {
    id: 'S03',
    title: '等比数列',
    subtitle: '通项公式、前 n 项和',
    module: '数列与归纳',
    content: '等比数列是后项与前项的比等于常数的数列。',
    examples: [
      {
        title: '求和',
        problem: '求 1+2+4+8+...+2⁹',
        solution: 'S=2¹⁰-1=1023',
        key: '等比数列求和公式',
      },
    ],
    relatedConcepts: ['K37'],
  },
}

export const S04: MathModel = {
  id: 'MATH-S04',
  title: '数列求和',
  module: '数列与归纳',
  chapter: {
    id: 'S04',
    title: '数列求和',
    subtitle: '错位相减、裂项相消',
    module: '数列与归纳',
    content: '数列求和常用错位相减法和裂项相消法。',
    examples: [
      {
        title: '裂项相消',
        problem: '求 1/(1×2)+1/(2×3)+...+1/(n(n+1))',
        solution: '=1-1/(n+1)=n/(n+1)',
        key: '1/(k(k+1))=1/k-1/(k+1)',
      },
    ],
    relatedConcepts: ['K38'],
  },
}

export const S05: MathModel = {
  id: 'MATH-S05',
  title: '递推数列',
  module: '数列与归纳',
  chapter: {
    id: 'S05',
    title: '递推数列',
    subtitle: '累加法、累乘法、构造法',
    module: '数列与归纳',
    content: '递推数列是用相邻项关系定义的数列。',
    examples: [
      {
        title: '累加法',
        problem: '已知 a₁=1，aₙ₊₁=aₙ+2，求 aₙ',
        solution: 'aₙ=2n-1',
        key: '累加求通项',
      },
    ],
    relatedConcepts: ['K39'],
  },
}

export const S06: MathModel = {
  id: 'MATH-S06',
  title: '数学归纳法',
  module: '数列与归纳',
  chapter: {
    id: 'S06',
    title: '数学归纳法',
    subtitle: '证明方法、步骤',
    module: '数列与归纳',
    content: '数学归纳法是证明与正整数有关的命题的方法。',
    examples: [
      {
        title: '归纳证明',
        problem: '证明 1+2+...+n=n(n+1)/2',
        solution: 'n=1 时成立；假设 n=k 成立，推 n=k+1 也成立',
        key: '两步缺一不可',
      },
    ],
    relatedConcepts: ['K40'],
  },
}

export const S07: MathModel = {
  id: 'MATH-S07',
  title: '数列不等式',
  module: '数列与归纳',
  chapter: {
    id: 'S07',
    title: '数列不等式',
    subtitle: '放缩法',
    module: '数列与归纳',
    content: '数列不等式证明常用放缩法。',
    examples: [
      {
        title: '放缩证明',
        problem: '证明 1+1/2²+1/3²+...+1/n²<2',
        solution: '1/k²<1/(k(k-1))=1/(k-1)-1/k，放缩后求和',
        key: '放缩有度',
      },
    ],
    relatedConcepts: ['K41'],
  },
}

export const S08: MathModel = {
  id: 'MATH-S08',
  title: '数列综合',
  module: '数列与归纳',
  chapter: {
    id: 'S08',
    title: '数列综合',
    subtitle: '综合应用',
    module: '数列与归纳',
    content: '数列综合题是高考常见题型。',
    examples: [
      {
        title: '数列综合',
        problem: '已知等比数列求和与通项的关系',
        solution: '利用公式建立方程',
        key: '灵活运用公式',
      },
    ],
    relatedConcepts: ['K35', 'K36', 'K37'],
  },
}
