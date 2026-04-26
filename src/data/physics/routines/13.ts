// PHY-R13
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R13",
  name: "摩擦力方向三步判断",
  model: "PHY-M03",
  thinkingMethod: "",
  level: "B",
  trigger: "摩擦力方向不确定，或需要判断静摩擦还是动摩擦",
  path: [
    "Step1：先判断是否接触面存在（有弹力才可能有摩擦力）",
    "Step2：判断是静摩擦（无相对滑动趋势）还是滑动摩擦（相对滑动）",
    "Step3：滑动摩擦：方向与相对滑动方向相反",
    "Step4：静摩擦：方向与相对滑动趋势方向相反，大小由其他方程确定",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把\\\"物体相对地面的运动方向\\\"当成摩擦力方向（应该是相对接触面的方向）",cognitiveRoot:"",correctPath:"摩擦力方向始终由\\\"相对\\\"决定，不是由\\\"运动方向\\\"决定"},{wrongThinking:"认为静摩擦方向一定与运动方向相反",cognitiveRoot:"",correctPath:"摩擦力方向始终由\\\"相对\\\"决定，不是由\\\"运动方向\\\"决定"}],
  essence: "相对谁？相对接触面。滑动摩擦与相对滑动相反，静摩擦与相对趋势相反。",
}

export default entry
