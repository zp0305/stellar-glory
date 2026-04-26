// PHY-R42
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R42",
  name: "电场线与等势线关系",
  model: "PHY-M10",
  thinkingMethod: "",
  level: "B",
  trigger: "已知电场线分布，判断电势高低、电场强度大小",
  path: [
    "Step1：沿电场线方向电势降低（判断电势高低）",
    "Step2：电场线密 → E 大；疏 → E 小",
    "Step3：等势线与电场线垂直，且电场线从高电势指向低电势",
    "Step4：等势线密集区对应 E 大，稀疏区对应 E 小",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把\\\"沿电场线电势降低\\\"记成\\\"沿电场线电势升高\\\"",cognitiveRoot:"",correctPath:"电场线和等势线的关系是几何关系：垂直 + 方向指向，结合疏密判断大小"},{wrongThinking:"混淆 E 大小和 φ 高低：E 大处 φ 变化快，但 φ 本身不一定高",cognitiveRoot:"",correctPath:"电场线和等势线的关系是几何关系：垂直 + 方向指向，结合疏密判断大小"}],
  essence: "电场线方向 = 电势降低方向，疏密 = E 大小。等势线与电场线垂直。",
}

export default entry
