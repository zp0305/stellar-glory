// PHY-R43
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R43",
  name: "电场力做功与电势",
  model: "PHY-M10",
  thinkingMethod: "",
  level: "B",
  trigger: "电荷在电场中移动，求电场力做功或电势能变",
  path: [
    "Step1：定义法：W = q·E·l·cosθ（恒定电场）",
    "Step2：电势能法：W = q·(φ- φ = Ep- Ep",
    "Step3：路径无关性：在静电场中，电场力做功与路径无关，只与初末位置有",
    "Step4：比φ 时注q 的正负：正电荷在 φ 高处 Ep 大，负电荷相",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"W = qU 中的 U 当成电势能（U 是电势差，不是某点的电势",cognitiveRoot:",",correctPath:"电势能的公式 W = qφ 容易记错，关键是正负号都跟着 q"},{wrongThinking:"对负电荷，正负号处理反了",cognitiveRoot:",",correctPath:"电势能的公式 W = qφ 容易记错，关键是正负号都跟着 q"},]"",
  essence: "电场力做= 电势能减= -ΔEp，符号跟着电荷走",
}

export default entry
