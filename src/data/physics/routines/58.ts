// PHY-R58
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R58",
  name: "变压器与远距离输电",
  model: "PHY-M13",
  thinkingMethod: "",
  level: "J",
  trigger: "变压器变比问题，或远距离输电中求线路损耗",
  path: [
    "Step1：理想变压器：U₁/U₂ = n₁/n₂，I₁/I₂ = n₂/n₁",
    "Step2：多负载变压器：总功率守恒 P₁ = P₂，注意电流比与匝数比的反比关系",
    "Step3：远距离输电：先求输电电流 I = P/U，再求线路损耗 ΔP = I²·R线",
    "Step4：提高输电电压 → 减小电流 → 减小线路损耗（高压输电原理）",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把\\\"匝数比\\\"写成电流比（电流比等于匝数的反比，不是正比）",cognitiveRoot:"",correctPath:"变压器问题的关键是\\\"功率守恒\\\"：输入功率 = 输出功率，不是电压直接相等"},{wrongThinking:"在远距离输电中把用户电压当成输电电压（实际有线路压降损失）",cognitiveRoot:"",correctPath:"变压器问题的关键是\\\"功率守恒\\\"：输入功率 = 输出功率，不是电压直接相等"}],
  essence: "高压输电减小电流从而减小 I²R 损耗，升压后降压都要用变压器。",
}

export default entry
