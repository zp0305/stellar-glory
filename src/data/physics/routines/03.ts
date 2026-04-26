// PHY-R03
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R03",
  name: "相对运动换参考系法",
  model: "PHY-M01",
  thinkingMethod: "",
  level: "J",
  trigger: "两物体同时运动，追及或相遇问题中条件复杂",
  path: [
    "Step1：选一个物体为参考系（通常选加速度已知或静止的）",
    "Step2：把另一个物体相对参考系的速度、加速度写出",
    "Step3：转化为参考系中的单一物体问题",
    "Step4：求解后，再换回地面参考系",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"换参考系后忘记改变换物理量（速度、加速度都要换）",cognitiveRoot:"",correctPath:"换参考系是\\\"视角切换\\\"，换前后物理本质不变，只是描述语言变了"},{wrongThinking:"选非惯性参考系时忘记加伪力",cognitiveRoot:"",correctPath:"换参考系是\\\"视角切换\\\"，换前后物理本质不变，只是描述语言变了"}],
  essence: "通过切换观察视角，把双物体问题降级为单物体问题。",
}

export default entry
