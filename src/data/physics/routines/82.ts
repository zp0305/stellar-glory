// PHY-R82
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R82",
  name: "光的全反射临界条件",
  model: "PHY-M14",
  thinkingMethod: "",
  level: "B",
  trigger: "判断光是否发生全反射，或求全反射临界角",
  path: [
    "Step1：判断光路：从光密到光疏才有全反射可能",
    "Step2：求临界角：sinC = 1/n = n₂/n₁（n₁>n₂）",
    "Step3：若入射角 θ > C → 全反射；θ < C → 部分折射",
    "Step4：全反射时反射光强度等于入射光（理想情况下）",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把 sinC = 1/n 记成 sinC = n（反过来）",cognitiveRoot:"",correctPath:"全反射的条件：光密到光疏 + 入射角大于临界角，两者缺一不可"},{wrongThinking:"认为全反射时\\\"没有光\\\"（实际是100%反射，没有折射光）",cognitiveRoot:"",correctPath:"全反射的条件：光密到光疏 + 入射角大于临界角，两者缺一不可"}],
  essence: "sinC = 1/n（从光密到光疏），临界角由折射率决定。",
}

export default entry
