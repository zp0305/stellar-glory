// PHY-R07
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R07",
  name: "平抛分解独立性的检验",
  model: "PHY-M02",
  thinkingMethod: "",
  level: "J",
  trigger: "平抛运动求速度方向、位移方向，或已知角度反推初速度",
  path: [
    "Step1：水平方向：匀速直线，x = v₀t",
    "Step2：竖直方向：自由落体，y = ½gt²",
    "Step3：合成：速度方向 tanθ = vy/vx = gt/v₀；位移方向 tanα = y/x",
    "Step4：注意 θ ≠ α，轨迹是曲线，位移方向不等于速度方向",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把速度方向的正切当成 y/x 而不是 vy/vx",cognitiveRoot:"",correctPath:"平抛两方向独立，但合成时必须用同一时刻的 vx 和 vy"},{wrongThinking:"混淆\\\"速度偏向角\\\"和\\\"位移偏向角\\\"，混用 tanθ 和 tanα",cognitiveRoot:"",correctPath:"平抛两方向独立，但合成时必须用同一时刻的 vx 和 vy"}],
  essence: "水平竖直独立，合成时注意用同一时刻的量。速度角≠位移角。",
}

export default entry
