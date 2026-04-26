// PHY-R16
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R16",
  name: "传送带问题动力学分析",
  model: "PHY-M04",
  thinkingMethod: "",
  level: "J",
  trigger: "传送带上物体运动，判断相对滑动、摩擦力方向，求运动时间",
  path: [
    "Step1：判断初速度方向与传送带速度大小的关系",
    "Step2：假设无摩擦，求相对速度，判断是否能达到共同速度",
    "Step3：达到共速后，摩擦力消失或改变方向",
    "Step4：分段处理，每段用不同动力学方程，注意各段的初始条件",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"忽略物体可能在达到共速前已经离开传送带",cognitiveRoot:"",correctPath:"传送带问题的核心是\\\"共速\\\"临界，共速前后物理条件发生变化"},{wrongThinking:"全程用一个摩擦力方向，实际上方向可能改变",cognitiveRoot:"",correctPath:"传送带问题的核心是\\\"共速\\\"临界，共速前后物理条件发生变化"}],
  essence: "传送带问题找共速临界点，分段处理，每段条件独立。",
}

export default entry
