/**
 * 生物竞赛数据
 * 依据：五大学科竞赛内容规划.md §六（生物竞赛）
 *
 * CBO 全国中学生生物学奥林匹克竞赛
 * 联赛（省级）→ 决赛 → 国家集训队 → IBO
 *
 * 注：生物竞赛高度依赖大学知识（细胞生物学/遗传学/生态学/植物学/动物学/生化/分子）
 */

import type {
  CompetitionGuideEntry,
  CompetitionKnowledgeEntry,
  CompetitionModel,
  CompetitionPathStage,
  CompetitionExamSection,
} from './physics'

// ── 五科竞赛总览入口 ──────────────────────────────────────
export const BIOLOGY_COMPETITION_ENTRY = {
  id: 'biology',
  name: '生物竞赛',
  code: 'CBO',
  fullName: '全国中学生生物学奥林匹克竞赛',
  level: '联赛→决赛',
  examDate: '每年5月/7月',
  experiment: '决赛含实验',
  studyCycle: '1.5-2年',
  contentStatus: 'partial',
  color: '#f59e0b',
  href: '/competition/biology',
}

// ── 六大模块配置 ──────────────────────────────────────────
export const BIOLOGY_COMPETITION_MODULES = [
  { id: 'guide', label: '政策与赛事指南', icon: 'Trophy', description: '竞赛历史、赛制、奖项等级、升学政策' },
  { id: 'outline', label: '知识大纲', icon: 'BookOpen', description: '六大板块，大学知识降维' },
  { id: 'models', label: '核心模型详解', icon: 'Lightbulb', description: '竞赛高频知识点分类精讲' },
  { id: 'papers', label: '真题训练', icon: 'FileText', description: '历年联赛/决赛真题' },
  { id: 'experiment', label: '实验专题', icon: 'FlaskConical', description: '决赛实验占约30%' },
  { id: 'path', label: '备考路径', icon: 'Route', description: '从入门到国家集训队的系统规划' },
] as const

// ── 知识大纲六大板块 ──────────────────────────────────────
export const BIOLOGY_OUTLINE_BLOCKS = [
  { id: 'B01', name: '细胞生物学', weight: '约15-20%', topics: ['细胞结构与功能', '细胞代谢（呼吸/光合）', '细胞信号转导', '细胞分裂与周期'] },
  { id: 'B02', name: '遗传与进化', weight: '约20-25%', topics: ['孟德尔遗传', '连锁与交换', '基因突变与染色体变异', '进化理论', '群体遗传学初步'] },
  { id: 'B03', name: '植物解剖与生理', weight: '约10-15%', topics: ['植物组织', '植物营养', '光合作用深度', '植物激素', '植物生殖'] },
  { id: 'B04', name: '动物解剖与生理', weight: '约15-20%', topics: ['动物组织', '神经系统/内分泌系统', '循环/呼吸/排泄', '免疫系统'] },
  { id: 'B05', name: '生态学', weight: '约10-15%', topics: ['种群生态', '群落生态', '生态系统', '生物多样性', ' conservation'] },
  { id: 'B06', name: '生物化学与分子生物学', weight: '约15-20%', topics: ['蛋白质/酶', '核酸的结构与功能', '中心法则', '基因工程初步'] },
] as const

// ── 政策指南（CB01-CB08）────────────────────────────────
export const BIOLOGY_COMPETITION_GUIDE: CompetitionGuideEntry[] = [
  { id: 'CB01', title: '生物学奥林匹克竞赛概述', subtitle: '历史、现状与意义', content: '', updateFrequency: '静态' },
  { id: 'CB02', title: '竞赛赛制详解', subtitle: '联赛→决赛→集训队→IBO', content: '', updateFrequency: '每年更新' },
  { id: 'CB03', title: '奖项等级与作用', subtitle: '省二/省一/金牌/集训队的升学价值', content: '', updateFrequency: '每年更新' },
  { id: 'CB04', title: '初学入门路径', subtitle: '高中生物 → 竞赛生物的过渡策略', content: '', updateFrequency: '静态' },
  { id: 'CB05', title: '联赛与决赛的区别', subtitle: '纯理论 vs 理论+实验', content: '', updateFrequency: '静态' },
  { id: 'CB06', title: '生物竞赛与医学/生命科学', subtitle: '竞赛背景专业选择的优势', content: '', updateFrequency: '静态' },
  { id: 'CB07', title: '生物竞赛与化学竞赛', subtitle: '生化交叉的协同效应', content: '', updateFrequency: '静态' },
  { id: 'CB08', title: '常见误区与备考建议', subtitle: '大学知识降维学习的技巧', content: '', updateFrequency: '静态' },
]

// ── 知识大纲条目（BK = Biology Knowledge）────────────────
export const BIOLOGY_KNOWLEDGE_ENTRIES: CompetitionKnowledgeEntry[] = [
  // 细胞生物学
  { id: 'BK01', title: '细胞结构与功能', universityCourse: '细胞生物学', coreRequirements: '细胞器结构与功能对应关系、内膜系统、细胞骨架、细胞膜结构模型', examWeight: '约15-20%', content: '' },
  { id: 'BK02', title: '细胞代谢', universityCourse: '生物化学/细胞生物学', coreRequirements: '细胞呼吸（糖酵解/TCA/氧化磷酸化）、光合作用（光反应/暗反应/C3C4）', examWeight: '约15-20%', content: '' },
  { id: 'BK03', title: '细胞信号转导', universityCourse: '细胞生物学', coreRequirements: '信号分子、受体类型（GPCR/酶联受体）、第二信使、信号通路（cAMP/PIP3/MAPK）', examWeight: '约15-20%', content: '' },
  { id: 'BK04', title: '细胞分裂与周期', universityCourse: '细胞生物学', coreRequirements: '有丝分裂/减数分裂全过程、细胞周期调控（CDK/Cyclin）、癌细胞特征', examWeight: '约15-20%', content: '' },
  // 遗传与进化
  { id: 'BK05', title: '孟德尔遗传', universityCourse: '遗传学', coreRequirements: '分离定律/自由组合定律、遗传图谱、概率计算、家系分析', examWeight: '约20-25%', content: '' },
  { id: 'BK06', title: '连锁交换与基因定位', universityCourse: '遗传学', coreRequirements: '连锁规律、遗传距离计算、三点测交与基因顺序', examWeight: '约20-25%', content: '' },
  { id: 'BK07', title: '基因突变与染色体变异', universityCourse: '遗传学', coreRequirements: '突变类型、染色体结构/数目变异、遗传病', examWeight: '约20-25%', content: '' },
  { id: 'BK08', title: '群体遗传学初步', universityCourse: '群体遗传学', coreRequirements: '哈迪-温伯格定律、基因频率计算、影响基因频率变化的因素', examWeight: '约20-25%', content: '' },
  // 植物解剖与生理
  { id: 'BK09', title: '植物组织与营养', universityCourse: '植物学/植物生理学', coreRequirements: '分生/成熟/保护组织、维管束结构、水分吸收与运输、矿质营养', examWeight: '约10-15%', content: '' },
  { id: 'BK10', title: '光合作用深度', universityCourse: '植物生理学', coreRequirements: '光反应电子传递、碳同化途径（C3/C4/CAM）、光呼吸、光抑制', examWeight: '约10-15%', content: '' },
  { id: 'BK11', title: '植物激素', universityCourse: '植物生理学', coreRequirements: '五大激素（生长素/赤霉素/细胞分裂素/脱落酸/乙烯）合成途径与作用机制', examWeight: '约10-15%', content: '' },
  // 动物解剖与生理
  { id: 'BK12', title: '神经系统', universityCourse: '动物生理学/神经生物学', coreRequirements: '神经元结构、动作电位传导、突触传递、反射弧', examWeight: '约15-20%', content: '' },
  { id: 'BK13', title: '内分泌系统', universityCourse: '动物生理学', coreRequirements: '下丘脑-垂体轴、主要内分泌腺及其激素、反馈调节', examWeight: '约15-20%', content: '' },
  { id: 'BK14', title: '免疫系统', universityCourse: '免疫学', coreRequirements: '固有免疫/适应性免疫、B细胞/T细胞、抗体结构与功能、免疫调节', examWeight: '约15-20%', content: '' },
  // 生态学
  { id: 'BK15', title: '种群生态', universityCourse: '生态学', coreRequirements: '种群增长模型（J型/S型）、种内关系、种间关系（捕食/竞争/互利共生）', examWeight: '约10-15%', content: '' },
  { id: 'BK16', title: '群落与生态系统', universityCourse: '生态学', coreRequirements: '群落结构与演替、食物链与食物网、生态金字塔、碳循环/氮循环', examWeight: '约10-15%', content: '' },
  // 生化与分子
  { id: 'BK17', title: '酶与蛋白质', universityCourse: '生物化学', coreRequirements: '酶的分类与催化机制、酶动力学（米氏方程）、酶活性调节', examWeight: '约15-20%', content: '' },
  { id: 'BK18', title: '分子生物学基础', universityCourse: '分子生物学', coreRequirements: 'DNA复制/转录/翻译、基因表达调控、基因工程基本技术', examWeight: '约15-20%', content: '' },
]

// ── 核心模型（BB = Biology Model）───────────────────────
export const BIOLOGY_COMPETITION_MODELS: CompetitionModel[] = [
  { id: 'BB01', name: '遗传系谱分析', mainTopics: '常染色体/性连锁显隐性判断、概率计算', examLevel: '联赛', frequency: '极高', prerequisiteKnowledge: ['BK05', 'BK06'], content: '', trainingQuestions: [] },
  { id: 'BB02', name: '光合呼吸综合', mainTopics: 'C3/C4光合途径、净光合计算、细胞呼吸各阶段', examLevel: '联赛', frequency: '极高', prerequisiteKnowledge: ['BK02', 'BK10'], content: '', trainingQuestions: [] },
  { id: 'BB03', name: '神经-体液-免疫网络', mainTopics: '三大调节系统整合分析', examLevel: '联赛/决赛', frequency: '高', prerequisiteKnowledge: ['BK12', 'BK13', 'BK14'], content: '', trainingQuestions: [] },
  { id: 'BB04', name: '种群增长模型', mainTopics: '指数增长、Logistic增长、种群调节因素', examLevel: '联赛', frequency: '高', prerequisiteKnowledge: ['BK15'], content: '', trainingQuestions: [] },
  { id: 'BB05', name: '中心法则与基因表达', mainTopics: '复制/转录/翻译全流程、基因调控', examLevel: '联赛/决赛', frequency: '极高', prerequisiteKnowledge: ['BK18'], content: '', trainingQuestions: [] },
  { id: 'BB06', name: '能量流动与物质循环', mainTopics: '食物链效率、生态系统能量金字塔', examLevel: '联赛', frequency: '高', prerequisiteKnowledge: ['BK16'], content: '', trainingQuestions: [] },
  { id: 'BB07', name: '细胞代谢整合', mainTopics: '糖代谢/脂代谢/氨基酸代谢相互联系', examLevel: '联赛/决赛', frequency: '高', prerequisiteKnowledge: ['BK02', 'BK17'], content: '', trainingQuestions: [] },
  { id: 'BB08', name: '分子杂交与基因工程', mainTopics: '限制酶/连接酶/PCR/ Southern/Northern/Western blot', examLevel: '联赛/决赛', frequency: '高', prerequisiteKnowledge: ['BK18'], content: '', trainingQuestions: [] },
]

// ── 备考路径 ─────────────────────────────────────────────
export const BIOLOGY_COMPETITION_PATH: CompetitionPathStage[] = [
  { phase: '第一阶段：大学知识降维', weeks: '高一开始，约30周', target: '学完五本大学教材核心内容', hours: '约600小时', topics: ['细胞生物学（翟中和《细胞生物学》）', '生物化学（周德庆《生物化学教程》）', '遗传学（刘祖洞《遗传学》）', '动物/植物生理学初步', '联赛一试选择题系统训练'] },
  { phase: '第二阶段：深化与实验', weeks: '高一下~高二上，约30周', target: '联赛省一等奖', hours: '约500小时', topics: ['生态学与动物行为学', '微生物学初步', '进化生物学', '历年联赛真题精讲', '实验技能初步（显微镜/切片）'] },
  { phase: '第三阶段：冲刺决赛', weeks: '高二下~高三，约20周', target: '省队/金牌/进入集训队', hours: '约300小时', topics: ['决赛实验技能强化', '大学教材深度研读', '冬令营内容预热', '心理调适与考场策略'] },
]

// ── 实验专题 ─────────────────────────────────────────────
export const BIOLOGY_COMPETITION_EXPERIMENTS: CompetitionExamSection[] = [
  { id: 'BE01', title: '植物学实验', content: '植物组织切片观察、根/茎/叶结构、解剖操作' },
  { id: 'BE02', title: '动物学实验', content: '动物组织切片、常见动物解剖（蚯蚓/蝗虫/鱼）' },
  { id: 'BE03', title: '微生物学实验', content: '显微镜使用、细菌染色、菌落计数' },
  { id: 'BE04', title: '生化与分子实验', content: '酶活性测定、DNA提取、PCR原理' },
  { id: 'BE05', title: '生态学实验', content: '样方法、标志重捕法、生物统计初步' },
]
