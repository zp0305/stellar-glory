// PHY-R79
// 拆分时间: 2026-04-26

const entry = {
  id: "PHY-R79",
  name: "带电粒子在复合场中的螺旋运动",
  model: "PHY-M12",
  thinkingMethod: "",
  level: "T",
  trigger: "带电粒子在匀强电场和磁场叠加区域运动",
  path: [
    "Step1：分解速度：v⊥（垂直 B）分量产生圆周运动，v∥（平行 B）分量做匀速直", "Step2：合成效果：螺旋线运动，螺距 h = v∥·T = v∥πm/(qB)",
    "Step3：若同时有匀强电E：沿 E 方向有加速度 a = qE/m，加v",
    "Step4：周T v 无关，螺h v成正",
  ],
  variationWarning: "",
  errorMap: [{wrongThinking:"把螺旋运动当成圆周运动（漏了 v方向的直线分量）",cognitiveRoot:",",correctPath:"螺旋运动 = 圆周（v⊥）+ 直线（v∥），两者独立叠"},{wrongThinking:"把螺距公式中的周期记错（应为 T = 2πm/(qB)",cognitiveRoot:",",correctPath:"螺旋运动 = 圆周（v⊥）+ 直线（v∥），两者独立叠"},]"",
  essence: "速度分解到垂直和平行 B 的方向，垂直分量管圆周，平行分量管螺距",
}

export default entry
