// PHY-R51
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R51",
  name: "安培力方向与大小",
  model: "PHY-M12",
  thinkingMethod: "",
  level: "B",
  trigger: "通电导线在磁场中受安培力，求力的大小或方向",
  path: [
    "Step1：方向：左手定则——磁感线穿手心，四指指向电流方向，大拇指为受力方向",
    "Step2：大小：F = BIL·sinθ（θ 为 B 与 I 的夹角）",
    "Step3：若 B 与 I 垂直 → F = BIL（最大）；平行 → F = 0",
    "Step4：若导线在斜面上，注意分解安培力到水平和垂直方向",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把左手定则和右手定则搞混（安培力是左手，电磁感应是右手）",cognitiveRoot:"",correctPath:"左手定则判断力方向：磁场穿掌心，电流穿四指，大拇指指受力"},{wrongThinking:"在求力大小时，误把导线长度当成有效长度（实际是投影到垂直于 B 的方向）",cognitiveRoot:"",correctPath:"左手定则判断力方向：磁场穿掌心，电流穿四指，大拇指指受力"}],
  essence: "左手定则定方向，F=BIL sinθ 定大小，有效长度是垂直于 B 的投影。",
}

export default entry
