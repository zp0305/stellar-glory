import { useParams, Link } from 'react-router-dom'
import { AppLayout } from '@/components/layout/Navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useUserStore } from '@/stores/userStore'
import { useFavoritesStore } from '@/stores/favoritesStore'
import { cn } from '@/lib/utils'
import {
  BookOpen, Zap, BrainCircuit, Calculator, CheckCircle, CircleDot, Circle,
  Star, ChevronLeft, ChevronRight, AlertTriangle, Lightbulb, FlaskConical,
  Network,
} from 'lucide-react'
import { conceptDataMap, getConceptMeta, getAllConceptIds } from '@/data/physics/concepts'

const ALL_IDS = getAllConceptIds()

type Level = 'A' | 'B' | 'C'
const LEVELS: { lvl: Level; label: string; Icon: any; cls: string }[] = [
  { lvl: 'A', label: '已掌握', Icon: CheckCircle, cls: 'bg-green-50 border-green-300 text-green-700' },
  { lvl: 'B', label: '需巩固', Icon: CircleDot, cls: 'bg-yellow-50 border-yellow-300 text-yellow-700' },
  { lvl: 'C', label: '重新学', Icon: Circle, cls: 'bg-gray-50 border-gray-300 text-gray-600' },
]

// 5个区块定义（对齐规格书 3.3 节）
const SECTIONS = [
  { id: 'precheck',    label: '前置知识检测', Icon: Lightbulb, bg: 'bg-blue-50', color: 'text-blue-600' },
  { id: 'narrative',   label: '叙事正文',     Icon: BookOpen, bg: 'bg-primary/10', color: 'text-primary' },
  { id: 'variations',  label: '分层变形',     Icon: Zap, bg: 'bg-amber-50', color: 'text-amber-600' },
  { id: 'formulas',    label: '公式卡片',     Icon: Calculator, bg: 'bg-purple-50', color: 'text-purple-600' },
  { id: 'selfeval',    label: '理解度自评',   Icon: BrainCircuit, bg: 'bg-pink-50', color: 'text-pink-600' },
]

function formatVariations(v: any): string | null {
  if (!v) return null
  const parts: string[] = []
  for (const { key, label } of [
    { key: 'basic', label: '🟢 B级基础变形' },
    { key: 'advanced', label: '🟡 J级进阶变形' },
    { key: 'challenge', label: '🔴 T级挑战变形' },
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

// 叙事正文的 6 个段落标题
const NARRATIVE_LABELS: { key: keyof typeof conceptDataMap['P01']['narrative']; label: string }[] = [
  { key: 'context', label: '情境锚定' },
  { key: 'confusion', label: '困惑预设' },
  { key: 'experiment', label: '实验/现象呈现' },
  { key: 'concept', label: '概念涌现' },
  { key: 'derivation', label: '推导叙事' },
  { key: 'transfer', label: '迁移与应用' },
]

export function ConceptPage() {
  const { conceptId } = useParams<{ conceptId: string }>()
  const { progress, updateProgress } = useUserStore()
  const { toggleFavorite, isFavorited } = useFavoritesStore()

  const concept = conceptId ? (conceptDataMap[conceptId] ?? null) : null
  const meta = conceptId ? getConceptMeta(conceptId) : null

  const idx = conceptId ? ALL_IDS.indexOf(conceptId) : -1
  const prevId = idx > 0 ? ALL_IDS[idx - 1] : null
  const nextId = idx < ALL_IDS.length - 1 ? ALL_IDS[idx + 1] : null

  const status = progress[conceptId ?? '']?.status
  const myLevel: Level | null =
    status === 'mastered' ? 'A' :
    status === 'learning' ? 'B' :
    status === 'undone' ? 'C' : null

  const handleAssess = (lvl: Level) => {
    const s = lvl === 'A' ? 'mastered' : lvl === 'B' ? 'learning' : 'undone'
    if (conceptId) updateProgress(conceptId, { status: s, progress: lvl === 'A' ? 100 : lvl === 'B' ? 50 : 0 })
  }

  if (!concept) {
    return (
      <AppLayout showSubjectNav>
        <div className="max-w-3xl mx-auto px-4 py-16 text-center">
          <AlertTriangle className="w-12 h-12 mx-auto mb-4 text-orange-400" />
          <h2 className="text-xl font-semibold mb-2">知识节点不存在</h2>
          <p className="text-muted-foreground mb-6">{conceptId ? `概念 "${conceptId}" 尚未收录` : '该页面不存在'}</p>
          <Link to="/physics/concepts"><Button variant="outline">返回列表</Button></Link>
        </div>
      </AppLayout>
    )
  }

  const anchors = SECTIONS.map(s => ({ id: 'section-' + s.id, label: s.label }))

  // 同模块推荐
  const relatedInSameModule = ALL_IDS
    .filter(id => id !== conceptId)
    .map(id => ({ id, meta: getConceptMeta(id) }))
    .filter(({ meta }) => meta && meta.module === concept.module)
    .slice(0, 4)

  return (
    <AppLayout showSubjectNav anchors={anchors}>
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">

        {/* 返回 + 翻页 */}
        <div className="flex items-center justify-between">
          <Link to="/physics/concepts">
            <Button variant="ghost" size="sm" className="pl-0 gap-1">
              <span className="text-muted-foreground">←</span> 知识节点列表
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            {prevId && <Link to={`/physics/concepts/${prevId}`}><Button variant="outline" size="sm">← 上一节点</Button></Link>}
            {nextId && <Link to={`/physics/concepts/${nextId}`}><Button variant="outline" size="sm">下一节点 →</Button></Link>}
          </div>
        </div>

        {/* 头部 */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant="outline">{concept.module}</Badge>
            <Badge variant="outline">{concept.chapter}</Badge>
            <span className="text-xs text-muted-foreground">编号：{concept.id}</span>
            <button
              onClick={() => toggleFavorite({ type: 'concept', itemId: conceptId ?? '', title: concept.title })}
              className={cn(
                'flex items-center gap-1 px-2.5 py-1 rounded-full border text-xs font-medium transition-all ml-auto',
                isFavorited(conceptId ?? '', 'concept')
                  ? 'border-yellow-400 bg-yellow-50 text-yellow-600'
                  : 'border-border text-muted-foreground hover:border-yellow-300'
              )}>
              <Star className={cn('w-3 h-3', isFavorited(conceptId ?? '', 'concept') && 'fill-yellow-400')} />
              {isFavorited(conceptId ?? '', 'concept') ? '已收藏' : '收藏'}
            </button>
          </div>
          <h1 className="text-3xl font-bold">{concept.title}</h1>
          <p className="text-sm text-muted-foreground">{concept.subtitle}</p>
        </div>

        {/* ===== 区块1：前置知识检测 ===== */}
        <div id="section-precheck">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 bg-blue-50">
              <Lightbulb className="w-4 h-4 text-blue-600" />
            </div>
            <h2 className="font-bold text-base">前置知识检测</h2>
          </div>
          <div className="space-y-3">
            {concept.preCheck.map((item, i) => (
              <Card key={i}>
                <CardContent className="p-4">
                  <p className="text-sm font-medium mb-2">第{i + 1}题：{item.question}</p>
                  <div className="space-y-1 mb-2">
                    {item.options.map((opt, j) => (
                      <p key={j} className="text-sm text-muted-foreground pl-2">{opt}</p>
                    ))}
                  </div>
                  <div className="text-xs text-green-600 bg-green-50 rounded-lg p-2">
                    ✅ 答案：{item.answer} — {item.explanation}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* ===== 区块2：叙事正文（6段落） ===== */}
        <div id="section-narrative">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 bg-primary/10">
              <BookOpen className="w-4 h-4 text-primary" />
            </div>
            <h2 className="font-bold text-base">叙事正文</h2>
          </div>
          <div className="space-y-4">
            {NARRATIVE_LABELS.map(({ key, label }) => {
              const text = concept.narrative[key]
              return text ? (
                <Card key={key}>
                  <CardContent className="p-5">
                    <h3 className="text-sm font-semibold text-primary mb-2">{label}</h3>
                    <p className="text-sm leading-relaxed">{text}</p>
                  </CardContent>
                </Card>
              ) : (
                <Card key={key} className="bg-muted/30 border-dashed">
                  <CardContent className="p-5 text-center text-muted-foreground text-sm">
                    「{label}」内容整理中
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* ===== 区块3：分层变形 ===== */}
        <div id="section-variations">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 bg-amber-50">
              <Zap className="w-4 h-4 text-amber-600" />
            </div>
            <h2 className="font-bold text-base">分层变形</h2>
          </div>
          {formatVariations(concept.variations) ? (
            <Card>
              <CardContent className="p-5 text-sm leading-relaxed whitespace-pre-wrap">
                {formatVariations(concept.variations)}
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

        {/* ===== 区块4：公式卡片 ===== */}
        <div id="section-formulas">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 bg-purple-50">
              <Calculator className="w-4 h-4 text-purple-600" />
            </div>
            <h2 className="font-bold text-base">公式卡片</h2>
          </div>
          {concept.formulas.length > 0 ? (
            <div className="space-y-2">
              {concept.formulas.map((f, i) => (
                <Card key={i}>
                  <CardContent className="p-4 flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-purple-700">{i + 1}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold mb-1">{f.formula}</p>
                      <p className="text-xs text-muted-foreground">{f.name}</p>
                      <p className="text-xs text-muted-foreground mt-1">💡 {f.usage}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="bg-muted/30 border-dashed">
              <CardContent className="p-5 text-center text-muted-foreground text-sm">
                该章节内容整理中
              </CardContent>
            </Card>
          )}
        </div>

        {/* ===== 区块5：理解度自评 ===== */}
        <div id="section-selfeval">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 bg-pink-50">
              <BrainCircuit className="w-4 h-4 text-pink-600" />
            </div>
            <h2 className="font-bold text-base">理解度自评</h2>
          </div>
          <div className="space-y-4">
            {/* 整体理解度按钮 */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <BrainCircuit className="w-3.5 h-3.5" />我的理解度：
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

            {/* 自评条目 */}
            {concept.selfEval.map((item, i) => (
              <Card key={i}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className={cn(
                      'w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold',
                      item.level === 'A' ? 'bg-green-100 text-green-700' :
                      item.level === 'B' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-600'
                    )}>{item.level}</div>
                    <div className="flex-1">
                      <p className="text-sm">{item.question}</p>
                      <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 关联链接 */}
        <div className="pt-4 border-t space-y-3">
          {concept.relatedModels.length > 0 && (
            <div>
              <h3 className="font-semibold text-sm mb-2 flex items-center gap-1">
                <Network className="w-4 h-4 text-muted-foreground" /> 关联模型
              </h3>
              <div className="flex flex-wrap gap-2">
                {concept.relatedModels.map(mId => (
                  <Link key={mId} to={`/physics/models/${mId}`}>
                    <Badge variant="secondary" className="cursor-pointer hover:bg-primary/10">
                      {mId}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
          )}
          {concept.crossLinks.length > 0 && (
            <div>
              <h3 className="font-semibold text-sm mb-2 flex items-center gap-1">
                <Network className="w-4 h-4 text-muted-foreground" /> 跨学科关联
              </h3>
              <div className="flex flex-wrap gap-2">
                {concept.crossLinks.map((cl, i) => (
                  <Badge key={i} variant="outline" className="text-xs">
                    {cl.subject} · {cl.conceptName} — {cl.relation}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 底部翻页 */}
        <div className="flex items-center justify-between gap-4 pt-4 border-t">
          {prevId ? (
            <Link to={`/physics/concepts/${prevId}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              <ChevronLeft className="w-4 h-4" /> 上一节点
            </Link>
          ) : <div />}
          <Link to="/physics/concepts" className="text-xs text-muted-foreground hover:text-foreground">知识节点列表</Link>
          {nextId ? (
            <Link to={`/physics/concepts/${nextId}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              下一节点 <ChevronRight className="w-4 h-4" />
            </Link>
          ) : <div />}
        </div>

        {/* 同模块推荐 */}
        {relatedInSameModule.length > 0 && (
          <div className="pt-4 border-t">
            <h3 className="font-bold text-sm mb-3">同模块推荐</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {relatedInSameModule.map(({ id, meta }) => (
                <Link key={id} to={`/physics/concepts/${id}`}>
                  <Card className="hover:shadow-sm hover:border-primary/30 transition-all cursor-pointer">
                    <CardContent className="p-3">
                      <p className="text-sm font-medium line-clamp-1 mb-1">{meta?.name || id}</p>
                      <p className="text-xs text-muted-foreground">{meta?.chapter}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </AppLayout>
  )
}
