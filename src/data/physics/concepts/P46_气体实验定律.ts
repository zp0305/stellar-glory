// P46 — 气体实验定律
// 内容来源：docs/knowledge/physics/P46_气体实验定律.md

import type { ConceptData } from './types'

export const P46: ConceptData = {
  id: 'P46',
  title: '气体实验定律',
  subtitle: '玻意耳、查理、盖吕萨克定律是"理想气体"在特定条件下的简化描述。',
  module: '热学·光学·机械波',
  chapter: '气体定律',
  difficulty: 3,

  // ===== 区块1：前置知识检测 =====
  preCheck: [
  {
    "question": "单选 | 难度1   题目：关于气体实验定律，说法正确的是",
    "options": [
      "玻意耳定律：等压过程pV=常数",
      "查理定律：等温过程p/T=常数",
      "盖吕萨克定律：等压过程V/T=常数",
      "三个定律彼此独立"
    ],
    "answer": "C",
    "explanation": "盖吕萨克定律是等压过程"
  },
  {
    "question": "单选 | 难度1   题目：理想气体等温压缩，体积减半，压强变为原来的",
    "options": [
      "1倍",
      "2倍",
      "4倍",
      "1/2倍"
    ],
    "answer": "B",
    "explanation": "p1V1=p2V2，V2=V1/2时p2=2p1"
  },
  {
    "question": "简答 | 难度1   题目：等温过程和等压过程有什么区别？",
    "options": [],
    "answer": "等温过程温度不变，等压过程压强不变。两者不能同时满足（除非体积也固定）。",
    "explanation": "过程条件"
  }
],

  // ===== 区块2：叙事正文 =====
  narrative: {
  "context": "打气筒打气，气体被压缩。 压缩后，气体的体积、压强、温度都变化了。 它们之间有什么关系？",
  "confusion": "很多学生认为\"等温过程就是初末温度相同\"。 实际上： - 等温过程要求**过程中**温度始终不变 - 初末温度相同但过程有变化，不是等温过程",
  "experiment": "三个实验定律的数据： | 玻意耳定律（等温）| 查理定律（等容）| 盖吕萨克定律（等压）| |:---|:---|:---| | pV=常数 | p/T=常数 | V/T=常数 |",
  "concept": "气体实验定律： **玻意耳定律**： $$pV = C$$ **查理定律**： $$\\frac{p}{T} = C$$ **盖吕萨克定律**： $$\\frac{V}{T} = C$$",
  "derivation": "**1. 玻意耳定律** 等温过程：$p_1V_1 = p_2V_2$ **2. 查理定律** 等容过程：$\\frac{p_1}{T_1} = \\frac{p_2}{T_2}$ **3. 盖吕萨克定律** 等压过程：$\\frac{V_1}{T_1} = \\frac{V_2}{T_2}$ **4. 统一** 三个定律统一于理想气体状态方程",
  "transfer": "应用实例： **气筒打气**：等温压缩。 **温度计**：利用气体压强或体积变化。 **高压锅**：等容升温。 ---"
},

  // ===== 区块3：分层变形 =====
  variations: {
  "basic": [
    {
      "label": "例题1",
      "formula": "",
      "note": "p1V1=p2V2，1×2=p2×1，p2=2atm｜pV=常数"
    },
    {
      "label": "例题2",
      "formula": "",
      "note": "p/T=常数，p2/p1=T2/T1=373/273≈1.37倍｜p/T=常数"
    }
  ],
  "advanced": [
    {
      "label": "例题1",
      "formula": "",
      "note": "比较T1和T2，V1和V2，p1和p2｜判断过程类型"
    }
  ],
  "challenge": [
    {
      "label": "例题1",
      "formula": "",
      "note": "分别用两个定律分析｜多过程分析"
    },
    {
      "label": "例题2",
      "formula": "",
      "note": "等温线是双曲线，等压线是水平线，等容线是垂线｜图像分析"
    },
    {
      "label": "例题3",
      "formula": "",
      "note": "｜用实验验证"
    }
  ]
},

  // ===== 区块4：公式卡片 =====
  formulas: [],

  // ===== 区块5：理解度自评 =====
  selfEval: [
  {
    "level": "A",
    "question": "我能熟练分析气体过程",
    "description": "可以进入P47学习"
  },
  {
    "level": "B",
    "question": "我知道公式但判断不熟",
    "description": "完成J级变形"
  },
  {
    "level": "C",
    "question": "我把三个定律混淆",
    "description": "重读「概念涌现」部分"
  }
],

  // ===== 关联链接 =====
  relatedModels: [
  "M34"
],
  crossLinks: [
  {
    "subject": "数学",
    "conceptName": "反比例函数、正比例函数",
    "relation": "气体定律的函数形式",
    "conceptId": ""
  }
],
}
