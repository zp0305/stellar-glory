// PHY-R61
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R61",
  name: "折射率与光路计算",
  model: "PHY-M14",
  thinkingMethod: "",
  level: "B",
  trigger: "已知折射率或入射角，求折射角、光速、比",
  path: [
    "Step1：折射定律：n₁sinθ= n₂sinθ", "Step2：光从光疏到光密：sinθ< sinθ折射角小于入射角",
    "Step3：光速关系：v = c/n，频率不变，波长 λ n 增大而减", "Step4：全反射条件：sinC = 1/n，光从光密到光疏θ> C",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把\\\"光疏\\\"和\\\"光密\\\"搞混（n = 光密，v 小）",cognitiveRoot:",",correctPath:"折射n 的本质是\\\"光速变慢的程度\\\"：n = c/v > 1"},{wrongThinking:"在求全反射临界角时用反三sinC = n（正确为 1/n",cognitiveRoot:",",correctPath:"折射n 的本质是\\\"光速变慢的程度\\\"：n = c/v > 1"}]"",
  essence: "光疏到光密：v 减小，减小，减小，sinθ 比值守恒",
}

export default entry
