import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AppLayout } from '@/components/layout/Navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  ClipboardList,
  ChevronRight,
  ArrowRight,
  Target,
  GraduationCap,
  Trophy,
  BookOpen,
  MapPin,
  Clock,
} from 'lucide-react'
import { gradeLevels, learningGoals, type GradeLevel, type LearningGoal } from '@/data/tools/planner'

type Step = 'grade' | 'goal' | 'plan'

const goalIcons: Record<string, any> = {
  gaokao: GraduationCap,
  qiangji: Target,
  competition: Trophy,
}

const milestoneTypeColors: Record<string, string> = {
  exam: 'bg-red-100 text-red-700',
  checkpoint: 'bg-blue-100 text-blue-700',
  decision: 'bg-purple-100 text-purple-700',
  event: 'bg-green-100 text-green-700',
}

const phaseColors: Record<string, string> = {
  衔接: '#f97316',
  高一: '#3b82f6',
  高二: '#8b5cf6',
  高三: '#ef4444',
}

export function PlannerPage() {
  const [step, setStep] = useState<Step>('grade')
  const [selectedGrade, setSelectedGrade] = useState<GradeLevel | null>(null)
  const [selectedGoal, setSelectedGoal] = useState<LearningGoal | null>(null)

  const reset = () => {
    setStep('grade')
    setSelectedGrade(null)
    setSelectedGoal(null)
  }

  // 步骤一：选择年级
  if (step === 'grade') {
    return (
      <AppLayout>
        <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm">
              <ClipboardList className="w-3.5 h-3.5" />
              学习工具
            </div>
            <h1 className="text-2xl font-bold">目标规划</h1>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              根据你的年级和目标，定制三年学习路径和关键里程碑
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-sm font-medium text-muted-foreground px-1">你现在处于哪个阶段？</h2>
            <div className="grid grid-cols-2 gap-3">
              {gradeLevels.map((g) => (
                <Card
                  key={g.id}
                  className="cursor-pointer transition-all hover:shadow-md hover:border-primary/50"
                  onClick={() => {
                    setSelectedGrade(g)
                    setStep('goal')
                  }}
                >
                  <CardContent className="p-4 flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-xl flex flex-col items-center justify-center flex-shrink-0 text-white"
                      style={{ backgroundColor: phaseColors[g.phase] }}
                    >
                      <span className="text-xs opacity-80">{g.phase}</span>
                      <span className="text-sm font-bold">{g.shortLabel}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm">{g.label}</div>
                      <div className="text-xs text-muted-foreground">{g.year}</div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button variant="ghost" size="sm" onClick={reset} className="text-muted-foreground">
              重新选择
            </Button>
          </div>
        </div>
      </AppLayout>
    )
  }

  // 步骤二：选择目标
  if (step === 'goal') {
    return (
      <AppLayout>
        <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">
          <div className="text-center space-y-3">
            <Badge variant="outline" className="text-xs">
              {selectedGrade?.label}
            </Badge>
            <h1 className="text-2xl font-bold">你的目标是什么？</h1>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              选择最符合你的目标方向，获取定制化三年规划
            </p>
          </div>

          <div className="space-y-3">
            {learningGoals.map((g) => {
              const Icon = goalIcons[g.id] || GraduationCap
              return (
                <Card
                  key={g.id}
                  className="cursor-pointer transition-all hover:shadow-md"
                  style={{ borderColor: g.color + '44' }}
                  onClick={() => {
                    setSelectedGoal(g)
                    setStep('plan')
                  }}
                >
                  <CardContent className="p-5 flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: g.color + '18' }}
                    >
                      <Icon className="w-6 h-6" style={{ color: g.color }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold">{g.label}</span>
                        <Badge
                          variant="outline"
                          className="text-xs"
                          style={{ borderColor: g.color, color: g.color }}
                        >
                          {g.shortLabel}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{g.description}</p>
                      <div className="grid grid-cols-3 gap-2">
                        {g.targets.map((t) => (
                          <div key={t.grade} className="p-2 rounded-lg bg-muted/50 text-center">
                            <div className="text-xs text-muted-foreground mb-0.5">{t.grade}</div>
                            <div className="text-xs font-medium line-clamp-1">{t.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-2" />
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="flex items-center justify-center gap-3">
            <Button variant="outline" size="sm" onClick={() => setStep('grade')} className="gap-1">
              <ChevronRight className="w-4 h-4 rotate-180" />
              重选年级
            </Button>
          </div>
        </div>
      </AppLayout>
    )
  }

  // 步骤三：展示规划
  if (step === 'plan' && selectedGrade && selectedGoal) {
    return (
      <AppLayout>
        <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
          {/* 顶部 */}
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge style={{ backgroundColor: phaseColors[selectedGrade.phase] + '18', color: phaseColors[selectedGrade.phase] }}>
                  {selectedGrade.phase}
                </Badge>
                <Badge variant="outline" style={{ borderColor: selectedGoal.color, color: selectedGoal.color }}>
                  {selectedGoal.shortLabel}
                </Badge>
              </div>
              <h1 className="text-xl font-bold">{selectedGrade.label} · {selectedGoal.label}</h1>
              <p className="text-sm text-muted-foreground">{selectedGrade.description}</p>
            </div>
            <Button variant="outline" size="sm" onClick={reset} className="text-muted-foreground">
              重新规划
            </Button>
          </div>

          {/* 三年时间线 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Clock className="w-4 h-4" />
                三年关键里程碑
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                {/* 时间线 */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-muted" />
                <div className="space-y-4 pl-10">
                  {gradeLevels.map((g, idx) => (
                    <div key={g.id} className="relative">
                      <div
                        className="absolute -left-10 top-1 w-5 h-5 rounded-full border-2 border-background"
                        style={{ backgroundColor: phaseColors[g.phase] }}
                      />
                      <div className="mb-2 flex items-center gap-2">
                        <span className="font-semibold text-sm" style={{ color: phaseColors[g.phase] }}>
                          {g.shortLabel}
                        </span>
                        <span className="text-xs text-muted-foreground">{g.year}</span>
                      </div>
                      <div className="space-y-2">
                        {g.milestones.map((m) => (
                          <div key={m.id} className="flex items-start gap-3">
                            <span className={`text-xs px-2 py-0.5 rounded font-medium whitespace-nowrap mt-0.5 ${milestoneTypeColors[m.type]}`}>
                              {m.month}
                            </span>
                            <div>
                              <div className="text-sm font-medium">{m.label}</div>
                              <div className="text-xs text-muted-foreground">{m.description}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 目标分解 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Target className="w-4 h-4" />
                {selectedGoal.label} 三年目标
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {selectedGoal.targets.map((t) => {
                const grade = gradeLevels.find((g) => g.year.includes(t.grade.replace('高', '')) || g.phase === t.grade)
                return (
                  <div key={t.grade} className="p-4 rounded-lg border space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-sm">{t.grade}：{t.label}</span>
                      {grade && (
                        <Link to={grade.recommendedPath}>
                          <Button size="sm" variant="ghost" className="gap-1 text-xs">
                            <MapPin className="w-3 h-3" />
                            进入学习
                          </Button>
                        </Link>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{t.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {t.metrics.map((m, i) => (
                        <Badge key={i} variant="outline" className="text-xs font-normal">
                          {m}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )
              })}
            </CardContent>
          </Card>

          {/* 重点关注 */}
          <Card className="bg-muted/30">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                当前阶段重点
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {selectedGrade.keyFocus.map((f, i) => (
                  <Badge key={i} variant="outline" className="py-1.5 px-3 text-sm font-normal">
                    {f}
                  </Badge>
                ))}
              </div>
              <div className="mt-4 flex gap-3">
                <Link to={`/${selectedGrade.id.startsWith('grade9') ? 'diagnosis' : 'diagnosis'}`}>
                  <Button size="sm" variant="outline" className="gap-1">
                    <Target className="w-3 h-3" />
                    做能力诊断
                  </Button>
                </Link>
                <Link to="/methods">
                  <Button size="sm" variant="outline" className="gap-1">
                    <BookOpen className="w-3 h-3" />
                    学习方法
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* 底部导航 */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <Button variant="outline" onClick={() => setStep('goal')} className="gap-1">
              <ChevronRight className="w-4 h-4 rotate-180" />
              重新选目标
            </Button>
            <Link to="/methods">
              <Button className="gap-1">
                学习方法
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </AppLayout>
    )
  }

  return null
}
