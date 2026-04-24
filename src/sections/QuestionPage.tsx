import { useState, useEffect, useCallback, useRef } from 'react'
import { useParams, useSearchParams, Link } from 'react-router-dom'
import { AppLayout } from '@/components/layout/Navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { MarkdownRenderer } from '@/components/MarkdownRenderer'
import { cn } from '@/lib/utils'
import {
  ArrowLeft, ArrowRight, CheckCircle2, XCircle, Lightbulb,
  BookOpen, Flag, RotateCcw, ChevronRight, Clock, Timer,
  AlertTriangle, Trophy, Star
} from 'lucide-react'

// ============ 题目数据 ============
const mockQuestions = [
  {
    id: 'PHY-Q001',
    type: 'single',
    difficulty: 'B',
    model: '匀变速直线运动',
    content: `一辆汽车以初速度 $v_0 = 10\\ \\text{m/s}$ 行驶，突然以 $a = 2\\ \\text{m/s}^2$ 的加速度加速，求 $t = 5\\ \\text{s}$ 后的速度。`,
    options: [
      { id: 'A', content: '$15\\ \\text{m/s}$' },
      { id: 'B', content: '$20\\ \\text{m/s}$' },
      { id: 'C', content: '$25\\ \\text{m/s}$' },
      { id: 'D', content: '$30\\ \\text{m/s}$' },
    ],
    answer: 'B',
    explanation: `已知：$v_0 = 10\\ \\text{m/s}$，$a = 2\\ \\text{m/s}^2$，$t = 5\\ \\text{s}$\n\n由速度公式 $v = v_0 + at$：\n$$v = 10 + 2 \\times 5 = 20\\ \\text{m/s}$$\n\n答案为 **B**。`,
    hint: '使用匀变速直线运动速度公式 $v = v_0 + at$',
  },
  {
    id: 'PHY-Q002',
    type: 'single',
    difficulty: 'B',
    model: '匀变速直线运动',
    content: `一物体从静止开始做匀加速直线运动，加速度 $a = 3\\ \\text{m/s}^2$，求第 $4\\ \\text{s}$ 内的位移。`,
    options: [
      { id: 'A', content: '$6\\ \\text{m}$' },
      { id: 'B', content: '$9\\ \\text{m}$' },
      { id: 'C', content: '$10.5\\ \\text{m}$' },
      { id: 'D', content: '$12\\ \\text{m}$' },
    ],
    answer: 'C',
    explanation: `第 $n$ 秒内位移 = 前 $n$ 秒位移 - 前 $(n-1)$ 秒位移：\n\n$$x_4 = \\frac{1}{2}a\\cdot4^2 = \\frac{1}{2}\\times3\\times16 = 24\\ \\text{m}$$\n$$x_3 = \\frac{1}{2}a\\cdot3^2 = \\frac{1}{2}\\times3\\times9 = 13.5\\ \\text{m}$$\n$$\\Delta x = 24 - 13.5 = 10.5\\ \\text{m}$$\n\n答案为 **C**。`,
    hint: '第n秒内位移 = 前n秒位移 - 前(n-1)秒位移',
  },
  {
    id: 'PHY-Q003',
    type: 'single',
    difficulty: 'J',
    model: '匀变速直线运动',
    content: `汽车以 $72\\ \\text{km/h}$ 的速度行驶，刹车时加速度大小为 $4\\ \\text{m/s}^2$，求刹车后 $5\\ \\text{s}$ 内的位移。`,
    options: [
      { id: 'A', content: '$50\\ \\text{m}$' },
      { id: 'B', content: '$62.5\\ \\text{m}$' },
      { id: 'C', content: '$70\\ \\text{m}$' },
      { id: 'D', content: '$45\\ \\text{m}$' },
    ],
    answer: 'B',
    explanation: `首先换算单位：$72\\ \\text{km/h} = 20\\ \\text{m/s}$\n\n停止时间：$t_{停} = \\dfrac{v_0}{a} = \\dfrac{20}{4} = 5\\ \\text{s}$，刚好在 $5\\ \\text{s}$ 内停止\n\n由位移公式：\n$$s = v_0 t - \\frac{1}{2}at^2 = 20\\times5 - \\frac{1}{2}\\times4\\times25 = 62.5\\ \\text{m}$$\n\n答案为 **B**。`,
    hint: '先判断刹车到停止的时间，避免多算',
  },
  {
    id: 'PHY-Q004',
    type: 'single',
    difficulty: 'T',
    model: '匀变速直线运动',
    content: `一物体做匀减速直线运动，初速度 $v_0 = 20\\ \\text{m/s}$，加速度大小 $a = 5\\ \\text{m/s}^2$。求物体速度减为初速度一半时所经历的时间及位移。`,
    options: [
      { id: 'A', content: '$t = 2\\ \\text{s}$, $s = 25\\ \\text{m}$' },
      { id: 'B', content: '$t = 4\\ \\text{s}$, $s = 40\\ \\text{m}$' },
      { id: 'C', content: '$t = 3\\ \\text{s}$, $s = 37.5\\ \\text{m}$' },
      { id: 'D', content: '$t = 5\\ \\text{s}$, $s = 50\\ \\text{m}$' },
    ],
    answer: 'A',
    explanation: `速度减为一半：$v = \\dfrac{v_0}{2} = 10\\ \\text{m/s}$\n\n由 $v = v_0 + at$（注意减速取负）：\n$$t = \\frac{v - v_0}{a} = \\frac{10 - 20}{-5} = 2\\ \\text{s}$$\n\n由位移公式：\n$$s = v_0 t + \\frac{1}{2}at^2 = 20\\times2 + \\frac{1}{2}\\times(-5)\\times4 = 25\\ \\text{m}$$\n\n答案为 **A**。`,
    hint: '减速运动中加速度取负值，注意方向',
  },
]

// ============ 计时配置 ============
const DIFFICULTY_TIME: Record<string, number> = {
  B: 30,   // 基础层 30 秒
  J: 60,   // 进阶层 60 秒
  T: 90,   // 挑战层 90 秒
}

const DIFFICULTY_CONFIG: Record<string, { label: string; color: string; bg: string; border: string }> = {
  B: { label: 'B层 · 基础', color: 'text-green-600', bg: 'bg-green-100', border: 'border-green-200' },
  J: { label: 'J层 · 进阶', color: 'text-yellow-600', bg: 'bg-yellow-100', border: 'border-yellow-200' },
  T: { label: 'T层 · 挑战', color: 'text-red-600', bg: 'bg-red-100', border: 'border-red-200' },
}

const DIFFICULTY_PROGRESS: Record<string, { correct: number; total: number }> = {
  B: { correct: 12, total: 18 },
  J: { correct: 7, total: 10 },
  T: { correct: 3, total: 5 },
}

// ============ 做题结果汇总 ============
interface SessionResult {
  questionId: string
  difficulty: string
  myAnswer: string
  correctAnswer: string
  isCorrect: boolean
  timeSpent: number
}

export function QuestionPage() {
  const { bankType } = useParams<{ bankType?: string }>()
  const [searchParams] = useSearchParams()
  const modelFilter = searchParams.get('model')

  // 题目筛选
  const questions = modelFilter
    ? mockQuestions.filter((q) => q.model.includes(modelFilter))
    : mockQuestions

  // 核心状态
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [questionStartTime, setQuestionStartTime] = useState(Date.now())
  const [sessionResults, setSessionResults] = useState<SessionResult[]>([])

  // 计时器
  const [timeLeft, setTimeLeft] = useState<number | null>(null)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const [totalTimeUsed, setTotalTimeUsed] = useState(0)

  const question = questions[currentIndex]
  const currentDiff = question?.difficulty || 'B'
  const timeLimit = DIFFICULTY_TIME[currentDiff]

  // 开始计时
  const startTimer = useCallback((seconds: number) => {
    if (timerRef.current) clearInterval(timerRef.current)
    setTimeLeft(seconds)
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === null || prev <= 1) {
          clearInterval(timerRef.current!)
          // 时间到：自动提交
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }, [])

  // 初始化或切换题目时启动计时
  const initQuestion = useCallback(() => {
    setSelectedAnswer(null)
    setShowAnswer(false)
    setShowHint(false)
    setSubmitted(false)
    setQuestionStartTime(Date.now())
    startTimer(DIFFICULTY_TIME[currentDiff])
  }, [currentDiff, startTimer])

  useEffect(() => {
    initQuestion()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [currentIndex, initQuestion])

  // 时间耗尽自动提交
  useEffect(() => {
    if (timeLeft === 0 && !submitted) {
      // 时间到，自动提交（选当前答案为null标记为超时）
      const timeSpent = DIFFICULTY_TIME[currentDiff]
      setTotalTimeUsed((prev) => prev + timeSpent)
      setSessionResults((prev) => [
        ...prev,
        {
          questionId: question.id,
          difficulty: currentDiff,
          myAnswer: '⏱️超时',
          correctAnswer: question.answer,
          isCorrect: false,
          timeSpent,
        },
      ])
      setSubmitted(true)
      setShowAnswer(true)
    }
  }, [timeLeft, submitted, currentDiff, question])

  // 手动提交
  const handleSubmit = () => {
    if (!selectedAnswer) return
    if (timerRef.current) clearInterval(timerRef.current)
    const timeSpent = Math.round((Date.now() - questionStartTime) / 1000)
    setTimeLeft(null)
    setTotalTimeUsed((prev) => prev + timeSpent)
    setSessionResults((prev) => [
      ...prev,
      {
        questionId: question.id,
        difficulty: currentDiff,
        myAnswer: selectedAnswer,
        correctAnswer: question.answer,
        isCorrect: selectedAnswer === question.answer,
        timeSpent,
      },
    ])
    setSubmitted(true)
    setShowAnswer(true)
  }

  // 下一题
  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1)
    }
  }

  // 上一题
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
    }
  }

  // 重做
  const handleReset = () => {
    setSelectedAnswer(null)
    setShowAnswer(false)
    setShowHint(false)
    initQuestion()
  }

  // 格式化时间
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return m > 0 ? `${m}分${s}秒` : `${s}秒`
  }

  const isCorrect = selectedAnswer === question.answer
  const isLast = currentIndex === questions.length - 1
  const isTimeWarning = timeLeft !== null && timeLeft <= 5 && timeLeft > 0
  const isTimeOut = timeLeft === 0 && submitted
  const sessionCorrect = sessionResults.filter((r) => r.isCorrect).length
  const sessionAccuracy = sessionResults.length > 0
    ? Math.round((sessionCorrect / sessionResults.length) * 100)
    : 0

  // 全部完成
  const allDone = submitted && isLast

  return (
    <AppLayout showSubjectNav>
      {/* 顶部导航 */}
      <section className="py-3 px-4 border-b bg-card">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/physics/practice" className="hover:text-primary transition-colors flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" /> 练习中心
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">{currentIndex + 1} / {questions.length}</span>
          </div>

          {/* 计时显示 */}
          <div className="flex items-center gap-3">
            {/* 本题用时 */}
            {totalTimeUsed > 0 && (
              <span className="text-xs text-muted-foreground hidden sm:block">
                已用：{formatTime(totalTimeUsed)}
              </span>
            )}
            {/* 计时器 */}
            {timeLeft !== null && (
              <div className={cn(
                'flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all',
                isTimeWarning ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-primary/10 text-primary',
              )}>
                <Timer className="w-4 h-4" />
                <span className="font-mono tabular-nums">
                  {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
                </span>
                {isTimeWarning && <AlertTriangle className="w-3.5 h-3.5" />}
              </div>
            )}
            {/* 正确率 */}
            {sessionResults.length > 0 && (
              <Badge variant="outline" className="text-xs hidden sm:flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                {sessionCorrect}/{sessionResults.length}
              </Badge>
            )}
          </div>
        </div>

        {/* 进度条 */}
        <div className="mt-2">
          <Progress value={((currentIndex + 1) / questions.length) * 100} className="h-1.5" />
        </div>
      </section>

      {/* 全部完成 → 结果汇总 */}
      {allDone ? (
        <section className="max-w-2xl mx-auto px-4 py-12 space-y-6">
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                <Trophy className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-green-700">本次练习完成！</h2>
                <p className="text-muted-foreground mt-1">共 {questions.length} 题，加油</p>
              </div>
              <div className="grid grid-cols-3 gap-4 py-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-600">{sessionCorrect}</p>
                  <p className="text-xs text-muted-foreground">答对</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-red-600">{questions.length - sessionCorrect}</p>
                  <p className="text-xs text-muted-foreground">答错</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">{sessionAccuracy}%</p>
                  <p className="text-xs text-muted-foreground">正确率</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 text-xs text-muted-foreground">
                <p>总用时：{formatTime(totalTimeUsed)}</p>
                <p>正确率超过全国 {sessionAccuracy > 70 ? '80%' : '40%'} 的学习者</p>
              </div>
            </CardContent>
          </Card>

          {/* 逐题回顾 */}
          <div className="space-y-2">
            <h3 className="font-semibold text-base">答题回顾</h3>
            {sessionResults.map((r, i) => {
              const q = questions.find((q) => q.id === r.questionId)!
              return (
                <Card key={r.questionId} className={r.isCorrect ? 'border-green-200' : 'border-red-200'}>
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${r.isCorrect ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                      {r.isCorrect ? <CheckCircle2 className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{q.content.replace(/\$\\$/g, '').replace(/\\/g, '').slice(0, 40)}...</p>
                      <p className="text-xs text-muted-foreground">
                        {r.myAnswer === '⏱️超时' ? '⏱️超时' : `答案：${r.myAnswer}`}
                        {!r.isCorrect && r.myAnswer !== '⏱️超时' && `（正确答案：${r.correctAnswer}）`}
                        · 用时 {r.timeSpent}秒
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* 操作按钮 */}
          <div className="flex gap-3">
            <Button variant="outline" className="flex-1 gap-2" onClick={handleReset}>
              <RotateCcw className="w-4 h-4" /> 再做一遍
            </Button>
            <Link to="/physics/wrong" className="flex-1">
              <Button variant="outline" className="w-full gap-2">
                <BookOpen className="w-4 h-4" /> 查看错题本
              </Button>
            </Link>
          </div>
        </section>
      ) : (
        /* 做题界面 */
        <section className="py-4 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* 左侧主区 */}
            <div className="lg:col-span-3 space-y-4">
              {/* 题目卡片 */}
              <Card>
                <CardContent className="p-6 space-y-5">
                  {/* 题头信息 */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge className={`${DIFFICULTY_CONFIG[currentDiff].bg} ${DIFFICULTY_CONFIG[currentDiff].color} border ${DIFFICULTY_CONFIG[currentDiff].border}`}>
                        {DIFFICULTY_CONFIG[currentDiff].label}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{question.id}</span>
                      {question.model && (
                        <Badge variant="outline" className="text-xs">{question.model}</Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm" className="gap-1"
                        onClick={() => setShowHint(!showHint)} disabled={showAnswer}>
                        <Lightbulb className="w-4 h-4" /> 提示
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-1">
                        <Flag className="w-4 h-4" /> 收藏
                      </Button>
                    </div>
                  </div>

                  {/* 提示 */}
                  {showHint && (
                    <div className="p-3 rounded-lg bg-yellow-50 border border-yellow-200 text-sm">
                      <div className="flex items-center gap-2 text-yellow-700 mb-1">
                        <Lightbulb className="w-4 h-4" /> <span className="font-medium">提示</span>
                      </div>
                      <p className="text-yellow-700">{question.hint}</p>
                    </div>
                  )}

                  {/* 题目内容 */}
                  <div className="prose dark:prose-invert max-w-none">
                    <MarkdownRenderer content={question.content} />
                  </div>

                  {/* 选项 */}
                  <div className="space-y-2">
                    {question.options.map((opt) => {
                      const isMyAnswer = selectedAnswer === opt.id
                      const isRight = opt.id === question.answer
                      const isWrong = isMyAnswer && isRight === false

                      return (
                        <button
                          key={opt.id}
                          onClick={() => !showAnswer && setSelectedAnswer(opt.id)}
                          disabled={showAnswer}
                          className={cn(
                            'w-full p-4 rounded-xl border-2 text-left transition-all',
                            !showAnswer && isMyAnswer && 'border-primary bg-primary/5',
                            !showAnswer && !isMyAnswer && 'border-border hover:border-primary/50 hover:bg-muted/50',
                            showAnswer && isRight && 'border-green-500 bg-green-50',
                            showAnswer && isWrong && 'border-red-500 bg-red-50',
                            showAnswer && isMyAnswer && !isRight && 'border-red-500 bg-red-50',
                          )}
                        >
                          <div className="flex items-center gap-3">
                            <span className={cn(
                              'w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0',
                              isMyAnswer && !showAnswer && 'bg-primary text-white',
                              showAnswer && isRight && 'bg-green-500 text-white',
                              showAnswer && isWrong && 'bg-red-500 text-white',
                              !isMyAnswer && !showAnswer && 'bg-muted text-muted-foreground',
                              showAnswer && !isMyAnswer && 'bg-muted text-muted-foreground',
                            )}>
                              {opt.id}
                            </span>
                            <div className="flex-1">
                              <MarkdownRenderer content={opt.content} />
                            </div>
                            {showAnswer && isRight && <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />}
                            {showAnswer && isWrong && <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />}
                          </div>
                        </button>
                      )
                    })}
                  </div>

                  {/* 操作区 */}
                  <div className="flex items-center justify-between pt-2 border-t">
                    <Button variant="outline" size="sm" onClick={handleReset} className="gap-1">
                      <RotateCcw className="w-4 h-4" /> 重做
                    </Button>
                    {!showAnswer ? (
                      <Button onClick={handleSubmit} disabled={!selectedAnswer} className="gap-1">
                        <CheckCircle2 className="w-4 h-4" /> 提交答案
                      </Button>
                    ) : (
                      <div className="flex items-center gap-2">
                        {isTimeOut ? (
                          <span className="flex items-center gap-1 text-xs text-red-500">
                            <AlertTriangle className="w-4 h-4" /> 时间到
                          </span>
                        ) : isCorrect ? (
                          <span className="flex items-center gap-1 text-green-600 text-sm font-medium">
                            <CheckCircle2 className="w-5 h-5" /> 回答正确
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-red-600 text-sm font-medium">
                            <XCircle className="w-5 h-5" /> 回答错误
                          </span>
                        )}
                        <Button size="sm" onClick={handleNext} className="gap-1">
                          {isLast ? '查看结果' : '下一题'} <ArrowRight className="w-4 h-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* 解析 */}
              {showAnswer && (
                <Card className={cn(
                  'border-2',
                  isCorrect ? 'border-green-200 bg-green-50/30' : 'border-red-200 bg-red-50/30'
                )}>
                  <CardContent className="p-6 space-y-3">
                    <h3 className="font-semibold flex items-center gap-2">
                      <BookOpen className="w-5 h-5" />
                      {isTimeOut ? '⏱️ 超时未作答' : isCorrect ? '✅ 回答正确' : '❌ 答案解析'}
                    </h3>
                    <div className="prose dark:prose-invert max-w-none text-sm">
                      <MarkdownRenderer content={question.explanation} />
                    </div>
                    {!isCorrect && !isTimeOut && (
                      <div className="p-3 rounded-lg bg-orange-50 border border-orange-100 text-sm">
                        <span className="font-medium text-orange-700">💡 下次遇到类似题目，可以先从 {question.hint?.substring(0, 15)}... 入手</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>

            {/* 右侧边栏 */}
            <div className="lg:col-span-1 space-y-4">
              {/* 题目导航 */}
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-sm font-semibold mb-3">题目导航</h3>
                  <div className="grid grid-cols-5 gap-1.5">
                    {questions.map((q, idx) => {
                      const result = sessionResults.find((r) => r.questionId === q.id)
                      return (
                        <button
                          key={q.id}
                          onClick={() => setCurrentIndex(idx)}
                          className={cn(
                            'aspect-square rounded-lg text-xs font-medium transition-all',
                            idx === currentIndex && 'bg-primary text-white',
                            idx !== currentIndex && result?.isCorrect && 'bg-green-100 text-green-700',
                            idx !== currentIndex && result?.isCorrect === false && 'bg-red-100 text-red-700',
                            idx !== currentIndex && !result && 'bg-muted text-muted-foreground hover:bg-muted/80',
                          )}
                        >
                          {idx + 1}
                        </button>
                      )
                    })}
                  </div>
                  <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-primary" />当前</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-green-400" />正确</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-red-400" />错误</span>
                  </div>
                </CardContent>
              </Card>

              {/* 时间说明 */}
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-sm font-semibold mb-3 flex items-center gap-1.5">
                    <Clock className="w-4 h-4" /> 时间配置
                  </h3>
                  <div className="space-y-2 text-xs">
                    {Object.entries(DIFFICULTY_TIME).map(([diff, sec]) => (
                      <div key={diff} className={cn(
                        'flex items-center justify-between p-2 rounded-lg',
                        diff === currentDiff && 'bg-primary/10'
                      )}>
                        <span className={DIFFICULTY_CONFIG[diff].color}>{DIFFICULTY_CONFIG[diff].label}</span>
                        <span className="font-medium">{sec}秒/题</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* 本题结果（提交后显示） */}
              {showAnswer && !allDone && (
                <Card className="border-2 bg-muted/20">
                  <CardContent className="p-4 space-y-2 text-sm">
                    <h3 className="font-semibold mb-2">本次结果</h3>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2 rounded bg-green-50 text-center">
                        <div className="text-green-600 font-bold">{sessionResults[sessionResults.length - 1]?.isCorrect ? '✓' : '✗'}</div>
                        <div className="text-muted-foreground">正误</div>
                      </div>
                      <div className="p-2 rounded bg-blue-50 text-center">
                        <div className="text-blue-600 font-bold">{sessionResults[sessionResults.length - 1]?.timeSpent}s</div>
                        <div className="text-muted-foreground">用时</div>
                      </div>
                    </div>
                    {sessionResults.length > 0 && (
                      <div className="pt-1 text-center text-xs text-muted-foreground">
                        当前正确率 {sessionAccuracy}%
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>
      )}
    </AppLayout>
  )
}
