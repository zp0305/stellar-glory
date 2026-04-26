// PHY-R15
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R15",
  name: "系统牛顿第二定律",
  model: "PHY-M04",
  thinkingMethod: "",
  level: "T",
  trigger: "多物体系统，有内力和外力同时作用，求系统总加速度或内力关系",
  path: [
    "Step1：明确研究对象是整体，写 F合外 = (Σmᵢ)·a系统",
    "Step2：区分内力和外力：内力成对出现，互为相互作用力，矢量和为零",
    "Step3：列方程时只保留外力，忽略所有成对内力",
    "Step4：求内力时对单个物体列方程，或用分配关系求解",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把绳子内力当成外力写进整体方程（内力不贡献合外力）",cognitiveRoot:"",correctPath:"系统牛顿第二定律的核心是\\\"合外力=总质量×系统加速度\\\"，但系统加速度是某个特定方向的"},{wrongThinking:"多个物体方向不同时，a系统 指的是哪个方向的加速度",cognitiveRoot:"",correctPath:"系统牛顿第二定律的核心是\\\"合外力=总质量×系统加速度\\\"，但系统加速度是某个特定方向的"}],
  essence: "合外力对应系统加速度，内力成对抵消，方向一致时可直接相加。",
}

export default entry
