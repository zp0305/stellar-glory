// P28 电荷与库仑定// 内容来源：docs/knowledge/physics/P28_电荷与库仑定md

import type { ConceptData } from './types'

export const P28: ConceptData = {
  id: 'P28',
  title: '电荷与库仑定',
  subtitle: '电荷守恒和库仑定律——电荷是电磁相互作用，库仑力是静止电荷间的力',
  module: '电磁',
  chapter: '电场基础',
  difficulty: 3,

  // ===== 区块1：前置知识检=====
  preCheck: [
  {
    "question": "单| 难度1   题目：关于电荷的说法，正确的", "options": [
      "自然界只有一种电", "电荷可以创生",
      "电荷守恒", "负电荷比正电荷多"
    ],
    "answer": "C", "explanation": "电荷守恒是基本定"
  },
  {
    "question": "单| 难度1   题目：两个点电荷距离减半，库仑力变为原来", "options": [
      "2", "4", "1/2", "1/4"
    ],
    "answer": "B", "explanation": "$F \\propto 1/r^2$"
  },
  {
    "question": "简| 难度1   题目：为什么摩擦起电时，两个物体带等量异种电荷", "options": [],
    "answer": "摩擦起电是电子从一个物体转移到另一个物体，两物体分别带等量异种电荷，电荷总量守恒不变", "explanation": "电荷守恒——电荷不能创生或消灭，只能转"
  }
],

  // ===== 区块2：叙事正=====
  narrative: {
  "context": "用塑料梳子梳头后，梳子能吸引纸屑这种\"吸引\"现象源于**电荷**自然界有两种电荷*正电**负电*", "confusion": "很多学生认为\"库仑力只在真空中成立\"实际上： - 在介质中也存在库仑力 - 只是力的大小会减弱，引入**介电常数$\\varepsilon$**描述 - 真空\\varepsilon = 1$的特", "experiment": "用扭秤实验验证库仑定律： | 距离r(cm) | 力F(×10⁻²N) | F·r²(×10⁻⁴N·m²) | |:---|:---|:---| | 10 | 36 | 36 | | 20 | 9 | 36 | | 30 | 4 | 36 | 验证F \\propto 1/r^2$", "concept": "电荷和库仑定律： **电荷**- 自然界两种电荷：正、负 - 电荷守恒：总量不变 - 元电荷：$e = 1.6 \\times 10^{-19} C$ **库仑定律**$$F = k\\frac{q_1q_2}{r^2}$$ - $k = 9 \\times 10^9 N\\cdot m^2/C^2$ - 方向：沿连线，同性相斥、异性相", "derivation": "库仑定律理解**1. 公式** $$F = k\\frac{q_1q_2}{r^2}$$ **2. 方向** - $q_1q_2 > 0$：同性排- $q_1q_2 < 0$：异性吸**3. 静电力叠* 多个电荷$$F_{总} = \\sum F_i$$ 矢量求和**4. 与万有引力对* 都是平方反比律，但： - 电力可吸引可排斥（电荷有正负- 引力只有吸引（质量只有正", "transfer": "库仑定律应用**静电除尘**：高压电场使尘埃带电，然后被吸附到电极上**复印*：利用静电吸附碳粉**避雷*：尖端放电，将雷电导入地下---"
},

  // ===== 区块3：分层变=====
  variations: {
  "basic": [
    {
      "label": "例题1", "formula": "", "note": "$F = kq_1q_2/r^2 = 9 \\times 10^9 \\times 10^{-12}/0.01 = 0.9 N$｜库仑定"""""""""
    },
    {
      "label": "例题2", "formula": "", "note": "e$的代"""""""""
    }
  ],
  "advanced": [
    {
      "label": "例题1", "formula": "", "note": "放在两电荷连线的某点，外侧某  平衡条件：两个库仑力大小相等｜力的平"""""""""
    }
  ],
  "challenge": [
    {
      "label": "例题1", "formula": "", "note": "$F' = F/\\varepsilon_r = F/4$｜介电常'"""""""""
    },
    {
      "label": "例题2", "formula": "", "note": "对称性，积分可得｜球壳定理（高斯定理的对称性应用）"""""""""""
    },
    {
      "label": "例题3", "formula": "", "note": "｜用实验验证平方反比"""""""""
    }
  ]
},

  // ===== 区块4：公式卡=====
  formulas: [
  {
    "formula": "$F = k\\frac{q_1q_2}{r^2}$", "name": "库仑定律", "usage": "点电"
  },
  {
    "formula": "$k = 9 \\times 10^9$", "name": "静电力常", "usage": "真空"
  }
],

  // ===== 区块5：理解度自评 =====
  selfEval: [
  {
    "level": "A", "question": "我能熟练计算库仑", "description": "可以进入P29静电场学"
  },
  {
    "level": "B", "question": "我知道公式但方向判断不熟", "description": "完成J级变"
  },
  {
    "level": "C", "question": "我把电学和力学混", "description": "重读「概念涌现」部"
  }
],

  // ===== 关联链接 =====
  relatedModels: [
  "M23"
],
  crossLinks: [
  {
    "subject": "化学", "conceptName": "离子", "relation": "库仑力的宏观体现", "conceptId": ""
  }
],
}
