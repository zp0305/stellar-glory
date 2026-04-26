// PHY-R89
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R89",
  name: "复杂电路的等效电源变换",
  model: "PHY-M11",
  thinkingMethod: "",
  level: "T",
  trigger: "复杂电路化简，包括电压源和电流源的互换",
  path: [
    "Step1：电压源→电流源：I_s = E/r，r 不变，并联在电流源两端",
    "Step2：电流源→电压源：E = I_s·r，r 不变，串联在电压源内部",
    "Step3：多个电压源并联：取最大电动势的源，其余作为内阻处理",
    "Step4：多个电流源串联：取最大电流的源，其余作为内阻处理",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"在电压源→电流源变换时，忘记把 r 也变换（r 不变，并联到电流源两端）",cognitiveRoot:"",correctPath:"等效电源变换的本质是保持外特性不变，内部结构可以不同"},{wrongThinking:"把电流源串联进电路时，误认为电流被分压（电流源串联等效为电流不变）",cognitiveRoot:"",correctPath:"等效电源变换的本质是保持外特性不变，内部结构可以不同"}],
  essence: "电压源↔电流源：E = I_s·r，r 不变。变换后外特性完全相同。",
}

export default entry
