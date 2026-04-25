// 学习诊断数据
// 架构：学科 → 难度组 → 题目

export interface DiagnosisQuestion {
  id: string
  subject: string
  difficulty: 'D1' | 'D2' | 'D3'
  topic: string
  question: string
  options: string[]
  correctAnswer: number // index of correct option
  explanation: string
}

export interface DiagnosisSubject {
  id: string
  name: string
  color: string
  topics: string[]
  questions: DiagnosisQuestion[]
}

// 物理诊断题（示例，每难度2道）
const physicsQuestions: DiagnosisQuestion[] = [
  // D1 基础
  {
    id: 'PHY-D1-01',
    subject: 'physics',
    difficulty: 'D1',
    topic: '运动与速度',
    question: '物体做匀速直线运动，速度为 5 m/s，3 秒内通过的位移为多少？',
    options: ['5 m', '15 m', '10 m', '8 m'],
    correctAnswer: 1,
    explanation: '位移 = 速度 × 时间 = 5 × 3 = 15 m',
  },
  {
    id: 'PHY-D1-02',
    subject: 'physics',
    difficulty: 'D1',
    topic: '力与运动',
    question: '用手水平托住一本书，书静止不动。手对书的支持力方向是？',
    options: ['竖直向上', '竖直向下', '水平向右', '水平向左'],
    correctAnswer: 0,
    explanation: '支持力垂直于接触面，竖直向上平衡重力',
  },
  // D2 进阶
  {
    id: 'PHY-D2-01',
    subject: 'physics',
    difficulty: 'D2',
    topic: '牛顿第二定律',
    question: '质量为 2 kg 的物体受到 10 N 的合力，产生加速度为多少 m/s²？',
    options: ['2 m/s²', '5 m/s²', '10 m/s²', '20 m/s²'],
    correctAnswer: 1,
    explanation: 'a = F/m = 10/2 = 5 m/s²',
  },
  {
    id: 'PHY-D2-02',
    subject: 'physics',
    difficulty: 'D2',
    topic: '能量守恒',
    question: '一个质量 1 kg 的物体从 5 m 高处自由下落，着地时动能约为多少 J？（g=10 m/s²）',
    options: ['25 J', '50 J', '10 J', '100 J'],
    correctAnswer: 1,
    explanation: '重力势能转化为动能：mgh = 1×10×5 = 50 J',
  },
  // D3 挑战
  {
    id: 'PHY-D3-01',
    subject: 'physics',
    difficulty: 'D3',
    topic: '动量守恒',
    question: '两个小球在光滑水平面上发生一维碰撞，碰撞后总动量一定？',
    options: ['等于碰撞前总动量', '大于碰撞前总动量', '小于碰撞前总动量', '以上都不对'],
    correctAnswer: 0,
    explanation: '系统不受外力，动量守恒',
  },
  {
    id: 'PHY-D3-02',
    subject: 'physics',
    difficulty: 'D3',
    topic: '机械能守恒',
    question: '弹簧振子在光滑水平面上振动，机械能一定？',
    options: ['守恒', '逐渐减小', '逐渐增大', '先增后减'],
    correctAnswer: 0,
    explanation: '只有弹力做功，机械能守恒',
  },
]

// 化学诊断题（示例）
const chemistryQuestions: DiagnosisQuestion[] = [
  {
    id: 'CHE-D1-01',
    subject: 'chemistry',
    difficulty: 'D1',
    topic: '原子结构',
    question: '氧原子的核电荷数为 8，则氧离子 O²⁻ 的核外电子数为？',
    options: ['6', '8', '10', '16'],
    correctAnswer: 2,
    explanation: 'O²⁻ 得到 2 个电子，核外电子数 = 8 + 2 = 10',
  },
  {
    id: 'CHE-D1-02',
    subject: 'chemistry',
    difficulty: 'D1',
    topic: '化学键',
    question: '下列物质中只含离子键的是？',
    options: ['HCl', 'NaCl', 'NaOH', 'H₂O'],
    correctAnswer: 1,
    explanation: 'NaCl 中 Na⁺ 与 Cl⁻ 之间只存在离子键',
  },
  {
    id: 'CHE-D2-01',
    subject: 'chemistry',
    difficulty: 'D2',
    topic: '氧化还原',
    question: '在反应 Zn + CuSO₄ → ZnSO₄ + Cu 中，被氧化的物质是？',
    options: ['Zn', 'Cu', 'CuSO₄', 'ZnSO₄'],
    correctAnswer: 0,
    explanation: 'Zn 失去电子，化合价升高，被氧化',
  },
  {
    id: 'CHE-D2-02',
    subject: 'chemistry',
    difficulty: 'D2',
    topic: '化学反应速率',
    question: '其他条件不变，增大反应物浓度，化学反应速率如何变化？',
    options: ['加快', '减慢', '不变', '先快后慢'],
    correctAnswer: 0,
    explanation: '浓度增大，单位体积内活化分子数增多，有效碰撞频率增加',
  },
  {
    id: 'CHE-D3-01',
    subject: 'chemistry',
    difficulty: 'D3',
    topic: '化学平衡',
    question: '对于反应 N₂ + 3H₂ ⇌ 2NH₃，其他条件不变，增大压强，平衡如何移动？',
    options: ['正向移动', '逆向移动', '不移动', '无法确定'],
    correctAnswer: 0,
    explanation: '增压使体积缩小，平衡向气体分子数减少的方向（正反应）移动',
  },
  {
    id: 'CHE-D3-02',
    subject: 'chemistry',
    difficulty: 'D3',
    topic: '电化学',
    question: '电解池中，阳极发生的是？',
    options: ['还原反应', '氧化反应', '复分解反应', '置换反应'],
    correctAnswer: 1,
    explanation: '阳极失电子，发生氧化反应',
  },
]

// 数学诊断题（示例）
const mathQuestions: DiagnosisQuestion[] = [
  {
    id: 'MAT-D1-01',
    subject: 'math',
    difficulty: 'D1',
    topic: '函数基础',
    question: '函数 f(x) = 2x + 1，当 x = 3 时，f(x) = ?',
    options: ['5', '6', '7', '8'],
    correctAnswer: 2,
    explanation: 'f(3) = 2×3 + 1 = 7',
  },
  {
    id: 'MAT-D1-02',
    subject: 'math',
    difficulty: 'D1',
    topic: '三角函数',
    question: 'sin 30° 的值为？',
    options: ['1/2', '√3/2', '√2/2', '1'],
    correctAnswer: 0,
    explanation: '特殊角 sin 30° = 1/2',
  },
  {
    id: 'MAT-D2-01',
    subject: 'math',
    difficulty: 'D2',
    topic: '导数',
    question: 'f(x) = x³ 的导函数为？',
    options: ['x²', '3x²', '3x', '2x³'],
    correctAnswer: 1,
    explanation: '(x³)\' = 3x²',
  },
  {
    id: 'MAT-D2-02',
    subject: 'math',
    difficulty: 'D2',
    topic: '数列',
    question: '等差数列 2, 5, 8, ... 的通项公式为？',
    options: ['3n-1', '3n+2', '3n-2', '2n+3'],
    correctAnswer: 0,
    explanation: 'a₁=2, d=3, an = 2 + (n-1)×3 = 3n-1',
  },
  {
    id: 'MAT-D3-01',
    subject: 'math',
    difficulty: 'D3',
    topic: '积分',
    question: '∫ x dx = ?',
    options: ['x² + C', 'x²/2 + C', '1 + C', '2x + C'],
    correctAnswer: 1,
    explanation: '∫ x dx = x²/2 + C',
  },
  {
    id: 'MAT-D3-02',
    subject: 'math',
    difficulty: 'D3',
    topic: '概率',
    question: '同时抛两枚均匀硬币，两枚正面都朝上的概率为？',
    options: ['1/4', '1/2', '1/3', '2/3'],
    correctAnswer: 0,
    explanation: '总情况数 4，满足条件情况数 1，P=1/4',
  },
]

export const diagnosisSubjects: DiagnosisSubject[] = [
  {
    id: 'physics',
    name: '物理',
    color: '#3b82f6',
    topics: ['运动与速度', '力与运动', '牛顿第二定律', '能量守恒', '动量守恒'],
    questions: physicsQuestions,
  },
  {
    id: 'chemistry',
    name: '化学',
    color: '#10b981',
    topics: ['原子结构', '化学键', '氧化还原', '化学反应速率', '化学平衡'],
    questions: chemistryQuestions,
  },
  {
    id: 'math',
    name: '数学',
    color: '#8b5cf6',
    topics: ['函数基础', '三角函数', '导数', '数列', '积分'],
    questions: mathQuestions,
  },
  {
    id: 'biology',
    name: '生物',
    color: '#f59e0b',
    topics: ['细胞结构', '新陈代谢', '遗传基础'],
    questions: [],
  },
  {
    id: 'chinese',
    name: '语文',
    color: '#ef4444',
    topics: ['现代文阅读', '古诗文', '写作'],
    questions: [],
  },
  {
    id: 'english',
    name: '英语',
    color: '#06b6d4',
    topics: ['词汇语法', '阅读理解', '写作表达'],
    questions: [],
  },
]

// 根据得分计算评级
export function calculateGrade(correct: number, total: number): 'A' | 'B' | 'C' | 'D' {
  const rate = total > 0 ? correct / total : 0
  if (rate >= 0.85) return 'A'
  if (rate >= 0.65) return 'B'
  if (rate >= 0.45) return 'C'
  return 'D'
}

export const gradeDescriptions: Record<string, { label: string; color: string; description: string }> = {
  A: {
    label: '优秀',
    color: '#16a34a',
    description: '基础扎实，可以进入进阶内容学习',
  },
  B: {
    label: '良好',
    color: '#2563eb',
    description: '有一定基础，建议系统复习后进入下一阶段',
  },
  C: {
    label: '一般',
    color: '#d97706',
    description: '需要加强基础，建议从核心知识点重新梳理',
  },
  D: {
    label: '需努力',
    color: '#dc2626',
    description: '建议回到学科指南，从第一章开始系统学习',
  },
}
