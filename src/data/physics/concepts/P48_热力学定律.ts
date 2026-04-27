// P48 — 热力学定律
// 内容来源：docs/knowledge/physics/P48_热力学定律.md

import type { ConceptData } from './types'

export const P48: ConceptData = {
  id: 'P48',
  title: '热力学定律',
  subtitle: '第一定律$\Delta U=W+Q$是能量守恒在热学中的体现；第二定律指出自然过程的方向性。',
  module: '热学·光学·机械波',
  chapter: '热力学',
  difficulty: 3,

  // ===== 区块1：前置知识检测 =====
  preCheck: [
  {
    "question": "单选 | 难度1   题目：关于热力学第一定律，说法正确的是",
    "options": [
      "$\\Delta U = Q - W_{对外}$",
      "$\\Delta U = W + Q$",
      "$\\Delta U = Q$",
      "$\\Delta U = W$"
    ],
    "answer": "B",
    "explanation": "$\\Delta U = W + Q$，其中W为外界对系统做的功"
  },
  {
    "question": "单选 | 难度1   题目：气体等温膨胀，吸收热量Q，则",
    "options": [
      "$\\Delta U = Q$",
      "$\\Delta U = 0$",
      "$\\Delta U = -Q$",
      "无法确定"
    ],
    "answer": "B",
    "explanation": "等温$\\Delta U = 0$"
  },
  {
    "question": "简答 | 难度1   题目：为什么第二类永动机不可能？",
    "options": [],
    "answer": "因为热机效率永远小于1，不可能把内能全部转化为机械能。",
    "explanation": "第二定律"
  }
],

  // ===== 区块2：叙事正文 =====
  narrative: {
  "context": "空调把热量从室内移到室外。 这个过程消耗了电能。 能量守恒：热量不是\"凭空\"转移的。",
  "confusion": "很多学生认为\"热量可以自发从低温传到高温\"。 实际上： - 自发过程：热量从高温传到低温 - 逆向过程：必须借助外界做功（如冰箱）",
  "experiment": "能量转化数据： | 过程 | 做功W | 吸热Q | 内能变化ΔU | |:---|:---|:---|:---| | 等容加热 | 0 | Q | ΔU=Q | | 等压膨胀 | W | Q | ΔU=Q-W | | 绝热压缩 | W | 0 | ΔU=W | 验证：$\\Delta U = W + Q$",
  "concept": "热力学第一定律： $$\\Delta U = W + Q$$ - $\\Delta U$：内能变化 - $W$：外界对系统做的功 - $Q$：系统吸收的热量 热力学第二定律： - 克劳修斯表述：热量不能自发从低温传到高温 - 开尔文表述：不可能从单一热源吸热全部做功",
  "derivation": "**1. 热力学第一定律** $$\\Delta U = Q - W_{对外}$$ 或 $$\\Delta U = W + Q$$ **2. 能量守恒** 热力学第一定律是能量守恒在热学中的体现 **3. 第二定律** 自然过程有方向性： - 热传导：高温→低温 - 做功：内能→机械能 - 逆向过程都需要外界做功",
  "transfer": "应用实例： **热机**：内能转化为机械能，效率$\\eta < 1$ **冰箱**：消耗电能搬运热量 **热泵**：冬天从室外取热到室内 ---"
},

  // ===== 区块3：分层变形 =====
  variations: {
  "basic": [
    {
      "label": "例题1",
      "formula": "",
      "note": "$\\Delta U = Q - W = 500 - 300 = 200J$｜$\\Delta U = Q - W$"
    },
    {
      "label": "例题2",
      "formula": "",
      "note": "$\\Delta U = Q - W = 800J$｜内能增加"
    }
  ],
  "advanced": [
    {
      "label": "例题1",
      "formula": "",
      "note": "$\\Delta U = 0$（回到初态）｜状态量"
    }
  ],
  "challenge": [
    {
      "label": "例题1",
      "formula": "",
      "note": "$\\eta = 1 - T_冷/T_热$｜理想热机"
    },
    {
      "label": "例题2",
      "formula": "",
      "note": "孤立系统$\\Delta S \\geq 0$｜方向性"
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
    "formula": "$\\Delta U = Q - W$",
    "name": "热力学第一定律",
    "usage": "任意"
  },
  {
    "formula": "$\\eta = 1 - T_2/T_1$",
    "name": "卡诺效率",
    "usage": "可逆热机"
  }
],

  // ===== 区块5：理解度自评 =====
  selfEval: [
  {
    "level": "A",
    "question": "我能熟练使用热力学定律",
    "description": "热学板块完成"
  },
  {
    "level": "B",
    "question": "我知道公式但方向判断不熟",
    "description": "完成J级变形"
  },
  {
    "level": "C",
    "question": "我把第一定律和第二定律混淆",
    "description": "重读「概念涌现」部分"
  }
],

  // ===== 关联链接 =====
  relatedModels: [
  "M35"
],
  crossLinks: [
  {
    "subject": "化学",
    "conceptName": "化学反应的自发性",
    "relation": "方向性",
    "conceptId": ""
  }
],
}
