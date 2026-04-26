// PHY-R17
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R17",
  name: "板块模型临界判断",
  model: "PHY-M04",
  thinkingMethod: "",
  level: "T",
  trigger: "板块模型中判断是否发生相对滑动，或求摩擦力突变时机",
  path: [
    "Step1：假设两物体一起加速，用最大静摩擦 f_max = μN 求临界加速度 a_c = μg",
    "Step2：比较系统实际加速度 a 与 a_c",
    "Step3：若 a ≤ a_c：一起运动，f 为静摩擦，f = ma",
    "Step4：若 a > a_c：发生相对滑动，分别对两物体列方程",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把最大静摩擦直接当静摩擦用，而不比较 a 和 a_c",cognitiveRoot:"",correctPath:"板块临界问题的信号是\\\"临界加速度\\\"，求出 a_c 再比较是标准流程"},{wrongThinking:"相对滑动后仍用 f = μmg 而非 f = μmg（对上面的物体可能是 N<mg）",cognitiveRoot:"",correctPath:"板块临界问题的信号是\\\"临界加速度\\\"，求出 a_c 再比较是标准流程"}],
  essence: "找临界加速度，比较实际加速度。判断是临界值，不是猜测。",
}

export default entry
