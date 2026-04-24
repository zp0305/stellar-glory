import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AppLayout } from '@/components/layout/Navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { modelQuestionStats, DIFF_LABEL, DIFF_COLOR } from '@/data/physics/questions'
import { cn } from '@/lib/utils'
import { Search, ChevronRight, Star, Target } from 'lucide-react'

// 难度徽章样式
function DiffBadge({ diff }: { diff: string }) {
  return (
    <span className={cn('text-xs px-2 py-0.5 rounded-full font-medium border', DIFF_COLOR[diff])}>
      {DIFF_LABEL[diff]}
    </span>
  )
}

export function QuestionBankListPage() {
  const [search, setSearch] = useState('')
  const [activeDiff, setActiveDiff] = useState<string>('all')

  const allStats = Object.values(modelQuestionStats)

  const filtered = allStats.filter(s => {
    const matchSearch = !search || s.title.includes(search)
    const matchDiff = activeDiff === 'all' || (activeDiff === 'B' && s.B > 0) || (activeDiff === 'J' && s.J > 0) || (activeDiff === 'T' && s.T > 0)
    return matchSearch && matchDiff
  })

  const totalQ = allStats.reduce((acc, s) => acc + s.total, 0)

  return (
    <AppLayout showSubjectNav>
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">

        {/* 头部 */}
        <div>
          <h1 className="text-2xl font-bold mb-1">配套题库</h1>
          <p className="text-sm text-muted-foreground">
            {allStats.length} 个模型 · {totalQ} 道题目
          </p>
        </div>

        {/* 搜索 */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="搜索模型名称..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="pl-9 bg-card"
          />
        </div>

        {/* 难度筛选 */}
        <div className="flex gap-2">
          {[
            { key: 'all', label: `全部 (${totalQ})` },
            { key: 'B', label: `🟢 基础题 (${allStats.reduce((a, s) => a + s.B, 0)})` },
            { key: 'J', label: `🟡 进阶题 (${allStats.reduce((a, s) => a + s.J, 0)})` },
            { key: 'T', label: `🔴 挑战题 (${allStats.reduce((a, s) => a + s.T, 0)})` },
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

        {/* 模型列表 */}
        <div className="space-y-3">
          {filtered.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
              <Target className="w-8 h-8 mx-auto mb-2 opacity-30" />
              <p className="text-sm">没有符合条件的模型</p>
            </div>
          )}
          {filtered.map(stat => (
            <Link key={stat.modelId} to={`/physics/exercises/${stat.modelId}`}>
              <Card className="hover:shadow-sm hover:border-primary/30 transition-all cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                        <span className="font-semibold text-sm">{stat.title}</span>
                        <span className="text-xs text-muted-foreground">M{stat.modelId.replace('PHY-M', '')}</span>
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        {stat.B > 0 && <DiffBadge diff="B" />}
                        {stat.J > 0 && <DiffBadge diff="J" />}
                        {stat.T > 0 && <DiffBadge diff="T" />}
                        <span className="text-xs text-muted-foreground ml-1">共 {stat.total} 题</span>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" />
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