// P20 — 动能与动能定理
// 内容来源：docs/knowledge/physics/P20_动能与动能定理.md

import type { ConceptData } from './types'

export const P20: ConceptData = {
  id: 'P20',
  title: '动能与动能定理',
  subtitle: '动能定理是"合外力做的功=动能的变化"——不看中间过程，只看初末状态。',
  module: '能量与动量',
  chapter: '动能定理',
  difficulty: 3,

  // ===== 区块1：前置知识检测 =====
  preCheck: [
  {
    "question": "单选 | 难度1   题目：质量2kg的物体速度从5m/s增加到10m/s，动能增加了",
    "options": [
      "50J",
      "75J",
      "100J",
      "25J"
    ],
    "answer": "B",
    "explanation": "$\\Delta E_k = \\frac{1}{2}m(v^2 - v_0^2) = \\frac{1}{2} \\times 2 \\times (100 - 25) = 75J$"
  },
  {
    "question": "单选 | 难度1   题目：关于动能和速度的关系，正确的是",
    "options": [
      "动能与速度成正比",
      "动能与速度平方成正比",
      "动能是矢量",
      "速度大的物体动能一定大"
    ],
    "answer": "B",
    "explanation": "$E_k = \\frac{1}{2}mv^2$，与$v^2$成正比"
  },
  {
    "question": "简答 | 难度1   题目：汽车以恒定速度行驶，合外力做功是多少？",
    "options": [],
    "answer": "零。因为速度不变，动能不变，根据$W = \\Delta E_k = 0$。",
    "explanation": "匀速运动合外力为零"
  }
],

  // ===== 区块2：叙事正文 =====
  narrative: {
  "context": "你把一个物体从静止推到一定速度，需要对它做功。 如果物体已经有速度，要让它停下来，需要对物体做负功（或者物体克服阻力做功）。 这个过程中，**功和动能**有什么关系？",
  "confusion": "很多学生认为\"动能和速度成正比\"。 实际上： - 速度2倍，动能是4倍 - 速度3倍，动能是9倍 因为：$E_k = \\frac{1}{2}mv^2$，动能与速度的**平方**成正比。 另一个困惑：\"动能定理只能用于直线运动？\"——不对，曲线运动同样适用，因为定理只关心初末状态。",
  "experiment": "用实验验证动能定理： 小车在不同拉力下的动能变化： | 拉力F(N) | 位移s(m) | 初始v(m/s) | 末态v(m/s) | 动能变化ΔE_k(J) | 做功W(J) | |:---|:---|:---|:---|:---|:---| | 2 | 2 | 0 | 2 | 4 | 4 | | 4 | 4 | 0 | 4 | 16 | 16 | | 2 | 4 | 0 | 2.83 | 8 | 8 | 验证：$W = \\Delta E_k$",
  "concept": "从实验提炼动能和动能定理： **动能定义**： $$E_k = \\frac{1}{2}mv^2$$ - 动能是标量 - 单位：焦耳（J） - 状态量（取决于瞬时速度） **动能定理**： $$W_{合} = \\Delta E_k = E_{k2} - E_{k1}$$ 合外力做的功等于动能的变化。",
  "derivation": "动能定理推导： **1. 从牛顿第二定律出发** 设质量为$m$的物体，受合外力$F$做直线运动，从$v_0$加速到$v$。 **2. 推导位移公式** $$v^2 - v_0^2 = 2as$$ $$s = \\frac{v^2 - v_0^2}{2a}$$ **3. 代入功的定义** $$W = Fs = ma \\cdot \\frac{v^2 - v_0^2}{2a} = \\frac{1}{2}mv^2 - \\frac{1}{2}mv_0^2$$ **4. 得到动能定理** $$W = \\Delta E_k$$ 这就是动能定理：**合外力做的功等于动能的变化**。",
  "transfer": "动能定理在生活中广泛应用： **汽车刹车**：刹车距离$s = \\frac{mv^2}{2f}$，与速度平方成正比——这就是为什么高速刹车距离更长。 **蹦极**：从高处落下，重力做功转化为动能，弹性绳再把动能转化为弹性势能。 **物理实验**：用打点计时器测速度，通过$\\Delta E_k$验证动能定理。 ---"
},

  // ===== 区块3：分层变形 =====
  variations: {
  "basic": [
    {
      "label": "例题1",
      "formula": "",
      "note": "$W = \\Delta E_k = \\frac{1}{2} \\times 1 \\times (16 - 4) = 6J$｜套用动能变化公式"
    },
    {
      "label": "例题2",
      "formula": "",
      "note": "$W = -\\frac{1}{2}mv^2 = -\\frac{1}{2} \\times 2000 \\times 400 = -4 \\times 10^5 J$   $F = W/s = -4 \\times 10^5 / 50 = -8000 N$｜末态动能为0"
    }
  ],
  "advanced": [
    {
      "label": "例题1",
      "formula": "",
      "note": "(1) $W_{合} = (F - f)s = (10 - 2) \\times 5 = 40J$   (2) $W_{合} = \\frac{1}{2}mv^2$，即$40 = \\frac{1}{2} \\times 2 \\times v^2$，得$v = 2\\sqrt{10} \\approx 6.32 m/s$｜合外力做功"
    }
  ],
  "challenge": [
    {
      "label": "例题1",
      "formula": "",
      "note": "落地时速度$v = \\sqrt{v_x^2 + v_y^2}$，其中$v_x = v_0$，$v_y = gt$   由$s = v_0 t$得$t = 20/10 = 2s$，$v_y = 20 m/s$   $v = \\sqrt{100 + 400} = \\sqrt{500} \\approx 22.4 m/s$   $W = \\Delta E_k = \\frac{1}{2} \\times 1 \\times (22.4^2 - 10^2) = \\frac{1}{2} \\times (500 - 100) = 200J$｜曲线运动同样适用动能定理"
    },
    {
      "label": "例题2",
      "formula": "",
      "note": "$E_k = \\frac{1}{2}mv^2$，质量增加、速度也增加（非线性）。由于重力做功全部转化为动能，$mgh = \\frac{1}{2}mv^2$，即$v = \\sqrt{2gh}$（与质量无关）。｜变质量系统的简化处理"
    },
    {
      "label": "例题3",
      "formula": "",
      "note": "｜用实验验证物理定律"
    }
  ]
},

  // ===== 区块4：公式卡片 =====
  formulas: [
  {
    "formula": "$E_k = \\frac{1}{2}mv^2$",
    "name": "动能定义",
    "usage": "任意运动"
  },
  {
    "formula": "$W = \\Delta E_k$",
    "name": "动能定理",
    "usage": "任意过程"
  },
  {
    "formula": "$W = \\frac{1}{2}mv^2 - \\frac{1}{2}mv_0^2$",
    "name": "动能定理展开",
    "usage": "任意过程"
  }
],

  // ===== 区块5：理解度自评 =====
  selfEval: [
  {
    "level": "A",
    "question": "我能熟练使用动能定理分析问题",
    "description": "可以进入P21势能学习"
  },
  {
    "level": "B",
    "question": "我知道公式但有时忘记计算合外力",
    "description": "完成J级变形，确认多力分析"
  },
  {
    "level": "C",
    "question": "我把动能和功混淆",
    "description": "重读「概念涌现」部分"
  }
],

  // ===== 关联链接 =====
  relatedModels: [
  "M16",
  "M17"
],
  crossLinks: [
  {
    "subject": "数学",
    "conceptName": "函数差值",
    "relation": "动能变化=末态函数值-初态函数值",
    "conceptId": ""
  }
],
}
