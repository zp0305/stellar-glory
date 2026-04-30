import { Link } from 'react-router-dom'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  FlaskConical, Atom, Dna, Calculator, BookOpen, Languages,
  ArrowRight, Star, Target, Book, GitBranch, Trophy,
  TrendingUp, CheckCircle2, GraduationCap, Zap, Lightbulb, Activity, FileText
} from 'lucide-react'
import { SUBJECTS } from '@/data/subjects'
import { getSubjectData } from '@/data/registry'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  physics: FlaskConical,
  chemistry: Atom,
  biology: Dna,
  math: Calculator,
  chinese: BookOpen,
  english: Languages,
}

export function SiteHome() {
  return (
    <div className="min-h-screen bg-background">
      {/* 顶部导航 */}
      <TopNavLite />

      <div className="max-w-5xl mx-auto px-4 py-8 space-y-10">

        {/* Hero区 */}
        <section className="text-center space-y-4 py-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
              <Star className="w-7 h-7 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight">
            欢迎来到<span className="text-primary">星耀</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            高中六科认知图谱 + 分析范式，让学习有结构、有方法
          </p>
          <div className="flex items-center justify-center gap-3 pt-2">
            <Link to="/physics">
              <Button size="lg" className="gap-2">开始学习</Button>
            </Link>
            <Link to="/physics/graph">
              <Button size="lg" variant="outline" className="gap-2">
                <GitBranch className="w-4 h-4" />查看认知图谱
              </Button>
            </Link>
          </div>
        </section>

        {/* 六学科入口（提升为第一优先） */}
        <section>
          <h2 className="text-lg font-semibold mb-4">选择学科开始学习</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SUBJECTS.map((subject) => {
              const Icon = iconMap[subject.id] || Book
              const subjectData = getSubjectData(subject.id)
              
              const conceptCount = subjectData?.getAllConceptIds().length || 0
              const modelCount = subjectData?.getAllModelIds().length || 0
              const paradigmCount = subjectData?.getParadigmList().length || 0
              const questionCount = subjectData?.getAllQuestions().length || 0

              return (
                <Link key={subject.id} to={subject.available ? `/${subject.id}` : '#'} className={!subject.available ? 'pointer-events-none' : ''}>
                  <Card
                    className={`h-full hover:shadow-md transition-all group ${!subject.available && 'opacity-60'}`}
                    style={{ borderColor: subject.available ? subject.color + '44' : undefined }}
                  >
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: subject.color + '18' }}
                        >
                          <Icon className="w-6 h-6" style={{ color: subject.color }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-bold text-base">{subject.name}</h3>
                            {!subject.available && (
                              <Badge variant="outline" className="text-xs">即将上线</Badge>
                            )}
                          </div>
                          {subject.available && (
                            <div className="space-y-2">
                              <p className="text-xs text-muted-foreground leading-relaxed">
                                {conceptCount}个知识节点 · {modelCount}个模型详解
                                {paradigmCount > 0 && ` · ${paradigmCount}条分析范式`}
                              </p>
                              {questionCount > 0 && (
                                <span className="inline-block text-xs px-2 py-0.5 rounded-full bg-green-50 text-green-600 border border-green-200">
                                  🗓 {questionCount}道配套题目
                                </span>
                              )}
                            </div>
                          )}
                          {!subject.available && (
                            <p className="text-xs text-muted-foreground">即将上线，敬请期待</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </section>

        {/* 学习工具区 */}
        <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          <Link to="/physics/graph">
            <Card className="hover:shadow-sm transition-all h-full">
              <CardContent className="p-4 text-center space-y-2">
                <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center mx-auto">
                  <GitBranch className="w-5 h-5 text-purple-500" />
                </div>
                <h3 className="font-semibold text-sm">认知图谱</h3>
                <p className="text-xs text-muted-foreground">可视化知识网络</p>
              </CardContent>
            </Card>
          </Link>
          <Link to="/diagnosis">
            <Card className="hover:shadow-sm transition-all h-full">
              <CardContent className="p-4 text-center space-y-2">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mx-auto">
                  <Activity className="w-5 h-5 text-blue-500" />
                </div>
                <h3 className="font-semibold text-sm">智能诊断</h3>
                <p className="text-xs text-muted-foreground">学习情况分析</p>
              </CardContent>
            </Card>
          </Link>
          <Link to="/planner">
            <Card className="hover:shadow-sm transition-all h-full">
              <CardContent className="p-4 text-center space-y-2">
                <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center mx-auto">
                  <Target className="w-5 h-5 text-green-500" />
                </div>
                <h3 className="font-semibold text-sm">学习规划</h3>
                <p className="text-xs text-muted-foreground">个性化路径</p>
              </CardContent>
            </Card>
          </Link>
          <Link to="/competition">
            <Card className="hover:shadow-sm transition-all h-full">
              <CardContent className="p-4 text-center space-y-2">
                <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center mx-auto">
                  <Trophy className="w-5 h-5 text-amber-500" />
                </div>
                <h3 className="font-semibold text-sm">学科竞赛</h3>
                <p className="text-xs text-muted-foreground">五大学科竞赛</p>
              </CardContent>
            </Card>
          </Link>
          <Link to="/transition">
            <Card className="hover:shadow-sm transition-all h-full">
              <CardContent className="p-4 text-center space-y-2">
                <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center mx-auto">
                  <TrendingUp className="w-5 h-5 text-orange-500" />
                </div>
                <h3 className="font-semibold text-sm">衔接规划</h3>
                <p className="text-xs text-muted-foreground">初高中衔接</p>
              </CardContent>
            </Card>
          </Link>
          <Link to="/physics/wrong">
            <Card className="hover:shadow-sm transition-all h-full">
              <CardContent className="p-4 text-center space-y-2">
                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mx-auto">
                  <FileText className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="font-semibold text-sm">错题本</h3>
                <p className="text-xs text-muted-foreground">错题回顾复习</p>
              </CardContent>
            </Card>
          </Link>
        </section>

        {/* 升学专项（降级到底部） */}
        <section>
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-primary" />
            升学专项
            <Badge variant="outline" className="text-xs">即将上线</Badge>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* 高考专区 */}
            <Link to="/gaokao" className="opacity-60">
              <Card className="h-full bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200 opacity-60">
                <CardContent className="p-5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-base text-orange-900">高考专区</h3>
                      <Badge variant="outline" className="text-xs">即将上线</Badge>
                    </div>
                    <p className="text-xs text-orange-600 mt-0.5">政策解读 / 命题趋势 / 备考路径</p>
                    <p className="text-xs text-orange-400 mt-1">新高考各科备考全覆盖</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-orange-300 flex-shrink-0" />
                </CardContent>
              </Card>
            </Link>
            {/* 强基专区 */}
            <Link to="/foundation" className="opacity-60">
              <Card className="h-full bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200 opacity-60">
                <CardContent className="p-5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-base text-purple-900">强基计划</h3>
                      <Badge variant="outline" className="text-xs">即将上线</Badge>
                    </div>
                    <p className="text-xs text-purple-600 mt-0.5">政策指南 / 超纲知识 / 校测准备</p>
                    <p className="text-xs text-purple-400 mt-1">面向985强基，冲击校测</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-purple-300 flex-shrink-0" />
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>

      </div>
    </div>
  )
}

// 顶部极简导航
function TopNavLite() {
  return (
    <div className="sticky top-0 z-10 bg-background/95 backdrop-blur border-b">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-14">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <Star className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-foreground">星耀</span>
        </div>
        <div className="flex items-center gap-1 text-sm">
          {SUBJECTS.map((subject) => (
            <Link
              key={subject.id}
              to={subject.available ? `/${subject.id}` : '#'}
              className={`px-2 py-1 hover:text-foreground transition-colors rounded ${
                subject.id === 'physics' ? 'text-foreground font-medium bg-primary/10' : 'text-muted-foreground'
              }`}
            >
              {subject.name}
            </Link>
          ))}
          <span className="text-muted-foreground mx-2">|</span>
          <Link to="/gaokao" className="px-2 py-1 hover:text-foreground transition-colors rounded text-muted-foreground">高考</Link>
          <Link to="/foundation" className="px-2 py-1 hover:text-foreground transition-colors rounded text-muted-foreground">强基</Link>
          <Link to="/competition" className="px-2 py-1 hover:text-foreground transition-colors rounded text-muted-foreground">竞赛</Link>
          <Link to="/transition" className="px-2 py-1 hover:text-foreground transition-colors rounded text-muted-foreground">衔接</Link>
          <Link to="/diagnosis" className="px-2 py-1 hover:text-foreground transition-colors rounded text-muted-foreground">工具</Link>
        </div>
      </div>
    </div>
  )
}