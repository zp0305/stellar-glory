// PHY-R34
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R34",
  name: "速度增量法解人船模型",
  model: "PHY-M09",
  thinkingMethod: "",
  level: "J",
  trigger: "人船模型（人在船上走，船反向运动），求船位移或人位移",
  path: [
    "Step1：建立动量守恒方程，注意方向：m·v人 + M·v船 = 0",
    "Step2：两边乘 dt 并积分：m·Δx人 - M·Δx船 = 0（因为位移方向相反）",
    "Step3：利用几何关系：Δx人 + Δx船 = L（L为船长，相对不变）",
    "Step4：联立解出 Δx船 = m·L/(m+M)，方向与人运动方向相反",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把 Δx人 + Δx船 = L 写成等号方向搞反（两人位移方向相反，不是相加）",cognitiveRoot:"",correctPath:"人船模型的核心是\\\"系统质心不变\\\"（无外力），所有位移都是相对地面的"},{wrongThinking:"把人的位移当成相对船的位移（实际是相对地面）",cognitiveRoot:"",correctPath:"人船模型的核心是\\\"系统质心不变\\\"（无外力），所有位移都是相对地面的"}],
  essence: "动量守恒 + 几何约束 = 位移关系。质心不动是结果的物理本质。",
}

export default entry
