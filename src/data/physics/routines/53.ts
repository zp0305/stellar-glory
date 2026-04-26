// PHY-R53
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R53",
  name: "带电粒子在组合场运动",
  model: "PHY-M12",
  thinkingMethod: "",
  level: "J",
  trigger: "带电粒子先经过电场加速，再进入磁场偏转（速度选择器、质谱仪）",
  path: [
    "Step1：电场区：用动能定理求进入磁场的速度：qU = ½mv²",
    "Step2：交界处：速度方向是进入磁场的初方向，决定圆心位置",
    "Step3：磁场区：r = mv/(qB)，T = 2πm/(qB)，确定落点",
    "Step4：多过程问题画轨迹草图，标出速度方向和关键半径",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把电场加速的末速度直接当 v₀ 用，没用动能定理算",cognitiveRoot:"",correctPath:"复合场问题的关键是各场独立处理，通过速度 v 联系各段"},{wrongThinking:"在复合场中把重力漏掉（微观粒子一般忽略，重粒子如油滴要考虑）",cognitiveRoot:"",correctPath:"复合场问题的关键是各场独立处理，通过速度 v 联系各段"}],
  essence: "电场给速度，磁场定轨迹，磁区边界定落点。多段独立，接口是速度。",
}

export default entry
