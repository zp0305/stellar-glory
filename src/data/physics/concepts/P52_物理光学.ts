// P52 — 物理光学
// 内容来源：docs/knowledge/physics/P52_物理光学.md

import type { ConceptData } from './types'

export const P52: ConceptData = {
  id: 'P52',
  title: '物理光学',
  subtitle: '干涉、衍射证明光的波动性，偏振证明光是横波——光的电磁说的实验基础。',
  module: '热学·光学·机械波',
  chapter: '波动光学',
  difficulty: 3,

  // ===== 区块1：前置知识检测 =====
  preCheck: [
  {
    "question": "单选 | 难度1   题目：关于光的干涉，说法正确的是",
    "options": [
      "两束光频率相同就能产生干涉",
      "干涉条纹是光程差相等点的轨迹",
      "只有双缝才能产生干涉",
      "干涉说明光是粒子"
    ],
    "answer": "B",
    "explanation": "干涉是光程差相等"
  },
  {
    "question": "单选 | 难度1   题目：双缝间距d=0.5mm，缝到屏D=1m，波长λ=500nm。干涉条纹间距是",
    "options": [
      "0.5mm",
      "1mm",
      "1.5mm",
      "2mm"
    ],
    "answer": "B",
    "explanation": "$\\Delta x = \\lambda D/d = 500\\times10^{-9}\\times1/0.5\\times10^{-3} = 1\\times10^{-3}m = 1mm$"
  },
  {
    "question": "简答 | 难度1   题目：为什么肥皂泡呈现彩色？",
    "options": [],
    "answer": "薄膜上下表面反射的光发生干涉，不同波长光在某些位置加强，呈现彩色。",
    "explanation": "薄膜干涉"
  }
],

  // ===== 区块2：叙事正文 =====
  narrative: {
  "context": "肥皂泡在阳光下呈现彩色条纹。 这是光的**干涉**现象。 光不只是\"光线\"，它还是**波**。",
  "confusion": "很多学生认为\"干涉只在双缝实验中发生\"。 实际上： - 薄膜干涉（肥皂泡、油膜） - 牛顿环 - 麦克尔逊干涉仪",
  "experiment": "光的干涉实验： | 实验 | 现象 | 说明 | |:---|:---|:---| | 双缝干涉 | 明暗相间条纹 | Δx = λD/d | | 薄膜干涉 | 彩色条纹 | 界面反射相位差 | | 牛顿环 | 同心圆环 | 空气膜厚度 |",
  "concept": "物理光学： **干涉条件**：频率相同、相位差恒定 **双缝干涉**： $$\\Delta x = \\frac{\\lambda D}{d}$$ **衍射**：光绕过障碍物传播 - 单缝衍射：中央明纹最亮 - $\\Delta x = \\frac{\\lambda D}{d}$（近似） **偏振**：证明光是横波",
  "derivation": "**1. 干涉条件** 两列光波相遇叠加： - 光程差$\\delta = k\\lambda$：加强 - $\\delta = (2k+1)\\lambda/2$：减弱 **2. 双缝干涉** $$\\Delta x = \\frac{\\lambda D}{d}$$ **3. 衍射** 单缝宽度$a$越小，衍射越明显 **4. 偏振** 偏振片只让特定方向的光通过",
  "transfer": "应用实例： **光学镀膜**：利用干涉提高透镜透光率。 **光谱分析**：利用干涉测量光的波长。 **液晶显示**：利用偏振控制光。 ---"
},

  // ===== 区块3：分层变形 =====
  variations: {
  "basic": [
    {
      "label": "例题1",
      "formula": "",
      "note": "$x = k\\lambda D/d = 3\\times600\\times10^{-9}\\times1.2/0.6\\times10^{-3} = 3.6\\times10^{-3}m = 3.6mm$｜$x = k\\lambda D/d$"
    },
    {
      "label": "例题2",
      "formula": "",
      "note": "$a\\sin\\theta = \\lambda$，$\\sin\\theta \\approx x/D$，$\\lambda = ax/D$｜单缝衍射"
    }
  ],
  "advanced": [
    {
      "label": "例题1",
      "formula": "",
      "note": "$2ne = k\\lambda$（垂直入射）   当$\\lambda = 2ne/k$，k=2时$\\lambda=532nm$（绿光）｜薄膜干涉"
    }
  ],
  "challenge": [
    {
      "label": "例题1",
      "formula": "",
      "note": "强度减为原来的一半（偏振片只通过振动方向与偏振方向相同的分量）｜偏振定律"
    },
    {
      "label": "例题2",
      "formula": "",
      "note": "光程变化0.2μm，相当于λ/2的条纹移动｜干涉仪原理"
    },
    {
      "label": "例题3",
      "formula": "",
      "note": "｜用干涉测波长"
    }
  ]
},

  // ===== 区块4：公式卡片 =====
  formulas: [
  {
    "formula": "$\\Delta x = \\lambda D/d$",
    "name": "双缝干涉",
    "usage": "远场近似"
  },
  {
    "formula": "$a\\sin\\theta = k\\lambda$",
    "name": "单缝衍射",
    "usage": "中央明纹"
  },
  {
    "formula": "$2ne = k\\lambda$",
    "name": "薄膜干涉",
    "usage": "垂直入射"
  }
],

  // ===== 区块5：理解度自评 =====
  selfEval: [
  {
    "level": "A",
    "question": "我能熟练分析光的干涉、衍射、偏振",
    "description": "光学板块完成"
  },
  {
    "level": "B",
    "question": "我知道公式但干涉分析不熟",
    "description": "完成J级变形"
  },
  {
    "level": "C",
    "question": "我把干涉和衍射混淆",
    "description": "重读「概念涌现」部分"
  }
],

  // ===== 关联链接 =====
  relatedModels: [
  "M39"
],
  crossLinks: [
  {
    "subject": "技术",
    "conceptName": "光谱分析",
    "relation": "物理光学的工程应用",
    "conceptId": ""
  }
],
}
