// PHY-R36
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R36",
  name: "动量守恒三条件检验",
  model: "PHY-M09",
  thinkingMethod: "",
  level: "B",
  trigger: "系统是否满足动量守恒不确定，或需要判断守恒方向",
  path: [
    "Step1：检查是否受外力 → 若合外力为零，则动量守恒",
    "Step2：若合外力不为零但某一方向合外力为零 → 该方向动量守恒",
    "Step3：碰撞/爆炸/分裂 → 内力远大于外力，近似守恒",
    "Step4：确认守恒后，选正方向，列代数方程（注意速度正负）",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把\\\"碰撞\\\"当成动量守恒的充分条件（实际上碰撞中也可能有外力）",cognitiveRoot:"",correctPath:"动量守恒的判定是\\\"合外力=0\\\"或\\\"内力主导\\\"，不是\\\"看起来像碰撞\\\""},{wrongThinking:"不规定正方向，导致符号混乱",cognitiveRoot:"",correctPath:"动量守恒的判定是\\\"合外力=0\\\"或\\\"内力主导\\\"，不是\\\"看起来像碰撞\\\""}],
  essence: "动量守恒的条件是合外力为零（或某方向合外力为零），方向要明确正负。",
}

export default entry
