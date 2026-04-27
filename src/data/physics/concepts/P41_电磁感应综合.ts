// P41 — 电磁感应中的电路与力学综合
// 内容来源：docs/knowledge/physics/P41_电磁感应综合.md

import type { ConceptData } from './types'

export const P41: ConceptData = {
  id: 'P41',
  title: '电磁感应中的电路与力学综合',
  subtitle: '电磁感应中的力学问题=电路+力学+能量的综合——安培力、感应电流、能量转化交织。',
  module: '电磁学',
  chapter: '电磁感应综合',
  difficulty: 3,

  // ===== 区块1：前置知识检测 =====
  preCheck: [
  {
    "question": "单选 | 难度1   题目：关于电磁感应中的能量，说法正确的是",
    "options": [
      "感应电流产生不需要能量",
      "感应电流的功率来自机械能",
      "安培力总是做正功",
      "能量不守恒"
    ],
    "answer": "B",
    "explanation": "感应电流的功率来自机械能转化"
  },
  {
    "question": "单选 | 难度1   题目：导体棒在磁场中切割，电阻R=1Ω，速度v=10m/s，B=1T，L=1m。求热功率。   解：$e = BLv = 10V$，$I = 10A$，$P = I^2R = 100W$   核心点：能量转化",
    "options": [],
    "answer": "",
    "explanation": ""
  },
  {
    "question": "简答 | 难度1   题目：为什么磁铁落地比自由落体慢？",
    "options": [],
    "answer": "因为磁铁落地过程中，导体闭合回路产生感应电流，感应电流的磁场阻碍磁铁运动（楞次定律），安培力做负功。",
    "explanation": "电磁阻尼"
  }
],

  // ===== 区块2：叙事正文 =====
  narrative: {
  "context": "导体棒在磁场中切割磁感线，产生感应电流。 这个电流在磁场中又受到安培力。 力学、电路、能量全部交织在一起——这就是电磁感应综合。",
  "confusion": "很多学生认为\"导体棒最终会停下来\"。 实际上： - 如果只有安培力做负功，速度减为零后停止 - 如果有外力维持，可能匀速（安培力=外力）",
  "experiment": "分析导体棒运动： | 情形 | 最终状态 | 能量转化 | |:---|:---|:---| | 只受安培力 | 速度减为0 | 动能→电能→内能 | | 有恒定外力 | 匀速（a=0） | 外力功=焦耳热 | | 只受摩擦+安培力 | 匀速 | 摩擦力=安培力 |",
  "concept": "电磁感应综合： **电路**： $$e = BLv, \\quad I = e/R$$ **力学**： $$F_{安} = BIL = \\frac{B^2L^2v}{R}$$ **能量**： $$P_{热} = I^2R = \\frac{B^2L^2v^2}{R}$$",
  "derivation": "**1. 动力学分析** $$ma = F_{外} - F_{安}$$ **2. 能量转化** $$F_{外}s = \\frac{1}{2}mv^2 + I^2Rt$$ **3. 稳态分析** 当$a=0$时：$F_{外} = F_{安}$",
  "transfer": "应用实例： **磁阻尼**：电磁铁中导体棒的减速。 **电磁刹车**：利用感应电流制动。 **发电机**：机械能转化为电能。 ---"
},

  // ===== 区块3：分层变形 =====
  variations: {
  "basic": [
    {
      "label": "例题1",
      "formula": "",
      "note": "$a = F_{安}/m = B^2L^2v/Rm = 10 m/s^2$｜$a = B^2L^2v/(mR)$"
    },
    {
      "label": "例题2",
      "formula": "",
      "note": "用能量转化：$\\frac{1}{2}mv_0^2 = mgh$   $h = v_0^2/2g = 5m$｜能量守恒"
    }
  ],
  "advanced": [
    {
      "label": "例题1",
      "formula": "",
      "note": "$F = F_{安} = B^2L^2v/R$   $P_{外} = Fv = B^2L^2v^2/R$   $P_{热} = I^2R = B^2L^2v^2/R$｜功率平衡"
    }
  ],
  "challenge": [
    {
      "label": "例题1",
      "formula": "",
      "note": "进入磁场前加速，进入后受安培力减速，最终匀速｜动态分析"
    },
    {
      "label": "例题2",
      "formula": "",
      "note": "系统动量守恒，能量转化复杂｜双棒系统"
    },
    {
      "label": "例题3",
      "formula": "",
      "note": "｜实验验证"
    }
  ]
},

  // ===== 区块4：公式卡片 =====
  formulas: [
  {
    "formula": "$e = BLv$",
    "name": "感应电动势",
    "usage": "切割"
  },
  {
    "formula": "$I = e/R$",
    "name": "电路",
    "usage": "闭合"
  },
  {
    "formula": "$F_{安} = BIL$",
    "name": "安培力",
    "usage": "任意"
  },
  {
    "formula": "$P = I^2R$",
    "name": "热功率",
    "usage": "任意"
  }
],

  // ===== 区块5：理解度自评 =====
  selfEval: [
  {
    "level": "A",
    "question": "我能熟练分析电磁感应综合问题",
    "description": "电磁学板块完成"
  },
  {
    "level": "B",
    "question": "我知道公式但综合分析不熟",
    "description": "完成J级变形"
  },
  {
    "level": "C",
    "question": "我把力学和电路混淆",
    "description": "重读「概念涌现」部分"
  }
],

  // ===== 关联链接 =====
  relatedModels: [
  "M31",
  "M32"
],
  crossLinks: [
  {
    "subject": "数学",
    "conceptName": "变化率",
    "relation": "磁通量变化率",
    "conceptId": ""
  }
],
}
