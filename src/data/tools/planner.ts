// 学习目标与三年规划数据

export interface GradeLevel {
  id: string // 'grade9' | 'grade10' | 'grade11' | 'grade12'
  label: string
  shortLabel: string
  year: string
  phase: '衔接' | '高一' | '高二' | '高三'
  description: string
  milestones: Milestone[]
  keyFocus: string[]
  recommendedPath: string
}

export interface Milestone {
  id: string
  label: string
  month: string
  type: 'exam' | 'checkpoint' | 'decision' | 'event'
  description: string
  href?: string
}

export interface LearningGoal {
  id: string // 'gaokao' | 'qiangji' | 'competition'
  label: string
  shortLabel: string
  color: string
  description: string
  targets: GoalTarget[]
}

export interface GoalTarget {
  grade: string
  label: string
  description: string
  metrics: string[]
}

export const gradeLevels: GradeLevel[] = [
  {
    id: 'grade9',
    label: '初三（升高一）',
    shortLabel: '初三',
    year: '2026 暑假',
    phase: '衔接',
    description: '初高中过渡关键期，查漏补缺，提前适应高中节奏',
    milestones: [
      { id: 'm1', label: '中考结束', month: '6月', type: 'exam', description: '完成中考，进入休整期' },
      { id: 'm2', label: '暑假开始', month: '7月', type: 'event', description: '制定暑假计划，保持学习节奏' },
      { id: 'm3', label: '衔接期', month: '7-8月', type: 'checkpoint', description: '预习高一数理化基础内容' },
      { id: 'm4', label: '高一开学', month: '9月', type: 'event', description: '进入高中，正式开始三年备考' },
    ],
    keyFocus: ['高中学习方法建立', '数理化衔接内容', '时间管理能力'],
    recommendedPath: '/planner?grade=grade9',
  },
  {
    id: 'grade10',
    label: '高一',
    shortLabel: '高一',
    year: '2026-2027',
    phase: '高一',
    description: '夯实基础的关键年，适应高中学习节奏，竞赛入门',
    milestones: [
      { id: 'm1', label: '高一上期中', month: '11月', type: 'exam', description: '第一次高中大考，检验适应情况' },
      { id: 'm2', label: '高一上期末', month: '1月', type: 'exam', description: '高一第一学期综合检验' },
      { id: 'm3', label: '高一下期末', month: '6月', type: 'exam', description: '语数英物化五科综合' },
      { id: 'm4', label: '竞赛初选', month: '9月', type: 'decision', description: '决定是否走竞赛路线' },
    ],
    keyFocus: ['六科基础全面建立', '物理模型体系', '竞赛入门尝试'],
    recommendedPath: '/physics',
  },
  {
    id: 'grade11',
    label: '高二',
    shortLabel: '高二',
    year: '2027-2028',
    phase: '高二',
    description: '拉开差距的分水岭，竞赛冲刺期，同时兼顾课内',
    milestones: [
      { id: 'm1', label: '高二上期末', month: '1月', type: 'exam', description: '高二第一学期学业水平检验' },
      { id: 'm2', label: '竞赛预赛', month: '5月', type: 'exam', description: '物理/化学/数学预赛' },
      { id: 'm3', label: '高二下期末', month: '6月', type: 'exam', description: '高二学业验收' },
      { id: 'm4', label: '一轮复习启动', month: '8月', type: 'checkpoint', description: '高三前哨，提前开始一轮复习' },
    ],
    keyFocus: ['竞赛决赛冲刺', '一轮复习启动', '强基计划准备'],
    recommendedPath: '/competition/physics',
  },
  {
    id: 'grade12',
    label: '高三',
    shortLabel: '高三',
    year: '2028-2029',
    phase: '高三',
    description: '全力冲刺的一年，三轮复习，查漏补缺，应试能力提升',
    milestones: [
      { id: 'm1', label: '高三一模', month: '11月', type: 'exam', description: '第一次全市统考，定位排位' },
      { id: 'm2', label: '强基计划报名', month: '4月', type: 'decision', description: '强基计划校考备考' },
      { id: 'm3', label: '高考', month: '6月', type: 'exam', description: '决战高考' },
      { id: 'm4', label: '志愿填报', month: '6-7月', type: 'decision', description: '根据分数填报志愿' },
    ],
    keyFocus: ['三轮复习', '应试技巧训练', '心态调整'],
    recommendedPath: '/gaokao',
  },
]

export const learningGoals: LearningGoal[] = [
  {
    id: 'gaokao',
    label: '高考路线',
    shortLabel: '高考',
    color: '#f97316',
    description: '以高考为核心的备考路径，覆盖课内同步和三轮复习',
    targets: [
      { grade: '高一', label: '基础夯实期', description: '六科均衡发展，不留明显短板', metrics: ['成绩排名稳定前30%', '建立错题整理习惯'] },
      { grade: '高二', label: '能力提升期', description: '重点科目突破，提升解题速度', metrics: ['数学/物理成绩突出', '建立知识体系框架'] },
      { grade: '高三', label: '冲刺提分期', description: '三轮复习，查漏补缺，冲刺高分', metrics: ['一模排位达到目标', '各科均衡发展'] },
    ],
  },
  {
    id: 'qiangji',
    label: '强基计划',
    shortLabel: '强基',
    color: '#8b5cf6',
    description: '以强基计划为目标，在课内基础上增加竞赛深度内容',
    targets: [
      { grade: '高一', label: '竞赛入门期', description: '参加竞赛培训，接触竞赛内容', metrics: ['竞赛预赛入围', '竞赛基础知识储备'] },
      { grade: '高二', label: '竞赛冲刺期', description: '物理/数学竞赛全力冲刺', metrics: ['省赛二等奖以上', '强基校考内容覆盖'] },
      { grade: '高三', label: '双轨并行期', description: '强基校考+高考课内双线备考', metrics: ['强基入围', '高考成绩稳定'] },
    ],
  },
  {
    id: 'competition',
    label: '学科竞赛',
    shortLabel: '竞赛',
    color: '#eab308',
    description: '以竞赛获奖为目标，需要投入大量时间，数学/物理为主',
    targets: [
      { grade: '高一', label: '竞赛入门期', description: '系统学习竞赛内容，每周投入时间 > 8h', metrics: ['竞赛预赛入围', '完成竞赛基础知识'] },
      { grade: '高二', label: '竞赛强化期', description: '大量刷题，模拟训练，冲刺省赛', metrics: ['省赛一等奖', '进入省队'] },
      { grade: '高三', label: '收官期', description: '决赛/决赛，冲刺金牌/银牌', metrics: ['决赛获奖', '保送/强基优惠'] },
    ],
  },
]
