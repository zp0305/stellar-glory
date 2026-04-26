// PHY-R21
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R21",
  name: "万有引力三步法",
  model: "PHY-M06",
  thinkingMethod: "",
  level: "B",
  trigger: "万有引力问题，已知轨道半径/线速度/周期之一，求其他量",
  path: [
    "Step1：明确是近地（r≈R）还是远地（r>>R），选对应公式",
    "Step2：近地：用 g=GM/R² 代换；远地：用开普勒第三定律 T²∝r³",
    "Step3：环绕速度 v = √(GM/r)，第一宇宙速度 v₁ = √(gR)",
    "Step4：变轨问题：椭圆轨道用能量守恒，高轨低速大周期",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把近地卫星和同步卫星混用同一公式（周期差很大）",cognitiveRoot:"",correctPath:"万有引力=向心力（环绕）=重力（近地），三个力在不同场景下等价"},{wrongThinking:"把\\\"卫星在轨道上\\\"当成不受重力（仍受万有引力，提供向心力）",cognitiveRoot:"",correctPath:"万有引力=向心力（环绕）=重力（近地），三个力在不同场景下等价"}],
  essence: "万有引力提供向心力是核心方程，具体形式看条件。",
}

export default entry
