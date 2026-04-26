// PHY-R30
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R30",
  name: "摩擦生热计算",
  model: "PHY-M08",
  thinkingMethod: "",
  level: "J",
  trigger: "有摩擦力做功的问题，需要区分\"摩擦力对物体做的功\"和\"摩擦生热\"",
  path: [
    "Step1：摩擦力对物体做的功：W = f·l（l 是物体相对地面的位移）",
    "Step2：摩擦生热：Q = f·l相（l相 是两接触面相对滑动的距离）",
    "Step3：注意区分：传送带上物体和传送带共同运动时 l相=0，Q=0",
    "Step4：系统能量损失 = 生热量（除转化为其他形式能量外）",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把物体位移当成了相对位移，导致生热计算错误",cognitiveRoot:"",correctPath:"功和热的公式都有 f·l，但 l 的含义完全不同：一个是地面参考系，一个是接触面参考系"},{wrongThinking:"在连接体中，把内力摩擦生热当成系统外力做功处理",cognitiveRoot:"",correctPath:"功和热的公式都有 f·l，但 l 的含义完全不同：一个是地面参考系，一个是接触面参考系"}],
  essence: "W 用地面位移，Q 用相对位移。两者不等是能量损耗的来源。",
}

export default entry
