// P50 — 机械波
// 内容来源：docs/knowledge/physics/P50_机械波.md

import type { ConceptData } from './types'

export const P50: ConceptData = {
  id: 'P50',
  title: '机械波',
  subtitle: '波是"振动在介质中的传播"——传播的是能量和信息，介质本身不随波迁移。',
  module: '热学·光学·机械波',
  chapter: '波动',
  difficulty: 3,

  // ===== 区块1：前置知识检测 =====
  preCheck: [
  {
    "question": "单选 | 难度1   题目：关于机械波，说法正确的是",
    "options": [
      "波传播时介质移动",
      "波长等于两个相邻波峰的距离",
      "波速与频率成正比",
      "频率由介质决定"
    ],
    "answer": "B",
    "explanation": "$\\lambda$是相邻同相位点的距离"
  },
  {
    "question": "单选 | 难度1   题目：波长$\\lambda=2m$，频率$f=5Hz$的波，波速是",
    "options": [
      "10m/s",
      "2.5m/s",
      "7m/s",
      "3m/s"
    ],
    "answer": "A",
    "explanation": "$v = \\lambda f = 2 \\times 5 = 10m/s$"
  },
  {
    "question": "简答 | 难度1   题目：为什么障碍物后的区域能听到声音（绕射）？",
    "options": [],
    "answer": "因为声波波长较长，能发生明显衍射，绕过障碍物传播。",
    "explanation": "衍射现象"
  }
],

  // ===== 区块2：叙事正文 =====
  narrative: {
  "context": "把石子扔进湖里，水面泛起涟漪，向外扩散。 波是什么在移动？是水在移动吗？ 不是！是**振动状态**在移动。",
  "confusion": "很多学生认为\"波传播时介质也跟着移动\"。 实际上： - 介质中的质点只在平衡位置附近振动 - 波传播的是能量和信息，不是物质",
  "experiment": "绳波传播： | 时间t(s) | 波形 | |:---|:---| | 0 | 向上凸起 | | 0.25 | 平坦 | | 0.5 | 向下凹陷 | 观察：波形向前传播，但质点上下振动",
  "concept": "机械波： **横波**：振动方向垂直于传播方向（如绳波） **纵波**：振动方向平行于传播方向（如声波） **波长$\\lambda$**：相邻同相位点的距离 **波速$v$**： $$v = \\lambda f$$",
  "derivation": "**1. 波的传播** $$v = \\lambda f$$ **2. 周期和频率** $T = 1/f$，由波源决定 **3. 干涉** 两列波相遇叠加：相长干涉和相消干涉 **4. 衍射** 波遇到障碍物或孔时绕射：$\\lambda$越大越明显",
  "transfer": "应用实例： **声波**：空气中传播的纵波。 **地震波**：S波和P波的传播。 **超声波**：医疗和工业应用。 ---"
},

  // ===== 区块3：分层变形 =====
  variations: {
  "basic": [
    {
      "label": "例题1",
      "formula": "",
      "note": "$\\lambda = v/f = 340/512 \\approx 0.66m$｜$v = \\lambda f$"
    },
    {
      "label": "例题2",
      "formula": "",
      "note": "$f = 1/T = 50Hz$，$\\lambda = v/f = 2m$｜周期-频率-波长"
    }
  ],
  "advanced": [
    {
      "label": "例题1",
      "formula": "",
      "note": "计算光程差$\\delta$，判断$\\delta = k\\lambda$（加强）或$\\delta = (2k+1)\\lambda/2$（减弱）｜干涉条件"
    }
  ],
  "challenge": [
    {
      "label": "例题1",
      "formula": "",
      "note": "$f' = f \\cdot \\frac{v - v_0}{v}$｜频率变化"
    },
    {
      "label": "例题2",
      "formula": "",
      "note": "节点处振幅为零，波腹处振幅最大｜驻波原理"
    },
    {
      "label": "例题3",
      "formula": "",
      "note": "｜用波动测声速"
    }
  ]
},

  // ===== 区块4：公式卡片 =====
  formulas: [
  {
    "formula": "$v = \\lambda f$",
    "name": "波速公式",
    "usage": "任意"
  },
  {
    "formula": "$T = 1/f$",
    "name": "周期频率",
    "usage": "任意"
  },
  {
    "formula": "$\\delta = k\\lambda$",
    "name": "加强条件",
    "usage": "干涉"
  }
],

  // ===== 区块5：理解度自评 =====
  selfEval: [
  {
    "level": "A",
    "question": "我能熟练分析波动问题",
    "description": "机械波板块完成"
  },
  {
    "level": "B",
    "question": "我知道公式但干涉分析不熟",
    "description": "完成J级变形"
  },
  {
    "level": "C",
    "question": "我把波和质点运动混淆",
    "description": "重读「概念涌现」部分"
  }
],

  // ===== 关联链接 =====
  relatedModels: [
  "M37"
],
  crossLinks: [
  {
    "subject": "技术",
    "conceptName": "声纳、地震勘探",
    "relation": "机械波的工程应用",
    "conceptId": ""
  }
],
}
