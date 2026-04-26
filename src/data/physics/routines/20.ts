// PHY-R20
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R20",
  name: "竖直平面圆周运动绳杆临界",
  model: "PHY-M05",
  thinkingMethod: "",
  level: "J",
  trigger: "竖直圆周运动最高点或最低点，判断是绳模型还是杆模型，求临界速度",
  path: [
    "Step1：确认模型类型：绳（只能拉）→ 最高点必须有 v ≥ √(gR)；杆（可拉可压）→ 最低速度无限制",
    "Step2：最高点：绳模型用 T + mg = mv²/R，求 T=0 时 v_min = √(gR)",
    "Step3：最低点：用机械能守恒或动能定理，从最高点能量出发",
    "Step4：比较最高点和最低点速度，验证 v₁·v₂ = gR² 关系",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"混淆绳和杆模型：杆模型在最高点可以 v=0，绳不行",cognitiveRoot:"",correctPath:"绳 vs 杆的本质区别：在最高点，杆可以提供支持力，绳不能"},{wrongThinking:"在最高点列方程时，把 mg 方向写错（向下应为负，或明确正方向）",cognitiveRoot:"",correctPath:"绳 vs 杆的本质区别：在最高点，杆可以提供支持力，绳不能"}],
  essence: "绳模型最高点 v≥√(gR)，杆模型无此限制。关键是判断模型类型再列条件。",
}

export default entry
