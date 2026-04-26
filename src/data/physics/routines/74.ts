// PHY-R74
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R74",
  name: "回旋加速器原理分析",
  model: "PHY-M12",
  thinkingMethod: "",
  level: "T",
  trigger: "回旋加速器问题，求最大速度、能量或加速次数",
  path: [
    "Step1：最大动能：E_km = ½mv_m²，v_m = qBR/m（R 为 D 盒半径）",
    "Step2：周期 T = 2πm/(qB)，与 v 和 R 无关（这是能持续加速的关键）",
    "Step3：交流电频率必须匹配 f = qB/(2πm)，否则加速效率降低",
    "Step4：考虑相对论效应：m 随速度增大，加速器不能无限加速",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把回旋周期当成 T = 2π√(m/k)（那是弹簧振子公式）",cognitiveRoot:"",correctPath:"回旋加速器的核心是\\\"周期与速度无关\\\"，但这个结论在接近光速时失效"},{wrongThinking:"忽略相对论效应，认为粒子能量可以无限增加",cognitiveRoot:"",correctPath:"回旋加速器的核心是\\\"周期与速度无关\\\"，但这个结论在接近光速时失效"}],
  essence: "T = 2πm/(qB)，与 v 无关是加速条件，v_max = qBR/m 是最终限制。",
}

export default entry
