// M03 竖直上抛运动
export const M03 = {
  id: "PHY-M03",
  title: "竖直上抛运动",
  module: "运动学",
  chapter: "运动的描述",
  difficulty: 1,
  subtitle: "有初速度的匀变速，加速度g恒定",
  estimatedMinutes: 20,

  positioning: {
    core: "以一定初速度竖直向上抛出，仅受重力作用的运动。",
    essence: "加速度a=-g（以向上为正方向），上升阶段减速，下降阶段加速。",
    keyInsight: "上升和下降过程关于最高点对称：速度等大反向，时间相等。",
  },

  principle: "## 竖直上抛\n\n以初速度v₀竖直向上抛出，仅受重力作用。\n\n**基本公式**（以向上为正方向）：\n- v = v₀ - gt\n- h = v₀t - ½gt²\n\n**上升最大高度**：H = v₀²/(2g)\n**上升到最高点时间**：t₁ = v₀/g\n**落回原位置时间**：t₂ = 2v₀/g\n\n**对称性**：上升时间=下落时间；落回时速度=-v₀",

  variations: {
    basic: [
      { label: "纯上抛", formula: "H=v₀²/(2g)", note: "求最大高度" },
      { label: "经过某点", formula: "h=v₀t-½gt²", note: "给定h求t（两解）" },
    ],
    advanced: [
      { label: "多阶段", formula: "上升+自由落体分段处理", note: "找速度衔接点" },
      { label: "经过同一点两次", formula: "利用对称性判断时间", note: "易错点" },
    ],
    challenge: [
      { label: "图像分析", formula: "v-t图面积=位移", note: "结合图像" },
    ],
  },

  knowledgeNetwork: {
    parents: ["PHY-M02"],
    children: ["PHY-M04"],
    related: ["PHY-M01"],
    coreFormula: "H=v₀²/(2g)，v=v₀-gt",
  },

  methodology: {
    approach: "选正方向（通常向上为正）→ 判阶段（上升/下降）→ 代公式",
    decisionTree: [
      "问最大高度？-> H=v₀²/(2g)",
      "问时间？-> 先判断是否到达最高点",
      "问速度？-> 注意正负号",
    ],
    commonPitfalls: [
      "忘记正方向导致g符号错误",
      "忽略位移和高度的区别",
      "经过同一点的时间有两解，只算了一个",
    ],
  },

  selfCheck: {
    questions: [
      { q: "以20m/s向上抛出一石子，求最大高度和落回时间", a: "H=20.4m，t=4.1s", type: "基础" },
      { q: "上抛物体，在t₁=1s和t₂=3s时经过同一点，求v₀", a: "v₀=g(t₁+t₂)/2=19.6m/s", type: "进阶" },
    ],
    confidenceLevel: 2,
  },

  lifeApplication: "竖直上抛模型用于计算运动员投篮、抛铅球的最高点；喷泉喷水的高度估算；建筑工地物料提升后的下落时间计算。",
}
