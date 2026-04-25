import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'
import {
  BookOpen,
  GitBranch,
  Target,
  Eye,
  FlaskConical,
  Trophy,
  BarChart3,
  Route,
  ChevronDown,
  Menu,
  X,
  Home,
  BookMarked,
  Lightbulb,
  ChevronRight,
  Star,
  GraduationCap,
  Zap,
  FileText,
  FileCheck,
  Book,
  Binary,
  Dna,
  Stethoscope,
  ClipboardList,
  Brain,
  Map,
} from 'lucide-react'

// 六大科目配置
const subjects = [
  { id: 'physics', name: '物理', code: 'PHY', color: '#3b82f6', href: '/physics', available: true },
  { id: 'chemistry', name: '化学', code: 'CHE', color: '#10b981', href: '/chemistry', available: true },
  { id: 'math', name: '数学', code: 'MAT', color: '#8b5cf6', href: '/math', available: false },
  { id: 'biology', name: '生物', code: 'BIO', color: '#f59e0b', href: '/biology', available: false },
  { id: 'chinese', name: '语文', code: 'CHN', color: '#ef4444', href: '/chinese', available: false },
  { id: 'english', name: '英语', code: 'ENG', color: '#06b6d4', href: '/english', available: false },
  { id: 'gaokao', name: '高考', code: 'GAO', color: '#f97316', href: '/gaokao', available: true },
  { id: 'foundation', name: '强基', code: 'FND', color: '#8b5cf6', href: '/foundation', available: true },
  { id: 'competition', name: '竞赛', code: 'CMP', color: '#eab308', href: '/competition', available: true },
]

const competitionModules = [
  {
    id: 'overview',
    label: '竞赛首页',
    icon: Trophy,
    href: '/competition',
    description: '五科竞赛总览',
    available: true,
  },
  {
    id: 'guide',
    label: '政策指南',
    icon: FileText,
    href: '/competition/physics/guide',
    description: 'CP01-CP08',
    available: true,
  },
  {
    id: 'outline',
    label: '知识大纲',
    icon: BookOpen,
    href: '/competition/physics/outline',
    description: '28个知识点',
    available: true,
  },
  {
    id: 'models',
    label: '核心模型',
    icon: Lightbulb,
    href: '/competition/physics/models',
    description: 'CB01-CB15',
    available: true,
  },
  {
    id: 'papers',
    label: '真题训练',
    icon: FileCheck,
    href: '/competition/physics/papers',
    description: '预赛/复赛/决赛',
    available: true,
  },
  {
    id: 'experiment',
    label: '实验专题',
    icon: FlaskConical,
    href: '/competition/physics/experiment',
    description: 'CE01-CE09',
    available: true,
  },
  {
    id: 'path',
    label: '备考路径',
    icon: Route,
    href: '/competition/physics/path',
    description: '三年系统规划',
    available: true,
  },
  {
    id: 'math',
    label: '数学竞赛',
    icon: Book,
    href: '/competition/math',
    description: 'CMO · 联赛/决赛',
    available: false,
  },
  {
    id: 'chemistry',
    label: '化学竞赛',
    icon: Zap,
    href: '/competition/chemistry',
    description: 'CChO',
    available: false,
  },
  {
    id: 'biology',
    label: '生物竞赛',
    icon: Dna,
    href: '/competition/biology',
    description: 'CBO',
    available: false,
  },
  {
    id: 'cs',
    label: '信息学竞赛',
    icon: Binary,
    href: '/competition/cs',
    description: 'NOI',
    available: false,
  },
]

// 物理学科模块导航
const chemistryModules = [
  {
    id: 'guide',
    label: '学科指南',
    icon: BookOpen,
    href: '/chemistry',
    description: '为什么学化学'},
]

// 学习工具模块
const learningToolsModules = [
  {
    id: 'diagnosis',
    label: '诊断评估',
    icon: Stethoscope,
    href: '/diagnosis',
    description: '学科能力诊断',
  },
  {
    id: 'planner',
    label: '目标规划',
    icon: ClipboardList,
    href: '/planner',
    description: '三年学习规划',
  },
  {
    id: 'methods',
    label: '学习方法',
    icon: Brain,
    href: '/methods',
    description: '五大高效学习法',
  },
]

// 物理学科模块导航
const physicsModules = [
  {
    id: 'guide',
    label: '学科指南',
    icon: BookOpen,
    href: '/physics/guide',
    description: '为什么学物理'},
  {
    id: 'graph',
    label: '认知图谱',
    icon: GitBranch,
    href: '/physics/graph',
    description: '知识结构可视化'},
  {
    id: 'knowledge',
    label: '知识详解',
    icon: BookMarked,
    href: '/physics/models',
    description: '42个核心模型'},
  {
    id: 'concepts',
    label: '知识节点',
    icon: GitBranch,
    href: '/physics/concepts',
    description: '56个知识节点'},
  {
    id: 'strategies',
    label: '解题套路',
    icon: Lightbulb,
    href: '/physics/strategies',
    description: '题型规律提炼',
    available: true},
  {
    id: 'vision',
    label: '物理视界',
    icon: Eye,
    href: '/physics/vision',
    description: '物理学史与故事',
    available: true},
  {
    id: 'practice',
    label: '练习中心',
    icon: Target,
    href: '/physics/exercises',
    description: '配套题库',
    available: true},
  {
    id: 'wrong',
    label: '错题本',
    icon: FlaskConical,
    href: '/physics/wrong',
    description: '错题追踪',
    available: true},
  {
    id: 'report',
    label: '学习报告',
    icon: BarChart3,
    href: '/learning',
    description: '学习数据',
    available: true},
  {
    id: 'favorites',
    label: '收藏夹',
    icon: Star,
    href: '/physics/favorites',
    description: '收藏的知识与套路',
    available: true},
  {
    id: 'senior',
    label: '高考专项',
    icon: GraduationCap, href: '/gaokao',
    description: '高考政策与备考',
    available: true,
  },
  {
    id: 'foundation',
    label: '强基专项',
    icon: Zap, href: '/foundation',
    description: '强基计划备考',
    available: true,
  },
  {
    id: 'competition',
    label: '学科竞赛',
    icon: Trophy, href: '/competition',
    description: '五大学科竞赛',
    available: true,
  },
  {
    id: 'paths',
    label: '学习路径',
    icon: Route,
    href: '/physics/paths',
    description: '学习规划'},
]

// 按科目ID获取模块导航列表
function getSubjectModules(subjectId: string) {
  switch (subjectId) {
    case 'chemistry': return chemistryModules
    default: return physicsModules
  }
}

function useCurrentSubject() {
  const location = useLocation()
  if (location.pathname.startsWith('/physics')) return subjects[0]
  if (location.pathname.startsWith('/chemistry')) return subjects[1]
  if (location.pathname.startsWith('/diagnosis') || location.pathname.startsWith('/planner') || location.pathname.startsWith('/methods')) return null
  return subjects[0]
}

function useCurrentTool() {
  const location = useLocation()
  const path = location.pathname
  if (path.startsWith('/diagnosis')) return 'diagnosis'
  if (path.startsWith('/planner')) return 'planner'
  if (path.startsWith('/methods')) return 'methods'
  return null
}

function useCurrentModule() {
  const location = useLocation()
  const path = location.pathname
  // 精确匹配：根页/学科首页 → guide
  if (path === '/physics' || path === '/physics/guide') return 'guide'
  if (path === '/chemistry' || path === '/chemistry/guide') return 'guide'
  // 通用子路径匹配（对任何科目生效）
  if (path.includes('/graph')) return 'graph'
  if (path.includes('/concepts')) return 'concepts'
  if (path.includes('/models')) return 'knowledge'
  if (path.includes('/strategies')) return 'strategies'
  if (path.includes('/vision')) return 'vision'
  if (path.includes('/exercises')) return 'practice'
  if (path.includes('/practice')) return 'practice'
  if (path.includes('/wrong')) return 'wrong'
  if (path.includes('/favorites')) return 'favorites'
  if (path.includes('/competition')) return 'competition'
  if (path.includes('/report')) return 'report'
  if (path.includes('/paths')) return 'paths'
  return 'guide'
}

// ==================== 顶部导航 ====================
export function TopNav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const currentSubject = useCurrentSubject()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center px-4 gap-2">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 mr-4">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <Star className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-lg hidden sm:block">星耀</span>
        </Link>

        {/* 桌面端：学科切换 */}
        <div className="hidden lg:flex items-center gap-1">
          {subjects.map((s) => (
            <Link key={s.id} to={s.href}>
              <Button
                variant={currentSubject?.id === s.id ? 'secondary' : 'ghost'}
                size="sm"
                className={cn(
                  'gap-1.5 text-sm',
                  currentSubject?.id === s.id && 'font-semibold'
                )}
                style={currentSubject?.id === s.id && s.available ? { borderColor: s.color, color: s.color } : {}}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: s.color, opacity: s.available ? 1 : 0.4 }}
                />
                {s.name}
                {!s.available && <span className="text-xs opacity-60">（筹备中）</span>}
              </Button>
            </Link>
          ))}
        </div>

        {/* 桌面端：当前学科下拉 */}
        <div className="hidden lg:flex items-center ml-auto gap-1">
          {currentSubject?.available && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-1">
                  {currentSubject?.name}
                  <ChevronDown className="w-3.5 h-3.5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {currentSubject && getSubjectModules(currentSubject.id).map((m) => (
                  <Link key={m.id} to={m.href}>
                    <DropdownMenuItem className="gap-2">
                      <m.icon className="w-4 h-4 opacity-60" />
                      {m.label}
                    </DropdownMenuItem>
                  </Link>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          {/* 学习工具下拉 */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1">
                学习工具
                <ChevronDown className="w-3.5 h-3.5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-52">
              {learningToolsModules.map((m) => (
                <Link key={m.id} to={m.href}>
                  <DropdownMenuItem className="gap-2">
                    <m.icon className="w-4 h-4 opacity-60" />
                    <div>
                      <div>{m.label}</div>
                      <div className="text-xs text-muted-foreground font-normal">{m.description}</div>
                    </div>
                  </DropdownMenuItem>
                </Link>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

            {/* 移动端：左侧菜单 */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72 p-0 flex flex-col">
                {/* 移动端Logo栏 */}
                <div className="flex items-center gap-2 p-4 border-b">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-bold text-lg">星耀</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="ml-auto"
                    onClick={() => setMobileOpen(false)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>

                <ScrollArea className="flex-1">
                  {/* 学习工具 */}
                  <div className="p-3 border-b">
                    <p className="text-xs font-medium text-muted-foreground mb-2 px-2">学习工具</p>
                    <div className="space-y-0.5">
                      {learningToolsModules.map((m) => (
                        <Link key={m.id} to={m.href} onClick={() => setMobileOpen(false)}>
                          <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm hover:bg-muted transition-colors">
                            <m.icon className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                            <span className="flex-1">{m.label}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* 学科选择 */}
                  <div className="p-3 border-b">
                    <p className="text-xs font-medium text-muted-foreground mb-2 px-2">选择学科</p>
                    <div className="grid grid-cols-3 gap-1">
                      {subjects.map((s) => (
                        <Link key={s.id} to={s.href} onClick={() => setMobileOpen(false)}>
                          <Button
                            variant={currentSubject?.id === s.id ? 'secondary' : 'ghost'}
                            size="sm"
                            className="w-full text-xs gap-1.5 justify-start"
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{ backgroundColor: s.color, opacity: s.available ? 1 : 0.4 }}
                            />
                            {s.name}
                          </Button>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* 模块导航 */}
                  <nav className="p-3 space-y-1">
                    {currentSubject?.available && ((currentSubject.id === 'chemistry' ? chemistryModules : physicsModules)).map((m) => (
                      <Link key={m.id} to={m.href} onClick={() => setMobileOpen(false)}>
                        <div className={cn(
                          'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors',
                          'hover:bg-muted'
                        )}>
                          <m.icon className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                          <span>{m.label}</span>
                        </div>
                      </Link>
                    ))}
                  </nav>
                </ScrollArea>
              </SheetContent>
            </Sheet>

        {/* 移动端：右侧"我的学习" */}
        <div className="flex items-center gap-2 ml-auto">
          <Link to="/learning" className="lg:hidden">
            <Button variant="ghost" size="sm" className="gap-1.5 text-xs">
              <Home className="w-4 h-4" />
              我的
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

// ==================== 左侧导航 ====================
export function LeftSidebar() {
  const location = useLocation()
  const currentModule = useCurrentModule()
  const currentSubject = useCurrentSubject()
  const currentTool = useCurrentTool()

  // 工具页：显示学习工具导航
  if (currentTool) {
    return (
      <aside className="hidden lg:flex w-56 flex-col border-r bg-muted/20">
        <div className="p-3 border-b">
          <div className="flex items-center gap-2 px-2 py-1.5">
            <Brain className="w-4 h-4 text-primary" />
            <span className="font-semibold text-sm">学习工具</span>
          </div>
        </div>
        <ScrollArea className="flex-1 py-2">
          <nav className="px-2 space-y-0.5">
            {learningToolsModules.map((m) => {
              const isActive = currentTool === m.id
              return (
                <Link key={m.id} to={m.href}>
                  <div
                    className={cn(
                      'flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-all',
                      isActive
                        ? 'bg-primary/10 text-primary font-semibold'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    )}
                  >
                    <m.icon className={cn('w-4 h-4 flex-shrink-0', isActive ? 'text-primary' : '')} />
                    <span className="flex-1">{m.label}</span>
                    {isActive && <ChevronRight className="w-3 h-3 text-primary" />}
                  </div>
                </Link>
              )
            })}
          </nav>
        </ScrollArea>
      </aside>
    )
  }

  if (!currentSubject?.available) return null

  return (
    <aside className="hidden lg:flex w-56 flex-col border-r bg-muted/20">
      <div className="p-3 border-b">
        <div className="flex items-center gap-2 px-2 py-1.5">
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: currentSubject?.color }}
          />
          <span className="font-semibold text-sm">{currentSubject?.name}</span>
        </div>
      </div>
      <ScrollArea className="flex-1 py-2">
        <nav className="px-2 space-y-0.5">
          {currentSubject && getSubjectModules(currentSubject.id).map((m) => {
            const isActive = currentModule === m.id
            return (
              <Link key={m.id} to={m.href}>
                <div
                  className={cn(
                    'flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-all',
                    isActive
                      ? 'bg-primary/10 text-primary font-semibold'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  )}
                >
                  <m.icon className={cn('w-4 h-4 flex-shrink-0', isActive ? 'text-primary' : '')} />
                  <span className="flex-1">{m.label}</span>
                  {isActive && <ChevronRight className="w-3 h-3 text-primary" />}
                </div>
              </Link>
            )
          })}
        </nav>
      </ScrollArea>
    </aside>
  )
}

// ==================== 右侧锚点导航 ====================
export function RightAnchorNav({ anchors }: { anchors: { id: string; label: string }[] }) {
  const [active, setActive] = useState(anchors[0]?.id || '')
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current?.disconnect()

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) {
          setActive(visible[0].target.id)
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    )

    anchors.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    observerRef.current = observer
    return () => observer.disconnect()
  }, [anchors.map((a) => a.id).join(',')])

  if (anchors.length === 0) return null

  return (
    <nav className="hidden xl:block w-48 flex-shrink-0">
      <div className="sticky top-20">
        <p className="text-xs font-medium text-muted-foreground mb-2 px-2">目录</p>
        <div className="space-y-0.5">
          {anchors.map((a) => (
            <a
              key={a.id}
              href={`#${a.id}`}
              className={cn(
                'block px-2 py-1.5 rounded-md text-xs transition-all',
                active === a.id
                  ? 'text-primary font-semibold bg-primary/5'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {a.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

// ==================== 页面骨架布局 ====================
interface AppLayoutProps {
  children: React.ReactNode
  showSubjectNav?: boolean
  showRightAnchor?: boolean
  anchors?: { id: string; label: string }[]
  rightContent?: React.ReactNode
}

export function AppLayout({
  children,
  showSubjectNav = false,
  anchors = [],
  rightContent}: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <div className="flex">
        {showSubjectNav && <LeftSidebar />}
        <main className="flex-1 min-w-0">
          <div className={anchors.length > 0 ? 'flex' : ''}>
            <div className="flex-1 min-w-0">{children}</div>
            {anchors.length > 0 && <RightAnchorNav anchors={anchors} />}
            {rightContent}
          </div>
        </main>
      </div>
    </div>
  )
}
