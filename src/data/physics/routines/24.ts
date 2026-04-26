// PHY-R24
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R24",
  name: "三颗星模型",
  model: "PHY-M06",
  thinkingMethod: "",
  level: "T",
  trigger: "三颗星构成的系统（直线排列或等边三角形），求运动特征或周期",
  path: [
    "Step1：先判断对称性结构：直线排列（中间星受力对称），等边三角形（受力全等）",
    "Step2：直线型：对中间星 F合=0，列两边引力等大反向方程",
    "Step3：等边型：每颗星受另外两颗等大引力的合力指向几何中心",
    "Step4：列牛顿第二定律，用几何关系求合力方向和大小",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把三颗星当成简单叠加，没考虑矢量合成的方向",cognitiveRoot:"",correctPath:"三颗星问题的核心是受力分析的对称性，利用对称性简化矢量计算"},{wrongThinking:"等边三角形中误以为合力为零（实际上合力指向中心，非零）",cognitiveRoot:"",correctPath:"三颗星问题的核心是受力分析的对称性，利用对称性简化矢量计算"}],
  essence: "对称性决定合力方向，利用几何关系把多力合成变成简单角度问题。",
}

export default entry
