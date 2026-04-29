import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AppLayout } from '@/components/layout/Navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { useSubjectData } from '@/hooks/useSubjectData'
import { ComingSoon } from '@/components/ComingSoon'
import { Search, BookOpen, ChevronRight } from 'lucide-react'

const diffColor: Record<number, string> = {
  1: 'bg-green-100 text-green-700',
  2: 'bg-yellow-100 text-yellow-700',
  3: 'bg-red-100 text-red-700',
}

const diffLabel: Record<number, string> = {
  1: '基础',
  2: '中等',
  3: '进阶',
}

export function ConceptList() {
  const [search, setSearch] = useState('')
  const [activeModule, setActiveModule] = useState<string>('全部')
  const { data, subjectMeta } = useSubjectData()

  if (!data) {
    return <ComingSoon name="知识节点" subject={subjectMeta?.name} />
  }

  const conceptList = data.getConceptChapters()
  const conceptDataMap = data.getConceptDataMap()
  const modules = ['全部', ...new Set(conceptList.map(ch => ch.module))]

  const filtered = conceptList
    .map(ch => ({
      ...ch,
      concepts: ch.concepts.filter(c => {
        const matchS = !search || c.name.includes(search)
        const matchM = activeModule === '全部' || ch.module === activeModule
        return matchS && matchM
      }),
    }))
    .filter(ch => ch.concepts.length > 0)

  const totalConcepts = conceptList.reduce((s, c) => s + c.concepts.length, 0)

  return (
    <AppLayout showSubjectNav>
      <div className="max-w-4xl mx-auto px-4 py-6 space-y-5">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-primary" />
            知识节点
            <Badge variant="outline" className="ml-2 text-xs">{totalConcepts}个节点</Badge>
          </h1>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {modules.map(m => (
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

        <div className="relative flex-1 min-w-48 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="搜索知识节点名称..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>

        <div className="space-y-6">
          {filtered.map(ch => (
            <div key={ch.id}>
              <h2 className="text-sm font-semibold text-muted-foreground mb-2 flex items-center gap-2">
                {ch.name}
                <span className="text-xs font-normal">（{ch.concepts.length}个节点）</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {ch.concepts.map(c => {
                  const hasData = !!conceptDataMap[c.id]
                  return (
                    <Link
                      key={c.id}
                      to={hasData ? `/${subjectMeta?.id}/concepts/${c.id}` : '#'}
                      className={!hasData ? 'pointer-events-none' : ''}
                    >
                      <Card className={`hover:shadow-sm hover:border-primary/30 transition-all group ${!hasData ? 'opacity-50' : ''}`}>
                        <CardContent className="p-3 flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                            <BookOpen className="w-4 h-4 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium truncate">{c.name}</span>
                              <span className={`text-xs px-1.5 py-0.5 rounded-full flex-shrink-0 ${diffColor[c.difficulty] || 'bg-gray-100 text-gray-600'}`}>
                                {diffLabel[c.difficulty]}
                              </span>
                              {!hasData && <span className="text-xs text-muted-foreground">待上线</span>}
                            </div>
                            <div className="flex items-center gap-3 mt-0.5">
                              <span className="text-xs text-muted-foreground">{c.id}</span>
                            </div>
                          </div>
                          {hasData && <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0 group-hover:text-primary transition-colors" />}
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
              <p className="text-sm">未找到匹配 "{search}" 的知识节点</p>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  )
}