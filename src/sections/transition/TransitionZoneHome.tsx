import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  summerWeeks,
  subjectBridges,
  adaptationStages,
  pitfalls,
  errorCases,
} from '@/data/transition/policy'
import {
  Calendar,
  ChevronRight,
  Clock,
  Brain,
  AlertTriangle,
  BookOpen,
  BarChart3,
  Star,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'

type Tab = 'summer' | 'bridge' | 'adapt' | 'error'

const subjectList = [
  { key: 'physics', name: '物理', icon: '⚡', color: '#3b82f6', bg: 'bg-blue-50', text: 'text-blue-600' },
  { key: 'math', name: '数学', icon: '∑', color: '#8b5cf6', bg: 'bg-violet-50', text: 'text-violet-600' },
  { key: 'chemistry', name: '化学', icon: '🧪', color: '#10b981', bg: 'bg-green-50', text: 'text-green-600' },
  { key: 'biology', name: '生物', icon: '🧬', color: '#f59e0b', bg: 'bg-amber-50', text: 'text-amber-600' },
  { key: 'chinese', name: '语文', icon: '📜', color: '#ef4444', bg: 'bg-red-50', text: 'text-red-600' },
  { key: 'english', name: '英语', icon: '🌐', color: '#06b6d4', bg: 'bg-cyan-50', text: 'text-cyan-600' },
]

const tabConfig: { key: Tab; label: string; icon: typeof Calendar; desc: string }[] = [
  { key: 'summer', label: '暑假计划', icon: Calendar, desc: '8周详细安排' },
  { key: 'bridge', label: '六科衔接', icon: BookOpen, desc: '各科断层清单' },
  { key: 'adapt', label: '高中适应', icon: BarChart3, desc: '高一适应指南' },
  { key: 'error', label: '容错方案', icon: AlertTriangle, desc: '6种偏差应对' },
]

export function TransitionZoneHome() {
  const [activeTab, setActiveTab] = useState<Tab>('summer')
  const [activeSubject, setActiveSubject] = useState('physics')
  const [expandedError, setExpandedError] = useState<number | null>(null)

  const currentSubject = (subjectBridges as any)[activeSubject]

  return (
    <div className="min-h-screen bg-background">
      {/* 顶部导航条 */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur border-b">
        <div className="max-w-4xl mx-auto px-4 flex items-center gap-4 py-3">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">← 首页</Link>
          <div className="w-px h-4 bg-border" />
          <span className="text-sm font-medium text-primary">初高中衔接</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* 页面标题 */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-sm">
            <Star className="w-3.5 h-3.5" />
            衔接规划
          </div>
          <h1 className="text-3xl font-bold">初高中衔接专区</h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            从初中毕业到高中入学的完整过渡方案，暑假8周计划 · 六科衔接重点 · 高中适应指南 · 容错调整策略
          </p>
        </div>

        {/* 核心观点 Banner */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-5 border border-amber-100">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Brain className="w-4 h-4 text-amber-600" />
            </div>
            <div>
              <h3 className="font-semibold text-sm text-amber-900 mb-1">核心观点</h3>
              <p className="text-sm text-amber-800 leading-relaxed">
                初高中衔接不是"提前学高中知识"，而是<strong>三件事同时做</strong>——补初中薄弱点、搭建高中学习方法框架、了解高中知识整体版图。
              </p>
            </div>
          </div>
        </div>

        {/* 为什么重要 - 高中vs初中差异 */}
        <Card className="overflow-hidden">
          <div className="bg-gradient-to-r from-slate-50 to-background px-5 py-4 border-b">
            <h2 className="text-base font-bold flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-muted-foreground" />
              高中 vs 初中：关键变化
            </h2>
          </div>
          <CardContent className="p-0">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-border">
              {[
                { dim: '知识量', from: '基础少量', to: '增加3-5倍', level: 3 },
                { dim: '思维要求', from: '记忆+简单应用', to: '理解+建模+迁移+抽象', level: 4 },
                { dim: '学习节奏', from: '老师带着走', to: '大量自学，进度快', level: 3 },
                { dim: '考核方式', from: '知识再现型', to: '知识迁移型', level: 3 },
                { dim: '数学工具', from: '基本运算', to: '矢量/函数/三角/对数', level: 3 },
                { dim: '时间管理', from: '学校安排为主', to: '自主规划+多线并行', level: 3 },
              ].map(item => (
                <div key={item.dim} className="bg-background p-3 space-y-1">
                  <div className="text-xs text-muted-foreground">{item.dim}</div>
                  <div className="text-xs text-muted-foreground line-through">{item.from}</div>
                  <div className="text-xs font-medium text-foreground">{item.to}</div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div
                        key={i}
                        className={`h-1 flex-1 rounded-full ${i < item.level ? 'bg-amber-400' : 'bg-muted'}`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tab 切换 */}
        <div className="flex gap-1 bg-muted rounded-xl p-1 w-fit mx-auto">
          {tabConfig.map(({ key, label, icon: Icon, desc }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex flex-col items-center gap-0.5 px-4 py-2.5 rounded-lg text-sm font-medium transition-all min-w-[72px] ${
                activeTab === key
                  ? 'bg-background shadow text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="text-xs opacity-70">{desc}</span>
              <span className={activeTab === key ? 'font-semibold' : ''}>{label}</span>
            </button>
          ))}
        </div>

        {/* ===== Tab: 暑假计划 ===== */}
        {activeTab === 'summer' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                暑假8周总体安排
              </h2>
              <Badge variant="outline" className="text-xs">前松后紧</Badge>
            </div>
            <p className="text-sm text-muted-foreground -mt-2">
              原则：先诊断后行动，留出休息时间。每日时间分配：上午主学科（物理/数学）、下午次学科（化学/英语）、晚上自由/方法建设。
            </p>
            <div className="space-y-3">
              {summerWeeks.map(week => (
                <Card key={week.week} className={`overflow-hidden ${
                  week.week <= 2 ? 'border-l-4 border-l-amber-400' :
                  week.week <= 4 ? 'border-l-4 border-l-blue-400' :
                  week.week <= 6 ? 'border-l-4 border-l-green-400' :
                  'border-l-4 border-l-slate-400'
                }`}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-primary">{week.week}周</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <h3 className="font-semibold text-sm">{week.theme}</h3>
                          <Badge variant="outline" className="text-xs">{week.dailyHours}/天</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mb-1.5">
                          <span className="text-foreground font-medium">任务：</span>{week.tasks}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          <span className="text-green-600 font-medium">检测：</span>{week.detection}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* ===== Tab: 六科衔接 ===== */}
        {activeTab === 'bridge' && (
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                六科衔接重点
              </h2>
              <Badge variant="outline" className="text-xs">每个衔接点含现状/需求/方式/时间</Badge>
            </div>
            {/* 学科选择器 */}
            <div className="flex flex-wrap gap-2">
              {subjectList.map(s => (
                <button
                  key={s.key}
                  onClick={() => setActiveSubject(s.key)}
                  className={`${s.bg} ${s.text} text-sm px-3 py-1.5 rounded-lg font-medium transition-all border ${
                    activeSubject === s.key ? 'border-current ring-2 ring-current ring-opacity-30' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <span className="mr-1">{s.icon}</span>{s.name}
                </button>
              ))}
            </div>
            {/* 衔接点表格 */}
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b bg-muted/50">
                        <th className="text-left px-4 py-2.5 font-semibold text-xs text-muted-foreground w-28">衔接点</th>
                        <th className="text-left px-4 py-2.5 font-semibold text-xs text-muted-foreground">初中现状</th>
                        <th className="text-left px-4 py-2.5 font-semibold text-xs text-muted-foreground">高中需要</th>
                        <th className="text-left px-4 py-2.5 font-semibold text-xs text-muted-foreground">衔接方式</th>
                        <th className="text-center px-4 py-2.5 font-semibold text-xs text-muted-foreground w-16">时间</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentSubject.points.map((point: any, i: number) => (
                        <tr key={point.id} className={`border-b last:border-0 ${i % 2 === 0 ? 'bg-background' : 'bg-muted/20'}`}>
                          <td className="px-4 py-3 font-medium text-xs align-top">{point.point}</td>
                          <td className="px-4 py-3 text-xs text-muted-foreground align-top">{point.juniorStatus}</td>
                          <td className="px-4 py-3 text-xs text-muted-foreground align-top">{point.highSchoolNeed}</td>
                          <td className="px-4 py-3 text-xs text-muted-foreground align-top">{point.approach}</td>
                          <td className="px-4 py-3 text-center">
                            <Badge variant="outline" className="text-xs font-mono">{point.hours}</Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* ===== Tab: 高中适应 ===== */}
        {activeTab === 'adapt' && (
          <div className="space-y-6">
            {/* 高一上学期阶段时间线 */}
            <div className="space-y-4">
              <h2 className="text-lg font-bold flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                高一上学期：关键适应期
              </h2>
              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />
                <div className="space-y-3">
                  {adaptationStages.map((stage, i) => (
                    <div key={stage.phase} className="relative flex gap-4">
                      <div className="relative z-10 w-10 h-10 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-primary">{i + 1}</span>
                      </div>
                      <Card className="flex-1">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-sm">{stage.phase}</h3>
                            <Badge variant="outline" className="text-xs">
                              <Clock className="w-3 h-3 mr-0.5" />{stage.time}
                            </Badge>
                          </div>
                          <div className="flex flex-wrap gap-1 mb-2">
                            {stage.tasks.map(t => (
                              <span key={t} className="text-xs bg-primary/5 text-primary px-2 py-0.5 rounded">{t}</span>
                            ))}
                          </div>
                          <p className="text-xs text-amber-700 bg-amber-50 px-2 py-1 rounded">
                            ⚠️ {stage.commonIssue}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 高一最常踩的坑 */}
            <div className="space-y-3">
              <h2 className="text-lg font-bold flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-orange-500" />
                高一最常踩的6个坑
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pitfalls.map(pit => (
                  <Card key={pit.id} className="border-l-4 border-l-orange-300">
                    <CardContent className="p-4 space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded bg-orange-100 text-orange-600 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                          {pit.id}
                        </div>
                        <div className="text-sm font-medium">{pit.pitfall}</div>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        <span className="text-red-500">后果：</span>{pit.consequence}
                      </p>
                      <p className="text-xs text-green-700 bg-green-50 px-2 py-1 rounded">
                        ✅ {pit.prevention}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ===== Tab: 容错方案 ===== */}
        {activeTab === 'error' && (
          <div className="space-y-4">
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
              <p className="text-sm text-slate-700">
                <strong>核心原则：</strong>计划是活的，不是死的。发现偏差越早调整，成本越低。
                建议每月做一次自检：回顾目标→分析原因→判断类型→调整计划→记录效果。
              </p>
            </div>

            <div className="space-y-3">
              {errorCases.map(err => (
                <Card key={err.id} className={`overflow-hidden transition-all ${
                  expandedError === err.id ? 'border-primary/30 shadow-md' : ''
                }`}>
                  <button
                    className="w-full text-left"
                    onClick={() => setExpandedError(expandedError === err.id ? null : err.id)}
                  >
                    <CardContent className="p-4 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-primary">{err.id}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm">{err.title}</div>
                        <div className="text-xs text-muted-foreground mt-0.5 truncate">{err.trigger}</div>
                      </div>
                      <ChevronRight className={`w-4 h-4 text-muted-foreground transition-transform flex-shrink-0 ${
                        expandedError === err.id ? 'rotate-90' : ''
                      }`} />
                    </CardContent>
                  </button>
                  {expandedError === err.id && (
                    <div className="border-t px-4 py-4 space-y-3 bg-muted/20">
                      <div>
                        <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">触发条件</div>
                        <p className="text-sm">{err.trigger}</p>
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">诊断步骤</div>
                        {err.diagnosis.map((d, i) => (
                          <div key={i} className="text-sm text-muted-foreground flex items-start gap-1.5 mb-0.5">
                            <span className="text-primary mt-0.5">·</span>{d}
                          </div>
                        ))}
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">调整策略</div>
                        <p className="text-sm">{err.strategy}</p>
                      </div>
                      <div className="bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                        <div className="text-xs font-semibold text-amber-800 mb-0.5">止损原则</div>
                        <p className="text-xs text-amber-700">{err.stopLoss}</p>
                      </div>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
