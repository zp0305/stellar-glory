// 初高中衔接专题数据
// 来源：docs/zones/初高中衔接专题内容规划.md (v1.0, 2026-04-22)

export interface SummerWeek {
  week: number
  theme: string
  dailyHours: string
  tasks: string
  detection: string
}

export interface SubjectBridgePoint {
  id: string
  point: string
  juniorStatus: string
  highSchoolNeed: string
  approach: string
  hours: string
}

export interface AdaptationStage {
  phase: string
  time: string
  tasks: string[]
  commonIssue: string
}

export interface Pitfall {
  id: number
  pitfall: string
  consequence: string
  prevention: string
}

export interface ErrorCase {
  id: number
  title: string
  trigger: string
  diagnosis: string[]
  strategy: string
  stopLoss: string
}

// 暑假8周总体安排
export const summerWeeks: SummerWeek[] = [
  {
    week: 1,
    theme: '全面诊断',
    dailyHours: '2-3小时',
    tasks: '做六科初中知识自测，找出薄弱环节',
    detection: '完成六科自测，整理薄弱知识点清单',
  },
  {
    week: 2,
    theme: '查漏补缺',
    dailyHours: '3-4小时',
    tasks: '针对诊断结果，补初中薄弱知识点',
    detection: '薄弱知识点正确率达到70%以上',
  },
  {
    week: 3,
    theme: '方法建设（上）',
    dailyHours: '3-4小时',
    tasks: '学习高中笔记方法、错题本整理规范',
    detection: '建立完整的错题本模板，记录3-5道典型错题',
  },
  {
    week: 4,
    theme: '方法建设（下）',
    dailyHours: '3-4小时',
    tasks: '时间管理、多线并行学习节奏训练',
    detection: '完成一周时间规划表并执行',
  },
  {
    week: 5,
    theme: '学科先修（一）',
    dailyHours: '4-5小时',
    tasks: '按优先级预习高一上学期前2章内容（物理+数学优先）',
    detection: '能用自己的话复述预习内容，做少量基础练习',
  },
  {
    week: 6,
    theme: '学科先修（二）',
    dailyHours: '4-5小时',
    tasks: '继续预习化学、英语前两章',
    detection: '化学能写出离子反应基本方程式，英语掌握核心词汇50个',
  },
  {
    week: 7,
    theme: '衔接专项',
    dailyHours: '3-4小时',
    tasks: '针对各科衔接断层做专项训练（矢量运算/二次函数/物质的量等）',
    detection: '矢量运算三道练习全对，二次函数图像能正确画制',
  },
  {
    week: 8,
    theme: '状态调整',
    dailyHours: '2小时（递减）',
    tasks: '调整作息，提前适应高中节奏，放松准备开学',
    detection: '作息调整为早7点起、晚10:30睡',
  },
]

// 六科衔接重点
export const subjectBridges = {
  physics: {
    name: '物理',
    color: '#3b82f6',
    points: [
      { id: 'phy-01', point: '矢量运算', juniorStatus: '只有大小，无方向概念', highSchoolNeed: '力、速度、加速度都是矢量，需要合成与分解', approach: '学习矢量的加减法、三角形法则、正交分解', hours: '3天' },
      { id: 'phy-02', point: '函数与图像', juniorStatus: '简单的正比例/反比例', highSchoolNeed: 'v-t图、s-t图、运动学公式推导都要用图像', approach: '复习一次函数图像，预习二次函数', hours: '2天' },
      { id: 'phy-03', point: '三角函数基础', juniorStatus: '直角三角形的sin/cos/tan', highSchoolNeed: '力的分解、斜面问题、抛体运动都需要', approach: '掌握特殊角的三角函数值、勾股定理熟练运用', hours: '2天' },
      { id: 'phy-04', point: '力学深入', juniorStatus: '二力平衡、简单杠杆', highSchoolNeed: '牛顿三定律、受力分析、多过程问题', approach: '从二力平衡过渡到多力平衡，引入正交分解', hours: '3天' },
      { id: 'phy-05', point: '单位制与量纲', juniorStatus: '简单的单位换算', highSchoolNeed: '国际单位制、量纲分析、有效数字', approach: '掌握SI单位制、学会量纲检查', hours: '1天' },
    ] as SubjectBridgePoint[],
  },
  math: {
    name: '数学',
    color: '#8b5cf6',
    points: [
      { id: 'math-01', point: '绝对值', juniorStatus: '简单的绝对值运算', highSchoolNeed: '绝对值不等式、绝对值函数', approach: '掌握绝对值的几何意义、分段讨论', hours: '2天' },
      { id: 'math-02', point: '因式分解', juniorStatus: '提公因式、公式法', highSchoolNeed: '高中代数变形的基础', approach: '补充十字相乘法、分组分解法', hours: '2天' },
      { id: 'math-03', point: '二次函数', juniorStatus: '了解基本形式', highSchoolNeed: '高中函数体系的核心起点', approach: '系统学习二次函数图像、顶点式、判别式', hours: '4天' },
      { id: 'math-04', point: '一元二次方程', juniorStatus: '求根公式', highSchoolNeed: '韦达定理、根的分布', approach: '掌握韦达定理的应用', hours: '2天' },
      { id: 'math-05', point: '不等式', juniorStatus: '简单不等式', highSchoolNeed: '均值不等式、二次不等式', approach: '系统学习不等式的解法和证明', hours: '3天' },
      { id: 'math-06', point: '集合概念', juniorStatus: '无', highSchoolNeed: '高中第一个概念，全部数学的"语言基础"', approach: '预习集合的概念、交并补运算', hours: '2天' },
    ] as SubjectBridgePoint[],
  },
  chemistry: {
    name: '化学',
    color: '#10b981',
    points: [
      { id: 'che-01', point: '物质的分类', juniorStatus: '简单的酸碱盐', highSchoolNeed: '系统的物质分类体系（电解质/非电解质等）', approach: '建立完整的物质分类树', hours: '2天' },
      { id: 'che-02', point: '氧化还原反应', juniorStatus: '简单的得氧失氧', highSchoolNeed: '电子转移、化合价升降、氧化还原配平', approach: '从得失氧过渡到电子转移', hours: '3天' },
      { id: 'che-03', point: '酸碱盐的性质', juniorStatus: '记忆为主', highSchoolNeed: '离子反应、离子方程式', approach: '从宏观反应过渡到离子视角', hours: '2天' },
      { id: 'che-04', point: '化学计算', juniorStatus: '质量守恒', highSchoolNeed: '物质的量（摩尔）、气体摩尔体积', approach: '预习"物质的量"概念', hours: '3天' },
      { id: 'che-05', point: '实验基础', juniorStatus: '简单操作', highSchoolNeed: '仪器的规范使用、实验设计思维', approach: '复习初中实验操作规范', hours: '1天' },
    ] as SubjectBridgePoint[],
  },
  biology: {
    name: '生物',
    color: '#f59e0b',
    points: [
      { id: 'bio-01', point: '细胞结构', juniorStatus: '认识基本结构', highSchoolNeed: '细胞器功能、生物膜系统', approach: '系统复习细胞结构，预习细胞器', hours: '2天' },
      { id: 'bio-02', point: '光合与呼吸', juniorStatus: '简单了解', highSchoolNeed: '分子机制、光合/呼吸方程式、影响因素', approach: '从现象描述过渡到过程理解', hours: '2天' },
      { id: 'bio-03', point: '遗传基础', juniorStatus: '孟德尔简单介绍', highSchoolNeed: '减数分裂、遗传定律的深入应用', approach: '预习减数分裂过程', hours: '2天' },
      { id: 'bio-04', point: '科学思维', juniorStatus: '以记忆为主', highSchoolNeed: '实验设计、变量控制、数据分析', approach: '了解对照实验的设计原则', hours: '1天' },
    ] as SubjectBridgePoint[],
  },
  chinese: {
    name: '语文',
    color: '#ef4444',
    points: [
      { id: 'chn-01', point: '文言文', juniorStatus: '简短浅显的篇目', highSchoolNeed: '长篇文言文、实词虚词积累、句式分析', approach: '暑假精读5-8篇经典文言文（如《赤壁赋》《滕王阁序》）', hours: '持续' },
      { id: 'chn-02', point: '阅读理解', juniorStatus: '找信息式阅读', highSchoolNeed: '分析式阅读（主题/结构/手法/意图）', approach: '学习"四问法"阅读框架', hours: '3天' },
      { id: 'chn-03', point: '作文', juniorStatus: '记叙文为主', highSchoolNeed: '议论文、材料作文', approach: '了解议论文的基本结构和论证方法', hours: '3天' },
      { id: 'chn-04', point: '名著阅读', juniorStatus: '课本要求的篇目', highSchoolNeed: '更大的阅读量、更深的思考', approach: '暑假读2-3本高中必读书目', hours: '持续' },
      { id: 'chn-05', point: '成语与词语', juniorStatus: '基础积累', highSchoolNeed: '高频成语辨析、近义词辨析', approach: '每天积累5个成语', hours: '持续' },
    ] as SubjectBridgePoint[],
  },
  english: {
    name: '英语',
    color: '#06b6d4',
    points: [
      { id: 'eng-01', point: '词汇量', juniorStatus: '约1600-2000', highSchoolNeed: '高中毕业要求3500+，高一就需2500+', approach: '暑假突击积累500个核心词汇', hours: '持续' },
      { id: 'eng-02', point: '语法体系', juniorStatus: '分散学习，不系统', highSchoolNeed: '系统语法框架（从句体系是重点）', approach: '梳理初中语法，预习定语从句', hours: '3天' },
      { id: 'eng-03', point: '长难句', juniorStatus: '简单句为主', highSchoolNeed: '复合句、倒装、省略、插入语', approach: '学习句子成分分析、主谓宾定状补', hours: '3天' },
      { id: 'eng-04', point: '阅读速度', juniorStatus: '细读为主', highSchoolNeed: '快速阅读+精读结合，阅读量大幅增加', approach: '暑假坚持每天阅读1-2篇英语文章', hours: '持续' },
      { id: 'eng-05', point: '写作', juniorStatus: '简单短文', highSchoolNeed: '读后续写、概要写作（高考新题型）', approach: '了解读后续写的基本要求', hours: '2天' },
    ] as SubjectBridgePoint[],
  },
}

// 高一上学期适应阶段
export const adaptationStages: AdaptationStage[] = [
  { phase: '蜜月期', time: '第1-2周', tasks: ['适应节奏', '了解各科老师风格', '建立社交圈'], commonIssue: '容易掉以轻心，觉得高中"也就这样"' },
  { phase: '第一波冲击', time: '第3-4周（第一次月考前）', tasks: ['知识密度加大', '数学物理开始变难'], commonIssue: '跟不上进度，作业做不完' },
  { phase: '自我定位', time: '第1次月考后', tasks: ['根据月考结果调整学习策略'], commonIssue: '成绩落差大导致心态崩溃' },
  { phase: '分化期', time: '期中考试前后', tasks: ['学习方法是否有效的第一次真正检验'], commonIssue: '优势科目和劣势科目明确显现' },
  { phase: '稳定期', time: '期末考试前', tasks: ['确立稳定的学习节奏和方法体系'], commonIssue: '如果前期没调整好，期末会全面崩盘' },
]

// 高一最常踩的坑
export const pitfalls: Pitfall[] = [
  { id: 1, pitfall: '觉得高一还早，不着急', consequence: '高二发现基础没打牢，补起来很痛苦', prevention: '高一就是打基础，没有"还早"' },
  { id: 2, pitfall: '用初中方法学高中', consequence: '死记硬背不灵了，成绩下滑', prevention: '第一个月就主动调整学习方法' },
  { id: 3, pitfall: '只上课不做课外拓展', consequence: '学校进度慢，到高二发现别人已走很远', prevention: '每天留出1小时自主拓展时间' },
  { id: 4, pitfall: '所有科目平均用力', consequence: '优势科目没突出，劣势科目没补上', prevention: '明确主次，6-3-1分配精力' },
  { id: 5, pitfall: '忽视错题本', consequence: '同样的错反复犯', prevention: '每周固定时间整理错题' },
  { id: 6, pitfall: '完全不社交/完全不休息', consequence: '倦怠、效率下降', prevention: '每天保证运动+兴趣时间' },
]

// 六种典型偏差
export const errorCases: ErrorCase[] = [
  {
    id: 1,
    title: '某科严重失利',
    trigger: '月考/期末某科低于预期30分以上，或连续两次排名下降',
    diagnosis: ['分析失分原因（知识漏洞/方法不对/粗心/时间不够）', '找出最薄弱的知识模块', '评估是短期波动还是系统性问题'],
    strategy: '短期：该科每周增加2-3小时针对性补习，暂停非必要拓展。中期：如果连续两个月无改善，考虑换思路而非加时间。',
    stopLoss: '补救3个月后仍无改善，可能需要考虑选科调整或寻求外部帮助',
  },
  {
    id: 2,
    title: '发现不适合竞赛',
    trigger: '竞赛学习3个月后，进度明显落后同期学习者，或对竞赛内容感到痛苦而非有挑战感',
    diagnosis: ['区分"困难但不排斥"和"困难且排斥"', '评估竞赛投入对高考科目成绩的影响', '诚实评估天赋因素'],
    strategy: '降级：从"冲省一"降为"拓展思维"（用竞赛内容训练思维，不追求成绩）→退出：如果竞赛严重影响高考科目，果断退出',
    stopLoss: '高一上学期结束前做最终决定，最迟不超过高一下学期期中',
  },
  {
    id: 3,
    title: '时间不够用',
    trigger: '经常完不成每日计划，连续一周睡眠不足6小时',
    diagnosis: ['列出所有在做的事', '分类：必要/重要/可砍', '评估每项的实际收益'],
    strategy: '砍：暂停优先级最低的1-2项 →并：能合并的任务合并（如竞赛和强基重合的部分一起学）→降：降低部分目标的完成标准',
    stopLoss: '每天至少7小时睡眠，每周至少1天完全休息',
  },
  {
    id: 4,
    title: '感到疲惫/失去动力',
    trigger: '持续两周以上学习效率明显下降，或对学习产生排斥感',
    diagnosis: ['是身体疲劳还是心理倦怠', '最近是否持续高压无休息', '是否感到努力没有回报'],
    strategy: '身体疲劳：增加睡眠、增加运动、请假休息1-2天。心理倦怠：暂停拓展任务，回顾初心，找成就感来源（做几道有把握的题重建信心）',
    stopLoss: '每周安排至少半天"非学习时间"',
  },
  {
    id: 5,
    title: '偏科严重',
    trigger: '某科年级前10%，另一科年级后50%，或某科投入时间超过总时间的40%',
    diagnosis: ['弱科是因为基础差还是方法不对还是不感兴趣', '强科是否还有上升空间（边际收益递减）', '高考选科是否需要弱科成绩'],
    strategy: '如果弱科是高考必考：该科时间占比提升到25%-30%，找对方法。如果弱科可以避开（选科不选）：维持基本不拖后腿即可',
    stopLoss: '总分优先，不追求每科都强',
  },
  {
    id: 6,
    title: '学校课业过重，没时间拓展',
    trigger: '每天作业做到11点以后，完全没有自主拓展时间',
    diagnosis: ['是所有科目都重还是个别科目作业多', '自己的做题速度是否合理（有些题不必做）', '是否可以优化作业效率'],
    strategy: '提高效率：对简单重复的作业适当跳过（和老师沟通）→利用碎片时间：通勤、课间做记忆类任务→周末集中拓展：平时保课内，周末做拓展',
    stopLoss: '如果学校作业确实质量不高，考虑和老师沟通"差异化作业"',
  },
]
