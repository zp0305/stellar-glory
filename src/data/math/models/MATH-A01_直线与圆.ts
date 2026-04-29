// 模型 MATH-A01：直线与圆
import type { MathModel } from './types'

export const A01: MathModel = {
  id: 'MATH-A01',
  title: '直线与圆',
  module: '解析几何',
  chapter: {
    id: 'A01',
    title: '直线与圆',
    subtitle: '直线方程、圆方程',
    module: '解析几何',
    content: '直线和圆是解析几何的基础。',
    examples: [
      {
        title: '求直线方程',
        problem: '过点 (1,2) 斜率为 3 的直线方程',
        solution: 'y-2=3(x-1)，即 y=3x-1',
        key: '点斜式',
      },
    ],
    relatedConcepts: ['K50', 'K51', 'K52'],
  },
}

export const A02: MathModel = {
  id: 'MATH-A02',
  title: '圆与圆的位置关系',
  module: '解析几何',
  chapter: {
    id: 'A02',
    title: '圆与圆的位置关系',
    subtitle: '相离、外切、相交、内切、内含',
    module: '解析几何',
    content: '圆与圆的位置关系由圆心距与半径的关系决定。',
    examples: [
      {
        title: '判断位置',
        problem: '判断圆与圆的位置关系',
        solution: '比较圆心距 d 与 R+r、|R-r| 的大小',
        key: 'd 与半径的关系',
      },
    ],
    relatedConcepts: ['K53'],
  },
}

export const A03: MathModel = {
  id: 'MATH-A03',
  title: '直线与圆的位置关系',
  module: '解析几何',
  chapter: {
    id: 'A03',
    title: '直线与圆的位置关系',
    subtitle: '弦长、切线长',
    module: '解析几何',
    content: '直线与圆的位置关系由圆心到直线的距离与半径的关系决定。',
    examples: [
      {
        title: '求切线长',
        problem: '从圆外一点 P 作圆的切线',
        solution: '切线长 = √(PO² - r²)',
        key: '切线长公式',
      },
    ],
    relatedConcepts: ['K53'],
  },
}

export const A04: MathModel = {
  id: 'MATH-A04',
  title: '椭圆',
  module: '解析几何',
  chapter: {
    id: 'A04',
    title: '椭圆',
    subtitle: '标准方程、几何性质',
    module: '解析几何',
    content: '椭圆是到两焦点距离之和为常数的点的轨迹。',
    examples: [
      {
        title: '求椭圆方程',
        problem: '已知焦点在 x 轴，a=5，b=3，求椭圆方程',
        solution: 'x²/25+y²/9=1',
        key: '标准方程',
      },
    ],
    relatedConcepts: ['K54'],
  },
}

export const A05: MathModel = {
  id: 'MATH-A05',
  title: '双曲线',
  module: '解析几何',
  chapter: {
    id: 'A05',
    title: '双曲线',
    subtitle: '标准方程、几何性质',
    module: '解析几何',
    content: '双曲线是到两焦点距离之差的绝对值为常数的点的轨迹。',
    examples: [
      {
        title: '求双曲线方程',
        problem: '已知焦点在 x 轴，a=3，b=4，求双曲线方程',
        solution: 'x²/9-y²/16=1',
        key: '标准方程',
      },
    ],
    relatedConcepts: ['K55'],
  },
}

export const A06: MathModel = {
  id: 'MATH-A06',
  title: '抛物线',
  module: '解析几何',
  chapter: {
    id: 'A06',
    title: '抛物线',
    subtitle: '标准方程、焦点、准线',
    module: '解析几何',
    content: '抛物线是到焦点和准线距离相等的点的轨迹。',
    examples: [
      {
        title: '求抛物线方程',
        problem: '已知焦点为 (2,0)，求抛物线方程',
        solution: 'y²=8x',
        key: '标准方程',
      },
    ],
    relatedConcepts: ['K56'],
  },
}

export const A07: MathModel = {
  id: 'MATH-A07',
  title: '直线与圆锥曲线',
  module: '解析几何',
  chapter: {
    id: 'A07',
    title: '直线与圆锥曲线',
    subtitle: '弦长、中点弦',
    module: '解析几何',
    content: '直线与圆锥曲线的位置关系和性质是解析几何的核心内容。',
    examples: [
      {
        title: '求弦长',
        problem: '求直线与椭圆相交所得弦长',
        solution: '弦长公式：|AB|=√(1+k²)·√(Δ)/|A|',
        key: '韦达定理',
      },
    ],
    relatedConcepts: ['K57'],
  },
}

export const A08: MathModel = {
  id: 'MATH-A08',
  title: '参数方程',
  module: '解析几何',
  chapter: {
    id: 'A08',
    title: '参数方程',
    subtitle: '参数方程与普通方程互化',
    module: '解析几何',
    content: '参数方程是用参数表示曲线的方式。',
    examples: [
      {
        title: '参数方程化普通方程',
        problem: '将 x=cos θ, y=sin θ 化为普通方程',
        solution: 'x²+y²=1',
        key: '消去参数',
      },
    ],
    relatedConcepts: ['K58'],
  },
}
