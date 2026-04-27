// P30 — 电容器
// 内容来源：docs/knowledge/physics/P30_电容器.md

import type { ConceptData } from './types'

export const P30: ConceptData = {
  id: 'P30',
  title: '电容器',
  subtitle: '电容器是"储存电荷和电能的器件"——电容反映储存电荷的能力。',
  module: '电磁学',
  chapter: '电容',
  difficulty: 3,

  // ===== 区块1：前置知识检测 =====
  preCheck: [
  {
    "question": "单选 | 难度1 题目：关于电容器的说法，正确的是",
    "options": [
      "电容器断开电源后，增大板间距，电压不变",
      "电容器接在电路中，增大板间距，电荷不变",
      "电容是导体本身的固有属性",
      "电容器断开电源后，极板电荷一定为零"
    ],
    "answer": "C",
    "explanation": "电容由几何结构决定，与Q、U无关"
  },
  {
    "question": "单选 | 难度1   题目：平行板电容器电容减半的方法是",
    "options": [
      "电压加倍",
      "电荷量减半",
      "板间距离加倍",
      "正对面积减半"
    ],
    "answer": "C、D",
    "explanation": "$C \\propto S/d$"
  },
  {
    "question": "简答 | 难度1   题目：为什么说\"电容等于电压与电荷量之比\"是定义而不是数量关系？",
    "options": [],
    "answer": "因为电容是导体固有属性，与U、Q的具体值无关。就像杯子容量是固定的，与装多少水无关。",
    "explanation": "区分定义式和数量关系"
  }
],

  // ===== 区块2：叙事正文 =====
  narrative: {
  "context": "照相机闪光灯瞬间发光，能量从哪里来？ 从**电容器**——它储存了大量的电荷，在需要时瞬间释放。",
  "confusion": "很多学生认为\"电容器断开电源后电荷不变，接在电路中也是这样\"。 实际上： - 断开电源的孤立电容器：电荷$Q$不变，改变极板距离或面积时$U$和$C$会变 - 接在电路中的电容器：电压$U$不变，改变结构时$Q$和$C$会变 - 关键看电容器是保持$Q$不变还是$U$不变",
  "experiment": "用平行板电容器实验： | 电压U(V) | 电荷Q(×10⁻⁶C) | Q/U(×10⁻⁶F) | |:---|:---|:---| | 10 | 2 | 0.2 | | 20 | 4 | 0.2 | | 30 | 6 | 0.2 | 观察：Q/U是常数——这就是**电容**！",
  "concept": "电容定义： **电容**： $$C = \\frac{Q}{U}$$ - 反映储存电荷的能力 - 单位：法拉（F） **平行板电容器**： $$C = \\frac{\\varepsilon_r S}{4\\pi kd}$$ - 与正对面积$S$成正比 - 与板间距离$d$成反比 - 与介质有关",
  "derivation": "电容公式推导： **1. 从定义出发** $$C = \\frac{Q}{U}$$ **2. 平行板电容器** 电场$E = U/d$，电荷$Q = \\varepsilon_0 E S$（真空） $$C = \\frac{Q}{U} = \\frac{\\varepsilon_0 S}{d}$$ **3. 有介质时** $$C = \\frac{\\varepsilon_r \\varepsilon_0 S}{d}$$ 其中$\\varepsilon_r$是相对介电常数。 **4. 能量储存** 电容器储存的能量： $$W = \\frac{1}{2}CU^2 = \\frac{1}{2}QU$$",
  "transfer": "电容的应用： **闪光灯**：先充电，拍照时瞬间放电。 **滤波器**：在电路中平滑电压。 **电子工业**：集成电路中的电容用于耦合、滤波。 ---"
},

  // ===== 区块3：分层变形 =====
  variations: {
  "basic": [
    {
      "label": "例题1",
      "formula": "",
      "note": "$Q = CU = 2 \\times 10^{-6} \\times 100 = 2 \\times 10^{-4} C$｜$Q = CU$"
    },
    {
      "label": "例题2",
      "formula": "",
      "note": "$W = \\frac{1}{2}CU^2$，$U = \\sqrt{2W/C} = \\sqrt{1/20 \\times 10^6} = 224V$｜能量公式"
    }
  ],
  "advanced": [
    {
      "label": "例题1",
      "formula": "",
      "note": "$C \\propto 1/d$，$d$增大→$C$减小   $Q$不变（断开电源）   $U = Q/C$，$C$减小→$U$增大｜动态分析"
    }
  ],
  "challenge": [
    {
      "label": "例题1",
      "formula": "",
      "note": "相当于两个电容器串联   $C' = 2\\varepsilon_r C_0 / (1+\\varepsilon_r)$｜等效电路分析"
    },
    {
      "label": "例题2",
      "formula": "",
      "note": "插入时电场做功，能量变化。$W$减小（被吸引做功）｜能量转化"
    },
    {
      "label": "例题3",
      "formula": "",
      "note": "｜用定义测电容"
    }
  ]
},

  // ===== 区块4：公式卡片 =====
  formulas: [
  {
    "formula": "$C = Q/U$",
    "name": "电容定义",
    "usage": "任意"
  },
  {
    "formula": "$C = \\varepsilon_r S/4\\pi kd$",
    "name": "平行板电容",
    "usage": "平行板"
  },
  {
    "formula": "$W = \\frac{1}{2}CU^2$",
    "name": "电容储能",
    "usage": "任意"
  }
],

  // ===== 区块5：理解度自评 =====
  selfEval: [
  {
    "level": "A",
    "question": "我能熟练分析电容器动态问题",
    "description": "可以进入P31学习"
  },
  {
    "level": "B",
    "question": "我知道公式但分析不熟",
    "description": "完成J级变形"
  },
  {
    "level": "C",
    "question": "我把电容和电荷混淆",
    "description": "重读「概念涌现」部分"
  }
],

  // ===== 关联链接 =====
  relatedModels: [
  "M24",
  "M26"
],
  crossLinks: [
  {
    "subject": "化学",
    "conceptName": "电容与电化学",
    "relation": "双电层电容",
    "conceptId": ""
  }
],
}
