// PHY-R26
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R26",
  name: "求功三法选择",
  model: "PHY-M07",
  thinkingMethod: "",
  level: "B",
  trigger: "求某个力的功或合力的功，条件不同时选不同方法",
  path: [
    "Step1：有力有位移 → 直接用 W = F·l·cosθ",
    "Step2：只有速度变化 → 用动能定理 W合 = ΔEk",
    "Step3：重力、弹簧力 → 用势能变化 W = -ΔEp",
    "Step4：变力或曲线运动 → 优先考虑动能定理或功能关系",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"用 W = Fl cosθ 时，l 必须是力的作用点的位移，不是物体位移（当力作用点固定时）",cognitiveRoot:"",correctPath:"求功方法的本质是根据已知条件选择最简路径：力→位移用定义式，速度→动能用定理"},{wrongThinking:"把\\\"合力的功\\\"和\\\"各力功的代数和\\\"混淆，前者是合力直接算，后者是分别算再相加",cognitiveRoot:"",correctPath:"求功方法的本质是根据已知条件选择最简路径：力→位移用定义式，速度→动能用定理"}],
  essence: "功是能量转化的量度。选哪个公式，取决于已知条件，不取决于背哪个。",
}

export default entry
