// PHY-R45
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R45",
  name: "电容器动态分析",
  model: "PHY-M10",
  thinkingMethod: "",
  level: "J",
  trigger: "电容器连接电源或与电阻串联，分析 U/Q/C/E 变化",
  path: [
    "Step1：先判断电容器是连接电源（U 恒定）还是先充电后断开（Q 恒定）",
    "Step2：U 恒定时：改变间距/正对面积/介质 → C 变 → Q=CU 变，但 U 不变",
    "Step3：Q 恒定时：改变间距/正对面积 → C 变 → U=Q/C 变，但 Q 不变",
    "Step4：E 的判断：U 恒定时 E∝1/d（d 为板间距）；Q 恒定时 E 不变",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"在 U 恒定时把 E 当成不变（实际 E=U/d，d 变则 E 变）",cognitiveRoot:"",correctPath:"电容器动态分析的关键是区分\\\"U 恒定\\\"和\\\"Q 恒定\\\"，两种情况结论相反"},{wrongThinking:"在 Q 恒定时把 U 当成不变（实际 U=Q/C，C 变则 U 变）",cognitiveRoot:"",correctPath:"电容器动态分析的关键是区分\\\"U 恒定\\\"和\\\"Q 恒定\\\"，两种情况结论相反"}],
  essence: "U 恒 → C 变则 Q 变；Q 恒 → C 变则 U 变。E 的变化看 U/d 还是 Q/S。",
}

export default entry
