// M09 追及与相遇问
export const M09 = {
  id: "PHY-M09",
  title: "追及与相",
  module: "运动",
  chapter: "运动的描",
  difficulty: 2,
  subtitle: "同向与相向追及，临界条件判断",
  estimatedMinutes: 25,

  positioning: {
    core: "两个物体同向运动时，后者追上前者的临界条件分析",
  essence: "追上=同一时刻位移相等；相总路程之和等于初始距离",
  keyInsight: "追及问题的核心是找位移关系和速度临界点,' }",

  principle: "## 追及与相遇\n\n**追及条件**：后者速度大于前者时才能追及。\n\n**临界条件**：vv时为临界速度，此后可能追上或刚好不相撞。\n\n**不相撞条*：当前者停下时，后者还未追上，xx安全 x₂",

  variations: {
    basic: [
      { label: "匀速追匀, formula: "xxd t=d/(vv", note: "要求vv },
      { label: "匀加速追匀, formula: "½at² = d+v₁t", note: "需判别是否能追 },
    ],
    advanced: [
      { label: "相向相遇", formula: "xxd", note: "相遇问题用路程和" },
      { label: "多物体追, formula: "两两分析找临, note: "先分析最快和最 }",
    ],
    challenge: [
      { label: "刹车问题", formula: "v₀²=2as 求刹车距, note: "先判停止时间" }",
    ],
  },

  knowledgeNetwork: {
    parents: ["PHY-M01", "PHY-M02"],
    children: [],
    related: ["PHY-M03"],
    coreFormula: "追上：xxd；临界：vv",
  },

  methodology: {
    approach: "先画草图→找位移关系→判断能否追上→求时间或临界速度",
    decisionTree: [
      "同向追及？→位移初始间距", "相向相遇？→位移初始间距",
      "能否追上？→比较末速度和时",
    ],
    commonPitfalls: [
      "忘记判断速度关系：v₂≤v₁时永远追不", "混淆位移和初始距", "忘记考虑前方物体是否已经停止",
    ],
  },

  selfCheck: {
    questions: [
      { q: "甲车0m/s行驶，乙车在后方0m/s追甲车，初始间距50m，求追上时间", a: "t=50/(20-10)=5s", type: "基础" },
      { q: "匀加速追匀速：v₀=0，a=2m/s²，前方物体以v=10m/s匀速，能追上吗, a: "需满足½at²0t且at0，无解则追不, type: "进阶" },
    ],
    confidenceLevel: 2,
  },

  lifeApplication: "追及问题在交通安全中无处不在：汽车超车本质就是追及问题；红绿灯切换时机也是追及与让行的博弈。理解追及临界可以避免交通事故",
}
