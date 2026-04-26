// PHY-R73
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R73",
  name: "磁场偏转与速度选择器",
  model: "PHY-M12",
  thinkingMethod: "",
  level: "J",
  trigger: "速度选择器或磁流体发电机，求电场和磁场的平衡条件",
  path: [
    "Step1：速度选择器：当 qE = qvB 时，粒子直线通过（不受力）",
    "Step2：满足 v = E/B 的粒子才能通过，与电荷量和质量无关",
    "Step3：磁流体发电机：导电液体流过磁场，两极板间产生电压",
    "Step4：霍尔效应：导体/半导体中，电流垂直磁场时产生横向电势差",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把速度选择器中\\\"能通过\\\"的条件当成 v = B/E（写反了）",cognitiveRoot:"",correctPath:"速度选择器的信号是\\\"电力和磁力平衡\\\"，v = E/B 是平衡条件"},{wrongThinking:"混淆磁流体发电机的电压方向（洛伦兹力把正负离子分离到两极板）",cognitiveRoot:"",correctPath:"速度选择器的信号是\\\"电力和磁力平衡\\\"，v = E/B 是平衡条件"}],
  essence: "速度选择器：qE = qvB → v = E/B，粒子直线通过，与 q/m 无关。",
}

export default entry
