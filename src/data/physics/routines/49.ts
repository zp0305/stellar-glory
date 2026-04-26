// PHY-R49
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R49",
  name: "电表改装与校准",
  model: "PHY-M11",
  thinkingMethod: "",
  level: "J",
  trigger: "把灵敏电流计改装为电压表或大量程电流表",
  path: [
    "Step1：电流表改装电压表：串联分压电阻 R = (U/g - 1)·Rg",
    "Step2：电流表改装大量程：并联分流电阻 R = Ig·Rg/(I-Ig)",
    "Step3：改装后总内阻会变化（电压表内阻增大，电流表内阻减小）",
    "Step4：校准时注意系统误差来源：表头内阻不准确、分流/分压电阻温漂",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把\\\"改装电流表\\\"的分流公式记成串联公式",cognitiveRoot:"",correctPath:"电表改装本质是串并联分压分流，改装后接入电路要替换原表头"},{wrongThinking:"改装后不更新内阻，导致后续电路分析错误",cognitiveRoot:"",correctPath:"电表改装本质是串并联分压分流，改装后接入电路要替换原表头"}],
  essence: "电压表=电流计+串联电阻（分压），电流表=电流计+并联电阻（分流）。",
}

export default entry
