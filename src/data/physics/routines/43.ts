// PHY-R43
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R43",
  name: "电场力做功与电势能",
  model: "PHY-M10",
  thinkingMethod: "",
  level: "B",
  trigger: "电荷在电场中移动，求电场力做功或电势能变化",
  path: [
    "Step1：定义法：W = q·E·l·cosθ（恒定电场）",
    "Step2：电势能法：W = q·(φ初 - φ末) = Ep初 - Ep末",
    "Step3：路径无关性：在静电场中，电场力做功与路径无关，只与初末位置有关",
    "Step4：比较 φ 时注意 q 的正负：正电荷在 φ 高处 Ep 大，负电荷相反",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把 W = qU 中的 U 当成电势能（U 是电势差，不是某点的电势）",cognitiveRoot:"",correctPath:"电势能的公式 W = qφ 容易记错，关键是正负号都跟着 q 走"},{wrongThinking:"对负电荷，正负号处理反了",cognitiveRoot:"",correctPath:"电势能的公式 W = qφ 容易记错，关键是正负号都跟着 q 走"}],
  essence: "电场力做功 = 电势能减少 = -ΔEp，符号跟着电荷走。",
}

export default entry
