// P24 — 动量与冲量
// 内容来源：docs/knowledge/physics/P24_动量与冲量.md

import type { ConceptData } from './types'

export const P24: ConceptData = {
  id: 'P24',
  title: '动量与冲量',
  subtitle: '动量是"运动状态的量度"（$p=mv$），冲量是"力在时间上的累积效应"（$I=Ft$）。',
  module: '能量与动量',
  chapter: '动量',
  difficulty: 3,

  // ===== 区块1：前置知识检测 =====
  preCheck: [
  {
    "question": "单选 | 难度1   题目：关于动量的说法，正确的是",
    "options": [
      "动量是标量",
      "动量方向与速度方向相反",
      "动量是矢量",
      "动量单位是N"
    ],
    "answer": "C",
    "explanation": "动量是矢量，单位kg·m/s"
  },
  {
    "question": "单选 | 难度1   题目：质量2kg的物体速度从5m/s增加到10m/s，动量变化是",
    "options": [
      "10 kg·m/s",
      "20 kg·m/s",
      "15 kg·m/s",
      "5 kg·m/s"
    ],
    "answer": "A",
    "explanation": "$\\Delta p = m(v_2 - v_1) = 2 \\times (10-5) = 10$（方向相同）"
  },
  {
    "question": "简答 | 难度1   题目：有人说\"大象比子弹难对付，因为大象动量大\"，这句话对吗？",
    "options": [],
    "answer": "对。在日常情况下，大象质量大、速度小但仍可能比子弹（质量小、速度大）有更大的动量。",
    "explanation": "动量是mv的乘积"
  }
],

  // ===== 区块2：叙事正文 =====
  narrative: {
  "context": "同样速度的子弹和大象，哪个更难停？ 答案是大象。虽然速度相同，但大象质量大，动量更大，更难停下。 这个\"运动状态的量度\"叫做**动量**。",
  "confusion": "很多学生认为\"动量大速度就大\"。 实际上： - 动量$p = mv$，由质量和速度共同决定 - 大象质量大，即使速度小，动量也可能很大 - 子弹速度大，但质量小 关键：**动量是质量和速度的乘积**",
  "experiment": "用实验理解动量： 质量不同的物体碰撞： | 质量m(kg) | 速度v(m/s) | 动量p(kg·m/s) | |:---|:---|:---| | 1 | 10 | 10 | | 2 | 5 | 10 | | 5 | 2 | 10 | | 10 | 1 | 10 | 观察：不同质量和速度可以产生相同的动量。",
  "concept": "从实验提炼概念： **动量**： $$p = mv$$ - 矢量，方向与速度方向相同 - 单位：kg·m/s **冲量**： $$I = Ft$$ - 矢量，方向与力方向相同 - 单位：N·s = kg·m/s - 功与冲量的区别：功是空间累积，冲量是时间累积",
  "derivation": "动量定理推导： **1. 牛顿第二定律** $$F = ma = m\\frac{\\Delta v}{\\Delta t}$$ **2. 变形为冲量形式** $$F\\Delta t = m\\Delta v$$ $$I = \\Delta p$$ **3. 理解** 冲量等于动量的变化量。 **4. 矢量性** 冲量和动量都是矢量，计算时要注意方向！",
  "transfer": "动量在生活中应用： **安全气囊**：碰撞时延长作用时间，减小冲击力。$F = \\frac{\\Delta p}{\\Delta t}$，$\\Delta t$越大，$F$越小。 **跳垫子**：运动员跳到垫子上，延长作用时间，减小受到的力。 **缓冲包装**：包装盒里的泡沫塑料，通过延长撞击时间保护物品。 ---"
},

  // ===== 区块3：分层变形 =====
  variations: {
  "basic": [
    {
      "label": "例题1",
      "formula": "",
      "note": "$p = mv = 0.5 \\times 8 = 4 kg·m/s$｜套用公式"
    },
    {
      "label": "例题2",
      "formula": "",
      "note": "$I = Ft = 10 \\times 2 = 20 N·s$｜冲量公式"
    }
  ],
  "advanced": [
    {
      "label": "例题1",
      "formula": "",
      "note": "(1) $\\Delta p = 2 \\times (15-5) = 20 kg·m/s$   (2) $I = \\Delta p$，即$F \\times 2 = 20$，得$F = 10N$｜动量定理"
    }
  ],
  "challenge": [
    {
      "label": "例题1",
      "formula": "",
      "note": "三角形面积 = $\\frac{1}{2} \\times 10 \\times 2 = 10 N·s$｜图像面积"
    },
    {
      "label": "例题2",
      "formula": "",
      "note": "动量变化$\\Delta p = p_2 - p_1$，方向需矢量计算｜冲量方向与力的方向相同"
    },
    {
      "label": "例题3",
      "formula": "",
      "note": "｜用动量定理测冲量"
    }
  ]
},

  // ===== 区块4：公式卡片 =====
  formulas: [
  {
    "formula": "$p = mv$",
    "name": "动量定义",
    "usage": "任意时刻"
  },
  {
    "formula": "$I = Ft$",
    "name": "冲量定义",
    "usage": "恒力"
  },
  {
    "formula": "$I = \\Delta p$",
    "name": "动量定理",
    "usage": "任意过程"
  }
],

  // ===== 区块5：理解度自评 =====
  selfEval: [
  {
    "level": "A",
    "question": "我能熟练计算动量和冲量，理解矢量性",
    "description": "可以进入P25动量定理学习"
  },
  {
    "level": "B",
    "question": "我知道公式但有时忽略方向",
    "description": "完成J级变形，确认方向分析"
  },
  {
    "level": "C",
    "question": "我把动量和冲量混淆",
    "description": "重读「概念涌现」部分"
  }
],

  // ===== 关联链接 =====
  relatedModels: [
  "M19",
  "M20",
  "M21",
  "M22"
],
  crossLinks: [
  {
    "subject": "数学",
    "conceptName": "矢量",
    "relation": "动量是矢量",
    "conceptId": ""
  }
],
}
