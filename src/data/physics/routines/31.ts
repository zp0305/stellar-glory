// PHY-R31
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R31",
  name: "子弹打木块模型",
  model: "PHY-M08",
  thinkingMethod: "",
  level: "J",
  trigger: "子弹射入木块，求共同速度、热量、相对位移",
  path: [
    "Step1：判断是否共速（完全非弹性碰撞），若是 → 用动量守恒求共同速度",
    "Step2：列动量守恒：m·v₀ = (m+M)·v共",
    "Step3：求热量 Q = ΔEk（初动能 - 末动能）",
    "Step4：求相对位移 Δx = v₀·t - v共·t，用能量角度 Q = f·Δx 验证",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把子弹的初动能当成系统总动能（忘了加上木块的初始动能）",cognitiveRoot:"",correctPath:"子弹打木块的核心：动量守恒（过程），能量不守恒（损耗成热）"},{wrongThinking:"混淆\\\"木块位移\\\"和\\\"相对位移\\\"，导致生热量计算错",cognitiveRoot:"",correctPath:"子弹打木块的核心：动量守恒（过程），能量不守恒（损耗成热）"}],
  essence: "动量守恒定 v共，能量损耗算 Q，摩擦力乘相对位移得热量。",
}

export default entry
