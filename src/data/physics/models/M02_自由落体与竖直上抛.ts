// M02 自由落体与竖直上抛
export const M02 = {
  id: "PHY-M02",
  title: "自由落体与竖直上抛",
  module: "运动学",
  chapter: "运动的描述",
  difficulty: 1,
  subtitle: "初速度为零的匀加速直线运动",
  estimatedMinutes: 20,

  positioning: {
    core: "物体只在重力作用下从静止开始下落的运动。",
    essence: "初速度v0=0，加速度a=g，方向竖直向下。",
    keyInsight: "自由落体是匀变速的特例；竖直上抛是对称的上抛运动。",
  },

  principle: "## 原理讲解\n\n物体只在重力作用下从静止开始下落的运动。加速度为g≈9.8m/s²。\n\n**自由落体公式**（以向下为正方向）：\n- v = gt\n- h = ½gt²\n- v² = 2gh\n\n**竖直上抛**（以向上为正方向）：\n- v = v₀ - gt\n- h = v₀t - ½gt²\n\n对称性：上升时间和下落时间相等；落回原点时速度大小等于初速度。",

  variations: {
    basic: [
      { label: "自由落体", formula: "h=½gt²", note: "从高度h自由下落的时间" },
      { label: "竖直上抛", formula: "v²=v₀²-2gh", note: "最高点v=0" },
    ],
    advanced: [
      { label: "多段下落", formula: "分别求各段时间后叠加", note: "注意衔接条件" },
      { label: "经过某点上下时间差", formula: "Δt=2v/g", note: "经过同一点上升和下降的时间差" },
    ],
    challenge: [
      { label: "相对运动", formula: "选取不同参考系", note: "难度最大的一类" },
    ],
  },

  knowledgeNetwork: {
    parents: ["PHY-M01"],
    children: ["PHY-M03", "PHY-M04"],
    related: [],
    coreFormula: "h=½gt²，v=gt",
  },

  methodology: {
    approach: "先确定是自由落体还是上抛，选定正方向，代入对应公式。",
    decisionTree: [
      "初速度=0且只受重力？->自由落体（v=gt，h=½gt²）",
      "有初速度向上抛出？->竖直上抛（v=v₀-gt）",
      "经过同一点？->利用对称性：上升=下落时间",
    ],
    commonPitfalls: [
      "忘记竖直上抛正方向：向上为正则g取负值",
      "混淆高度h和位移x：竖直上抛中h是相对于抛出点的高度",
      "忘记判断物体是否回到原位置",
    ],
  },

  selfCheck: {
    questions: [
      { q: "物体从静止开始自由下落，求第3秒末的速度", a: "v=gt=9.8×3≈29.4m/s", type: "基础" },
      { q: "竖直上抛物体初速度20m/s，求最大高度", a: "h=v₀²/(2g)=200/(2×9.8)≈10.2m", type: "基础" },
      { q: "物体从塔顶自由下落，最后1秒下落高度为25m，求塔高", a: "设总时间t，½gt²-½g(t-1)²=25→t≈3.6s，h≈63.7m", type: "进阶" },
    ],
    confidenceLevel: 2,
  },

  lifeApplication: "自由落体无处不在：雨滴下落（受空气阻力，实际速度趋于收尾速度）、蹦极跳伞运动员的初始加速阶段。竖直上抛的物理原理用于估算炮弹发射后的飞行时间。",
}
