#!/usr/bin/env node
// docs/knowledge/physics/*.md → src/data/physics/concepts/P01.ts ~ P56.ts
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const MD_DIR  = join(__dirname, '..', 'docs', 'knowledge', 'physics')
const OUT_DIR = join(__dirname, '..', 'src', 'data', 'physics', 'concepts')
mkdirSync(OUT_DIR, { recursive: true })

// ─── 解析工具 ─────────────────────────────────────────

/** 提取 ## heading 到下一个 ## heading 之间的内容 */
function extractBlock(raw, heading) {
  const idx = raw.indexOf(heading)
  if (idx === -1) return ''
  const after = raw.slice(idx + heading.length)
  const end = after.search(/\n##\s/)
  return (end === -1 ? after : after.slice(0, end)).trim()
}

/** 解析基本信息表 */
function parseBasicTable(block) {
  const map = {}
  for (const row of block.split('\n')) {
    if (!row.includes('|')) continue
    const cells = row.split('|').map(s => s.trim().replace(/\*\*/g, '')).filter(Boolean)
    if (cells.length >= 2) map[cells[0]] = cells[1]
  }
  return map
}

/** 解析叙事正文六个段落
 *  原始格式：### 情境锚定（100-150字）\n<content>\n\n### 困惑预设（150-200字）\n<content>
 *  段落内容在标题行之后、下一标题 `### ` 之前
 */
function parseNarrative(raw) {
  const block = extractBlock(raw, '## 叙事正文')
  const sections = { context: '', confusion: '', experiment: '', concept: '', derivation: '', transfer: '' }
  const map = {
    '情境锚定': 'context', '困惑预设': 'confusion',
    '实验/现象呈现': 'experiment', '概念涌现': 'concept',
    '推导叙事': 'derivation', '迁移应用': 'transfer',
  }
  // 找所有 ### 段落标题
  const re = /###\s+([^\n（]+)/gu
  const matches = [...block.matchAll(re)]
  if (!matches.length) return sections

  for (let i = 0; i < matches.length; i++) {
    const m = matches[i]
    const label = m[1].trim()
    const key = map[label]
    if (!key) continue
    // 内容：m.index 之后到下一标题（或块末尾）
    const nextIdx = i + 1 < matches.length ? matches[i + 1].index : block.length
    // 从 m.index 往后找到第一个 '\n\n'（段落标题行末尾到正文之间通常有一个空行）
    const afterHeading = block.slice(m.index + m[0].length)
    const gapEnd = afterHeading.search(/\n\n/)
    const contentStart = gapEnd === -1 ? 0 : gapEnd + 2
    const content = afterHeading.slice(contentStart, nextIdx - m.index - m[0].length).trim()
    sections[key] = content.replace(/\n+/g, ' ').trim()
  }
  return sections
}

/** 解析前置知识检测 */
function parsePreCheck(raw) {
  const block = extractBlock(raw, '## 前置知识检测')
  const items = []
  const qs = block.split(/(?=^\*\*Q\d)/m)
  for (const q of qs) {
    if (!q.trim() || !q.match(/\*\*Q\d/)) continue
    const qM = q.match(/\*\*Q\d[^**]*\*\*[:：]?\s*(.+)/s)
    if (!qM) continue
    // 题目：去掉 "题目：" 前缀和后面的选项/答案/解析
    let question = qM[1].replace(/\n/g, ' ').trim()
    question = question.replace(/[A-D][.．、)]\s*[^\n]+/g, '').replace(/答案[：:][^\n]+/g, '').replace(/解析[：:][^\n]+/g, '').replace(/---/g, '').trim()
    const opts = [...q.matchAll(/^[A-D][.．、)]\s*([^\n]+)/gm)].map(m => m[1].trim())
    const ansM = q.match(/答案[：:]\s*([^\n]+)/)
    const expM = q.match(/解析[：:]\s*([^\n]+)/)
    items.push({
      question,
      options: opts,
      answer: ansM ? ansM[1].trim() : '',
      explanation: expM ? expM[1].trim() : '',
    })
  }
  return items
}

/** 提取 B/J/T 级块（从标题到下一同级标题） */
function extractLevelBlock(raw, heading) {
  const idx = raw.indexOf(heading)
  if (idx === -1) return ''
  const after = raw.slice(idx + heading.length)
  // 找下一个同级标题（B/J/T）：\n### [BJT]级
  const end = after.search(/\n### [BJT]级/)
  return (end === -1 ? after : after.slice(0, end)).trim()
}

/** 解析例题 */
function parseExamples(block) {
  if (!block) return []
  const items = []
    // 先把整个块按 **例题N 拆分（markdown 用两个星号）
    const parts = block.split(/(?=^\*\*(?:例题|Example)\d+)/m)
  for (const part of parts) {
    if (!part.trim() || !part.match(/\*\*(?:例题|Example)\d+/)) continue
    // 标题（markdown 两个星号）
    const titleM = part.match(/^\*\*(.+?)\*\*[:：]?\s*/s)
    const titleFull = titleM ? titleM[1].replace(/\*+/g, '').replace(/[（(][^）)]*[）)]$/, '').trim() : ''
    // 题干
    const qM = part.match(/题[：:]\s*(.+?)(?=\n解[：:]|\n答案[：:]|$)/s)
    const question = qM ? qM[1].replace(/\n/g, ' ').replace(/^[A-D][.．、)]\s*/g, '').replace(/[A-D][.．、)]\s*[^\n]+/g, '').trim() : titleFull
    // 解答
    const solM = part.match(/解[：:]\s*(.+?)(?=\n答案[：:]|\n核心点|$)/s)
    const solution = solM ? solM[1].replace(/\n/g, ' ').trim() : ''
    // 答案
    const ansM = part.match(/答案[：:]\s*([^\n]+)/)
    const answer = ansM ? ansM[1].trim() : ''
    // 核心点
    const noteM = part.match(/核心点[：:]\s*([^\n]+)/)
    const note = noteM ? noteM[1].trim() : ''
    items.push({ label: question, formula: answer, note: solution + (note ? '｜' + note : '') })
  }
  return items
}

/** 解析公式卡片（只取"核心公式"表，过滤变量说明表）
 *  垃圾行特征：单元格数≤3 且第二列是单个希腊字母/变量名（如 \Delta x）
 */
function parseFormulas(raw) {
  const block = extractBlock(raw, '## 公式卡片')
  if (!block) return []
  const formulas = []
  const lines = block.split('\n')
  let inCore = false
  for (const line of lines) {
    // 进入变量说明/推导/变形区域后停止
    if (line.match(/^###\s/) && (line.includes('变量说明') || line.includes('推导') || line.includes('变形'))) break
    // 进入核心公式表
    if (line.includes('核心公式')) { inCore = true; continue }
    // 跳过无意义的行
    if (!inCore) continue
    if (!line.startsWith('|') || line.match(/^[\|\s-]+$/)) continue
    const cells = line.split('|').map(s => s.trim()).filter(Boolean)
    // 必须有3列（公式/名称/说明），且第一列是完整LaTeX
    if (cells.length >= 3 && cells[0].match(/^\$.+\$$/)) {
      formulas.push({ formula: cells[0], name: cells[1] || '', usage: cells[2] || '' })
    }
  }
  return formulas
}

/** 解析理解度自评 */
function parseSelfEval(raw) {
  const block = extractBlock(raw, '## 理解度自评')
  const items = []
  for (const m of block.matchAll(/([ABC])级[·. ].*?\*\*/gs)) {
    const start = m.index
    const rest = block.slice(start)
    const qM = rest.match(/\*\*[:：]\s*([^\n→]+)/)
    const descM = rest.match(/→\s*行动[：:]\s*([^\n]+)/)
    items.push({ level: m[1], question: qM ? qM[1].trim() : '', description: descM ? descM[1].trim() : '' })
  }
  return items
}

/** 解析跨学科关联表 */
function parseCrossLinks(raw) {
  const block = extractBlock(raw, '## 跨学科关联')
  const items = []
  let started = false
  for (const line of block.split('\n')) {
    if (!started && line.includes('学科')) { started = true; continue }
    if (!started || !line.startsWith('|') || line.match(/^[\|\s-]+$/) || line.trim() === '|') continue
    const cols = line.split('|').map(s => s.trim().replace(/\*\*/g, '')).filter(Boolean)
    if (cols.length >= 3 && cols[0] && cols[0] !== ':---') {
      items.push({ subject: cols[0], conceptName: cols[1], relation: cols[2], conceptId: '' })
    }
  }
  return items
}

// ─── 主循环 ─────────────────────────────────────────

const MODULE_MAP = {
  '运动学': '运动学', '力学': '力学', '曲线运动与万有引力': '曲线运动与万有引力',
  '能量与动量': '能量与动量', '电磁学': '电磁学',
  '热学·光学·机械波': '热学·光学·机械波', '近代物理': '近代物理',
}

const files = readdirSync(MD_DIR).filter(f => f.endsWith('.md') && f !== 'README.md')
let count = 0, errors = []

for (const file of files) {
  try {
    const raw = readFileSync(join(MD_DIR, file), 'utf8')
    const basename = file.replace(/\.md$/, '')
    const idM = basename.match(/^P(\d+)/)
    if (!idM) { errors.push(`${file}: 文件名格式不对`); continue }
    const id = 'P' + idM[1]

    // 基本信息
    const basicBlock = extractBlock(raw, '## 基本信息')
    const basic = parseBasicTable(basicBlock)
    const name = basic['name'] || basename
    const chapter = basic['chapter'] || ''
    const section2 = basic['section'] || chapter
    const relatedModels = (basic['relatedModels'] || '').split(/[、,，]/).filter(Boolean)

    // 叙事正文
    const narrative = parseNarrative(raw)

    // 学科本质 → subtitle
    const essM = raw.match(/>\s*\*\*学科本质\*\*[：:]\s*(.+)/)
    const subtitle = essM ? essM[1].replace(/<[^>]+>/g, '').replace(/\*\*/g, '').trim() : name

    // 前置检测
    const preCheck = parsePreCheck(raw)

    // 分层变形
    const bBlock = extractLevelBlock(raw, '### B级变形')
    const jBlock = extractLevelBlock(raw, '### J级变形')
    const tBlock = extractLevelBlock(raw, '### T级变形')
    const variations = { basic: parseExamples(bBlock), advanced: parseExamples(jBlock), challenge: parseExamples(tBlock) }

    // 公式卡片
    const formulas = parseFormulas(raw)

    // 理解度自评
    const selfEval = parseSelfEval(raw)

    // 跨学科
    const crossLinks = parseCrossLinks(raw)

    // 难度
    let difficulty = 1
    if (variations.advanced.length || variations.challenge.length) difficulty = 2
    if (variations.challenge.length > 1) difficulty = 3

    // module
    const module = MODULE_MAP[chapter] || chapter.split('·')[0].trim()

    const ts = `// ${id} — ${name}
// 内容来源：docs/knowledge/physics/${file}

import type { ConceptData } from './types'

export const ${id}: ConceptData = {
  id: '${id}',
  title: '${name.replace(/'/g, "\\'")}',
  subtitle: '${subtitle.replace(/'/g, "\\'")}',
  module: '${module}',
  chapter: '${section2.replace(/'/g, "\\'")}',
  difficulty: ${difficulty},

  // ===== 区块1：前置知识检测 =====
  preCheck: ${JSON.stringify(preCheck, null, 2)},

  // ===== 区块2：叙事正文 =====
  narrative: ${JSON.stringify(narrative, null, 2)},

  // ===== 区块3：分层变形 =====
  variations: ${JSON.stringify(variations, null, 2)},

  // ===== 区块4：公式卡片 =====
  formulas: ${JSON.stringify(formulas, null, 2)},

  // ===== 区块5：理解度自评 =====
  selfEval: ${JSON.stringify(selfEval, null, 2)},

  // ===== 关联链接 =====
  relatedModels: ${JSON.stringify(relatedModels, null, 2)},
  crossLinks: ${JSON.stringify(crossLinks, null, 2)},
}
`
    writeFileSync(join(OUT_DIR, `${basename}.ts`), ts, 'utf8')
    count++
  } catch (e) {
    errors.push(`${file}: ${e.message}`)
  }
}

console.log(`✅ 转换完成：${count} 个文件`)
if (errors.length) { console.log(`⚠️ ${errors.length} 个警告：`); errors.forEach(e => console.log(' -', e)) }
