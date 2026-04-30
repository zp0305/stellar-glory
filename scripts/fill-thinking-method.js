/**
 * Task 3: 批量填充 R01-R90 的 thinkingMethod
 * 读取 .thinking-method-map.json，精准替换 routines/01.ts ~ 90.ts
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const MAP_PATH = path.resolve(__dirname, '../.thinking-method-map.json')
const ROUTINES_DIR = path.resolve(__dirname, '../src/data/physics/routines')

const thinkingMethodMap = JSON.parse(fs.readFileSync(MAP_PATH, 'utf8'))

let updated = 0
let skipped = 0
let errors = 0

for (let n = 1; n <= 90; n++) {
  const fileNum = String(n).padStart(2, '0')
  const filePath = path.join(ROUTINES_DIR, `${fileNum}.ts`)

  if (!fs.existsSync(filePath)) {
    console.error(`[ERROR] 文件不存在: ${n}.ts`)
    errors++
    continue
  }

  const id = `PHY-R${String(n).padStart(2, '0')}`
  const tm = thinkingMethodMap[id]

  if (!tm) {
    console.warn(`[WARN] 映射表中没有 ${id}，跳过`)
    skipped++
    continue
  }

  const content = fs.readFileSync(filePath, 'utf8')

  // 检查是否已经填充
  if (!content.includes('thinkingMethod: ""')) {
    const existing = content.match(/thinkingMethod:\s*"([^"]*)"/)
    if (existing && existing[1].trim() !== '') {
      console.log(`[SKIP] ${n}.ts (${id}) 已有值: "${existing[1]}"`)
      skipped++
      continue
    }
  }

  // 精准替换 thinkingMethod: "" → thinkingMethod: "实际值"
  // 转义引号和反斜杠
  const escapedTm = tm.replace(/\\/g, '\\\\').replace(/"/g, '\\"')
  const newContent = content.replace(
    /thinkingMethod:\s*""/,
    `thinkingMethod: "${escapedTm}"`
  )

  if (newContent === content) {
    console.warn(`[WARN] ${n}.ts 未发生变化，可能格式异常`)
    skipped++
    continue
  }

  fs.writeFileSync(filePath, newContent, 'utf8')
  console.log(`[OK] ${n}.ts (${id}): "${tm}"`)
  updated++
}

console.log(`\n✅ 完成: 更新 ${updated} 个，跳过 ${skipped} 个，错误 ${errors} 个`)
