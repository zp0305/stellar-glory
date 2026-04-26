// PHY-R68
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R68",
  name: "衰变规律与半衰期",
  model: "PHY-M15",
  thinkingMethod: "",
  level: "B",
  trigger: "放射性衰变问题，已知半衰期，求剩余质量或衰变时间",
  path: [
    "Step1：半衰期公式：m = m₀·(½)^(t/T)（T 为半衰期）",
    "Step2：已知半衰期和剩余质量，反求时间：t = T·log₂(m₀/m)",
    "Step3：若给定的是衰变常数 λ：N = N₀·e^(-λt)，λ = ln2/T",
    "Step4：注意：半衰期与原子总数无关（统计规律），单个原子衰变时间不确定",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把半衰期当成\\\"每个原子存活时间的平均值\\\"（这是错误的，单个原子衰变完全随机）",cognitiveRoot:"",correctPath:"半衰期是统计概念，适用于大量原子集合，不适用于单个原子"},{wrongThinking:"在半衰期内直接减半，忽略非整数次半衰期的指数衰减",cognitiveRoot:"",correctPath:"半衰期是统计概念，适用于大量原子集合，不适用于单个原子"}],
  essence: "半衰期是指数衰减，不是线性减半。m = m₀·(½)^(t/T)。",
}

export default entry
