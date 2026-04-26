// PHY-R59
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R59",
  name: "LC 振荡电路分析",
  model: "PHY-M13",
  thinkingMethod: "",
  level: "J",
  trigger: "LC 振荡电路中电容器和电感线圈的电量、电流、能量变化",
  path: [
    "Step1：判断初始时刻：电容器充电完毕？放电开始？",
    "Step2：写能量守恒：E电场 + E磁场 = E总（总能量恒定）",
    "Step3：当电场能为零时（电容器放电完毕），磁场能最大 → 电流最大",
    "Step4：周期 T = 2π√(LC)，频率 f = 1/T，与振幅无关",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把 LC 振荡的周期记成 T = 2π√(L/C)（根号内写反了）",cognitiveRoot:"",correctPath:"电场能最大时磁场能为零，磁场能最大时电场能为零，两者交替转化"},{wrongThinking:"认为电场能为零时电路中没有电流（实际上电流最大）",cognitiveRoot:"",correctPath:"电场能最大时磁场能为零，磁场能最大时电场能为零，两者交替转化"}],
  essence: "电场能 ⇄ 磁场能，周期由 L 和 C 决定，与振幅和初始条件无关。",
}

export default entry
