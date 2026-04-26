#!/usr/bin/env node
// ============================================================
// 星耀统一构建脚本
// 用法：node scripts/build.js
// ============================================================

import { execSync } from 'child_process'
import { rmSync, existsSync, readdirSync, statSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')

const RED    = '\x1b[31m'
const GREEN  = '\x1b[32m'
const YELLOW = '\x1b[33m'
const CYAN   = '\x1b[36m'
const RESET  = '\x1b[0m'

function log(msg, color = RESET) {
  console.log(`${color}${msg}${RESET}`)
}

function logStep(n, total, label) {
  console.log(`\n${CYAN}[${n}/${total}]${RESET} ${label}`)
}

function run(cmd, opts = {}) {
  const cwd = opts.cwd || ROOT
  try {
    execSync(cmd, { cwd, stdio: 'inherit', timeout: 120_000 })
    return true
  } catch (e) {
    return false
  }
}

function getDirSize(dir) {
  let size = 0
  if (!existsSync(dir)) return 0
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    try {
      const s = statSync(full)
      size += s.isDirectory() ? getDirSize(full) : s.size
    } catch (_) {}
  }
  return size
}

function fmtSize(bytes) {
  if (bytes < 1024) return bytes + ' B'
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
  return (bytes / 1024 / 1024).toFixed(2) + ' MB'
}

// ── 1. 清理 dist ──────────────────────────────────────
logStep(1, 3, '清理 dist')
const distDir = join(ROOT, 'dist')
if (existsSync(distDir)) {
  rmSync(distDir, { recursive: true, force: true })
  log('  已删除 dist/', GREEN)
} else {
  log('  dist/ 不存在，跳过清理', YELLOW)
}

// ── 2. TypeScript 类型检查 ────────────────────────────
logStep(2, 3, 'TypeScript 类型检查')
const tscPath = join(ROOT, 'node_modules', 'typescript', 'bin', 'tsc')
if (!run(`node "${tscPath}" --noEmit`)) {
  log('  ❌ TypeScript 检查失败', RED)
  process.exit(1)
}
log('  ✅ TypeScript 检查通过', GREEN)

// ── 3. Vite 生产构建 ─────────────────────────────────
logStep(3, 3, 'Vite 生产构建')
if (!run('node "./node_modules/vite/bin/vite.js" build')) {
  log('  ❌ Vite 构建失败', RED)
  process.exit(1)
}

// ── 摘要 ──────────────────────────────────────────────
if (existsSync(distDir)) {
  const size = getDirSize(distDir)
  log('\n==========================================', CYAN)
  log('✅ 构建成功', GREEN)
  log(`   dist 大小: ${fmtSize(size)}`, CYAN)
  log('==========================================', CYAN)
  log('\n下一步: git push 到 main 分支，GitHub Actions 自动部署', YELLOW)
} else {
  log('  ⚠️  dist/ 不存在', YELLOW)
  process.exit(1)
}
