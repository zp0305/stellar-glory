import { useParams, Link } from 'react-router-dom'
import { AppLayout } from '@/components/layout/Navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useUserStore } from '@/stores/userStore'
import { useFavoritesStore } from '@/stores/favoritesStore'
import { useSubjectData } from '@/hooks/useSubjectData'
import { ComingSoon } from '@/components/ComingSoon'
import { cn } from '@/lib/utils'
import {
  BookOpen, Zap, Network, Lightbulb, FlaskConical,
  CheckCircle, CircleDot, Circle,
  Star, ChevronLeft, ChevronRight, AlertTriangle,
  BrainCircuit,
} from 'lucide-react'

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
  const { data, subjectMeta } = useSubjectData()

  if (!data) {
    return <ComingSoon name="模型详情" subject={subjectMeta?.name} />
  }

  const modelDataMap = data.getModelDataMap()
  const ALL_IDS = data.getAllModelIds()
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
          <Link to={`/${subjectMeta?.id}/models`}><Button variant="outline">返回列表</Button></Link>
        </div>
      </AppLayout>
    )
  }

  const pos = model.positioning ?? {}

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
    {
      id: 'life', label: '生活应用', Icon: FlaskConical, bg: 'bg-cyan-50', color: 'text-cyan-600',
      content: model.lifeApplication || null,
    },
  ]

  const relatedModels = ALL_IDS
    .filter(id => { const m = modelDataMap[id]; return id !== modelId && m?.module === model.module })
    .slice(0, 4)

  return (
    <AppLayout showSubjectNav anchors={[]}>
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">
        <div className="flex items-center justify-between">
          <Link to={`/${subjectMeta?.id}/models`}>
            <Button variant="ghost" size="sm" className="pl-0 gap-1">
              <span className="text-muted-foreground">←</span> 模型列表
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            {prevId && <Link to={`/${subjectMeta?.id}/models/${prevId}`}><Button variant="outline" size="sm">← 上一模型</Button></Link>}
            {nextId && <Link to={`/${subjectMeta?.id}/models/${nextId}`}><Button variant="outline" size="sm">下一模型 →</Button></Link>}
          </div>
        </div>

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

        <div className="flex items-center justify-between gap-4 pt-4 border-t">
          {prevId ? (
            <Link to={`/${subjectMeta?.id}/models/${prevId}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              <ChevronLeft className="w-4 h-4" /> 上一模型
            </Link>
          ) : <div />}
          <Link to={`/${subjectMeta?.id}/models`} className="text-xs text-muted-foreground hover:text-foreground">模型列表</Link>
          {nextId ? (
            <Link to={`/${subjectMeta?.id}/models/${nextId}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              下一模型 <ChevronRight className="w-4 h-4" />
            </Link>
          ) : <div />}
        </div>

        {relatedModels.length > 0 && (
          <div className="pt-4 border-t">
            <h3 className="font-bold text-sm mb-3">同模块推荐</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {relatedModels.map(id => {
                const m = modelDataMap[id]
                return (
                  <Link key={id} to={`/${subjectMeta?.id}/models/${id}`}>
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