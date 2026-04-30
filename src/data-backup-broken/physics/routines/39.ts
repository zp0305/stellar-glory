// PHY-R39
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R39",
  name: "一维碰撞速度求解",
  model: "PHY-M09",
  thinkingMethod: "",
  level: "J",
  trigger: "一维弹性碰撞或完全非弹性碰撞，求碰撞后速度",
  path: [
    "Step1：列动量守恒：m₁v+ m₂v= m₁v + m₂v", "Step2：弹性碰撞加动能守恒（或用速度推导公式 v = (mm/(mm·v+ 2m(mm·v₂）",
    "Step3：完全非弹性：v = v = (m₁vm₂v/(mm",
    "Step4：代入已知量求解，验证结果合理",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"用速度变换公式时代入正负号错误",cognitiveRoot:",",correctPath:"碰撞速度公式的推导比记公式更可靠：联立方程是通法"},{wrongThinking:"把弹性碰撞公式记反（mm位置搞混",cognitiveRoot:",",correctPath:"碰撞速度公式的推导比记公式更可靠：联立方程是通法"}]"",
  essence: "通法：动量守+ 能量守恒 两方程两未知数。公式是结果，不是起点",
}

export default entry
