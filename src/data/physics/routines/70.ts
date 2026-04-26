// PHY-R70
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R70",
  name: "光的粒子性综合",
  model: "PHY-M15",
  thinkingMethod: "",
  level: "J",
  trigger: "光电效应和康普顿效应综合问题，比较光子能量和动量",
  path: [
    "Step1：光电效应：光子能量完全被电子吸收（全部能量转化为电子动能）",
    "Step2：康普顿效应：光子与电子碰撞，部分能量转移（散射光频率降低）",
    "Step3：计算波长变化 Δλ = h/(m_ec)·(1-cosθ)（康普顿公式）",
    "Step4：比较两种效应的条件：光电效应发生在原子外层电子（束缚电子），康普顿在自由电子",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把两种效应当成同一回事（光电效应要求光子能量≥逸出功，康普顿没有此限制）",cognitiveRoot:"",correctPath:"光电效应是光子被吸收（光子消失），康普顿是光子被散射（光子存在但能量减少）"},{wrongThinking:"把康普顿公式中的 m 记成电子质量（正确）但忘了 h/(m_ec) = 2.43×10⁻¹² m",cognitiveRoot:"",correctPath:"光电效应是光子被吸收（光子消失），康普顿是光子被散射（光子存在但能量减少）"}],
  essence: "光电效应：光子被完全吸收，电子跑出来；康普顿：光子被撞飞，能量减少。",
}

export default entry
