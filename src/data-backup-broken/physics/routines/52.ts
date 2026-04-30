// PHY-R52
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R52",
  name: "洛伦兹力五步分析",
  model: "PHY-M12",
  thinkingMethod: "",
  level: "B",
  trigger: "带电粒子在磁场中运动，求半径、周期或速度分量",
  path: [
    "Step1：确认是匀强磁场区域，v B（若不垂直，分解 v⊥）", "Step2：洛伦兹力提供向心力：qvB = mv²/r r = mv/(qB)",
    "Step3：周T = 2πm/(qB)（与 v r 无关，仅m/q B 决定",
    "Step4：若磁场区域有限，结合运动学求偏转角和时",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把半径公式记r = Bv/qm（分子分母颠倒）",cognitiveRoot:",",correctPath:"洛伦兹力永不做功（方向始终垂直于 v），只改变运动方向，不改变速度大小"},{wrongThinking:"误以为周T 与速度 v 有关（实际无关，这是回旋加速器的原理）",cognitiveRoot:",",correctPath:"洛伦兹力永不做功（方向始终垂直于 v），只改变运动方向，不改变速度大小"}],
  essence: "洛伦兹力提供向心力，所r = mv/(qB)，T = 2πm/(qB)，均v 无关",
}

export default entry
