// PHY-R23
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R23",
  name: "双星系统模型",
  model: "PHY-M06",
  thinkingMethod: "",
  level: "J",
  trigger: "两颗恒星互相吸引做圆周运动，求质量比或轨道半径比",
  path: [
    "Step1：明确双星特征：角速度相同，周期相同，轨道圆心在质心",
    "Step2：对每颗星列万有引力=向心力方程：GMm/r² = mω²r₁",
    "Step3：利用 r₁/r₂ = m₂/m₁（轨道半径与质量成反比）",
    "Step4：两方程联立，解出 M₁/M₂ 或 r₁/r₂",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把双星间距当成了各自的轨道半径（实际各绕质心转，半径不同）",cognitiveRoot:"",correctPath:"双星系统的信号是\\\"两颗星绕同一个点（质心）转\\\"，而不是绕对方转"},{wrongThinking:"两颗星的向心力不相等（各自所需向心力不同，万有引力恰好提供）",cognitiveRoot:"",correctPath:"双星系统的信号是\\\"两颗星绕同一个点（质心）转\\\"，而不是绕对方转"}],
  essence: "双星同周期，轨道半径与质量成反比。质心是所有计算的基准点。",
}

export default entry
