import type { KnowledgePoint, Strategy, Question, GraphData } from '@/types'
import { registerSubject } from '../registry'
import { conceptDataMap, conceptList, getConceptMeta, getAllConceptIds } from './concepts'
import { modelDataMap, ALL_MODEL_IDS } from './models'
import { physicsModels } from './physicsModels'
import { allParadigms } from './paradigms'

const paradigmDataMap = new Map(allParadigms.map(p => [p.id, p]))
import { formulaChapters, formulas as allFormulas, searchFormulas } from './formulas'
import { modelQuestionStats, allQuestions, questionsByModel, DIFF_LABEL, DIFF_COLOR } from './questions'
import {
  LEVEL_OPTIONS,
  TARGET_OPTIONS,
  FUNCTION_OPTIONS,
  DIFFICULTY_D_OPTIONS,
  PHYSICS_TYPE_OPTIONS,
} from './questions/filters'

export const physicsMetadata = {
  id: 'PHY',
  name: '物理',
  name_en: 'Physics',
  color: '#3b82f6',
  modules: [
    {
      id: 'PHY-M01',
      title: '力学',
      order: 1,
      chapters: [
        { id: 'PHY-C01', name: '运动的描述', order: 1, knowledgeIds: ['PHY-K001', 'PHY-K002', 'PHY-K003', 'PHY-K004'] },
        { id: 'PHY-C02', name: '匀变速直线运动', order: 2, knowledgeIds: ['PHY-K005', 'PHY-K006', 'PHY-K007', 'PHY-K008'] },
        { id: 'PHY-C03', name: '相互作用', order: 3, knowledgeIds: [] },
        { id: 'PHY-C04', name: '牛顿运动定律', order: 4, knowledgeIds: [] },
      ],
    },
    {
      id: 'PHY-M02',
      title: '机械振动与机械波',
      order: 2,
      chapters: [
        { id: 'PHY-C05', name: '机械振动', order: 1, knowledgeIds: [] },
        { id: 'PHY-C06', name: '机械波', order: 2, knowledgeIds: [] },
      ],
    },
    {
      id: 'PHY-M03',
      title: '热学',
      order: 3,
      chapters: [{ id: 'PHY-C07', name: '分子动理论', order: 1, knowledgeIds: [] }],
    },
    {
      id: 'PHY-M04',
      title: '电学',
      order: 4,
      chapters: [{ id: 'PHY-C08', name: '静电场', order: 1, knowledgeIds: [] }],
    },
    {
      id: 'PHY-M05',
      title: '磁学',
      order: 5,
      chapters: [{ id: 'PHY-C09', name: '磁场', order: 1, knowledgeIds: [] }],
    },
    {
      id: 'PHY-M06',
      title: '光学',
      order: 6,
      chapters: [{ id: 'PHY-C10', name: '光的传播', order: 1, knowledgeIds: [] }],
    },
    {
      id: 'PHY-M07',
      title: '原子物理',
      order: 7,
      chapters: [{ id: 'PHY-C11', name: '原子结构', order: 1, knowledgeIds: [] }],
    },
  ],
}

export const sampleKnowledgePoints: KnowledgePoint[] = [
  {
    id: 'PHY-K001',
    subject: 'PHY',
    module: 'PHY-M01-力学',
    chapter: 'PHY-C01-运动的描述',
    title: '位置与位移',
    difficulty: 1,
    prerequisiteIds: [],
    relatedIds: ['PHY-K002', 'PHY-K003'],
    estimatedTime: 25,
    status: 'learning',
    principle: {
      situation: '小明从家出发去学校，家在 A 点，学校在 B 点。',
      confusion: '- 路程和位移有什么区别？\n- 为什么说位移是矢量而路程是标量？',
      experiment: '用刻度尺测量小车的运动距离，记录多次实验数据...',
      concept: '## 位置\n\n在参考系中，用坐标描述物体所在的空间点。\n\n## 位移\n\n【定义】：从起点指向终点的有向线段\n\n$$\\vec{AB}$$',
      derivation: '位移与时间无关，只与初末位置有关。\n$$\\Delta \\vec{x} = \\vec{x}_2 - \\vec{x}_1$$',
      application: '### 例题\n\n物体从 A 点（x=2m）运动到 B 点（x=8m），求位移。\n$$\\Delta x = 8 - 2 = 6\\text{m}$$',
    },
    knowledgeNetwork: {
      nodes: [
        { id: 'K001-1', label: '位置 $x$', type: 'core' },
        { id: 'K001-2', label: '位移 $\\Delta x$', type: 'core' },
        { id: 'K001-3', label: '路程 $s$', type: 'prerequisite' },
      ],
      edges: [
        { source: 'K001-1', target: 'K001-2', label: '差值' },
        { source: 'K001-2', target: 'K001-3', label: '≤' },
      ],
    },
    methodology: {
      steps: ['明确研究对象', '建立坐标系', '读出初位置和末位置', '计算 $\\Delta x = x_2 - x_1$'],
      tips: ['位移只看初末位置，与路径无关', '注意正负号表示方向'],
      commonMistakes: ['把路程当位移', '忘记正负号表示方向'],
    },
    lifeApplications: [
      { title: 'GPS定位', description: 'GPS通过位移计算确定物体位置变化。' },
    ],
  },
  {
    id: 'PHY-K002',
    subject: 'PHY',
    module: 'PHY-M01-力学',
    chapter: 'PHY-C01-运动的描述',
    title: '速度与速率',
    difficulty: 1,
    prerequisiteIds: ['PHY-K001'],
    relatedIds: ['PHY-K003', 'PHY-K001'],
    estimatedTime: 30,
    status: 'undone',
    principle: {
      situation: '高铁仪表盘显示 300 km/h，这个数字代表什么？',
      confusion: '- 速度 300 km/h 和速率有什么区别？\n- 为什么开车时说"速度"但导航里说"速率"？',
      experiment: '用打点计时器测量纸带，记录等时间间隔的位移...',
      concept: '## 速度\n\n【定义】：位移与发生这段位移所用时间的比值\n\n$$v = \\frac{\\Delta x}{\\Delta t}$$\n\n【单位】：m/s\n\n【方向】：与位移方向相同',
      derivation: '速度是矢量，有大小和方向。\n平均速度：$\\bar{v} = \\frac{\\Delta x}{\\Delta t}$\n\n瞬时速度：$\\Delta t \\to 0$ 时的平均速度',
      application: '### 例题\n\n汽车从 A 地到 B 地，位移 100km，用时 2h，求平均速度。\n$$v = \\frac{100\\text{km}}{2\\text{h}} = 50\\text{km/h}$$',
    },
    knowledgeNetwork: {
      nodes: [
        { id: 'K002-1', label: '速度 $v$', type: 'core' },
        { id: 'K002-2', label: '速率', type: 'core' },
        { id: 'K002-3', label: '位移 $\\Delta x$', type: 'prerequisite' },
      ],
      edges: [
        { source: 'K002-3', target: 'K002-1', label: '比值' },
        { source: 'K002-1', target: 'K002-2', label: '大小' },
      ],
    },
    methodology: {
      steps: ['明确研究对象', '建立坐标系', '找出初位置、末位置，算位移', '记录时间间隔', '代入公式计算'],
      tips: ['速度是矢量，速率是标量', '平均速度 = 位移/时间，不是路程/时间'],
      commonMistakes: ['混淆速度与速率', '忘记位移是矢量'],
    },
    lifeApplications: [
      { title: '高铁提速', description: '高铁从 200km/h 提速到 350km/h，速度变化反映在哪些方面？' },
    ],
  },
  {
    id: 'PHY-K003',
    subject: 'PHY',
    module: 'PHY-M01-力学',
    chapter: 'PHY-C01-运动的描述',
    title: '加速度',
    difficulty: 2,
    prerequisiteIds: ['PHY-K001', 'PHY-K002'],
    relatedIds: ['PHY-K005'],
    estimatedTime: 35,
    status: 'undone',
    principle: {
      situation: '赛车起步：从 0 加速到 100 km/h 只需要 3 秒。普通家用车需要 10 秒。两者差在哪里？',
      confusion: '- 加速度大意味着什么？\n- 加速度可以是负数吗？',
      experiment: '利用打点计时器分析匀加速运动纸带，记录速度变化数据...',
      concept: '## 加速度\n\n【定义】：速度变化量与发生这一变化所用时间的比值\n\n$$a = \\frac{\\Delta v}{\\Delta t} = \\frac{v - v_0}{t}$$\n\n【单位】：m/s²',
      derivation: '加速度描述速度变化的快慢。\n$$\\Delta v = a \\cdot \\Delta t$$\n速度变化量 = 加速度 × 时间',
      application: '### 例题\n\n汽车从静止开始，以 $2\\text{m/s}^2$ 的加速度加速，求 5s 后的速度。\n$$v = v_0 + at = 0 + 2 \\times 5 = 10\\text{m/s}$$',
    },
    knowledgeNetwork: {
      nodes: [
        { id: 'K003-1', label: '加速度 $a$', type: 'core' },
        { id: 'K003-2', label: '速度变化 $\\Delta v$', type: 'core' },
        { id: 'K003-3', label: '速度 $v$', type: 'prerequisite' },
      ],
      edges: [
        { source: 'K003-2', target: 'K003-1', label: '比值' },
        { source: 'K003-3', target: 'K003-2', label: '差值' },
      ],
    },
    methodology: {
      steps: ['明确加速度的正方向', '找出初速度 $v_0$ 和末速度 $v$', '计算速度变化量 $\\Delta v = v - v_0$', '代入 $a = \\Delta v / \\Delta t$'],
      tips: ['加速度正 ≠ 加速，负 ≠ 减速（取决于正方向）', '加速度描述速度变化的快慢，不是变化的多少'],
      commonMistakes: ['把加速度大小当速度变化量', '刹车问题不判断停止时间'],
    },
    lifeApplications: [
      { title: '汽车安全气囊', description: '碰撞时，加速度传感器检测极大减速度，触发气囊弹出。' },
    ],
  },
]

export const sampleStrategies: Strategy[] = [
  {
    id: 'PHY-S01',
    subject: 'PHY',
    title: '运动学图像分析',
    applicableTypes: ['v-t 图像求位移/速度', 's-t 图像分析运动', '图像转换问题'],
    difficulty: 3,
    coreIdea: '图像中，面积 = 位移，斜率 = 加速度/速度',
    steps: [
      { order: 1, title: '读坐标轴', description: '确定图像类型：s-t 图还是 v-t 图' },
      { order: 2, title: '读斜率', description: 's-t 图斜率 = 速度；v-t 图斜率 = 加速度' },
      { order: 3, title: '读面积', description: 'v-t 图像与时间轴围成的面积 = 位移' },
      { order: 4, title: '读截距', description: '纵轴截距 = 初速度或初位置' },
      { order: 5, title: '分析交点', description: '两图线交点 = 两物体该时刻速度相等' },
    ],
    techniques: [
      'v-t 图像中，图像在 t 轴上方 → 正方向运动',
      'v-t 图像中，图像在 t 轴下方 → 反方向运动',
      '两图像交点 → 速度相等，常考追及问题',
    ],
    commonMistakes: [
      '把 v-t 图面积当速度（正确：面积 = 位移）',
      '把 s-t 图斜率当加速度（正确：斜率 = 速度）',
    ],
    relatedStrategies: ['PHY-S02'],
    relatedKnowledge: ['PHY-K001', 'PHY-K002', 'PHY-K003'],
  },
  {
    id: 'PHY-S02',
    subject: 'PHY',
    title: '追击与相遇问题',
    applicableTypes: ['两物体追及问题', '相向相遇问题', '避免碰撞判断'],
    difficulty: 3,
    coreIdea: '速度相等时距离最值，判断能否追上',
    steps: [
      { order: 1, title: '画情景图', description: '画出两物体的初始位置、运动方向' },
      { order: 2, title: '列位移方程', description: '分别列出两物体的位移-时间方程' },
      { order: 3, title: '速度相等', description: '令 $v_1 = v_2$，求 $t$ 和临界位移' },
      { order: 4, title: '比较位移', description: '比较相对位移与初始间距' },
      { order: 5, title: '判断结果', description: '$t$ 时若追者位移 ≥ 初始间距，则能追上' },
    ],
    techniques: [
      '速度大者追速度小者：一定能追上，追及时速度相等时刻距离最近',
      '速度相等时判断：若追者追到前的最大距离 < 初始间距，则追不上',
      '二次相遇：分别列方程，解交点',
    ],
    commonMistakes: [
      '不判断停止时间（刹车问题中 $v=0$ 后的运动）',
      '漏掉"刚好不相撞"的临界情况',
    ],
    relatedStrategies: ['PHY-S01'],
    relatedKnowledge: ['PHY-K002', 'PHY-K005'],
  },
]

export const sampleQuestions: Question[] = [
  {
    id: 'PHY-Q000001',
    subject: 'PHY',
    module: 'PHY-M01-力学',
    knowledgeIds: ['PHY-K001'],
    strategyIds: [],
    type: 'single',
    difficulty: 1,
    content: '物体从 A 点（$x_1=2\\text{m}$）运动到 B 点（$x_2=8\\text{m}$），位移大小为多少？',
    options: [
      { id: 'A', content: '$2\\text{m}$' },
      { id: 'B', content: '$6\\text{m}$' },
      { id: 'C', content: '$10\\text{m}$' },
      { id: 'D', content: '$4\\text{m}$' },
    ],
    answer: 'B',
    explanation: '位移大小 $|\\Delta x| = |x_2 - x_1| = |8 - 2| = 6\\text{m}$，选 【B】。',
    hint: '位移是末位置减初位置，取绝对值才是大小。',
    source: '2024高考全国乙卷',
    year: 2024,
    tags: ['运动的描述', '位移', '基础层'],
  },
  {
    id: 'PHY-Q000002',
    subject: 'PHY',
    module: 'PHY-M01-力学',
    knowledgeIds: ['PHY-K002'],
    strategyIds: [],
    type: 'single',
    difficulty: 2,
    content: '汽车以 $72\\text{km/h}$ 的速度行驶，刹车后以 $4\\text{m/s}^2$ 的加速度减速，求刹车后 $5\\text{s}$ 内的位移。',
    options: [
      { id: 'A', content: '$50\\text{m}$' },
      { id: 'B', content: '$62.5\\text{m}$' },
      { id: 'C', content: '$70\\text{m}$' },
      { id: 'D', content: '$45\\text{m}$' },
    ],
    answer: 'B',
    explanation: '$72\\text{km/h}=20\\text{m/s}$，停止时间 $t_{停}=v_0/a=5\\text{s}$，故 $5\\text{s}$ 刚好停止。位移 $s=v_0t-\\frac{1}{2}at^2=20\\times5-\\frac{1}{2}\\times4\\times25=62.5\\text{m}$。',
    hint: '先判断刹车到停止的时间，避免多算。',
    source: '2024高考全国甲卷',
    year: 2024,
    tags: ['匀变速直线运动', '刹车问题', '进阶层'],
  },
]

export const physicsGraphData: GraphData = {
  nodes: [
    { id: 'PHY-M01', label: '力学', type: 'module' },
    { id: 'PHY-M02', label: '机械振动与机械波', type: 'module' },
    { id: 'PHY-M03', label: '热学', type: 'module' },
    { id: 'PHY-C01', label: '运动的描述', type: 'chapter' },
    { id: 'PHY-C02', label: '匀变速直线运动', type: 'chapter' },
    { id: 'PHY-C03', label: '相互作用', type: 'chapter' },
    { id: 'PHY-C04', label: '牛顿运动定律', type: 'chapter' },
    { id: 'PHY-K001', label: '位置与位移', type: 'knowledge', status: 'learning', difficulty: 1, knowledgeId: 'PHY-K001' },
    { id: 'PHY-K002', label: '速度与速率', type: 'knowledge', status: 'undone', difficulty: 1, knowledgeId: 'PHY-K002' },
    { id: 'PHY-K003', label: '加速度', type: 'knowledge', status: 'undone', difficulty: 2, knowledgeId: 'PHY-K003' },
  ],
  edges: [
    { source: 'PHY-M01', target: 'PHY-C01', type: '包含' },
    { source: 'PHY-M01', target: 'PHY-C02', type: '包含' },
    { source: 'PHY-M01', target: 'PHY-C03', type: '包含' },
    { source: 'PHY-M01', target: 'PHY-C04', type: '包含' },
    { source: 'PHY-M02', target: 'PHY-C02', type: '关联' },
    { source: 'PHY-C01', target: 'PHY-K001', type: '包含' },
    { source: 'PHY-C01', target: 'PHY-K002', type: '包含' },
    { source: 'PHY-C01', target: 'PHY-K003', type: '包含' },
    { source: 'PHY-C02', target: 'PHY-K003', type: 'prerequisite' },
    { source: 'PHY-K001', target: 'PHY-K002', type: 'prerequisite' },
    { source: 'PHY-K002', target: 'PHY-K003', type: 'prerequisite' },
  ],
}

const MODEL_CATEGORY: Record<string, string> = {
  '运动学': '运动学',
  '力学': '力学',
  '曲线运动': '曲线运动',
  '万有引力': '万有引力',
  '机械能': '机械能',
  '动量': '动量',
  '电场': '电场',
  '电路': '电路',
  '磁场': '磁场',
  '电磁感应': '电磁感应',
  '热学': '热学',
  '光学': '光学',
  '机械波': '机械波',
  '近代物理': '近代物理',
}

const CAT_COLOR: Record<string, string> = {
  '运动学': 'bg-blue-100 text-blue-700',
  '力学': 'bg-green-100 text-green-700',
  '曲线运动': 'bg-purple-100 text-purple-700',
  '万有引力': 'bg-indigo-100 text-indigo-700',
  '机械能': 'bg-amber-100 text-amber-700',
  '动量': 'bg-rose-100 text-rose-700',
  '电场': 'bg-cyan-100 text-cyan-700',
  '电路': 'bg-teal-100 text-teal-700',
  '磁场': 'bg-orange-100 text-orange-700',
  '电磁感应': 'bg-red-100 text-red-700',
  '热学': 'bg-pink-100 text-pink-700',
  '光学': 'bg-lime-100 text-lime-700',
  '机械波': 'bg-yellow-100 text-yellow-700',
  '近代物理': 'bg-slate-100 text-slate-700',
}

function getModelChapters() {
  const modules = [...new Set(physicsModels.map(m => m.module))]
  return modules.map(module => {
    const chapterModels = physicsModels.filter(m => m.module === module)
    return {
      id: module,
      name: module,
      module: module,
      models: chapterModels.map(m => ({
        id: m.id,
        name: m.title,
        difficulty: String(m.order),
      })),
    }
  })
}

function generateGraphData() {
  return physicsGraphData
}

registerSubject('physics', {
  getConceptList: () => conceptList,
  getConceptDataMap: () => conceptDataMap,
  getAllConceptIds: () => getAllConceptIds(),
  getConceptMeta: (id: string) => {
    const meta = getConceptMeta(id)
    if (!meta) return null
    const concept = conceptDataMap[id]
    return {
      title: meta.name,
      module: meta.module,
      chapter: meta.chapter,
      difficulty: concept?.difficulty ?? 1,
    }
  },

  getModelChapters: () => getModelChapters(),
  getModelDataMap: () => modelDataMap,
  getAllModelIds: () => ALL_MODEL_IDS,

  getFormulaChapters: () => formulaChapters,
  getAllFormulas: () => allFormulas,
  searchFormulas: (query: string) => searchFormulas(query),
  getFormulaData: () => ({
    formulaChapters,
    searchFormulas: (query: string) => searchFormulas(query),
    formulas: allFormulas,
  }),

  getParadigmList: () => allParadigms,
  getParadigmDataMap: () => paradigmDataMap,

  getModelQuestionStats: () => modelQuestionStats,
  getAllQuestions: () => allQuestions,
  getQuestionsByModel: () => questionsByModel,
  getQuestionBankData: () => ({
    allQuestions,
    DIFF_LABEL,
    DIFF_COLOR,
    LEVEL_OPTIONS,
    TARGET_OPTIONS,
    FUNCTION_OPTIONS,
    DIFFICULTY_D_OPTIONS,
    TYPE_OPTIONS: PHYSICS_TYPE_OPTIONS,
  }),

  getGraphData: () => generateGraphData(),
  getGraphModels: () => physicsModels,
})

export { MODEL_CATEGORY, CAT_COLOR }