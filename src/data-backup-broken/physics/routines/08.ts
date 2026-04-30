// PHY-R08
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R08",
  name: "斜面平抛射程最值分",
  model: "PHY-M02",
  thinkingMethod: "",
  level: "T",
  trigger: "从斜面顶端平抛，落在斜面上，求射程或初速度最值条",
  path: [
    "Step1：建坐标系：x轴沿斜面，y轴垂直斜", "Step2：写出落点坐标，用角度条tanφ = y/x",
    "Step3：消去时t，得v₀ φ 的关", "Step4：对 φ 求导或配方，求最值对应的角度",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"用地面坐标系死算，方程复杂无法化简",cognitiveRoot:",",correctPath:"斜面坐标系的本质是把\\\"落在斜面\\\"这个条件变成简单角度关},{wrongThinking:"求导时把 φ 当成变量，但实际 v₀ 才是待求",cognitiveRoot:",",correctPath:"斜面坐标系的本质是把\\\"落在斜面\\\"这个条件变成简单角度关}]"",
  essence: "选对坐标系，把几何条件变成代数条件，最值就变成了求导或配方",
}

export default entry
