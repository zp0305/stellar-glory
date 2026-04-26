// PHY-R11
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R11",
  name: "受力分析顺序法",
  model: "PHY-M03",
  thinkingMethod: "",
  level: "B",
  trigger: "任何受力分析题，先判断分析顺序",
  path: [
    "Step1：先分析场力（重力永远先画）",
    "Step2：判断接触面，找弹力（垂直于接触面）和摩擦力（有弹力且相对滑动/趋势）",
    "Step3：最后画已知外力或主动力",
    "Step4：检查所有力都有施力物体，无力来源于被研究对象本身",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把\\\"对物体的力\\\"和\\\"物体对别的物体的力\\\"混淆",cognitiveRoot:"",correctPath:"受力分析的顺序是固定的：先场后接触，最后主动。顺序对了，分析不容易漏"},{wrongThinking:"认为静止在斜面上的物体一定受摩擦力（可能不受）",cognitiveRoot:"",correctPath:"受力分析的顺序是固定的：先场后接触，最后主动。顺序对了，分析不容易漏"}],
  essence: "受力分析有标准顺序，按顺序来不漏力。每一力都要找到施力物体。",
}

export default entry
