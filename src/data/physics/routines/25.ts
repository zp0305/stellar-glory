// PHY-R25
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R25",
  name: "机车启动两种方式",
  model: "PHY-M07",
  thinkingMethod: "",
  level: "J",
  trigger: "机车启动问题，判断是恒定功率还是恒定加速度启动",
  path: [
    "Step1：识别启动方式：说\"额定功率\"→恒功率；说\"匀加速启动\"→恒加速度",
    "Step2：恒功率：P 恒定 → v↑则 F↓ → a↓ → 最终匀速（a=0）",
    "Step3：恒加速度：a 恒定 → F 恒定 → v↑ → P=Fv↑ → 达额定功率后变功率",
    "Step4：画 v-t 图辅助分析，标出关键拐点（匀速点、变功率点）",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"恒功率启动中，认为速度增大后牵引力也增大（实际 F 随 v 反比）",cognitiveRoot:"",correctPath:"恒功率和恒加速度的本质区别：P 恒 vs F 恒，决定了 v-t 图的形状"},{wrongThinking:"混淆两种启动方式的 v-t 图，把恒功率的曲线当成匀加速的直线",cognitiveRoot:"",correctPath:"恒功率和恒加速度的本质区别：P 恒 vs F 恒，决定了 v-t 图的形状"}],
  essence: "恒功率：P 恒 → F∝1/v → 曲线；恒加速度：F 恒 → P 增大 → 直线+曲线。",
}

export default entry
