// PHY-R33
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R33",
  name: "碰撞分类判断",
  model: "PHY-M08",
  thinkingMethod: "",
  level: "J",
  trigger: "碰撞问题，判断是弹性/非弹性/完全非弹性，求碰撞后速度",
  path: [
    "Step1：判断碰撞类型：弹性碰撞（ΔEk=0）；非弹性（ΔEk<0）；完全非弹性（共速）",
    "Step2：完全非弹性 → 动量守恒直接求 v共",
    "Step3：弹性碰撞 → 动量守恒 + 动能守恒，联立两方程",
    "Step4：验证合理性：碰撞后相对速度方向应与碰撞前相反",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把\\\"非弹性碰撞\\\"当成\\\"完全非弹性碰撞\\\"（漏判类型导致方法选错）",cognitiveRoot:"",correctPath:"弹性碰撞的判定是 ΔEk=0，不是\\\"碰后不粘\\\"那么简单"},{wrongThinking:"弹性碰撞直接套公式不验证，结果不符合速度方向要求",cognitiveRoot:"",correctPath:"弹性碰撞的判定是 ΔEk=0，不是\\\"碰后不粘\\\"那么简单"}],
  essence: "碰撞类型决定方程数量：动量守恒必用，能量守恒看类型。",
}

export default entry
