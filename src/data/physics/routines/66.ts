// PHY-R66
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R66",
  name: "氢原子光谱与能级跃迁",
  model: "PHY-M15",
  thinkingMethod: "",
  level: "B",
  trigger: "氢原子跃迁问题，已知能级或谱线，求吸收/辐射光子能量",
  path: [
    "Step1：能级公式：E_n = -13.6/n² eV（n 越大，能级越高，越接近 0）",
    "Step2：吸收光子：从低能级到高能级，能量增加 ΔE = E高 - E低",
    "Step3：辐射光子：从高能级到低能级，能量减少 ΔE = E高 - E低 = hν",
    "Step4：巴尔末系：可见光区对应 n≥3 → n=2 的跃迁",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把能级能量当成正数（实际为负，n 越大 E 越大即越接近 0）",cognitiveRoot:"",correctPath:"能级为负数，n 增大则能量增大（更接近 0），跃迁时 ΔE 总是 E初 - E末"},{wrongThinking:"把\\\"吸收光子\\\"和\\\"辐射光子\\\"的符号搞反",cognitiveRoot:"",correctPath:"能级为负数，n 增大则能量增大（更接近 0），跃迁时 ΔE 总是 E初 - E末"}],
  essence: "E_n = -13.6/n² eV。吸收：ΔE > 0；辐射：ΔE < 0。",
}

export default entry
