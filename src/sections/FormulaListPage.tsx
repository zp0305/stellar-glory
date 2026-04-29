import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AppLayout } from '@/components/layout/Navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { useSubjectData } from '@/hooks/useSubjectData'
import { ComingSoon } from '@/components/ComingSoon'
import { Search, BookOpen, ChevronDown, ChevronRight, Hash, BookMarked } from 'lucide-react'
import katex from 'katex'
import 'katex/dist/katex.min.css'

export function FormulaListPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeSection, setActiveSection] = useState<string>('全部')
  const { data, subjectMeta } = useSubjectData()

  if (!data) {
    return <ComingSoon name="公式库" subject={subjectMeta?.name} />
  }

  const { formulaChapters, searchFormulas, formulas } = data.getFormulaData()

  const sections = ['全部', ...formulaChapters.map(c => c.name)]

  const filteredFormulas = searchQuery
    ? searchFormulas(searchQuery)
    : formulas

  const groupedFormulas = formulaChapters
    .map(ch => ({
      ...ch,
      formulas: ch.formulas.filter(f =>
        filteredFormulas.some(ff => ff.id === f.id)
      ),
    }))
    .filter(ch => ch.formulas.length > 0)

  return (
    <AppLayout showSubjectNav>
      <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-primary" />
              公式库
              <Badge variant="outline" className="ml-2 text-xs">{formulas.length}个公式</Badge>
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              按章节分组展示，支持搜索公式名称、变量或标签
            </p>
          </div>
        </div>

        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="搜索公式名称、LaTeX内容或变量名..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>

        <div className="flex flex-wrap gap-1.5">
          {sections.map(section => (
            <button
              key={section}
              onClick={() => setActiveSection(activeSection === section ? '全部' : section)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                activeSection === section
                  ? 'bg-primary text-white border-primary'
                  : 'border-border hover:border-primary/40 text-muted-foreground'
              }`}
            >
              {section}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {groupedFormulas.map(chapter => {
            if (activeSection !== '全部' && chapter.name !== activeSection) return null
            return (
              <div key={chapter.id} className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-4 rounded-full bg-primary" />
                  <h2 className="text-sm font-semibold text-muted-foreground">
                    {chapter.name}
                    <span className="text-xs font-normal ml-2 text-muted-foreground/60">
                      （{chapter.formulas.length}个公式）
                    </span>
                  </h2>
                </div>

                <div className="space-y-2">
                  {chapter.formulas.map(formula => (
                    <Collapsible key={formula.id} asChild>
                      <Card className="overflow-hidden hover:shadow-sm hover:border-primary/30 transition-all">
                        <CardContent className="p-4">
                          <CollapsibleTrigger asChild>
                            <Button
                              variant="ghost"
                              className="w-full h-auto p-0 hover:bg-transparent text-left"
                            >
                              <div className="flex items-start gap-4 w-full">
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2">
                                    <span className="text-sm font-medium">{formula.name}</span>
                                    <span className="text-xs text-muted-foreground font-mono">
                                      {formula.id}
                                    </span>
                                  </div>
                                  <div className="mt-1">
                                    <span
                                      className="inline-block"
                                      dangerouslySetInnerHTML={{
                                        __html: katex.renderToString(
                                          formula.formula.replace(/\$+/g, ''),
                                          { displayMode: false }
                                        ),
                                      }}
                                    />
                                  </div>
                                  <div className="flex flex-wrap gap-1 mt-2">
                                    {formula.conditions.slice(0, 3).map((cond, idx) => (
                                      <Badge
                                        key={idx}
                                        variant="secondary"
                                        className="text-xs"
                                      >
                                        {cond}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                                <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1 transition-transform" />
                              </div>
                            </Button>
                          </CollapsibleTrigger>

                          <CollapsibleContent className="pt-4 mt-4 border-t space-y-4">
                            <div>
                              <h3 className="text-xs font-semibold text-muted-foreground mb-2 flex items-center gap-1">
                                <Hash className="w-3 h-3" />
                                变量说明
                              </h3>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {formula.variables.map((varDef, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-center gap-2 text-sm p-2 bg-muted/50 rounded-lg"
                                  >
                                    <span
                                      className="font-mono text-primary"
                                      dangerouslySetInnerHTML={{
                                        __html: katex.renderToString(
                                          varDef.symbol.replace(/\$+/g, ''),
                                          { displayMode: false }
                                        ),
                                      }}
                                    />
                                    <span className="flex-1">{varDef.name}</span>
                                    <span className="text-xs text-muted-foreground font-mono">
                                      {varDef.unit}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h3 className="text-xs font-semibold text-muted-foreground mb-2">
                                适用条件
                              </h3>
                              <ul className="space-y-1 text-sm">
                                {formula.conditions.map((cond, idx) => (
                                  <li key={idx} className="flex items-center gap-2">
                                    <ChevronRight className="w-3 h-3 text-muted-foreground" />
                                    <span>{cond}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h3 className="text-xs font-semibold text-muted-foreground mb-2 flex items-center gap-1">
                                <BookMarked className="w-3 h-3" />
                                来源知识节点
                              </h3>
                              <div className="flex flex-wrap gap-1">
                                {formula.sourceConcepts.map(id => (
                                  <Link
                                    key={id}
                                    to={`/${subjectMeta?.id}/concepts/${id}`}
                                    className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors"
                                  >
                                    {id}
                                  </Link>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h3 className="text-xs font-semibold text-muted-foreground mb-2">
                                标签
                              </h3>
                              <div className="flex flex-wrap gap-1">
                                {formula.tags.map(tag => (
                                  <Badge
                                    key={tag}
                                    variant="outline"
                                    className="text-xs"
                                  >
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </CollapsibleContent>
                        </CardContent>
                      </Card>
                    </Collapsible>
                  ))}
                </div>
              </div>
            )
          })}

          {groupedFormulas.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
              <Search className="w-10 h-10 mx-auto mb-3 opacity-50" />
              <p className="text-sm">未找到匹配 "{searchQuery}" 的公式</p>
              <p className="text-xs text-muted-foreground/60 mt-1">
                尝试搜索公式名称、变量名或标签
              </p>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  )
}