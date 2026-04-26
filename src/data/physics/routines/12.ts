// PHY-R12
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R12",
  name: "正交分解标准流程",
  model: "PHY-M03",
  thinkingMethod: "",
  level: "B",
  trigger: "斜面上物体受多力作用，求加速度或某个力",
  path: [
    "Step1：建立坐标系（尽量让更多力落在坐标轴上）",
    "Step2：把所有力分解到 x、y 轴",
    "Step3：x 轴用 F=ma，y 轴用平衡（a=0 时 F_y=0）",
    "Step4：解方程，代回原式求目标量",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"分解方向选错：把重力分解到沿斜面和垂直斜面，却用错了坐标系",cognitiveRoot:"",correctPath:"坐标系的选取决定运算复杂度，优先让未知力落在轴上"},{wrongThinking:"把 a=0 当成默认条件，在有加速度时仍写 F_y=0",cognitiveRoot:"",correctPath:"坐标系的选取决定运算复杂度，优先让未知力落在轴上"}],
  essence: "坐标系选得好，方程就简单。优先让未知力落轴，让已知加速度方向落轴。",
}

export default entry
