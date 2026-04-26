// PHY-R02
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R02",
  name: "v-t 图像面积法",
  model: "PHY-M01",
  thinkingMethod: "",
  level: "B",
  trigger: "看到 v-t 图像，求位移或比较两物体运动关系",
  path: [
    "Step1：识别 v-t 图线形状（直线/折线/曲线）",
    "Step2：位移 = 图线与 t 轴围成的面积（上方为正，下方为负）",
    "Step3：计算面积时注意拆分成三角形、矩形、梯形的组合",
    "Step4：用面积关系列方程，注意面积正负相抵",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把面积当成了 v·t 的乘积而不是积分，矩形当梯形算",cognitiveRoot:"",correctPath:"面积法把积分运算变成几何运算，关键是\\\"图线包围的区域\\\"意识"},{wrongThinking:"忽略图线下方面积为负，与上方正面积相减",cognitiveRoot:"",correctPath:"面积法把积分运算变成几何运算，关键是\\\"图线包围的区域\\\"意识"}],
  essence: "v-t 图像的面积 = 位移，几何运算代替微分积分。",
}

export default entry
