// PHY-R14
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R14",
  name: "整体法与隔离法选择",
  model: "PHY-M04",
  thinkingMethod: "",
  level: "J",
  trigger: "连接体问题（两物体绑在一起或有相同加速度），求内力或外力",
  path: [
    "Step1：判断两物体加速度是否相同（若相同用整体法；若不同只能用隔离法）",
    "Step2：加速度相同 → 整体法：F合 = (m₁+m₂)a，绕过未知内力",
    "Step3：求内力 → 隔离其中一个物体，对它单独列 F=ma",
    "Step4：联合方程求解，验证结果合理性",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"加速度不同（如滑轮连接）时仍用整体法，导致内力求错",cognitiveRoot:"",correctPath:"连接体的关键是判断加速度是否相同——这是选择整体法还是隔离法的信号"},{wrongThinking:"隔离时把内力（绳子拉力）当成外力重复计算",cognitiveRoot:"",correctPath:"连接体的关键是判断加速度是否相同——这是选择整体法还是隔离法的信号"}],
  essence: "加速度相同用整体求外，加速度不同只能隔离。整体法绕过内力，是简化手段。",
}

export default entry
