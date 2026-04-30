/**
 * Task 1: 从43个策略JSON提取thinkingMethod映射表
 * 输出: thinkingMethodMap { "PHY-R01": "...", ... "PHY-R103": "..." }
 * 用途: 供 fill-thinking-method.js 和 gen-routines.js 使用
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const STRATEGIES_DIR = path.resolve(__dirname, '../../content/physics/strategies')

const thinkingMethodMap = {}
const missingList = []

for (let m = 1; m <= 43; m++) {
  const nn = String(m).padStart(2, '0')
  const jsonPath = path.join(STRATEGIES_DIR, `P-R-M${nn}.json`)

  if (!fs.existsSync(jsonPath)) {
    console.warn(`[WARN] 文件不存在: ${jsonPath}`)
    continue
  }

  const json = JSON.parse(fs.readFileSync(jsonPath, 'utf8'))
  const paradigms = json.paradigms || []

  for (const p of paradigms) {
    // id 格式: "P-R91" → "PHY-R91"
    const rawId = p.id // e.g. "P-R91" or "P-R9"
    if (!rawId) continue
    const numStr = rawId.replace(/^P-R/, '')
    const num = parseInt(numStr, 10)
    const phyId = `PHY-R${String(num).padStart(2, '0')}`

    if (!p.thinkingMethod || p.thinkingMethod.trim() === '') {
      missingList.push({ file: `P-R-M${nn}.json`, id: phyId, name: p.name })
    } else {
      thinkingMethodMap[phyId] = p.thinkingMethod
    }
  }
}

// 统计
const total = Object.keys(thinkingMethodMap).length
console.log(`\n✅ 提取完成，共 ${total} 条 thinkingMethod`)

if (missingList.length > 0) {
  console.warn(`\n⚠️  以下范式 thinkingMethod 为空:`)
  missingList.forEach(x => console.warn(`  [${x.id}] ${x.name} (${x.file})`))
} else {
  console.log('✅ 无空值')
}

// 检查 R01~R103 是否全覆盖
const missing103 = []
for (let n = 1; n <= 103; n++) {
  const id = `PHY-R${String(n).padStart(2, '0')}`
  if (!thinkingMethodMap[id]) missing103.push(id)
}
if (missing103.length > 0) {
  console.warn(`\n⚠️  缺少以下范式: ${missing103.join(', ')}`)
} else {
  console.log('✅ R01-R103 全部覆盖')
}

// 输出到文件供后续脚本使用
const outputPath = path.resolve(__dirname, '../.thinking-method-map.json')
fs.writeFileSync(outputPath, JSON.stringify(thinkingMethodMap, null, 2), 'utf8')
console.log(`\n📄 映射表已保存到: ${outputPath}`)

// 同时打印完整映射表
console.log('\n--- 完整映射表 ---')
console.log(JSON.stringify(thinkingMethodMap, null, 2))
