import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { AppLayout } from '@/components/layout/Navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { useUserStore } from '@/stores/userStore'
import {
  BookOpen, FlaskConical, Target, CheckCircle2, XCircle,
  TrendingUp, Clock, BarChart3, RefreshCw, Lightbulb, Flame
} from 'lucide-react'

export function MyLearning() {
  const subjectCode = 'PHY' as const

  const stats = useUserStore(state => state.getLearningStats(subjectCode))
  const wrongQuestions = useUserStore(state => state.getWrongQuestionsBySubject(subjectCode))
  const questionAttempts = useUserStore(state => state.questionAttempts)

  const weeklyProgress = useMemo(() => {
    const now = new Date()
    const days = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
    const result: { day: string; rate: number; time: number }[] = []

    for (let i = 6; i >= 0; i--) {
      const date = new Date(now)
      date.setDate(date.getDate() - i)
      const dateStr = date.toISOString().split('T')[0]

      const dayAttempts = questionAttempts.filter(a => {
        const attemptDate = new Date(a.answeredAt).toISOString().split('T')[0]
        return attemptDate === dateStr && a.subject === subjectCode
      })

      const total = dayAttempts.length
      const correct = dayAttempts.filter(a => a.isCorrect).length
      const rate = total > 0 ? Math.round((correct / total) * 100) : 0
      const time = dayAttempts.reduce((sum, a) => sum + (a.timeSpent || 0), 0)

      result.push({
        day: days[date.getDay()],
        rate,
        time: Math.round(time / 60),
      })
    }

    return result
  }, [questionAttempts, subjectCode])

  const weakPoints = useMemo(() => {
    if (!stats?.modelStats) return []
    return Object.entries(stats.modelStats)
      .map(([modelId, data]) => ({
        model: modelId,
        rate: data.attempts > 0 ? Math.round((data.correct / data.attempts) * 100) : 0,
        count: data.attempts,
      }))
      .filter(m => m.count > 0)
      .sort((a, b) => a.rate - b.rate)
      .slice(0, 3)
  }, [stats])

  const strongPoints = useMemo(() => {
    if (!stats?.modelStats) return []
    return Object.entries(stats.modelStats)
      .map(([modelId, data]) => ({
        model: modelId,
        rate: data.attempts > 0 ? Math.round((data.correct / data.attempts) * 100) : 0,
        count: data.attempts,
      }))
      .filter(m => m.count > 0)
      .sort((a, b) => b.rate - a.rate)
      .slice(0, 2)
  }, [stats])

  const totalAttempts = stats?.totalAttempts || 0
  const correctRate = totalAttempts > 0 ? Math.round(((stats?.correctCount || 0) / totalAttempts) * 100) : 0
  const unmasteredCount = wrongQuestions.filter(q => !q.isMastered).length

  const maxRate = Math.max(...weeklyProgress.map(w => w.rate), 1)

  return (
    <AppLayout showSubjectNav>
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* 页面头部 */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <BarChart3 className="w-6 h-6 text-primary" />
              <h1 className="text-2xl font-bold">我的学习</h1>
            </div>
            <p className="text-muted-foreground text-sm">数据更新时间：{new Date().toLocaleDateString()}</p>
          </div>
          <Badge variant="outline" className="flex items-center gap-1 text-xs">
            <Flame className="w-3.5 h-3.5 text-orange-500" />
            已连续学习 5 天
          </Badge>
        </div>

        {/* 总体概览卡片 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { icon: BookOpen, label: '已学知识点', value: stats?.totalAttempts || 0, unit: '个', color: 'text-primary', bg: 'bg-primary/10' },
            { icon: Target, label: '完成题目', value: totalAttempts, unit: '题', color: 'text-blue-600', bg: 'bg-blue-50' },
            { icon: CheckCircle2, label: '总正确率', value: correctRate, unit: '%', color: 'text-green-600', bg: 'bg-green-50' },
            { icon: XCircle, label: '待复习', value: unmasteredCount, unit: '题', color: 'text-red-500', bg: 'bg-red-50' },
          ].map((item) => (
            <Card key={item.label}>
              <CardContent className="p-4 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.bg}`}>
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <div>
                  <p className="text-2xl font-bold">{item.value}<span className="text-sm font-normal text-muted-foreground">{item.unit}</span></p>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 进步趋势图 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <TrendingUp className="w-5 h-5 text-primary" />本周学习趋势
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* 正确率 */}
            <div className="mb-5">
              <div className="flex items-end gap-2 h-24">
                {weeklyProgress.map((w) => {
                  const heightPct = maxRate > 0 ? (w.rate / maxRate) * 88 : 0
                  return (
                    <div key={w.day} className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full flex flex-col items-center" style={{ height: '88px' }}>
                        <span className="text-xs font-medium text-primary">{w.rate}%</span>
                        <div className="w-full bg-muted rounded-t-sm relative" style={{ minHeight: '4px' }}>
                          <div
                            className="absolute bottom-0 w-full rounded-t-sm bg-gradient-to-t from-blue-500 to-blue-400"
                            style={{ height: `${heightPct}px` }}
                          />
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground">{w.day}</span>
                    </div>
                  )
                })}
              </div>
            </div>
            {/* 学习时长 */}
            <div className="flex items-end gap-2 h-16">
              {weeklyProgress.map((w) => {
                const heightPct = Math.min((w.time / 60) * 56, 56)
                return (
                  <div key={w.day} className="flex-1 flex flex-col items-center gap-1">
                    <div className="w-full flex flex-col items-center" style={{ height: '56px' }}>
                      <span className="text-xs text-muted-foreground">{w.time}m</span>
                      <div className="w-full bg-orange-100 rounded-t-sm relative" style={{ minHeight: '4px', height: `${heightPct}px` }}>
                        <div className="absolute bottom-0 w-full rounded-t-sm bg-orange-400" style={{ height: '100%' }} />
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">{w.day}</span>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* 薄弱点 vs 强项 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* 薄弱点 */}
          <Card className="border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base text-red-700">
                <XCircle className="w-5 h-5" />需要加强
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {weakPoints.length > 0 ? weakPoints.map((w) => (
                <div key={w.model}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">{w.model}</span>
                    <span className="text-xs text-red-600 font-medium">{w.rate}% 正确</span>
                  </div>
                  <Progress value={w.rate} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-0.5">{w.count} 道错题 · <Link to="/physics/wrong" className="underline hover:text-primary">去复习</Link></p>
                </div>
              )) : (
                <p className="text-sm text-muted-foreground">暂无数据</p>
              )}
            </CardContent>
          </Card>

          {/* 强项 */}
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base text-green-700">
                <CheckCircle2 className="w-5 h-5" />掌握良好
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {strongPoints.length > 0 ? strongPoints.map((w) => (
                <div key={w.model}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">{w.model}</span>
                    <span className="text-xs text-green-600 font-medium">{w.rate}% 正确</span>
                  </div>
                  <Progress value={w.rate} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-0.5">{w.count} 道题</p>
                </div>
              )) : (
                <p className="text-sm text-muted-foreground">暂无数据</p>
              )}
              <Link to="/physics/practice">
                <Button size="sm" variant="outline" className="w-full mt-2 gap-1">
                  <Target className="w-4 h-4" /> 继续挑战
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* 待复习错题 */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-base flex items-center gap-2">
              <FlaskConical className="w-5 h-5 text-red-500" />
              待复习错题 ({wrongQuestions.filter(q => !q.isMastered).length})
            </h2>
            <Link to="/physics/wrong">
              <Button variant="ghost" size="sm" className="gap-1 text-xs">
                查看全部 <TrendingUp className="w-3 h-3" />
              </Button>
            </Link>
          </div>
          <div className="space-y-2">
            {wrongQuestions.filter(q => !q.isMastered).slice(0, 3).map((q) => (
              <Card key={q.id} className="border-red-100">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                      <XCircle className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        {q.modelId && <Badge variant="outline" className="text-xs">{q.modelId}</Badge>}
                        <span className="text-xs text-muted-foreground">复习 {q.reviewCount} 次</span>
                      </div>
                      <p className="text-sm line-clamp-2 mb-1">{q.questionContent.slice(0, 60)}...</p>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-red-50 text-red-600 border-red-200 text-xs">
                          我的：{q.myAnswer}
                        </Badge>
                        <Badge className="bg-green-50 text-green-600 border-green-200 text-xs">
                          正确：{q.correctAnswer}
                        </Badge>
                      </div>
                    </div>
                    <Link to={`/physics/exercises/${q.modelId}?q=${q.questionId}`}>
                      <Button size="sm" variant="outline" className="gap-1 text-xs flex-shrink-0">
                        <RefreshCw className="w-3 h-3" /> 重做
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
            {wrongQuestions.filter(q => !q.isMastered).length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                <CheckCircle2 className="w-8 h-8 mx-auto mb-2 text-green-400" />
                <p className="text-sm">太棒了！没有待复习的错题</p>
              </div>
            )}
          </div>
        </div>

        {/* 提升建议 */}
        <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
          <CardContent className="p-5 space-y-3">
            <div className="flex items-center gap-2 mb-1">
              <Lightbulb className="w-5 h-5 text-yellow-600" />
              <h3 className="font-semibold text-sm">提升建议</h3>
            </div>
            {[
              weakPoints.length > 0 ? `「${weakPoints[0].model}」正确率偏低，建议重点复习相关知识点` : '继续加油，保持每天练习的好习惯',
              strongPoints.length > 0 ? `「${strongPoints[0].model}」掌握良好，可以挑战更高难度` : '多做题目，积累经验',
              '坚持每天练习，逐步提升正确率',
            ].map((tip, i) => (
              <div key={i} className="flex items-start gap-2 text-sm">
                <span className="text-yellow-500 font-bold mt-0.5">💡</span>
                <span className="text-yellow-800">{tip}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  )
}