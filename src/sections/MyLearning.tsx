import { Link } from 'react-router-dom'
import { AppLayout } from '@/components/layout/Navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import {
  BookOpen, FlaskConical, Target, CheckCircle2, XCircle,
  TrendingUp, Clock, Trophy, Star, ArrowRight, Lightbulb,
  Flame, Calendar, BarChart3, RefreshCw
} from 'lucide-react'

// Mock学习数据
const mockReport = {
  totalLearned: 8,
  totalQuestions: 24,
  correctRate: 72,
  weakPoints: [
    { model: '匀变速直线运动', rate: 60, count: 5 },
    { model: '牛顿第二定律', rate: 65, count: 3 },
    { model: '动能定理', rate: 58, count: 4 },
  ],
  strongPoints: [
    { model: '位移与速度', rate: 90, count: 2 },
    { model: '加速度', rate: 85, count: 3 },
  ],
  weeklyProgress: [
    { day: '周一', rate: 62, time: 30 },
    { day: '周二', rate: 65, time: 45 },
    { day: '周三', rate: 68, time: 25 },
    { day: '周四', rate: 70, time: 50 },
    { day: '周五', rate: 72, time: 35 },
    { day: '周六', rate: 72, time: 20 },
    { day: '周日', rate: 74, time: 40 },
  ],
}

const mockWrongQuestions = [
  {
    id: 'PHY-Q001',
    question: '物体从 A 点（x₁=2m）运动到 B 点（x₂=8m），位移大小为多少？',
    myAnswer: 'A', correctAnswer: 'B',
    reason: '混淆位移与路程的概念',
    model: '匀变速直线运动', reviewCount: 2,
  },
  {
    id: 'PHY-Q002',
    question: '汽车以 72km/h 的速度行驶，刹车后以 4m/s² 的加速度减速，求刹车后 5s 内的位移。',
    myAnswer: 'C', correctAnswer: 'B',
    reason: '未判断刹车停止时间',
    model: '匀变速直线运动', reviewCount: 0,
  },
]

const DIFFICULTY_PROGRESS: Record<string, { correct: number; total: number; label: string; color: string }> = {
  B: { correct: 14, total: 18, label: 'B层 · 基础', color: '#16a34a' },
  J: { correct: 8, total: 11, label: 'J层 · 进阶', color: '#ca8a04' },
  T: { correct: 2, total: 5, label: 'T层 · 挑战', color: '#dc2626' },
}

export function MyLearning() {
  const maxRate = Math.max(...mockReport.weeklyProgress.map((w) => w.rate))

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
            <p className="text-muted-foreground text-sm">数据更新时间：2026-04-20</p>
          </div>
          <Badge variant="outline" className="flex items-center gap-1 text-xs">
            <Flame className="w-3.5 h-3.5 text-orange-500" />
            已连续学习 5 天
          </Badge>
        </div>

        {/* 总体概览卡片 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { icon: BookOpen, label: '已学知识点', value: mockReport.totalLearned, unit: '个', color: 'text-primary', bg: 'bg-primary/10' },
            { icon: Target, label: '完成题目', value: mockReport.totalQuestions, unit: '题', color: 'text-blue-600', bg: 'bg-blue-50' },
            { icon: CheckCircle2, label: '总正确率', value: mockReport.correctRate, unit: '%', color: 'text-green-600', bg: 'bg-green-50' },
            { icon: XCircle, label: '待复习', value: mockWrongQuestions.length, unit: '题', color: 'text-red-500', bg: 'bg-red-50' },
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
                {mockReport.weeklyProgress.map((w) => {
                  const heightPct = (w.rate / 100) * 96
                  return (
                    <div key={w.day} className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full flex flex-col items-center" style={{ height: '88px' }}>
                        <span className="text-xs font-medium text-primary">{w.rate}%</span>
                        <div className="w-full bg-muted rounded-t-sm relative" style={{ minHeight: '4px' }}>
                          <div
                            className="absolute bottom-0 w-full rounded-t-sm bg-gradient-to-t from-blue-500 to-blue-400"
                            style={{ height: `${heightPct}%` }}
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
              {mockReport.weeklyProgress.map((w) => {
                const heightPct = (w.time / 60) * 64
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
              {mockReport.weakPoints.map((w) => (
                <div key={w.model}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">{w.model}</span>
                    <span className="text-xs text-red-600 font-medium">{w.rate}% 正确</span>
                  </div>
                  <Progress value={w.rate} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-0.5">{w.count} 道错题 · <Link to="/physics/wrong" className="underline hover:text-primary">去复习</Link></p>
                </div>
              ))}
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
              {mockReport.strongPoints.map((w) => (
                <div key={w.model}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">{w.model}</span>
                    <span className="text-xs text-green-600 font-medium">{w.rate}% 正确</span>
                  </div>
                  <Progress value={w.rate} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-0.5">{w.count} 道题</p>
                </div>
              ))}
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
              待复习错题 ({mockWrongQuestions.length})
            </h2>
            <Link to="/physics/wrong">
              <Button variant="ghost" size="sm" className="gap-1 text-xs">
                查看全部 <ArrowRight className="w-3 h-3" />
              </Button>
            </Link>
          </div>
          <div className="space-y-2">
            {mockWrongQuestions.slice(0, 3).map((q) => (
              <Card key={q.id} className="border-red-100">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                      <XCircle className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className="text-xs">{q.model}</Badge>
                        <span className="text-xs text-muted-foreground">复习 {q.reviewCount} 次</span>
                      </div>
                      <p className="text-sm line-clamp-2 mb-1">{q.question.replace(/\$\\$/g, '').replace(/\\/g, '').slice(0, 60)}...</p>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-red-50 text-red-600 border-red-200 text-xs">
                          我的：{q.myAnswer}
                        </Badge>
                        <Badge className="bg-green-50 text-green-600 border-green-200 text-xs">
                          正确：{q.correctAnswer}
                        </Badge>
                      </div>
                    </div>
                    <Link to={`/physics/practice?question=${q.id}`}>
                      <Button size="sm" variant="outline" className="gap-1 text-xs flex-shrink-0">
                        <RefreshCw className="w-3 h-3" /> 重做
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
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
              '「匀变速直线运动」正确率偏低，建议重点复习速度公式和刹车问题',
              '「动能定理」涉及多个过程，先从单过程题目练起',
              '本周学习状态良好，建议每天坚持练习 5 道题',
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
