// PHY-R44
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R44",
  name: "带电粒子在电场中运动",
  model: "PHY-M10",
  thinkingMethod: "",
  level: "J",
  trigger: "带电粒子在匀强电场中加速或偏转，求速度、位移、偏转角",
  path: [
    "Step1：加速问题：动能定理 W=Uq = ½mv²，忽略初速度时直接算",
    "Step2：偏转问题：把电场力当重力，分解为 x 匀速、y 匀加速",
    "Step3：偏转位移 y = ½·(qE/m)·t²，偏转角 tanθ = vy/vx",
    "Step4：示波器模型：先加速再偏转，两段运动独立处理",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把加速和偏转当成一个过程处理（实际上偏转电压和加速电压是串联的）",cognitiveRoot:"",correctPath:"带电粒子在电场中的运动本质是牛顿第二定律 + 运动学，类比重力场"},{wrongThinking:"用 qE 代替 mg 时没考虑两者是否在同一数量级",cognitiveRoot:"",correctPath:"带电粒子在电场中的运动本质是牛顿第二定律 + 运动学，类比重力场"}],
  essence: "电场中带电粒子运动 = 重力场中物体运动，F=ma 同样适用，区别只是 F=E·q。",
}

export default entry
