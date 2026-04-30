// PHY-R04
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R04",
  name: "初零比法解比例问",
  model: "PHY-M01",
  thinkingMethod: "",
  level: "B",
  trigger: "初速度为零的匀加速直线运动，比较速度、位移、时间比",
  path: [
    "Step1：确认是初零匀加速，确认求的是哪两个时刻的比", "Step2：记比例公式：v∝t，x∝t²，v∝√x",
    "Step3：设通式：第n个相等时间段的位移比 = 1:3:5:(2n-1)",
    "Step4：套公式，写出比例结",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把\\\"s末速度：第2s末速度\\\"当成\\\"s：第2s\\\"的比,cognitiveRoot:",",correctPath:"初零匀加速有简单整数比例，核心是记住\\\"1:3:5...\\\"和\\\"1:4:9...\\\"两个核心},{wrongThinking:"初零比例公式和非初零比例混用",cognitiveRoot:",",correctPath:"初零匀加速有简单整数比例，核心是记住\\\"1:3:5...\\\"和\\\"1:4:9...\\\"两个核心}]",
  essence: "初零匀加速的比例是自然数列的变形，记牢两个核心比式",
}

export default entry
