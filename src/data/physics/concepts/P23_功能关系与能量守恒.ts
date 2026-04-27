// P23 — 功能关系与能量守恒
// 内容来源：docs/knowledge/physics/P23_功能关系与能量守恒.md

import type { ConceptData } from './types'

export const P23: ConceptData = {
  id: 'P23',
  title: '功能关系与能量守恒',
  subtitle: '做功是能量转化的量度——重力做功=势能变化、合外力做功=动能变化、非重力做功=机械能变化。',
  module: '能量与动量',
  chapter: '功能关系',
  difficulty: 3,

  // ===== 区块1：前置知识检测 =====
  preCheck: [
  {
    "question": "单选 | 难度1   题目：关于功能关系的说法，正确的是",
    "options": [
      "重力做功等于势能增加",
      "合外力做功等于动能增加",
      "摩擦力做功等于热量",
      "拉力做功等于机械能增加"
    ],
    "answer": "B",
    "explanation": "$W_{合} = \\Delta E_k$"
  },
  {
    "question": "单选 | 难度1   题目：物体在粗糙水平面上滑动，有摩擦力做功。机械能变化等于",
    "options": [
      "摩擦力做功",
      "摩擦力做功的负值",
      "零",
      "重力做功"
    ],
    "answer": "B",
    "explanation": "$W_{非重力} = \\Delta E_{机械}$，摩擦力是非重力"
  },
  {
    "question": "简答 | 难度1   题目：为什么\"摩擦力做功一定产生热量\"是错的？",
    "options": [],
    "answer": "因为静摩擦力做功不产生热量。只有相对滑动的滑动摩擦力才生热，$Q = f \\cdot s_{相对}$。",
    "explanation": "区分静摩擦和滑动摩擦"
  }
],

  // ===== 区块2：叙事正文 =====
  narrative: {
  "context": "你推箱子，箱子加速。你对箱子做功，箱子的动能增加了。 这个过程中，**功是能量转化的量度**——你做的功，等于箱子动能的增加。",
  "confusion": "很多学生认为\"摩擦力做的功等于产生的热量\"。 实际上： - 只有**滑动摩擦力**做功才产生热量 - 静摩擦力可以做功，但不产生热量（因为接触面无相对滑动，$s_{相对}=0$） - 公式：$Q = f \\cdot s_{相对}$，$s_{相对}$是相对滑动的距离 另一个困惑：\"能量守恒不是无条件吗？\"——机械能守恒有条件（只有重力/弹力做功），但能量守恒是普适的。",
  "experiment": "用实验验证功能关系： | 过程 | 重力做功W_G(J) | 势能变化ΔE_p(J) | 动能变化ΔE_k(J) | 机械能变化ΔE(J) | |:---|:---|:---|:---|:---| | 下落h | mgh | -mgh | mgh | 0 | | 上抛h | -mgh | mgh | -mgh | 0 | | 水平面滑动 | 0 | 0 | -fs（摩擦生热） | -fs | 观察：$W = \\Delta E$——功能关系！",
  "concept": "从实验提炼功能关系： **功能关系**： $$W_{合} = \\Delta E_k$$ $$W_G = -\\Delta E_p$$ $$W_{非重力} = \\Delta E_{机械}$$ **能量守恒**： $$E_{总} = \\text{常数}$$ 能量不会凭空产生或消失。",
  "derivation": "功能关系的推导： **1. 动能定理** $$W_{合} = \\Delta E_k$$ **2. 重力做功与势能** 重力是保守力，做功与路径无关，只与起点和终点有关： $$W_G = -\\Delta E_p$$ **3. 机械能变化** $$\\Delta E = \\Delta E_k + \\Delta E_p = W_{非重力}$$ **4. 能量守恒** 对于封闭系统： $$E_{机械} + E_{内} + E_{其他} = \\text{常数}$$",
  "transfer": "功能关系在生活中应用： **摩擦生热**：滑动摩擦生热$Q = f \\cdot s_{相对}$，这部分能量来自机械能。 **蹦极**：考虑空气阻力时，机械能减少，转化为内能。 **摩擦生电**：机械能转化为电能（摩擦起电）。 ---"
},

  // ===== 区块3：分层变形 =====
  variations: {
  "basic": [
    {
      "label": "例题1",
      "formula": "",
      "note": "(1) $W_G = mgh = 2 \\times 10 \\times 10 = 200J$   (2) $\\Delta E_k = 200J$（等于重力做功）｜功能关系"
    },
    {
      "label": "例题2",
      "formula": "",
      "note": "$W_{合} = (10-2) \\times 5 = 40J$   $\\Delta E_k = 40J$｜合外力做功"
    }
  ],
  "advanced": [
    {
      "label": "例题1",
      "formula": "",
      "note": "(1) $W_f = -\\mu mg \\cdot s = -2 \\times 10 = -20J$   (2) $Q = f \\cdot s = \\mu mg \\cdot s = 20J$｜$Q = W_f$（数值相等）"
    }
  ],
  "challenge": [
    {
      "label": "例题1",
      "formula": "",
      "note": "子弹动能 → 木块动能 + 内能（摩擦生热）   $Q = \\Delta E_{机械}$｜非保守力做功"
    },
    {
      "label": "例题2",
      "formula": "",
      "note": "$E_{损失} = (\\frac{1}{2}m_1v_1^2 + \\frac{1}{2}m_2v_2^2) - \\frac{1}{2}(m_1+m_2)v'^2$（初态动能减末态动能）   这部分转化为内能｜动量守恒+能量守恒"
    },
    {
      "label": "例题3",
      "formula": "",
      "note": "｜用实验验证功能关系"
    }
  ]
},

  // ===== 区块4：公式卡片 =====
  formulas: [
  {
    "formula": "$W_{合} = \\Delta E_k$",
    "name": "动能定理",
    "usage": "任意过程"
  },
  {
    "formula": "$W_G = -\\Delta E_p$",
    "name": "重力做功",
    "usage": "任意过程"
  },
  {
    "formula": "$W_{非重力} = \\Delta E_{机械}$",
    "name": "功能原理",
    "usage": "任意过程"
  },
  {
    "formula": "$Q = f \\cdot s_{相对}$",
    "name": "摩擦生热",
    "usage": "滑动摩擦"
  },
  {
    "formula": "$E_{总} = \\text{常数}$",
    "name": "能量守恒",
    "usage": "封闭系统"
  }
],

  // ===== 区块5：理解度自评 =====
  selfEval: [
  {
    "level": "A",
    "question": "我能熟练使用功能关系分析能量转化",
    "description": "可以进入动量板块学习"
  },
  {
    "level": "B",
    "question": "我知道公式但有时混淆应用场景",
    "description": "完成J级变形，确认摩擦生热"
  },
  {
    "level": "C",
    "question": "我把各种功能关系混淆",
    "description": "重读「概念涌现」部分"
  }
],

  // ===== 关联链接 =====
  relatedModels: [
  "M16",
  "M17",
  "M18"
],
  crossLinks: [
  {
    "subject": "化学",
    "conceptName": "能量守恒",
    "relation": "热力学第一定律",
    "conceptId": ""
  }
],
}
