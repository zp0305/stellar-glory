// PHY-R32
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R32",
  name: "板块系统能量分析",
  model: "PHY-M08",
  thinkingMethod: "",
  level: "T",
  trigger: "板块系统运动后，求系统能量变化、热量、或判断最终状态",
  path: [
    "Step1：先判断是否共速（用临界加速度法或能量比较）",
    "Step2：系统能量变化 = 初机械能 - 末机械能",
    "Step3：内能增加量 Q = f·l相（摩擦力 × 相对位移）",
    "Step4：用能量守恒或功能关系验证：ΔE = -Q",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把两物体各自减小的动能之和当成系统能量损失（忽略了质心动能）",cognitiveRoot:"",correctPath:"板块系统的能量分析比动量复杂：不仅要算相对位移，还要区分质心动能和内能"},{wrongThinking:"在非共速过程中，没有分段处理能量关系",cognitiveRoot:"",correctPath:"板块系统的能量分析比动量复杂：不仅要算相对位移，还要区分质心动能和内能"}],
  essence: "系统能量损失 = 摩擦力 × 相对位移，与质心运动无关。",
}

export default entry
