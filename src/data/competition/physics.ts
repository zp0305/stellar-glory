// 物理竞赛数据
// 依据：五大学科竞赛内容规划.md §三（物理竞赛详细规划）

export interface CompetitionGuideEntry {
  id: string // 'CP01'
  title: string
  subtitle: string
  content: string // Markdown 格式内容（待填充）
  updateFrequency: '静态' | '每年更新'
}

export interface CompetitionKnowledgeEntry {
  id: string // 'CK01'
  title: string
  universityCourse: string // 对标大学课程
  coreRequirements: string // 核心要求描述
  examWeight: string // 占分比
  content: string // Markdown 格式内容（待填充）
}

export interface CompetitionModel {
  id: string // 'CB01'
  name: string
  mainTopics: string
  examLevel: '预赛' | '复赛' | '决赛' | '复赛/决赛'
  frequency: '极高' | '高' | '中'
  prerequisiteKnowledge: string[]
  content: string // Markdown 格式内容（待填充）
  trainingQuestions: string[] // 训练题 ID 列表
}

export interface CompetitionPathStage {
  phase: string
  weeks: string
  target: string
  hours: string
  topics: string[]
}

export interface CompetitionExamSection {
  id: string // 'CE01'
  title: string
  content: string
}

// 六大模块配置
export const PHYSICS_COMPETITION_MODULES = [
  { id: 'guide', label: '政策与赛事指南', icon: 'Trophy', description: '竞赛历史、赛制、获奖等级、升学政策' },
  { id: 'outline', label: '知识大纲', icon: 'BookOpen', description: '十一大知识板块完整体系' },
  { id: 'models', label: '核心模型详解', icon: 'Lightbulb', description: '15个竞赛核心模型精讲' },
  { id: 'papers', label: '真题训练', icon: 'FileText', description: '2010-2025预赛/复赛/决赛真题' },
  { id: 'experiment', label: '实验专题', icon: 'FlaskConical', description: '复赛决赛实验占约40%' },
  { id: 'path', label: '备考路径', icon: 'Route', description: '三年系统备考时间线' },
] as const

// 知识大纲11大板块
export const PHYSICS_OUTLINE_BLOCKS = [
  { id: 'B01', name: '力学', weight: '约25-30%', topics: ['运动学（竞赛级）', '质点动力学（竞赛级）', '刚体力学', '振动与波（竞赛级）', '流体力学', '力学中的数学方法'] },
  { id: 'B02', name: '热学', weight: '约10-15%', topics: ['分子动理论', '热力学三大定律', '热力学过程与循环'] },
  { id: 'B03', name: '电磁学', weight: '约25-30%', topics: ['静电场（竞赛级）', '稳恒电流（竞赛级）', '静磁场（竞赛级）', '电磁感应（竞赛级）', '交变电流与电磁波'] },
  { id: 'B04', name: '光学', weight: '约10-15%', topics: ['几何光学（竞赛级）', '波动光学（竞赛级）', '光的量子性'] },
  { id: 'B05', name: '近代物理', weight: '约10-15%', topics: ['狭义相对论', '原子物理', '原子核物理', '粒子物理初步'] },
  { id: 'B06', name: '实验物理', weight: '约40%（笔试+实验）', topics: ['误差分析与数据处理', '基本测量方法', '常见实验项目', '实验设计与创新'] },
  { id: 'B07', name: '数学物理方法', weight: '贯穿全部', topics: ['微积分深化', '常微分方程', '矢量分析'] },
]

// 知识大纲条目（28个知识点）
export const PHYSICS_KNOWLEDGE_ENTRIES: CompetitionKnowledgeEntry[] = [
  // 板块1：力学
  { id: 'CK01', title: '运动学（竞赛级）', universityCourse: '理论力学', coreRequirements: '极坐标/自然坐标系描述、相对运动（伽利略变换）、科里奥利加速度、刚体运动学（欧拉角初步）', examWeight: '约25-30%', content: '' },
  { id: 'CK02', title: '质点动力学（竞赛级）', universityCourse: '理论力学', coreRequirements: '非惯性系动力学（完整科里奥利力分析）、变质量运动（火箭问题）、万有引力的深入（拉格朗日点、三体初步）', examWeight: '约25-30%', content: '' },
  { id: 'CK03', title: '刚体力学', universityCourse: '理论力学', coreRequirements: '转动惯量张量、平行轴/垂直轴定理、欧拉运动方程（概念）、陀螺仪与进动、滚动问题（纯滚动条件分析）', examWeight: '约25-30%', content: '' },
  { id: 'CK04', title: '振动与波（竞赛级）', universityCourse: '普通物理', coreRequirements: '阻尼振动与受迫振动、共振、耦合振子、简正模、非线性振动初步', examWeight: '约25-30%', content: '' },
  { id: 'CK05', title: '流体力学', universityCourse: '普通物理', coreRequirements: '伯努利方程应用、连续性方程、粘滞流体、斯托克斯定律、雷诺数', examWeight: '约25-30%', content: '' },
  { id: 'CK06', title: '力学中的数学方法', universityCourse: '数学物理方法', coreRequirements: '变分法初步（最小作用量原理）、拉格朗日方程、广义坐标与广义动量、正则方程概念', examWeight: '约25-30%', content: '' },
  // 板块2：热学
  { id: 'CK07', title: '分子动理论', universityCourse: '热学/统计物理', coreRequirements: '麦克斯韦速度分布律推导与应用、自由程与碰撞频率、气体分子碰壁数、范德瓦尔斯方程', examWeight: '约10-15%', content: '' },
  { id: 'CK08', title: '热力学三大定律', universityCourse: '热学', coreRequirements: '热力学第零/一/二/三定律的完整表述、熵的定量计算、热力学势（自由能、焓、吉布斯函数）、麦克斯韦关系', examWeight: '约10-15%', content: '' },
  { id: 'CK09', title: '热力学过程与循环', universityCourse: '热学', coreRequirements: '绝热/多方/等温/等压过程分析、卡诺循环及推广、制冷循环、不可逆过程', examWeight: '约10-15%', content: '' },
  // 板块3：电磁学
  { id: 'CK10', title: '静电场（竞赛级）', universityCourse: '电磁学', coreRequirements: '高斯定理深化、电势与电势梯度、电容与电容器能量、镜像法、多极展开（偶极子/四极子）', examWeight: '约25-30%', content: '' },
  { id: 'CK11', title: '稳恒电流（竞赛级）', universityCourse: '电路分析', coreRequirements: '基尔霍夫定律复杂应用、戴维宁/诺顿定理、叠加定理、星形-三角形变换、非平衡电桥、网络等效电阻的求解技巧', examWeight: '约25-30%', content: '' },
  { id: 'CK12', title: '静磁场（竞赛级）', universityCourse: '电磁学', coreRequirements: '毕奥-萨伐尔定律（复杂几何）、安培环路定理、磁偶极子、磁介质（磁化强度、磁场强度、边界条件）', examWeight: '约25-30%', content: '' },
  { id: 'CK13', title: '电磁感应（竞赛级）', universityCourse: '电磁学', coreRequirements: '动生/感生电动势的深入、自感与互感、磁能、RLC电路暂态过程的完整求解、电磁感应中的能量转化', examWeight: '约25-30%', content: '' },
  { id: 'CK14', title: '交变电流与电磁波', universityCourse: '电磁学', coreRequirements: '复数法分析交流电路、阻抗与导纳、谐振电路、品质因数、麦克斯韦方程组（微分形式）、电磁波性质', examWeight: '约25-30%', content: '' },
  // 板块4：光学
  { id: 'CK15', title: '几何光学（竞赛级）', universityCourse: '光学', coreRequirements: '费马原理、球面折射/反射的傍轴近似、薄透镜公式推导、光学仪器（显微镜/望远镜）、像差初步', examWeight: '约10-15%', content: '' },
  { id: 'CK16', title: '波动光学（竞赛级）', universityCourse: '光学', coreRequirements: '分振幅/分波前干涉（等倾/等厚/牛顿环/迈克尔逊）、衍射（单缝/圆孔/光栅）、偏振（马吕斯/布儒斯特/双折射/偏振光的干涉）', examWeight: '约10-15%', content: '' },
  { id: 'CK17', title: '光的量子性', universityCourse: '光学', coreRequirements: '光电效应的定量分析、康普顿散射、辐射定律（斯特藩-玻尔兹曼/维恩位移）、激光原理', examWeight: '约10-15%', content: '' },
  // 板块5：近代物理
  { id: 'CK18', title: '狭义相对论', universityCourse: '近代物理', coreRequirements: '洛伦兹变换的完整推导与应用、速度变换、质能关系、动量-能量四维矢量、相对论电动力学初步', examWeight: '约10-15%', content: '' },
  { id: 'CK19', title: '原子物理', universityCourse: '原子物理', coreRequirements: '氢原子薛定谔方程（结论级）、量子数、电子云、多电子原子（泡利原理、洪特规则）、X射线与能级', examWeight: '约10-15%', content: '' },
  { id: 'CK20', title: '原子核物理', universityCourse: '原子核物理', coreRequirements: '核衰变（α/β/γ）、核反应方程、结合能与比结合能、核力、裂变与聚变、半衰期计算', examWeight: '约10-15%', content: '' },
  { id: 'CK21', title: '粒子物理初步', universityCourse: '粒子物理', coreRequirements: '基本粒子分类、守恒定律（电荷/重子数/轻子数）、夸克模型、标准模型概念', examWeight: '约10-15%', content: '' },
  // 板块6：实验物理
  { id: 'CK22', title: '误差分析与数据处理', universityCourse: '实验基础', coreRequirements: '系统误差/偶然误差、不确定度计算、有效数字规则、最小二乘法拟合、作图法求参数', examWeight: '约40%（笔试+实验）', content: '' },
  { id: 'CK23', title: '基本测量方法', universityCourse: '实验基础', coreRequirements: '长度/质量/时间/温度/电压/电流的精密测量、游标卡尺/螺旋测微器/天平的使用', examWeight: '约40%（笔试+实验）', content: '' },
  { id: 'CK24', title: '常见实验项目', universityCourse: '实验专题', coreRequirements: '力学实验（单摆/刚体转动惯量）、热学实验（比热容/气体定律）、电学实验（电桥/电位差计/示波器）、光学实验（折射率/焦距/干涉）', examWeight: '约40%（笔试+实验）', content: '' },
  { id: 'CK25', title: '实验设计与创新', universityCourse: '实验专题', coreRequirements: '根据题目要求设计实验方案、选择仪器与量程、分析实验误差来源、优化实验方案', examWeight: '约40%（笔试+实验）', content: '' },
  // 板块7：数学物理方法
  { id: 'CK26', title: '微积分深化', universityCourse: '数学分析', coreRequirements: '多元函数微积分、曲线/曲面积分、格林公式/高斯公式/斯托克斯公式、泰勒展开与近似', examWeight: '贯穿全部', content: '' },
  { id: 'CK27', title: '常微分方程', universityCourse: '常微分方程', coreRequirements: '一阶ODE（分离变量/积分因子/伯努利）、二阶ODE（常系数线性）、物理中的微分方程建立', examWeight: '贯穿全部', content: '' },
  { id: 'CK28', title: '矢量分析', universityCourse: '矢量分析', coreRequirements: '梯度/散度/旋度、标量场/矢量场、常用矢量恒等式、柱坐标/球坐标下的矢量分析', examWeight: '贯穿全部', content: '' },
]

// 核心模型（15个）
export const PHYSICS_COMPETITION_MODELS: CompetitionModel[] = [
  { id: 'CB01', name: '刚体复合运动模型', mainTopics: '刚体转动惯量计算、角动量守恒、进动、滚动摩擦', examLevel: '复赛/决赛', frequency: '极高', prerequisiteKnowledge: ['CK03', 'CK06'], content: '', trainingQuestions: [] },
  { id: 'CB02', name: '多过程力学综合', mainTopics: '多体碰撞+弹簧+摩擦+变质量（火箭/链条）的复合过程', examLevel: '复赛/决赛', frequency: '极高', prerequisiteKnowledge: ['CK01', 'CK02'], content: '', trainingQuestions: [] },
  { id: 'CB03', name: '非惯性系综合问题', mainTopics: '旋转参考系中的运动分析、科里奥利力的定量应用', examLevel: '复赛', frequency: '高', prerequisiteKnowledge: ['CK02', 'CK06'], content: '', trainingQuestions: [] },
  { id: 'CB04', name: '耦合振子与简正模', mainTopics: '多自由度振动系统、简正频率求解、能量传递', examLevel: '复赛/决赛', frequency: '高', prerequisiteKnowledge: ['CK04', 'CK27'], content: '', trainingQuestions: [] },
  { id: 'CB05', name: '复杂电路网络模型', mainTopics: '无穷电阻网络、等效电阻求解技巧、非平衡电桥、暂态+稳态综合', examLevel: '复赛', frequency: '极高', prerequisiteKnowledge: ['CK11', 'CK13'], content: '', trainingQuestions: [] },
  { id: 'CB06', name: '介质电磁场模型', mainTopics: '介质极化/磁化、边界条件、镜像法、多极展开', examLevel: '复赛/决赛', frequency: '高', prerequisiteKnowledge: ['CK10', 'CK12'], content: '', trainingQuestions: [] },
  { id: 'CB07', name: '电磁感应综合模型', mainTopics: '复杂导体运动中的感应电动势、能量守恒+动量守恒联立、RLC暂态全过程', examLevel: '复赛', frequency: '极高', prerequisiteKnowledge: ['CK13', 'CK11'], content: '', trainingQuestions: [] },
  { id: 'CB08', name: '带电粒子复杂运动', mainTopics: '非均匀场中的运动（磁瓶/汇聚场）、交叉电磁场、相对论修正', examLevel: '复赛/决赛', frequency: '高', prerequisiteKnowledge: ['CK12', 'CK18'], content: '', trainingQuestions: [] },
  { id: 'CB09', name: '波动光学综合模型', mainTopics: '多缝干涉+衍射综合、偏振光的干涉、光栅缺级与重叠', examLevel: '复赛', frequency: '高', prerequisiteKnowledge: ['CK16'], content: '', trainingQuestions: [] },
  { id: 'CB10', name: '热力学过程综合', mainTopics: '非理想气体过程、熵变计算、多过程循环效率、相变', examLevel: '复赛/决赛', frequency: '中', prerequisiteKnowledge: ['CK08', 'CK09'], content: '', trainingQuestions: [] },
  { id: 'CB11', name: '相对论动力学模型', mainTopics: '相对论粒子碰撞、康普顿散射定量、质能关系在核反应中的应用', examLevel: '复赛', frequency: '中', prerequisiteKnowledge: ['CK18'], content: '', trainingQuestions: [] },
  { id: 'CB12', name: '原子物理综合', mainTopics: '氢原子能级跃迁（含精细结构）、电子轨道、X射线特征谱', examLevel: '复赛', frequency: '中', prerequisiteKnowledge: ['CK19'], content: '', trainingQuestions: [] },
  { id: 'CB13', name: '核反应与衰变模型', mainTopics: '衰变链、核反应方程配平、结合能计算、裂变聚变能量释放', examLevel: '预赛/复赛', frequency: '中', prerequisiteKnowledge: ['CK20'], content: '', trainingQuestions: [] },
  { id: 'CB14', name: '变分法与拉格朗日力学', mainTopics: '最速降线、最短路径、拉格朗日方程建立、广义坐标选取', examLevel: '决赛', frequency: '中', prerequisiteKnowledge: ['CK06', 'CK27'], content: '', trainingQuestions: [] },
  { id: 'CB15', name: '物理实验设计模型', mainTopics: '实验方案设计、误差分析、数据处理（线性化/最小二乘法）、创新实验', examLevel: '复赛/决赛', frequency: '高（实验题）', prerequisiteKnowledge: ['CK22', 'CK23', 'CK24', 'CK25'], content: '', trainingQuestions: [] },
]

// 政策指南条目（8条）
export const PHYSICS_COMPETITION_GUIDE: CompetitionGuideEntry[] = [
  { id: 'CP01', title: 'CPhO 竞赛概述', subtitle: '历史、层级、IPhO', content: '', updateFrequency: '静态' },
  { id: 'CP02', title: '参赛资格与报名流程', subtitle: '报名渠道、时间节点', content: '', updateFrequency: '每年更新' },
  { id: 'CP03', title: '各阶段考试形式与难度', subtitle: '预赛/复赛/决赛', content: '', updateFrequency: '静态' },
  { id: 'CP04', title: '获奖等级与升学优惠', subtitle: '省一/国集/强基破格', content: '', updateFrequency: '每年更新' },
  { id: 'CP05', title: '各省竞赛水平与名额', subtitle: '省队名额分配、竞赛强省', content: '', updateFrequency: '每年更新' },
  { id: 'CP06', title: '竞赛 vs 强基 vs 高考的选择', subtitle: '三条路的投入产出对比', content: '', updateFrequency: '静态' },
  { id: 'CP07', title: '竞赛学习资源推荐', subtitle: '经典教材、在线资源、是否报班', content: '', updateFrequency: '静态' },
  { id: 'CP08', title: 'IPhO 与 APhO 简介', subtitle: '亚洲/国际物理奥赛', content: '', updateFrequency: '静态' },
]

// 备考路径（六阶段）
export const PHYSICS_COMPETITION_PATH: CompetitionPathStage[] = [
  { phase: '高一上', weeks: '第1-16周', target: '打基础 + 竞赛入门', hours: '约60小时', topics: ['同步学好高中物理（必修一/二）', '阅读竞赛科普，了解竞赛考什么', '学习微积分基础（求导/积分/极限）', 'CK26数学物理方法'] },
  { phase: '高一下', weeks: '第17-32周', target: '力学竞赛内容', hours: '约90小时', topics: ['CK01运动学 + CK02质点动力学', 'CB01刚体复合运动 + CB02多过程力学综合', '开始做预赛力学真题', 'CK27常微分方程'] },
  { phase: '高二上', weeks: '第33-48周', target: '电磁学竞赛内容', hours: '约130小时', topics: ['CK10-CK12静电场/稳恒电流/静磁场', 'CB05复杂电路网络 + CB06介质电磁场', '开始做预赛电磁学真题'] },
  { phase: '高二下', weeks: '第49-64周', target: '热学+光学+近代物理', hours: '约120小时', topics: ['CK07-CK09 + CK15-CK21 + CB03-CB04 + CB09-CB13', 'CE01-CE09全部过一遍', '开始做复赛真题（按板块分类训练）'] },
  { phase: '高二暑假', weeks: '第65-70周', target: '集中强化', hours: '约120小时', topics: ['薄弱板块专项突破', '完整复赛模拟卷（计时）', '标志：能独立解决复赛中80%以上的题目'] },
  { phase: '高三上', weeks: '第71-80周', target: '冲刺', hours: '约100小时', topics: ['按板块做复赛真题（查漏补缺）', '3-5套完整复赛模拟卷', '9月中旬：预赛 → 9月下旬冲刺复赛 → 10月：复赛', '如进入省队：10-11月决赛集训 → 11月决赛'] },
]

// 实验专题条目（9条）
export const PHYSICS_COMPETITION_EXPERIMENTS: CompetitionExamSection[] = [
  { id: 'CE01', title: '误差理论基础', content: '' },
  { id: 'CE02', title: '数据处理方法', content: '' },
  { id: 'CE03', title: '基本仪器使用', content: '' },
  { id: 'CE04', title: '力学实验', content: '' },
  { id: 'CE05', title: '热学实验', content: '' },
  { id: 'CE06', title: '电学实验', content: '' },
  { id: 'CE07', title: '光学实验', content: '' },
  { id: 'CE08', title: '实验设计方法', content: '' },
  { id: 'CE09', title: '历年实验真题精讲', content: '' },
]

// 五科竞赛概览（用于竞赛首页）
export const FIVE_SUBJECT_COMPETITIONS = [
  {
    id: 'physics',
    name: '物理竞赛',
    code: 'CPhO',
    fullName: '全国中学生物理竞赛',
    color: '#3b82f6',
    level: '预赛→复赛→决赛',
    examDate: '9-10月',
    experiment: '有（约40%）',
    mathDemand: '较高',
    studyCycle: '2-3年',
    contentStatus: 'partial',
    href: '/competition/physics',
    modules: PHYSICS_COMPETITION_MODULES,
  },
  {
    id: 'math',
    name: '数学竞赛',
    code: 'CMO',
    fullName: '全国中学生数学奥林匹克竞赛',
    color: '#8b5cf6',
    level: '预赛→联赛→决赛',
    examDate: '每年9月/11月',
    experiment: '无',
    mathDemand: '极大',
    studyCycle: '2-3年',
    contentStatus: 'partial',
    href: '/competition/math',
    modules: [
      { id: 'guide', label: '政策与赛事指南', icon: 'Trophy', description: '竞赛历史、赛制、奖项等级、升学政策' },
      { id: 'outline', label: '知识大纲', icon: 'BookOpen', description: '四大板块，数十个知识点' },
      { id: 'models', label: '核心模型详解', icon: 'Lightbulb', description: '竞赛高频题型分类精讲' },
      { id: 'papers', label: '真题训练', icon: 'FileText', description: '历年预赛/联赛/IMO真题' },
      { id: 'experiment', label: '竞赛数学基础', icon: 'Calculator', description: '竞赛必备的大学数学工具' },
      { id: 'path', label: '备考路径', icon: 'Route', description: '从入门到集训队的系统规划' },
    ],
  },
  {
    id: 'chemistry',
    name: '化学竞赛',
    code: 'CChO',
    fullName: '中国化学奥林匹克竞赛',
    color: '#10b981',
    level: '预赛→初赛→决赛',
    examDate: '每年4月/8月/11月',
    experiment: '有（约30%）',
    mathDemand: '中等',
    studyCycle: '2-3年',
    contentStatus: 'partial',
    href: '/competition/chemistry',
    modules: [
      { id: 'guide', label: '政策与赛事指南', icon: 'Trophy', description: '竞赛历史、赛制、奖项等级、升学政策' },
      { id: 'outline', label: '知识大纲', icon: 'BookOpen', description: '四大板块，数十个知识点' },
      { id: 'models', label: '核心模型详解', icon: 'Lightbulb', description: '竞赛高频考点分类精讲' },
      { id: 'papers', label: '真题训练', icon: 'FileText', description: '历年预赛/初赛/决赛真题' },
      { id: 'experiment', label: '实验专题', icon: 'FlaskConical', description: '决赛实验占约40%' },
      { id: 'path', label: '备考路径', icon: 'Route', description: '从入门到国家集训队的系统规划' },
    ],
  },
  {
    id: 'biology',
    name: '生物竞赛',
    code: 'CBO',
    fullName: '全国中学生生物学奥林匹克竞赛',
    color: '#f59e0b',
    level: '联赛→决赛',
    examDate: '每年5月/7月',
    experiment: '有（约30%）',
    mathDemand: '较低',
    studyCycle: '1.5-2年',
    contentStatus: 'partial',
    href: '/competition/biology',
    modules: [
      { id: 'guide', label: '政策与赛事指南', icon: 'Trophy', description: '竞赛历史、赛制、奖项等级、升学政策' },
      { id: 'outline', label: '知识大纲', icon: 'BookOpen', description: '六大板块，大学知识降维' },
      { id: 'models', label: '核心模型详解', icon: 'Lightbulb', description: '竞赛高频知识点分类精讲' },
      { id: 'papers', label: '真题训练', icon: 'FileText', description: '历年联赛/决赛真题' },
      { id: 'experiment', label: '实验专题', icon: 'FlaskConical', description: '决赛实验占约30%' },
      { id: 'path', label: '备考路径', icon: 'Route', description: '从入门到国家集训队的系统规划' },
    ],
  },
  {
    id: 'cs',
    name: '信息学竞赛',
    code: 'NOIP',
    fullName: '全国青少年信息学奥林匹克竞赛',
    color: '#06b6d4',
    level: 'CSP-J/S→NOIP→省选→NOI',
    examDate: '每年10月/11月',
    experiment: '无（纯机试）',
    mathDemand: '较高',
    studyCycle: '1-3年',
    contentStatus: 'partial',
    href: '/competition/cs',
    modules: [
      { id: 'guide', label: '政策与赛事指南', icon: 'Trophy', description: '竞赛历史、赛制、奖项等级、升学政策' },
      { id: 'outline', label: '知识大纲', icon: 'BookOpen', description: '四大板块，系统算法知识' },
      { id: 'models', label: '核心模型详解', icon: 'Lightbulb', description: '竞赛高频算法分类精讲' },
      { id: 'papers', label: '真题训练', icon: 'FileText', description: '历年CSP/NOIP/NOI真题' },
      { id: 'experiment', label: '数学基础', icon: 'Calculator', description: '竞赛必备的离散数学基础' },
      { id: 'path', label: '备考路径', icon: 'Route', description: '从入门到国家集训队的系统规划' },
    ],
  },
]