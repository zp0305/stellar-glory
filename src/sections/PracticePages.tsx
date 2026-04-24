import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { AppLayout } from '@/components/layout/Navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { physicsModels } from '@/data/physics/physicsModels'
import {
  BookOpen, Target, Calendar, Award, ArrowRight,
  FlaskConical, Search, Star, Zap
} from 'lucide-react'

// 练习中心模式
const practiceModes = [
  {
    id: 'knowledge',
    title: '知识点练习',
    subtitle: '针对训练',
    description: '选择具体知识点，针对性练习薄弱环节',
    icon: BookOpen,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-200',
    hint: '适合：学完某个知识点后立即巩固',
    available: true,
  },
  {
    id: 'chapter',
    title: '章节测试',
    subtitle: '阶段检测',
    description: '按章节出题，综合考察本章掌握程度',
    icon: Target,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-200',
    hint: '适合：学完一章后自测',
    available: true,
  },
  {
    id: 'exam',
    title: '考试真题',
    subtitle: '高考冲刺',
    description: '历年高考真题，仿真训练',
    icon: Calendar,
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-200',
    hint: '适合：备考冲刺阶段',
    available: false,
  },
  {
    id: 'competition',
    title: '竞赛练习',
    subtitle: '能力挑战',
    description: '物理竞赛预赛题，挑战高阶思维',
    icon: Award,
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-200',
    hint: '适合：学有余力，想挑战自我',
    available: false,
  },
]

// 难度说明
const difficultyLevels = [
  { id: 'B', label: 'B层 · 基础', color: '#16a34a', bg: 'bg-green-100 text-green-700', desc: '直接套公式，基本概念辨析' },
  { id: 'J', label: 'J层 · 进阶层', color: '#ca8a04', bg: 'bg-yellow-100 text-yellow-700', desc: '多步推导，综合应用两个以上知识点' },
  { id: 'T', label: 'T层 · 挑战层', color: '#dc2626', bg: 'bg-red-100 text-red-700', desc: '创新题型，跨章节综合' },
]

// 章节列表
const chapters = [
  { id: 'PHY-C01', name: '运动的描述', modelCount: 4, available: true },
  { id: 'PHY-C02', name: '匀变速直线运动', modelCount: 4, available: true },
  { id: 'PHY-C03', name: '相互作用', modelCount: 5, available: true },
  { id: 'PHY-C04', name: '牛顿运动定律', modelCount: 5, available: true },
  { id: 'PHY-C05', name: '曲线运动', modelCount: 3, available: true },
  { id: 'PHY-C06', name: '万有引力', modelCount: 1, available: false },
  { id: 'PHY-C07', name: '机械能', modelCount: 3, available: false },
  { id: 'PHY-C08', name: '动量', modelCount: 3, available: false },
  { id: 'PHY-C09', name: '电场', modelCount: 3, available: false },
  { id: 'PHY-C10', name: '磁场', modelCount: 3, available: false },
]

export function PracticePage() {
  return (
    <AppLayout showSubjectNav>
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* 页面头部 */}
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Target className="w-6 h-6 text-primary" />
            <h1 className="text-2xl font-bold">练习中心</h1>
          </div>
          <p className="text-muted-foreground text-sm">选择练习模式，开始刷题</p>
        </div>

        {/* B/J/T 难度说明 */}
        <Card className="bg-muted/20 border-dashed">
          <CardContent className="p-4">
            <p className="text-xs font-medium text-muted-foreground mb-3">💡 难度等级说明</p>
            <div className="grid grid-cols-3 gap-3">
              {difficultyLevels.map((d) => (
                <div key={d.id} className="flex items-start gap-2">
                  <Badge className={`${d.bg} text-xs flex-shrink-0 mt-0.5`}>{d.id}</Badge>
                  <div>
                    <p className="text-xs font-medium">{d.label}</p>
                    <p className="text-xs text-muted-foreground">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 四种练习模式 */}
        <div>
          <h2 className="text-base font-semibold mb-3">选择练习模式</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {practiceModes.map((mode) => {
              const ModeIcon = mode.icon
              return (
                <Link key={mode.id} to={mode.available ? `/physics/practice/${mode.id}` : '#'}>
                  <Card
                    className={`h-full hover:shadow-md transition-all ${!mode.available && 'opacity-60'}`}
                    style={{ borderColor: mode.available ? undefined : undefined }}
                  >
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${mode.color} flex items-center justify-center flex-shrink-0`}>
                          <ModeIcon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold">{mode.title}</h3>
                            {!mode.available && (
                              <Badge variant="outline" className="text-xs">即将上线</Badge>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground mb-2">{mode.subtitle}</p>
                          <p className="text-sm text-muted-foreground mb-2">{mode.description}</p>
                          <p className="text-xs text-primary/70 italic">{mode.hint}</p>
                        </div>
                        {mode.available && (
                          <ArrowRight className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>

        {/* 章节浏览（可直接跳转做题） */}
        <div>
          <h2 className="text-base font-semibold mb-3">或直接选择章节</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
            {chapters.map((ch) => (
              <Link
                key={ch.id}
                to={ch.available ? `/physics/practice/chapter/${ch.id}` : '#'}
                className={!ch.available ? 'pointer-events-none opacity-50' : ''}
              >
                <Card className="h-full hover:shadow-sm hover:border-primary/30 transition-all cursor-pointer">
                  <CardContent className="p-3 text-center">
                    <p className="font-semibold text-sm mb-0.5">{ch.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {ch.available ? `${ch.modelCount} 个模型` : '即将上线'}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

// ==================== 知识点练习选择页 ====================
export function KnowledgePracticePage() {
  const [search, setSearch] = useState('')

  const filtered = physicsModels.filter(
    (m) => !search || m.title.includes(search) || m.module.includes(search)
  )

  return (
    <AppLayout showSubjectNav>
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        <div className="flex items-center gap-2 mb-1">
          <BookOpen className="w-5 h-5 text-primary" />
          <h1 className="text-xl font-bold">知识点练习</h1>
        </div>
        <p className="text-muted-foreground text-sm">选择一个知识点，开始针对性练习</p>

        {/* 搜索 */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="搜索知识点..."
            className="w-full pl-9 pr-4 py-2 rounded-lg border border-input bg-background text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* 知识点列表 */}
        <div className="space-y-2">
          {filtered.map((m) => (
            <Link key={m.id} to={`/physics/practice/do?model=${m.id}`}>
              <Card className="hover:shadow-sm hover:border-primary/30 transition-all cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-primary">M{m.order.toString().padStart(2, '0')}</span>
                      </div>
                      <div>
                        <p className="font-medium text-sm">{m.title}</p>
                        <p className="text-xs text-muted-foreground">{m.module} · {m.chapter}</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </AppLayout>
  )
}

// ==================== 章节测试页 ====================
export function ChapterPracticePage() {
  const { chapterId } = useParams<{ chapterId: string }>()
  const chapter = chapters.find((c) => c.id === chapterId)
  const chapterModels = chapter ? physicsModels.filter((m) => m.chapter === chapter.name) : []

  if (!chapter) {
    return (
      <AppLayout showSubjectNav>
        <div className="max-w-4xl mx-auto px-4 py-8 text-center">
          <p className="text-muted-foreground">章节不存在</p>
          <Link to="/physics/practice"><Button variant="outline" className="mt-4">返回练习中心</Button></Link>
        </div>
      </AppLayout>
    )
  }

  return (
    <AppLayout showSubjectNav>
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        <div className="flex items-center gap-2 mb-1">
          <Target className="w-5 h-5 text-primary" />
          <h1 className="text-xl font-bold">{chapter.name} · 章节测试</h1>
        </div>

        {/* 难度选择 */}
        <div>
          <p className="text-sm font-medium mb-3">选择难度</p>
          <div className="grid grid-cols-3 gap-3">
            {difficultyLevels.map((d) => (
              <Link key={d.id} to={`/physics/practice/do?chapter=${chapterId}&diff=${d.id}`}>
                <Card className="hover:shadow-md hover:border-primary/30 transition-all cursor-pointer text-center">
                  <CardContent className="p-5">
                    <Badge className={`${d.bg} text-sm px-3 py-1 mb-2`}>{d.label}</Badge>
                    <p className="text-xs text-muted-foreground">{d.desc}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* 本章知识点 */}
        <div>
          <p className="text-sm font-medium mb-3">本章知识点</p>
          <div className="space-y-2">
            {chapterModels.map((m) => (
              <Card key={m.id}>
                <CardContent className="p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-primary">M{m.order.toString().padStart(2, '0')}</span>
                    <span className="text-sm">{m.title}</span>
                  </div>
                  <Link to={`/physics/practice/do?model=${m.id}`}>
                    <Button variant="ghost" size="sm" className="text-xs">练习</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

// ==================== 题库浏览页（合并原试题库）====================
export function QuestionBankPage() {
  const [search, setSearch] = useState('')
  const [difficulty, setDifficulty] = useState<string | null>(null)

  return (
    <AppLayout showSubjectNav>
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        <div className="flex items-center gap-2 mb-1">
          <FlaskConical className="w-5 h-5 text-primary" />
          <h1 className="text-xl font-bold">题库浏览</h1>
        </div>
        <p className="text-muted-foreground text-sm">按难度浏览所有题目</p>

        {/* 难度筛选 */}
        <div className="flex gap-2">
          {difficultyLevels.map((d) => (
            <Button
              key={d.id}
              variant={difficulty === d.id ? 'default' : 'outline'}
              size="sm"
              className="text-xs"
              onClick={() => setDifficulty(difficulty === d.id ? null : d.id)}
            >
              <span className={`w-1.5 h-1.5 rounded-full mr-1 inline-block`} style={{ backgroundColor: d.color }} />
              {d.label}
            </Button>
          ))}
        </div>

        {/* 难度分类浏览 */}
        <Tabs defaultValue="B">
          <TabsList className="mb-4">
            {difficultyLevels.map((d) => (
              <TabsTrigger key={d.id} value={d.id} className="gap-1">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: d.color }} />
                {d.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {difficultyLevels.map((d) => (
            <TabsContent key={d.id} value={d.id}>
              <Card>
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-semibold">{d.label}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{d.desc}</p>
                    </div>
                    <Button size="sm" className="gap-1">
                      <Zap className="w-3 h-3" /> 开始做题
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    题目内容正在填充中...共计划收录约 800 道题目（B/J/T 三级）
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </AppLayout>
  )
}
