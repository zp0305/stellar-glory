// PHY-R27
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R27",
  name: "动能定理单物体应用",
  model: "PHY-M07",
  thinkingMethod: "",
  level: "B",
  trigger: "单个物体受多个力，过程复杂，已知部分力做功和初末速度",
  path: [
    "Step1：明确研究对象和运动过程（初状态、末状态）",
    "Step2：列动能定理：W合 = Ek末 - Ek初",
    "Step3：把所有功分项写出：W重 + W弹 + W摩 + W其他 = ΔEk",
    "Step4：代入已知量，解方程，注意正负号",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"漏掉某个力的功，尤其是重力（随高度变容易忘）",cognitiveRoot:"",correctPath:"动能定理的核心是\\\"合外力做功 = 动能变化\\\"，合外力不是所有外力的矢量和而是所有功的代数和"},{wrongThinking:"把 W合 当成\\\"各力做功的绝对值之和\\\"而非代数和",cognitiveRoot:"",correctPath:"动能定理的核心是\\\"合外力做功 = 动能变化\\\"，合外力不是所有外力的矢量和而是所有功的代数和"}],
  essence: "动能定理把过程复杂的多力做功，变成初末状态的能量比较。",
}

export default entry
