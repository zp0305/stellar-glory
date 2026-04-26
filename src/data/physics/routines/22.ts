// PHY-R22
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R22",
  name: "卫星变轨对接分析",
  model: "PHY-M06",
  thinkingMethod: "",
  level: "T",
  trigger: "卫星从低轨道变到高轨道，或椭圆轨道与圆轨道对接",
  path: [
    "Step1：加速变轨：从低轨加速到椭圆转移轨道（离心趋势增大）",
    "Step2：椭圆轨道用开普勒第二定律（面积速度恒定）",
    "Step3：在目标圆轨道远（近）地点再次加速/减速",
    "Step4：比较能量：椭圆轨道能量介于两圆之间，E₁<E<E₂",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"认为变轨只需要一次加速（实际需要两次：入轨和变轨点）",cognitiveRoot:"",correctPath:"高轨道环绕速度更低，加速变高轨后瞬时速度下降是正常的"},{wrongThinking:"混淆加速后速度反而变小的现象（高轨道环绕速度更低）",cognitiveRoot:"",correctPath:"高轨道环绕速度更低，加速变高轨后瞬时速度下降是正常的"}],
  essence: "加速→进入更大轨道→速度反而降低。变轨是椭圆过渡，需要两次点火。",
}

export default entry
