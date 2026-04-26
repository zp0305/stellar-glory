// PHY-R40
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R40",
  name: "动量守恒与能量守恒的协同使用",
  model: "PHY-M09",
  thinkingMethod: "",
  level: "T",
  trigger: "复杂系统问题，需要同时用动量守恒和能量守恒",
  path: [
    "Step1：先判断哪些过程动量守恒，哪些不守恒（一般碰撞/分裂守恒，爆炸守恒）",
    "Step2：机械能守恒的条件检查：是否只有重力/弹力做功",
    "Step3：分段处理，每个过程单独判断条件",
    "Step4：联立方程时注意：动能变化用 ΔEk，势能变化用 ΔEp，不能混用",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"在有摩擦力时仍用机械能守恒（实际是机械能损失，用功能定理）",cognitiveRoot:"",correctPath:"两个守恒定律各有各的条件，先判断再用，不能同时乱用"},{wrongThinking:"把动量守恒和机械能守恒的条件搞混，在弹性碰撞中漏了动能守恒",cognitiveRoot:"",correctPath:"两个守恒定律各有各的条件，先判断再用，不能同时乱用"}],
  essence: "动量守恒和能量守恒是两套独立条件，用哪个取决于过程，不取决于题目难不难。",
}

export default entry
