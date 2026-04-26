import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { AppLayout } from '@/components/layout/Navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { allParadigms } from '@/data/physics/paradigms'
import { cn } from '@/lib/utils'
import {
  Lightbulb, ChevronRight, Search,
  ArrowRight, Zap, AlertTriangle, Book,
  Target, ChevronLeft, Brain,
} from 'lucide-react'

// 五段结构字段对应的章节定义
const SECTIONS = [
  { key: 'trigger',         label: '触发信号',       Icon: Target,        bg: 'bg-orange-50',  color: 'text-orange-600' },
  { key: 'path',            label: '思考路径',       Icon: Book,          bg: 'bg-blue-50',    color: 'text-blue-600'    },
  { key: 'variationWarning',label: '变式预警',       Icon: AlertTriangle, bg: 'bg-yellow-50', color: 'text-yellow-600'  },
  { key: 'errorMap',        label: '错因图谱',       Icon: AlertTriangle, bg: 'bg-red-50',    color: 'text-red-500'     },
  { key: 'essence',         label: '本质回溯',       Icon: Lightbulb,     bg: 'bg-amber-50',  color: 'text-amber-500'   },
] as const

// 难度标签
const LEVEL_CONFIG = {
  B: { label: 'B级 · 基础', color: 'bg-green-100 text-green-700' },
  J: { label: 'J级 · 进阶', color: 'bg-yellow-100 text-yellow-700' },
  T: { label: 'T级 · 挑战', color: 'bg-red-100 text-red-700' },
} as const

// model → category 映射
const MODEL_CATEGORY: Record<string, string> = {
  'PHY-M01': '运动学', 'PHY-M02': '曲线运动', 'PHY-M03': '力学',
  'PHY-M04': '力学',   'PHY-M05': '曲线运动', 'PHY-M06': '万有引力',
  'PHY-M07': '能量',   'PHY-M08': '能量',     'PHY-M09': '动量',
  'PHY-M10': '静电场', 'PHY-M11': '电磁场',   'PHY-M12': '磁场',
  'PHY-M13': '电磁感应','PHY-M14': '光学',    'PHY-M15': '近代物理',
}
const CAT_COLOR: Record<string, string> = {
  '运动学':'bg-blue-100 text-blue-700',    '曲线运动':'bg-cyan-100 text-cyan-700',
  '力学':'bg-purple-100 text-purple-700',   '万有引力':'bg-indigo-100 text-indigo-700',
  '能量':'bg-green-100 text-green-700',     '动量':'bg-orange-100 text-orange-700',
  '静电场':'bg-pink-100 text-pink-700',    '电磁场':'bg-violet-100 text-violet-700',
  '磁场':'bg-violet-100 text-violet-700',   '电磁感应':'bg-rose-100 text-rose-700',
  '交流电':'bg-teal-100 text-teal-700',    '光学':'bg-yellow-100 text-yellow-700',
  '近代物理':'bg-slate-100 text-slate-700',
}

function getCategory(model: string): string {
  return MODEL_CATEGORY[model] || '力学'
}

/* ============= 套路列表页 ============= */
export function StrategyListPage() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('全部')
  const categories = [
    '全部','运动学','曲线运动','力学','万有引力','能量','动量',
    '静电场','电磁场','磁场','电磁感应','交流电','光学','近代物理',
  ]

  const filtered = allParadigms.filter(p => {
    const cat = getCategory(p.model)
    const matchSearch = !search
      || p.name.includes(search)
      || p.trigger.includes(search)
      || p.essence.includes(search)
    const matchCat = activeCategory === '全部' || cat === activeCategory
    return matchSearch && matchCat
  })

  return (
    <AppLayout showSubjectNav>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-1">分析范式</h1>
          <p className="text-sm text-muted-foreground">
            {allParadigms.length} 个范式 · 五段结构（触发信号→思考路径→变式预警→错因图谱→本质回溯）
          </p>
        </div>
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="搜索范式名称、触发信号或本质..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="pl-9 bg-card"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 mb-6">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                'flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-all',
                activeCategory === cat
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground'
              )}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="space-y-3">
          {filtered.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <Search className="w-8 h-8 mx-auto mb-2 opacity-30" />
              <p className="text-sm">没有找到符合条件的范式</p>
            </div>
          )}
          {filtered.map(p => {
            const cat = getCategory(p.model)
            const levelCfg = LEVEL_CONFIG[p.level] ?? LEVEL_CONFIG.B
            return (
              <Link key={p.id} to={`/physics/strategies/${p.id}`}>
                <Card className="hover:shadow-sm hover:border-primary/30 transition-all cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className={"text-xs px-2 py-0.5 rounded-full font-medium " + levelCfg.color}>
                            {levelCfg.label}
                          </span>
                          <span className={"text-xs px-2 py-0.5 rounded-full " + (CAT_COLOR[cat] || 'bg-gray-100')}>
                            {cat}
                          </span>
                          {p.thinkingMethod && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-50 text-cyan-600 flex items-center gap-1">
                              <Brain className="w-3 h-3" />
                              {p.thinkingMethod}
                            </span>
                          )}
                        </div>
                        <p className="font-medium text-sm mb-0.5">{p.name}</p>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          【触发】{p.trigger}
                        </p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-muted-foreground mt-2 shrink-0" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </AppLayout>
  )
}

/* ============= 范式详情页（五段结构） ============= */
export function StrategyDetailPage() {
  const { strategyId } = useParams<{ strategyId: string }>()
  const paradigm = strategyId
    ? (allParadigms.find(p => p.id === strategyId) ?? null)
    : null

  const ALL_IDS = allParadigms.map(p => p.id)
  const idx = strategyId ? ALL_IDS.indexOf(strategyId) : -1
  const prevId = idx > 0 ? ALL_IDS[idx - 1] : null
  const nextId = idx < ALL_IDS.length - 1 ? ALL_IDS[idx + 1] : null

  if (!paradigm) {
    return (
      <AppLayout showSubjectNav>
        <div className="max-w-3xl mx-auto px-4 py-16 text-center">
          <AlertTriangle className="w-12 h-12 mx-auto mb-4 text-orange-400" />
          <h2 className="text-xl font-semibold mb-2">范式不存在</h2>
          <p className="text-muted-foreground mb-6">该分析范式尚未收录</p>
          <Link to="/physics/strategies"><Button variant="outline">返回列表</Button></Link>
        </div>
      </AppLayout>
    )
  }

  const cat = getCategory(paradigm.model)
  const levelCfg = LEVEL_CONFIG[paradigm.level] ?? LEVEL_CONFIG.B

  return (
    <AppLayout showSubjectNav anchors={[]}>
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">

        {/* 返回 + 翻页 */}
        <div className="flex items-center justify-between">
          <Link to="/physics/strategies">
            <Button variant="ghost" size="sm" className="pl-0 gap-1">
              <span className="text-muted-foreground">←</span> 范式列表
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            {prevId && (
              <Link to={`/physics/strategies/${prevId}`}>
                <Button variant="outline" size="sm">← 上一范式</Button>
              </Link>
            )}
            {nextId && (
              <Link to={`/physics/strategies/${nextId}`}>
                <Button variant="outline" size="sm">下一范式 →</Button>
              </Link>
            )}
          </div>
        </div>

        {/* 头部 */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span className={"text-xs px-2.5 py-1 rounded-full font-medium " + levelCfg.color}>
              {levelCfg.label}
            </span>
            <span className={"text-xs px-2.5 py-1 rounded-full " + (CAT_COLOR[cat] || 'bg-gray-100')}>
              {cat}
            </span>
            <span className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
              {paradigm.model}
            </span>
            {paradigm.thinkingMethod && (
              <span className="text-xs px-2.5 py-1 rounded-full bg-cyan-50 text-cyan-600 flex items-center gap-1">
                <Brain className="w-3 h-3" />
                {paradigm.thinkingMethod}
              </span>
            )}
          </div>
          <h1 className="text-3xl font-bold">{paradigm.name}</h1>
        </div>

        {/* 五段结构内容 */}
        {SECTIONS.map(({ key, label, Icon, bg, color }) => {
          const raw = (paradigm as any)[key]
          // path → 步骤列表，errorMap → 错因列表，其他 → 文本
          const isPath = key === 'path'
          const isErrorMap = key === 'errorMap'
          const isEmpty = isPath
            ? !(raw as string[])?.length
            : isErrorMap
              ? !(raw as any[])?.length
              : !raw

          let body: React.ReactNode = null
          if (isPath && raw) {
            body = (raw as string[]).map((s, i) => `${i + 1}. ${s}`).join('\n')
          } else if (isErrorMap && raw) {
            body = (raw as { wrongThinking: string; cognitiveRoot: string; correctPath: string }[])
              .map(e => `❌ ${e.wrongThinking}\n   💡 ${e.cognitiveRoot || '(认知根源待补)'}\n   ✓  ${e.correctPath || '(正确路径待补)'}`)
              .join('\n\n')
          } else {
            body = raw as string
          }

          return (
            <div key={key} id={'section-' + key}>
              <div className="flex items-center gap-2 mb-3">
                <div className={cn("w-6 h-6 rounded-full flex items-center justify-center shrink-0", bg)}>
                  <Icon className={cn("w-4 h-4", color)} />
                </div>
                <h2 className="font-bold text-base">{label}</h2>
                {/* 字段占位提示 */}
                {typeof raw === 'string' && !raw && (
                  <span className="text-xs text-muted-foreground/50 italic ml-1">（内容AI补写中）</span>
                )}
              </div>
              <Card>
                <CardContent className="p-5 text-sm leading-relaxed whitespace-pre-wrap">
                  {isEmpty ? (
                    <span className="text-muted-foreground italic">该章节内容整理中</span>
                  ) : (
                    body
                  )}
                </CardContent>
              </Card>
            </div>
          )
        })}

        {/* 底部翻页 */}
        <div className="flex items-center justify-between gap-4 pt-4 border-t">
          {prevId ? (
            <Link to={`/physics/strategies/${prevId}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              <ChevronLeft className="w-4 h-4" /> 上一范式
            </Link>
          ) : <div />}
          <Link to="/physics/strategies" className="text-xs text-muted-foreground hover:text-foreground">范式列表</Link>
          {nextId ? (
            <Link to={`/physics/strategies/${nextId}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              下一范式 <ChevronRight className="w-4 h-4" />
            </Link>
          ) : <div />}
        </div>

        {/* 同分类推荐 */}
        {(() => {
          const related = allParadigms.filter(p =>
            p.id !== strategyId && getCategory(p.model) === cat
          ).slice(0, 4)
          if (!related.length) return null
          return (
            <div className="pt-4 border-t">
              <h3 className="font-bold text-sm mb-3">同分类推荐</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {related.map(r => (
                  <Link key={r.id} to={`/physics/strategies/${r.id}`}>
                    <Card className="hover:shadow-sm hover:border-primary/30 transition-all cursor-pointer">
                      <CardContent className="p-3">
                        <p className="text-sm font-medium line-clamp-1 mb-1">{r.name}</p>
                        <p className="text-xs text-muted-foreground line-clamp-1">{r.trigger}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )
        })()}

      </div>
    </AppLayout>
  )
}
