// P45 — 分子动理论
// 内容来源：docs/knowledge/physics/P45_分子动理论.md

import type { ConceptData } from './types'

export const P45: ConceptData = {
  id: 'P45',
  title: '分子动理论',
  subtitle: '热现象是大量分子无规则运动的宏观表现——温度是分子平均动能的量度。',
  module: '热学·光学·机械波',
  chapter: '热学基础',
  difficulty: 3,

  // ===== 区块1：前置知识检测 =====
  preCheck: [
  {
    "question": "单选 | 难度1   题目：关于温度的说法，正确的是",
    "options": [
      "温度是分子动能的总量",
      "温度是分子平均动能的量度",
      "温度高的物体分子运动一定快",
      "温度是分子势能的量度"
    ],
    "answer": "B",
    "explanation": "温度是大量分子的平均动能"
  },
  {
    "question": "单选 | 难度1   题目：关于布朗运动，说法正确的是",
    "options": [
      "布朗运动就是分子运动",
      "布朗运动证明温度越高分子运动越剧烈",
      "布朗运动在气体、液体、固体中都存在",
      "布朗运动与温度无关"
    ],
    "answer": "B",
    "explanation": "温度越高，布朗运动越剧烈"
  },
  {
    "question": "简答 | 难度1   题目：为什么说\"温度是大量分子平均动能的量度\"而不是\"每个分子的动能\"？",
    "options": [],
    "answer": "因为单个分子的动能随时变化，取平均才有意义。",
    "explanation": "统计平均的概念"
  }
],

  // ===== 区块2：叙事正文 =====
  narrative: {
  "context": "一杯热水和一杯冷水，区别在哪里？ 肉眼看不见，但本质是：**水分子的运动速度不同**。 温度越高，分子运动越剧烈。",
  "confusion": "很多学生认为\"温度高的物体每个分子都运动得快\"。 实际上： - 温度是**大量分子**的平均动能 - 有些分子可能比低温物体中的某些分子运动更快 - \"平均\"是关键",
  "experiment": "布朗运动： | 条件 | 颗粒运动情况 | |:---|:---| | 温度低 | 运动较弱 | | 温度高 | 运动剧烈 | | 颗粒小 | 运动明显 | 观察：温度越高，分子碰撞越剧烈",
  "concept": "分子动理论： **分子动理论**： - 物质由大量分子组成 - 分子永不停息地做无规则运动 - 分子间存在相互作用力 **温度**： $$T \\propto \\overline{E_k}$$ 温度是分子平均动能的量度",
  "derivation": "**1. 分子动能** 分子的平均动能$\\overline{E_k} \\propto T$ **2. 分子势能** 分子间存在势能，与距离有关 **3. 内能** $$E = \\overline{E_k} + \\overline{E_p}$$ **4. 阿伏加德罗常数** $$N_A = 6.02 \\times 10^{23} mol^{-1}$$",
  "transfer": "应用实例： **热膨胀**：温度升高，分子间距增大。 **扩散**：分子自发混合。 **布朗运动**：悬浮颗粒的无规则运动。 ---"
},

  // ===== 区块3：分层变形 =====
  variations: {
  "basic": [
    {
      "label": "例题1",
      "formula": "",
      "note": "$N = N_A = 6.02 \\times 10^{23}$｜阿伏加德罗常数"
    },
    {
      "label": "例题2",
      "formula": "",
      "note": "$\\overline{E_k} = \\frac{3}{2}kT = \\frac{3}{2} \\times 1.38 \\times 10^{-23} \\times 273 \\approx 5.6 \\times 10^{-21} J$｜温度与平均动能"
    }
  ],
  "advanced": [
    {
      "label": "例题1",
      "formula": "",
      "note": "理想气体内能只与温度有关，$E = \\frac{3}{2}RT$（单原子分子）｜内能公式"
    }
  ],
  "challenge": [
    {
      "label": "例题1",
      "formula": "",
      "note": "$f(v) = 4\\pi (\\frac{m}{2\\pi kT})^{3/2} v^2 e^{-mv^2/2kT}$｜统计分布"
    },
    {
      "label": "例题2",
      "formula": "",
      "note": "分子碰撞器壁产生压强，$p = \\frac{1}{3}n\\overline{E_k}$｜压强的微观本质"
    },
    {
      "label": "例题3",
      "formula": "",
      "note": "｜用实验验证理论"
    }
  ]
},

  // ===== 区块4：公式卡片 =====
  formulas: [
  {
    "formula": "$\\overline{E_k} = \\frac{3}{2}kT$",
    "name": "分子平均动能",
    "usage": "理想气体"
  },
  {
    "formula": "$N_A = 6.02 \\times 10^{23}$",
    "name": "阿伏加德罗常数",
    "usage": "任意"
  },
  {
    "formula": "$p = \\frac{1}{3}n\\overline{E_k}$",
    "name": "压强微观",
    "usage": "理想气体"
  }
],

  // ===== 区块5：理解度自评 =====
  selfEval: [
  {
    "level": "A",
    "question": "我能熟练用分子动理论解释热现象",
    "description": "可以进入P46学习"
  },
  {
    "level": "B",
    "question": "我知道概念但计算不熟",
    "description": "完成J级变形"
  },
  {
    "level": "C",
    "question": "我把温度和热量混淆",
    "description": "重读「概念涌现」部分"
  }
],

  // ===== 关联链接 =====
  relatedModels: [
  "M34",
  "M35"
],
  crossLinks: [
  {
    "subject": "化学",
    "conceptName": "布朗运动、扩散",
    "relation": "分子动理论的实验证据",
    "conceptId": ""
  }
],
}
