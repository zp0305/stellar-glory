// P54 — 波粒二象性
// 内容来源：docs/knowledge/physics/P54_波粒二象性.md

import type { ConceptData } from './types'

export const P54: ConceptData = {
  id: 'P54',
  title: '波粒二象性',
  subtitle: '光既有波动性（干涉衍射）又有粒子性（光电效应）——这不仅是光的性质，也是所有微观粒子的性质。',
  module: '近代物理',
  chapter: '量子初步',
  difficulty: 1,

  // ===== 区块1：前置知识检测 =====
  preCheck: [
  {
    "question": "单选 | 难度1   题目：关于光电效应，说法正确的是",
    "options": [
      "任意频率光都能打出电子",
      "光电子数目与光强成正比",
      "光电子能量与频率成正比",
      "光电子能量与光强无关"
    ],
    "answer": "B",
    "explanation": "光电子数目与光强成正比"
  },
  {
    "question": "单选 | 难度1   题目：电子动量p=1.65×10⁻²⁴kg·m/s，德布罗意波长是",
    "options": [
      "0.4nm",
      "4nm",
      "40nm",
      "400nm"
    ],
    "answer": "A",
    "explanation": "λ=h/p=4×10⁻¹⁰m=0.4nm"
  },
  {
    "question": "单选 | 难度2   题目：关于波粒二象性，下列说法正确的是",
    "options": [
      "光子既有波动性又有粒子性，可以同时观测到两种属性",
      "宏观物体没有波粒二象性",
      "大量光子表现出波动性，少量光子表现出粒子性",
      "电子只具有粒子性，不具有波动性"
    ],
    "answer": "C",
    "explanation": "单个光子通过双缝后落在屏上是随机的一个点（粒子性），大量光子积累形成干涉条纹（波动性），这是概率波的核心含义。A错因为两种属性不会同时被观测到；B错因为一切物体都有波粒二象性，只是宏观物体德布罗意波长极短无法探测；D错，电子衍射实验已证实电子的波动性。"
  }
],

  // ===== 区块2：叙事正文 =====
  narrative: {
  "context": "光可以发生干涉——说明光是波。 光可以从金属打出电子——说明光是粒子。 光究竟是什么？",
  "confusion": "很多学生认为\"光既是波又是粒子\"。 实际上： - 不是同时是两者 - 而是在不同实验中表现不同侧面 - 这叫**波粒二象性**",
  "experiment": "",
  "concept": "",
  "derivation": "**1. 波动性** 干涉、衍射证明光是电磁波 **2. 粒子性** 光电效应证明光粒子性 **3. 物质波** 电子、中子等也有波动性 $$\\lambda = \\frac{h}{mv}$$",
  "transfer": "应用实例： **光电效应**：太阳能电池 **电子显微镜**：利用电子波粒二象性 **光谱分析**：物质鉴定 ---"
},

  // ===== 区块3：分层变形 =====
  variations: {
  "basic": [],
  "advanced": [],
  "challenge": []
},

  // ===== 区块4：公式卡片 =====
  formulas: [],

  // ===== 区块5：理解度自评 =====
  selfEval: [
  {
    "level": "A",
    "question": "我能理解波粒二象性含义",
    "description": "进入原子结构学习"
  },
  {
    "level": "B",
    "question": "我知道光电效应公式",
    "description": "记忆公式"
  },
  {
    "level": "C",
    "question": "我对波粒二象性是模糊的",
    "description": ""
  }
],

  // ===== 关联链接 =====
  relatedModels: [
  "M40"
],
  crossLinks: [
  {
    "subject": "化学",
    "conceptName": "光谱分析",
    "relation": "波粒二象性应用",
    "conceptId": ""
  }
],
}
