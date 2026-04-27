// P32 — 恒定电流（欧姆定律·电阻定律）
// 内容来源：docs/knowledge/physics/P32_恒定电流.md

import type { ConceptData } from './types'

export const P32: ConceptData = {
  id: 'P32',
  title: '恒定电流（欧姆定律·电阻定律）',
  subtitle: '电流是"电荷的定向移动"——欧姆定律描述U-I关系，电阻定律描述材料对电流的阻碍。',
  module: '电磁学',
  chapter: '电路基础',
  difficulty: 3,

  // ===== 区块1：前置知识检测 =====
  preCheck: [
  {
    "question": "单选 | 难度1   题目：关于电流的说法，正确的是",
    "options": [
      "电流是电荷量",
      "电流有方向，是矢量",
      "电流是标量，方向表示正电荷移动方向",
      "电子移动方向就是电流方向"
    ],
    "answer": "C",
    "explanation": "电流是标量"
  },
  {
    "question": "单选 | 难度1   题目：关于电阻的说法，正确的是",
    "options": [
      "电阻与电压成正比",
      "电阻与电流成反比",
      "电阻是导体属性",
      "电阻与功率成正比"
    ],
    "answer": "C",
    "explanation": "$R = U/I$是比值定义"
  },
  {
    "question": "简答 | 难度1   题目：为什么灯泡点亮时电阻比不点亮时大？",
    "options": [],
    "answer": "因为灯丝温度升高，电阻率增大。金属的电阻随温度升高而增大。",
    "explanation": "温度对电阻的影响"
  }
],

  // ===== 区块2：叙事正文 =====
  narrative: {
  "context": "电流看不见，但我们能测量。 电流表、电压表显示的是什么？它们测量的是**电流强度**和**电压**。",
  "confusion": "很多学生认为\"电流从正极流向负极\"。 实际上： - 在电源**外部**：电流从正极流向负极 - 在电源**内部**：电流从负极流向正极（非静电力做功） - 完整回路中电流方向是闭合的",
  "experiment": "用实验验证欧姆定律： | 电压U(V) | 电流I(A) | U/I(Ω) | |:---|:---|:---| | 2 | 0.2 | 10 | | 4 | 0.4 | 10 | | 6 | 0.6 | 10 | 观察：U/I是常数——这就是**电阻**！",
  "concept": "电流和电阻： **电流**： $$I = \\frac{q}{t}$$ - 单位：安培（A） - 方向：正电荷移动方向 **欧姆定律**： $$I = \\frac{U}{R}$$ **电阻定律**： $$R = \\rho \\frac{l}{S}$$ - $\\rho$：电阻率 - $l$：长度 - $S$：横截面积",
  "derivation": "电路公式推导： **1. 电流定义** $$I = \\frac{q}{t}$$ **2. 欧姆定律** $$U = IR$$ **3. 电阻定律** $$R = \\rho \\frac{l}{S}$$",
  "transfer": "应用实例： **电线**：用铜线（电阻率小）减少损耗。 **电阻器**：在电路中限流、分压。 **白炽灯**：灯丝电阻随温度升高而增大。 ---"
},

  // ===== 区块3：分层变形 =====
  variations: {
  "basic": [
    {
      "label": "例题1",
      "formula": "",
      "note": "$I = U/R = 5/10 = 0.5A$｜欧姆定律"
    },
    {
      "label": "例题2",
      "formula": "",
      "note": "$R = \\rho l/S = 1.7 \\times 10^{-8} \\times 10 / 10^{-6} = 0.17Ω$｜电阻定律"
    }
  ],
  "advanced": [
    {
      "label": "例题1",
      "formula": "",
      "note": "$R = R_1 + R_2 = 5Ω$   $U_1:U_2 = R_1:R_2 = 2:3$｜串联分压"
    }
  ],
  "challenge": [
    {
      "label": "例题1",
      "formula": "",
      "note": "$\\Delta R = R_0 \\alpha \\Delta t$｜温度系数"
    },
    {
      "label": "例题2",
      "formula": "",
      "note": "用微分电阻$r = dU/dI$描述非线性特性｜非线性元件"
    },
    {
      "label": "例题3",
      "formula": "",
      "note": "｜用实验测基本物理量"
    }
  ]
},

  // ===== 区块4：公式卡片 =====
  formulas: [
  {
    "formula": "$I = q/t$",
    "name": "电流定义",
    "usage": "任意"
  },
  {
    "formula": "$U = IR$",
    "name": "欧姆定律",
    "usage": "金属导体"
  },
  {
    "formula": "$R = \\rho l/S$",
    "name": "电阻定律",
    "usage": "均匀导体"
  },
  {
    "formula": "$P = IU$",
    "name": "电功率",
    "usage": "任意"
  }
],

  // ===== 区块5：理解度自评 =====
  selfEval: [
  {
    "level": "A",
    "question": "我能熟练分析电路问题",
    "description": "可以进入P33电功率学习"
  },
  {
    "level": "B",
    "question": "我知道公式但串并联不熟",
    "description": "完成J级变形"
  },
  {
    "level": "C",
    "question": "我把U、I、R混淆",
    "description": "重读「概念涌现」部分"
  }
],

  // ===== 关联链接 =====
  relatedModels: [
  "M27",
  "M28"
],
  crossLinks: [
  {
    "subject": "化学",
    "conceptName": "电解质导电",
    "relation": "离子导电",
    "conceptId": ""
  }
],
}
