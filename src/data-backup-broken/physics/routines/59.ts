// PHY-R59
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R59",
  name: "LC 振荡电路分析",
  model: "PHY-M13",
  thinkingMethod: "",
  level: "J",
  trigger: "LC 振荡电路中电容器和电感线圈的电量、电流、能量变",
  path: [
    "Step1：判断初始时刻：电容器充电完毕？放电开始？", "Step2：写能量守恒：E电场 + E磁场 = E总（总能量恒定）",
    "Step3：当电场能为零时（电容器放电完毕），磁场能最电流最", "Step4：周T = 2πLC)，频f = 1/T，与振幅无关",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"LC 振荡的周期记T = 2πL/C)（根号内写反了）",cognitiveRoot:",",correctPath:"电场能最大时磁场能为零，磁场能最大时电场能为零，两者交替转"},{wrongThinking:"认为电场能为零时电路中没有电流（实际上电流最大）",cognitiveRoot:",",correctPath:"电场能最大时磁场能为零，磁场能最大时电场能为零，两者交替转"},],
  essence: "电场磁场能，周期L C 决定，与振幅和初始条件无关",
}

export default entry
