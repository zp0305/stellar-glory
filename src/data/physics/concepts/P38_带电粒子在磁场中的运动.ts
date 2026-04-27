// P38 — 带电粒子在磁场中的运动
// 内容来源：docs/knowledge/physics/P38_带电粒子在磁场中的运动.md

import type { ConceptData } from './types'

export const P38: ConceptData = {
  id: 'P38',
  title: '带电粒子在磁场中的运动',
  subtitle: '带电粒子垂直进入匀强磁场时做匀速圆周运动——半径$r = mv/qB$，周期$T = 2\pi m/qB$。',
  module: '电磁学',
  chapter: '磁场运动',
  difficulty: 3,

  // ===== 区块1：前置知识检测 =====
  preCheck: [
  {
    "question": "单选 | 难度1   题目：关于带电粒子在匀强磁场中的运动，说法正确的是",
    "options": [
      "半径与速度成正比",
      "周期与速度成正比",
      "周期与半径无关",
      "速度不变"
    ],
    "answer": "C",
    "explanation": "$T = 2\\pi m/qB$，与v、r无关"
  },
  {
    "question": "单选 | 难度1   题目：质子q=1.6×10⁻¹⁹C，m=1.67×10⁻²⁷kg，在B=0.1T中做圆周运动。周期为",
    "options": [
      "6.5×10⁻⁸s",
      "6.5×10⁻⁷s",
      "6.5×10⁻⁶s",
      "6.5×10⁻⁵s"
    ],
    "answer": "B",
    "explanation": "$T = 2\\pi m/qB = 6.5 \\times 10^{-7}s$"
  },
  {
    "question": "简答 | 难度1   题目：为什么回旋加速器的高频电源频率不变？",
    "options": [],
    "answer": "因为粒子运动的周期$T = 2\\pi m/qB$不变，与速度和能量无关。只需固定的频率就可以持续加速。",
    "explanation": "周期不变性"
  }
],

  // ===== 区块2：叙事正文 =====
  narrative: {
  "context": "在电视机的显像管中，电子在磁场作用下偏转，最终打在荧光屏上发光。 电子做什么运动？**匀速圆周运动**。",
  "confusion": "很多学生认为\"周期与速度成正比\"。 实际上： - $T = 2\\pi m/qB$，与$v$和$r$无关 - 只与荷质比$q/m$和磁场$B$有关 - 这就是回旋加速器的原理",
  "experiment": "测量粒子运动： | 速度v(m/s) | 半径r(cm) | 周期T(μs) | |:---|:---|:---| | 10⁶ | 5.7 | 3.57 | | 2×10⁶ | 11.4 | 3.57 | | 3×10⁶ | 17.1 | 3.57 | 观察：周期不变！",
  "concept": "匀速圆周运动： **半径**： $$r = \\frac{mv}{qB}$$ **周期**： $$T = \\frac{2\\pi m}{qB}$$ **角频率**： $$\\omega = \\frac{qB}{m}$$",
  "derivation": "**1. 向心力** 洛伦兹力提供向心力： $$qvB = \\frac{mv^2}{r}$$ **2. 解得半径** $$r = \\frac{mv}{qB}$$ **3. 周期** $$T = \\frac{2\\pi r}{v} = \\frac{2\\pi m}{qB}$$ **4. 重要结论** 周期与速度、半径无关——这是加速器的理论基础",
  "transfer": "应用实例： **质谱仪**：不同质量的粒子有不同的$r$，可以分离。 **回旋加速器**：利用不变周期加速粒子。 **磁约束**：托卡马克装置约束等离子体。 ---"
},

  // ===== 区块3：分层变形 =====
  variations: {
  "basic": [
    {
      "label": "例题1",
      "formula": "",
      "note": "$r = mv/qB = 9.1 \\times 10^{-31} \\times 10^7 / (1.6 \\times 10^{-19} \\times 0.01) = 5.7 \\times 10^{-3} m$   $T = 2\\pi m/qB = 3.6 \\times 10^{-9} s$｜公式应用"
    },
    {
      "label": "例题2",
      "formula": "",
      "note": "$v = \\sqrt{2E/m} = \\sqrt{2 \\times 10^6 \\times 1.6 \\times 10^{-19} / 6.68 \\times 10^{-27}} = 2.2 \\times 10^7 m/s$   $r = mv/qB = 4.6 \\times 10^{-2} m$｜能量-速度转换"
    }
  ],
  "advanced": [
    {
      "label": "例题1",
      "formula": "",
      "note": "分解为：$v_{\\perp} = v\\sin\\theta$ → 圆周运动；$v_{\\parallel} = v\\cos\\theta$ → 匀速直线 → 螺旋线   螺距$h = v_{\\parallel} T$｜螺旋运动"
    }
  ],
  "challenge": [
    {
      "label": "例题1",
      "formula": "",
      "note": "周期与速度无关｜磁聚焦应用"
    },
    {
      "label": "例题2",
      "formula": "",
      "note": "｜同位素分离"
    },
    {
      "label": "例题3",
      "formula": "",
      "note": "｜基本物理量"
    }
  ]
},

  // ===== 区块4：公式卡片 =====
  formulas: [
  {
    "formula": "$r = mv/qB$",
    "name": "半径",
    "usage": "垂直入射"
  },
  {
    "formula": "$T = 2\\pi m/qB$",
    "name": "周期",
    "usage": "匀强磁场"
  },
  {
    "formula": "$f = qB/2\\pi m$",
    "name": "频率",
    "usage": "匀强磁场"
  }
],

  // ===== 区块5：理解度自评 =====
  selfEval: [
  {
    "level": "A",
    "question": "我能熟练分析带电粒子在磁场中的运动",
    "description": "可以进入P39学习"
  },
  {
    "level": "B",
    "question": "我知道公式但计算不熟",
    "description": "完成J级变形"
  },
  {
    "level": "C",
    "question": "我把周期和半径混淆",
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
    "subject": "技术",
    "conceptName": "粒子加速器",
    "relation": "医学/科研应用",
    "conceptId": ""
  }
],
}
