/**
 * 学习路径数据
 * 为不同目标（高考/强基/竞赛）设计的阶段性学习路线图
 */

// 学科前缀映射
export const SUBJECT_PREFIX = {
  physics: 'PHY',
  chemistry: 'CHE',
  mathematics: 'MAT',
  biology: 'BIO',
  chinese: 'CHIN',
  english: 'ENG',
} as const

export type SubjectKey = keyof typeof SUBJECT_PREFIX

// 路径阶段
export interface PathPhase {
  id: string
  title: string
  subtitle: string
  duration: string // 如 "高一下学期"
  description: string
  milestones: PathMilestone[]
  // 该阶段重点学科
  focusSubjects: SubjectKey[]
  // 该阶段需要掌握的模型ID列表（供后续关联）
  requiredModels?: string[]
}

export interface PathMilestone {
  id: string
  title: string
  description: string
  completed: boolean // 当前进度（演示用）
  tasks: string[]
  // 关联的模型/套路（用于跳转）
  relatedModels?: string[]
  relatedRoutines?: string[]
}

// 一条完整路径
export interface LearningPath {
  id: string
  title: string
  subtitle: string
  description: string
  icon: string // Lucide 图标名
  color: string // Tailwind 颜色类
  targetAudience: string // 适合人群
  duration: string // 总时长
  phases: PathPhase[]
}

// ===== 三条主线 =====

// 1. 高考路线
export const gaokaoPath: LearningPath = {
  id: 'gaokao',
  title: '高考冲刺路线',
  subtitle: '稳扎稳打，冲刺理想大学',
  description:
    '以高考大纲为纲，按照知识点内在联系组织学习，循序渐进，确保每个模块都扎实掌握。适合目标为一本及以上高校的学生。',
  icon: 'GraduationCap',
  color: 'blue',
  targetAudience: '目标一本及以上，对高考有清晰规划的学生',
  duration: '高中三年',
  phases: [
    {
      id: 'gk-p1',
      title: '基础奠基',
      subtitle: '高一开始',
      duration: '高一全年',
      description: '建立学科框架，掌握基础概念和核心模型。',
      focusSubjects: ['physics', 'chemistry', 'mathematics'],
      requiredModels: ['PHY-M01', 'PHY-M02', 'PHY-M03'],
      milestones: [
        {
          id: 'gk-p1-m1',
          title: '运动学入门',
          description: '掌握匀速运动、匀变速运动的基本公式',
          completed: false,
          tasks: [
            '理解位移、速度、加速度的定义',
            '掌握匀变速直线运动的三个基本公式',
            '能够处理追及相遇问题',
          ],
          relatedModels: ['PHY-M01', 'PHY-M02'],
          relatedRoutines: ['PHY-R01'],
        },
        {
          id: 'gk-p1-m2',
          title: '力学基础',
          description: '力的合成与分解，共点力平衡',
          completed: false,
          tasks: [
            '掌握重力、弹力、摩擦力的分析',
            '学会力的合成与分解（平行四边形法则）',
            '处理共点力平衡问题',
          ],
          relatedModels: ['PHY-M04', 'PHY-M05'],
        },
        {
          id: 'gk-p1-m3',
          title: '牛顿定律',
          description: '理解运动和力的关系',
          completed: false,
          tasks: [
            '掌握牛顿三定律',
            '能够对物体进行受力分析',
            '处理连接体问题',
          ],
          relatedModels: ['PHY-M06', 'PHY-M07'],
        },
      ],
    },
    {
      id: 'gk-p2',
      title: '能力提升',
      subtitle: '高二全年',
      duration: '高二全年',
      description: '深化理解，综合运用，提升解题能力。',
      focusSubjects: ['physics', 'chemistry', 'mathematics'],
      milestones: [
        {
          id: 'gk-p2-m1',
          title: '曲线运动',
          description: '平抛运动、圆周运动的规律',
          completed: false,
          tasks: [
            '掌握平抛运动的两方向分解',
            '理解向心力来源，能处理圆周运动问题',
            '掌握万有引力定律的应用',
          ],
          relatedModels: ['PHY-M09', 'PHY-M10', 'PHY-M11'],
        },
        {
          id: 'gk-p2-m2',
          title: '能量与动量',
          description: '机械能守恒、动量守恒的综合应用',
          completed: false,
          tasks: [
            '理解功和能的关系',
            '掌握机械能守恒定律',
            '理解动量定理和动量守恒',
          ],
          relatedModels: ['PHY-M12', 'PHY-M13', 'PHY-M14'],
        },
        {
          id: 'gk-p2-m3',
          title: '电场与电路',
          description: '电场力的性质、能量性质',
          completed: false,
          tasks: [
            '理解电场强度的概念',
            '掌握带电粒子在电场中的运动',
            '理解电容和电路分析',
          ],
          relatedModels: ['PHY-M17', 'PHY-M18'],
        },
      ],
    },
    {
      id: 'gk-p3',
      title: '综合冲刺',
      subtitle: '高三全年',
      duration: '高三全年',
      description: '综合复习，查漏补缺，实战演练。',
      focusSubjects: ['physics', 'chemistry', 'mathematics', 'biology'],
      milestones: [
        {
          id: 'gk-p3-m1',
          title: '一轮复习',
          description: '按模块系统梳理知识点',
          completed: false,
          tasks: [
            '力学综合（运动+力+能量）',
            '电磁学综合（电场+磁场+电路）',
            '实验专题复习',
          ],
        },
        {
          id: 'gk-p3-m2',
          title: '二轮专题',
          description: '跨模块综合题训练',
          completed: false,
          tasks: [
            '传送带模型专题',
            '板块模型专题',
            '电磁感应综合专题',
          ],
        },
        {
          id: 'gk-p3-m3',
          title: '模拟冲刺',
          description: '真题演练，时间管理',
          completed: false,
          tasks: [
            '近五年高考真题限时训练',
            '查漏补缺，针对性强化',
            '考试技巧和时间分配训练',
          ],
        },
      ],
    },
  ],
}

// 2. 强基计划路线
export const foundationPath: LearningPath = {
  id: 'foundation',
  title: '强基计划路线',
  subtitle: '弯道超车，冲刺顶尖名校',
  description:
    '在高考基础上适当拓展，提前接触竞赛内容，培养学科思维和创新能力。适合目标为清北复交等顶尖高校的学生。',
  icon: 'Rocket',
  color: 'purple',
  targetAudience: '目标清北复交，有学科竞赛兴趣或基础的学生',
  duration: '高中三年',
  phases: [
    {
      id: 'fb-p1',
      title: '竞赛入门',
      subtitle: '高一开始',
      duration: '高一全年',
      description: '接触竞赛思维，打牢学科基础。',
      focusSubjects: ['physics', 'chemistry', 'mathematics'],
      milestones: [
        {
          id: 'fb-p1-m1',
          title: '竞赛思维启蒙',
          description: '了解竞赛题型特点，建立竞赛意识',
          completed: false,
          tasks: [
            '研读竞赛大纲，了解考查范围',
            '完成入门级竞赛题，感受难度梯度',
            '参加校内竞赛培训班',
          ],
        },
        {
          id: 'fb-p1-m2',
          title: '高中内容超前学习',
          description: '在老师指导下超前学习部分内容',
          completed: false,
          tasks: [
            '高一完成高二物理内容学习',
            '同步学习竞赛一试内容',
            '建立完整的知识框架',
          ],
        },
        {
          id: 'fb-p1-m3',
          title: '竞赛一试入门',
          description: '接触竞赛一试题型',
          completed: false,
          tasks: [
            '完成物理竞赛一试历年真题',
            '整理竞赛常见题型和解法',
            '参加省级预赛',
          ],
        },
      ],
    },
    {
      id: 'fb-p2',
      title: '竞赛进阶',
      subtitle: '高二全年',
      duration: '高二全年',
      description: '系统学习竞赛内容，冲刺省级一等奖。',
      focusSubjects: ['physics', 'chemistry', 'mathematics'],
      milestones: [
        {
          id: 'fb-p2-m1',
          title: '竞赛二试内容学习',
          description: '系统学习竞赛二试知识点',
          completed: false,
          tasks: [
            '深入学习力学、电磁学高级内容',
            '学习竞赛特有方法（微元法、对称法等）',
            '完成专项题型训练',
          ],
        },
        {
          id: 'fb-p2-m2',
          title: '模拟训练',
          description: '大量真题演练，提升解题速度',
          completed: false,
          tasks: [
            '完成近十年复赛真题',
            '参加省级模拟竞赛',
            '分析错题，总结规律',
          ],
        },
        {
          id: 'fb-p2-m3',
          title: '冲击省一',
          description: '针对性训练，冲刺省级一等奖',
          completed: false,
          tasks: [
            '重点突破薄弱模块',
            '提升解题技巧和时间管理',
            '参加省级物理竞赛复赛',
          ],
        },
      ],
    },
    {
      id: 'fb-p3',
      title: '强基备考',
      subtitle: '高三全年',
      duration: '高三全年',
      description: '准备校测笔试和面试，双线作战。',
      focusSubjects: ['physics', 'chemistry', 'mathematics'],
      milestones: [
        {
          id: 'fb-p3-m1',
          title: '校测笔试准备',
          description: '针对目标高校准备校测内容',
          completed: false,
          tasks: [
            '研究目标高校历年校测真题',
            '竞赛内容与高考内容融合训练',
            '限时模拟训练',
          ],
        },
        {
          id: 'fb-p3-m2',
          title: '面试准备',
          description: '准备强基面试，展示学科素养',
          completed: false,
          tasks: [
            '准备自我介绍和学科兴趣陈述',
            '练习开放性问题回答',
            '模拟面试场景',
          ],
        },
        {
          id: 'fb-p3-m3',
          title: '心理调适',
          description: '保持状态，从容应考',
          completed: false,
          tasks: [
            '调整作息，保持良好状态',
            '查漏补缺，不追求难题',
            '做好高考和强基的双重准备',
          ],
        },
      ],
    },
  ],
}

// 3. 竞赛路线
export const competitionPath: LearningPath = {
  id: 'competition',
  title: '竞赛金牌路线',
  subtitle: '全力冲刺，冲击国家集训队',
  description:
    '全身心投入竞赛学习，冲刺省队和国家集训队。适合学科天赋突出、对物理有强烈兴趣且学有余力的学生。',
  icon: 'Trophy',
  color: 'amber',
  targetAudience: '学科天赋突出，目标国家集训队保送的学生',
  duration: '高中两年（高一+高二）',
  phases: [
    {
      id: 'comp-p1',
      title: '系统学习',
      subtitle: '高一开始',
      duration: '高一全年',
      description: '系统学习竞赛全部内容，建立完整知识体系。',
      focusSubjects: ['physics', 'mathematics'],
      milestones: [
        {
          id: 'comp-p1-m1',
          title: '力学专题',
          description: '系统学习竞赛力学内容',
          completed: false,
          tasks: [
            '高等数学基础（微积分、向量）',
            '竞赛力学完整内容',
            '力学实验专题',
          ],
        },
        {
          id: 'comp-p1-m2',
          title: '电磁学专题',
          description: '系统学习竞赛电磁学内容',
          completed: false,
          tasks: [
            '竞赛电磁学完整内容',
            '电磁感应深入分析',
            '电磁学实验专题',
          ],
        },
        {
          id: 'comp-p1-m3',
          title: '热学·光学·原子物理',
          description: '竞赛第二轮内容',
          completed: false,
          tasks: [
            '热学：分子动理论、热力学定律',
            '光学：几何光学、波动光学',
            '原子物理：原子结构、能级跃迁',
          ],
        },
      ],
    },
    {
      id: 'comp-p2',
      title: '强化冲刺',
      subtitle: '高二全年',
      duration: '高二全年',
      description: '大量刷题，提升解题能力，冲刺省队。',
      focusSubjects: ['physics', 'mathematics'],
      milestones: [
        {
          id: 'comp-p2-m1',
          title: '一试强化',
          description: '提升一试解题速度和准确率',
          completed: false,
          tasks: [
            '完成近十五年一试真题',
            '限时训练，确保一试高分',
            '建立一试题型库',
          ],
        },
        {
          id: 'comp-p2-m2',
          title: '二试强化',
          description: '攻克二试难题，提升证明能力',
          completed: false,
          tasks: [
            '系统训练四道二试题型',
            '重点突破力学和电磁学难题',
            '学习竞赛高级技巧',
          ],
        },
        {
          id: 'comp-p2-m3',
          title: '冲刺省队',
          description: '针对性训练，冲刺省队名额',
          completed: false,
          tasks: [
            '参加省级竞赛，冲刺省队',
            '参加集训队培训',
            '准备决赛，争取金牌',
          ],
        },
      ],
    },
    {
      id: 'comp-p3',
      title: '决战决赛',
      subtitle: '高二下学期-高三',
      duration: '8个月',
      description: '全力冲击国家决赛和集训队。',
      focusSubjects: ['physics'],
      milestones: [
        {
          id: 'comp-p3-m1',
          title: '决赛准备',
          description: '准备全国决赛',
          completed: false,
          tasks: [
            '完成历年决赛真题',
            '重点训练决赛难度题目',
            '参加实验培训',
          ],
        },
        {
          id: 'comp-p3-m2',
          title: '集训队冲刺',
          description: '进入国家集训队后，冲刺国家队',
          completed: false,
          tasks: [
            '参加集训队选拔',
            '冲击国家金牌/进入国家队',
            '备战国际赛场（IPhO）',
          ],
        },
      ],
    },
  ],
}

// 全部路径列表
export const allPaths: LearningPath[] = [gaokaoPath, foundationPath, competitionPath]

// 工具函数：根据 ID 获取路径
export function getPathById(pathId: string): LearningPath | undefined {
  return allPaths.find((p) => p.id === pathId)
}

// 工具函数：根据 ID 获取阶段
export function getPhaseById(pathId: string, phaseId: string): PathPhase | undefined {
  const path = getPathById(pathId)
  return path?.phases.find((p) => p.id === phaseId)
}

// 工具函数：计算路径总完成度（百分比）
export function calculatePathProgress(path: LearningPath): number {
  let completedCount = 0
  let totalCount = 0

  for (const phase of path.phases) {
    for (const milestone of phase.milestones) {
      totalCount++
      if (milestone.completed) completedCount++
    }
  }

  return totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0
}
