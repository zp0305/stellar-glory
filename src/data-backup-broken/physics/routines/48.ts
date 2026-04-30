// PHY-R48
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R48",
  name: "含电动机的电路分",
  model: "PHY-M11",
  thinkingMethod: "",
  level: "J",
  trigger: "电路中有电动机（非纯电阻），求电流、效率或功率",
  path: [
    "Step1：区分纯电阻部分（R）和非纯电阻部分（电动机：反电动E反）", "Step2：对电动机：U = E+ I·r，输出功P= E反·I",
    "Step3：电路总功P= EI，发热功P= I²(r+R)，效η = PP", "Step4：列功率平衡方程：EI = I²(r+R) + E反·I",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"对电动机直接P=I²R，漏掉了反电动势的分",cognitiveRoot:",",correctPath:"电动机的核心是\\\"反电动势\\\"——这是它与纯电阻的本质区},{wrongThinking:"把电动机的\\\"额定功率\\\"当成实际工作功率",cognitiveRoot:",",correctPath:"电动机的核心是\\\"反电动势\\\"——这是它与纯电阻的本质区}]"",
  essence: "电动机：U = E+ Ir，欧姆定律不直接适用。能量转化：电功率→机械功率+热功率",
}

export default entry
