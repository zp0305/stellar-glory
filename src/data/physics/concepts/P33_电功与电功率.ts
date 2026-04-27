// P33 — 电功·电功率·焦耳定律
// 内容来源：docs/knowledge/physics/P33_电功与电功率.md

import type { ConceptData } from './types'

export const P33: ConceptData = {
  id: 'P33',
  title: '电功·电功率·焦耳定律',
  subtitle: '电功是电能转化为其他形式能的量度，电功率是转化快慢，焦耳定律描述热效应。',
  module: '电磁学',
  chapter: '电能',
  difficulty: 3,

  // ===== 区块1：前置知识检测 =====
  preCheck: [
  {
    "question": "单选 | 难度1   题目：关于电功的说法，正确的是",
    "options": [
      "电功是矢量",
      "电功等于电功率",
      "电功是电能转化的量度",
      "电功单位是瓦特"
    ],
    "answer": "C",
    "explanation": "电功是电能转化的量度"
  },
  {
    "question": "单选 | 难度1   题目：电阻R=10Ω，电流I=2A，求1分钟产生的热量。",
    "options": [
      "120J",
      "240J",
      "2400J",
      "4800J"
    ],
    "answer": "C",
    "explanation": "$Q = I^2Rt = 4 \\times 10 \\times 60 = 2400J$"
  },
  {
    "question": "简答 | 难度1   题目：为什么电视、电脑需要散热？",
    "options": [],
    "answer": "因为电流通过电阻会产生热量（焦耳定律），需要散热保护设备。",
    "explanation": "热效应"
  }
],

  // ===== 区块2：叙事正文 =====
  narrative: {
  "context": "电费怎么算？不仅看功率，还看用电时间。 1000W的空调开1小时和100W的灯泡开10小时，耗电一样多！",
  "confusion": "很多学生认为\"电功率大的用电器耗电多\"。 实际上： - 电功$W = Pt$，与功率和时间都有关 - 1000W开1小时：$W = 1kW \\times 1h = 1kWh$ - 100W开10小时：$W = 0.1kW \\times 10h = 1kWh$",
  "experiment": "用电器功率比较： | 用电器 | 功率P(W) | 1小时耗电(kWh) | |:---|:---|:---| | 空调 | 1000 | 1 | | 电视 | 100 | 0.1 | | 节能灯 | 20 | 0.02 |",
  "concept": "电功和电功率： **电功**： $$W = UIt$$ - 单位：焦耳（J）或瓦时（Wh） **电功率**： $$P = UI = I^2R = \\frac{U^2}{R}$$ **焦耳定律**： $$Q = I^2Rt$$",
  "derivation": "公式推导： **1. 从功率定义** $$P = \\frac{W}{t} = UI$$ **2. 欧姆定律代入** $$P = I^2R = \\frac{U^2}{R}$$ **3. 电功** $$W = Pt = UIt$$ **4. 焦耳定律** $$Q = I^2Rt$$",
  "transfer": "应用实例： **电热器**：利用电流热效应工作。 **保险丝**：利用热效应，电流过大时熔断。 **节能**：选择合适的功率和时间。 ---"
},

  // ===== 区块3：分层变形 =====
  variations: {
  "basic": [
    {
      "label": "例题1",
      "formula": "",
      "note": "$P = U^2/R = 220^2/20 = 2420W$｜$P = U^2/R$"
    },
    {
      "label": "例题2",
      "formula": "",
      "note": "$W = Pt = 0.1 \\times 5 \\times 30 = 15kWh = 15度$｜kWh"
    }
  ],
  "advanced": [
    {
      "label": "例题1",
      "formula": "",
      "note": "(1) $P_{总} = UI = 2200W$   (2) $P_{热} = I^2R = 200W$   (3) $\\eta = (P_{总}-P_{热})/P_{总} = 90.9\\%$｜能量转化"
    }
  ],
  "challenge": [
    {
      "label": "例题1",
      "formula": "",
      "note": "$R_1R_3 = R_2R_4$｜电桥原理"
    },
    {
      "label": "例题2",
      "formula": "",
      "note": "短路电流无穷大，断路电流为零｜电路故障分析"
    },
    {
      "label": "例题3",
      "formula": "",
      "note": "｜用伏安法测功率"
    }
  ]
},

  // ===== 区块4：公式卡片 =====
  formulas: [
  {
    "formula": "$W = UIt$",
    "name": "电功",
    "usage": "任意"
  },
  {
    "formula": "$P = UI$",
    "name": "电功率",
    "usage": "任意"
  },
  {
    "formula": "$P = I^2R$",
    "name": "热功率",
    "usage": "任意"
  },
  {
    "formula": "$Q = I^2Rt$",
    "name": "焦耳定律",
    "usage": "任意"
  }
],

  // ===== 区块5：理解度自评 =====
  selfEval: [
  {
    "level": "A",
    "question": "我能熟练计算电功和功率",
    "description": "可以进入P34闭合电路学习"
  },
  {
    "level": "B",
    "question": "我知道公式但效率分析不熟",
    "description": "完成J级变形"
  },
  {
    "level": "C",
    "question": "我把电功和电功率混淆",
    "description": "重读「概念涌现」部分"
  }
],

  // ===== 关联链接 =====
  relatedModels: [
  "M27"
],
  crossLinks: [
  {
    "subject": "化学",
    "conceptName": "电镀",
    "relation": "电解池的功率计算",
    "conceptId": ""
  }
],
}
