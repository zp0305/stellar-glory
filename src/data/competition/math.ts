/**
 * 数学竞赛数据
 * 依据：五大学科竞赛内容规划.md §四（数学竞赛）
 *
 * CMO 全国中学生数学奥林匹克竞赛
 * 预赛（各省市）→ 复赛（省级）→ 决赛（全国）→ 国家集训队 → IMO
 */

import type {
  CompetitionGuideEntry,
  CompetitionKnowledgeEntry,
  CompetitionModel,
  CompetitionPathStage,
  CompetitionExamSection,
} from './physics'

// ── 五科竞赛总览入口 ──────────────────────────────────────
// 数学竞赛入口（更新五科总览中的数学条目）
export const MATH_COMPETITION_ENTRY = {
  id: 'math',
  name: '数学竞赛',
  code: 'CMO',
  fullName: '全国中学生数学奥林匹克竞赛',
  level: '预赛→复赛→决赛',
  examDate: '每年9月/11月/次年3月',
  experiment: '无实验',
  studyCycle: '2-3年',
  contentStatus: 'partial',
  color: '#8b5cf6',
  href: '/competition/math',
}

// ── 六大模块配置 ──────────────────────────────────────────
export const MATH_COMPETITION_MODULES = [
  { id: 'guide', label: '政策与赛事指南', icon: 'Trophy', description: '竞赛历史、赛制、奖项等级、升学政策' },
  { id: 'outline', label: '知识大纲', icon: 'BookOpen', description: '四大板块，数十个知识点' },
  { id: 'models', label: '核心模型详解', icon: 'Lightbulb', description: '竞赛高频题型分类精讲' },
  { id: 'papers', label: '真题训练', icon: 'FileText', description: '历年预赛/联赛/IMO真题' },
  { id: 'experiment', label: '竞赛数学基础', icon: 'Calculator', description: '竞赛必备的大学数学工具' },
  { id: 'path', label: '备考路径', icon: 'Route', description: '从入门到集训队的系统规划' },
] as const

// ── 知识大纲四大板块 ──────────────────────────────────────
export const MATH_OUTLINE_BLOCKS = [
  { id: 'B01', name: '代数', weight: '约30-35%', topics: ['函数与不等式', '数列与递推', '复数与多项式', '矩阵与线性代数初步'] },
  { id: 'B02', name: '几何', weight: '约25-30%', topics: ['平面几何', '立体几何', '解析几何（竞赛级）', '射影几何初步'] },
  { id: 'B03', name: '组合数学', weight: '约20-25%', topics: ['计数原理', '图论初步', '组合几何', '组合构造与存在性'] },
  { id: 'B04', name: '数论', weight: '约15-20%', topics: ['整除与同余', '不定方程', '素数分布', '数论函数'] },
] as const

// ── 政策指南（CM01-CM08）────────────────────────────────
export const MATH_COMPETITION_GUIDE: CompetitionGuideEntry[] = [
  { id: 'CM01', title: '数学奥林匹克竞赛概述', subtitle: '历史、现状与意义', content: '', updateFrequency: '静态' },
  { id: 'CM02', title: '竞赛赛制详解', subtitle: '预赛→联赛→决赛→集训队→IMO', content: '', updateFrequency: '每年更新' },
  { id: 'CM03', title: '奖项等级与作用', subtitle: '省一/省队/金牌/集训队对应的升学价值', content: '', updateFrequency: '每年更新' },
  { id: 'CM04', title: '初学入门路径', subtitle: '初中竞赛基础 → 高中竞赛入门', content: '', updateFrequency: '静态' },
  { id: 'CM05', title: '一试与二试的区别', subtitle: '一试填空解答 vs 二试四道大题', content: '', updateFrequency: '静态' },
  { id: 'CM06', title: '数学竞赛与强基计划', subtitle: '数学竞赛一等奖在强基中的优势', content: '', updateFrequency: '每年更新' },
  { id: 'CM07', title: '数学竞赛与物理/信息学', subtitle: '跨学科竞赛的协同效应', content: '', updateFrequency: '静态' },
  { id: 'CM08', title: '常见误区与备考建议', subtitle: '避免题海战术，注重思维深度', content: '', updateFrequency: '静态' },
]

// ── 知识大纲条目（MK = Math Knowledge）───────────────────
export const MATH_KNOWLEDGE_ENTRIES: CompetitionKnowledgeEntry[] = [
  // 代数
  { id: 'MK01', title: '函数与不等式', universityCourse: '数学分析', coreRequirements: '凸函数与琴生不等式、AM-GM、柯西不等式的各种变形、构造函数法', examWeight: '约30-35%', content: '' },
  { id: 'MK02', title: '数列与递推', universityCourse: '数学分析/线性代数', coreRequirements: '特征根法求递推通项、连分数、不动点法、生成函数初步', examWeight: '约30-35%', content: '' },
  { id: 'MK03', title: '复数与多项式', universityCourse: '高等代数', coreRequirements: '单位根性质、多项式根的讨论、韦达定理的高阶应用、对称多项式', examWeight: '约30-35%', content: '' },
  { id: 'MK04', title: '矩阵与线性代数初步', universityCourse: '线性代数', coreRequirements: '行列式计算技巧、矩阵秩的不等式、特征值应用', examWeight: '约30-35%', content: '' },
  // 几何
  { id: 'MK05', title: '平面几何（竞赛级）', universityCourse: '平面几何', coreRequirements: '梅涅劳斯/塞瓦定理、共圆共线问题、几何变换（平移/旋转/位似/反演）、根轴与幂', examWeight: '约25-30%', content: '' },
  { id: 'MK06', title: '立体几何（竞赛级）', universityCourse: '空间几何', coreRequirements: '空间向量法、截面问题、折叠与展开、多面体外接球/内切球', examWeight: '约25-30%', content: '' },
  { id: 'MK07', title: '解析几何（竞赛级）', universityCourse: '解析几何', coreRequirements: '参数方程与极坐标、圆锥曲线焦半径性质、坐标变换与仿射变换', examWeight: '约25-30%', content: '' },
  { id: 'MK08', title: '射影几何初步', universityCourse: '射影几何', coreRequirements: '笛沙格定理、完全四边形、对合、调和点列', examWeight: '约25-30%', content: '' },
  // 组合数学
  { id: 'MK09', title: '计数原理', universityCourse: '组合数学', coreRequirements: '排列组合高级技巧、容斥原理、抽屉原理（Dirichlet原理）、斯特林数', examWeight: '约20-25%', content: '' },
  { id: 'MK10', title: '图论初步', universityCourse: '图论', coreRequirements: '树的性质、欧拉回路与哈密顿回路、二部图、平面图与欧拉公式', examWeight: '约20-25%', content: '' },
  { id: 'MK11', title: '组合几何', universityCourse: '组合几何', coreRequirements: '覆盖与嵌入、拉姆塞定理、组合数论交叉问题', examWeight: '约20-25%', content: '' },
  { id: 'MK12', title: '组合构造与存在性', universityCourse: '组合数学', coreRequirements: '极值组合、存在性证明（概率方法/贪心构造）、递归与递推构造', examWeight: '约20-25%', content: '' },
  // 数论
  { id: 'MK13', title: '整除与同余', universityCourse: '初等数论', coreRequirements: '最大公约数与最小公倍数、费马小定理与欧拉定理、中国剩余定理、阶与原根', examWeight: '约15-20%', content: '' },
  { id: 'MK14', title: '不定方程', universityCourse: '初等数论', coreRequirements: '佩尔方程、平方和定理、高次同余方程的解法', examWeight: '约15-20%', content: '' },
  { id: 'MK15', title: '素数分布', universityCourse: '解析数论初步', coreRequirements: '素数定理（了解）、Bertrand假设、n!中的素因子', examWeight: '约15-20%', content: '' },
  { id: 'MK16', title: '数论函数', universityCourse: '初等数论', coreRequirements: '欧拉函数、莫比乌斯函数、除数函数、积性函数性质', examWeight: '约15-20%', content: '' },
]

// ── 核心模型（MM = Math Model）───────────────────────────
export const MATH_COMPETITION_MODELS: CompetitionModel[] = [
  { id: 'MM01', name: '不等式证明综合', mainTopics: '柯西、琴生、AM-GM的综合应用', examLevel: '复赛', frequency: '极高', prerequisiteKnowledge: ['MK01', 'MK02'], content: '', trainingQuestions: [] },
  { id: 'MM02', name: '递推数列构造', mainTopics: '特征根、不动点、生成函数', examLevel: '复赛', frequency: '极高', prerequisiteKnowledge: ['MK02', 'MK16'], content: '', trainingQuestions: [] },
  { id: 'MM03', name: '平面几何四大定理', mainTopics: '梅涅劳斯、塞瓦、托勒密、西姆松', examLevel: '复赛', frequency: '高', prerequisiteKnowledge: ['MK05'], content: '', trainingQuestions: [] },
  { id: 'MM04', name: '几何变换综合', mainTopics: '反演、位似、旋转复合', examLevel: '决赛', frequency: '高', prerequisiteKnowledge: ['MK05', 'MK07'], content: '', trainingQuestions: [] },
  { id: 'MM05', name: '图论经典问题', mainTopics: '欧拉回路、哈密顿回路、树与生成树', examLevel: '复赛', frequency: '高', prerequisiteKnowledge: ['MK10'], content: '', trainingQuestions: [] },
  { id: 'MM06', name: '组合构造存在性', mainTopics: '概率方法、贪心构造、对称性', examLevel: '决赛', frequency: '高', prerequisiteKnowledge: ['MK09', 'MK12'], content: '', trainingQuestions: [] },
  { id: 'MM07', name: '数论综合证明', mainTopics: '费马小定理、欧拉定理、中国剩余定理联合', examLevel: '复赛', frequency: '极高', prerequisiteKnowledge: ['MK13', 'MK14'], content: '', trainingQuestions: [] },
  { id: 'MM08', name: '多变量函数最值', mainTopics: '配方法、均值不等式链、拉格朗日乘数法', examLevel: '复赛', frequency: '高', prerequisiteKnowledge: ['MK01', 'MK04'], content: '', trainingQuestions: [] },
  { id: 'MM09', name: '圆锥曲线竞赛结论', mainTopics: '焦半径、硬解定理、极点极线', examLevel: '复赛', frequency: '高', prerequisiteKnowledge: ['MK07'], content: '', trainingQuestions: [] },
  { id: 'MM10', name: '集合与组合计数', mainTopics: '容斥原理、排列组合综合、集合划分', examLevel: '复赛', frequency: '极高', prerequisiteKnowledge: ['MK09', 'MK12'], content: '', trainingQuestions: [] },
]

// ── 备考路径 ─────────────────────────────────────────────
export const MATH_COMPETITION_PATH: CompetitionPathStage[] = [
  { phase: '第一阶段：基础构建', weeks: '高一开始，约40周', target: '学完一试全部内容', hours: '约500小时', topics: ['高中课内数学竞赛化（函数/数列/三角/向量）', '平面几何竞赛级训练（梅涅劳斯/塞瓦/托勒密）', '初等数论基础（整除/同余/不定方程）', '计数基础（排列组合/二项式定理）', '一试填空题系统训练'] },
  { phase: '第二阶段：深度突破', weeks: '高一下~高二上，约30周', target: '联赛二等奖/一等奖', hours: '约600小时', topics: ['代数不等式深度训练（柯西/琴生/AM-GM）', '二试四道大题分类突破（几何/代数/组合/数论）', '历年联赛真题精讲（2010-2024）', '图论与组合构造入门', '模拟题限时训练'] },
  { phase: '第三阶段：冲刺决赛', weeks: '高二下~高三，约20周', target: '省队/金牌', hours: '约400小时', topics: ['二试难题深度突破', 'IMO真题研究（近10年）', '冬令营/集训队内容预热', '心理调适与考场策略'] },
]

// ── 竞赛数学基础（替代"实验"模块的概念，数学无实验）────
export const MATH_COMPETITION_FOUNDATIONS: CompetitionExamSection[] = [
  { id: 'MF01', title: '微积分初步', content: '极限、导数、积分的基本计算技巧，Taylor展开初步' },
  { id: 'MF02', title: '线性代数基础', content: '行列式计算、矩阵基本运算、特征值与特征向量初步' },
  { id: 'MF03', title: '初等数论进阶', content: '数论中的构造与存在性证明方法' },
  { id: 'MF04', title: '概率与统计初步', content: '概率方法在组合数学中的应用、期望与方差' },
  { id: 'MF05', title: '复数与多项式', content: '单位根、韦达定理进阶、多项式根的分布' },
]
