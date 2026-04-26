// PHY-R41
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R41",
  name: "电场强度三公式选用",
  model: "PHY-M10",
  thinkingMethod: "",
  level: "B",
  trigger: "已知电荷分布，求某点电场强度，选合适公式",
  path: [
    "Step1：点电荷 → E = kQ/r²，方向沿连线（同种斥、异种吸）",
    "Step2：均匀带电球壳 → 内部 E=0，外部等效于全部电荷集中于球心",
    "Step3：均匀带电平面 → E = σ/(2ε₀)，方向垂直平面（无限大平面）",
    "Step4：叠加原理：多个场源 → 矢量叠加（先分解再合成）",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把均匀带电球壳内部的场强当成 kQ/R²（实际为 0）",cognitiveRoot:"",correctPath:"电场强度公式的选择取决于场源形状，形状决定对称性，对称性决定公式"},{wrongThinking:"用叠加原理时忘记是矢量相加，简单代数相加导致错误",cognitiveRoot:"",correctPath:"电场强度公式的选择取决于场源形状，形状决定对称性，对称性决定公式"}],
  essence: "点电荷用公式，均匀球对称用等效，平面用σ/2ε₀，叠加用矢量。",
}

export default entry
