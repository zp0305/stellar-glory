// PHY-R66
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R66",
  name: "氢原子光谱与能级跃迁",
  model: "PHY-M15",
  thinkingMethod: "",
  level: "B",
  trigger: "氢原子跃迁问题，已知能级或谱线，求吸辐射光子能量",
  path: [
    "Step1：能级公式：E_n = -13.6/n² eV（n 越大，能级越高，越接0", "Step2：吸收光子：从低能级到高能级，能量增ΔE = E- E", "Step3：辐射光子：从高能级到低能级，能量减ΔE = E- E= hν",
    "Step4：巴尔末系：可见光区对应 n n=2 的跃",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把能级能量当成正数（实际为负，n 越大 E 越大即越接近 0",cognitiveRoot:",",correctPath:"能级为负数，n 增大则能量增大（更接0），跃迁ΔE 总是 E- E"},{wrongThinking:"把\\\"吸收光子\\\"和\\\"辐射光子\\\"的符号搞,cognitiveRoot:",",correctPath:"能级为负数，n 增大则能量增大（更接0），跃迁ΔE 总是 E- E"},]",
  essence: "E_n = -13.6/n² eV。吸收：ΔE > 0；辐射：ΔE < 0",
}

export default entry
