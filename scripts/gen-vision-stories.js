// ESM script: parse story/*.md => visionStories.ts + VisionPages.tsx storyDetails
import { readFileSync, writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const STORY_DIR = resolve(__dirname, '../../story')
const TS_DATA = resolve(__dirname, '../src/data/physics/visionStories.ts')
const TS_PAGES = resolve(__dirname, '../src/sections/VisionPages.tsx')

// category order for sorting
const CAT_ORDER = ['edge','fun','future','insight','micro','myth','origin','puzzle','stars','think']

// file list
const FILES = [
  { file: '前沿-edge.md',   prefix: 'edge' },
  { file: '趣玩-fun.md',   prefix: 'fun' },
  { file: '幻想-future.md', prefix: 'future' },
  { file: '洞见-insight.md',prefix: 'insight' },
  { file: '察微-micro.md',  prefix: 'micro' },
  { file: '迷思-myth.md',   prefix: 'myth' },
  { file: '溯源-origin.md', prefix: 'origin' },
  { file: '谜题-puzzle.md', prefix: 'puzzle' },
  { file: '群星-stars.md',  prefix: 'stars' },
  { file: '思辨-think.md',  prefix: 'think' },
]

// escape for TypeScript template literal
function escTs(str) {
  return str
    .replace(/\\/g, '\\\\')   // backslash first
    .replace(/`/g, '\\`')     // backtick
    .replace(/\$/g, '\\$')    // dollar sign
}

// parse one md file → array of story objects
function parseFile(filePath) {
  const raw = readFileSync(filePath, 'utf-8')
  // split by story blocks (## story-xxx)
  const blocks = raw.split(/^## story-/m).filter(s => s.trim())
  return blocks.map(block => {
    const lines = block.split('\n')
    // id from first line e.g. "origin-001"
    const id = lines[0].trim()
    
    // --- parse card info ---
    const cardMatch = block.match(/### 卡片信息\n([\s\S]*?)(?=\n### 正文)/)
    const cardText = cardMatch ? cardMatch[1] : ''
    const getField = (name) => {
      const m = cardText.match(new RegExp(`^-\\s+${name}:\\s*(.+)$`, 'm'))
      return m ? m[1].trim() : ''
    }
    const title = getField('title')
    const category = getField('category')
    const difficulty = getField('difficulty')
    const summary = getField('summary')
    const readTime = parseInt(getField('readTime')) || 5

    // --- parse 正文 sections ---
    const bodyMatch = block.match(/### 正文\n([\s\S]*)$/)
    const bodyText = bodyMatch ? bodyMatch[1] : ''

    // extract section between #### heading and next #### or end
    const getSection = (label) => {
      const re = new RegExp(`#### ${label}\\n([\\s\\S]*?)(?=\\n#### |\\n---\\s*$|$)`)
      const m = bodyText.match(re)
      return m ? m[1].replace(/\n+$/, '') : ''
    }

    const background = getSection('故事背景')
    const core = getSection('核心内容')
    const principle = getSection('物理原理')
    const thinking = getSection('思考延伸')

    return { id, title, category, difficulty, summary, readTime, background, core, principle, thinking }
  }).filter(s => /^[a-z]+-\d{3}$/.test(s.id))
}

// collect all stories
const allStories = []
for (const { file, prefix } of FILES) {
  const fp = resolve(STORY_DIR, file)
  const stories = parseFile(fp)
  console.log(`  ${file}: ${stories.length} stories (${stories.map(s=>s.id).join(', ')})`)
  allStories.push(...stories)
}

// sort by CAT_ORDER then id number
allStories.sort((a, b) => {
  const ai = CAT_ORDER.indexOf(a.id.split('-')[0])
  const bi = CAT_ORDER.indexOf(b.id.split('-')[0])
  if (ai !== bi) return ai - bi
  return a.id.localeCompare(b.id)
})

console.log(`\nTotal stories: ${allStories.length}`)

// ===================== generate visionStories.ts =====================
const tsDataLines = [
  '// Auto-generated: Physics Vision Stories',
  'export interface VisionStory {',
  '  id: string',
  '  title: string',
  '  category: string',
  '  difficulty: string',
  '  summary: string',
  '  readTime: number',
  '  detailKey: string',
  '}',
  'export const physicsVisionStories: VisionStory[] = [',
]
for (const s of allStories) {
  const summaryEsc = s.summary.replace(/"/g, '\\"')
  const titleEsc = s.title.replace(/"/g, '\\"')
  tsDataLines.push(
    `  {id:"${s.id}",title:"${titleEsc}",category:"${s.category}",difficulty:"${s.difficulty}",summary:"${summaryEsc}",readTime:${s.readTime},detailKey:"${s.id}"},`
  )
}
tsDataLines.push(']', '')
writeFileSync(TS_DATA, tsDataLines.join('\n'), 'utf-8')
console.log(`\nWritten: ${TS_DATA}`)

// ===================== generate storyDetails object content =====================
const detailLines = []
for (const s of allStories) {
  detailLines.push(`  '${s.id}': {`)
  detailLines.push(`    background: \`${escTs(s.background)}\`,`)
  detailLines.push(`    core: \`${escTs(s.core)}\`,`)
  detailLines.push(`    principle: \`${escTs(s.principle)}\`,`)
  detailLines.push(`    thinking: \`${escTs(s.thinking)}\`,`)
  detailLines.push(`  },`)
}
const detailBlock = detailLines.join('\n')

// Generate complete VisionPages.tsx using template files
const HEADER_TPL = resolve(__dirname, 'VisionPages.header.txt')
const FOOTER_TPL = resolve(__dirname, 'VisionPages.footer.txt')
const header = readFileSync(HEADER_TPL, 'utf-8')
const footer = readFileSync(FOOTER_TPL, 'utf-8')
const newPages = header + detailBlock + '\n' + footer
writeFileSync(TS_PAGES, newPages, 'utf-8')
console.log(`Written: ${TS_PAGES}`)
console.log('\nDone!')
