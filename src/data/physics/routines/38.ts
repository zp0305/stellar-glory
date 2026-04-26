// PHY-R38
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R38",
  name: "弹簧连接体动量与能量",
  model: "PHY-M09",
  thinkingMethod: "",
  level: "T",
  trigger: "两物体通过弹簧连接，动量守恒+机械能守恒联合问题",
  path: [
    "Step1：判断系统是否满足动量守恒（合外力为零）",
    "Step2：若守恒，在平衡位置时系统动能最大，弹簧势能最小",
    "Step3：在最大压缩/伸长时，两物体速度相同 → 用动量守恒求共同速度",
    "Step4：联合机械能守恒（弹簧势能全转化），列方程求振幅",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"混淆\\\"平衡位置\\\"（动量最大）和\\\"最大位移处\\\"（动能为零）的物理条件",cognitiveRoot:"",correctPath:"弹簧振子系统：动量守恒决定质心运动，机械能守恒决定振幅"},{wrongThinking:"把弹簧势能写错：Ep = ½kx²，不是 kx",cognitiveRoot:"",correctPath:"弹簧振子系统：动量守恒决定质心运动，机械能守恒决定振幅"}],
  essence: "平衡位置是动能的拐点，最大位移是势能的拐点，动量守恒控制质心。",
}

export default entry
