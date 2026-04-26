// PHY-R35
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R35",
  name: "动量定理全程法",
  model: "PHY-M09",
  thinkingMethod: "",
  level: "J",
  trigger: "变质量问题、流体问题、连续作用问题，求冲击力或平均力",
  path: [
    "Step1：明确研究对象（流体元、粒子团）",
    "Step2：列动量定理：F·Δt = Δp = p末 - p初",
    "Step3：处理连续流体：取一段时间 Δt 内的流体元质量 Δm = ρ·v·S·Δt",
    "Step4：代入求平均力 F = Δm·Δv/Δt，注意方向",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把 Δm 当成总质量而非单位时间内流过的质量",cognitiveRoot:"",correctPath:"变质量问题的关键是\\\"选取正确的系统\\\"——取一段时间内进入/离开的流体元"},{wrongThinking:"在有重力时，混淆动量定理和动量守恒的适用条件",cognitiveRoot:"",correctPath:"变质量问题的关键是\\\"选取正确的系统\\\"——取一段时间内进入/离开的流体元"}],
  essence: "动量定理处理变质量，把 Δm·Δv/Δt 变成力，平均冲力即为此式。",
}

export default entry
