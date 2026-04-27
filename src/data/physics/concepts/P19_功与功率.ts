// P19 — 功与功率
// 内容来源：docs/knowledge/physics/P19_功与功率.md

import type { ConceptData } from './types'

export const P19: ConceptData = {
  id: 'P19',
  title: '功与功率',
  subtitle: '功是"力在空间上的累积效应"（$W=Fs\cos\theta$），功率是"做功的快慢"。',
  module: '能量与动量',
  chapter: '功和功率',
  difficulty: 3,

  // ===== 区块1：前置知识检测 =====
  preCheck: [
  {
    "question": "单选 | 难度1   题目：关于功的概念，以下说法正确的是",
    "options": [
      "有力作用在物体上，物体移动了距离，力就做功",
      "功是标量",
      "功的正负表示方向",
      "功的单位是瓦特"
    ],
    "answer": "B",
    "explanation": "功是标量，有大小无方向；A需要力和位移方向不垂直"
  },
  {
    "question": "单选 | 难度1   题目：水平拉力F=10N拉物体移动5m，若拉力的方向与水平夹角60°，则拉力做功是",
    "options": [
      "50J",
      "25J",
      "43.3J",
      "0"
    ],
    "answer": "B",
    "explanation": "$W = 10 \\times 5 \\times \\cos60^\\circ = 10 \\times 5 \\times 0.5 = 25J$"
  },
  {
    "question": "简答 | 难度1   题目：人提水桶水平行走，重力做功吗？为什么？",
    "options": [],
    "answer": "不做功。因为位移方向（水平）与重力方向（竖直）垂直，$\\cos90^\\circ = 0$。",
    "explanation": "做功需要力与位移不垂直"
  }
],

  // ===== 区块2：叙事正文 =====
  narrative: {
  "context": "你推箱子，箱子移动了，你的推力做了功。 但如果你推墙，墙没动，你的推力做功了吗？ **没有**！没有位移就没有功。",
  "confusion": "很多学生认为\"有力就一定做功\"。 实际上： - 推箱子动了：推力做正功 - 推墙不动：推力不做功 - 手提水桶水平走：重力不做功（因为位移方向与重力方向垂直） 关键：**做功需要两个条件：有力，且在力的方向上有位移**。",
  "experiment": "用实验验证功的计算： | 拉力F(N) | 位移s(m) | 夹角θ(°) | 功W=Fs·cosθ(J) | |:---|:---|:---|:---| | 10 | 5 | 0 | 50 | | 10 | 5 | 30 | 43.3 | | 10 | 5 | 60 | 25 | | 10 | 5 | 90 | 0 | | 10 | 5 | 180 | -50 | 观察： - θ=0°：做正功（力推动物体） - θ=90°：不做功（力与位移垂直） - θ=180°：做负功（力阻碍运动）",
  "concept": "从实验提炼功的定义： **功的计算公式**： $$W = Fs\\cos\\theta$$ - $F$：力的大小 - $s$：位移大小 - $\\theta$：力与位移的夹角 **功的正负**： - $W > 0$：力做正功（推动物体） - $W = 0$：力不做功（垂直或无位移） - $W < 0$：力做负功（阻碍运动） **功率**： $$P = \\frac{W}{t} = Fv\\cos\\theta$$ 表示做功的快慢。",
  "derivation": "功的公式推导： **1. 恒力做功** 当力$F$恒定，位移$s$为直线： $$W = Fs\\cos\\theta$$ 这是功的基本定义。 **2. 变力做功** 当力随位移变化时，需要积分： $$W = \\int F \\cdot ds$$ 高中阶段只学恒力做功。 **3. 功率公式** 功率是单位时间做的功： $$P = \\frac{W}{t} = \\frac{Fs\\cos\\theta}{t} = Fv\\cos\\theta$$ 当$v$是瞬时速度时，$P$是瞬时功率。 **4. 常见不做功的情况** - 力与位移垂直：圆周运动的向心力 - 静摩擦力不一定不做功：传送带带动物体前进时静摩擦力做正功（注意：只有力与位移垂直时才不做功）",
  "transfer": "功在生活中无处不在： **汽车爬坡**：需要更大的牵引力（$P = Fv$），发动机功率一定时，上坡需要减速以获得更大牵引力。 **人爬楼**：人克服重力做功，$W = mgh$。 **风力发电**：风对风车做功，功率$P = \\frac{1}{2}\\rho A v^3$（与速度立方成正比）。 ---"
},

  // ===== 区块3：分层变形 =====
  variations: {
  "basic": [
    {
      "label": "例题1",
      "formula": "",
      "note": "$W = Fs = 50 \\times 10 = 500J$｜夹角0°时cosθ=1"
    },
    {
      "label": "例题2",
      "formula": "",
      "note": "$W = mgh = 2 \\times 10 \\times 5 = 100J$｜重力做功W=mgh"
    }
  ],
  "advanced": [
    {
      "label": "例题1",
      "formula": "",
      "note": "(1) 重力沿斜面分力$F_1 = mg\\sin30^\\circ = 10N$，$W_1 = F_1 s = 10 \\times 10 = -100J$（负功）   (2) 支持力垂直斜面，与位移垂直，$W_2 = 0$｜分解力到位移方向"
    }
  ],
  "challenge": [
    {
      "label": "例题1",
      "formula": "",
      "note": "弹力是变力，$F = kx$。变力做功$W = \\int_0^x kx' dx' = \\frac{1}{2}kx^2$｜变力做功用积分或图像面积"
    },
    {
      "label": "例题2",
      "formula": "",
      "note": "$P = Fv$，当$F = f$时速度最大，$v_{max} = P/f$｜匀速时牵引力=阻力"
    },
    {
      "label": "例题3",
      "formula": "",
      "note": "$P = Fv = mg\\sin\\theta \\cdot v$（忽略摩擦）｜功率与力、速度的关系"
    }
  ]
},

  // ===== 区块4：公式卡片 =====
  formulas: [
  {
    "formula": "$W = Fs\\cos\\theta$",
    "name": "功的定义式",
    "usage": "恒力"
  },
  {
    "formula": "$P = W/t$",
    "name": "平均功率",
    "usage": "任意"
  },
  {
    "formula": "$P = Fv\\cos\\theta$",
    "name": "瞬时功率",
    "usage": "任意"
  },
  {
    "formula": "$W = mgh$",
    "name": "重力做功",
    "usage": "竖直方向"
  }
],

  // ===== 区块5：理解度自评 =====
  selfEval: [
  {
    "level": "A",
    "question": "我能熟练计算功和功率，理解正负功的意义",
    "description": "可以进入P20动能定理学习"
  },
  {
    "level": "B",
    "question": "我知道公式但有时忘记考虑夹角",
    "description": "完成J级变形，确认变角度分析"
  },
  {
    "level": "C",
    "question": "我把功和功率混淆",
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
    "subject": "数学",
    "conceptName": "点积",
    "relation": "$W = \\vec{F} \\cdot \\vec{s}$",
    "conceptId": ""
  }
],
}
