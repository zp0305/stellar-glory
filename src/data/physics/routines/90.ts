// PHY-R90
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R90",
  name: "力学实验数据处理",
  model: "PHY-M03",
  thinkingMethod: "",
  level: "B",
  trigger: "验证牛顿第二定律或机械能守恒的实验，需要处理纸带数据",
  path: [
    "Step1：纸带数据：用逐差法求加速度 a = Δx/T²（T 为打点周期）",
    "Step2：速度计算：某点瞬时速度 = 相邻两点位移之和 / 2T",
    "Step3：作图：用坐标纸画 v-t 图，斜率即加速度，截距即初速度",
    "Step4：误差分析：系统误差（仪器零误差、重力加速度取值）；偶然误差（测量、读数）",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"用相邻两段位移之差算加速度（应逐差：相邻位移之差是 2aT²，不是 aT²）",cognitiveRoot:"",correctPath:"逐差法的核心是\\\"隔段相减消除初速度\\\"，隔段数为数据点数的一半时误差最小"},{wrongThinking:"把瞬时速度写成 v = x/t（那是平均速度）",cognitiveRoot:"",correctPath:"逐差法的核心是\\\"隔段相减消除初速度\\\"，隔段数为数据点数的一半时误差最小"}],
  essence: "逐差法消除初速度，逐差数 = 数据段数/2 时误差最小。瞬时速度用平均速度近似。",
}

export default entry
