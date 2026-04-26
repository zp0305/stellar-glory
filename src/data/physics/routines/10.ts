// PHY-R10
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R10",
  name: "抛体运动中绳子/杆约束的投影分析",
  model: "PHY-M02",
  thinkingMethod: "",
  level: "T",
  trigger: "物体被绳子牵着或杆约束，做圆周或曲线运动",
  path: [
    "Step1：识别约束类型：绳子只能拉，杆可拉可压",
    "Step2：把约束力分解为沿速度和垂直速度方向",
    "Step3：沿速度方向的分力改变速度大小，垂直方向改变方向",
    "Step4：结合能量守恒或功能关系列方程",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"绳子模型中，当 θ>90° 时绳子已松弛，仍按有拉力列方程",cognitiveRoot:"",correctPath:"约束的本质是限制物体的运动空间，但力方向由接触面法向决定"},{wrongThinking:"混淆绳子和杆的处理方式，杆给的压力仍当拉力处理",cognitiveRoot:"",correctPath:"约束的本质是限制物体的运动空间，但力方向由接触面法向决定"}],
  essence: "约束改变运动方向但不凭空产生能量，力做功用投影法分解。",
}

export default entry
