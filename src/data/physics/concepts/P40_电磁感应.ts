// P40 — 电磁感应（法拉第定律·楞次定律）
// 内容来源：docs/knowledge/physics/P40_电磁感应.md

import type { ConceptData } from './types'

export const P40: ConceptData = {
  id: 'P40',
  title: '电磁感应（法拉第定律·楞次定律）',
  subtitle: '变化的磁场产生电场——法拉第定律$e = -\frac{d\Phi}{dt}$，楞次定律判断方向。',
  module: '电磁学',
  chapter: '电磁感应',
  difficulty: 3,

  // ===== 区块1：前置知识检测 =====
  preCheck: [
  {
    "question": "单选 | 难度1\r 题目：关于电磁感应的说法，正确的是",
    "options": [
      "导体切割磁感线一定产生感应电流",
      "磁通量变化产生感应电动势",
      "感应电流方向与磁通量方向相同",
      "磁通量越大感应电动势越大"
    ],
    "answer": "B",
    "explanation": "磁通量变化产生感应电动势，但只有闭合回路才有感应电流"
  },
  {
    "question": "单选 | 难度2  \r 题目：线圈磁通量1秒内从0.1Wb增加到0.3Wb，求感应电动势。  \r 解：$e = -\\Delta\\Phi/\\Delta t = -(0.3-0.1)/1 = -0.2V$（大小0.2V）  \r 核心点：法拉第定律",
    "options": [],
    "answer": "",
    "explanation": ""
  },
  {
    "question": "简答 | 难度1  \r 题目：什么是楞次定律？",
    "options": [],
    "answer": "感应电流的磁场总是阻碍原磁通量的变化。具体表现为\"来拒去留\"。",
    "explanation": "阻碍而非阻止"
  }
],

  // ===== 区块2：叙事正文 =====
  narrative: {
  "context": "（100-150字）\r \r 磁铁穿过线圈时，电流表指针转动。\r \r 磁铁不动时指针不转动。\r \r 这种\"变化的磁场产生电流\"的现象叫做**电磁感应**。",
  "confusion": "（150-200字）\r \r 很多学生认为\"有磁通量变化就有感应电流\"。\r \r 实际上：\r - 需要**闭合电路**\r - 磁通量变化产生的是**感应电动势**，不是电流\r - 只有电路闭合才有电流",
  "experiment": "（200-250字)\r \r 用实验验证电磁感应：\r \r | 磁铁运动 | 电流表偏转 |\r |:---|:---|\r | 插入线圈 | 偏转 |\r | 静止在线圈中 | 不偏转 |\r | 拔出线圈 | 反向偏转 |\r \r 观察：只有磁通量**变化**时才有感应电流",
  "concept": "（150-200字)\r \r 电磁感应：\r \r **法拉第定律**：\r $$e = -\\frac{d\\Phi}{dt}$$\r \r - 感应电动势\r - 负号表示方向的特殊性\r \r **楞次定律**：\r 感应电流的磁场总是**阻碍**原磁通量的变化",
  "derivation": "（300-400字)\r \r **1. 法拉第定律**\r $$e = -\\frac{d\\Phi}{dt}$$\r \r **2. 方向判断**\r 用楞次定律：感应电流的磁场阻碍变化方向\r \r **3. 特殊情况**\r 线圈平动切割磁感线：\r $$e = BLv$$\r \r **4. 自感**\r 线圈本身电流变化产生的感应：\r $$e = -L\\frac{dI}{dt}$$",
  "transfer": "（150-200字)\r \r 应用实例：\r \r **发电机**：机械能转化为电能。\r \r **变压器**：利用互感改变电压。\r \r **电感线圈**：阻碍电流变化。\r \r ---"
},

  // ===== 区块3：分层变形 =====
  variations: {
  "basic": [
    {
      "label": "例题1",
      "formula": "",
      "note": "$\\Delta\\Phi = \\Delta B \\cdot S = 0.3 \\times 0.1 = 0.03Wb$  \r $e = -\\Delta\\Phi/\\Delta t = -0.3V$（大小0.3V）｜$e = -d\\Phi/dt$"
    },
    {
      "label": "例题2",
      "formula": "",
      "note": "$e = BLv = 0.4 \\times 0.5 \\times 10 = 2V$｜切割公式"
    }
  ],
  "advanced": [
    {
      "label": "例题1",
      "formula": "",
      "note": "用楞次定律，感应电流产生的磁场阻碍磁通增加，所以磁场方向与磁铁相反｜楞次定律应用"
    }
  ],
  "challenge": [
    {
      "label": "例题1",
      "formula": "",
      "note": "断开时线圈产生自感电动势维持电流，$e = -L\\frac{dI}{dt}$方向与原电流相同使灯泡闪亮｜自感"
    },
    {
      "label": "例题2",
      "formula": "",
      "note": "$U_2/U_1 = N_2/N_1$，$U_2 = 440V$｜变压器原理"
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
    "formula": "$e = -d\\Phi/dt$",
    "name": "法拉第定律",
    "usage": "任意"
  },
  {
    "formula": "$e = BLv\\sin\\theta$",
    "name": "切割公式",
    "usage": "切割磁感线"
  },
  {
    "formula": "$e = -L\\frac{dI}{dt}$",
    "name": "自感电动势",
    "usage": "自感"
  }
],

  // ===== 区块5：理解度自评 =====
  selfEval: [
  {
    "level": "A",
    "question": "我能熟练分析电磁感应问题",
    "description": "可以进入P41学习"
  },
  {
    "level": "B",
    "question": "我知道公式但方向判断不熟",
    "description": "完成J级变形"
  },
  {
    "level": "C",
    "question": "我把感应电动势和电流混淆",
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
    "subject": "技术",
    "conceptName": "发电机",
    "relation": "发电原理",
    "conceptId": ""
  }
],
}
