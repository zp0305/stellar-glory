import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AppLayout } from '@/components/layout/Navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useSubjectData } from '@/hooks/useSubjectData'
import { ComingSoon } from '@/components/ComingSoon'
import { cn } from '@/lib/utils'
import { Search, ChevronRight, ChevronDown, ChevronUp, Target, X } from 'lucide-react'

function DiffBadge({ diff, DIFF_LABEL, DIFF_COLOR }: { diff: string; DIFF_LABEL: Record<string, string>; DIFF_COLOR: Record<string, string> }) {
  return (
    <span className={cn('text-xs px-2 py-0.5 rounded-full font-medium border', DIFF_COLOR[diff])}>
      {DIFF_LABEL[diff]}
    </span>
  )
}

function DifficultyDBadge({ value, DIFFICULTY_D_OPTIONS }: { value: number; DIFFICULTY_D_OPTIONS: { value: number; label: string; color: string }[] }) {
  const opt = DIFFICULTY_D_OPTIONS.find(o => o.value === value)
  return (
    <span className={cn('text-xs px-1.5 py-0.5 rounded font-medium', opt?.color)}>
      D{value}
    </span>
  )
}

export function QuestionBankListPage() {
  const [search, setSearch] = useState('')
  const [activeDiff, setActiveDiff] = useState<string>('all')
  const [showFilters, setShowFilters] = useState(false)
  const { data, subjectMeta } = useSubjectData()

  if (!data) {
    return <ComingSoon name="配套题库" subject={subjectMeta?.name} />
  }

  const {
    allQuestions,
    DIFF_LABEL,
    DIFF_COLOR,
    LEVEL_OPTIONS,
    TARGET_OPTIONS,
    FUNCTION_OPTIONS,
    DIFFICULTY_D_OPTIONS,
    TYPE_OPTIONS,
  } = data.getQuestionBankData()

  const [filters, setFilters] = useState({
    level: 'all',
    target: 'all',
    function: 'all',
    difficultyD: 'all',
    type: 'all',
  })

  const filtered = allQuestions.filter((q: any) => {
    const matchSearch = !search || 
      q.question.toLowerCase().includes(search.toLowerCase()) ||
      q.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))

    const matchDiff = activeDiff === 'all' || q.difficulty === activeDiff

    const matchLevel = filters.level === 'all' || q.level === filters.level
    const matchTarget = filters.target === 'all' || q.target === filters.target
    const matchFunction = filters.function === 'all' || q.function === filters.function
    const matchDifficultyD = filters.difficultyD === 'all' || q.difficultyD === filters.difficultyD
    const matchType = filters.type === 'all' || q.type === filters.type

    return matchSearch && matchDiff && matchLevel && matchTarget && matchFunction && matchDifficultyD && matchType
  })

  const totalQ = allQuestions.length
  const filteredCount = filtered.length

  const hasActiveFilters = Object.values(filters).some(v => v !== 'all') || activeDiff !== 'all' || search !== ''

  const clearFilters = () => {
    setFilters({
      level: 'all',
      target: 'all',
      function: 'all',
      difficultyD: 'all',
      type: 'all',
    })
    setActiveDiff('all')
    setSearch('')
  }

  const getModelLabel = (modelId: string) => {
    const mappings: Record<string, string> = {
      'PHY-M01': '匀变速直线运动',
      'PHY-M04': '追及与相遇',
    }
    return mappings[modelId] || modelId.replace('PHY-M', 'M')
  }

  const truncateQuestion = (text: string, maxLen: number = 50) => {
    const cleanText = text.replace(/\$\$[^$]+\$\$|\$[^$]+\$|\n/g, ' ')
    return cleanText.length > maxLen ? cleanText.substring(0, maxLen) + '...' : cleanText
  }

  const activeFilterTags = []
  if (activeDiff !== 'all') {
    activeFilterTags.push({ label: DIFF_LABEL[activeDiff], key: 'diff' })
  }
  if (filters.level !== 'all') {
    const opt = LEVEL_OPTIONS.find(o => o.value === filters.level)
    activeFilterTags.push({ label: opt?.label, key: 'level' })
  }
  if (filters.target !== 'all') {
    const opt = TARGET_OPTIONS.find(o => o.value === filters.target)
    activeFilterTags.push({ label: opt?.label, key: 'target' })
  }
  if (filters.function !== 'all') {
    const opt = FUNCTION_OPTIONS.find(o => o.value === filters.function)
    activeFilterTags.push({ label: opt?.label, key: 'function' })
  }
  if (filters.difficultyD !== 'all') {
    activeFilterTags.push({ label: `D${filters.difficultyD}`, key: 'd' })
  }
  if (filters.type !== 'all') {
    const opt = TYPE_OPTIONS.find(o => o.value === filters.type)
    activeFilterTags.push({ label: opt?.label || filters.type, key: 'type' })
  }

  return (
    <AppLayout showSubjectNav>
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
        <div>
          <h1 className="text-2xl font-bold mb-1">配套题库</h1>
          <p className="text-sm text-muted-foreground">
            {totalQ} 道题目 · {hasActiveFilters ? `${filteredCount} 道匹配` : ''}
          </p>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="搜索题目内容、标签..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="pl-9 bg-card"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {[
            { key: 'all', label: `全部 (${totalQ})` },
            { key: 'B', label: `🟢 基础题 (${allQuestions.filter((q: any) => q.difficulty === 'B').length})` },
            { key: 'J', label: `🟡 进阶题 (${allQuestions.filter((q: any) => q.difficulty === 'J').length})` },
            { key: 'T', label: `🔴 挑战题 (${allQuestions.filter((q: any) => q.difficulty === 'T').length})` },
          ].map(item => (
            <button
              key={item.key}
              onClick={() => setActiveDiff(item.key)}
              className={cn(
                'flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-all',
                activeDiff === item.key
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              )}>
              {item.label}
            </button>
          ))}
        </div>

        {activeFilterTags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {activeFilterTags.map(tag => (
              <span
                key={tag.key}
                className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                {tag.label}
                <button
                  onClick={() => {
                    if (tag.key === 'diff') setActiveDiff('all')
                    else if (tag.key === 'level') setFilters(f => ({ ...f, level: 'all' }))
                    else if (tag.key === 'target') setFilters(f => ({ ...f, target: 'all' }))
                    else if (tag.key === 'function') setFilters(f => ({ ...f, function: 'all' }))
                    else if (tag.key === 'd') setFilters(f => ({ ...f, difficultyD: 'all' }))
                    else if (tag.key === 'type') setFilters(f => ({ ...f, type: 'all' }))
                  }}
                  className="hover:opacity-70">
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
            <button
              onClick={clearFilters}
              className="text-xs text-muted-foreground hover:text-foreground">
              清除全部筛选
            </button>
          </div>
        )}

        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-muted/50 transition-colors w-full">
          {showFilters ? (
            <>
              <ChevronUp className="w-4 h-4" />
              <span className="font-medium">收起筛选条件</span>
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4" />
              <span className="font-medium">展开筛选条件</span>
            </>
          )}
        </button>

        {showFilters && (
          <div className="space-y-4 p-4 bg-muted/30 rounded-xl">
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-2 block">能力层级</label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFilters(f => ({ ...f, level: 'all' }))}
                  className={cn(
                    'px-2.5 py-1 rounded-full text-xs font-medium transition-all',
                    filters.level === 'all'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  )}>
                  全部
                </button>
                {LEVEL_OPTIONS.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => setFilters(f => ({ ...f, level: opt.value }))}
                    className={cn(
                      'px-2.5 py-1 rounded-full text-xs font-medium transition-all',
                      filters.level === opt.value
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    )}>
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-muted-foreground mb-2 block">学习目标</label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFilters(f => ({ ...f, target: 'all' }))}
                  className={cn(
                    'px-2.5 py-1 rounded-full text-xs font-medium transition-all',
                    filters.target === 'all'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  )}>
                  全部
                </button>
                {TARGET_OPTIONS.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => setFilters(f => ({ ...f, target: opt.value }))}
                    className={cn(
                      'px-2.5 py-1 rounded-full text-xs font-medium transition-all',
                      filters.target === opt.value
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    )}>
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-muted-foreground mb-2 block">题目功能</label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFilters(f => ({ ...f, function: 'all' }))}
                  className={cn(
                    'px-2.5 py-1 rounded-full text-xs font-medium transition-all',
                    filters.function === 'all'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  )}>
                  全部
                </button>
                {FUNCTION_OPTIONS.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => setFilters(f => ({ ...f, function: opt.value }))}
                    className={cn(
                      'px-2.5 py-1 rounded-full text-xs font-medium transition-all',
                      filters.function === opt.value
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    )}>
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-muted-foreground mb-2 block">难度等级</label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFilters(f => ({ ...f, difficultyD: 'all' }))}
                  className={cn(
                    'px-2.5 py-1 rounded-full text-xs font-medium transition-all',
                    filters.difficultyD === 'all'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  )}>
                  全部
                </button>
                {DIFFICULTY_D_OPTIONS.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => setFilters(f => ({ ...f, difficultyD: opt.value }))}
                    className={cn(
                      'px-2.5 py-1 rounded-full text-xs font-medium transition-all',
                      filters.difficultyD === opt.value
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    )}>
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-muted-foreground mb-2 block">题型</label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFilters(f => ({ ...f, type: 'all' }))}
                  className={cn(
                    'px-2.5 py-1 rounded-full text-xs font-medium transition-all',
                    filters.type === 'all'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  )}>
                  全部
                </button>
                {TYPE_OPTIONS.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => setFilters(f => ({ ...f, type: opt.value }))}
                    className={cn(
                      'px-2.5 py-1 rounded-full text-xs font-medium transition-all',
                      filters.type === opt.value
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    )}>
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="space-y-3">
          {filtered.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
              <Target className="w-8 h-8 mx-auto mb-2 opacity-30" />
              <p className="text-sm">当前筛选条件下暂无题目</p>
              <p className="text-xs mt-2">仅展示部分模型的题目，更多题目正在生产中</p>
              <button
                onClick={clearFilters}
                className="mt-4 text-sm text-primary hover:underline">
                清除筛选条件
              </button>
            </div>
          )}
          {filtered.map((q: any) => (
            <Link key={q.id} to={`/${subjectMeta?.id}/exercises/${q.modelId}/do?q=${q.id}`}>
              <Card className="hover:shadow-sm hover:border-primary/30 transition-all cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                        <DiffBadge diff={q.difficulty} DIFF_LABEL={DIFF_LABEL} DIFF_COLOR={DIFF_COLOR} />
                        {q.difficultyD && <DifficultyDBadge value={q.difficultyD} DIFFICULTY_D_OPTIONS={DIFFICULTY_D_OPTIONS} />}
                        <span className="text-xs text-muted-foreground">{q.type}</span>
                        <span className="text-xs text-muted-foreground">{getModelLabel(q.modelId)}</span>
                      </div>
                      <p className="text-sm text-foreground line-clamp-2">
                        {truncateQuestion(q.question)}
                      </p>
                      <div className="flex items-center gap-2 mt-2 flex-wrap">
                        {q.tags.slice(0, 3).map(t => (
                          <span key={t} className="text-xs px-1.5 py-0.5 rounded bg-muted text-muted-foreground">
                            {t}
                          </span>
                        ))}
                        <span className="text-xs text-muted-foreground ml-auto">
                          {q.estimatedMinutes}min
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0 mt-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

      </div>
    </AppLayout>
  )
}