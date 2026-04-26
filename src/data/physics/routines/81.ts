// PHY-R81
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R81",
  name: "交变电流有效值定义应用",
  model: "PHY-M13",
  thinkingMethod: "",
  level: "J",
  trigger: "非正弦交流电求有效值，或利用有效值计算电功率",
  path: [
    "Step1：有效值定义：让交变电流和直流电通过相同电阻，在相同时间内产生相同热量",
    "Step2：数学表达式：I²R·T = ∫₀ᵀ I(t)²R·dt → I_rms = √(1/T·∫₀ᵀ I(t)²dt)",
    "Step3：正弦波：I_rms = I_m/√2；方波：I_rms = I_m",
    "Step4：求非正弦波有效值：分段计算 ∫I²dt 再开根号",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把有效值当成最大值的一半（非正弦波不一定）",cognitiveRoot:"",correctPath:"有效值是用能量等效定义的，必须通过热量相等来理解"},{wrongThinking:"在计算非正弦波功率时，直接把有效值代入 P = I²R 而不重新积分",cognitiveRoot:"",correctPath:"有效值是用能量等效定义的，必须通过热量相等来理解"}],
  essence: "有效值是热效应等效：相同时间相同电阻产生相同热量的直流值。",
}

export default entry
