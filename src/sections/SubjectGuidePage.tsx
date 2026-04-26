import { Link } from 'react-router-dom'
import { AppLayout } from '@/components/layout/Navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  BookOpen, GitBranch, BookMarked, Lightbulb, Eye,
  Target, FlaskConical, BarChart3, Trophy, Route,
  ChevronRight, Star, Lock, Atom, Zap
} from 'lucide-react'
import { allRoutines } from '@/data/physics/strategies'
import { physicsModels } from '@/data/physics/physicsModels'
import { physicsVisionStories } from '@/data/physics/visionStories'

// ===================== 物理模块网格（/physics） =====================
const physicsModules = [
  { id: 'guide', label: '学科指南', icon: BookOpen, href: '/physics/guide', color: '#3b82f6', badge: null, coming: false },
  { id: 'graph', label: '认知图谱', icon: GitBranch, href: '/physics/graph', color: '#8b5cf6', badge: null, coming: false },
  { id: 'knowledge', label: '知识详解', icon: BookMarked, href: '/physics/models', color: '#10b981', badge: String(physicsModels.length) + '个', coming: false },
  { id: 'strategies', label: '解题套路', icon: Lightbulb, href: '/physics/strategies', color: '#f59e0b', badge: String(allRoutines.length) + '条', coming: false },
  { id: 'thinking', label: '思维方法', icon: Zap, href: '/physics/thinking', color: '#7c3aed', badge: '7个', coming: false },
  { id: 'vision', label: '物理视界', icon: Eye, href: '/physics/vision', color: '#06b6d4', badge: String(physicsVisionStories.length) + '个', coming: false },
  { id: 'practice', label: '练习中心', icon: Target, href: '/physics/practice', color: '#ef4444', badge: null, coming: false },
  { id: 'wrong', label: '错题本', icon: FlaskConical, href: '/physics/wrong', color: '#dc2626', badge: null, coming: false },
  { id: 'report', label: '学习报告', icon: BarChart3, href: '/learning', color: '#7c3aed', badge: null, coming: false },
  { id: 'competition', label: '竞赛专区', icon: Trophy, href: '/physics/competition', color: '#b45309', badge: '即将上线', coming: true },
  { id: 'paths', label: '学习路径', icon: Route, href: '/physics/paths', color: '#0369a1', badge: '即将上线', coming: true },
]

export function PhysicsModuleGrid() {
  return (
    <AppLayout showSubjectNav>
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-5">
        <div className="text-center py-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm mb-3">
            <Star className="w-3.5 h-3.5" />
            高中物理 · v1.3
          </div>
          <h1 className="text-2xl font-bold mb-1">物理学习中心</h1>
          <p className="text-muted-foreground text-sm">选择模块，开始学习</p>
        </div>

        {/* 图标 + 标题 + 角标，无描述 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {physicsModules.map((m) => {
            const Icon = m.icon
            const available = !m.coming
            return (
              <Link key={m.id} to={available ? m.href : '#'}>
                <Card className={`h-full hover:shadow-sm transition-all ${!available ? 'opacity-60 cursor-not-allowed' : ''}`} style={{ borderColor: m.color + '33' }}>
                  <CardContent className="p-2.5 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: m.color + '18' }}>
                      <Icon className="w-4 h-4" style={{ color: m.color }} />
                    </div>
                    <span className="text-sm font-semibold whitespace-nowrap flex-1">{m.label}</span>
                    {m.badge && (
                      <span className={`text-xs px-1 rounded flex-shrink-0 ${!available ? 'opacity-50' : ''}`} style={{ backgroundColor: m.color + '18', color: m.color }}>
                        {m.badge}
                      </span>
                    )}
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </AppLayout>
  )
}

// ===================== 化学模块网格（/chemistry） =====================
const chemistryModules = [
  { id: 'guide', label: '学科指南', icon: BookOpen, href: '/chemistry/guide', color: '#10b981', badge: null },
  { id: 'knowledge', label: '知识详解', icon: BookMarked, href: '/chemistry/models', color: '#059669', badge: '即将上线' },
  { id: 'strategies', label: '解题套路', icon: Lightbulb, href: '/chemistry/strategies', color: '#d97706', badge: '即将上线' },
  { id: 'vision', label: '化学视界', icon: Eye, href: '/chemistry/vision', color: '#0891b2', badge: '即将上线' },
  { id: 'practice', label: '练习中心', icon: Target, href: '/chemistry/practice', color: '#dc2626', badge: '即将上线' },
  { id: 'wrong', label: '错题本', icon: FlaskConical, href: '/chemistry/wrong', color: '#7c3aed', badge: '即将上线' },
]

export function ChemistryModuleGrid() {
  return (
    <AppLayout showSubjectNav>
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-5">
        <div className="text-center py-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-600 text-sm mb-3">
            <Atom className="w-3.5 h-3.5" />
            高中化学 · v1.3
          </div>
          <h1 className="text-2xl font-bold mb-1">化学学习中心</h1>
          <p className="text-muted-foreground text-sm">选择模块，开始学习</p>
        </div>

        {/* 图标 + 标题 + 角标，无描述 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {chemistryModules.map((m) => {
            const Icon = m.icon
            const available = !m.badge
            return (
              <Link key={m.id} to={available ? m.href : '#'}>
                <Card className={`h-full hover:shadow-sm transition-all ${!available ? 'opacity-70' : ''}`} style={{ borderColor: m.color + '33' }}>
                  <CardContent className="p-2.5 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: m.color + '18' }}>
                      <Icon className="w-4 h-4" style={{ color: m.color }} />
                    </div>
                    <span className="text-sm font-semibold whitespace-nowrap flex-1">{m.label}</span>
                    {m.badge && (
                      <span className="text-xs px-1 rounded flex-shrink-0" style={{ backgroundColor: m.color + '18', color: m.color }}>
                        {m.badge}
                      </span>
                    )}
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>

        <div className="text-center pt-1">
          <Badge variant="outline" className="text-xs">化学学科内容持续更新中</Badge>
        </div>
      </div>
    </AppLayout>
  )
}
