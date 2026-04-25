import { useState } from 'react'
import { AppLayout } from '@/components/layout/Navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import {
  Brain,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Lightbulb,
  BookOpen,
  Clock,
} from 'lucide-react'
import { learningMethods, methodSummary, type LearningMethod } from '@/data/tools/methods'

export function MethodsPage() {
  const [expandedId, setExpandedId] = useState<string | null>('feynman')
  const [selfAssessments, setSelfAssessments] = useState<Record<string, Record<string, boolean | number>>>({})

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id))
  }

  const handleSelfAssessment = (methodId: string, itemId: string, value: boolean | number) => {
    setSelfAssessments((prev) => ({
      ...prev,
      [methodId]: {
        ...(prev[methodId] || {}),
        [itemId]: value,
      },
    }))
  }

  const saveAssessment = (methodId: string) => {
    const data = selfAssessments[methodId]
    if (data) {
      try {
        const saved = JSON.parse(localStorage.getItem('method_assessments') || '{}')
        saved[methodId] = { data, date: new Date().toISOString() }
        localStorage.setItem('method_assessments', JSON.stringify(saved))
        alert('自评结果已保存到本地 ✓')
      } catch {}
    }
  }

  const getMethodProgress = (methodId: string): number => {
    const method = learningMethods.find((m) => m.id === methodId)
    if (!method) return 0
    const answers = selfAssessments[methodId]
    if (!answers) return 0
    const answered = method.selfAssessment.filter((item) => answers[item.id] !== undefined).length
    return Math.round((answered / method.selfAssessment.length) * 100)
  }

  return (
    <AppLayout>
      <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">
        {/* 页面头部 */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm">
            <Brain className="w-3.5 h-3.5" />
            学习工具
          </div>
          <h1 className="text-2xl font-bold">学习方法体系</h1>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto">
            五种经过科学研究验证的高效学习方法。点击卡片展开详情，了解每种方法的核心原理、适用场景和使用技巧。
          </p>
        </div>

        {/* 使用流程 */}
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-100">
          <CardContent className="p-5 space-y-3">
            <div className="flex items-center gap-2 mb-1">
              <Clock className="w-4 h-4 text-blue-600" />
              <h3 className="font-semibold text-sm">五法协同使用流程</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-white/60 rounded-lg p-3 text-sm">
                <div className="font-medium text-blue-700 mb-1">📅 每日</div>
                <ul className="text-xs text-slate-600 space-y-1">
                  {methodSummary.schedule.daily.map((s, i) => (
                    <li key={i}>• {s}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/60 rounded-lg p-3 text-sm">
                <div className="font-medium text-purple-700 mb-1">📆 每周</div>
                <ul className="text-xs text-slate-600 space-y-1">
                  {methodSummary.schedule.weekly.map((s, i) => (
                    <li key={i}>• {s}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/60 rounded-lg p-3 text-sm">
                <div className="font-medium text-orange-700 mb-1">📅 每月</div>
                <ul className="text-xs text-slate-600 space-y-1">
                  {methodSummary.schedule.monthly.map((s, i) => (
                    <li key={i}>• {s}</li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 五种方法卡片 */}
        <div className="space-y-3">
          {learningMethods.map((method) => {
            const isExpanded = expandedId === method.id
            const progress = getMethodProgress(method.id)

            return (
              <Card
                key={method.id}
                className={`transition-all ${isExpanded ? 'shadow-md' : 'hover:shadow-sm'}`}
                style={{ borderColor: isExpanded ? method.color + '66' : undefined }}
              >
                {/* 卡片头部（可点击展开） */}
                <button
                  className="w-full text-left"
                  onClick={() => toggleExpand(method.id)}
                >
                  <CardContent className="p-5 flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                      style={{ backgroundColor: method.color + '18' }}
                    >
                      {method.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="font-semibold">{method.name}</span>
                        {progress > 0 && (
                          <Badge
                            variant="outline"
                            className="text-xs"
                            style={{ borderColor: method.color, color: method.color }}
                          >
                            自评 {progress}%
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground italic">「{method.tagline}」</p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      )}
                    </div>
                  </CardContent>
                </button>

                {/* 展开内容 */}
                {isExpanded && (
                  <div className="border-t px-5 pb-5 space-y-5">
                    {/* 描述 */}
                    <div className="pt-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">{method.description}</p>
                    </div>

                    {/* 核心步骤 */}
                    <div>
                      <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                        <span style={{ color: method.color }}>步骤</span>
                        <div className="flex-1 h-px bg-border" />
                      </h4>
                      <div className="space-y-2">
                        {method.steps.map((step, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div
                              className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold mt-0.5"
                              style={{ backgroundColor: method.color }}
                            >
                              {idx + 1}
                            </div>
                            <p className="text-sm flex-1 leading-relaxed">{step}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 适用场景 */}
                    <div>
                      <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                        <span style={{ color: method.color }}>适用场景</span>
                        <div className="flex-1 h-px bg-border" />
                      </h4>
                      <div className="space-y-2">
                        {method.scenarios.map((s, idx) => (
                          <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-muted/40">
                            <div>
                              <div className="text-sm font-medium mb-0.5">{s.title}</div>
                              <div className="text-xs text-muted-foreground">{s.detail}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 实例 */}
                    <div>
                      <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                        <span style={{ color: method.color }}>使用实例</span>
                        <div className="flex-1 h-px bg-border" />
                      </h4>
                      <div className="space-y-3">
                        {method.examples.map((ex, idx) => (
                          <div key={idx} className="p-3 rounded-lg border border-l-4" style={{ borderLeftColor: method.color }}>
                            <div className="text-sm font-medium mb-1">{ex.scenario}</div>
                            <div className="text-xs text-muted-foreground mb-2 italic">{ex.how}</div>
                            <div className="text-xs p-2 rounded bg-muted/50">
                              <span className="font-medium">效果：</span>{ex.result}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 自评 */}
                    <div>
                      <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                        <span style={{ color: method.color }}>自评量表</span>
                        <div className="flex-1 h-px bg-border" />
                      </h4>
                      <div className="space-y-3">
                        {method.selfAssessment.map((item) => {
                          const value = selfAssessments[method.id]?.[item.id]
                          if (item.type === 'yesno') {
                            return (
                              <div key={item.id} className="flex items-center gap-3">
                                <span className="text-sm flex-1">{item.question}</span>
                                <div className="flex gap-1">
                                  <Button
                                    size="sm"
                                    variant={value === true ? 'default' : 'outline'}
                                    className={`text-xs h-7 px-2 ${value === true ? '' : 'text-muted-foreground'}`}
                                    onClick={() => handleSelfAssessment(method.id, item.id, true)}
                                  >
                                    是
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant={value === false ? 'default' : 'outline'}
                                    className={`text-xs h-7 px-2 ${value === false ? '' : 'text-muted-foreground'}`}
                                    onClick={() => handleSelfAssessment(method.id, item.id, false)}
                                  >
                                    否
                                  </Button>
                                </div>
                              </div>
                            )
                          } else {
                            return (
                              <div key={item.id} className="space-y-1.5">
                                <div className="flex items-center justify-between">
                                  <span className="text-sm">{item.question}</span>
                                  <span className="text-xs text-muted-foreground">
                                    {typeof value === 'number' ? `${value}/5` : '—'}
                                  </span>
                                </div>
                                <div className="flex gap-1">
                                  {[1, 2, 3, 4, 5].map((score) => (
                                    <Button
                                      key={score}
                                      size="sm"
                                      variant={value === score ? 'default' : 'outline'}
                                      className={`flex-1 h-7 text-xs ${value === score ? '' : 'text-muted-foreground'}`}
                                      style={value === score ? { backgroundColor: method.color, borderColor: method.color } : {}}
                                      onClick={() => handleSelfAssessment(method.id, item.id, score)}
                                    >
                                      {score}
                                    </Button>
                                  ))}
                                </div>
                              </div>
                            )
                          }
                        })}
                      </div>
                      <div className="mt-3 flex items-center gap-3">
                        {progress > 0 && (
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs text-muted-foreground">完成度</span>
                              <span className="text-xs font-medium" style={{ color: method.color }}>{progress}%</span>
                            </div>
                            <Progress value={progress} className="h-1.5" />
                          </div>
                        )}
                        <Button
                          size="sm"
                          variant="outline"
                          className="gap-1"
                          onClick={() => saveAssessment(method.id)}
                        >
                          <CheckCircle2 className="w-3 h-3" />
                          保存自评
                        </Button>
                      </div>
                    </div>

                    {/* 技巧 */}
                    <div className="bg-muted/40 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Lightbulb className="w-4 h-4 text-yellow-600" />
                        <span className="text-sm font-medium">使用技巧</span>
                      </div>
                      <ul className="space-y-1">
                        {method.tips.map((tip, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground flex items-start gap-1.5">
                            <span className="text-yellow-500 flex-shrink-0">→</span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </Card>
            )
          })}
        </div>

        {/* 底部提示 */}
        <Card className="bg-muted/30">
          <CardContent className="p-4 flex items-start gap-2 text-sm text-muted-foreground">
            <BookOpen className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-medium text-foreground">持续使用比一次性掌握更重要。</span>
              {' '}建议每周复习一种方法，坚持一个月形成习惯。学习方法不是「学一遍就够」，而是需要在日常学习中反复实践和体会。
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  )
}
