import { Link } from 'react-router-dom'
import { AppLayout } from '@/components/layout/Navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import {
  FlaskConical, Atom, Dna, Calculator, BookText, Languages,
  ArrowRight, Star, Target, BookOpen, GitBranch, Trophy,
  TrendingUp, Clock, CheckCircle2, Flame, GraduationCap, Zap, Lightbulb
} from 'lucide-react'
import { modelQuestionStats } from '@/data/physics/questions'

// 物理题库统计：已上线题量
const physicsQuestions = Object.values(modelQuestionStats)
const totalQuestions = physicsQuestions.reduce((acc, s) => acc + s.total, 0)
const totalModels = physicsQuestions.length

const subjects = [
  {
    id: 'physics',
    name: '物理',
    description: '26个核心模型，从运动到电磁，构建完整认知体系',
    icon: FlaskConical,
    color: '#3b82f6',
    bg: 'bg-blue-500/10',
    border: 'border-blue-200',
    available: true,
    moduleCount: 26,
    questionCount: totalQuestions,
    questionModels: totalModels,
    progress: 12,
  },
  {
    id: 'chemistry',
    name: '化学',
    description: '元素周期、化学反应、有机化学，探索物质变化的奥秘',
    icon: Atom,
    color: '#10b981',
    bg: 'bg-green-500/10',
    border: 'border-green-200',
    available: false,
    moduleCount: 0,
    progress: 0,
  },
  {
    id: 'math',
    name: '数学',
    description: '函数、几何、概率，从具象到抽象的思维训练',
    icon: BookText,
    color: '#8b5cf6',
    bg: 'bg-purple-500/10',
    border: 'border-purple-200',
    available: false,
    moduleCount: 0,
    progress: 0,
  },
  {
    id: 'biology',
    name: '生物',
    description: '细胞、遗传、生态，理解生命的本质与演化',
    icon: Dna,
    color: '#f59e0b',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-200',
    available: false,
    moduleCount: 0,
    progress: 0,
  },
  {
    id: 'chinese',
    name: '语文',
    description: '阅读写作、古诗文、语言运用，文化传承与表达能力',
    icon: BookText,
    color: '#ef4444',
    bg: 'bg-red-500/10',
    border: 'border-red-200',
    available: false,
    moduleCount: 0,
    progress: 0,
  },
  {
    id: 'english',
    name: '英语',
    description: '词汇语法、阅读理解、写作表达，走向世界的桥梁',
    icon: Languages,
    color: '#06b6d4',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-200',
    available: false,
    moduleCount: 0,
    progress: 0,
  },
]

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
            高中六科认知图谱 + 解题套路，让学习有结构、有方法
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

        {/* 高考与强基专区入口 - 横向卡片 */}
        <section>
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-primary" />
            升学专项
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* 高考专区 */}
            <Link to="/gaokao">
              <Card className="hover:shadow-md hover:border-primary/30 transition-all h-full bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200">
                <CardContent className="p-5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-base text-orange-900">高考专区</h3>
                    <p className="text-xs text-orange-600 mt-0.5">政策解读 / 命题趋势 / 备考路径</p>
                    <p className="text-xs text-orange-400 mt-1">新高考各科备考全覆盖</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-orange-300 flex-shrink-0" />
                </CardContent>
              </Card>
            </Link>
            {/* 强基专区 */}
            <Link to="/foundation">
              <Card className="hover:shadow-md hover:border-primary/30 transition-all h-full bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200">
                <CardContent className="p-5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-base text-purple-900">强基计划</h3>
                    <p className="text-xs text-purple-600 mt-0.5">政策指南 / 超纲知识 / 校测准备</p>
                    <p className="text-xs text-purple-400 mt-1">面向985强基，冲击校测</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-purple-300 flex-shrink-0" />
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>

        {/* 六学科入口 */}
        <section>
          <h2 className="text-lg font-semibold mb-4">选择学科开始学习</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {subjects.map((s) => {
              const Icon = s.icon
              return (
                <Link key={s.id} to={s.available ? `/${s.id}` : '#'} className={!s.available ? 'pointer-events-none' : ''}>
                  <Card
                    className={`h-full hover:shadow-md transition-all group ${!s.available && 'opacity-60'}`}
                    style={{ borderColor: s.available ? s.color + '44' : undefined }}
                  >
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: s.color + '18' }}
                        >
                          <Icon className="w-6 h-6" style={{ color: s.color }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-bold text-base">{s.name}</h3>
                            {!s.available && (
                              <Badge variant="outline" className="text-xs">即将上线</Badge>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {s.available ? s.description : '即将上线，敬请期待'}
                          </p>
                          {s.available && (
                            <div className="mt-2">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-xs text-muted-foreground">已学 {s.progress} / {s.moduleCount}</span>
                                <span className="text-xs text-muted-foreground">{Math.round((s.progress / s.moduleCount) * 100)}%</span>
                                {s.questionCount ? (
                                  <span className="text-xs px-2 py-0.5 rounded-full bg-green-50 text-green-600 border border-green-200 font-medium ml-1">
                                    🗓 {s.questionCount}题
                                  </span>
                                ) : null}
                              </div>
                              <Progress value={(s.progress / s.moduleCount) * 100} className="h-1.5" />
                            </div>
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

        {/* 特色模块 */}
        <section className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <Link to="/physics/models">
            <Card className="hover:shadow-sm transition-all h-full">
              <CardContent className="p-4 text-center space-y-2">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mx-auto">
                  <Target className="w-5 h-5 text-blue-500" />
                </div>
                <h3 className="font-semibold text-sm">核心模型</h3>
                <p className="text-xs text-muted-foreground">26个解题模型，物理思维底层能力</p>
              </CardContent>
            </Card>
          </Link>
          <Link to="/physics/strategies">
            <Card className="hover:shadow-sm transition-all h-full">
              <CardContent className="p-4 text-center space-y-2">
                <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center mx-auto">
                  <Lightbulb className="w-5 h-5 text-green-500" />
                </div>
                <h3 className="font-semibold text-sm">分析范式</h3>
                <p className="text-xs text-muted-foreground">86个核心范式，覆盖所有题型</p>
              </CardContent>
            </Card>
          </Link>
          <Link to="/physics/exercises">
            <Card className="hover:shadow-sm transition-all h-full">
              <CardContent className="p-4 text-center space-y-2">
                <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-5 h-5 text-amber-500" />
                </div>
                <h3 className="font-semibold text-sm">配套题库</h3>
                <p className="text-xs text-muted-foreground">模型配套练习，即学即练</p>
              </CardContent>
            </Card>
          </Link>
          <Link to="/physics/graph">
            <Card className="hover:shadow-sm transition-all h-full">
              <CardContent className="p-4 text-center space-y-2">
                <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center mx-auto">
                  <GitBranch className="w-5 h-5 text-purple-500" />
                </div>
                <h3 className="font-semibold text-sm">认知图谱</h3>
                <p className="text-xs text-muted-foreground">可视化知识网络，构建体系思维</p>
              </CardContent>
            </Card>
          </Link>
          <Link to="/competition">
            <Card className="hover:shadow-sm transition-all h-full border-amber-200 bg-amber-50/30 hover:border-amber-300">
              <CardContent className="p-4 text-center space-y-2">
                <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center mx-auto">
                  <Trophy className="w-5 h-5 text-amber-500" />
                </div>
                <h3 className="font-semibold text-sm">学科竞赛</h3>
                <p className="text-xs text-muted-foreground">五大学科竞赛，冲击国集</p>
              </CardContent>
            </Card>
          </Link>
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
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link to="/gaokao" className="hover:text-foreground transition-colors">高考专区</Link>
          <Link to="/foundation" className="hover:text-foreground transition-colors">强基计划</Link>
          <Link to="/physics" className="hover:text-foreground transition-colors text-foreground font-medium">物理</Link>
        </div>
      </div>
    </div>
  )
}
