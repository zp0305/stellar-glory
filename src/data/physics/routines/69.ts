// PHY-R69
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R69",
  name: "动量与能量综合分析（光电/核反应）",
  model: "PHY-M15",
  thinkingMethod: "",
  level: "T",
  trigger: "光子或粒子碰撞问题，同时满足动量守恒和能量守恒",
  path: [
    "Step1：光电效应中：光子能量 hν = E_k + W，逸出电子动量 p_e = √(2mE_k)",
    "Step2：光子动量 p_γ = h/λ = hν/c",
    "Step3：核反应中：质量亏损 Δm → 能量释放 E = Δm·c²，部分变为动能",
    "Step4：列出动量守恒和能量守恒方程组，联立求解",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把光子能量当动能直接代入力学公式（光子无质量）",cognitiveRoot:"",correctPath:"光子碰撞问题的关键是用光子动量 p = h/λ，光子能量 E = pc（光子特有）"},{wrongThinking:"在康普顿时忘记动量守恒的能量修正",cognitiveRoot:"",correctPath:"光子碰撞问题的关键是用光子动量 p = h/λ，光子能量 E = pc（光子特有）"}],
  essence: "光子：E = pc，p = h/λ。核反应：动量守恒 + 能量守恒，联立求解。",
}

export default entry
