// PHY-R56
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R56",
  name: "法拉第电磁感应定律求解",
  model: "PHY-M13",
  thinkingMethod: "",
  level: "J",
  trigger: "线圈磁通量变化，求感应电动势大小",
  path: [
    "Step1：通式：E = n·|ΔΦ/Δt|（N 匝线圈则乘 N）",
    "Step2：若 B 恒定，S 变化：E = n·B·|ΔS/Δt|",
    "Step3：若 S 恒定，B 变化：E = n·S·|ΔB/Δt|",
    "Step4：若 B 和 S 都变：分解变化，分别求和",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把 E = nΔΦ/Δt 当成代数式，忘记取绝对值或判断方向",cognitiveRoot:"",correctPath:"Φ 的变化率是磁通量对时间的导数，平均值和瞬时值公式不同"},{wrongThinking:"在求瞬时值时把平均值公式当瞬时值用",cognitiveRoot:"",correctPath:"Φ 的变化率是磁通量对时间的导数，平均值和瞬时值公式不同"}],
  essence: "E = n|ΔΦ/Δt|，注意是磁通量变化率，不是磁感应强度变化率。",
}

export default entry
