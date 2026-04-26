// PHY-R19
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R19",
  name: "单摆周期公式应用",
  model: "PHY-M05",
  thinkingMethod: "",
  level: "B",
  trigger: "单摆问题求周期、频率，或通过周期求 g/摆长",
  path: [
    "Step1：确认是小角度单摆（θ<5°），可用 T = 2π√(l/g)",
    "Step2：等效摆长 = 悬点到重心的距离，不是绳子长度",
    "Step3：等效 g = g - a（加速向上时等效 g 增大，向下时减小）",
    "Step4：代入公式求目标量，注意单位统一（l 用 m）",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把绳子长度当摆长，没加悬点到重心的修正",cognitiveRoot:"",correctPath:"单摆周期的核心是\\\"等效重力加速度\\\"，运动在 g_eff 方向"},{wrongThinking:"在非惯性系中直接用 g=9.8，没考虑等效 g 的修正",cognitiveRoot:"",correctPath:"单摆周期的核心是\\\"等效重力加速度\\\"，运动在 g_eff 方向"}],
  essence: "等效摆长 + 等效 g = 单摆周期公式的两大修正点。",
}

export default entry
