// P53 — 相对论初步
// 内容来源：docs/knowledge/physics/P53_相对论初步.md

import type { ConceptData } from './types'

export const P53: ConceptData = {
  id: 'P53',
  title: '相对论初步',
  subtitle: '时间和空间不是绝对的——速度接近光速时，时间变慢、长度缩短。',
  module: '近代物理',
  chapter: '相对论',
  difficulty: 1,

  // ===== 区块1：前置知识检测 =====
  preCheck: [
  {
    "question": "单选 | 难度1   题目：关于相对论，说法正确的是",
    "options": [
      "高速运动物体时间变快",
      "高速运动物体长度变长",
      "时间是相对的",
      "光速可变"
    ],
    "answer": "C",
    "explanation": "时间膨胀"
  },
  {
    "question": "单选 | 难度1   题目：光子速度c，光子自己的时间是",
    "options": [
      "0",
      "c",
      "1/c",
      "不确定"
    ],
    "answer": "A",
    "explanation": "因为v=c时，分母为0"
  },
  {
    "question": "单选 | 难度2   题目：关于相对论效应，下列说法正确的是",
    "options": [
      "只有速度接近光速时才有相对论效应",
      "时间膨胀和长度收缩可以同时被同一惯性系观测到",
      "在任何惯性参考系中，真空中的光速都是相同的",
      "相对论效应只影响时间，不影响空间"
    ],
    "answer": "C",
    "explanation": "光速不变原理是狭义相对论的基本假设之一，在任何惯性系中真空光速都相同。A错因为微小效应也存在只是可忽略；B错因为同一参考系观测到的运动物体同时有时间膨胀和长度收缩，但这是对不同量的测量；D明显错误。"
  }
],

  // ===== 区块2：叙事正文 =====
  narrative: {
  "context": "GPS卫星每天比地面时钟慢约38微秒。 为什么？因为卫星速度快、引力弱——**相对论效应**。 宏观低速下不明显，但高科技必须考虑。",
  "confusion": "很多学生认为\"相对论说一切都是相对的\"。 实际上： - 光速在所有参考系中不变 - 变化的不是光速，而是时空测量",
  "experiment": "",
  "concept": "",
  "derivation": "**1. 相对性原理** 物理规律在所有惯性系中相同 **2. 光速不变** 光速在所有参考系中都是c **3. 时间膨胀** 运动的时钟变慢 **4. 质能关系** 能量和质量可以互换",
  "transfer": "应用实例： **GPS卫星**：时间修正。 **粒子加速器**：质量随速度增加。 **核能**：$\\Delta E = \\Delta mc^2$ ---"
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
    "question": "我能理解相对论基本结论",
    "description": "近代物理入门完成"
  },
  {
    "level": "B",
    "question": "，我知道时间膨胀公式",
    "description": "记忆时间膨胀"
  },
  {
    "level": "C",
    "question": "我对相对论的印象是模糊的",
    "description": "重读概念"
  }
],

  // ===== 关联链接 =====
  relatedModels: [
  "—"
],
  crossLinks: [
  {
    "subject": "天文",
    "conceptName": "GPS卫星时间修正",
    "relation": "实际应用",
    "conceptId": ""
  }
],
}
