import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { AppLayout } from '@/components/layout/Navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useUserStore } from '@/stores/userStore'
import {
  FlaskConical, ArrowRight, CheckCircle2, XCircle, Clock,
  RefreshCw, Trash2, BookOpen, Lightbulb, BarChart3, Target
} from 'lucide-react'
import type { WrongQuestionRecord, LearningStats } from '@/types'

// ==================== 错题本 ====================
export function WrongQuestionsPage() {
  const { subject } = useParams<{ subject: string }>()
  const subjectCode = (subject?.toUpperCase() || 'PHY') as 'PHY' | 'CHE' | 'MAT' | 'BIO' | 'CHN' | 'ENG'

  const [filter, setFilter] = useState<'all' | 'unmastered' | 'mastered'>('all')
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const wrongQuestions = useUserStore(state => state.getWrongQuestionsBySubject(subjectCode))

  const filtered = wrongQuestions.filter((q: WrongQuestionRecord) => {
    if (filter === 'mastered') return q.isMastered
    if (filter === 'unmastered') return !q.isMastered
    return true
  }).filter((q: WrongQuestionRecord) => {
    if (!search) return true
    const searchLower = search.toLowerCase()
    return q.questionContent.toLowerCase().includes(searchLower) ||
           q.modelId?.toLowerCase().includes(searchLower) ||
           q.questionId.toLowerCase().includes(searchLower)
  })

  const handleRetry = (questionId: string) => {
    navigate(`/${subject}/exercises/${wrongQuestions.find(q => q.questionId === questionId)?.modelId}?q=${questionId}`)
  }

  const handleRemove = (id: string) => {
    useUserStore.getState().removeWrongQuestion(subjectCode, id)
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
              共 {wrongQuestions.length} 道错题，其中 {wrongQuestions.filter((q: WrongQuestionRecord) => q.isMastered).length} 道已掌握
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
                  <p className="text-xs text-muted-foreground">查看学习数据与薄弱点诊断</p>
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

        {/* 搜索 */}
        <div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="搜索错题..."
            className="w-full px-4 py-2 rounded-lg border border-border bg-card text-sm focus:outline-none focus:border-primary"
          />
        </div>

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
                {label} (
                  {val === 'all'
                    ? wrongQuestions.length
                    : val === 'mastered'
                      ? wrongQuestions.filter((q: WrongQuestionRecord) => q.isMastered).length
                      : wrongQuestions.filter((q: WrongQuestionRecord) => !q.isMastered).length
                  }
                )
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
            filtered.map((q: WrongQuestionRecord) => (
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
                        {q.modelId && <Badge variant="outline" className="text-xs">{q.modelId}</Badge>}
                        <Badge variant="outline" className="text-xs">{q.questionId}</Badge>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" />{new Date(q.createdAt).toLocaleDateString()}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          已复习 {q.reviewCount} 次
                        </span>
                      </div>

                      {/* 题目 */}
                      <p className="text-sm font-medium mb-3 line-clamp-2">{q.questionContent}</p>

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
                      {q.wrongReason && (
                        <div className="flex items-start gap-2 p-2 rounded-lg bg-orange-50 border border-orange-100 text-xs">
                          <span className="text-orange-500 font-bold mt-0.5">⚠️</span>
                          <span className="text-orange-700">{q.wrongReason}</span>
                        </div>
                      )}

                      {/* 操作 */}
                      <div className="flex items-center gap-2 mt-3">
                        <Button size="sm" variant="outline" className="gap-1" onClick={() => handleRetry(q.questionId)}>
                          <RefreshCw className="w-3 h-3" /> 重做
                        </Button>
                        <Button size="sm" variant="outline" className="gap-1">
                          <BookOpen className="w-3 h-3" /> 查看知识点
                        </Button>
                        <Button size="sm" variant="ghost" className="gap-1 text-red-500" onClick={() => handleRemove(q.id)}>
                          <Trash2 className="w-3 h-3" /> 删除
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