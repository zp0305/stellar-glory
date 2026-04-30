/**
 * Task 4: 批量为 M01-M43 的 TS 文件添加 relatedParadigms 字段
 * 使用任务书§三.2 映射表（权威来源）
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const MODELS_DIR = path.resolve(__dirname, '../src/data/physics/models')

// 完整映射表 (任务书§三.2)
const RELATED_PARADIGMS_MAP = {
  'PHY-M01': ['PHY-R01', 'PHY-R02'],
  'PHY-M02': ['PHY-R06', 'PHY-R07'],
  'PHY-M03': ['PHY-R03', 'PHY-R08'],
  'PHY-M04': ['PHY-R04', 'PHY-R05'],
  'PHY-M05': ['PHY-R09', 'PHY-R10', 'PHY-R11', 'PHY-R20', 'PHY-R22'],
  'PHY-M06': ['PHY-R12', 'PHY-R21'],
  'PHY-M07': ['PHY-R13', 'PHY-R21', 'PHY-R96'],
  'PHY-M08': ['PHY-R10', 'PHY-R11', 'PHY-R14', 'PHY-R97'],
  'PHY-M09': ['PHY-R15', 'PHY-R89'],
  'PHY-M10': ['PHY-R16', 'PHY-R17', 'PHY-R18', 'PHY-R19'],
  'PHY-M11': ['PHY-R23', 'PHY-R24', 'PHY-R25'],
  'PHY-M12': ['PHY-R26'],
  'PHY-M13': ['PHY-R27', 'PHY-R28'],
  'PHY-M14': ['PHY-R29', 'PHY-R30', 'PHY-R31', 'PHY-R32'],
  'PHY-M15': ['PHY-R33', 'PHY-R34'],
  'PHY-M16': ['PHY-R35', 'PHY-R36'],
  'PHY-M17': ['PHY-R37', 'PHY-R38', 'PHY-R39'],
  'PHY-M18': ['PHY-R40', 'PHY-R41', 'PHY-R42'],
  'PHY-M19': ['PHY-R43', 'PHY-R44'],
  'PHY-M20': ['PHY-R45', 'PHY-R46', 'PHY-R47'],
  'PHY-M21': ['PHY-R48', 'PHY-R49'],
  'PHY-M22': ['PHY-R50', 'PHY-R98'],
  'PHY-M23': ['PHY-R51', 'PHY-R52', 'PHY-R53'],
  'PHY-M24': ['PHY-R54', 'PHY-R55'],
  'PHY-M25': ['PHY-R91', 'PHY-R92'],
  'PHY-M26': ['PHY-R56', 'PHY-R57', 'PHY-R90'],
  'PHY-M27': ['PHY-R58', 'PHY-R59', 'PHY-R60'],
  'PHY-M28': ['PHY-R61', 'PHY-R62'],
  'PHY-M29': ['PHY-R63', 'PHY-R64'],
  'PHY-M30': ['PHY-R65', 'PHY-R99'],
  'PHY-M31': ['PHY-R66', 'PHY-R67', 'PHY-R87', 'PHY-R88', 'PHY-R89', 'PHY-R90'],
  'PHY-M32': ['PHY-R100', 'PHY-R68', 'PHY-R87', 'PHY-R88'],
  'PHY-M33': ['PHY-R93', 'PHY-R94', 'PHY-R95'],
  'PHY-M34': ['PHY-R69', 'PHY-R70'],
  'PHY-M35': ['PHY-R71', 'PHY-R72'],
  'PHY-M36': ['PHY-R101', 'PHY-R73'],
  'PHY-M37': ['PHY-R74', 'PHY-R75'],
  'PHY-M38': ['PHY-R76', 'PHY-R77'],
  'PHY-M39': ['PHY-R102', 'PHY-R78'],
  'PHY-M40': ['PHY-R79', 'PHY-R80'],
  'PHY-M41': ['PHY-R103', 'PHY-R81'],
  'PHY-M42': ['PHY-R82', 'PHY-R83'],
  'PHY-M43': ['PHY-R84', 'PHY-R85', 'PHY-R86'],
}

// 获取模型文件名（通过 id 匹配）
function findModelFile(modelId) {
  const num = parseInt(modelId.replace('PHY-M', ''), 10)
  const nn = String(num).padStart(2, '0')
  const files = fs.readdirSync(MODELS_DIR)
  return files.find(f => f.startsWith(`M${nn}_`) && f.endsWith('.ts'))
}

let updated = 0
let skipped = 0
let errors = 0

for (const [modelId, paradigms] of Object.entries(RELATED_PARADIGMS_MAP)) {
  const fileName = findModelFile(modelId)
  if (!fileName) {
    console.error(`[ERROR] 找不到模型文件: ${modelId}`)
    errors++
    continue
  }

  const filePath = path.join(MODELS_DIR, fileName)
  const content = fs.readFileSync(filePath, 'utf8')

  // 检查是否已存在 relatedParadigms 字段
  if (content.includes('relatedParadigms')) {
    console.log(`[SKIP] ${fileName} 已有 relatedParadigms`)
    skipped++
    continue
  }

  // 构造要插入的字段字符串
  const paradigmsStr = paradigms.map(p => `'${p}'`).join(', ')
  const insertStr = `  relatedParadigms: [${paradigmsStr}],\n`

  // 找到文件末尾的 } 插入点（最后一个 } 前）
  const lastBraceIdx = content.lastIndexOf('}')
  if (lastBraceIdx === -1) {
    console.error(`[ERROR] ${fileName} 未找到末尾 }`)
    errors++
    continue
  }

  const newContent = content.slice(0, lastBraceIdx) + insertStr + content.slice(lastBraceIdx)
  fs.writeFileSync(filePath, newContent, 'utf8')
  console.log(`[OK] ${fileName} → [${paradigms.join(', ')}]`)
  updated++
}

console.log(`\n✅ 完成: 更新 ${updated} 个，跳过 ${skipped} 个，错误 ${errors} 个`)
