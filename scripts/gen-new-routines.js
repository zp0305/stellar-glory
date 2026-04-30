/**
 * Task 2: 从策略JSON生成 R91-R103 范式 TS 文件
 * 输出: xingyao/src/data/physics/routines/91.ts ~ 103.ts
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const STRATEGIES_DIR = path.resolve(__dirname, '../../content/physics/strategies')
const ROUTINES_DIR = path.resolve(__dirname, '../src/data/physics/routines')

// 13个新范式的配置: [范式编号, 所属模型编号, 在JSON中的id]
const NEW_PARADIGMS = [
  { num: 91,  modelNum: 25, jsonId: 'P-R91'  },
  { num: 92,  modelNum: 25, jsonId: 'P-R92'  },
  { num: 93,  modelNum: 33, jsonId: 'P-R93'  },
  { num: 94,  modelNum: 33, jsonId: 'P-R94'  },
  { num: 95,  modelNum: 33, jsonId: 'P-R95'  },
  { num: 96,  modelNum: 7,  jsonId: 'P-R96'  },
  { num: 97,  modelNum: 8,  jsonId: 'P-R97'  },
  { num: 98,  modelNum: 22, jsonId: 'P-R98'  },
  { num: 99,  modelNum: 30, jsonId: 'P-R99'  },
  { num: 100, modelNum: 32, jsonId: 'P-R100' },
  { num: 101, modelNum: 36, jsonId: 'P-R101' },
  { num: 102, modelNum: 39, jsonId: 'P-R102' },
  { num: 103, modelNum: 41, jsonId: 'P-R103' },
]

// 转义函数：处理TS字符串内的特殊字符
function escStr(s) {
  if (s === null || s === undefined) return ''
  return String(s)
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$\{/g, '\\${')
}

// 将 errorMap 数组转为 TS 字面量
function renderErrorMap(errorMap) {
  if (!Array.isArray(errorMap) || errorMap.length === 0) return '[]'
  const items = errorMap.map(e => {
    const wt = escStr(e.wrongThinking || '')
    const cr = escStr(e.cognitiveRoot || '')
    const cp = escStr(e.correctPath || '')
    return `    { wrongThinking: "${wt}", cognitiveRoot: "${cr}", correctPath: "${cp}" }`
  })
  return `[\n${items.join(',\n')},\n  ]`
}

// 将字符串数组转为 TS 字面量
function renderStringArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return '[]'
  const items = arr.map(s => `    "${escStr(s)}"`)
  return `[\n${items.join(',\n')},\n  ]`
}

let generated = 0
let skipped = 0

for (const { num, modelNum, jsonId } of NEW_PARADIGMS) {
  const modelNN = String(modelNum).padStart(2, '0')
  const jsonPath = path.join(STRATEGIES_DIR, `P-R-M${modelNN}.json`)

  if (!fs.existsSync(jsonPath)) {
    console.error(`[ERROR] 文件不存在: ${jsonPath}`)
    skipped++
    continue
  }

  const json = JSON.parse(fs.readFileSync(jsonPath, 'utf8'))
  const paradigm = (json.paradigms || []).find(p => p.id === jsonId)

  if (!paradigm) {
    console.error(`[ERROR] 在 ${jsonPath} 中找不到 id=${jsonId}`)
    skipped++
    continue
  }

  const phyId = `PHY-R${String(num).padStart(2, '0')}`
  const phyModelId = `PHY-M${String(modelNum).padStart(2, '0')}`

  const tsContent = `// ${phyId}
// 数据来源: content/physics/strategies/P-R-M${modelNN}.json

const entry = {
  id: "${phyId}",
  name: "${escStr(paradigm.name)}",
  model: "${phyModelId}",
  thinkingMethod: "${escStr(paradigm.thinkingMethod)}",
  level: "${escStr(paradigm.level)}",
  trigger: "${escStr(paradigm.trigger)}",
  path: ${renderStringArray(paradigm.path)},
  variationWarning: "${escStr(paradigm.variationWarning)}",
  errorMap: ${renderErrorMap(paradigm.errorMap)},
  essence: "${escStr(paradigm.essence)}",
}

export default entry
`

  const outPath = path.join(ROUTINES_DIR, `${num}.ts`)
  fs.writeFileSync(outPath, tsContent, 'utf8')
  console.log(`[OK] 生成 ${num}.ts (${phyId} - ${paradigm.name})`)
  generated++
}

console.log(`\n✅ 完成：生成 ${generated} 个文件，跳过 ${skipped} 个`)
