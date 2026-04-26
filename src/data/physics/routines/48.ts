// PHY-R48
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R48",
  name: "含电动机的电路分析",
  model: "PHY-M11",
  thinkingMethod: "",
  level: "J",
  trigger: "电路中有电动机（非纯电阻），求电流、效率或功率",
  path: [
    "Step1：区分纯电阻部分（R）和非纯电阻部分（电动机：反电动势 E反）",
    "Step2：对电动机：U = E反 + I·r，输出功率 P机 = E反·I",
    "Step3：电路总功率 P总 = EI，发热功率 P热 = I²(r+R)，效率 η = P机/P总",
    "Step4：列功率平衡方程：EI = I²(r+R) + E反·I",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"对电动机直接用 P=I²R，漏掉了反电动势的分压",cognitiveRoot:"",correctPath:"电动机的核心是\\\"反电动势\\\"——这是它与纯电阻的本质区别"},{wrongThinking:"把电动机的\\\"额定功率\\\"当成实际工作功率",cognitiveRoot:"",correctPath:"电动机的核心是\\\"反电动势\\\"——这是它与纯电阻的本质区别"}],
  essence: "电动机：U = E反 + Ir，欧姆定律不直接适用。能量转化：电功率→机械功率+热功率。",
}

export default entry
