// PHY-R37
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R37",
  name: "反冲与火箭模型",
  model: "PHY-M09",
  thinkingMethod: "",
  level: "J",
  trigger: "火箭喷气、炮弹发射、人跳出船，问速度变化",
  path: [
    "Step1：明确系统：火箭+燃料，初始总质量 m₀，初速度 v₀",
    "Step2：喷气过程用动量守恒（内力）：(M-Δm)·v + Δm·v喷 = M·v₀",
    "Step3：化简后写成微分形式：dv/v = -dm/M（质量减少方向）",
    "Step4：积分求任意时刻速度：v = v₀ + u·ln(m₀/m)（u 为喷气相对速度）",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把喷出燃料的速度写成绝对速度而非相对火箭的速度",cognitiveRoot:"",correctPath:"火箭问题的关键是\\\"相对速度\\\"和\\\"质量减少\\\"，两者共同决定速度变化"},{wrongThinking:"忘记质量是减少的，用加法而非 ln 关系",cognitiveRoot:"",correctPath:"火箭问题的关键是\\\"相对速度\\\"和\\\"质量减少\\\"，两者共同决定速度变化"}],
  essence: "反冲速度来源于喷出物与主体的速度差，质量减少使速度增长呈对数关系。",
}

export default entry
