/**
 * 信息学竞赛数据
 * 依据：五大学科竞赛内容规划.md §七（信息学竞赛）
 *
 * CSP-J/S → NOIP → 省选 → NOI → 国家集训队 → IOI
 *
 * 注意：只做知识内容，不做OJ判题系统
 * 知识模块：算法与数据结构、组合数学、计算机基础
 */

import type {
  CompetitionGuideEntry,
  CompetitionKnowledgeEntry,
  CompetitionModel,
  CompetitionPathStage,
  CompetitionExamSection,
} from './physics'

// ── 五科竞赛总览入口 ──────────────────────────────────────
export const CS_COMPETITION_ENTRY = {
  id: 'cs',
  name: '信息学竞赛',
  code: 'NOIP',
  fullName: '全国青少年信息学奥林匹克竞赛',
  level: 'CSP-J/S→NOIP→省选→NOI',
  examDate: '每年10月/11月',
  experiment: '无实验（纯机试）',
  studyCycle: '1-3年',
  contentStatus: 'partial',
  color: '#06b6d4',
  href: '/competition/cs',
}

// ── 六大模块配置 ──────────────────────────────────────────
export const CS_COMPETITION_MODULES = [
  { id: 'guide', label: '政策与赛事指南', icon: 'Trophy', description: '竞赛历史、赛制、奖项等级、升学政策' },
  { id: 'outline', label: '知识大纲', icon: 'BookOpen', description: '四大板块，系统算法知识' },
  { id: 'models', label: '核心模型详解', icon: 'Lightbulb', description: '竞赛高频算法分类精讲' },
  { id: 'papers', label: '真题训练', icon: 'FileText', description: '历年CSP/NOIP/NOI真题（知识内容）' },
  { id: 'experiment', label: '数学基础', icon: 'Calculator', description: '竞赛必备的离散数学基础' },
  { id: 'path', label: '备考路径', icon: 'Route', description: '从入门到国家集训队的系统规划' },
] as const

// ── 知识大纲四大板块 ──────────────────────────────────────
export const CS_OUTLINE_BLOCKS = [
  { id: 'B01', name: '基础算法', weight: '约30-35%', topics: ['排序与查找', '分治与递归', '贪心算法', '动态规划（DP）', '二分与倍增'] },
  { id: 'B02', name: '数据结构', weight: '约25-30%', topics: ['线性结构（栈/队列/链表）', '树形结构（二叉树/堆/Trie）', '图结构（存图/遍历/最短路）', '并查集', '线段树/树状数组'] },
  { id: 'B03', name: '图论', weight: '约20-25%', topics: ['图的遍历与连通性', '最短路径算法（Dijkstra/Bellman-Ford/Floyd）', '最小生成树', '网络流初步', '二分图匹配'] },
  { id: 'B04', name: '数学基础', weight: '约15-20%', topics: ['数论基础（模运算/快速幂/素数）', '组合数学（计数/排列组合/容斥）', '概率与期望', '矩阵快速幂', '博弈论初步'] },
] as const

// ── 政策指南（CS01-CS08）────────────────────────────────
export const CS_COMPETITION_GUIDE: CompetitionGuideEntry[] = [
  { id: 'CS01', title: '信息学奥林匹克竞赛概述', subtitle: '历史、现状与IOI体系', content: '', updateFrequency: '静态' },
  { id: 'CS02', title: '竞赛赛制详解', subtitle: 'CSP-J/S → NOIP → 省选 → NOI → 集训队 → IOI', content: '', updateFrequency: '每年更新' },
  { id: 'CS03', title: '奖项等级与作用', subtitle: '省二/省一/金牌/集训队的升学价值', content: '', updateFrequency: '每年更新' },
  { id: 'CS04', title: '编程语言选择', subtitle: 'C++为主（必须掌握）、Python辅助', content: '', updateFrequency: '静态' },
  { id: 'CS05', title: 'CSP-J与CSP-S的区别', subtitle: '入门级 vs 提高级', content: '', updateFrequency: '静态' },
  { id: 'CS06', title: '信息学竞赛与强基计划', subtitle: '竞赛一等奖在强基中的优势', content: '', updateFrequency: '每年更新' },
  { id: 'CS07', title: '信息学竞赛与计算机专业', subtitle: 'OI背景对大学CS学习的优势', content: '', updateFrequency: '静态' },
  { id: 'CS08', title: '常见误区与备考建议', subtitle: '避免题海战术，注重算法思维培养', content: '', updateFrequency: '静态' },
]

// ── 知识大纲条目（IK = Informatics Knowledge）───────────
export const CS_KNOWLEDGE_ENTRIES: CompetitionKnowledgeEntry[] = [
  // 基础算法
  { id: 'IK01', title: '排序与查找', universityCourse: '算法与数据结构', coreRequirements: 'O(n log n)排序算法（快排/归并/堆排）、二分查找及其变体', examWeight: '约30-35%', content: '' },
  { id: 'IK02', title: '分治与递归', universityCourse: '算法设计', coreRequirements: '分治思想、递归与递推的转换、分治归并排序、最近点对', examWeight: '约30-35%', content: '' },
  { id: 'IK03', title: '贪心算法', universityCourse: '算法设计', coreRequirements: '贪心正确性证明、区间调度、背包变种、活动选择问题', examWeight: '约30-35%', content: '' },
  { id: 'IK04', title: '动态规划（DP）', universityCourse: '算法设计', coreRequirements: '状态定义、转移方程、空间优化（滚动数组）、常见DP类型（线性/区间/树形/概率）', examWeight: '约30-35%', content: '' },
  { id: 'IK05', title: '二分与倍增', universityCourse: '算法设计', coreRequirements: '二分答案、二分查找、倍增思想（RMQ/LCA）、二分图判定', examWeight: '约30-35%', content: '' },
  // 数据结构
  { id: 'IK06', title: '线性结构', universityCourse: '数据结构', coreRequirements: '栈/队列/链表实现与应用、单调栈/单调队列、双端队列', examWeight: '约25-30%', content: '' },
  { id: 'IK07', title: '树形结构', universityCourse: '数据结构', coreRequirements: '二叉树遍历与性质、堆（优先队列）的实现与应用、Trie树', examWeight: '约25-30%', content: '' },
  { id: 'IK08', title: '图结构基础', universityCourse: '数据结构/图论', coreRequirements: '邻接矩阵/邻接表、DFS/BFS遍历、连通分量、欧拉回路', examWeight: '约25-30%', content: '' },
  { id: 'IK09', title: '并查集', universityCourse: '数据结构', coreRequirements: '集合合并与查询、路径压缩与按秩合并、带权并查集', examWeight: '约25-30%', content: '' },
  { id: 'IK10', title: '线段树与树状数组', universityCourse: '数据结构', coreRequirements: '区间查询/更新、单点更新/区间最值LazyPropagation', examWeight: '约25-30%', content: '' },
  // 图论
  { id: 'IK11', title: '最短路径', universityCourse: '图论/算法', coreRequirements: 'Dijkstra（含堆优化）、Bellman-Ford、Floyd-Warshall', examWeight: '约20-25%', content: '' },
  { id: 'IK12', title: '最小生成树', universityCourse: '图论', coreRequirements: 'Prim算法、Kruskal算法及其正确性证明', examWeight: '约20-25%', content: '' },
  { id: 'IK13', title: '网络流初步', universityCourse: '图论/算法', coreRequirements: '最大流/最小割定理、Edmonds-Karp算法、dinic算法初步', examWeight: '约20-25%', content: '' },
  { id: 'IK14', title: '二分图匹配', universityCourse: '图论', coreRequirements: '匈牙利算法、KM算法、覆盖集与匹配的关系', examWeight: '约20-25%', content: '' },
  // 数学基础
  { id: 'IK15', title: '数论基础', universityCourse: '数论/离散数学', coreRequirements: '快速幂、扩展欧几里得算法、模运算、中国剩余定理', examWeight: '约15-20%', content: '' },
  { id: 'IK16', title: '素数与筛选', universityCourse: '数论', coreRequirements: '埃氏筛法、欧拉筛法、素数定理Miller-Rabin初步', examWeight: '约15-20%', content: '' },
  { id: 'IK17', title: '组合数学', universityCourse: '组合数学', coreRequirements: '排列组合计数、容斥原理、鸽巢原理、Lucas定理', examWeight: '约15-20%', content: '' },
  { id: 'IK18', title: '概率与期望', universityCourse: '概率论/算法', coreRequirements: '概率计算、期望的线性性、随机算法分析', examWeight: '约15-20%', content: '' },
  { id: 'IK19', title: '矩阵快速幂', universityCourse: '线性代数/算法', coreRequirements: '矩阵乘法与幂运算、在递推中的应用（斐波那契等）', examWeight: '约15-20%', content: '' },
]

// ── 核心模型（IC = Informatics Model）───────────────────
export const CS_COMPETITION_MODELS: CompetitionModel[] = [
  { id: 'IC01', name: '背包DP', mainTopics: '0/1背包/完全背包/多重背包、状态优化', examLevel: 'NOIP', frequency: '极高', prerequisiteKnowledge: ['IK04'], content: '', trainingQuestions: [] },
  { id: 'IC02', name: '区间DP', mainTopics: '石子合并、矩阵链乘、区间选点', examLevel: 'NOIP', frequency: '极高', prerequisiteKnowledge: ['IK04'], content: '', trainingQuestions: [] },
  { id: 'IC03', name: '树形DP', mainTopics: '树上选点、树的直径、最近公共祖先', examLevel: 'NOIP/NOI', frequency: '极高', prerequisiteKnowledge: ['IK04', 'IK07'], content: '', trainingQuestions: [] },
  { id: 'IC04', name: '最短路综合', mainTopics: '多源多终点最短路、次短路、差分约束', examLevel: 'NOIP', frequency: '极高', prerequisiteKnowledge: ['IK11'], content: '', trainingQuestions: [] },
  { id: 'IC05', name: '搜索与剪枝', mainTopics: 'DFS序、剪枝策略（可行性/最优性/记忆化）', examLevel: 'NOIP', frequency: '高', prerequisiteKnowledge: ['IK02'], content: '', trainingQuestions: [] },
  { id: 'IC06', name: '单调性与队列优化', mainTopics: '单调队列优化DP、滑动最值', examLevel: 'NOIP', frequency: '高', prerequisiteKnowledge: ['IK04', 'IK06'], content: '', trainingQuestions: [] },
  { id: 'IC07', name: 'Tarjan算法族', mainTopics: '强连通分量/割点/割边/LCA', examLevel: 'NOIP/NOI', frequency: '高', prerequisiteKnowledge: ['IK08', 'IK09'], content: '', trainingQuestions: [] },
  { id: 'IC08', name: '数论与多项式', mainTopics: 'FFT/NTT多项式乘法、生成函数初步', examLevel: 'NOI', frequency: '高', prerequisiteKnowledge: ['IK15', 'IK16'], content: '', trainingQuestions: [] },
]

// ── 备考路径 ─────────────────────────────────────────────
export const CS_COMPETITION_PATH: CompetitionPathStage[] = [
  { phase: '第一阶段：编程与算法入门', weeks: '初一开始，约40周', target: 'CSP-J一等奖', hours: '约400小时', topics: ['C++语言基础（语法/STL容器/algorithm库）', '基础算法（排序/查找/递归/贪心）', '基础数据结构（栈/队列/链表）', '简单动态规划（线性DP）', 'CSP-J真题系统训练'] },
  { phase: '第二阶段：提高与突破', weeks: '初一末~初三，约40周', target: 'CSP-S一等奖/NOIP一等奖', hours: '约800小时', topics: ['图论基础（DFS/BFS/最短路/最小生成树）', '高级数据结构（线段树/树状数组/并查集）', '树形DP与区间DP', '数论基础（快速幂/扩展欧几里得/素数）', 'NOIP真题精讲（2010-2024）'] },
  { phase: '第三阶段：冲刺NOI', weeks: '高一~高二，约30周', target: '省队/金牌/进入集训队', hours: '约600小时', topics: ['网络流与二分图匹配', '复杂DP优化（单调队列/斜率/四边形）', '高级数据结构（平衡树/可持久化/Treap）', '多项式与生成函数', 'NOI真题研究、冬令营训练'] },
]

// ── 数学基础（替代"实验"模块的概念）────────────────────
export const CS_COMPETITION_FOUNDATIONS: CompetitionExamSection[] = [
  { id: 'IF01', title: '离散数学基础', content: '集合、关系、函数、命题逻辑与证明方法（归纳/反证/构造）' },
  { id: 'IF02', title: '数论基础', content: '整除、同余、质数、模运算、费马小定理' },
  { id: 'IF03', title: '组合数学基础', content: '排列组合、容斥原理、抽屉原理、递推关系' },
  { id: 'IF04', title: '概率与信息论基础', content: '条件概率、贝叶斯公式、信息量与熵的初步概念' },
  { id: 'IF05', title: '线性代数基础', content: '矩阵运算、高斯消元、向量空间初步' },
]
