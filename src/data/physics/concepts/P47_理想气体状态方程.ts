// P47 — 理想气体状态方程
// 内容来源：docs/knowledge/physics/P47_理想气体状态方程.md

import type { ConceptData } from './types'

export const P47: ConceptData = {
  id: 'P47',
  title: '理想气体状态方程',
  subtitle: '$\frac{pV}{T}=C$——一个方程统一了三个实验定律，是理想气体模型的完整描述。',
  module: '热学·光学·机械波',
  chapter: '气体方程',
  difficulty: 3,

  // ===== 区块1：前置知识检测 =====
  preCheck: [
  {
    "question": "单选 | 难度1   题目：关于理想气体状态方程，说法正确的是",
    "options": [
      "只适用于等温过程",
      "只适用于等压过程",
      "适用于任意过程",
      "只适用于等容过程"
    ],
    "answer": "C",
    "explanation": "状态方程描述初末状态"
  },
  {
    "question": "单选 | 难度1   题目：1mol理想气体在标准状况下的体积是",
    "options": [
      "22.4L",
      "24L",
      "20L",
      "25L"
    ],
    "answer": "A",
    "explanation": "标准摩尔体积"
  },
  {
    "question": "简答 | 难度1   题目：理想气体和真实气体的区别是什么？",
    "options": [],
    "answer": "理想气体假设分子无体积、无相互作用，真实气体在高压低温下偏离明显。",
    "explanation": "模型简化"
  }
],

  // ===== 区块2：叙事正文 =====
  narrative: {
  "context": "三个实验定律，分别描述三种特殊过程。 但实际气体状态变化往往同时涉及p、V、T三个量的变化。 能否用一个方程描述所有情况？",
  "confusion": "很多学生记不住标准状况的数据。 实际上： - 标准状况：$T = 273.15K$，$p = 1atm = 101325Pa$ - 标准摩尔体积：$V_m = 22.4L/mol$（近似值）",
  "experiment": "",
  "concept": "理想气体状态方程： **方程**： $$\\frac{p_1V_1}{T_1} = \\frac{p_2V_2}{T_2}$$ 或 $$pV = nRT$$ 其中$R = 8.31 J/(mol \\cdot K)$是气体常数",
  "derivation": "**1. 从三个实验定律推导** 由玻意耳、查理、盖吕萨克定律综合推导 **2. 一般形式** $$\\frac{pV}{T} = nR$$ **3. 适用条件** 理想气体是真实气体的近似模型： - 分子间距足够大 - 分子间除碰撞外无相互作用",
  "transfer": "应用实例： **气象学**：大气模型。 **热机**：卡诺循环。 **呼吸系统**：肺泡气体交换。 ---"
},

  // ===== 区块3：分层变形 =====
  variations: {
  "basic": [
    {
      "label": "例题1",
      "formula": "",
      "note": "$V = nRT/p = 2 \\times 8.31 \\times 300 / 10^5 = 0.05 m^3 = 50L$｜$pV = nRT$"
    },
    {
      "label": "例题2",
      "formula": "",
      "note": "$p_1V_1/T_1 = p_2V_2/T_2$，$T_2 = 300K$｜比例计算"
    }
  ],
  "advanced": [
    {
      "label": "例题1",
      "formula": "",
      "note": "分别用盖吕萨克和玻意耳定律｜多过程"
    }
  ],
  "challenge": [
    {
      "label": "例题1",
      "formula": "",
      "note": "$p = \\frac{1}{3}n\\overline{E_k}$，结合$\\overline{E_k} = \\frac{3}{2}kT$｜微观推导"
    },
    {
      "label": "例题2",
      "formula": "",
      "note": "等温线是双曲线，$\\Delta U = 0$，$W = Q$｜热力学第一定律"
    },
    {
      "label": "例题3",
      "formula": "",
      "note": "｜用实验验证"
    }
  ]
},

  // ===== 区块4：公式卡片 =====
  formulas: [
  {
    "formula": "$\\frac{p_1V_1}{T_1} = \\frac{p_2V_2}{T_2}$",
    "name": "状态方程",
    "usage": "任意"
  },
  {
    "formula": "$pV = nRT$",
    "name": "状态方程标准",
    "usage": "理想气体"
  },
  {
    "formula": "$R = 8.31 J/(mol\\cdot K)$",
    "name": "气体常数",
    "usage": "任意"
  }
],

  // ===== 区块5：理解度自评 =====
  selfEval: [
  {
    "level": "A",
    "question": "我能熟练使用状态方程",
    "description": "可以进入P48学习"
  },
  {
    "level": "B",
    "question": "我知道公式但计算不熟",
    "description": "完成J级变形"
  },
  {
    "level": "C",
    "question": "我把三个定律和状态方程混淆",
    "description": "重读「概念涌现」部分"
  }
],

  // ===== 关联链接 =====
  relatedModels: [
  "M34",
  "M35"
],
  crossLinks: [
  {
    "subject": "化学",
    "conceptName": "气体摩尔体积",
    "relation": "标准状况下的体积",
    "conceptId": ""
  }
],
}
