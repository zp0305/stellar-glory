// PHY-R60
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R60",
  name: "电磁感应图像分析",
  model: "PHY-M13",
  thinkingMethod: "",
  level: "J",
  trigger: "电磁感应问题中给 B-t 图或 x-t 图，判断 E I 的变",
  path: [
    "Step1：看横纵坐标：确认哪个量随时间变", "Step2：若B-t 图：E = S·|dB/dt|，图中斜率即dB/dt",
    "Step3：若x-t 图（导体棒运动）：E = BLv，v 即为 x-t 斜率",
    "Step4：根E 变化判断 I 变化（I = E/R），再判断安培力方向和大",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"B-t 图的斜率当成感应电动势（漏乘面积 S",cognitiveRoot:",",correctPath:"图像问题的关键是\\\"斜率 = 变化率\\\"，B-t 斜率dB/dt，x-t 斜率v"},{wrongThinking:"把导体运动方向和感应电流方向混淆",cognitiveRoot:",",correctPath:"图像问题的关键是\\\"斜率 = 变化率\\\"，B-t 斜率dB/dt，x-t 斜率v"}]"",
  essence: "图像斜率 = 物理量的变化率，乘以面积/长度等系数得到感应量",
}

export default entry
