// PHY-R47
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R47",
  name: "欧姆定律与电功率",
  model: "PHY-M11",
  thinkingMethod: "",
  level: "B",
  trigger: "电路分析中求某电阻的功率、电压或电流",
  path: [
    "Step1：先化简电路，等效内阻和外阻",
    "Step2：闭合电路：I = E/(R+r)，U端 = E-Ir",
    "Step3：功率：P=I²R=U²/R=IE，注意区分总功率/输出功率/内耗功率",
    "Step4：最大输出功率：当 R=r 时，P_max = E²/(4r)",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把\\\"最大功率\\\"的条件记成 R=0（那是电流最大，不是功率最大）",cognitiveRoot:"",correctPath:"最大输出功率 R=r 是因为 P_R = E²R/(R+r)²，对 R 求导令导数为零得 R=r"},{wrongThinking:"混淆 P=I²R 和 P=U²/R 的适用条件（纯电阻才能互化）",cognitiveRoot:"",correctPath:"最大输出功率 R=r 是因为 P_R = E²R/(R+r)²，对 R 求导令导数为零得 R=r"}],
  essence: "闭合电路分析两步：先求总电流，再分析各部分功率分配。",
}

export default entry
