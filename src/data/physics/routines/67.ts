// PHY-R67
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R67",
  name: "核反应方程配平",
  model: "PHY-M15",
  thinkingMethod: "",
  level: "B",
  trigger: "核反应方程，已知部分产物，求未知粒子或质量亏损",
  path: [
    "Step1：质量数守恒：左边总质量数 = 右边总质量数",
    "Step2：电荷数守恒：左边总核电荷数 = 右边总核电荷数",
    "Step3：由质量数和电荷数确定未知粒子种类（α = ⁴₂He，β = ⁰₋₁e 等）",
    "Step4：计算质量亏损 Δm = 反应前总质量 - 反应后总质量，释放能量 E = Δm·c²",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把 α 衰变写成 ⁴₂He⁺（不应带正号）或把 β 衰变写成 ⁰₋₁e⁻（不应带负号）",cognitiveRoot:"",correctPath:"核反应方程的守恒是质量数和电荷数守恒，不是质量守恒（有质量亏损）"},{wrongThinking:"在计算质量亏损时，用错了质量数守恒（质量数守恒 ≠ 质量守恒）",cognitiveRoot:"",correctPath:"核反应方程的守恒是质量数和电荷数守恒，不是质量守恒（有质量亏损）"}],
  essence: "质量数守恒、电荷数守恒，质量亏损是能量来源：E = Δm·c²。",
}

export default entry
