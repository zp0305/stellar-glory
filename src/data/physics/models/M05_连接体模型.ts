// M05 连接体模型
export const M05 = {
  id: "PHY-M05",
  title: "连接体模型",
  module: "力学",
  chapter: "相互作用",
  difficulty: 2,
  subtitle: "整体法与隔离法",
  description: "多个物体通过绳子、杆、弹簧等连接的系统的受力与运动分析。",

  positioning: {
    core: "连接体系统的内力需要隔离法分析，外力和加速度用整体法。",
    essence: "系统内各物体加速度相同（刚性连接）时，整体法求a，隔离法求内力。",
    keyInsight: "先整体后隔离，是解连接体问题的标准流程。",
  },

  principle: "核心公式: 速度-时间关系 v=v0+at, 位移-时间关系 x=v0t+1/2at^2, 速度-位移关系 v^2-v0^2=2ax. 连接体分析流程: 第一步判断加速度 (系统内各物体加速度相同用整体法，否则必须分别隔离); 第二步整体法求系统加速度 a=F合/(m1+m2); 第三步隔离法求系统内力 T=m1*a",

  variations: {
    basic: [
      { label: "同向连接", formula: "a=F/(m1+m2), T=m2*a", note: "两个物体向同一方向运动" },
      { label: "反向连接", formula: "a=F/(m1+m2), T=m1*a", note: "两个物体运动方向相反" },
      { label: "竖直连接", formula: "a=(mg-F)/(m1+m2)", note: "注意拉力或压力方向" },
    ],
    advanced: [
      { label: "斜面连接体", formula: "沿斜面建坐标，分解重力", note: "先正交分解再整体隔离" },
      { label: "连接体+摩擦", formula: "先判断是否相对滑动", note: "比较最大静摩擦和m*a" },
    ],
    challenge: [
      { label: "多物体连接", formula: "多次隔离，依次求解", note: "从加速度最小的物体开始隔离" },
    ],
  },

  knowledgeNetwork: {
    parents: ["PHY-M01"],
    children: ["PHY-M06", "PHY-M07", "PHY-M08", "PHY-M09"],
    related: [],
    coreFormula: "a=F合/(m1+m2)",
  },

  methodology: {
    approach: "标准流程: 先整体法求a，再隔离其中一个物体求内力。",
    decisionTree: [
      "问加速度? -> 整体法",
      "问绳子拉力T? -> 先整体求a，再隔离",
      "问相互作用力? -> 隔离法",
      "加速度不同? -> 必须隔离法分别分析",
    ],
    commonPitfalls: [
      "整体法把内力(绳子拉力)算进去了--内力不能出现在整体法方程中",
      "隔离时选错研究对象--优先选受力最少的那个",
      "多物体时把加速度方向弄反--先确定正方向",
    ],
  },

  selfCheck: {
    questions: [
      { q: "两物体m1=2kg, m2=3kg，在F=10N水平拉力下加速，求a和T", a: "a=2m/s2, T=6N", type: "基础" },
      { q: "斜面M在上m在下，求系统加速度和绳拉力", a: "a=(M-mgsin)g/(M+m)", type: "进阶" },
    ],
    confidenceLevel: 3,
  },

  lifeApplication: "拔河是典型的连接体问题。两人通过绳子连接，脚与地面之间的摩擦力是外力。关键: 哪方摩擦力更大，哪方就能赢。人的重力越大，对地压力越大，最大静摩擦越大，质量大惯性大不容易被拉走。",
}
