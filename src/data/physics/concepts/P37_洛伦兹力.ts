// P37 — 洛伦兹力
// 内容来源：docs/knowledge/physics/P37_洛伦兹力.md

import type { ConceptData } from './types'

export const P37: ConceptData = {
  id: 'P37',
  title: '洛伦兹力',
  subtitle: '洛伦兹力是运动电荷在磁场中受的力——$f = qvB\sin\theta$，是安培力的微观基础。',
  module: '电磁学',
  chapter: '磁场力',
  difficulty: 3,

  // ===== 区块1：前置知识检测 =====
  preCheck: [
  {
    "question": "单选 | 难度1   题目：关于洛伦兹力的说法，正确的是",
    "options": [
      "洛伦兹力是标量",
      "洛伦兹力方向与速度方向相同",
      "洛伦兹力不做功",
      "洛伦兹力与速度成正比"
    ],
    "answer": "C",
    "explanation": "$f \\perp v$，永不做功"
  },
  {
    "question": "单选 | 难度1   题目：电子以v垂直进入匀强磁场B，将做",
    "options": [
      "匀速直线",
      "匀加速直线",
      "匀速圆周",
      "抛物线"
    ],
    "answer": "C",
    "explanation": "$v \\perp B$时做匀速圆周运动"
  },
  {
    "question": "简答 | 难度1   题目：为什么洛伦兹力不做功？",
    "options": [],
    "answer": "因为洛伦兹力始终垂直于速度方向，根据$W = F \\cdot s \\cdot \\cos90^\\circ = 0$，不做功但改变运动方向。",
    "explanation": "$f \\perp v$"
  }
],

  // ===== 区块2：叙事正文 =====
  narrative: {
  "context": "电子在磁场中偏转。 这种力叫什么？**洛伦兹力**。 它是安培力的微观版本——安培力是大量电荷受洛伦兹力的总和。",
  "confusion": "很多学生认为\"洛伦兹力做功\"。 实际上： - 洛伦兹力$ F \\perp v $ - 永不做功 - 但改变运动方向",
  "experiment": "观察带电粒子在磁场中的运动： | 粒子 | 速度方向 | 运动轨迹 | |:---|:---|:---| | 带电粒子 | 垂直B | 匀速圆周 | | 带电粒子 | 平行B | 匀速直线 | | 带电粒子 | 成角度 | 螺旋线 |",
  "concept": "洛伦兹力： **公式**： $$f = qvB\\sin\\theta$$ - $\\theta$是$v$和$B$的夹角 - 方向：用左手定则判断 **与安培力关系**： $$F = \\sum f = NILB$$",
  "derivation": "**1. 洛伦兹力公式** 单个运动电荷：$f = qvB\\sin\\theta$ **2. 方向判断** 左手定则：四指指向速度方向，磁感线穿入手心，拇指指向受力方向 **3. 特殊情形** - $v \\parallel B$：$f = 0$，匀速直线 - $v \\perp B$：$f = qvB$，匀速圆周",
  "transfer": "应用实例： **速度选择器**：$qE = qvB \\Rightarrow v = E/B$ **质谱仪**：利用$qvB = mv^2/r$分离同位素 **回旋加速器**：利用匀速圆周运动增加能量 ---"
},

  // ===== 区块3：分层变形 =====
  variations: {
  "basic": [
    {
      "label": "例题1",
      "formula": "",
      "note": "$f = qvB = 1.6 \\times 10^{-19} \\times 10^6 \\times 0.1 = 1.6 \\times 10^{-14} N$｜$f = qvB$"
    },
    {
      "label": "例题2",
      "formula": "",
      "note": "$qvB = mv^2/r$，$v = qBr/m$｜向心力公式"
    }
  ],
  "advanced": [
    {
      "label": "例题1",
      "formula": "",
      "note": "｜运动分解"
    }
  ],
  "challenge": [
    {
      "label": "例题1",
      "formula": "",
      "note": "周期$T = 2\\pi m/qB$，与速度无关｜磁聚焦原理"
    },
    {
      "label": "例题2",
      "formula": "",
      "note": "每圈经过缝隙两次，$E_{每次} = qV$｜加速器原理"
    },
    {
      "label": "例题3",
      "formula": "",
      "note": "｜基本物理量测量"
    }
  ]
},

  // ===== 区块4：公式卡片 =====
  formulas: [
  {
    "formula": "$f = qvB\\sin\\theta$",
    "name": "洛伦兹力",
    "usage": "任意"
  },
  {
    "formula": "$T = 2\\pi m/qB$",
    "name": "周期",
    "usage": "匀强磁场"
  },
  {
    "formula": "$r = mv/qB$",
    "name": "半径",
    "usage": "垂直入射"
  }
],

  // ===== 区块5：理解度自评 =====
  selfEval: [
  {
    "level": "A",
    "question": "我能熟练分析带电粒子在磁场中的运动",
    "description": "可以进入P38学习"
  },
  {
    "level": "B",
    "question": "我知道公式但运动分析不熟",
    "description": "完成J级变形"
  },
  {
    "level": "C",
    "question": "我把洛伦兹力和安培力混淆",
    "description": "重读「概念涌现」部分"
  }
],

  // ===== 关联链接 =====
  relatedModels: [
  "M29",
  "M30"
],
  crossLinks: [
  {
    "subject": "化学",
    "conceptName": "质谱仪",
    "relation": "同位素分离",
    "conceptId": ""
  }
],
}
