// P51 — 几何光学
// 内容来源：docs/knowledge/physics/P51_几何光学.md

import type { ConceptData } from './types'

export const P51: ConceptData = {
  id: 'P51',
  title: '几何光学',
  subtitle: '反射定律、折射定律、全反射——光的直线传播近似下的几何描述。',
  module: '热学·光学·机械波',
  chapter: '光学',
  difficulty: 3,

  // ===== 区块1：前置知识检测 =====
  preCheck: [
  {
    "question": "单选 | 难度1   题目：关于光的反射，说法正确的是",
    "options": [
      "反射角大于入射角",
      "反射角等于入射角",
      "反射线在法线同侧",
      "反射定律只对镜面成立"
    ],
    "answer": "B",
    "explanation": "反射角=入射角"
  },
  {
    "question": "单选 | 难度1   题目：光从空气射入水中，n=4/3，入射角30°，折射角约为",
    "options": [
      "30°",
      "22°",
      "45°",
      "60°"
    ],
    "answer": "B",
    "explanation": "sin r = sin30°/n = 0.5/1.33 ≈ 0.375，r≈22°"
  },
  {
    "question": "简答 | 难度1   题目：为什么光纤通信利用全反射原理？",
    "options": [],
    "answer": "因为光在纤芯和包层界面全反射，无损耗传输。",
    "explanation": "全反射应用"
  }
],

  // ===== 区块2：叙事正文 =====
  narrative: {
  "context": "筷子插入水中，看起来弯折了。 这是光的**折射**现象。 镜子能成像，因为光的**反射**。",
  "confusion": "很多学生认为\"全反射是从光密到光疏\"。 实际上： - 全反射需要从光密到光疏 - 并且入射角大于临界角",
  "experiment": "折射实验数据： | 入射角i(°) | 折射角r(°) | sin i/sin r | |:---|:---|:---| | 0 | 0 | 1.5 | | 30 | 19.5 | 1.5 | | 45 | 28.9 | 1.5 | 观察：n = sin i/sin r = 常数",
  "concept": "几何光学： **反射定律**：反射角=入射角 **斯涅尔定律**： $$n_1\\sin i = n_2\\sin r$$ **全反射**：从光密到光疏，入射角大于临界角 $$\\sin i_c = \\frac{n_2}{n_1}$$",
  "derivation": "**1. 反射定律** 反射角等于入射角 **2. 折射定律** $$n_1\\sin i = n_2\\sin r$$ **3. 全反射条件** 从光密到光疏，入射角大于临界角 **4. 光速与折射率** $$v = \\frac{c}{n}$$",
  "transfer": "应用实例： **光纤通信**：利用全反射传输光信号。 **眼镜**：透镜折射成像。 **棱镜**：色散现象。 ---"
},

  // ===== 区块3：分层变形 =====
  variations: {
  "basic": [
    {
      "label": "例题1",
      "formula": "",
      "note": "$\\sin i_c = 1/1.5 = 2/3$，$i_c \\approx 42°$｜$\\sin i_c = n_2/n_1$"
    },
    {
      "label": "例题2",
      "formula": "",
      "note": "$n = \\sin 45°/\\sin 30° = 0.707/0.5 = 1.41$｜$n = \\sin i/\\sin r$"
    }
  ],
  "advanced": [
    {
      "label": "例题1",
      "formula": "",
      "note": "入射角大于42°｜临界角条件"
    }
  ],
  "challenge": [
    {
      "label": "例题1",
      "formula": "",
      "note": "不同波长光折射率不同｜折射率与波长"
    },
    {
      "label": "例题2",
      "formula": "",
      "note": "等大、正立、虚像｜平面镜成像"
    },
    {
      "label": "例题3",
      "formula": "",
      "note": "｜用插针法测折射率"
    }
  ]
},

  // ===== 区块4：公式卡片 =====
  formulas: [
  {
    "formula": "$n_1\\sin i = n_2\\sin r$",
    "name": "斯涅尔定律",
    "usage": "任意"
  },
  {
    "formula": "$\\sin i_c = n_2/n_1$",
    "name": "临界角",
    "usage": "全反射"
  },
  {
    "formula": "$v = c/n$",
    "name": "光速与折射率",
    "usage": "介质"
  }
],

  // ===== 区块5：理解度自评 =====
  selfEval: [
  {
    "level": "A",
    "question": "我能熟练分析几何光学问题",
    "description": "可以进入P52学习"
  },
  {
    "level": "B",
    "question": "我知道公式但全反射条件不熟",
    "description": "完成J级变形"
  },
  {
    "level": "C",
    "question": "我把反射和折射混淆",
    "description": "重读「概念涌现」部分"
  }
],

  // ===== 关联链接 =====
  relatedModels: [
  "M38",
  "M39"
],
  crossLinks: [
  {
    "subject": "技术",
    "conceptName": "光纤通信",
    "relation": "全反射应用",
    "conceptId": ""
  }
],
}
