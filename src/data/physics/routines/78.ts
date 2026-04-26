// PHY-R78
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R78",
  name: "变质量问题火箭推力",
  model: "PHY-M09",
  thinkingMethod: "",
  level: "T",
  trigger: "变质量问题（火箭喷气、流水、链条落下），求推力或速度",
  path: [
    "Step1：选系统：用动量定理，对变质量系统有 F外 = d(mv)/dt",
    "Step2：对火箭：d(mv)/dt = v_rel·dm/dt（齐奥尔科夫斯基公式的微分形式）",
    "Step3：积分求速度：v = v₀ + u·ln(m₀/m)（u 为喷气相对速度）",
    "Step4：推力 F = u·|dm/dt|（注意是单位时间喷出的质量乘相对速度）",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"对链条问题，把链条元质量写成 λv·dt 而非 λ·dx",cognitiveRoot:"",correctPath:"变质量问题的关键是选好系统，对流出/流入系统的那部分质量单独处理"},{wrongThinking:"把\\\"相对速度\\\"当成喷气绝对速度",cognitiveRoot:"",correctPath:"变质量问题的关键是选好系统，对流出/流入系统的那部分质量单独处理"}],
  essence: "变质量核心：d(mv)/dt = F外，正确写出 dm/dt 是解题关键。",
}

export default entry
