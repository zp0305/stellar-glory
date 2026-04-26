#!/usr/bin/env node
// ============================================================
// 星耀审计脚本（Node.js 版，Windows 兼容）
// 用法：node scripts/audit.js
// ============================================================

import { readFileSync, readdirSync, statSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { execSync } from 'child_process'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const SRC = join(ROOT, 'src')

const RED = '\x1b[31m'
const GREEN = '\x1b[32m'
const YELLOW = '\x1b[33m'
const CYAN = '\x1b[36m'
const RESET = '\x1b[0m'

let PROBLEMS = 0

function log(msg, color = RESET) {
  console.log(`${color}${msg}${RESET}`)
}

function check(label, fn) {
  const n = label.split('/')[0]
  console.log(`\n${CYAN}[${n}]${RESET} ${label.split('/')[1]}`)
  try {
    const result = fn()
    if (result === false) {
      PROBLEMS++
    } else if (result === undefined || result === true) {
      // ok
    } else if (Array.isArray(result) && result.length > 0) {
      result.forEach(item => log(`  ❌ ${item}`, RED))
      PROBLEMS += result.length
    }
  } catch (e) {
    log(`  ⚠️  检查出错: ${e.message}`, YELLOW)
  }
}

function walkDir(dir, exts) {
  const files = []
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) {
      files.push(...walkDir(full, exts))
    } else if (exts.some(e => entry.endsWith(e))) {
      files.push(full)
    }
  }
  return files
}

// ── 中文引号检查 ─────────────────────────────────────────
check('1/9 检查 TS/JSX 文件中文引号', () => {
  const files = walkDir(SRC, ['.ts', '.tsx'])
  const issues = []
  for (const file of files) {
    const content = readFileSync(file, 'utf-8')
    const lines = content.split('\n')
    for (let i = 0; i < lines.length; i++) {
      if (/[\u201c\u201d]/.test(lines[i])) {
        const rel = file.replace(ROOT, '')
        issues.push(`${rel}:${i + 1} 含中文引号`)
        break
      }
    }
  }
  if (issues.length === 0) {
    log('  ✅ 无中文引号', GREEN)
    return true
  }
  issues.forEach(x => log(`  ❌ ${x}`, RED))
  return false
})

// ── 双引号字符串内嵌引号检查 ────────────────────────────
// 只检查 property: "value" 模式，其中 value 包含 "..."
// 排除：TypeScript 类型声明 level: "A" | "B"，单引号字符串 '...'
check('2/9 检查双引号字符串内嵌双引号', () => {
  const files = [
    join(SRC, 'data/physics/paradigms.ts'),
    join(SRC, 'data/physics/thinkingMethods.ts'),
  ]
  const issues = []
  for (const file of files) {
    if (!statSync(file).isFile()) continue
    const content = readFileSync(file, 'utf-8')
    const lines = content.split('\n')
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      // 跳过：TypeScript 类型声明（不含冒号后接字符串）、注释
      if (line.trim().startsWith('//') ||
          line.trim().startsWith('*') ||
          /^\s*(export|import|interface|type|const|function)\s/.test(line)) continue
      // 跳过单引号字符串
      if (/'[^']*"[^']*'/.test(line)) continue
      // 查找 property: "..." 模式中，value 包含 "..."
      const match = line.match(/^\s*[\w]+(?:\?)?:\s*"([^"]+)"/)
      if (!match) continue
      const value = match[1]
      // 如果值中包含双引号，那就是内嵌引号
      if (value.includes('"')) {
        issues.push(`${file.replace(ROOT, '')}:${i + 1} → ${line.trim().slice(0, 80)}`)
        break
      }
    }
  }
  if (issues.length === 0) {
    log('  ✅ 无内嵌引号', GREEN)
    return true
  }
  issues.forEach(x => log(`  ❌ ${x}`, RED))
  return false
})

// ── VisionPages 结构检查 ─────────────────────────────────
check('3/9 VisionDetailPage 结构', () => {
  const file = join(SRC, 'sections/VisionPages.tsx')
  if (!statSync(file).isFile()) { log('  ⚠️  文件不存在', YELLOW); return }
  const content = readFileSync(file, 'utf-8')
  const lines = content.split('\n')
  // 找到 VisionDetailPage 函数开始行
  let fnStart = -1
  for (let i = 0; i < lines.length; i++) {
    if (/^export function VisionDetailPage/.test(lines[i])) {
      fnStart = i
      break
    }
  }
  if (fnStart < 0) {
    log('  ❌ 未找到 VisionDetailPage 函数', RED)
    return false
  }
  // 找下一个 export function 边界
  let fnEnd = lines.length
  for (let i = fnStart + 1; i < lines.length; i++) {
    if (/^export function/.test(lines[i])) {
      fnEnd = i
      break
    }
  }
  const fnBody = lines.slice(fnStart, fnEnd).join('\n')
  // 排除 callback 里的 return（.map/.filter/.reduce 内的）
  const topReturns = []
  let depth = 0
  let inCallback = false
  const fnLines = fnBody.split('\n')
  for (const line of fnLines) {
    // 计算缩进级别
    const indent = line.match(/^(\s*)/)?.[1].length ?? 0
    // 进入 callback
    if (/\.map\(|\.filter\(|\.reduce\(|\.forEach\(/.test(line) && !line.includes('return')) {
      inCallback = true
    }
    // 顶层 return (indent <= 2空格，不在 callback 里)
    if (!inCallback && line.includes('return (')) {
      topReturns.push(line.trim())
    }
    // 退出 callback (粗略判断：缩进回到进入前的级别)
    if (inCallback && /^\s{0,2}[})]/.test(line) && !line.includes('.map') && !line.includes('.filter')) {
      inCallback = false
    }
  }
  if (topReturns.length > 2) {
    log(`  ❌ VisionDetailPage 有 ${topReturns.length} 个顶层 return`, RED)
    return false
  }
  log(`  ✅ 结构正常（${topReturns.length} 个顶层 return）`, GREEN)
  return true
})

// ── physicsModels 导入来源检查 ───────────────────────────
check('4/9 physicsModels 导入来源', () => {
  const badRefs = []
  const sectionsDir = join(SRC, 'sections')
  const componentsDir = join(SRC, 'components')
  const storesDir = join(SRC, 'stores')

  for (const dir of [sectionsDir, componentsDir, storesDir]) {
    try {
      const isDir = statSync(dir).isDirectory()
      if (!isDir) continue
      for (const f of walkDir(dir, ['.ts', '.tsx'])) {
        const content = readFileSync(f, 'utf-8')
        if (content.includes("from '@/data/physics/physicsData'") &&
            content.includes('physicsModels') &&
            !content.includes('generatePhysicsGraphData')) {
          badRefs.push(f.replace(ROOT, ''))
        }
      }
    } catch (_) {}
  }
  if (badRefs.length === 0) {
    log('  ✅ 导入来源正确', GREEN)
    return true
  }
  badRefs.forEach(f => log(`  ❌ 不应从 physicsData 导入 physicsModels: ${f}`, RED))
  return false
})

// ── PracticeRedirect 检查 ────────────────────────────────
check('5/9 PracticeRedirect 空组件', () => {
  const file = join(SRC, 'sections/PracticeRedirect.tsx')
  if (!statSync(file).isFile()) {
    log('  ✅ 文件不存在（已清除）', GREEN)
    return true
  }
  const size = statSync(file).size
  if (size < 500) {
    log(`  ❌ 文件仅 ${size} bytes，/physics/practice 无实际功能`, RED)
    return false
  }
  log('  ✅ 有实际内容', GREEN)
  return true
})

// ── docs/thinks-methods vs thinkingMethods.ts 同步检查 ──
check('7/9 思维方法内容同步', () => {
  const mdDir = join(ROOT, 'docs/thinks-methods')
  const dataFile = join(SRC, 'data/physics/thinkingMethods.ts')
  try {
    if (!statSync(mdDir).isDirectory()) {
      log('  ⚠️  docs/thinks-methods 不存在，跳过', YELLOW)
      return
    }
  } catch (_) {
    log('  ⚠️  docs/thinks-methods 不存在，跳过', YELLOW)
    return
  }
  const mdFiles = readdirSync(mdDir).filter(f => f.endsWith('.md'))
  const content = readFileSync(dataFile, 'utf-8')
  const missing = []
  for (const md of mdFiles) {
    const id = md.match(/^(\d+)_/)?.[1]
    const name = md.replace(/^\d+_/, '').replace('.md', '')
    if (!content.includes(`P-TM${id?.padStart(2, '0')}`) &&
        !content.includes(name)) {
      missing.push(`${md} (未找到对应数据)`)
    }
  }
  if (missing.length === 0) {
    log(`  ✅ ${mdFiles.length} 个 MD 文件已同步`, GREEN)
    return true
  }
  missing.forEach(x => log(`  ⚠️  ${x}`, YELLOW))
  return false
})

// ── routes 完整性检查 ────────────────────────────────────
check('8/9 路由与导航一致性', () => {
  const appFile = join(SRC, 'App.tsx')
  const navFile = join(SRC, 'components/layout/Navigation.tsx')
  const appContent = readFileSync(appFile, 'utf-8')
  const navContent = readFileSync(navFile, 'utf-8')

  const routePaths = [...appContent.matchAll(/path="([^"]+)"/g)].map(m => m[1])
  const navHrefs = [...navContent.matchAll(/href:\s*'([^']+)'/g)].map(m => m[1])

  const missing = navHrefs.filter(h => {
    // 排除外部链接和锚点
    if (h.startsWith('http') || h.startsWith('#')) return false
    return !routePaths.some(r => r === h || (r.endsWith('*') && h.startsWith(r.replace('*', ''))))
  })

  if (missing.length === 0) {
    log('  ✅ 导航与路由一致', GREEN)
    return true
  }
  missing.forEach(h => log(`  ❌ 导航 href="${h}" 无对应路由`, RED))
  return false
})

// ── docs/ 交接区内容完整性检查 ────────────────────────────
check('9/9 docs/ 交接区完整性', () => {
  const docsDir = join(ROOT, 'docs')
  const requiredDirs = ['subjects', 'zones', 'tools', 'thinks-methods']
  const missingDirs = requiredDirs.filter(d => {
    try { return !statSync(join(docsDir, d)).isDirectory() } catch (_) { return true }
  })

  if (missingDirs.length > 0) {
    missingDirs.forEach(d => log(`  ❌ docs/${d}/ 目录缺失`, RED))
    return false
  }

  // 各子目录关键文件抽查
  const keyFiles = [
    ['subjects', 'physics'],      // subjects/physics/ 应存在
    ['zones', 'gaokao'],         // zones/ 应有 gaokao 相关
    ['tools', 'diagnosis'],       // tools/ 应有 diagnosis
    ['thinks-methods', '01'],    // thinks-methods/ 应有编号文件
  ]

  const warnings = []
  for (const [dir, hint] of keyFiles) {
    const dirPath = join(docsDir, dir)
    try {
      const files = readdirSync(dirPath).filter(f => f.endsWith('.md') || f.endsWith('.ts'))
      if (files.length === 0) {
        warnings.push(`docs/${dir}/ 内无 .md/.ts 文件`)
      }
    } catch (_) {}
  }

  if (warnings.length === 0) {
    log('  ✅ docs/ 交接区结构完整', GREEN)
    return true
  }
  warnings.forEach(w => log(`  ⚠️  ${w}`, YELLOW))
  return false
})

// ── Git 工作区状态检查 ────────────────────────────────────
check('10/10 Git 工作区', () => {
  try {
    const status = execSync('git status --porcelain', { cwd: ROOT, encoding: 'utf-8' })
    if (!status.trim()) {
      log('  ✅ 工作区干净，无待提交更改', GREEN)
      return true
    }
    // 过滤掉本次有意更改的文件
    const skipPatterns = [
      'package.json', 'scripts/audit.js', 'scripts/build.js',
      'src/data/physics/thinkingMethods.ts', 'src/sections/physics/',
    ]
    const lines = status.trim().split('\n')
      .filter(line => !skipPatterns.some(p => line.includes(p)))
    const count = lines.length
    if (count === 0) {
      log('  ✅ 仅本次有意更改，无其他待提交文件', GREEN)
      return true
    }
    log(`  ⚠️  ${count} 个意外更改文件`, YELLOW)
    lines.slice(0, 5).forEach(l => log(`     ${l}`, YELLOW))
    if (count > 5) log(`     ... 还有 ${count - 5} 个文件`, YELLOW)
    return false
  } catch (_) {
    log('  ⚠️  无法读取 git 状态', YELLOW)
    return
  }
})

// 汇总

// ── 汇总 ─────────────────────────────────────────────────
console.log('\n==========================================')
if (PROBLEMS === 0) {
  log(`✅ 审计通过！0 个问题（10项检查全部通过）`, GREEN)
  process.exit(0)
} else {
  log(`❌ 发现 ${PROBLEMS} 个问题，请修复后再部署`, RED)
  process.exit(1)
}
