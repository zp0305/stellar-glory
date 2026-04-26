// PHY-R09
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R09",
  name: "平抛运动的临界角度法",
  model: "PHY-M02",
  thinkingMethod: "",
  level: "J",
  trigger: "平抛运动恰好擦过某点或恰好落在某边界",
  path: [
    "Step1：识别\"恰好\"对应的几何条件（斜率相等/点在轨迹上/相切）",
    "Step2：用边界条件列方程，替换掉未知量",
    "Step3：判断是恰好擦过还是刚好落在，列判别式或端点条件",
    "Step4：解方程，验证合理性",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"\\\"恰好\\\"对应的是边界条件，但容易把它当成普通方程用",cognitiveRoot:"",correctPath:"\\\"恰好\\\"是物理中的临界条件，翻译成数学就是方程的边界值"},{wrongThinking:"判别式 Δ=0 用错对象（是对 t 或 y 的方程，不是对 x 的）",cognitiveRoot:"",correctPath:"\\\"恰好\\\"是物理中的临界条件，翻译成数学就是方程的边界值"}],
  essence: "\"恰好\" = 边界条件 = 方程取等号或判别式为零。",
}

export default entry
