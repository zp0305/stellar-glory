import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AppLayout } from '@/components/layout/Navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import {
  Stethoscope,
  ChevronRight,
  CheckCircle2,
  XCircle,
  ArrowRight,
  RefreshCw,
  Lightbulb,
  BookOpen,
  Brain,
} from 'lucide-react'
import {
  diagnosisSubjects,
  calculateGrade,
  gradeDescriptions,
  type DiagnosisSubject,
  type DiagnosisQuestion,
} from '@/data/tools/diagnosis'

type Step = 'select' | 'quiz' | 'result'

export function DiagnosisPage() {
  const [step, setStep] = useState<Step>('select')
  const [selectedSubject, setSelectedSubject] = useState<DiagnosisSubject | null>(null)
  const [currentQIndex, setCurrentQIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [result, setResult] = useState<{ correct: number; total: number; grade: 'A' | 'B' | 'C' | 'D' } | null>(null)

  // 从 localStorage 恢复历史记录
  const [history] = useState(() => {
    try {
      const saved = localStorage.getItem('diagnosis_history')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  const startQuiz = (subject: DiagnosisSubject) => {
    setSelectedSubject(subject)
    setAnswers({})
    setCurrentQIndex(0)
    setResult(null)
    setStep('quiz')
  }

  const handleAnswer = (questionId: string, answerIdx: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answerIdx }))
  }

  const submitQuiz = () => {
    if (!selectedSubject) return
    const qs = selectedSubject.questions
    const total = qs.length
    const correct = qs.filter((q) => answers[q.id] === q.correctAnswer).length
    const grade = calculateGrade(correct, total)
    const res = { correct, total, grade }

    // 保存到 localStorage
    try {
      const saved = JSON.parse(localStorage.getItem('diagnosis_history') || '[]')
      saved.unshift({ subject: selectedSubject.id, ...res, date: new Date().toISOString() })
      localStorage.setItem('diagnosis_history', JSON.stringify(saved.slice(0, 10)))
    } catch {}

    setResult(res)
    setStep('result')
  }

  const reset = () => {
    setStep('select')
    setSelectedSubject(null)
    setAnswers({})
    setCurrentQIndex(0)
    setResult(null)
  }

  // 步骤一：选择学科
  if (step === 'select') {
    return (
      <AppLayout>
        <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">
          {/* 页面头部 */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm">
              <Stethoscope className="w-3.5 h-3.5" />
              学习工具
            </div>
            <h1 className="text-2xl font-bold">学科能力诊断</h1>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              通过 5-6 道入门题，快速评估你在该学科的掌握程度，获得个性化学习建议
            </p>
          </div>

          {/* 学科选择卡片 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {diagnosisSubjects.map((s) => {
              const hasQuestions = s.questions.length > 0
              return (
                <Card
                  key={s.id}
                  className={`cursor-pointer transition-all hover:shadow-md ${!hasQuestions ? 'opacity-60' : ''}`}
                  style={{ borderColor: hasQuestions ? s.color + '44' : undefined }}
                  onClick={() => hasQuestions && startQuiz(s)}
                >
                  <CardContent className="p-4 text-center space-y-2">
                    <div
                      className="w-10 h-10 rounded-full mx-auto flex items-center justify-center text-white font-bold text-sm"
                      style={{ backgroundColor: s.color }}
                    >
                      {s.name.slice(0, 1)}
                    </div>
                    <div className="font-semibold text-sm">{s.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {hasQuestions ? `${s.questions.length} 道诊断题` : '题库建设中'}
                    </div>
                    {hasQuestions && <ChevronRight className="w-4 h-4 mx-auto text-muted-foreground" />}
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* 历史记录 */}
          {history.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Brain className="w-4 h-4" /> 历史诊断
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {history.slice(0, 3).map((h: any, i: number) => {
                    const subject = diagnosisSubjects.find((s) => s.id === h.subject)
                    const gd = gradeDescriptions[h.grade]
                    return (
                      <div key={i} className="flex items-center justify-between p-3 rounded-lg border">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                            style={{ backgroundColor: subject?.color || '#888' }}
                          >
                            {subject?.name.slice(0, 1) || '?'}
                          </div>
                          <div>
                            <div className="text-sm font-medium">{subject?.name || h.subject}</div>
                            <div className="text-xs text-muted-foreground">
                              {new Date(h.date).toLocaleDateString('zh-CN')} · {h.correct}/{h.total} 正确
                            </div>
                          </div>
                        </div>
                        <Badge style={{ backgroundColor: gd?.color + '18', color: gd?.color }}>
                          {gd?.label}
                        </Badge>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          )}

          {/* 说明 */}
          <Card className="bg-muted/30">
            <CardContent className="p-4">
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <Lightbulb className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-foreground">提示：</span>
                  每科诊断约 5 分钟，包含基础题和进阶题。诊断结果会保存在本地，便于追踪学习进展。
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </AppLayout>
    )
  }

  // 步骤二：答题
  if (step === 'quiz' && selectedSubject) {
    const qs = selectedSubject.questions
    const currentQ = qs[currentQIndex]
    const isLast = currentQIndex === qs.length - 1
    const hasAnswered = answers[currentQ.id] !== undefined

    return (
      <AppLayout>
        <div className="max-w-2xl mx-auto px-4 py-10 space-y-6">
          {/* 顶部进度 */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
                  style={{ backgroundColor: selectedSubject.color }}
                >
                  {selectedSubject.name.slice(0, 1)}
                </div>
                <span className="font-medium">{selectedSubject.name} 能力诊断</span>
              </div>
              <span className="text-muted-foreground">
                {currentQIndex + 1} / {qs.length}
              </span>
            </div>
            <Progress value={((currentQIndex + 1) / qs.length) * 100} className="h-1.5" />
          </div>

          {/* 题目卡片 */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Badge
                  variant="outline"
                  style={{ borderColor: selectedSubject.color, color: selectedSubject.color }}
                >
                  {currentQ.difficulty === 'D1' ? '基础' : currentQ.difficulty === 'D2' ? '进阶' : '挑战'}
                </Badge>
                <span className="text-sm text-muted-foreground">{currentQ.topic}</span>
              </div>
              <CardTitle className="text-base font-normal leading-relaxed">
                {currentQ.question}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <RadioGroup
                value={answers[currentQ.id]?.toString()}
                onValueChange={(v) => handleAnswer(currentQ.id, parseInt(v))}
              >
                {currentQ.options.map((opt, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                      answers[currentQ.id] === idx
                        ? 'border-primary bg-primary/5'
                        : 'hover:bg-muted/50'
                    }`}
                    onClick={() => handleAnswer(currentQ.id, idx)}
                  >
                    <RadioGroupItem value={idx.toString()} id={`opt-${idx}`} />
                    <Label htmlFor={`opt-${idx}`} className="flex-1 cursor-pointer text-sm">
                      {opt}
                    </Label>
                  </div>
                ))}
              </RadioGroup>

              {hasAnswered && (
                <div className={`p-3 rounded-lg text-sm ${answers[currentQ.id] === currentQ.correctAnswer ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                  <div className="flex items-center gap-2 mb-1">
                    {answers[currentQ.id] === currentQ.correctAnswer ? (
                      <CheckCircle2 className="w-4 h-4" />
                    ) : (
                      <XCircle className="w-4 h-4" />
                    )}
                    <span className="font-medium">
                      {answers[currentQ.id] === currentQ.correctAnswer ? '回答正确 ✓' : '回答错误 ✗'}
                    </span>
                  </div>
                  <div className="text-xs opacity-80">{currentQ.explanation}</div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* 底部导航 */}
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentQIndex((i) => Math.max(0, i - 1))}
              disabled={currentQIndex === 0}
            >
              上一题
            </Button>

            {isLast ? (
              <Button onClick={submitQuiz} disabled={Object.keys(answers).length < qs.length} className="gap-1">
                查看结果
                <ArrowRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button
                onClick={() => setCurrentQIndex((i) => Math.min(qs.length - 1, i + 1))}
                disabled={!hasAnswered}
                className="gap-1"
              >
                下一题
                <ChevronRight className="w-4 h-4" />
              </Button>
            )}
          </div>

          <Button variant="ghost" size="sm" onClick={reset} className="text-muted-foreground">
            <RefreshCw className="w-3 h-3 mr-1" />
            重新选择学科
          </Button>
        </div>
      </AppLayout>
    )
  }

  // 步骤三：结果
  if (step === 'result' && result && selectedSubject) {
    const gd = gradeDescriptions[result.grade]
    const qs = selectedSubject.questions
    const wrongQs = qs.filter((q) => answers[q.id] !== q.correctAnswer)

    return (
      <AppLayout>
        <div className="max-w-2xl mx-auto px-4 py-10 space-y-6">
          {/* 结果卡片 */}
          <Card className="text-center overflow-hidden">
            <div
              className="h-2"
              style={{ background: `linear-gradient(to right, ${gd.color}, ${gd.color}88)` }}
            />
            <CardContent className="py-8 space-y-4">
              <div className="text-6xl font-bold" style={{ color: gd.color }}>
                {result.grade}
              </div>
              <div className="text-lg font-semibold" style={{ color: gd.color }}>
                {gd.label}
              </div>
              <p className="text-muted-foreground text-sm max-w-xs mx-auto">{gd.description}</p>
              <div className="flex items-center justify-center gap-4 pt-2">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{result.correct}</div>
                  <div className="text-xs text-muted-foreground">正确</div>
                </div>
                <div className="text-muted-foreground">/</div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{result.total}</div>
                  <div className="text-xs text-muted-foreground">总题数</div>
                </div>
                <div className="text-muted-foreground">|</div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">{result.total - result.correct}</div>
                  <div className="text-xs text-muted-foreground">需加强</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 薄弱点分析 */}
          {wrongQs.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-red-500" />
                  薄弱环节
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {wrongQs.map((q) => (
                  <div key={q.id} className="flex items-start gap-3 p-3 rounded-lg border">
                    <div className="flex-shrink-0 mt-0.5">
                      <Badge variant="outline" style={{ borderColor: selectedSubject.color, color: selectedSubject.color }}>
                        {q.topic}
                      </Badge>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm line-clamp-2 mb-1">{q.question}</p>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-red-50 text-red-600 border-red-200 text-xs">
                          正确：{q.options[q.correctAnswer]}
                        </Badge>
                      </div>
                    </div>
                    <Link to={`/${selectedSubject.id}/models`}>
                      <Button size="sm" variant="outline" className="gap-1 text-xs flex-shrink-0">
                        <BookOpen className="w-3 h-3" />
                        去学习
                      </Button>
                    </Link>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {/* 建议 */}
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-100">
            <CardContent className="p-5 space-y-3">
              <div className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-yellow-600" />
                <h3 className="font-semibold text-sm">下一步建议</h3>
              </div>
              {result.grade === 'A' || result.grade === 'B' ? (
                <div className="space-y-2 text-sm text-slate-700">
                  <p>✓ 你的基础扎实，可以进入下一阶段的学习内容</p>
                  <p>✓ 建议通过「<Link to="/planner" className="underline">目标规划</Link>」制定学习计划</p>
                  <p>✓ 进入「<Link to={`/${selectedSubject.id}`} className="underline">{selectedSubject.name}学习中心</Link>」继续深入</p>
                </div>
              ) : (
                <div className="space-y-2 text-sm text-slate-700">
                  <p>⚠ 建议回到基础内容系统学习，不要跳过章节</p>
                  <p>⚠ 使用「<Link to="/methods" className="underline">费曼学习法</Link>」重点复习薄弱环节</p>
                  <p>⚠ 进入「<Link to={`/${selectedSubject.id}/models`} className="underline">知识详解</Link>」从核心模型开始</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* 操作按钮 */}
          <div className="flex items-center justify-center gap-3">
            <Button variant="outline" onClick={reset} className="gap-1">
              <RefreshCw className="w-4 h-4" />
              重新诊断
            </Button>
            <Link to="/planner">
              <Button className="gap-1">
                制定规划
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
