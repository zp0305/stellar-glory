// 核反应与核能模型
export const M43 = {
  id: "PHY-M43",
  title: "核反应与核能模型",
  module: "近代物理",
  chapter: "近代物理",
  difficulty: 2,
  subtitle: "ΔE=Δmc²，裂变聚变与核能",
  estimatedMinutes: 20,
  positioning: {
    core: "核反应中质量亏损释放巨大能量ΔE=Δmc²，轻核聚变和重核裂变是两种释放核能的途径——质能方程是核能利用的理论基础，也是宇宙中能量来源的根本解释。",
    essence: "质量亏损→能量释放；比结合能越大越稳定；裂变和聚变都向铁靠近，都释放能量。",
    keyInsight: "微小质量亏损对应巨大能量释放（c²=9×10¹⁶m²/s²），是核能高密度的根本原因。",
  },
  principle: "$$\\Delta E = \\Delta m c^2 = \\Delta m(\\text{u}) \\times 931.5\\text{MeV}$$\n$$E_B = (Zm_p + Nm_n - m_{\\text{核}})c^2$$\n$$\\bar{E}_B = \\frac{E_B}{A}$$",
  variations: {
    basic: ["直接应用质能方程计算核能"],
    advanced: ["精确质量计算质量亏损和释放能量"],
    challenge: ["比结合能分析、链式反应与可控核聚变"],
  },
  knowledgeNetwork: {
    parents: ["PHY-P56"],
    children: [],
    related: ["PHY-M42"],
    coreFormula: "$$\\Delta E = \\Delta m c^2 = \\Delta m(\\text{u}) \\times 931.5\\text{MeV}$$",
  },
  methodology: {
    approach: "写核反应方程（守恒定律配平）→ 计算质量亏损 → 代入质能方程 → 区分裂变/聚变方向。",
    decisionTree: [
      "第一步：写出核反应方程，验证质量数守恒和电荷数守恒",
      "第二步：计算质量亏损 Δm=反应前总质量-反应后总质量",
      "第三步：代入 ΔE=Δmc²=Δm(u)×931.5MeV 计算释放能量",
      "第四步：判断反应类型（裂变/聚变）及是否满足触发条件",
    ],
    commonPitfalls: [
      "质量亏损=质量消失（实为质量转化为能量，总能量守恒）",
      "裂变和聚变方向矛盾（两者都向比结合能更大方向靠近，都释放能量）",
      "核反应可以随意进行（裂变需临界质量，聚变需1亿度以上高温）",
      "核反应中质量不守恒（静止质量不守恒有质量亏损，但质量数即核子数守恒）",
    ],
  },
  selfCheck: {
    questions: [],
    confidenceLevel: 1,
  },
  lifeApplication: "核电站利用铀核裂变产生的能量发电，一克铀-235释放的能量约等于2.7吨煤。太阳每秒约400万吨质量通过核聚变转化为能量。可控核聚变（人造太阳）是未来清洁能源的终极方向。",
  relatedParadigms: ["PHY-R84", "PHY-R85", "PHY-R86"],
}
