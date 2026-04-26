// PHY-R29
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R29",
  name: "弹簧能量分析",
  model: "PHY-M08",
  thinkingMethod: "",
  level: "J",
  trigger: "弹簧连接物体问题，判断能量转化或求最大速度/最大势能",
  path: [
    "Step1：识别弹簧状态：原长、压缩、伸长，找加速度为零的平衡位置",
    "Step2：在平衡位置：弹簧势能最小→动能最大（单物体）",
    "Step3：写机械能守恒式：Ep弹 + Ek + Ep重 = 常数",
    "Step4：找极值条件：速度最大/最小 → 加速度为零 → 平衡位置",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把\\\"平衡位置\\\"当成\\\"弹簧原长位置\\\"（可能不同，尤其有重力时）",cognitiveRoot:"",correctPath:"弹簧问题的关键是找到加速度为零的平衡位置——这是动能最大的位置"},{wrongThinking:"忽视弹簧和物体之间的能量转化，在连接体中漏算弹性势能",cognitiveRoot:"",correctPath:"弹簧问题的关键是找到加速度为零的平衡位置——这是动能最大的位置"}],
  essence: "弹簧平衡位置 = 加速度零点 = 动能最大点 = 势能变化拐点。",
}

export default entry
