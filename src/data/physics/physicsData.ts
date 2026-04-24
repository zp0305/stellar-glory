import type { GraphData } from '@/types'

// 物理26个模型完整数据（v1.2附录A）
export const physicsModels = [
  // M01-M04 运动学
  { id: 'PHY-M01', title: '匀变速直线运动', module: '运动学', chapter: '运动的描述', order: 1 },
  { id: 'PHY-M02', title: '自由落体运动', module: '运动学', chapter: '运动的描述', order: 2 },
  { id: 'PHY-M03', title: '竖直上抛运动', module: '运动学', chapter: '运动的描述', order: 3 },
  { id: 'PHY-M04', title: '追及与相遇', module: '运动学', chapter: '运动的描述', order: 4 },
  // M05-M09 力学
  { id: 'PHY-M05', title: '力的合成与分解', module: '力学', chapter: '相互作用', order: 5 },
  { id: 'PHY-M06', title: '牛顿第二定律', module: '力学', chapter: '牛顿运动定律', order: 6 },
  { id: 'PHY-M07', title: '弹簧模型', module: '力学', chapter: '牛顿运动定律', order: 7 },
  { id: 'PHY-M08', title: '板块模型', module: '力学', chapter: '牛顿运动定律', order: 8 },
  { id: 'PHY-M09', title: '传送带模型', module: '力学', chapter: '牛顿运动定律', order: 9 },
  // M10-M12 曲线运动
  { id: 'PHY-M10', title: '曲线运动基础', module: '曲线运动', chapter: '曲线运动', order: 10 },
  { id: 'PHY-M11', title: '平抛运动', module: '曲线运动', chapter: '曲线运动', order: 11 },
  { id: 'PHY-M12', title: '圆周运动', module: '曲线运动', chapter: '曲线运动', order: 12 },
  // M13 万有引力
  { id: 'PHY-M13', title: '天体运动', module: '万有引力', chapter: '万有引力', order: 13 },
  // M14-M16 机械能
  { id: 'PHY-M14', title: '功和功率', module: '机械能', chapter: '机械能守恒', order: 14 },
  { id: 'PHY-M15', title: '动能定理', module: '机械能', chapter: '机械能守恒', order: 15 },
  { id: 'PHY-M16', title: '机械能守恒', module: '机械能', chapter: '机械能守恒', order: 16 },
  // M17-M19 动量
  { id: 'PHY-M17', title: '动量定理', module: '动量', chapter: '动量守恒', order: 17 },
  { id: 'PHY-M18', title: '动量守恒', module: '动量', chapter: '动量守恒', order: 18 },
  { id: 'PHY-M19', title: '碰撞模型', module: '动量', chapter: '动量守恒', order: 19 },
  // M20-M22 电场
  { id: 'PHY-M20', title: '电场强度', module: '电场', chapter: '电场', order: 20 },
  { id: 'PHY-M21', title: '电势与电势能', module: '电场', chapter: '电场', order: 21 },
  { id: 'PHY-M22', title: '电容器', module: '电场', chapter: '电场', order: 22 },
  // M23-M26 电磁
  { id: 'PHY-M23', title: '欧姆定律与电路', module: '电路', chapter: '恒定电流', order: 23 },
  { id: 'PHY-M24', title: '磁场与安培力', module: '磁场', chapter: '磁场', order: 24 },
  { id: 'PHY-M25', title: '洛伦兹力', module: '磁场', chapter: '磁场', order: 25 },
  { id: 'PHY-M26', title: '电磁感应', module: '电磁感应', chapter: '电磁感应', order: 26 },
]

// 前置关系 edges
const prerequisiteEdges: [string, string][] = [
  // 运动学前置
  ['PHY-M01', 'PHY-M02'],
  ['PHY-M01', 'PHY-M03'],
  ['PHY-M01', 'PHY-M04'],
  // 力学前置（M05需要M01的加速度概念）
  ['PHY-M01', 'PHY-M05'],
  ['PHY-M05', 'PHY-M06'],
  ['PHY-M06', 'PHY-M07'],
  ['PHY-M06', 'PHY-M08'],
  ['PHY-M06', 'PHY-M09'],
  // 曲线运动
  ['PHY-M01', 'PHY-M10'],
  ['PHY-M10', 'PHY-M11'],
  ['PHY-M11', 'PHY-M12'],
  // 天体运动
  ['PHY-M06', 'PHY-M13'],
  ['PHY-M11', 'PHY-M13'], // 平抛的分解思想用于天体
  // 机械能
  ['PHY-M01', 'PHY-M14'],
  ['PHY-M06', 'PHY-M15'],
  ['PHY-M15', 'PHY-M16'],
  // 动量
  ['PHY-M06', 'PHY-M17'],
  ['PHY-M17', 'PHY-M18'],
  ['PHY-M18', 'PHY-M19'],
  // 电场
  ['PHY-M05', 'PHY-M20'], // 力的合成用于电场力
  ['PHY-M20', 'PHY-M21'],
  ['PHY-M21', 'PHY-M22'],
  // 电路与磁场
  ['PHY-M01', 'PHY-M23'],
  ['PHY-M20', 'PHY-M24'],
  ['PHY-M24', 'PHY-M25'],
  ['PHY-M24', 'PHY-M26'],
  ['PHY-M25', 'PHY-M26'],
]

// 生成认知图谱完整数据
export function generatePhysicsGraphData(): GraphData {
  const nodes = [
    // 模块节点
    { id: 'M-运动学', label: '🏃 运动学', type: 'module' as const, status: undefined, difficulty: 1 },
    { id: 'M-力学', label: '⚙️ 力学', type: 'module' as const, status: undefined, difficulty: 1 },
    { id: 'M-曲线运动', label: '🌀 曲线运动', type: 'module' as const, status: undefined, difficulty: 1 },
    { id: 'M-万有引力', label: '🌍 万有引力', type: 'module' as const, status: undefined, difficulty: 2 },
    { id: 'M-机械能', label: '⚡ 机械能', type: 'module' as const, status: undefined, difficulty: 2 },
    { id: 'M-动量', label: '💥 动量', type: 'module' as const, status: undefined, difficulty: 2 },
    { id: 'M-电场', label: '⚡ 电场', type: 'module' as const, status: undefined, difficulty: 2 },
    { id: 'M-磁场', label: '🧲 磁场', type: 'module' as const, status: undefined, difficulty: 3 },
    { id: 'M-电磁感应', label: '🔌 电磁感应', type: 'module' as const, status: undefined, difficulty: 3 },
    // 模型节点（26个）
    ...physicsModels.map((m) => ({
      id: m.id,
      label: m.title,
      type: 'knowledge' as const,
      status: undefined as 'undone' | 'learning' | 'mastered' | undefined,
      difficulty: m.order <= 4 ? 1 : m.order <= 16 ? 2 : 3,
      knowledgeId: m.id,
    })),
  ]

  const edges = [
    // 模块→模型 包含关系
    ...physicsModels.map((m) => ({
      source: `M-${m.module}`,
      target: m.id,
      type: '包含' as const,
    })),
    // 前置关系
    ...prerequisiteEdges.map(([source, target]) => ({
      source,
      target,
      type: 'prerequisite' as const,
    })),
  ]

  return { nodes: nodes as GraphData['nodes'], edges: edges as GraphData['edges'] }
}

// 物理视界故事数据
export const physicsVisionStories = [
  { id: 'origin-001', title: '伽利略的斜面实验', category: '溯源', difficulty: '🟢', readTime: 8 },
  { id: 'origin-002', title: '牛顿与苹果：万有引力的发现', category: '溯源', difficulty: '🟢', readTime: 10 },
  { id: 'stars-001', title: '法拉第：从书页装订工到电磁之父', category: '群星', difficulty: '🟢', readTime: 12 },
  { id: 'stars-002', title: '爱因斯坦与相对论的故事', category: '群星', difficulty: '🟡', readTime: 15 },
  { id: 'everyday-001', title: '充电宝的电量是怎么算出来的？', category: '趣玩', difficulty: '🟢', readTime: 8 },
  { id: 'everyday-002', title: '电梯里为什么手机信号不好？', category: '趣玩', difficulty: '🟢', readTime: 10 },
  { id: 'laboratory-001', title: '吴健雄：用实验验证弱相互作用中宇称不守恒', category: '察微', difficulty: '🟡', readTime: 14 },
  { id: 'frontier-001', title: '暗物质：宇宙中85%的存在', category: '前沿', difficulty: '🔴', readTime: 18 },
  { id: 'frontier-002', title: '量子隧穿：穿墙而过的奇迹', category: '前沿', difficulty: '🔴', readTime: 15 },
  { id: 'revolution-001', title: '相对论革命：从牛顿到爱因斯坦', category: '思辨', difficulty: '🟡', readTime: 16 },
  { id: 'myth-001', title: '越用力推，物体会不会越快？', category: '迷思', difficulty: '🟡', readTime: 10 },
  { id: 'mystery-001', title: '薛定谔的猫：量子叠加态的思维实验', category: '谜题', difficulty: '🟡', readTime: 12 },
  { id: 'future-001', title: '核聚变：人造太阳还有多远？', category: '幻想', difficulty: '🟡', readTime: 15 },
]
