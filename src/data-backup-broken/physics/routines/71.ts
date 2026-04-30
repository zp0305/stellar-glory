// PHY-R71
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R71",
  name: "弹簧双振子模",
  model: "PHY-M09",
  thinkingMethod: "",
  level: "T",
  trigger: "两个物体通过弹簧连接，在光滑水平面上运动",
  path: [
    "Step1：系统不受外质心速度不变，以质心为参考系",
    "Step2：在质心系中，两物体做简谐运动，周期 T = 2πμ/k)，为约化质", "Step3：振幅由初始条件决定：A= m₂L/(mm（L 为弹簧初始压缩量", "Step4：两物体速度关系：m₁v+ m₂v= (mmv_c",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把振子周期当T = 2πm/k)（应该用约化质量 μ = m₁m(mm",cognitiveRoot:",",correctPath:"弹簧双振子的有效质量是约化质量，不是总质"},{wrongThinking:"忘记质心速度不变，把质心当成了固定点",cognitiveRoot:",",correctPath:"弹簧双振子的有效质量是约化质量，不是总质"},]"",
  essence: "约化质量 μ = m₁m(mm，弹簧振动的等效质量μ，不是总质量",
}

export default entry
