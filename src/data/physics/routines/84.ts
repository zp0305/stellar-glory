// PHY-R84
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R84",
  name: "薄膜干涉厚度计算",
  model: "PHY-M14",
  thinkingMethod: "",
  level: "J",
  trigger: "薄膜干涉问题，已知条纹类型（明/暗），求膜厚度",
  path: [
    "Step1：判断光程差 δ = 2nd·cosθ + λ/2（加 λ/2 因为从光疏到光密反射有半波损失）",
    "Step2：入射光垂直入射时 cosθ ≈ 1，δ = 2nd ± λ/2",
    "Step3：明纹：2nd = (kλ - λ/2)（k=1,2,3...）",
    "Step4：暗纹：2nd = kλ（k=0,1,2...）",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"忘记加 λ/2 的半波损失修正，导致厚度算错",cognitiveRoot:"",correctPath:"薄膜干涉中判断半波损失是关键：看光从哪到哪反射，空气→膜→空气，两次反射之一有半波损失"},{wrongThinking:"把\\\"增透膜\\\"和\\\"增反膜\\\"的条件搞混",cognitiveRoot:"",correctPath:"薄膜干涉中判断半波损失是关键：看光从哪到哪反射，空气→膜→空气，两次反射之一有半波损失"}],
  essence: "薄膜干涉：半波损失决定加 λ/2 还是不加，2nd 是厚度贡献。",
}

export default entry
