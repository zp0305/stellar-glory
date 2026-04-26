// PHY-R54
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R54",
  name: "电磁感应中的电路分析",
  model: "PHY-M13",
  thinkingMethod: "",
  level: "J",
  trigger: "导体棒切割磁感线产生感应电动势，形成闭合电路",
  path: [
    "Step1：识别谁是电源：切割磁感线的导体棒内部是非静电力方向",
    "Step2：感应电动势：E = BLv（导体棒垂直切割；若不垂直，E = BLv sinθ）",
    "Step3：把导体棒当成电源，内阻为 r，判断电流方向（右手定则或楞次定律）",
    "Step4：其余部分当成外电路，按闭合电路欧姆定律分析",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把感应电动势的方向当成导体棒运动方向",cognitiveRoot:"",correctPath:"电磁感应的电路分析本质是把\\\"切割运动\\\"翻译成\\\"电源电动势\\\""},{wrongThinking:"混淆\\\"右手定则\\\"（发电机）和\\\"左手定则\\\"（电动机）的使用场景",cognitiveRoot:"",correctPath:"电磁感应的电路分析本质是把\\\"切割运动\\\"翻译成\\\"电源电动势\\\""}],
  essence: "切割磁感线 = 电源，E = BLv sinθ（θ 为 B 与 v 的夹角）。方向用右手定则。",
}

export default entry
