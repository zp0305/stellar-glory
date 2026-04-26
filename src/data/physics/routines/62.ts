// PHY-R62
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R62",
  name: "全反射棱镜应用",
  model: "PHY-M14",
  thinkingMethod: "",
  level: "J",
  trigger: "全反射棱镜、玻璃砖的光路分析，求出射光方向或位移",
  path: [
    "Step1：判断光从玻璃到空气是否满足全反射条件（θ入 > arcsin(1/n)）",
    "Step2：若全反射：用反射定律（入射角 = 反射角）",
    "Step3：若不发生全反射：用折射定律 n₁sinθ₁ = n₂sinθ₂",
    "Step4：平行板玻璃砖：入射光与出射光平行，侧移 Δx = d·sin(θ₁-θ₂)/cosθ₂",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把全反射当成\\\"光完全消失\\\"（实际是100%反射，只是没有折射光）",cognitiveRoot:"",correctPath:"全反射棱镜的信号是\\\"入射角大于临界角\\\"，此时只发生反射，不发生折射"},{wrongThinking:"在玻璃砖侧移公式中，把 d 当成总厚度而非垂直厚度",cognitiveRoot:"",correctPath:"全反射棱镜的信号是\\\"入射角大于临界角\\\"，此时只发生反射，不发生折射"}],
  essence: "全反射 = 无折射 = 纯反射，入射角=反射角。玻璃砖侧移 = 光程差的几何体现。",
}

export default entry
