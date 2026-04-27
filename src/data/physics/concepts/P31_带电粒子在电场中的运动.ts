// P31 — 带电粒子在电场中的运动
// 内容来源：docs/knowledge/physics/P31_带电粒子在电场中的运动.md

import type { ConceptData } from './types'

export const P31: ConceptData = {
  id: 'P31',
  title: '带电粒子在电场中的运动',
  subtitle: '带电粒子在电场中受电场力作用，根据初速度不同做匀速直线运动或类平抛运动。',
  module: '电磁学',
  chapter: '电场应用',
  difficulty: 3,

  // ===== 区块1：前置知识检测 =====
  preCheck: [
  {
    "question": "单选 | 难度1   题目：电子在匀强电场中，只受电场力，将做",
    "options": [
      "匀速直线",
      "匀加速直线",
      "匀速圆周",
      "简谐运动"
    ],
    "answer": "B",
    "explanation": "$F = qE$，恒定加速度"
  },
  {
    "question": "单选 | 难度1   题目：带电粒子以初速度v₀垂直进入匀强电场，将做",
    "options": [
      "匀速直线",
      "匀加速直线",
      "类平抛",
      "匀速圆周"
    ],
    "answer": "C",
    "explanation": "垂直进入做类平抛"
  },
  {
    "question": "简答 | 难度1   题目：为什么示波器可以显示信号波形？",
    "options": [],
    "answer": "水平方向加扫描电压，垂直方向加信号电压，电子同时参与两个方向的运动合成。",
    "explanation": "运动合成原理"
  }
],

  // ===== 区块2：叙事正文 =====
  narrative: {
  "context": "电视机的荧光屏上，电子从电子枪射出，打在屏幕上发光。 电子为什么能够偏转？因为它们在**电场**中受到了力。",
  "confusion": "很多学生混淆\"电场力不做功\"和\"电场不做功\"。 实际上： - 电场是空间属性，本身不做功 - 电场力是电荷受到的力，电场力做功$W=qU$ - 电场力不做功（如沿等势面移动）则电势能不变——这是正确的 - 学生常把\"电场\"和\"电场力\"混为一谈",
  "experiment": "用带电粒子实验： | 初始速度v₀ | 电场方向 | 运动轨迹 | |:---|:---|:---| | 0 | 与v₀同向 | 匀加速直线 | | v₀ | 与E垂直 | 类平抛（抛物线） | | v₀ | 与E成θ角 | 斜抛 |",
  "concept": "运动分析： **受力**： $$F = qE$$ **加速度**： $$a = \\frac{F}{m} = \\frac{qE}{m}$$ **运动类型**： - $v_0 = 0$：$s = \\frac{1}{2}at^2$ - $v_0 \\perp E$：类平抛",
  "derivation": "运动公式推导： **1. 匀加速直线** $$v = v_0 + at = v_0 + \\frac{qE}{m}t$$ $$s = v_0 t + \\frac{1}{2}at^2$$ **2. 类平抛运动** 分解为： - 垂直电场方向：匀速直线$v_x = v_0$ - 平行电场方向：匀加速直线$a = qE/m$ **3. 速度偏转角** $$\\tan\\theta = \\frac{v_y}{v_x} = \\frac{qEl}{mv_0^2}$$",
  "transfer": "应用实例： **示波器**：电子在水平、垂直电场中偏转，显示波形。 **粒子加速器**：利用电场加速带电粒子。 **阴极射线管**：早期电视和显示器的基础。 ---"
},

  // ===== 区块3：分层变形 =====
  variations: {
  "basic": [
    {
      "label": "例题1",
      "formula": "",
      "note": "$a = qE/m = 1.6 \\times 10^{-19} \\times 10^3 / 9.1 \\times 10^{-31} \\approx 1.76 \\times 10^{14} m/s^2$｜$a = qE/m$"
    },
    {
      "label": "例题2",
      "formula": "",
      "note": "$a = qE/m$，$t = d/v_0$，$y = \\frac{1}{2}at^2$｜类平抛"
    }
  ],
  "advanced": [
    {
      "label": "例题1",
      "formula": "",
      "note": "加速段$v_0 = \\sqrt{2eU_1/m}$，偏转段$y = \\frac{eEL^2}{2mv_0^2}$｜多过程分析"
    }
  ],
  "challenge": [
    {
      "label": "例题1",
      "formula": "",
      "note": "加速：$v = \\sqrt{2qU/m}$   偏转：$y = \\frac{qEL^2}{2mv^2}$｜多过程分析"
    },
    {
      "label": "例题2",
      "formula": "",
      "note": "分解为匀速（垂直E）和匀加速（平行E）的合成｜运动分解"
    },
    {
      "label": "例题3",
      "formula": "",
      "note": "｜用物理原理测基本常量"
    }
  ]
},

  // ===== 区块4：公式卡片 =====
  formulas: [
  {
    "formula": "$a = qE/m$",
    "name": "加速度",
    "usage": "匀强电场"
  },
  {
    "formula": "$v = v_0 + at$",
    "name": "速度",
    "usage": "匀加速"
  },
  {
    "formula": "$y = \\frac{qEL^2}{2mv_0^2}$",
    "name": "偏转位移",
    "usage": "类平抛"
  }
],

  // ===== 区块5：理解度自评 =====
  selfEval: [
  {
    "level": "A",
    "question": "我能熟练分析带电粒子的运动",
    "description": "可以进入P32恒定电流学习"
  },
  {
    "level": "B",
    "question": "我知道公式但分析不熟",
    "description": "完成J级变形"
  },
  {
    "level": "C",
    "question": "我把各种运动类型混淆",
    "description": "重读「概念涌现」部分"
  }
],

  // ===== 关联链接 =====
  relatedModels: [
  "M24",
  "M25",
  "M30"
],
  crossLinks: [
  {
    "subject": "技术",
    "conceptName": "示波器",
    "relation": "电场控制粒子",
    "conceptId": ""
  }
],
}
