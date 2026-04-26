// PHY-R77
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R77",
  name: "非惯性系中的等效重力",
  model: "PHY-M03",
  thinkingMethod: "",
  level: "J",
  trigger: "系统有加速度（电梯/车厢），在非惯性系中分析力学问题",
  path: [
    "Step1：在非惯性系中，引入惯性力 F_i = -m·a₀（方向与加速度相反）",
    "Step2：等效重力加速度 g' = g - a₀（在加速升降的电梯中）",
    "Step3：在加速车厢中：等效 g' 方向不竖直，物体平衡位置会改变",
    "Step4：结合平衡条件或牛顿第二定律分析，静止时 F合' = 0",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把惯性力的方向记反（应该与系统加速度方向相反）",cognitiveRoot:"",correctPath:"非惯性系中加惯性力，本质是把加速度的效果\\\"假装\\\"成重力场"},{wrongThinking:"把\\\"等效 g\\\"当成真正的重力加速度（只是在分析时用 g' 代替 g）",cognitiveRoot:"",correctPath:"非惯性系中加惯性力，本质是把加速度的效果\\\"假装\\\"成重力场"}],
  essence: "非惯性系：引入 F_i = -ma₀，之后就可以用常规力学方法处理。",
}

export default entry
