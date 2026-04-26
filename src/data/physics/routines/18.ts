// PHY-R18
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R18",
  name: "等时圆模型速破",
  model: "PHY-M05",
  thinkingMethod: "",
  level: "B",
  trigger: "从竖直圆顶点、圆环上任一点、圆心正上方某点释放小球",
  path: [
    "Step1：识别等时圆的特征：从圆上某点由静止下滑到圆心的物体，时间相同",
    "Step2：确认题目条件是否满足等时圆（圆心的重力加速度分量恒定）",
    "Step3：直接用等时性结论，跳过复杂运动过程推导",
    "Step4：必要时写出周期 T = 2π√(R/g) 验证",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把等时圆结论随意推广到非竖直圆或非静止释放情形",cognitiveRoot:"",correctPath:"等时圆是特殊几何结构的特殊结论，核心是 g 的分量在弦方向恒定"},{wrongThinking:"混淆\\\"等时圆\\\"和\\\"等时摆\\\"的适用条件",cognitiveRoot:"",correctPath:"等时圆是特殊几何结构的特殊结论，核心是 g 的分量在弦方向恒定"}],
  essence: "等时圆 = 竖直圆 + 静止释放 + 弦方向运动 → g 投影恒定 → 时间相同。",
}

export default entry
