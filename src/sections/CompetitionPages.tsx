import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AppLayout } from '@/components/layout/Navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  FIVE_SUBJECT_COMPETITIONS,
  PHYSICS_COMPETITION_MODULES,
  PHYSICS_OUTLINE_BLOCKS,
  PHYSICS_KNOWLEDGE_ENTRIES,
  PHYSICS_COMPETITION_MODELS,
  PHYSICS_COMPETITION_GUIDE,
  PHYSICS_COMPETITION_EXPERIMENTS,
  PHYSICS_COMPETITION_PATH,
} from '@/data/competition'
import {
  Trophy, BookOpen, Lightbulb, FileText, FlaskConical, Route,
  Search, ChevronRight, Star, ArrowRight, Zap, Shield,
  Calculator, Atom, Dna, Binary, Info, Clock, AlertTriangle,
  CheckCircle, ArrowUpRight,
} from 'lucide-react'

// ── 五科竞赛图标映射 ───────────────────────────────
const SUBJECT_ICONS: Record<string, React.ElementType> = {
  physics: Atom,
  math: Calculator,
  chemistry: Zap,
  biology: Dna,
  cs: Binary,
}

// ── 竞赛首页 ─────────────────────────────────────────
function CompetitionHomePage_() {
  const [search, setSearch] = useState('')

  const filtered = FIVE_SUBJECT_COMPETITIONS.filter(
    (c) => c.name.includes(search) || c.code.includes(search)
  )

  return (
    <AppLayout showSubjectNav>
      <div className="max-w-5xl mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">五大学科竞赛</h1>
              <p className="text-sm text-muted-foreground">预赛 → 复赛 → 决赛，覆盖全流程</p>
            </div>
          </div>
        </div>

        {/* 竞赛选择指南入口 */}
        <Card className="border-amber-200 bg-amber-50/50">
          <CardContent className="p-5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                <Info className="w-5 h-5 text-amber-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">竞赛选择指南</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  不知道选哪科？先看 GS01-GS06：兴趣筛选 → 能力匹配 → 投入产出评估 → 学校资源
                </p>
                <div className="flex flex-wrap gap-2">
                  {['GS01 五科竞赛全景介绍', 'GS02 如何选择竞赛科目', 'GS03 能否同时学多科竞赛',
                    'GS04 竞赛与高考的平衡', 'GS05 竞赛学习资源总览', 'GS06 各省竞赛水平与名额'].map((item) => (
                    <Badge key={item} variant="outline" className="text-xs">{item}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 五科卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((comp) => {
            const Icon = SUBJECT_ICONS[comp.id] || Star
            const statusColor = comp.contentStatus === 'partial' ? 'text-blue-600' : 'text-muted-foreground'
            const statusText = comp.contentStatus === 'partial' ? '框架已搭' : '筹备中'

            return (
              <Card key={comp.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: comp.color + '20' }}
                      >
                        <Icon className="w-4 h-4" style={{ color: comp.color }} />
                      </div>
                      <div>
                        <CardTitle className="text-base">{comp.name}</CardTitle>
                        <p className="text-xs text-muted-foreground">{comp.code}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className={`text-xs ${statusColor}`}>{statusText}</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{comp.fullName}</p>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-xs text-muted-foreground">
                    <span>赛制：{comp.level}</span>
                    <span>时间：{comp.examDate}</span>
                    <span>实验：{comp.experiment}</span>
                    <span>周期：{comp.studyCycle}</span>
                  </div>

                  <div className="pt-2 flex gap-2">
                    <Link to={comp.href} className="flex-1">
                      <Button
                        size="sm"
                        className="w-full text-xs"
                        style={{ backgroundColor: comp.color }}
                      >
                        进入专区
                        <ChevronRight className="w-3 h-3 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </AppLayout>
  )
}

// ── 物理竞赛主页 ─────────────────────────────────────
function PhysicsCompetitionPage_() {
  const [search, setSearch] = useState('')

  const modules = [
    { id: 'guide', label: '政策与赛事指南', icon: Trophy, color: '#f59e0b', desc: 'CP01-CP08', count: '8条' },
    { id: 'outline', label: '知识大纲', icon: BookOpen, color: '#3b82f6', desc: '11大板块，28个知识点', count: '28个' },
    { id: 'models', label: '核心模型详解', icon: Lightbulb, color: '#8b5cf6', desc: 'CB01-CB15', count: '15个' },
    { id: 'papers', label: '真题训练', icon: FileText, color: '#10b981', desc: '2010-2025', count: '48套' },
    { id: 'experiment', label: '实验专题', icon: FlaskConical, color: '#06b6d4', desc: 'CE01-CE09', count: '9个' },
    { id: 'path', label: '备考路径', icon: Route, color: '#f97316', desc: '三年系统规划', count: '6阶段' },
  ]

  return (
    <AppLayout showSubjectNav>
      <div className="max-w-5xl mx-auto p-6 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
            <Atom className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">物理竞赛（CPhO）</h1>
            <p className="text-sm text-muted-foreground">全国中学生物理竞赛 · 预赛 → 复赛 → 决赛</p>
          </div>
        </div>

        <Card className="border-orange-200 bg-orange-50/50">
          <CardContent className="p-4 flex items-center gap-4">
            <Zap className="w-5 h-5 text-orange-500 flex-shrink-0" />
            <div className="text-sm">
              <span className="font-semibold">深度标准：对标决赛级别</span>
              <span className="text-muted-foreground ml-2">
                知识范围 ≈ 大学物理系本科前两年核心课程 | 需要微积分+微分方程+矢量分析基础
              </span>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map((m) => {
            const Icon = m.icon
            const href = `/competition/physics/${m.id}`
            return (
              <Link key={m.id} to={href}>
                <Card className="hover:shadow-md hover:border-primary/30 transition-all cursor-pointer">
                  <CardContent className="p-5 space-y-2">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: m.color + '20' }}
                      >
                        <Icon className="w-5 h-5" style={{ color: m.color }} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm">{m.label}</h3>
                        <p className="text-xs text-muted-foreground">{m.desc}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <Badge variant="outline" className="text-xs">{m.count}</Badge>
                      <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">复赛历年考频统计</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: '力学', pct: 100, score: '约40分', color: '#3b82f6' },
                { name: '电磁学', pct: 100, score: '约40分', color: '#3b82f6' },
                { name: '实验物理', pct: 100, score: '约40分', color: '#8b5cf6' },
                { name: '近代物理', pct: 90, score: '约15分', color: '#10b981' },
                { name: '热学', pct: 80, score: '约20分', color: '#f59e0b' },
                { name: '光学', pct: 70, score: '约20分', color: '#f97316' },
              ].map((item) => (
                <div key={item.name} className="flex items-center gap-3">
                  <span className="text-sm w-16">{item.name}</span>
                  <div className="flex-1 h-4 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${item.pct}%`, backgroundColor: item.color }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground w-16">{item.pct}%</span>
                  <span className="text-xs text-muted-foreground w-14">{item.score}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  )
}

// ── 物理竞赛 - 政策指南列表 ──────────────────────────
function PhysicsCompetitionGuidePage_() {
  return (
    <AppLayout showSubjectNav>
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <div className="flex items-center gap-3">
          <Link to="/competition/physics">
            <Button variant="ghost" size="sm" className="gap-1">
              <ChevronRight className="w-4 h-4 rotate-180" /> 返回
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold">政策与赛事指南</h1>
            <p className="text-sm text-muted-foreground">CP01-CP08 · 参赛必读</p>
          </div>
        </div>

        <div className="space-y-3">
          {PHYSICS_COMPETITION_GUIDE.map((entry) => (
            <Card key={entry.id} className="hover:shadow-sm transition-shadow">
              <CardContent className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center text-sm font-mono font-bold flex-shrink-0">
                      {entry.id.replace('CP0', '')}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm">{entry.title}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{entry.subtitle}</p>
                      {entry.content ? (
                        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{entry.content.slice(0, 120)}...</p>
                      ) : (
                        <p className="text-xs text-muted-foreground mt-2 italic">内容待填充</p>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2 flex-shrink-0">
                    <Badge variant="outline" className="text-xs">{entry.updateFrequency}</Badge>
                    <Button size="sm" variant="secondary" className="text-xs h-7">
                      查看详情
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  )
}

// ── 物理竞赛 - 知识大纲列表 ──────────────────────────
function PhysicsCompetitionOutlinePage_() {
  const [search, setSearch] = useState('')

  const filtered = PHYSICS_KNOWLEDGE_ENTRIES.filter((e) =>
    e.title.includes(search) || e.id.includes(search)
  )

  return (
    <AppLayout showSubjectNav>
      <div className="max-w-5xl mx-auto p-6 space-y-6">
        <div className="flex items-center gap-3">
          <Link to="/competition/physics">
            <Button variant="ghost" size="sm" className="gap-1">
              <ChevronRight className="w-4 h-4 rotate-180" /> 返回
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold">知识大纲</h1>
            <p className="text-sm text-muted-foreground">十一大板块 · 28个知识点 · 对标大学物理系</p>
          </div>
        </div>

        <Input
          placeholder="搜索知识点编号或名称..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-xs"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
          {PHYSICS_OUTLINE_BLOCKS.map((block) => (
            <div key={block.id} className="p-3 rounded-lg border bg-card text-center">
              <p className="text-xs font-semibold">{block.name}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{block.weight}</p>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          {filtered.map((entry) => (
            <Card key={entry.id} className="hover:shadow-sm transition-shadow">
              <CardContent className="p-4 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-mono font-bold flex-shrink-0">
                  {entry.id.replace('CK', '')}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold text-sm">{entry.title}</h3>
                    <Badge variant="outline" className="text-xs">{entry.universityCourse}</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{entry.coreRequirements}</p>
                  {entry.content ? (
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{entry.content.slice(0, 100)}...</p>
                  ) : (
                    <p className="text-xs text-muted-foreground mt-1 italic">内容待填充</p>
                  )}
                </div>
                <Badge variant="outline" className="text-xs flex-shrink-0">{entry.examWeight}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  )
}

// ── 物理竞赛 - 核心模型列表 ──────────────────────────
function PhysicsCompetitionModelsPage_() {
  const [search, setSearch] = useState('')

  const filtered = PHYSICS_COMPETITION_MODELS.filter(
    (m) => m.name.includes(search) || m.id.includes(search)
  )

  const FREQ_COLOR: Record<string, string> = {
    '极高': 'bg-red-100 text-red-700',
    '高': 'bg-orange-100 text-orange-700',
    '中': 'bg-green-100 text-green-700',
  }
  const LEVEL_COLOR: Record<string, string> = {
    '预赛': 'bg-green-50 text-green-700 border-green-200',
    '复赛': 'bg-yellow-50 text-yellow-700 border-yellow-200',
    '决赛': 'bg-red-50 text-red-700 border-red-200',
    '复赛/决赛': 'bg-purple-50 text-purple-700 border-purple-200',
  }

  return (
    <AppLayout showSubjectNav>
      <div className="max-w-5xl mx-auto p-6 space-y-6">
        <div className="flex items-center gap-3">
          <Link to="/competition/physics">
            <Button variant="ghost" size="sm" className="gap-1">
              <ChevronRight className="w-4 h-4 rotate-180" /> 返回
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold">核心模型详解</h1>
            <p className="text-sm text-muted-foreground">CB01-CB15 · 竞赛高频考点精讲</p>
          </div>
        </div>

        <Input
          placeholder="搜索模型编号或名称..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-xs"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((model) => (
            <Card key={model.id} className="hover:shadow-sm transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="w-9 h-9 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center text-sm font-mono font-bold flex-shrink-0">
                      {model.id.replace('CB', '')}
                    </div>
                    <div>
                      <CardTitle className="text-sm">{model.name}</CardTitle>
                      <p className="text-xs text-muted-foreground mt-0.5">{model.mainTopics}</p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge className={FREQ_COLOR[model.frequency] || 'bg-gray-100 text-gray-700'}>
                    {model.frequency}
                  </Badge>
                  <Badge variant="outline" className={`text-xs ${LEVEL_COLOR[model.examLevel] || ''}`}>
                    {model.examLevel}
                  </Badge>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">前置知识：</p>
                  <div className="flex flex-wrap gap-1">
                    {model.prerequisiteKnowledge.map((pk) => (
                      <Badge key={pk} variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                        {pk}
                      </Badge>
                    ))}
                  </div>
                </div>
                {model.content ? (
                  <p className="text-xs text-muted-foreground">{model.content.slice(0, 100)}...</p>
                ) : (
                  <p className="text-xs text-muted-foreground italic">内容待填充</p>
                )}
                <Button size="sm" variant="secondary" className="w-full text-xs h-8">
                  查看详情（含真题精讲）
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  )
}

// ── 物理竞赛 - 备考路径 ───────────────────────────────
function PhysicsCompetitionPathPage_() {
  return (
    <AppLayout showSubjectNav>
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <div className="flex items-center gap-3">
          <Link to="/competition/physics">
            <Button variant="ghost" size="sm" className="gap-1">
              <ChevronRight className="w-4 h-4 rotate-180" /> 返回
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold">备考路径</h1>
            <p className="text-sm text-muted-foreground">三年系统准备 · 总投入约620小时</p>
          </div>
        </div>

        <Card className="border-red-200 bg-red-50/50">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
              <div className="text-sm space-y-1">
                <p className="font-semibold text-red-700">风险提示</p>
                <p className="text-red-600 text-xs">高考成绩下滑（设定底线：月考不低于年级前15%）| 停课风险 | 竞赛未获奖（提前规划高考兜底）| 身体与心理压力</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-orange-400" />
          <div className="space-y-6 pl-14">
            {PHYSICS_COMPETITION_PATH.map((stage, i) => (
              <div key={stage.phase} className="relative">
                <div
                  className="absolute -left-10 top-1 w-5 h-5 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold"
                  style={{
                    backgroundColor: i < 2 ? '#3b82f6' : i < 4 ? '#8b5cf6' : '#f97316',
                    color: 'white',
                  }}
                >
                  {i + 1}
                </div>
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-sm">{stage.phase}</h3>
                        <p className="text-xs text-muted-foreground">{stage.weeks}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-primary">{stage.target}</p>
                        <p className="text-xs text-muted-foreground">{stage.hours}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1">
                      {stage.topics.map((t, ti) => (
                        <li key={ti} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

// ── 物理竞赛 - 实验专题 ───────────────────────────────
function PhysicsCompetitionExperimentPage_() {
  return (
    <AppLayout showSubjectNav>
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <div className="flex items-center gap-3">
          <Link to="/competition/physics">
            <Button variant="ghost" size="sm" className="gap-1">
              <ChevronRight className="w-4 h-4 rotate-180" /> 返回
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold">实验专题</h1>
            <p className="text-sm text-muted-foreground">CE01-CE09 · 复赛决赛实验占约40%</p>
          </div>
        </div>

        <Card className="border-cyan-200 bg-cyan-50/50">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <FlaskConical className="w-5 h-5 text-cyan-600 flex-shrink-0" />
              <p className="text-sm text-cyan-700">
                竞赛复赛和决赛实验占总分<strong>约40%</strong>，是拉开差距的关键。实验设计与创新（CB15）是复赛/决赛的高频考点。
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {PHYSICS_COMPETITION_EXPERIMENTS.map((exp, i) => (
            <Card key={exp.id}>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-100 text-cyan-700 flex items-center justify-center text-xs font-mono font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm">{exp.title}</h3>
                    {exp.content ? (
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{exp.content.slice(0, 100)}...</p>
                    ) : (
                      <p className="text-xs text-muted-foreground mt-1 italic">内容待填充</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  )
}

// ── 物理竞赛 - 真题训练（占位）────────────────────────
function PhysicsCompetitionPapersPage_() {
  return (
    <AppLayout showSubjectNav>
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <div className="flex items-center gap-3">
          <Link to="/competition/physics">
            <Button variant="ghost" size="sm" className="gap-1">
              <ChevronRight className="w-4 h-4 rotate-180" /> 返回
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold">真题训练</h1>
            <p className="text-sm text-muted-foreground">2010-2025 预赛/复赛/决赛 · 48套</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {['预赛真题（16套）', '复赛真题（16套）', '决赛真题（16套）'].map((label, i) => (
            <Card key={label}>
              <CardContent className="p-5 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-sm">{label}</h3>
                <p className="text-xs text-muted-foreground">
                  {i === 0 ? '每套约15-20道题，含答案与评分标准' :
                   i === 1 ? '笔试7-8道大题+实验1-2道，完整解析含多解法' :
                   '理论5-6道+实验1-2道，极高难度'}
                </p>
                <Button size="sm" variant="secondary" className="w-full text-xs h-8">
                  即将上线
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  )
}

// ── URL 路由调度 ─────────────────────────────────────
// CompetitionHomePage 根据 URL 直接调度到对应子组件
// 避免 6 个独立 lazy() 各自下载整个 chunk
export function CompetitionHomePage() {
  const path = window.location.pathname

  if (path === '/competition' || path === '/competition/' || path === '/competition') {
    return <CompetitionHomePage_ />
  }
  if (path.startsWith('/competition/physics')) {
    const sub = path.slice('/competition/physics'.length)
    if (!sub || sub === '/' || sub === '') return <PhysicsCompetitionPage_ />
    if (sub === '/guide' || sub === '/guide/') return <PhysicsCompetitionGuidePage_ />
    if (sub === '/outline' || sub === '/outline/') return <PhysicsCompetitionOutlinePage_ />
    if (sub === '/models' || sub === '/models/') return <PhysicsCompetitionModelsPage_ />
    if (sub === '/papers' || sub === '/papers/') return <PhysicsCompetitionPapersPage_ />
    if (sub === '/experiment' || sub === '/experiment/') return <PhysicsCompetitionExperimentPage_ />
    if (sub === '/path' || sub === '/path/') return <PhysicsCompetitionPathPage_ />
    return <PhysicsCompetitionPage_ />
  }
  return <CompetitionHomePage_ />
}
