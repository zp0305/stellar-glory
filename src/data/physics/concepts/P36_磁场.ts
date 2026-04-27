// P36 — 磁场（磁感应强度·安培力）
// 内容来源：docs/knowledge/physics/P36_磁场.md

import type { ConceptData } from './types'

export const P36: ConceptData = {
  id: 'P36',
  title: '磁场（磁感应强度·安培力）',
  subtitle: '磁场是"运动电荷周围的一种物质"——磁感应强度描述磁场的强弱，方向规定为小磁针N极所指方向。',
  module: '电磁学',
  chapter: '磁场基础',
  difficulty: 3,

  // ===== 区块1：前置知识检测 =====
  preCheck: [
  {
    "question": "单选 | 难度1   题目：关于磁感应强度的说法，正确的是",
    "options": [
      "磁感应强度是标量",
      "磁感应强度方向与小磁针N极方向相同",
      "B与F成正比",
      "B与I成反比"
    ],
    "answer": "B",
    "explanation": "磁感应强度是矢量"
  },
  {
    "question": "单选 | 难度1   题目：长度为0.1m的导线通有电流1A，放在B=0.5T的磁场中（与磁场垂直）。求安培力。   解：$F = BIL = 0.5 \\times 1 \\times 0.1 = 0.05N$   核心点：$F = BIL$",
    "options": [],
    "answer": "",
    "explanation": ""
  },
  {
    "question": "简答 | 难度1   题目：静止的电荷能产生磁场吗？为什么？",
    "options": [],
    "answer": "不能。磁场由运动电荷（电流）产生，静止电荷只产生电场。",
    "explanation": "磁场产生条件"
  }
],

  // ===== 区块2：叙事正文 =====
  narrative: {
  "context": "磁铁能吸引铁屑。 这种\"看不见的力\"从哪里来？来自**磁场**。 磁场和电场一样，是一种看不见的物质。",
  "confusion": "很多学生混淆磁场和电场。 实际上： - 电场由电荷产生 - 磁场由**运动电荷**（电流）产生 - 静止电荷不产生磁场",
  "experiment": "用磁铁实验： | 磁铁与铁屑距离 | 吸引铁屑数量 | |:---|:---| | 1cm | 很多 | | 5cm | 较少 | | 10cm | 很少 | 观察：磁场随距离减弱",
  "concept": "磁场： **磁感应强度**： $$B = \\frac{F}{IL}$$ - 矢量，方向为小磁针N极所指 - 单位：特斯拉（T） **磁通量**： $$\\Phi = BS$$ - 标量，单位：韦伯（Wb）",
  "derivation": "**1. 安培力** $$F = BIL\\sin\\theta$$ - $\\theta$是$B$与$I$的夹角 **2. 左手定则** 判断安培力方向：左手四指指向电流，磁感线穿入手心，拇指指向受力方向 **3. 磁场产生** 电流周围产生磁场： - 直导线：$B = \\frac{\\mu_0 I}{2\\pi r}$ - 环形电流：$B = \\frac{\\mu_0 I}{2r}$",
  "transfer": "应用实例： **电动机**：利用安培力转动。 **磁悬浮列车**：利用磁力悬浮。 **电磁铁**：利用电流产生磁场。 ---"
},

  // ===== 区块3：分层变形 =====
  variations: {
  "basic": [
    {
      "label": "例题1",
      "formula": "",
      "note": "$F = BIL = 0.2 \\times 5 \\times 0.5 = 0.5N$｜安培力公式"
    },
    {
      "label": "例题2",
      "formula": "",
      "note": "$F = BIL\\sin\\theta = 0.2 \\times 2 \\times 0.3 \\times \\sin60° = 0.06\\sqrt{3} \\approx 0.104N$｜安培力公式，注意$\\theta$是导线与磁场方向的夹角"
    }
  ],
  "advanced": [
    {
      "label": "例题1",
      "formula": "",
      "note": "用左手定则｜左手定则"
    }
  ],
  "challenge": [
    {
      "label": "例题1",
      "formula": "",
      "note": "每根导线在另一根处产生磁场，利用$F = BIL$分析｜电流间的相互作用"
    },
    {
      "label": "例题2",
      "formula": "",
      "note": "$F = 0$，$M = m \\times B$（力矩）｜磁力矩"
    },
    {
      "label": "例题3",
      "formula": "",
      "note": "｜磁场测量"
    }
  ]
},

  // ===== 区块4：公式卡片 =====
  formulas: [
  {
    "formula": "$B = F/IL$",
    "name": "磁感应强度",
    "usage": "匀强磁场"
  },
  {
    "formula": "$F = BIL\\sin\\theta$",
    "name": "安培力",
    "usage": "任意磁场"
  },
  {
    "formula": "$\\Phi = BS$",
    "name": "磁通量",
    "usage": "匀强磁场"
  }
],

  // ===== 区块5：理解度自评 =====
  selfEval: [
  {
    "level": "A",
    "question": "我能熟练使用安培力公式",
    "description": "可以进入P37洛伦兹力学习"
  },
  {
    "level": "B",
    "question": "我知道公式但方向判断不熟",
    "description": "完成J级变形"
  },
  {
    "level": "C",
    "question": "我把磁场和电场混淆",
    "description": "重读「概念涌现」部分"
  }
],

  // ===== 关联链接 =====
  relatedModels: [
  "M28",
  "M29",
  "M30"
],
  crossLinks: [
  {
    "subject": "化学",
    "conceptName": "顺磁性与抗磁性",
    "relation": "物质磁性的微观解释",
    "conceptId": ""
  }
],
}
