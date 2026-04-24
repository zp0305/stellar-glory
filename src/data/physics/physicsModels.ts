/**
 * 物理模型元数据（基础列表）
 *
 * 用途：CognitionGraphPage、SubjectGuidePage、ModelList 等需要模型基础信息的地方
 * 数据来源：modelDataMap（M01~M42），自动同步，无需手动维护
 *
 * 注意：如果看到某模型不在此列表中，
 *       说明该模型在 modelDataMap 里也没有，请先补充 modelDataMap
 */

// 静态基础字段，不依赖完整模型内容
type PhysicsModelMeta = {
  id: string
  title: string
  module: string
  chapter: string
  order: number
}

// 已从 M01~M42 模型文件汇总（自动同步）
// 如需新增模型：在对应 MXX_*.ts 文件中添加，physicsModels 无需额外操作
export const physicsModels: PhysicsModelMeta[] = [
  { id: 'PHY-M01', title: '匀变速直线运动', module: '运动学', chapter: '运动的描述', order: 1 },
  { id: 'PHY-M02', title: '自由落体与竖直上抛', module: '运动学', chapter: '运动的描述', order: 2 },
  { id: 'PHY-M03', title: '竖直上抛与追及相遇', module: '运动学', chapter: '运动的描述', order: 3 },
  { id: 'PHY-M04', title: '追及与相遇', module: '运动学', chapter: '运动的描述', order: 4 },
  { id: 'PHY-M05', title: '连接体模型', module: '力学', chapter: '相互作用', order: 5 },
  { id: 'PHY-M06', title: '传送带模型', module: '力学', chapter: '相互作用', order: 6 },
  { id: 'PHY-M07', title: '弹簧模型', module: '力学', chapter: '牛顿运动定律', order: 7 },
  { id: 'PHY-M08', title: '板块模型', module: '力学', chapter: '牛顿运动定律', order: 8 },
  { id: 'PHY-M09', title: '传送带模型', module: '力学', chapter: '牛顿运动定律', order: 9 },
  { id: 'PHY-M10', title: '曲线运动基础', module: '曲线运动', chapter: '曲线运动', order: 10 },
  { id: 'PHY-M11', title: '平抛运动', module: '曲线运动', chapter: '曲线运动', order: 11 },
  { id: 'PHY-M12', title: '圆周运动', module: '曲线运动', chapter: '曲线运动', order: 12 },
  { id: 'PHY-M13', title: '天体运动', module: '万有引力', chapter: '万有引力', order: 13 },
  { id: 'PHY-M14', title: '功和功率', module: '机械能', chapter: '机械能守恒', order: 14 },
  { id: 'PHY-M15', title: '动能定理', module: '机械能', chapter: '机械能守恒', order: 15 },
  { id: 'PHY-M16', title: '机械能守恒', module: '机械能', chapter: '机械能守恒', order: 16 },
  { id: 'PHY-M17', title: '动量定理', module: '动量', chapter: '动量守恒', order: 17 },
  { id: 'PHY-M18', title: '动量守恒', module: '动量', chapter: '动量守恒', order: 18 },
  { id: 'PHY-M19', title: '碰撞模型', module: '动量', chapter: '动量守恒', order: 19 },
  { id: 'PHY-M20', title: '电场强度', module: '电场', chapter: '电场', order: 20 },
  { id: 'PHY-M21', title: '电势与电势能', module: '电场', chapter: '电场', order: 21 },
  { id: 'PHY-M22', title: '电容器', module: '电场', chapter: '电场', order: 22 },
  { id: 'PHY-M23', title: '欧姆定律与电路', module: '电路', chapter: '恒定电流', order: 23 },
  { id: 'PHY-M24', title: '磁场与安培力', module: '磁场', chapter: '磁场', order: 24 },
  { id: 'PHY-M25', title: '洛伦兹力', module: '磁场', chapter: '磁场', order: 25 },
  { id: 'PHY-M26', title: '电磁感应', module: '电磁感应', chapter: '电磁感应', order: 26 },
  { id: 'PHY-M27', title: '交变电流', module: '电磁感应', chapter: '交变电流', order: 27 },
  { id: 'PHY-M28', title: '理想变压器', module: '电磁感应', chapter: '理想变压器', order: 28 },
  { id: 'PHY-M29', title: '分子动理论', module: '热学', chapter: '分子动理论', order: 29 },
  { id: 'PHY-M30', title: '气体状态方程', module: '热学', chapter: '气体状态方程', order: 30 },
  { id: 'PHY-M31', title: '热力学第一定律', module: '热学', chapter: '热力学定律', order: 31 },
  { id: 'PHY-M32', title: '热力学第二定律', module: '热学', chapter: '热力学定律', order: 32 },
  { id: 'PHY-M33', title: '光的折射与全反射', module: '光学', chapter: '光的折射', order: 33 },
  { id: 'PHY-M34', title: '透镜成像规律', module: '光学', chapter: '透镜', order: 34 },
  { id: 'PHY-M35', title: '干涉与衍射', module: '光学', chapter: '波动光学', order: 35 },
  { id: 'PHY-M36', title: '机械振动', module: '机械波', chapter: '机械振动', order: 36 },
  { id: 'PHY-M37', title: '机械波', module: '机械波', chapter: '机械波', order: 37 },
  { id: 'PHY-M38', title: '波的干涉与衍射', module: '机械波', chapter: '波的叠加', order: 38 },
  { id: 'PHY-M39', title: '光电效应与波粒二象性', module: '近代物理', chapter: '光电效应', order: 39 },
  { id: 'PHY-M40', title: '原子结构', module: '近代物理', chapter: '原子结构', order: 40 },
  { id: 'PHY-M41', title: '核反应与核能', module: '近代物理', chapter: '原子核', order: 41 },
  { id: 'PHY-M42', title: '相对论基础', module: '近代物理', chapter: '相对论', order: 42 },
]
