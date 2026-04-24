import { useParams, Link } from 'react-router-dom'
import { AppLayout } from '@/components/layout/Navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useUserStore } from '@/stores/userStore'
import { useFavoritesStore } from '@/stores/favoritesStore'
import { cn } from '@/lib/utils'
import {
  BookOpen, Zap, Network, Lightbulb, FlaskConical,
  CheckCircle, CircleDot, Circle,
  Star, ChevronLeft, ChevronRight, AlertTriangle,
  BrainCircuit,
} from 'lucide-react'

// ===== 42个模型静态导入 =====
import {M01} from '@/data/physics/models/M01_匀变速直线运动'
import {M02} from '@/data/physics/models/M02_自由落体与竖直上抛'
import {M03} from '@/data/physics/models/M03_竖直上抛与追及相遇'
import {M04} from '@/data/physics/models/M04_追及与相遇'
import {M05} from '@/data/physics/models/M05_连接体模型'
import {M06} from '@/data/physics/models/M06_传送带模型'
import {M07} from '@/data/physics/models/M07_弹簧模型'
import {M08} from '@/data/physics/models/M08_板块模型'
import {M09} from '@/data/physics/models/M09_传送带模型'
import {M10} from '@/data/physics/models/M10_曲线运动基础'
import {M11} from '@/data/physics/models/M11_平抛运动'
import {M12} from '@/data/physics/models/M12_圆周运动'
import {M13} from '@/data/physics/models/M13_天体运动'
import {M14} from '@/data/physics/models/M14_功和功率'
import {M15} from '@/data/physics/models/M15_动能定理'
import {M16} from '@/data/physics/models/M16_机械能守恒'
import {M17} from '@/data/physics/models/M17_动量定理'
import {M18} from '@/data/physics/models/M18_动量守恒'
import {M19} from '@/data/physics/models/M19_碰撞模型'
import {M20} from '@/data/physics/models/M20_电场强度'
import {M21} from '@/data/physics/models/M21_电势与电势能'
import {M22} from '@/data/physics/models/M22_电容器'
import {M23} from '@/data/physics/models/M23_欧姆定律与电路'
import {M24} from '@/data/physics/models/M24_磁场与安培力'
import {M25} from '@/data/physics/models/M25_洛伦兹力'
import {M26} from '@/data/physics/models/M26_电磁感应'
import {M27} from '@/data/physics/models/M27_交变电流'
import {M28} from '@/data/physics/models/M28_理想变压器'
import {M29} from '@/data/physics/models/M29_分子动理论'
import {M30} from '@/data/physics/models/M30_气体状态方程'
import {M31} from '@/data/physics/models/M31_热力学第一定律'
import {M32} from '@/data/physics/models/M32_热力学第二定律'
import {M33} from '@/data/physics/models/M33_光的折射与全反射'
import {M34} from '@/data/physics/models/M34_透镜成像规律'
import {M35} from '@/data/physics/models/M35_干涉与衍射'
import {M36} from '@/data/physics/models/M36_机械振动'
import {M37} from '@/data/physics/models/M37_机械波'
import {M38} from '@/data/physics/models/M38_波的干涉与衍射'
import {M39} from '@/data/physics/models/M39_光电效应与波粒二象性'
import {M40} from '@/data/physics/models/M40_原子结构'
import {M41} from '@/data/physics/models/M41_核反应与核能'
import {M42} from '@/data/physics/models/M42_相对论基础'

const modelDataMap: Record<string, any> = {
  'PHY-M01': M01, 'PHY-M02': M02, 'PHY-M03': M03, 'PHY-M04': M04,
  'PHY-M05': M05, 'PHY-M06': M06, 'PHY-M07': M07, 'PHY-M08': M08,
  'PHY-M09': M09, 'PHY-M10': M10, 'PHY-M11': M11, 'PHY-M12': M12,
  'PHY-M13': M13, 'PHY-M14': M14, 'PHY-M15': M15, 'PHY-M16': M16,
  'PHY-M17': M17, 'PHY-M18': M18, 'PHY-M19': M19, 'PHY-M20': M20,
  'PHY-M21': M21, 'PHY-M22': M22, 'PHY-M23': M23, 'PHY-M24': M24,
  'PHY-M25': M25, 'PHY-M26': M26, 'PHY-M27': M27, 'PHY-M28': M28,
  'PHY-M29': M29, 'PHY-M30': M30, 'PHY-M31': M31, 'PHY-M32': M32,
  'PHY-M33': M33, 'PHY-M34': M34, 'PHY-M35': M35, 'PHY-M36': M36,
  'PHY-M37': M37, 'PHY-M38': M38, 'PHY-M39': M39, 'PHY-M40': M40,
  'PHY-M41': M41, 'PHY-M42': M42,
}

const ALL_IDS = Object.keys(modelDataMap)

const DIFF_LABEL: Record<number, string> = { 1: '基础', 2: '中等', 3: '进阶' }
const DIFF_CLS: Record<number, string> = {
  1: 'bg-green-100 text-green-700',
  2: 'bg-yellow-100 text-yellow-700',
  3: 'bg-red-100 text-red-700',
}

type Level = 'A' | 'B' | 'C'
const LEVELS: { lvl: Level; label: string; Icon: any; cls: string }[] = [
  { lvl: 'A', label: '已掌握', Icon: CheckCircle, cls: 'bg-green-50 border-green-300 text-green-700' },
  { lvl: 'B', label: '需巩固', Icon: CircleDot, cls: 'bg-yellow-50 border-yellow-300 text-yellow-700' },
  { lvl: 'C', label: '重新学', Icon: Circle, cls: 'bg-gray-50 border-gray-300 text-gray-600' },
]

// 7个章节的元信息
const SECTIONS = [
  { id: 'positioning', label: '定位与本质', Icon: BookOpen, bg: 'bg-blue-50', color: 'text-blue-600' },
  { id: 'principle',    label: '核心原理',   Icon: BookOpen, bg: 'bg-primary/10', color: 'text-primary' },
  { id: 'variations',  label: '分层变形',   Icon: Zap, bg: 'bg-amber-50', color: 'text-amber-600' },
  { id: 'network',     label: '知识网络',   Icon: Network, bg: 'bg-purple-50', color: 'text-purple-600' },
  { id: 'method',      label: '方法论',     Icon: Lightbulb, bg: 'bg-green-50', color: 'text-green-600' },
  { id: 'selfcheck',   label: '自我检测',   Icon: BrainCircuit, bg: 'bg-pink-50', color: 'text-pink-600' },
  { id: 'life',        label: '生活应用',   Icon: FlaskConical, bg: 'bg-cyan-50', color: 'text-cyan-600' },
]

function formatVariations(v: any): string | null {
  if (!v) return null
  const parts: string[] = []
  for (const { key, label } of [
    { key: 'basic', label: '🟢 基础变形' },
    { key: 'advanced', label: '🟡 进阶变形' },
    { key: 'challenge', label: '🔴 挑战变形' },
  ]) {
    const arr = v[key]
    if (arr?.length) {
      parts.push(label)
      arr.forEach((item: any) => {
        parts.push(`  · ${item.label || ''}`)
        if (item.formula) parts.push(`    公式：${item.formula}`)
        if (item.note) parts.push(`    说明：${item.note}`)
      })
    }
  }
  return parts.length ? parts.join('\n') : null
}

function formatNetwork(net: any): string | null {
  if (!net) return null
  const parts: string[] = []
  if (net.parents?.length) parts.push(`前置模型：${net.parents.join('、')}`)
  if (net.children?.length) parts.push(`后续模型：${net.children.join('、')}`)
  if (net.related?.length) parts.push(`相关模型：${net.related.join('、')}`)
  if (net.coreFormula) parts.push(`核心公式：${net.coreFormula}`)
  return parts.length ? parts.join('\n') : null
}

function formatMethodology(m: any): string | null {
  if (!m) return null
  const parts: string[] = []
  if (m.approach) parts.push(m.approach)
  if (m.decisionTree?.length) m.decisionTree.forEach((s: string, i: number) => parts.push(`${i + 1}. ${s}`))
  if (m.commonPitfalls?.length) {
    parts.push('常见陷阱：')
    m.commonPitfalls.forEach((p: string) => parts.push(`  · ${p}`))
  }
  return parts.length ? parts.join('\n') : null
}

export function ModelPage() {
  const { modelId } = useParams<{ modelId: string }>()
  const { progress, updateProgress } = useUserStore()
  const { toggleFavorite, isFavorited } = useFavoritesStore()

  const model = modelId ? (modelDataMap[modelId] ?? null) : null

  const idx = modelId ? ALL_IDS.indexOf(modelId) : -1
  const prevId = idx > 0 ? ALL_IDS[idx - 1] : null
  const nextId = idx < ALL_IDS.length - 1 ? ALL_IDS[idx + 1] : null

  const status = progress[modelId ?? '']?.status
  const myLevel: Level | null =
    status === 'mastered' ? 'A' :
    status === 'learning' ? 'B' :
    status === 'undone' ? 'C' : null

  const handleAssess = (lvl: Level) => {
    const s = lvl === 'A' ? 'mastered' : lvl === 'B' ? 'learning' : 'undone'
    if (modelId) updateProgress(modelId, { status: s, progress: lvl === 'A' ? 100 : lvl === 'B' ? 50 : 0 })
  }

  if (!model) {
    return (
      <AppLayout showSubjectNav>
        <div className="max-w-3xl mx-auto px-4 py-16 text-center">
          <AlertTriangle className="w-12 h-12 mx-auto mb-4 text-orange-400" />
          <h2 className="text-xl font-semibold mb-2">模型不存在</h2>
          <p className="text-muted-foreground mb-6">该模型尚未收录</p>
          <Link to="/physics/models"><Button variant="outline">返回列表</Button></Link>
        </div>
      </AppLayout>
    )
  }

  const pos = model.positioning ?? {}

  const anchors = SECTIONS.map(s => ({ id: 'section-' + s.id, label: s.label }))

  // 每个章节的内容
  const sectionsContent = [
    {
      id: 'positioning',
      label: '定位与本质', Icon: BookOpen, bg: 'bg-blue-50', color: 'text-blue-600',
      content: [
        pos.core ? `核心定义：${pos.core}` : '',
        pos.essence ? `本质说明：${pos.essence}` : '',
        pos.keyInsight ? `关键洞察：${pos.keyInsight}` : '',
        pos.keywords?.length ? `识别关键词：${pos.keywords.map((k: any) => k.word).join('、')}` : '',
      ].filter(Boolean).join('\n\n') || null,
    },
    {
      id: 'principle', label: '核心原理', Icon: BookOpen, bg: 'bg-primary/10', color: 'text-primary',
      content: model.principle || null,
    },
    {
      id: 'variations', label: '分层变形', Icon: Zap, bg: 'bg-amber-50', color: 'text-amber-600',
      content: formatVariations(model.variations),
    },
    {
      id: 'network', label: '知识网络', Icon: Network, bg: 'bg-purple-50', color: 'text-purple-600',
      content: formatNetwork(model.knowledgeNetwork),
    },
    {
      id: 'method', label: '方法论', Icon: Lightbulb, bg: 'bg-green-50', color: 'text-green-600',
      content: formatMethodology(model.methodology),
    },
    // 自我检测已移除 → 统一使用题库系统 /physics/exercises/:modelId/do
    {
      id: 'life', label: '生活应用', Icon: FlaskConical, bg: 'bg-cyan-50', color: 'text-cyan-600',
      content: model.lifeApplication || null,
    },
  ]

  // 同学科推荐
  const relatedModels = ALL_IDS
    .filter(id => { const m = modelDataMap[id]; return id !== modelId && m?.module === model.module })
    .slice(0, 4)

  return (
    <AppLayout showSubjectNav anchors={[]}>
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">

        {/* 返回 + 翻页 */}
        <div className="flex items-center justify-between">
          <Link to="/physics/models">
            <Button variant="ghost" size="sm" className="pl-0 gap-1">
              <span className="text-muted-foreground">←</span> 模型列表
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            {prevId && <Link to={`/physics/models/${prevId}`}><Button variant="outline" size="sm">← 上一模型</Button></Link>}
            {nextId && <Link to={`/physics/models/${nextId}`}><Button variant="outline" size="sm">下一模型 →</Button></Link>}
          </div>
        </div>

        {/* 头部 */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className={"text-xs px-2.5 py-1 rounded-full font-medium " + (DIFF_CLS[model.difficulty] || 'bg-gray-100')}>
              {DIFF_LABEL[model.difficulty]}
            </span>
            <Badge variant="outline">{model.module}</Badge>
            <Badge variant="outline">{model.chapter}</Badge>
            <button
              onClick={() => toggleFavorite({ type: 'model', itemId: modelId ?? '', title: model.title })}
              className={cn(
                'flex items-center gap-1 px-2.5 py-1 rounded-full border text-xs font-medium transition-all ml-auto',
                isFavorited(modelId ?? '', 'model')
                  ? 'border-yellow-400 bg-yellow-50 text-yellow-600'
                  : 'border-border text-muted-foreground hover:border-yellow-300'
              )}>
              <Star className={cn('w-3 h-3', isFavorited(modelId ?? '', 'model') && 'fill-yellow-400')} />
              {isFavorited(modelId ?? '', 'model') ? '已收藏' : '收藏'}
            </button>
          </div>
          <h1 className="text-3xl font-bold">{model.title}</h1>
          <p className="text-sm text-muted-foreground">{model.subtitle}</p>
          {pos.core && (
            <div className="bg-primary/5 border border-primary/15 rounded-xl p-3">
              <p className="text-sm font-medium text-primary">「{pos.core}」</p>
              {pos.keyInsight && <p className="text-xs text-muted-foreground mt-1">💡 {pos.keyInsight}</p>}
            </div>
          )}
          {/* 理解度 */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <BrainCircuit className="w-3.5 h-3.5" />理解度：
            </span>
            {LEVELS.map(({ lvl, label, Icon, cls }) => (
              <button
                key={lvl}
                onClick={() => handleAssess(lvl)}
                className={cn(
                  'flex items-center gap-1 px-2.5 py-1 rounded-full border text-xs font-medium',
                  myLevel === lvl ? cls : 'border-border text-muted-foreground hover:border-gray-300'
                )}>
                <Icon className="w-3.5 h-3.5" />{label}
              </button>
            ))}
            {myLevel && <span className="text-xs text-green-600">已记录</span>}
          </div>
        </div>

        {/* 章节列表 */}
        {sectionsContent.map((sec) => (
          <div key={sec.id} id={'section-' + sec.id}>
            <div className="flex items-center gap-2 mb-3">
              <div className={cn("w-6 h-6 rounded-full flex items-center justify-center shrink-0", sec.bg)}>
                <sec.Icon className={cn("w-4 h-4", sec.color)} />
              </div>
              <h2 className="font-bold text-base">{sec.label}</h2>
            </div>
            {sec.content ? (
              <Card>
                <CardContent className="p-5 text-sm leading-relaxed whitespace-pre-wrap">
                  {sec.content}
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-muted/30 border-dashed">
                <CardContent className="p-5 text-center text-muted-foreground text-sm">
                  该章节内容整理中
                </CardContent>
              </Card>
            )}
          </div>
        ))}

        {/* 底部翻页 */}
        <div className="flex items-center justify-between gap-4 pt-4 border-t">
          {prevId ? (
            <Link to={`/physics/models/${prevId}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              <ChevronLeft className="w-4 h-4" /> 上一模型
            </Link>
          ) : <div />}
          <Link to="/physics/models" className="text-xs text-muted-foreground hover:text-foreground">模型列表</Link>
          {nextId ? (
            <Link to={`/physics/models/${nextId}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              下一模型 <ChevronRight className="w-4 h-4" />
            </Link>
          ) : <div />}
        </div>

        {/* 同模块推荐 */}
        {relatedModels.length > 0 && (
          <div className="pt-4 border-t">
            <h3 className="font-bold text-sm mb-3">同模块推荐</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {relatedModels.map(id => {
                const m = modelDataMap[id]
                return (
                  <Link key={id} to={`/physics/models/${id}`}>
                    <Card className="hover:shadow-sm hover:border-primary/30 transition-all cursor-pointer">
                      <CardContent className="p-3">
                        <p className="text-sm font-medium line-clamp-1 mb-1">{m?.title}</p>
                        <p className="text-xs text-muted-foreground">{m?.subtitle}</p>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        )}

      </div>
    </AppLayout>
  )
}
