import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AppLayout } from '@/components/layout/Navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useUserStore } from '@/stores/userStore'
import { sampleQuestions } from '@/data/physics'
import {
  FlaskConical, ArrowRight, CheckCircle2, XCircle, Clock,
  RefreshCw, Trash2, BookOpen, Lightbulb, BarChart3, Target, Filter
} from 'lucide-react'

// 错题本数据（Mock，实际从 userStore 读取）
const mockWrongQuestions = [
  {
    id: 'PHY-Q000001',
    question: '物体从 A 点（x₁=2m）运动到 B 点（x₂=8m），位移大小为多少？',
    myAnswer: 'A',
    correctAnswer: 'B',
    wrongReason: '混淆位移与路程的概念',
    model: '匀变速直线运动',
    date: '2026-04-18',
    reviewCount: 2,
    isMastered: false,
  },
  {
    id: 'PHY-Q000002',
    question: '汽车以 72km/h 的速度行驶，刹车后以 4m/s² 的加速度减速，求刹车后 5s 内的位移。',
    myAnswer: 'C',
    correctAnswer: 'B',
    wrongReason: '未判断刹车停止时间',
    model: '匀变速直线运动',
    date: '2026-04-17',
    reviewCount: 0,
    isMastered: false,
  },
]

// 学习报告统计（Mock数据）
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
    { day: '周一', rate: 62 },
    { day: '周二', rate: 65 },
    { day: '周三', rate: 68 },
    { day: '周四', rate: 70 },
    { day: '周五', rate: 72 },
    { day: '周六', rate: 72 },
    { day: '周日', rate: 74 },
  ],
}

// ==================== 错题本 ====================
export function WrongQuestionsPage() {
  const [filter, setFilter] = useState<'all' | 'unmastered' | 'mastered'>('all')
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const filtered = mockWrongQuestions.filter((q) => {
    if (filter === 'mastered') return q.isMastered
    if (filter === 'unmastered') return !q.isMastered
    return true
  }).filter((q) => !search || q.question.includes(search) || q.model.includes(search))

  const handleRetry = (id: string) => {
    navigate(`/physics/practice?question=${id}`)
  }

  return (
    <AppLayout showSubjectNav>
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        {/* 头部 */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <FlaskConical className="w-6 h-6 text-red-500" />
              <h1 className="text-2xl font-bold">错题本</h1>
            </div>
            <p className="text-muted-foreground text-sm">
              共 {mockWrongQuestions.length} 道错题，其中 {mockWrongQuestions.filter((q) => q.isMastered).length} 道已掌握
            </p>
          </div>
        </div>

        {/* 学习报告入口 */}
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-100">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <BarChart3 className="w-8 h-8 text-blue-600" />
                <div>
                  <p className="font-semibold text-sm">学习报告</p>
                  <p className="text-xs text-muted-foreground">查看本周学习数据与薄弱点诊断</p>
                </div>
              </div>
              <Link to="/learning">
                <Button size="sm" variant="outline" className="gap-1">
                  <BarChart3 className="w-4 h-4" /> 查看报告
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* 筛选 */}
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex gap-2">
            {([['all', '全部'], ['unmastered', '未掌握'], ['mastered', '已掌握']] as const).map(([val, label]) => (
              <Button
                key={val}
                variant={filter === val ? 'default' : 'outline'}
                size="sm"
                className="text-xs h-8"
                onClick={() => setFilter(val)}
              >
                {label} ({val === 'all' ? mockWrongQuestions.length : val === 'mastered' ? mockWrongQuestions.filter((q) => q.isMastered).length : mockWrongQuestions.filter((q) => !q.isMastered).length})
              </Button>
            ))}
          </div>
        </div>

        {/* 错题列表 */}
        <div className="space-y-3">
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground">
              <CheckCircle2 className="w-10 h-10 mx-auto mb-3 text-green-400 opacity-50" />
              <p className="font-medium">太棒了！没有错题</p>
              <p className="text-sm mt-1">继续加油，保持这个状态</p>
            </div>
          ) : (
            filtered.map((q) => (
              <Card key={q.id} className={q.isMastered ? 'border-green-200 bg-green-50/30' : 'border-red-100'}>
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    {/* 状态图标 */}
                    <div className="flex-shrink-0 mt-0.5">
                      {q.isMastered ? (
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                          <XCircle className="w-5 h-5 text-red-500" />
                        </div>
                      )}
                    </div>

                    {/* 内容 */}
                    <div className="flex-1 min-w-0">
                      {/* 标签 */}
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <Badge variant="outline" className="text-xs">{q.model}</Badge>
                        <Badge variant="outline" className="text-xs">{q.id}</Badge>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" />{q.date}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          已复习 {q.reviewCount} 次
                        </span>
                      </div>

                      {/* 题目 */}
                      <p className="text-sm font-medium mb-3">{q.question}</p>

                      {/* 答题情况 */}
                      <div className="grid grid-cols-2 gap-3 mb-3 text-xs">
                        <div className="p-2 rounded-lg bg-red-50 border border-red-100">
                          <div className="text-muted-foreground mb-0.5">我的答案</div>
                          <div className="font-semibold text-red-600">{q.myAnswer}</div>
                        </div>
                        <div className="p-2 rounded-lg bg-green-50 border border-green-100">
                          <div className="text-muted-foreground mb-0.5">正确答案</div>
                          <div className="font-semibold text-green-600">{q.correctAnswer}</div>
                        </div>
                      </div>

                      {/* 错因 */}
                      <div className="flex items-start gap-2 p-2 rounded-lg bg-orange-50 border border-orange-100 text-xs">
                        <span className="text-orange-500 font-bold mt-0.5">⚠️</span>
                        <span className="text-orange-700">{q.wrongReason}</span>
                      </div>

                      {/* 操作 */}
                      <div className="flex items-center gap-2 mt-3">
                        <Button size="sm" variant="outline" className="gap-1" onClick={() => handleRetry(q.id)}>
                          <RefreshCw className="w-3 h-3" /> 重做
                        </Button>
                        <Button size="sm" variant="outline" className="gap-1">
                          <BookOpen className="w-3 h-3" /> 查看知识点
                        </Button>
                        {q.isMastered ? (
                          <Badge className="bg-green-100 text-green-700 text-xs">✅ 已掌握</Badge>
                        ) : (
                          <Badge className="bg-orange-100 text-orange-700 text-xs">📚 待复习</Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </AppLayout>
  )
}

// ==================== 学习报告 ====================
export function LearningReportPage() {
  const { progress } = useUserStore()
  const report = mockReport
  const maxRate = Math.max(...report.weeklyProgress.map((w) => w.rate))

  return (
    <AppLayout showSubjectNav>
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        {/* 头部 */}
        <div className="flex items-center gap-2 mb-1">
          <BarChart3 className="w-6 h-6 text-primary" />
          <h1 className="text-2xl font-bold">学习报告</h1>
        </div>
        <p className="text-muted-foreground text-sm">数据更新时间：2026-04-20</p>

        {/* 总体概览 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-3xl font-bold text-primary">{report.totalLearned}</p>
              <p className="text-xs text-muted-foreground mt-1">已学知识点</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-3xl font-bold text-blue-600">{report.totalQuestions}</p>
              <p className="text-xs text-muted-foreground mt-1">完成题目</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-3xl font-bold text-green-600">{report.correctRate}%</p>
              <p className="text-xs text-muted-foreground mt-1">总正确率</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-3xl font-bold text-orange-500">{report.weakPoints.reduce((sum, w) => sum + w.count, 0)}</p>
              <p className="text-xs text-muted-foreground mt-1">薄弱知识点</p>
            </CardContent>
          </Card>
        </div>

        {/* 进步趋势图 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <ArrowRight className="w-5 h-5 text-primary" /> 本周进步趋势
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-3 h-32">
              {report.weeklyProgress.map((w, i) => {
                const heightPct = (w.rate / 100) * 100
                return (
                  <div key={w.day} className="flex-1 flex flex-col items-center gap-1">
                    <div className="w-full flex flex-col items-center">
                      <span className="text-xs font-medium text-primary">{w.rate}%</span>
                      <div className="w-full bg-muted rounded-t-sm relative" style={{ height: '80px' }}>
                        <div
                          className="absolute bottom-0 w-full rounded-t-sm bg-gradient-to-t from-blue-500 to-blue-400 transition-all"
                          style={{ height: `${heightPct * 0.8}%` }}
                        />
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
                <XCircle className="w-5 h-5" /> 需要加强
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {report.weakPoints.map((w) => (
                <div key={w.model}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">{w.model}</span>
                    <span className="text-xs text-red-600 font-medium">{w.rate}% 正确率</span>
                  </div>
                  <Progress value={w.rate} className="h-1.5" />
                  <p className="text-xs text-muted-foreground mt-0.5">{w.count} 道错题</p>
                </div>
              ))}
              <Link to="/physics/wrong">
                <Button size="sm" variant="outline" className="w-full mt-2 gap-1">
                  <FlaskConical className="w-4 h-4" /> 去复习错题
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* 强项 */}
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base text-green-700">
                <CheckCircle2 className="w-5 h-5" /> 掌握良好
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {report.strongPoints.map((w) => (
                <div key={w.model}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">{w.model}</span>
                    <span className="text-xs text-green-600 font-medium">{w.rate}% 正确率</span>
                  </div>
                  <Progress value={w.rate} className="h-1.5" />
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

        {/* 提升建议 */}
        <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Lightbulb className="w-5 h-5 text-yellow-600" /> 提升建议
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {[
              '「匀变速直线运动」正确率偏低，建议重点复习速度公式和刹车问题',
              '「动能定理」涉及多个过程，先从单过程题目练起',
              '本周进步趋势良好，坚持每天练习 5 道题',
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
