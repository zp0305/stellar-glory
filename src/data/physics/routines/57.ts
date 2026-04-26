// PHY-R57
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R57",
  name: "交流电四值分析",
  model: "PHY-M13",
  thinkingMethod: "",
  level: "J",
  trigger: "交流电问题求最大值、有效值、平均值、瞬时值",
  path: [
    "Step1：瞬时值：e = E_m·sin(ωt + φ)，按相位关系写",
    "Step2：最大值：E_m = nBSω，与 B_m、S、ω 成正比",
    "Step3：有效值：E = E_m/√2（正弦交流电），注意用于功率和电表的定义",
    "Step4：平均值：Ē = n·ΔΦ/Δt，用于通过电量的计算 Q = n·ΔΦ/R",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把\\\"有效值\\\"当成\\\"最大值/2\\\"（实际是除以 √2）",cognitiveRoot:"",correctPath:"交流电四值各有各的用途：有效值算功率，平均值算电量，最大值标称，瞬间值算相位"},{wrongThinking:"在计算通过电量时用有效值或最大值公式（应该用平均值）",cognitiveRoot:"",correctPath:"交流电四值各有各的用途：有效值算功率，平均值算电量，最大值标称，瞬间值算相位"}],
  essence: "有效值用于热功率，平均值用于电量，最大值标设备耐压，瞬时值描述相位。",
}

export default entry
