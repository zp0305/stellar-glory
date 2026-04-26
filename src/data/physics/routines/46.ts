// PHY-R46
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R46",
  name: "电阻串并联等效",
  model: "PHY-M11",
  thinkingMethod: "",
  level: "B",
  trigger: "复杂电阻网络化简，求等效电阻",
  path: [
    "Step1：从离电源最远处开始，逐级向内合并",
    "Step2：串联：R = R₁+R₂；并联：1/R = 1/R₁+1/R₂",
    "Step3：对称性化简：等势点合并，电流重新分配",
    "Step4：画等效电路图，逐步化简直到只剩一个等效电阻",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"对称电路中把电势相同的节点当成直接相连（实际不相连）",cognitiveRoot:"",correctPath:"电阻网络的化简本质是\\\"电势相同点可以合并，电流守恒\\\""},{wrongThinking:"并联公式记反：以为 1/R = R₁+R₂",cognitiveRoot:"",correctPath:"电阻网络的化简本质是\\\"电势相同点可以合并，电流守恒\\\""}],
  essence: "找等势点、画等效电路、分级化简，从末端向电源方向处理。",
}

export default entry
