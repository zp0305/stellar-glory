// PHY-R06
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R06",
  name: "竖直抛体时间对称性",
  model: "PHY-M02",
  thinkingMethod: "",
  level: "B",
  trigger: "竖直上抛运动，已知某时刻的位置或速度，求上升时间或高度",
  path: [
    "Step1：确认对称性：上升时间和下降时间相等",
    "Step2：选全过程公式 v² - v₀² = -2gh 或分阶段处理",
    "Step3：已知抛出点上方某位置的速度，用对称性求另一点速度",
    "Step4：最高点速度为零，v=0 时刻即最高点",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把\\\"经过同一点\\\"的两个速度方向搞反（上升向下看负，下降向上看正）",cognitiveRoot:"",correctPath:"竖直抛体的对称性来源于加速度恒定，上升和下降是镜像过程"},{wrongThinking:"忽略 g 取负值，直接代入 +10 导致算错",cognitiveRoot:"",correctPath:"竖直抛体的对称性来源于加速度恒定，上升和下降是镜像过程"}],
  essence: "加速度恒定 → 运动可逆 → 上升下降时间/速度对称。",
}

export default entry
