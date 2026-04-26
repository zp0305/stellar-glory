// PHY-R75
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R75",
  name: "光学的波动性与粒子性统一",
  model: "PHY-M14",
  thinkingMethod: "",
  level: "T",
  trigger: "综合光学问题，同时涉及干涉、衍射，光电效应",
  path: [
    "Step1：判断是哪类光学现象：干涉/衍射 → 波动性；光电效应/康普顿 → 粒子性",
    "Step2：波动性用 λ 和 ν 描述，粒子性用 E 和 p 描述，两者通过 E= hν，p = h/λ 联系",
    "Step3：在双缝干涉中，条纹是波动叠加结果，光子到达屏的概率分布是粒子性体现",
    "Step4：用德布罗意波长比较宏观和微观尺度：λ = h/p，宏观物体 λ 极小不可观测",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把光的\\\"粒子性\\\"理解为\\\"光子是小球\\\"（实际是量子化能量单位）",cognitiveRoot:"",correctPath:"光的波粒二象性：干涉衍射是波动性，光电效应是粒子性，两者互补不矛盾"},{wrongThinking:"混淆\\\"光子有动量 p = h/λ\\\"和\\\"光子有质量 m = h/(λc)\\\"（静质量为0）",cognitiveRoot:"",correctPath:"光的波粒二象性：干涉衍射是波动性，光电效应是粒子性，两者互补不矛盾"}],
  essence: "光既是波又是粒子，λν 联系两者。宏观看波动性，微观看粒子性。",
}

export default entry
