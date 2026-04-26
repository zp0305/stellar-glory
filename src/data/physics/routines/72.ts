// PHY-R72
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R72",
  name: "传送带能量流分析",
  model: "PHY-M04",
  thinkingMethod: "",
  level: "T",
  trigger: "传送带系统求总能量转化、效率或最终速度",
  path: [
    "Step1：判断物体和传送带的最终状态：共速还是继续相对滑动？",
    "Step2：物体动能增加 ΔEk = ½m(v共²-v₀²)",
    "Step3：传送带消耗电能 = f·l带（l带 为传送带总位移），转化为热和物体动能",
    "Step4：效率 η = ΔEk物体 / E耗，传送带效率通常较低（大部分能量变为热）",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把传送带消耗的电能当成物体动能增加（实际大部分是摩擦热）",cognitiveRoot:"",correctPath:"传送带是能量消耗型装置，电能→物体动能+摩擦热，效率不可能100%"},{wrongThinking:"计算传送带位移时用了错误的相对位移而非绝对位移",cognitiveRoot:"",correctPath:"传送带是能量消耗型装置，电能→物体动能+摩擦热，效率不可能100%"}],
  essence: "电能 = 物体动能 + 摩擦热。传送带效率低，核心能耗在摩擦热。",
}

export default entry
