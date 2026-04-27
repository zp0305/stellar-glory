// P25 — 动量定理
// 内容来源：docs/knowledge/physics/P25_动量定理.md

import type { ConceptData } from './types'

export const P25: ConceptData = {
  id: 'P25',
  title: '动量定理',
  subtitle: '合外力的冲量=动量的变化——力的时间累积效果改变物体的运动状态。',
  module: '能量与动量',
  chapter: '动量定理',
  difficulty: 3,

  // ===== 区块1：前置知识检测 =====
  preCheck: [
  {
    "question": "单选 | 难度1   题目：动量定理的表达式是",
    "options": [
      "$W = \\Delta E_k$",
      "$I = \\Delta p$",
      "$F = ma$",
      "$p = mv$"
    ],
    "answer": "B",
    "explanation": "动量定理：冲量等于动量变化"
  },
  {
    "question": "单选 | 难度1   题目：质量1kg的物体，速度从10m/s减到5m/s，方向不变。动量变化是",
    "options": [
      "5 kg·m/s",
      "-5 kg·m/s",
      "15 kg·m/s",
      "-15 kg·m/s"
    ],
    "answer": "B",
    "explanation": "$\\Delta p = m(v_2 - v_1) = 1 \\times (5-10) = -5$"
  },
  {
    "question": "简答 | 难度1   题目：为什么接球时手要向后收？",
    "options": [],
    "answer": "延长作用时间，根据$F = \\Delta p / \\Delta t$，时间越长力越小。",
    "explanation": "动量定理的应用"
  }
],

  // ===== 区块2：叙事正文 =====
  narrative: {
  "context": "你接一个飞来的球，手会向后收一下。 为什么不直接硬接？因为这样延长了作用时间，减小了冲击力。 这个现象可以用**动量定理**解释。",
  "confusion": "很多学生认为\"动量定理只能用于碰撞\"。 实际上： - 任何有受力、有速度变化的过程都适用 - 跳高运动员落垫、飞船返回大气层 - 只要有$\\Delta p$，就有冲量",
  "experiment": "用实验验证动量定理： | 质量m(kg) | 初始v(m/s) | 末态v(m/s) | 动量变化Δp | 冲量I(Ft) | |:---|:---|:---|:---|:---| | 1 | 10 | 0 | -10 | -10 | | 1 | 10 | 5 | -5 | -5 | | 2 | 10 | 0 | -20 | -20 | 验证：$I = \\Delta p$",
  "concept": "动量定理： **表达式**： $$I = \\Delta p = mv_2 - mv_1$$ **意义**： - 冲量（力在时间上的累积）等于动量的变化 - 不管力的细节，只看初末状态",
  "derivation": "从牛顿第二定律推导： **1. 牛顿第二定律** $$F = ma = m\\frac{\\Delta v}{\\Delta t}$$ **2. 变形** $$F\\Delta t = m\\Delta v$$ **3. 得到动量定理** $$I = \\Delta p$$ 关键：**不涉及中间过程**，只看初末状态！",
  "transfer": "动量定理应用： **安全气囊**：延长作用时间，减小冲击力。 **跳高垫子**：运动员落垫，垫子延长作用时间。 **缓冲包装**：泡沫塑料通过延长撞击时间保护物品。 ---"
},

  // ===== 区块3：分层变形 =====
  variations: {
  "basic": [
    {
      "label": "例题1",
      "formula": "",
      "note": "$I = Ft = 20 N·s$   $\\Delta p = 20 = m(v - 5)$   $20 = 2(v-5)$，得$v = 15 m/s$｜$I = \\Delta p$"
    },
    {
      "label": "例题2",
      "formula": "",
      "note": "$I = \\Delta p = 0 - 10 = -10 N·s$（负号表示冲量方向与初速度相反）｜注意方向"
    }
  ],
  "advanced": [
    {
      "label": "例题1",
      "formula": "",
      "note": "$I = \\Delta p = \\frac{1}{2}F_0 t_0$（$F-t$图面积）｜图像面积"
    }
  ],
  "challenge": [
    {
      "label": "例题1",
      "formula": "",
      "note": "$\\Delta v = \\sqrt{2gh} = \\sqrt{2 \\times 10 \\times 2} = \\sqrt{40} \\approx 6.32 m/s$，$\\Delta p = m\\Delta v = 60 \\times 6.32 \\approx 379 kg·m/s$   $F = \\Delta p / \\Delta t = 379/0.1 = 3790 N$ 若落在垫子上作用时间延长到1s，$F = 379 N$（减小到约1/10）｜延长作用时间减小力"
    },
    {
      "label": "例题2",
      "formula": "",
      "note": "$\\Delta p = \\rho Q v$，$F = \\rho Q v^2 = 1000 \\times 0.1 \\times 25 = 2500 N$｜连续介质的动量定理"
    },
    {
      "label": "例题3",
      "formula": "",
      "note": "｜用实验验证"
    }
  ]
},

  // ===== 区块4：公式卡片 =====
  formulas: [
  {
    "formula": "$I = \\Delta p$",
    "name": "动量定理",
    "usage": "任意过程"
  },
  {
    "formula": "$I = Ft$",
    "name": "冲量定义",
    "usage": "恒力"
  },
  {
    "formula": "$F = \\Delta p / \\Delta t$",
    "name": "动量定理变形",
    "usage": "变力"
  }
],

  // ===== 区块5：理解度自评 =====
  selfEval: [
  {
    "level": "A",
    "question": "我能熟练使用动量定理分析缓冲问题",
    "description": "可以进入P26动量守恒学习"
  },
  {
    "level": "B",
    "question": "我知道公式但计算经常出错",
    "description": "完成J级变形，确认方向"
  },
  {
    "level": "C",
    "question": "我把动量定理和动能定理混淆",
    "description": "重读「概念涌现」部分"
  }
],

  // ===== 关联链接 =====
  relatedModels: [
  "M19"
],
  crossLinks: [
  {
    "subject": "技术",
    "conceptName": "安全气囊",
    "relation": "延长作用时间减小力",
    "conceptId": ""
  }
],
}
