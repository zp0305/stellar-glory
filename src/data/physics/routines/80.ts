// PHY-R80
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R80",
  name: "电容器的动态电容变化",
  model: "PHY-M10",
  thinkingMethod: "",
  level: "J",
  trigger: "电容器电路中，改变电容值，分析各物理量的连锁变化",
  path: [
    "Step1：先判断电路状态：电容器是否与电源直接相连",
    "Step2：U 恒定（C 变→Q 变）时：C = εS/(4πkd) → d↑→C↓→Q↓",
    "Step3：Q 恒定（C 变→U 变）时：U = Q/C → C↓→U↑",
    "Step4：连锁分析：每次改变后重新检查平衡条件（电容器开路时 Q 不变）",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"在 Q 恒定时，误以为 U 也保持不变",cognitiveRoot:"",correctPath:"电容器动态分析的核心是\\\"谁不变\\\"：连电源 U 不变，断开后 Q 不变"},{wrongThinking:"把电容器\\\"充电后断开\\\"和\\\"始终连接电源\\\"两种情况混淆",cognitiveRoot:"",correctPath:"电容器动态分析的核心是\\\"谁不变\\\"：连电源 U 不变，断开后 Q 不变"}],
  essence: "连电源 U 不变，断开后 Q 不变。先判断条件，再列关系式。",
}

export default entry
