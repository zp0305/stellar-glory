// PHY-R76
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R76",
  name: "碰撞中的速度交换分析",
  model: "PHY-M09",
  thinkingMethod: "",
  level: "J",
  trigger: "两物体弹性碰撞后速度计算，或完全非弹性碰撞共速分析",
  path: [
    "Step1：弹性碰撞：记住一维速度变换公式，代入即可",
    "Step2：若为同质量弹性正碰：交换速度",
    "Step3：完全非弹性碰撞：v共 = (m₁v₁+m₂v₂)/(m₁+m₂)",
    "Step4：求碰撞中机械能损失 ΔE = E初 - E末 = ½μv_rel²（μ 为约化质量）",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把\\\"交换速度\\\"当成普遍规律（仅限同质量弹性正碰）",cognitiveRoot:"",correctPath:"碰撞中机械能损失公式 ΔE = ½μv_rel² 适用于任何碰撞类型"},{wrongThinking:"完全非弹性碰撞后用动能守恒（实际只有动量守恒）",cognitiveRoot:"",correctPath:"碰撞中机械能损失公式 ΔE = ½μv_rel² 适用于任何碰撞类型"}],
  essence: "碰撞通用：动量守恒确定总速度，约化质量 μ = m₁m₂/(m₁+m₂) 决定能量损失。",
}

export default entry
