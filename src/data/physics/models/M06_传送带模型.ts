// M06 传送带模型
export const M06 = {
  id: "PHY-M06",
  title: "传送带模型",
  module: "力学",
  chapter: "牛顿运动定律",
  difficulty: 2,
  subtitle: "摩擦力方向随相对速度变化",
  description: "传送带上物体的运动分析，摩擦力方向在共速瞬间突变。",

  positioning: {
    core: "传送带的核心是摩擦力方向随v物和v带的关系而变化。",
    essence: "v物<v带->摩擦力向前(物体加速); v物>v带->摩擦力向后(物体减速); 共速->摩擦力消失。",
    keyInsight: "传送带问题要分阶段分析，每阶段共速后重新判断摩擦力方向。",
  },

  principle: "判断流程: 第一步: 比较v物和v带速度; 第二步: 物体做匀变速 v物=v0+-at (a=ug); 第三步: 找到共速时刻 v物(t)=v带时 a->0. 水平传送带加速度公式 a=ug * sign(v带-v物)",

  variations: {
    basic: [
      { label: "水平传送带(v物<v带)", formula: "物体从0加速到v带，摩擦力向前", note: "注意共速后摩擦力消失" },
      { label: "水平传送带(v物>v带)", formula: "物体减速到v带，摩擦力向后", note: "可能停在传送带上" },
    ],
    advanced: [
      { label: "倾斜传送带", formula: "沿斜面分解重力，判断摩擦力和重力分量合力的方向", note: "小心支持力的计算" },
      { label: "多段传送带", formula: "每段独立分析，衔接条件是速度连续", note: "复杂过程分段处理" },
    ],
    challenge: [
      { label: "反向传送带", formula: "物体被传送带向后带，摩擦力方向分两段变化", note: "分析最复杂的一种情况" },
    ],
  },

  knowledgeNetwork: {
    parents: ["PHY-M06"],
    children: ["PHY-M07", "PHY-M08"],
    related: ["PHY-M05"],
    coreFormula: "v物<v带->向前加速，v物>v带->向后减速，共速时摩擦消失",
  },

  methodology: {
    approach: "三步走: 1.判断初始摩擦力方向 -> 2.列牛二 -> 3.找共速时刻 -> 4.新阶段重新分析",
    decisionTree: [
      "v物<v带? -> 摩擦力向前(加速) -> 追踪v物(t)",
      "v物>v带? -> 摩擦力向后(减速) -> 追踪v物(t)",
      "v物=v带? -> 摩擦力=0",
      "v物(t)=v带? -> 共速，之后匀速",
    ],
    commonPitfalls: [
      "忘记摩擦力方向可能变化--以为物体一直受固定方向的摩擦力",
      "共速后没有重新分析--以为一直加速/减速",
      "计算共速时间时方程列错--v0+at=v带",
    ],
  },

  selfCheck: {
    questions: [
      { q: "传送带速度2m/s，物块从静止放上，求达到传送带速度的时间", a: "v=at -> t=2/ug", type: "基础" },
      { q: "v物=5m/s，v带=3m/s，物体能追上传送带速度吗?", a: "能，减速到3m/s后匀速", type: "进阶" },
    ],
    confidenceLevel: 3,
  },

  lifeApplication: "工厂生产线的传送带是传送带模型的典型应用。物品在传送带上从静止被加速到与传送带同速。物品与传送带之间的动摩擦系数u决定加速度。表面有油或水时，u减小，物品可能滑落。",
}
