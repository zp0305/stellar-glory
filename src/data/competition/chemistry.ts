/**
 * 化学竞赛数据
 * 依据：五大学科竞赛内容规划.md §五（化学竞赛）
 *
 * CChO 中国化学奥林匹克竞赛
 * 预赛（各省）→ 省选/初赛 → 决赛（冬令营）→ 国家集训队 → IChO
 */

import type {
  CompetitionGuideEntry,
  CompetitionKnowledgeEntry,
  CompetitionModel,
  CompetitionPathStage,
  CompetitionExamSection,
} from './physics'

// ── 五科竞赛总览入口 ──────────────────────────────────────
export const CHEMISTRY_COMPETITION_ENTRY = {
  id: 'chemistry',
  name: '化学竞赛',
  code: 'CChO',
  fullName: '中国化学奥林匹克竞赛',
  level: '预赛→初赛→决赛',
  examDate: '每年4月/8月/11月',
  experiment: '决赛含实验',
  studyCycle: '2-3年',
  contentStatus: 'partial',
  color: '#10b981',
  href: '/competition/chemistry',
}

// ── 六大模块配置 ──────────────────────────────────────────
export const CHEMISTRY_COMPETITION_MODULES = [
  { id: 'guide', label: '政策与赛事指南', icon: 'Trophy', description: '竞赛历史、赛制、奖项等级、升学政策' },
  { id: 'outline', label: '知识大纲', icon: 'BookOpen', description: '四大板块，数十个知识点' },
  { id: 'models', label: '核心模型详解', icon: 'Lightbulb', description: '竞赛高频考点分类精讲' },
  { id: 'papers', label: '真题训练', icon: 'FileText', description: '历年预赛/初赛/决赛真题' },
  { id: 'experiment', label: '实验专题', icon: 'FlaskConical', description: '决赛实验占约40%' },
  { id: 'path', label: '备考路径', icon: 'Route', description: '从入门到国家集训队的系统规划' },
] as const

// ── 知识大纲四大板块 ──────────────────────────────────────
export const CHEMISTRY_OUTLINE_BLOCKS = [
  { id: 'B01', name: '普通化学', weight: '约20-25%', topics: ['原子结构与周期律', '分子结构与化学键', '化学热力学基础', '化学动力学基础', '化学平衡'] },
  { id: 'B02', name: '有机化学', weight: '约30-35%', topics: ['有机化合物分类与命名', '反应机理（亲核/亲电/自由基）', '常见有机反应类型', '合成路线设计', '有机波谱分析'] },
  { id: 'B03', name: '无机化学', weight: '约25-30%', topics: ['主族元素化学', '过渡金属化学', '配位化学基础', '无机物制备与推断'] },
  { id: 'B04', name: '分析化学', weight: '约10-15%', topics: ['定性分析', '定量分析（滴定/重量法）', '仪器分析初步', '误差与分析数据处理'] },
] as const

// ── 政策指南（CC01-CC08）────────────────────────────────
export const CHEMISTRY_COMPETITION_GUIDE: CompetitionGuideEntry[] = [
  { id: 'CC01', title: '中国化学奥林匹克竞赛概述', subtitle: '历史、现状与意义', content: '', updateFrequency: '静态' },
  { id: 'CC02', title: '竞赛赛制详解', subtitle: '预赛→初赛→决赛（冬令营）→集训队→IChO', content: '', updateFrequency: '每年更新' },
  { id: 'CC03', title: '奖项等级与作用', subtitle: '省二/省一/金牌/集训队的升学价值', content: '', updateFrequency: '每年更新' },
  { id: 'CC04', title: '初学入门路径', subtitle: '高中化学 → 竞赛化学的过渡策略', content: '', updateFrequency: '静态' },
  { id: 'CC05', title: '初赛与决赛的区别', subtitle: '一试（理论）vs 二试（实验）', content: '', updateFrequency: '静态' },
  { id: 'CC06', title: '化学竞赛与强基计划', subtitle: '化学竞赛奖项在强基中的优势', content: '', updateFrequency: '每年更新' },
  { id: 'CC07', title: '化学竞赛与生物/医学', subtitle: '跨学科竞赛的协同效应', content: '', updateFrequency: '静态' },
  { id: 'CC08', title: '常见误区与备考建议', subtitle: '避免死记硬背，注重理解机理', content: '', updateFrequency: '静态' },
]

// ── 知识大纲条目（HK = Chemistry Knowledge）──────────────
export const CHEMISTRY_KNOWLEDGE_ENTRIES: CompetitionKnowledgeEntry[] = [
  // 普通化学
  { id: 'HK01', title: '原子结构与周期律', universityCourse: '结构化学', coreRequirements: '量子数、电子排布、周期律的本质、电离能与电子亲合能变化规律', examWeight: '约20-25%', content: '' },
  { id: 'HK02', title: '分子结构与化学键', universityCourse: '结构化学/量子化学', coreRequirements: '价键理论、分子轨道理论、杂化轨道、范德华力与氢键', examWeight: '约20-25%', content: '' },
  { id: 'HK03', title: '化学热力学基础', universityCourse: '物理化学', coreRequirements: '热力学第一/二定律、焓/熵/自由能、盖斯定律应用', examWeight: '约20-25%', content: '' },
  { id: 'HK04', title: '化学动力学基础', universityCourse: '物理化学', coreRequirements: '反应速率方程、活化能、阿伦尼乌斯方程、反应级数', examWeight: '约20-25%', content: '' },
  { id: 'HK05', title: '化学平衡', universityCourse: '物理化学', coreRequirements: '平衡常数计算、同离子效应、盐效应、酸碱平衡（pH缓冲）', examWeight: '约20-25%', content: '' },
  // 有机化学
  { id: 'HK06', title: '有机化合物分类与命名', universityCourse: '有机化学', coreRequirements: 'IUPAC命名法（环/立体/官能团优先级）、同分异构体系统分类', examWeight: '约30-35%', content: '' },
  { id: 'HK07', title: '有机反应机理', universityCourse: '有机化学', coreRequirements: '亲核取代/亲电取代/消除反应/加成反应、自由基反应、碳正离子稳定性', examWeight: '约30-35%', content: '' },
  { id: 'HK08', title: '常见有机反应类型', universityCourse: '有机化学', coreRequirements: '氧化/还原/加成/消除/取代反应、反应条件控制、产物立体化学', examWeight: '约30-35%', content: '' },
  { id: 'HK09', title: '有机合成路线设计', universityCourse: '有机合成', coreRequirements: '逆合成分析、官能团保护、立体选择性控制、合成子概念', examWeight: '约30-35%', content: '' },
  { id: 'HK10', title: '有机波谱分析', universityCourse: '有机分析', coreRequirements: 'IR/NMR/UV/质谱原理与应用、结构推导综合', examWeight: '约30-35%', content: '' },
  // 无机化学
  { id: 'HK11', title: '主族元素化学', universityCourse: '无机化学', coreRequirements: 's/p区元素性质递变规律、重要化合物（氧化物/氢化物/含氧酸盐）', examWeight: '约25-30%', content: '' },
  { id: 'HK12', title: '过渡金属化学', universityCourse: '无机化学', coreRequirements: 'd/f区元素特性、配位场理论（晶体场/配位场）、磁性', examWeight: '约25-30%', content: '' },
  { id: 'HK13', title: '配位化学基础', universityCourse: '配位化学', coreRequirements: '配合物命名、配位平衡（稳定常数）、配位反应类型、异构现象', examWeight: '约25-30%', content: '' },
  { id: 'HK14', title: '无机物制备与推断', universityCourse: '无机化学', coreRequirements: '常见物质制备方法、离子分离与鉴定、无机推断题技巧', examWeight: '约25-30%', content: '' },
  // 分析化学
  { id: 'HK15', title: '定量分析', universityCourse: '分析化学', coreRequirements: '酸碱滴定/氧化还原滴定/络合滴定/沉淀滴定、指示剂选择', examWeight: '约10-15%', content: '' },
  { id: 'HK16', title: '误差与分析数据处理', universityCourse: '分析化学', coreRequirements: '有效数字、不确定度传递、置信区间、显著性检验', examWeight: '约10-15%', content: '' },
]

// ── 核心模型（HC = Chemistry Model）──────────────────────
export const CHEMISTRY_COMPETITION_MODELS: CompetitionModel[] = [
  { id: 'HC01', name: '有机反应机理综合', mainTopics: 'SN1/SN2/E1/E2机理与条件判断', examLevel: '初赛/决赛', frequency: '极高', prerequisiteKnowledge: ['HK06', 'HK07'], content: '', trainingQuestions: [] },
  { id: 'HC02', name: '分子结构与成键分析', mainTopics: 'VSEPR/杂化/分子轨道综合应用', examLevel: '初赛', frequency: '极高', prerequisiteKnowledge: ['HK02'], content: '', trainingQuestions: [] },
  { id: 'HC03', name: '配位化合物', mainTopics: '配位数、几何异构、稳定常数、配体替换', examLevel: '初赛/决赛', frequency: '高', prerequisiteKnowledge: ['HK12', 'HK13'], content: '', trainingQuestions: [] },
  { id: 'HC04', name: '热力学与动力学综合', mainTopics: '盖斯定律、平衡常数、速率方程联合分析', examLevel: '初赛', frequency: '高', prerequisiteKnowledge: ['HK03', 'HK04', 'HK05'], content: '', trainingQuestions: [] },
  { id: 'HC05', name: '有机合成路线设计', mainTopics: '逆合成分析、保护基策略、立体化学控制', examLevel: '决赛', frequency: '极高', prerequisiteKnowledge: ['HK08', 'HK09'], content: '', trainingQuestions: [] },
  { id: 'HC06', name: '元素性质递变规律', mainTopics: '周期表规律应用、pH区元素特性', examLevel: '初赛', frequency: '高', prerequisiteKnowledge: ['HK01', 'HK11'], content: '', trainingQuestions: [] },
  { id: 'HC07', name: '定量分析计算', mainTopics: '滴定分析综合（多步滴定/混合碱/混合酸）', examLevel: '初赛', frequency: '高', prerequisiteKnowledge: ['HK15', 'HK16'], content: '', trainingQuestions: [] },
  { id: 'HC08', name: '有机波谱解析', mainTopics: 'NMR/IR/MS联合推导结构', examLevel: '初赛/决赛', frequency: '高', prerequisiteKnowledge: ['HK10'], content: '', trainingQuestions: [] },
]

// ── 备考路径 ─────────────────────────────────────────────
export const CHEMISTRY_COMPETITION_PATH: CompetitionPathStage[] = [
  { phase: '第一阶段：基础构建', weeks: '高一开始，约40周', target: '学完普通化学+有机化学基础', hours: '约500小时', topics: ['高中化学竞赛化拓展（原子结构/化学键/热力学）', '有机化学系统学习（命名→机理→反应→合成）', '元素化学基础（主族+过渡金属初步）', '初赛理论题系统训练'] },
  { phase: '第二阶段：深度突破', weeks: '高一下~高二上，约30周', target: '初赛一等奖', hours: '约600小时', topics: ['有机合成深度训练', '配位化学系统学习', '历年初赛真题精讲（2010-2024）', '无机与元素化学重点突破', '初赛模拟限时训练'] },
  { phase: '第三阶段：冲刺决赛', weeks: '高二下~高三，约20周', target: '省队/金牌/进入集训队', hours: '约400小时', topics: ['决赛实验技能训练', '有机合成路线设计专题', '结构化学深入（晶体场/分子轨道）', '冬令营内容预热', '心理调适与考场策略'] },
]

// ── 实验专题（决赛实验）────────────────────────────────
export const CHEMISTRY_COMPETITION_EXPERIMENTS: CompetitionExamSection[] = [
  { id: 'CE01', title: '定量分析实验', content: '酸碱滴定、络合滴定、氧化还原滴定：操作规范、终点判断、数据处理' },
  { id: 'CE02', title: '有机合成实验', content: '回流、蒸馏、重结晶、萃取：基本操作与产率计算' },
  { id: 'CE03', title: '无机合成与分离', content: '常见无机物的制备、离子分离与鉴定实验' },
  { id: 'CE04', title: '仪器分析实验', content: 'UV-Vis、红外光谱的定性分析应用' },
  { id: 'CE05', title: '实验数据处理', content: '误差分析、有效数字、平行测定结果处理' },
  { id: 'CE06', title: '综合实验设计', content: '从实验目的出发设计实验方案的能力' },
]
