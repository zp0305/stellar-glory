// 批量生成化学模型空模板和索引文件
// 运行: node scripts/gen-chemistry-models.js

import fs from 'fs'
import path from 'path'

const BASE = path.resolve('src/data/chemistry/models')

// 48个化学模型：编号 → (名称, 所属板块, 难度B/J/T)
const models = [
  // 4.1 物质分类与计量（2个）
  ['M01', '物质分类树模型', '物质分类与计量', 'B'],
  ['M02', '摩尔计算模型', '物质分类与计量', 'B'],
  // 4.2 离子反应（2个）
  ['M03', '离子方程式书写模型', '离子反应与氧化还原', 'B'],
  ['M04', '离子共存分析模型', '离子反应与氧化还原', 'J'],
  // 4.3 氧化还原（2个）
  ['M05', '氧化还原双线桥模型', '离子反应与氧化还原', 'B'],
  ['M06', '氧化还原配平与计算模型', '离子反应与氧化还原', 'J'],
  // 4.4 结构与周期律（4个）
  ['M07', '原子结构与元素推断模型', '物质结构与元素周期律', 'J'],
  ['M08', '元素周期表应用模型', '物质结构与元素周期律', 'J'],
  ['M09', '分子结构预测模型', '物质结构与元素周期律', 'J'],
  ['M10', '晶体结构分析模型', '物质结构与元素周期律', 'J'],
  // 4.5 化学反应原理（7个）
  ['M11', '热化学盖斯定律模型', '化学反应原理', 'J'],
  ['M12', '化学平衡分析模型', '化学反应原理', 'J'],
  ['M13', '等效平衡模型', '化学反应原理', 'T'],
  ['M14', '弱电解质电离平衡模型', '化学反应原理', 'J'],
  ['M15', '沉淀溶解平衡模型', '化学反应原理', 'J'],
  ['M16', '速率图像分析模型', '化学反应原理', 'J'],
  ['M17', 'pH综合计算模型', '化学反应原理', 'T'],
  // 4.6 无机元素化学（9个）
  ['M18', '钠的转化链模型', '无机元素化学', 'B'],
  ['M19', '铝的两性转化模型', '无机元素化学', 'J'],
  ['M20', '铁三角氧化还原模型', '无机元素化学', 'J'],
  ['M21', '铜的氧化还原模型', '无机元素化学', 'J'],
  ['M22', '氯的歧化与归中模型', '无机元素化学', 'J'],
  ['M23', '硫氮价态转化模型', '无机元素化学', 'J'],
  ['M24', '工业流程分析模型', '无机元素化学', 'T'],
  ['M25', '无机新材料模型', '无机元素化学', 'J'],
  ['M35', '过氧化钠歧化模型', '无机元素化学', 'J'],
  // 4.7 有机化学（11个）
  ['M26', '同分异构体推导模型', '有机化学', 'T'],
  ['M27', '烃的反应分类模型', '有机化学', 'B'],
  ['M28', '芳香烃定位规则模型', '有机化学', 'J'],
  ['M29', '卤代烃反应条件模型', '有机化学', 'J'],
  ['M30', '醇酚转化模型', '有机化学', 'J'],
  ['M31', '酚的特性模型', '有机化学', 'J'],
  ['M32', '醛的氧化还原模型', '有机化学', 'J'],
  ['M33', '羧酸酯转化模型', '有机化学', 'J'],
  ['M34', '有机推断与合成模型', '有机化学', 'T'],
  ['M36', '高分子合成模型', '有机化学', 'J'],
  ['M37', '生物大分子模型', '有机化学', 'J'],
  // 4.8 电化学（4个）
  ['M38', '原电池分析模型', '电化学', 'J'],
  ['M39', '新型电池分析模型', '电化学', 'T'],
  ['M40', '电解池与金属防护模型', '电化学', 'J'],
  ['M41', '电化学计算模型', '电化学', 'J'],
  // 4.9 实验模型（7个）
  ['M42', '分离提纯模型', '化学实验基础', 'B'],
  ['M43', '气体制备流程模型', '化学实验基础', 'B'],
  ['M44', '检验鉴别模型', '化学实验基础', 'J'],
  ['M45', '定量滴定实验模型', '化学实验基础', 'J'],
  ['M46', '探究实验设计模型', '化学实验基础', 'T'],
  ['M47', '实验误差分析模型', '化学实验基础', 'J'],
  ['M48', '综合实验评价模型', '化学实验基础', 'T'],
]

const diffMap = { B: 1, J: 2, T: 3 }

function genModelFile(id, name, module, difficulty) {
  return `// ${id} ${name} - 模型详解（占位模板）
// 待内容AI填充七模块内容

export const ${id} = {
  id: 'CHE-${id}',
  title: '${name}',
  module: '${module}',
  chapter: '${module}',
  difficulty: ${diffMap[difficulty]},
  subtitle: '内容整理中...',
  description: '内容整理中...',

  // ===== 七模块内容 =====
  positioning: {
    core: '内容整理中...',
    essence: '内容整理中...',
    keyInsight: '内容整理中...',
  },

  principle: '内容整理中...',

  variations: {
    basic: [{ label: '待填充', note: '内容整理中...' }],
    advanced: [{ label: '待填充', note: '内容整理中...' }],
    challenge: [{ label: '待填充', note: '内容整理中...' }],
  },

  knowledgeNetwork: {
    parents: [] as string[],
    children: [] as string[],
    related: [] as string[],
    coreFormula: '',
  },

  methodology: {
    approach: '内容整理中...',
    decisionTree: ['待填充'],
    tips: ['待填充'],
    commonMistakes: ['待填充'],
  },

  selfCheck: [
    { question: '内容整理中...', options: ['A', 'B', 'C'], answer: 'A', explanation: '待填充' },
  ],

  applications: [
    { title: '内容整理中...', description: '待填充' },
  ],
} as const
`
}

// 生成所有模型文件
for (const [id, name, module, difficulty] of models) {
  const fileName = `${id}_${name}.ts`
  fs.writeFileSync(path.join(BASE, fileName), genModelFile(id, name, module, difficulty), 'utf-8')
}

// 生成 index.ts
const imports = models.map(([id, name]) => `import { ${id} } from './${id}_${name}'`).join('\n')
const exportNames = models.map(([id]) => id).join(', ')
const mapEntries = models.map(([id]) => `  'CHE-${id}': ${id},`).join('\n')
const allIds = models.map(([id]) => `  'CHE-${id}',`).join('\n')

// physicsModels 类似的导出（用于图表）
const physicsModelsLike = models.map(([id, name, module, difficulty]) =>
  `  { id: 'CHE-${id}', title: '${name}', module: '${module}', order: ${diffMap[difficulty]} },`
).join('\n')

const indexContent = `// 化学模型索引
// M01-M48（共48个），按9个子分类组织

${imports}

export {
  ${exportNames},
}

export const modelDataMap: Record<string, any> = {
${mapEntries}
}

export const ALL_MODEL_IDS: string[] = [
${allIds}
]

export const chemistryModels = [
${physicsModelsLike}
]
`

fs.writeFileSync(path.join(BASE, 'index.ts'), indexContent, 'utf-8')
console.log(`Done: generated ${models.length} model files + index.ts`)
