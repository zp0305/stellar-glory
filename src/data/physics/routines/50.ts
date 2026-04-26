// PHY-R50
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R50",
  name: "磁感应强度三公式选用",
  model: "PHY-M12",
  thinkingMethod: "",
  level: "B",
  trigger: "已知电流或磁体，求某点磁感应强度",
  path: [
    "Step1：直导线：B = k·I/r，k = 2×10⁻⁷ T·m/A",
    "Step2：环形电流：中心 B = k·2πI/r",
    "Step3：长直通电螺线管内部：B = μ₀nI（均匀）",
    "Step4：叠加原理：多个磁场源 → 矢量合成，先分解再合成",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把直导线公式 B = kI/r 中的 k 记成 μ₀/2π（其实数值相等，但记混来源）",cognitiveRoot:"",correctPath:"磁场公式同样有适用条件，直导线/环形/螺线管公式不能混用"},{wrongThinking:"把环形电流在中心点的公式当成所有点通用",cognitiveRoot:"",correctPath:"磁场公式同样有适用条件，直导线/环形/螺线管公式不能混用"}],
  essence: "磁场公式由场源形状决定，B 的方向用右手螺旋定则。",
}

export default entry
