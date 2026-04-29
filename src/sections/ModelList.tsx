import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AppLayout } from '@/components/layout/Navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { ComingSoon } from '@/components/ComingSoon'
import { useSubjectData } from '@/hooks/useSubjectData'
import { Search, BookOpen, Clock, ChevronRight } from 'lucide-react'

const diffColor: Record<string, string> = {
  '基础': 'bg-green-100 text-green-700',
  '中等': 'bg-yellow-100 text-yellow-700',
  '进阶': 'bg-red-100 text-red-700',
}

export function ModelList() {
  const { data, subjectMeta } = useSubjectData()
  const [search, setSearch] = useState('')
  const [activeModule, setActiveModule] = useState<string>('全部')
  const [selectedDiff, setSelectedDiff] = useState<string | null>(null)

  if (!data) {
    return <ComingSoon name="模型详解" subject={subjectMeta?.name} />
  }

  const chapters = data.getModelChapters()
  const allModules = ['全部', ...new Set(chapters.map(ch => ch.module))]

  const filtered = chapters
    .map(ch => ({
      ...ch,
      models: ch.models.filter(m => {
        const matchS = !search || m.name.includes(search)
        const matchM = activeModule === '全部' || ch.module === activeModule
        const matchD = !selectedDiff || (m.difficulty === '基础' || m.difficulty === '中等' || m.difficulty === '进阶' ? m.difficulty === selectedDiff : false)
        return matchS && matchM && matchD
      }),
    }))
    .filter(ch => ch.models.length > 0)

  const totalModels = chapters.reduce((s, c) => s + c.models.length, 0)

  const getDifficultyLabel = (diff: string) => {
    const numDiff = parseInt(diff)
    if (numDiff <= 15) return '基础'
    if (numDiff <= 30) return '中等'
    return '进阶'
  }

  return (
    <AppLayout showSubjectNav>
      <div className="max-w-4xl mx-auto px-4 py-6 space-y-5">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-primary" />
            模型详解
            <Badge variant="outline" className="ml-2 text-xs">{totalModels}个模型</Badge>
          </h1>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {allModules.map(m => (
            <button
              key={m}
              onClick={() => setActiveModule(activeModule === m ? '全部' : m)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                activeModule === m
                  ? 'bg-primary text-white border-primary'
                  : 'border-border hover:border-primary/40 text-muted-foreground'
              }`}
            >
              {m}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 items-center">
          <div className="relative flex-1 min-w-48">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="搜索模型名称..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="flex gap-1">
            {['全部', '基础', '中等', '进阶'].map(d => (
              <button
                key={d}
                onClick={() => setSelectedDiff(selectedDiff === d || d === '全部' ? null : d)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                  (d === '全部' && !selectedDiff) || d === selectedDiff
                    ? 'bg-primary/10 text-primary border-primary/30'
                    : 'border-border hover:border-primary/30 text-muted-foreground'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {filtered.map(ch => (
            <div key={ch.id}>
              <h2 className="text-sm font-semibold text-muted-foreground mb-2 flex items-center gap-2">
                {ch.name}
                <span className="text-xs font-normal">（{ch.models.length}个模型）</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {ch.models.map(model => {
                  const diffLabel = getDifficultyLabel(model.difficulty)
                  return (
                    <Link key={model.id} to={`/${subjectMeta?.id}/models/${model.id}`}>
                      <Card className="hover:shadow-sm hover:border-primary/30 transition-all group">
                        <CardContent className="p-3 flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                            <BookOpen className="w-4 h-4 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium truncate">{model.name}</span>
                              <span className={`text-xs px-1.5 py-0.5 rounded-full flex-shrink-0 ${diffColor[diffLabel] || 'bg-gray-100 text-gray-600'}`}>
                                {diffLabel}
                              </span>
                            </div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0 group-hover:text-primary transition-colors" />
                        </CardContent>
                      </Card>
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <Search className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm">未找到匹配 "{search}" 的模型</p>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  )
}