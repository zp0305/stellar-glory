// PHY-R88
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R88",
  name: "功能原理综合应用",
  model: "PHY-M08",
  thinkingMethod: "",
  level: "J",
  trigger: "复杂过程涉及多种能量转化，求某力做功或能量变化",
  path: [
    "Step1：明确系统边界：哪些是外力，哪些是内力",
    "Step2：系统动能变化 = 合外力做功 + 内力非保守做功",
    "Step3：非保守内力做功（如摩擦力）使机械能减少，转化为内能",
    "Step4：分过程或全程列功能关系：W外 + W内非保守 = ΔEk",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把内力的功当成了外力功",cognitiveRoot:"",correctPath:"功能原理把能量守恒和牛顿第二定律结合起来，是解决复杂过程的通法"},{wrongThinking:"把机械能损失当成摩擦力对单个物体的功（实际是系统内的能量损耗）",cognitiveRoot:"",correctPath:"功能原理把能量守恒和牛顿第二定律结合起来，是解决复杂过程的通法"}],
  essence: "合外力功+非保守内力功 = 动能变化。机械能损失 = 非保守内力功。",
}

export default entry
