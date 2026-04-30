// PHY-R85
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R85",
  name: "原子核衰变类型判",
  model: "PHY-M15",
  thinkingMethod: "",
  level: "B",
  trigger: "给定衰变类型（ββγ），写出衰变方程或推断产",
  path: [
    "Step1：衰变：⁴₂He 放出，质量数，核电荷数减2", "Step2：β⁻ 衰变：中子变质子，核电荷数加1，质量数不变（⁰₋₁e 放出", "Step3：β⁺ 衰变：质子变中子，核电荷数减1，质量数不变（⁰₊₁e 放出，即正电子）", "Step4：衰变：不改变核素种类，仅释放能量（常伴随 α/β 衰变后残余能量释放）",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"β衰变的电子数写成 ⁰₊₁e（应⁰₋₁e",cognitiveRoot:",",correctPath:"α ，β⁻ ，β⁺ ，不变。记忆：α 像\\\"减法\\\"，β⁻ 像\\\"加法\\\"},{wrongThinking:"γ 衰变当成独立衰变（实际上是其他衰变后的能量释放）",cognitiveRoot:",",correctPath:"α ，β⁻ ，β⁺ ，不变。记忆：α 像\\\"减法\\\"，β⁻ 像\\\"加法\\\"}]"",
  essence: "α4, -2；β⁻, +1；β⁺, -1；γ：0, 0。质量数和电荷数必须守恒",
}

export default entry
