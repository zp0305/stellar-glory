// P29 — 静电场（场强·电势·电势能）
// 内容来源：docs/knowledge/physics/P29_静电场.md

import type { ConceptData } from './types'

export const P29: ConceptData = {
  id: 'P29',
  title: '静电场（场强·电势·电势能）',
  subtitle: '电场是"电荷周围空间的一种物质"——场强描述力的性质，电势描述能的性质。',
  module: '电磁学',
  chapter: '电场',
  difficulty: 3,

  // ===== 区块1：前置知识检测 =====
  preCheck: [
  {
    "question": "单选 | 难度1   题目：关于电场强度的说法，正确的是",
    "options": [
      "场强与试探电荷成反比",
      "场强方向与正电荷受力方向相同",
      "场强与电势成正比",
      "场强是标量"
    ],
    "answer": "B",
    "explanation": "场强是矢量，$E = F/q$与$q$无关"
  },
  {
    "question": "单选 | 难度1   题目：关于电势和场强的关系，正确的是",
    "options": [
      "场强为零处电势一定为零",
      "电势为零处场强一定为零",
      "场强为零处电势可能不为零",
      "电势高的地方场强一定大"
    ],
    "answer": "C",
    "explanation": "两者无必然关系"
  },
  {
    "question": "简答 | 难度1   题目：为什么\"电势高的地方场强大\"是错的？",
    "options": [],
    "answer": "场强描述力的性质，电势描述能的性质。电势高只说明电势能大，不代表电场力大。",
    "explanation": "混淆了力和能的性质"
  }
],

  // ===== 区块2：叙事正文 =====
  narrative: {
  "context": "电荷周围存在一种看不见的物质——**电场**。 电场对放入其中的电荷有力的作用，这和重力场对质量有力的作用类似。 但电场有两个性质：**强度**和**电势**。",
  "confusion": "很多学生认为\"电势高的地方场强大\"。 实际上： - 场强$\\vec{E}$是力性质，描述\"单位正电荷受多大的力\" - 电势$\\varphi$是能性质，描述\"单位正电荷有多少电势能\" - 两者无直接关系",
  "experiment": "用试探电荷实验： | 试探电荷q(C) | 受力F(N) | F/q(N/C) | |:---|:---|:---| | 1×10⁻⁶ | 2×10⁻⁴ | 200 | | 2×10⁻⁶ | 4×10⁻⁴ | 200 | | 3×10⁻⁶ | 6×10⁻⁴ | 200 | 观察：$F/q$是常数——这就是**电场强度**！",
  "concept": "电场性质： **电场强度**： $$E = \\frac{F}{q}$$ - 矢量，方向与正电荷受力方向相同 - 单位：N/C = V/m **电势**： $$\\varphi = \\frac{E_p}{q}$$ - 标量 - 单位：V **关系**： $$E = -\\frac{d\\varphi}{dr}$$",
  "derivation": "电场公式推导： **1. 从库仑定律出发** 点电荷$Q$在距离$r$处产生电场： $$F = k\\frac{Qq}{r^2}$$ **2. 定义电场强度** $$E = \\frac{F}{q} = \\frac{kQ}{r^2}$$ 方向：正电荷$Q$产生的电场指向外，负电荷指向内 **3. 电势** 从无穷远到$r$： $$\\varphi = \\frac{kQ}{r}$$ **4. 场强与电势的关系** $$E = -\\frac{d\\varphi}{dr}$$（沿电场方向，负号表示场强指向电势降低方向）",
  "transfer": "电场的应用： **示波器**：电子在电场中偏转，显示信号。 **静电屏蔽**：金属壳内部电场为零，保护内部器件。 **电容**：储存电荷和电能。 ---"
},

  // ===== 区块3：分层变形 =====
  variations: {
  "basic": [
    {
      "label": "例题1",
      "formula": "",
      "note": "$E = kQ/r^2 = 9 \\times 10^9 \\times 2 \\times 10^{-6} / 0.01 = 1.8 \\times 10^6 N/C$｜$E = kQ/r^2$"
    },
    {
      "label": "例题2",
      "formula": "",
      "note": "$\\varphi = kQ/r$，$Q = \\varphi r/k = 100 \\times 0.09/(9 \\times 10^9) = 1 \\times 10^{-9} C = 1 nC$｜电势公式反求Q"
    }
  ],
  "advanced": [
    {
      "label": "例题1",
      "formula": "",
      "note": "中点场强为0（两个电荷产生的场强大小相等、方向相反）｜矢量求和"
    }
  ],
  "challenge": [
    {
      "label": "例题1",
      "formula": "",
      "note": "球内$r<R$：$E = kQr/R^3$（均匀）   球外$r>R$：$E = kQ/r^2$（点电荷）｜对称性分析"
    },
    {
      "label": "例题2",
      "formula": "",
      "note": "从$\\varphi = E \\cdot x$（匀强电场）   取极限得微分形式｜微积分在电场中的应用"
    },
    {
      "label": "例题3",
      "formula": "",
      "note": "｜用试探电荷测场强"
    }
  ]
},

  // ===== 区块4：公式卡片 =====
  formulas: [
  {
    "formula": "$E = F/q$",
    "name": "电场强度定义",
    "usage": "任意"
  },
  {
    "formula": "$E = kQ/r^2$",
    "name": "点电荷场强",
    "usage": "真空"
  },
  {
    "formula": "$\\varphi = kQ/r$",
    "name": "点电荷电势",
    "usage": "真空"
  },
  {
    "formula": "$E = -\\frac{d\\varphi}{dr}$",
    "name": "场强与电势关系",
    "usage": "任意"
  }
],

  // ===== 区块5：理解度自评 =====
  selfEval: [
  {
    "level": "A",
    "question": "我能熟练区分场强和电势",
    "description": "可以进入P30、P31学习"
  },
  {
    "level": "B",
    "question": "我知道公式但有时混淆",
    "description": "完成J级变形"
  },
  {
    "level": "C",
    "question": "我把E和φ混淆",
    "description": "重读「概念涌现」部分"
  }
],

  // ===== 关联链接 =====
  relatedModels: [
  "M23",
  "M24",
  "M25",
  "M26"
],
  crossLinks: [
  {
    "subject": "数学",
    "conceptName": "函数单调性",
    "relation": "电势随位置的变化趋势",
    "conceptId": ""
  }
],
}
