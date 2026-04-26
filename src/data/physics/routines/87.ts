// PHY-R87
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R87",
  name: "电磁感应中的图像变换",
  model: "PHY-M13",
  thinkingMethod: "",
  level: "J",
  trigger: "导体棒在磁场中运动，已知某物理量随时间变化图，求其他量图",
  path: [
    "Step1：从已知的量（B-t 图、x-t 图、F-t 图）出发",
    "Step2：用 E = BLv 或 E = S·dB/dt 推导 E 随时间的变化",
    "Step3：若 E 是 t 的函数，则 I = E/R 也是 t 的函数",
    "Step4：注意方向（正负），在图像中标注清楚关键点和斜率",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把 E = BLv 中的 v 当成常数（若 v 不是常数则 E 也变化）",cognitiveRoot:"",correctPath:"图像变换的信号是\\\"已知一个量的图像，求另一个量的图像\\\"，关键是找两者数学关系"},{wrongThinking:"在求 I-t 图时漏掉符号，只画绝对值",cognitiveRoot:"",correctPath:"图像变换的信号是\\\"已知一个量的图像，求另一个量的图像\\\"，关键是找两者数学关系"}],
  essence: "图像变换：先找物理量之间的数学关系（E = BLv 或 E = S·dB/dt），再画图。",
}

export default entry
