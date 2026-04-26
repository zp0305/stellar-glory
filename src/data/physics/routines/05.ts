// PHY-R05
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R05",
  name: "追及相遇条件分析法",
  model: "PHY-M01",
  thinkingMethod: "",
  level: "J",
  trigger: "追及或相遇问题，判断能否追上、相遇次数",
  path: [
    "Step1：画草图，标出初始位置、速度方向",
    "Step2：列两物体各自的位移方程（用时间 t 表示）",
    "Step3：令两位移相等，解出 t 代入判断合理性",
    "Step4：检验追上前速度是否已相等（若追不上，判断 v₁=v₂ 时是否共速）",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"解出 t 为负或无实根时，没判断\\\"追不上\\\"而随便写答案",cognitiveRoot:"",correctPath:"追及问题的核心临界是\\\"共速时刻\\\"，而不是\\\"相遇时刻\\\""},{wrongThinking:"忽略追上前两物体速度相等这一临界条件",cognitiveRoot:"",correctPath:"追及问题的核心临界是\\\"共速时刻\\\"，而不是\\\"相遇时刻\\\""}],
  essence: "能否追上看速度关系，追上几次看位移差，临界条件是共速时刻。",
}

export default entry
