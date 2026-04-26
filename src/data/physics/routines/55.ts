// PHY-R55
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R55",
  name: "楞次定律应用",
  model: "PHY-M13",
  thinkingMethod: "",
  level: "B",
  trigger: "判断感应电流方向，或判断导体运动趋势",
  path: [
    "Step1：原磁场方向如何变化？（增强/减弱）",
    "Step2：感应电流产生的磁场方向：阻碍原磁场变化（增反减同）",
    "Step3：右手螺旋判断感应电流方向",
    "Step4：从能量角度：感应电流的方向总是使系统能量增加的方向",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把\\\"阻碍\\\"理解成\\\"阻止\\\"（实际是\\\"反抗变化\\\"，最终仍会变化）",cognitiveRoot:"",correctPath:"楞次定律的本质是能量守恒，感应电流的方向总是抵抗引起感应的原因"},{wrongThinking:"在右手螺旋中，把四指方向和磁场方向搞混",cognitiveRoot:"",correctPath:"楞次定律的本质是能量守恒，感应电流的方向总是抵抗引起感应的原因"}],
  essence: "增反减同——原磁通增加时，感应磁场反向；减少时，感应磁场同向。",
}

export default entry
