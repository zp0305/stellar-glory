import { useState, useEffect, useCallback } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { AppLayout } from '@/components/layout/Navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MarkdownRenderer } from '@/components/MarkdownRenderer'
import { questionsByModel, DIFF_LABEL, DIFF_COLOR } from '@/data/physics/questions'
import { useUserStore } from '@/stores/userStore'
import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight, Clock, CheckCircle, XCircle, Lightbulb, Eye, EyeOff } from 'lucide-react'
import type { Question } from '@/data/physics/questions/types'

function formatTime(s: number) {
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`
}

// 去掉 $...$、\、空格、大小写，统一比较格式
function normalizeAnswer(raw: string): string {
  return raw
    .replace(/\$+/g, '')   // 去LaTeX美元符
    .replace(/\\/g, '')     // 去反斜杠（\frac{}{} 等）
    .replace(/\s+/g, '')   // 去所有空格
    .toLowerCase()
    .trim()
}

// 题型标签
const TYPE_LABELS: Record<string, string> = {
  '选择题': '单选题',
  '填空题': '填空题',
  '计算题': '计算题',
}

function TypeBadge({ type }: { type: string }) {
  const colors: Record<string, string> = {
    '选择题': 'bg-blue-50 text-blue-600 border-blue-200',
    '填空题': 'bg-amber-50 text-amber-600 border-amber-200',
    '计算题': 'bg-purple-50 text-purple-600 border-purple-200',
  }
  return (
    <span className={cn(
      'text-xs px-2 py-0.5 rounded-full font-medium border',
      colors[type] || 'bg-gray-50 text-gray-600 border-gray-200'
    )}>
      {TYPE_LABELS[type] || type}
    </span>
  )
}

// 单题答题卡片
function QuestionCard({
  q, allQuestions, currentIndex, modelId, onNext,
}: {
  q: Question
  allQuestions: Question[]
  currentIndex: number
  modelId?: string
  onNext?: () => void
}) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [timeLeft, setTimeLeft] = useState(q.estimatedMinutes * 60)
  const diffIndex = allQuestions.filter(q2 => q2.difficulty === q.difficulty).findIndex(q2 => q2.id === q.id)

  const { addWrongQuestion, addQuestionAttempt, updateLearningStats } = useUserStore()

  useEffect(() => {
    setSelectedOption(null)
    setSubmitted(false)
    setShowHint(false)
    setTimeLeft(q.estimatedMinutes * 60)
  }, [q.id, q.estimatedMinutes])

  useEffect(() => {
    if (submitted || timeLeft === 0) return
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev <= 1 ? (clearInterval(timer), 0) : prev - 1))
    }, 1000)
    return () => clearInterval(timer)
  }, [q.id, submitted])

  const isChoice = !!q.options

  const choiceCorrect = submitted && isChoice && normalizeAnswer(selectedOption ?? '') === normalizeAnswer(q.answer)
  const isCorrect = choiceCorrect

  const handleSubmit = useCallback(() => {
    if (selectedOption === null) return
    setSubmitted(true)

    const subject = 'PHY' as const

    if (isChoice && !choiceCorrect) {
      const wrongRecord = {
        id: `WT-${subject}-${Date.now()}`,
        questionId: q.id,
        subject,
        modelId,
        questionContent: q.question.replace(/\$\\$/g, '').replace(/\\/g, '').slice(0, 100),
        myAnswer: selectedOption,
        correctAnswer: q.answer,
        isCorrect: false,
        points: q.points,
        isReviewed: false,
        reviewCount: 0,
        isMastered: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
      addWrongQuestion(wrongRecord)
    }

    const attempt = {
      id: `AT-${subject}-${Date.now()}`,
      questionId: q.id,
      subject,
      modelId,
      isCorrect: isChoice ? choiceCorrect : true,
      answeredAt: new Date().toISOString(),
      timeSpent: q.estimatedMinutes * 60 - timeLeft,
    }
    addQuestionAttempt(attempt)
    updateLearningStats(subject)
  }, [selectedOption, q, modelId, isChoice, choiceCorrect, timeLeft, addWrongQuestion, addQuestionAttempt, updateLearningStats])

  return (
    <Card className={cn('transition-all duration-300', submitted && (isCorrect ? 'ring-2 ring-green-400' : 'ring-2 ring-red-400'))}>
      <CardContent className="p-6 space-y-5">

        {/* 题干头部 */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-semibold text-muted-foreground">
              {q.difficulty}{String(diffIndex + 1).padStart(2, '0')}
            </span>
            <span className={cn('text-xs px-2 py-0.5 rounded-full font-medium border', DIFF_COLOR[q.difficulty])}>
              {DIFF_LABEL[q.difficulty]}
            </span>
            <TypeBadge type={q.type} />
            <span className="flex items-center gap-1 text-xs text-muted-foreground ml-auto">
              <Clock className="w-3 h-3" />
              {!submitted && <span className={timeLeft < 60 ? 'text-red-500' : ''}>{formatTime(timeLeft)}</span>}
              {submitted && <span>{formatTime(q.estimatedMinutes * 60 - timeLeft)}</span>}
            </span>
          </div>
          <MarkdownRenderer content={q.question} enableKaTeX className="text-sm [&_p]:leading-relaxed [&_p]:font-medium [&_p]:mb-0" />
        </div>

        {/* 选择题选项 */}
        {isChoice && (
          <div className="space-y-2.5">
            {q.options!.map((opt, i) => {
              const letter = String.fromCharCode(65 + i)
              const isSelected = selectedOption === letter
              let optClass = 'border-border bg-card'
              if (submitted) {
                if (letter === q.answer) optClass = 'border-green-500 bg-green-50 text-green-700'
                else if (isSelected) optClass = 'border-red-400 bg-red-50 text-red-600'
                else optClass = 'border-border bg-muted/30 opacity-60'
              } else if (isSelected) {
                optClass = 'border-primary bg-primary/5 text-primary'
              }
              return (
                <button
                  key={i}
                  onClick={() => !submitted && setSelectedOption(letter)}
                  disabled={submitted}
                  className={cn('w-full text-left px-4 py-3 rounded-xl border transition-all text-sm hover:border-primary/40', optClass)}>
                  <span className="font-medium mr-2">{letter}.</span>{opt}
                  {submitted && letter === q.answer && <CheckCircle className="w-4 h-4 inline-block ml-2 text-green-500" />}
                  {submitted && isSelected && letter !== q.answer && <XCircle className="w-4 h-4 inline-block ml-2 text-red-500" />}
                </button>
              )
            })}
          </div>
        )}

        {/* 填空/计算题输入 */}
        {!isChoice && !submitted && (
          <div className="space-y-2">
            <label className="text-xs text-muted-foreground flex items-center gap-1">
              {q.type === '计算题' ? '📝 计算题：写出完整步骤后自行对答案' : '📝 填空题：请填写数值答案'}
            </label>
            <input
              type="text"
              value={selectedOption ?? ''}
              onChange={e => setSelectedOption(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:outline-none focus:border-primary"
              placeholder={q.type === '计算题' ? '输入最终答案，如 40m' : '输入数值答案'}
            />
          </div>
        )}

        {/* 填空/计算题提交后答案对比 */}
        {!isChoice && submitted && (
          <div className="border rounded-xl p-4 bg-muted/30 space-y-2">
            <p className="text-xs text-muted-foreground font-medium">你的答案</p>
            <p className="text-sm font-medium">{selectedOption || '（未填写）'}</p>
            <div className="border-t pt-2 space-y-1">
              <p className="text-xs text-muted-foreground font-medium">参考答案</p>
              <div className="text-sm">
                <MarkdownRenderer content={q.answer} enableKaTeX className="text-sm [&_p]:mb-0" />
              </div>
            </div>
          </div>
        )}

        {/* 提示（可隐藏） */}
        {q.hint && !submitted && (
          <div className="border border-amber-200 bg-amber-50 rounded-lg">
            <button onClick={() => setShowHint(!showHint)} className="w-full flex items-center justify-between px-4 py-2.5">
              <span className="flex items-center gap-2 text-sm text-amber-700 font-medium">
                <Lightbulb className="w-4 h-4" />解题提示
              </span>
              {showHint ? <EyeOff className="w-4 h-4 text-amber-600" /> : <Eye className="w-4 h-4 text-amber-600" />}
            </button>
            {showHint && (
              <div className="px-4 pb-3 text-sm text-amber-700 whitespace-pre-wrap border-t border-amber-100">{q.hint}</div>
            )}
          </div>
        )}

        {/* 提交按钮 */}
        {!submitted ? (
          <Button onClick={handleSubmit} disabled={selectedOption === null} className="w-full" size="lg">
            {isChoice ? '提交答案' : '查看答案'}
          </Button>
        ) : (
          <div className="space-y-4">
            {/* 选择题结果 banner */}
            {isChoice && (
              <div className={cn('flex items-center gap-3 px-5 py-3.5 rounded-xl', isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200')}>
                {isCorrect ? (
                  <><CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
                    <div><p className="font-semibold text-green-700 text-sm">回答正确 🎉</p></div></>
                ) : (
                  <><XCircle className="w-6 h-6 text-red-500 shrink-0" />
                    <div><p className="font-semibold text-red-700 text-sm">回答错误</p><p className="text-xs text-red-600">正确答案是 {q.answer}</p></div></>
                )}
              </div>
            )}

            <div className="border-t pt-4 space-y-3">
              <p className="font-semibold text-sm">【解析】</p>
              <MarkdownRenderer content={q.explanation} enableKaTeX className="text-sm text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-2" />
              {q.points?.length > 0 && (
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-1.5">相关知识点</p>
                  <div className="flex flex-wrap gap-1.5">
                    {q.points.map(p => <span key={p} className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100">{p}</span>)}
                  </div>
                </div>
              )}
              {q.routineIds?.length > 0 && (
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-1.5">相关套路</p>
                  <div className="flex flex-wrap gap-1.5">
                    {q.routineIds.map(rid => <Link key={rid} to={`/physics/strategies/${rid}`}><span className="text-xs px-2 py-1 rounded-full bg-purple-50 text-purple-600 border border-purple-100">{rid.replace('PHY-R', 'R')}</span></Link>)}
                  </div>
                </div>
              )}
            </div>
            {onNext && (
              <Button onClick={onNext} className="w-full gap-1" size="lg">
                下一题 <ChevronRight className="w-4 h-4" />
              </Button>
            )}
          </div>
        )}

      </CardContent>
    </Card>
  )
}

export function QuestionDoPage() {
  const { modelId } = useParams<{ modelId: string }>()
  const [searchParams] = useSearchParams()
  const questionId = searchParams.get('q')

  const allQuestions = modelId ? (questionsByModel[modelId] ?? []) : []

  const initialIndex = questionId
    ? Math.max(0, allQuestions.findIndex(q => q.id === questionId))
    : 0
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  const q = allQuestions[currentIndex]

  if (!q) {
    return (
      <AppLayout showSubjectNav>
        <div className="max-w-2xl mx-auto px-4 py-16 text-center">
          <p className="text-muted-foreground mb-4">题目不存在</p>
          <Link to={`/physics/exercises/${modelId}`}><Button variant="outline">返回题库</Button></Link>
        </div>
      </AppLayout>
    )
  }

  return (
    <AppLayout showSubjectNav>
      <div className="max-w-2xl mx-auto px-4 py-8 space-y-5">

        {/* 顶部栏 */}
        <div className="flex items-center justify-between flex-wrap gap-3">
          <Link to={`/physics/exercises/${modelId}`}>
            <Button variant="ghost" size="sm" className="pl-0 gap-1 text-muted-foreground">
              <ChevronLeft className="w-4 h-4" /> 返回
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">第 {currentIndex + 1} / {allQuestions.length} 题</span>
          </div>
        </div>

        {/* 进度条 */}
        <div className="h-1.5 rounded-full bg-muted overflow-hidden">
          <div className="h-full bg-primary transition-all duration-300" style={{ width: `${((currentIndex + 1) / allQuestions.length) * 100}%` }} />
        </div>

        {/* 题目卡片 */}
        <QuestionCard
          q={q}
          allQuestions={allQuestions}
          currentIndex={currentIndex}
          modelId={modelId}
          onNext={currentIndex < allQuestions.length - 1 ? () => setCurrentIndex(prev => prev + 1) : undefined}
        />

        {/* 底部翻题 */}
        <div className="flex items-center justify-between">
          <Button variant="outline" size="sm" onClick={() => setCurrentIndex(p => p - 1)} disabled={currentIndex === 0} className="gap-1">
            <ChevronLeft className="w-4 h-4" /> 上一题
          </Button>
          <Link to={`/physics/exercises/${modelId}`}>
            <Button variant="ghost" size="sm" className="text-muted-foreground">返回题库</Button>
          </Link>
          <Button variant="outline" size="sm" onClick={() => setCurrentIndex(p => p + 1)} disabled={currentIndex === allQuestions.length - 1} className="gap-1">
            下一题 <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

      </div>
    </AppLayout>
  )
}