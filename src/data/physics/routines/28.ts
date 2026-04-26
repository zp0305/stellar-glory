// PHY-R28
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R28",
  name: "机械能守恒判断",
  model: "PHY-M08",
  thinkingMethod: "",
  level: "B",
  trigger: "判断系统机械能是否守恒，或已知守恒条件求某量",
  path: [
    "Step1：明确研究对象（单个物体还是系统）",
    "Step2：检查是否只有重力、弹力做功（内外部都算）",
    "Step3：若有摩擦力、空气阻力、非弹性碰撞 → 机械能不守恒",
    "Step4：守恒时写 E₁ = E₂ 或 ΔEk = -ΔEp，标好初末状态高度和速度",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"认为\\\"有摩擦力机械能一定不守恒\\\"（若摩擦力不做功则仍守恒）",cognitiveRoot:"",correctPath:"机械能守恒的条件是\\\"只有重力/弹力做功\\\"，不在于有没有摩擦力，而在于摩擦力做不做功"},{wrongThinking:"把\\\"机械能守恒\\\"和\\\"动量守恒\\\"混用（完全不同的条件）",cognitiveRoot:"",correctPath:"机械能守恒的条件是\\\"只有重力/弹力做功\\\"，不在于有没有摩擦力，而在于摩擦力做不做功"}],
  essence: "只有重力/弹力做功 = 机械能守恒。判断守恒优先于列方程。",
}

export default entry
