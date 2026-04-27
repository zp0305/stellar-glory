// P49 — 机械振动
// 内容来源：docs/knowledge/physics/P49_机械振动.md

import type { ConceptData } from './types'

export const P49: ConceptData = {
  id: 'P49',
  title: '机械振动',
  subtitle: '简谐运动是最基本的振动——回复力$F=-kx$，加速度与位移方向相反。',
  module: '热学·光学·机械波',
  chapter: '振动',
  difficulty: 3,

  // ===== 区块1：前置知识检测 =====
  preCheck: [
  {
    "question": "单选 | 难度1   题目：关于简谐运动，说法正确的是",
    "options": [
      "回复力与位移成正比反向",
      "速度与加速度同向",
      "振幅越大周期越大",
      "频率与振幅成正比"
    ],
    "answer": "A",
    "explanation": "$F=-kx$"
  },
  {
    "question": "单选 | 难度1   题目：弹簧振子周期T=2s，频率是",
    "options": [
      "2Hz",
      "0.5Hz",
      "1Hz",
      "4Hz"
    ],
    "answer": "B",
    "explanation": "$f = 1/T = 0.5Hz$"
  },
  {
    "question": "简答 | 难度1   题目：为什么说\"简谐运动是匀变速运动\"是错的？",
    "options": [],
    "answer": "简谐运动加速度随位移变化，是变加速度运动。",
    "explanation": "非均匀变化"
  }
],

  // ===== 区块2：叙事正文 =====
  narrative: {
  "context": "弹簧振子在光滑水平面上来回振动。 它的运动有什么规律？",
  "confusion": "很多学生认为\"振幅越大频率越高\"。 实际上： - 频率由弹簧的$k$和质量$m$决定 - 与振幅无关",
  "experiment": "弹簧振子实验数据： | 振幅A(m) | 周期T(s) | 频率f(Hz) | |:---|:---|:---| | 0.1 | 1.0 | 1.0 | | 0.2 | 1.0 | 1.0 | | 0.3 | 1.0 | 1.0 | 观察：周期与振幅无关！",
  "concept": "简谐运动： **定义**： $$F = -kx$$ **位移**： $$x = A\\sin(\\omega t + \\varphi)$$ **周期**： $$T = 2\\pi\\sqrt{\\frac{m}{k}}$$",
  "derivation": "**1. 回复力** $$F = -kx$$ **2. 加速度** $$a = -\\frac{k}{m}x$$ **3. 速度** $$v = A\\omega\\cos(\\omega t + \\varphi)$$ **4. 周期** $$T = 2\\pi\\sqrt{\\frac{m}{k}}$$ 与振幅无关！",
  "transfer": "应用实例： **地震仪**：利用共振原理检测地震波。 **LC振荡电路**：电磁振荡。 **音叉**：固有频率固定。 ---"
},

  // ===== 区块3：分层变形 =====
  variations: {
  "basic": [
    {
      "label": "例题1",
      "formula": "",
      "note": "$T = 2\\pi\\sqrt{m/k} = 2\\pi\\sqrt{1/100} \\approx 0.63s$｜$T = 2\\pi\\sqrt{m/k}$"
    },
    {
      "label": "例题2",
      "formula": "",
      "note": "由$F = kA$，$k = 5/0.1 = 50N/m$｜回复力公式"
    }
  ],
  "advanced": [
    {
      "label": "例题1",
      "formula": "",
      "note": "$E_p = \\frac{1}{2}k(A/2)^2 = E/4$，$E_k = E - E/4 = 3E/4$｜能量转化"
    }
  ],
  "challenge": [
    {
      "label": "例题1",
      "formula": "",
      "note": "位移x，相位$\\phi$；速度$v$超前x$\\pi/2$；加速度a超前v$\\pi/2$（或滞后x$\\pi$）｜相位关系"
    },
    {
      "label": "例题2",
      "formula": "",
      "note": "振幅逐渐减小，最终停止｜阻尼效应"
    },
    {
      "label": "例题3",
      "formula": "",
      "note": "｜用振动测g"
    }
  ]
},

  // ===== 区块4：公式卡片 =====
  formulas: [
  {
    "formula": "$F = -kx$",
    "name": "回复力",
    "usage": "简谐运动"
  },
  {
    "formula": "$T = 2\\pi\\sqrt{m/k}$",
    "name": "周期",
    "usage": "弹簧振子"
  },
  {
    "formula": "$T = 2\\pi\\sqrt{L/g}$",
    "name": "周期",
    "usage": "单摆"
  }
],

  // ===== 区块5：理解度自评 =====
  selfEval: [
  {
    "level": "A",
    "question": "我能熟练分析简谐运动",
    "description": "可以进入P50学习"
  },
  {
    "level": "B",
    "question": "我知道公式但相位不熟",
    "description": "完成J级变形"
  },
  {
    "level": "C",
    "question": "我把周期和频率混淆",
    "description": "重读「概念涌现」部分"
  }
],

  // ===== 关联链接 =====
  relatedModels: [
  "M36",
  "M37"
],
  crossLinks: [
  {
    "subject": "数学",
    "conceptName": "三角函数",
    "relation": "简谐运动的数学表达",
    "conceptId": ""
  }
],
}
