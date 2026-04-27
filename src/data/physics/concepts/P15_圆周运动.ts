// P15 — 圆周运动（运动学特征·动力学方程）
// 内容来源：docs/knowledge/physics/P15_圆周运动.md

import type { ConceptData } from './types'

export const P15: ConceptData = {
  id: 'P15',
  title: '圆周运动（运动学特征·动力学方程）',
  subtitle: '圆周运动的本质是"速度方向时刻变化"——加速度指向圆心，描述速度方向的变化率。',
  module: '曲线运动',
  chapter: '圆周运动',
  difficulty: 3,

  // ===== 区块1：前置知识检测 =====
  preCheck: [
  {
    "question": "单选 | 难度1   题目：关于匀速圆周运动，以下说法正确的是",
    "options": [
      "速度不变",
      "加速度不变",
      "向心力不做功",
      "向心力改变速度大小"
    ],
    "answer": "C",
    "explanation": "向心力垂直于速度方向，只改变速度方向，不做功"
  },
  {
    "question": "单选 | 难度1   题目：关于向心力的说法，正确的是",
    "options": [
      "向心力是一种特殊力",
      "向心力改变速度大小",
      "向心力指向圆心",
      "向心力可以做功"
    ],
    "answer": "C",
    "explanation": "向心力是效果力，垂直于速度方向，不做功"
  },
  {
    "question": "简答 | 难度1   题目：为什么说\"匀速圆周运动不是匀速运动\"？",
    "options": [],
    "answer": "因为速度是矢量，有大小和方向。匀速圆周运动速率不变，但方向始终在变化，所以不是匀速运动。",
    "explanation": "很多学生混淆\"匀速\"和\"匀速率\""
  }
],

  // ===== 区块2：叙事正文 =====
  narrative: {
  "context": "你用绳子拉着一个球让它绕你转圈。手有什么感觉？ 你会感到绳子在\"拉\"着球——球想要飞出去，但你把它拉住了。 这个\"拉\"的力指向圆心，叫做**向心力**。没有这个力，球就会飞出去。",
  "confusion": "很多学生认为\"匀速圆周运动速度不变\"。 实际上： - **速度是矢量**，有大小和方向 - 匀速圆周运动中，速度**大小不变**，但**方向时刻在变** - 所以它不是\"匀速运动\"，而是\"匀速率圆周运动\" 另一个困惑：\"向心力从哪里来？\"——向心力不是单独存在的力，而是其他力（重力、弹力、摩擦力等）的合力。",
  "experiment": "用转盘实验理解向心加速度： 测量不同半径和角速度下的向心力： | 半径r(m) | 角速度ω(rad/s) | 向心力F(N) | |:---|:---|:---| | 0.2 | 5 | 0.5 | | 0.2 | 10 | 2.0 | | 0.4 | 5 | 1.0 | | 0.4 | 10 | 4.0 | 验证：$F \\propto mr\\omega^2$，即$F = mr\\omega^2$",
  "concept": "从实验提炼圆周运动的核心概念： **匀速圆周运动**： - 轨迹是圆 - 速率恒定 - 周期$T$、频率$f = 1/T$、角速度$\\omega = 2\\pi/T$ **向心加速度**： $$a_n = \\frac{v^2}{r} = r\\omega^2$$ 方向：始终指向圆心，描述速度方向的变化。 **向心力**： $$F_n = ma_n = \\frac{mv^2}{r} = mr\\omega^2$$ 是效果力，由其他力提供。",
  "derivation": "向心加速度公式推导： **1. 从速度变化理解** 设在$\\Delta t$时间内，速度从$\\vec{v}$转到$\\vec{v}'$，夹角$\\Delta \\theta$。 速度变化量$\\Delta \\vec{v}$的方向指向圆心，大小$|\\Delta v| = v\\Delta \\theta$。 **2. 推导加速度** $$a = \\frac{\\Delta v}{\\Delta t} = \\frac{v\\Delta \\theta}{\\Delta t} = v\\omega = \\frac{v^2}{r}$$ **3. 向心力** 由牛顿第二定律： $$F = ma = \\frac{mv^2}{r} = mr\\omega^2$$ **4. 理解\"效果力\"** 向心力不是一种特殊性质的力，它可能是： - 绳子的拉力 - 摩擦力 - 重力与支持力的合力 - 任何指向圆心的力",
  "transfer": "圆周运动在生活中无处不在： **汽车转弯**：汽车转弯时，摩擦力提供向心力。弯道半径越小、速度越大，需要的摩擦力越大——这就是为什么高速弯道需要更大的半径。 **洗衣机脱水**：衣服紧贴筒壁，筒壁的支持力提供向心力。当转速足够大时，水滴所需的向心力超过附着力，被甩出。 **地球自转**：地球自转时，赤道上的物体需要向心力，约等于重力的0.3%。这就是赤道重力略小于两极的原因。 ---"
},

  // ===== 区块3：分层变形 =====
  variations: {
  "basic": [
    {
      "label": "例题1",
      "formula": "",
      "note": "$\\omega = 2\\pi/T = \\pi rad/s$，$a = r\\omega^2 = 0.5 \\times \\pi^2 \\approx 4.93 m/s^2$｜用周期求角速度"
    },
    {
      "label": "例题2",
      "formula": "",
      "note": "$F = mv^2/r = 2 \\times 25 / 1 = 50 N$｜向心力公式"
    }
  ],
  "advanced": [
    {
      "label": "例题1",
      "formula": "",
      "note": "(1) $\\omega = 2\\pi rad/s$，$a = r\\omega^2 = 0.5 \\times 4\\pi^2 \\approx 19.6 m/s^2$   (2) $f = ma = 1 \\times 19.6 = 19.6 N$｜摩擦力提供向心力"
    }
  ],
  "challenge": [
    {
      "label": "例题1",
      "formula": "",
      "note": "$f_{max} = m r \\omega_{max}^2$   $\\omega_{max} = \\sqrt{f_{max}/(mr)} = \\sqrt{10/0.2} = \\sqrt{50} \\approx 7.07 rad/s$｜摩擦力极限"
    },
    {
      "label": "例题2",
      "formula": "",
      "note": "$T = 2\\pi\\sqrt{l\\cos\\theta/g}$   $\\cos\\theta = gT^2/(4\\pi^2l) = 10 \\times 4 / (4\\pi^2 \\times 2) = 40/78.96 \\approx 0.507$   $\\theta \\approx 59.5^\\circ$｜受力分解，摆长需足够才能实现给定周期"
    },
    {
      "label": "例题3",
      "formula": "",
      "note": "｜用实验验证公式"
    }
  ]
},

  // ===== 区块4：公式卡片 =====
  formulas: [
  {
    "formula": "$a = v^2/r = r\\omega^2$",
    "name": "向心加速度",
    "usage": "匀速圆周运动"
  },
  {
    "formula": "$F = mv^2/r = mr\\omega^2$",
    "name": "向心力",
    "usage": "匀速圆周运动"
  },
  {
    "formula": "$\\omega = 2\\pi/T = 2\\pi f$",
    "name": "角速度",
    "usage": "周期性运动"
  },
  {
    "formula": "$v = \\omega r$",
    "name": "线速度与角速度关系",
    "usage": "圆周运动"
  }
],

  // ===== 区块5：理解度自评 =====
  selfEval: [
  {
    "level": "A",
    "question": "我能熟练分析圆周运动，会用向心力公式",
    "description": "可以进入P17天体运动学习"
  },
  {
    "level": "B",
    "question": "我知道公式但受力分析不熟",
    "description": "完成J级变形，确认临界问题"
  },
  {
    "level": "C",
    "question": "我把向心力和向心加速度混淆",
    "description": "重读「概念涌现」部分"
  }
],

  // ===== 关联链接 =====
  relatedModels: [
  "M13",
  "M14",
  "M15"
],
  crossLinks: [
  {
    "subject": "数学",
    "conceptName": "三角函数",
    "relation": "圆周运动的周期性",
    "conceptId": ""
  }
],
}
