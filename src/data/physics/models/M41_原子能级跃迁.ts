// 原子能级跃迁模型
export const M41 = {
  id: "PHY-M41",
  title: "原子能级跃迁模型",
  module: "近代物理",
  chapter: "近代物理",
  difficulty: 2,
  subtitle: "En=-13.6/n²eV，hν=|Em-En|",
  estimatedMinutes: 20,
  positioning: {
    core: "原子只能处于一系列不连续的能级状态，电子在能级间跃迁时吸收或发射光子，光子能量等于能级差ΔE=E_m-E_n——玻尔模型成功解释了氢原子光谱的离散性，揭示了原子能量量子化的本质。",
    essence: "能量量子化：原子只能跃迁到特定能级，不能连续变化；跃迁条件是光子能量恰好等于能级差。",
    keyInsight: "一个原子每次只发一种频率的光；一群处于n能级的原子最多发C(n,2)=n(n-1)/2种频率的光。",
  },
  principle: "$$E_n = -\\frac{13.6}{n^2}\\text{eV}$$\n$$h\\nu = |E_m - E_n|, \\quad \\lambda = \\frac{hc}{|E_m - E_n|}$$\n$$N = \\frac{n(n-1)}{2}$$",
  variations: {
    basic: ["直接计算跃迁能量和光子波长"],
    advanced: ["光谱系列和跃迁组合分析"],
    challenge: ["电子轰击激发、激光原理与玻尔模型局限"],
  },
  knowledgeNetwork: {
    parents: ["PHY-P55"],
    children: [],
    related: ["PHY-M40"],
    coreFormula: "$$h\\nu = |E_m - E_n|$$",
  },
  methodology: {
    approach: "确定初末能级 → 计算能级差ΔE → 由hν=ΔE求光子频率/波长 → 区分一个原子与一群原子场景。",
    decisionTree: [
      "第一步：确定初始能级和末态能级（注意高→低发射，低→高吸收）",
      "第二步：计算能级差 ΔE=|Em-En|，用 En=-13.6/n² eV",
      "第三步：由 hν=ΔE 求光子频率，或由 λ=hc/ΔE 求波长",
      "第四步：若为一群原子，用 N=n(n-1)/2 计算最多谱线数",
    ],
    commonPitfalls: [
      "忽略选择定则，认为任意跃迁均可（高中阶段氢原子所有能级间跃迁均允许）",
      "混淆吸收和发射光子的条件（吸收光子能量必须恰好等于能级差，不多不少）",
      "一群原子和一个原子混淆（一个原子每次只发一种频率，一群原子可同时发多种）",
      "电子轰击与光子照射混淆（光子照射须能量恰好等于能级差；电子轰击只需能量≥能级差）",
    ],
  },
  selfCheck: {
    questions: [],
    confidenceLevel: 1,
  },
  lifeApplication: "激光器利用受激辐射使大量原子同时跃迁产生相干光，广泛应用于手术、通信和测量。荧光灯和LED利用原子跃迁发光。原子钟利用铯原子跃迁定义时间标准，精度达10⁻¹⁵，是GPS的基础。",
  relatedParadigms: ["PHY-R103", "PHY-R81"],
}
