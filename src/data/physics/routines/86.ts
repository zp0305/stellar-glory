// PHY-R86
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R86",
  name: "核聚变与核裂变能量比较",
  model: "PHY-M15",
  thinkingMethod: "",
  level: "J",
  trigger: "比较不同核反应的能量释放，或求聚变/裂变的能量",
  path: [
    "Step1：计算质量亏损 Δm = Σm反应物 - Σm产物",
    "Step2：能量释放 E = Δm·c²（c = 3×10⁸ m/s）",
    "Step3：常用单位：1 u = 931.5 MeV/c²，可直接用原子质量单位算 MeV",
    "Step4：聚变能量/核子比裂变大：轻核聚变更高效（单位质量释放能量更多）",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把原子质量（包含电子）和原子核质量（不含电子）混淆",cognitiveRoot:"",correctPath:"核能计算用原子质量（包含电子云），因为电子质量也参与了质量亏损"},{wrongThinking:"在用原子质量计算时，忘了减去电子质量变化导致的误差",cognitiveRoot:"",correctPath:"核能计算用原子质量（包含电子云），因为电子质量也参与了质量亏损"}],
  essence: "E = Δm·c²，1 u = 931.5 MeV。聚变比裂变能量密度更高。",
}

export default entry
