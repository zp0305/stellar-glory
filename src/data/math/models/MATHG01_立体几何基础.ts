// 模型 MATH-G01：立体几何基础
import type { MathModel } from './types'

export const G01: MathModel = {
  id: 'MATH-G01',
  title: '立体几何基础',
  module: '立体几何',
  chapter: {
    id: 'G01',
    title: '立体几何基础',
    subtitle: '基本立体图形、位置关系',
    module: '立体几何',
    content: '立体几何研究空间图形的性质。',
    examples: [
      {
        title: '认识图形',
        problem: '正方体有几个面、几条棱？',
        solution: '6个面，12条棱',
        key: '基本立体图形性质',
      },
    ],
    relatedConcepts: ['K42', 'K43'],
  },
}

export const G02: MathModel = {
  id: 'MATH-G02',
  title: '几何体的体积',
  module: '立体几何',
  chapter: {
    id: 'G02',
    title: '几何体的体积',
    subtitle: '柱体、锥体、球体积',
    module: '立体几何',
    content: '几何体体积公式是立体几何的基础。',
    examples: [
      {
        title: '求体积',
        problem: '求半径为 2 的球的体积',
        solution: 'V=4/3πR³=4/3π×8=32π/3',
        key: '球体积公式',
      },
    ],
    relatedConcepts: ['K44'],
  },
}

export const G03: MathModel = {
  id: 'MATH-G03',
  title: '空间位置关系',
  module: '立体几何',
  chapter: {
    id: 'G03',
    title: '空间位置关系',
    subtitle: '线线、线面、面面关系',
    module: '立体几何',
    content: '空间中的位置关系包括线线、线面、面面关系。',
    examples: [
      {
        title: '判断关系',
        problem: '如何判断直线与平面平行？',
        solution: '直线与平面内一条直线平行',
        key: '判定定理',
      },
    ],
    relatedConcepts: ['K45'],
  },
}

export const G04: MathModel = {
  id: 'MATH-G04',
  title: '线面平行',
  module: '立体几何',
  chapter: {
    id: 'G04',
    title: '线面平行',
    subtitle: '判定定理、性质定理',
    module: '立体几何',
    content: '线面平行的判定和性质是立体几何的重要内容。',
    examples: [
      {
        title: '证明平行',
        problem: '如何证明直线与平面平行？',
        solution: '直线与平面内一条直线平行，且直线不在平面内',
        key: '判定定理',
      },
    ],
    relatedConcepts: ['K46'],
  },
}

export const G05: MathModel = {
  id: 'MATH-G05',
  title: '线面垂直',
  module: '立体几何',
  chapter: {
    id: 'G05',
    title: '线面垂直',
    subtitle: '判定定理、性质定理',
    module: '立体几何',
    content: '线面垂直的判定和性质是立体几何的核心内容。',
    examples: [
      {
        title: '证明垂直',
        problem: '如何证明直线与平面垂直？',
        solution: '直线与平面内两条相交直线垂直',
        key: '判定定理',
      },
    ],
    relatedConcepts: ['K47'],
  },
}

export const G06: MathModel = {
  id: 'MATH-G06',
  title: '空间向量',
  module: '立体几何',
  chapter: {
    id: 'G06',
    title: '空间向量',
    subtitle: '向量运算、坐标表示',
    module: '立体几何',
    content: '空间向量是解决立体几何问题的有力工具。',
    examples: [
      {
        title: '向量运算',
        problem: '已知空间向量 a=(1,2,3)，求|a|',
        solution: '|a|=√(1+4+9)=√14',
        key: '模长公式',
      },
    ],
    relatedConcepts: ['K48'],
  },
}

export const G07: MathModel = {
  id: 'MATH-G07',
  title: '空间向量的应用',
  module: '立体几何',
  chapter: {
    id: 'G07',
    title: '空间向量的应用',
    subtitle: '线面角、二面角、距离',
    module: '立体几何',
    content: '空间向量可以解决角度和距离问题。',
    examples: [
      {
        title: '求二面角',
        problem: '用向量法求二面角',
        solution: '求两平面法向量的夹角',
        key: '法向量夹角',
      },
    ],
    relatedConcepts: ['K49'],
  },
}
