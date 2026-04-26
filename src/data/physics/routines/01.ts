// PHY-R01
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R01",
  name: "匀变速公式三步选择法",
  model: "PHY-M01",
  thinkingMethod: "",
  level: "B",
  trigger: "看到匀变速直线运动题，求 v/v₀/a/t/x 任一未知量",
  path: [
    "Step1：列出已知量（v₀、v、a、t、x）",
    "Step2：判断题目给的是速度还是位移",
    "Step3：选公式：给速度→①③；给位移→③；仅给加速度和时间→②",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"死套 v = v₀ + at，忽略题目是否真的给了 v₀",cognitiveRoot:"",correctPath:"核心是识别已知量类型，按\\\"给什么→选什么\\\"的信号触发，而非背公式顺序"},{wrongThinking:"把 x = v₀t + ½at² 和 v² - v₀² = 2ax 混用导致方程数不足",cognitiveRoot:"",correctPath:"核心是识别已知量类型，按\\\"给什么→选什么\\\"的信号触发，而非背公式顺序"}],
  essence: "公式是工具，题目给的是信号。先把已知量类型分类，再按类型匹配公式。",
}

export default entry
