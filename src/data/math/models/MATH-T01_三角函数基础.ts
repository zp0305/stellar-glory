// 模型 MATH-T01：三角函数基础
import type { MathModel } from './types'

export const T01: MathModel = {
  id: 'MATH-T01',
  title: '三角函数基础',
  module: '三角与向量',
  chapter: {
    id: 'T01',
    title: '三角函数基础',
    subtitle: '弧度制、同角三角函数',
    module: '三角与向量',
    content: '三角函数基础包括弧度制、同角三角函数关系。',
    examples: [
      {
        title: '弧度制转换',
        problem: '将 120° 转化为弧度',
        solution: '120°=120×π/180=2π/3',
        key: '角度乘以 π/180',
      },
    ],
    relatedConcepts: ['K24', 'K25'],
  },
}

export const T02: MathModel = {
  id: 'MATH-T02',
  title: '三角恒等变换',
  module: '三角与向量',
  chapter: {
    id: 'T02',
    title: '三角恒等变换',
    subtitle: '和差角、倍角公式',
    module: '三角与向量',
    content: '三角恒等变换是三角函数化简和证明的基础。',
    examples: [
      {
        title: '化简',
        problem: '化简 sin(x+π/3)+sin(x-π/3)',
        solution: '=2sin x cos(π/3)=sin x',
        key: '和差化积公式',
      },
    ],
    relatedConcepts: ['K28'],
  },
}

export const T03: MathModel = {
  id: 'MATH-T03',
  title: '正弦定理与余弦定理',
  module: '三角与向量',
  chapter: {
    id: 'T03',
    title: '正弦定理与余弦定理',
    subtitle: '解三角形',
    module: '三角与向量',
    content: '正弦定理和余弦定理是解三角形的重要工具。',
    examples: [
      {
        title: '解三角形',
        problem: '在△ABC 中，a=3，b=4，C=60°，求 c',
        solution: 'c²=a²+b²-2ab cos C=9+16-2×3×4×1/2=13，c=√13',
        key: '余弦定理',
      },
    ],
    relatedConcepts: ['K29'],
  },
}

export const T04: MathModel = {
  id: 'MATH-T04',
  title: '平面向量的概念',
  module: '三角与向量',
  chapter: {
    id: 'T04',
    title: '平面向量的概念',
    subtitle: '向量的表示、模、单位向量',
    module: '三角与向量',
    content: '平面向量是既有大小又有方向的量。',
    examples: [
      {
        title: '向量运算',
        problem: '已知 a=(1,2)，b=(3,4)，求 a+b',
        solution: 'a+b=(1+3,2+4)=(4,6)',
        key: '坐标相加',
      },
    ],
    relatedConcepts: ['K30', 'K31'],
  },
}

export const T05: MathModel = {
  id: 'MATH-T05',
  title: '平面向量的数量积',
  module: '三角与向量',
  chapter: {
    id: 'T05',
    title: '平面向量的数量积',
    subtitle: '点积、投影、夹角',
    module: '三角与向量',
    content: '数量积是向量间的一种运算，产生标量。',
    examples: [
      {
        title: '求夹角',
        problem: '已知 a=(1,0)，b=(1,1)，求夹角',
        solution: 'cos θ=(a·b)/(|a||b|)=1/(1×√2)=√2/2，θ=45°',
        key: '公式 cos θ=(a·b)/(|a||b|)',
      },
    ],
    relatedConcepts: ['K33'],
  },
}

export const T06: MathModel = {
  id: 'MATH-T06',
  title: '平面向量的应用',
  module: '三角与向量',
  chapter: {
    id: 'T06',
    title: '平面向量的应用',
    subtitle: '向量法解几何',
    module: '三角与向量',
    content: '向量法是解决几何问题的重要方法。',
    examples: [
      {
        title: '证明垂直',
        problem: '用向量法证明菱形对角线互相垂直',
        solution: '设菱形对角线向量为 AC 和 BD，则 AC·BD=0，故 AC⊥BD',
        key: '数量积为零',
      },
    ],
    relatedConcepts: ['K34'],
  },
}
