import { Link } from 'react-router-dom'
import { AppLayout } from '@/components/layout/Navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Spinner } from '@/components/ui/spinner'
import {
  BookOpen, GitBranch, BookMarked, Lightbulb, Eye,
  Target, FlaskConical, BarChart3, Trophy, Route,
  ChevronRight, Star, Lock, Atom, Zap, Calculator, Languages, Dna, GraduationCap
} from 'lucide-react'
import type { SubjectMeta } from '@/data/subjects'
import { getSubjectData, isSubjectRegistered } from '@/data/registry'
import { loadSubjectData, isSubjectLoadable } from '@/data/loaders'
import { useState, useEffect } from 'react'

interface ModuleItem {
  id: string
  label: string
  icon: React.ComponentType<{ className?: string }>
  href: string
  color: string
  badge?: string
  coming?: boolean
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen,
  GitBranch,
  BookMarked,
  Lightbulb,
  Eye,
  Target,
  FlaskConical,
  BarChart3,
  Trophy,
  Route,
  Zap,
}

const subjectIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  physics: FlaskConical,
  chemistry: Atom,
  math: Calculator,
  biology: Dna,
  chinese: BookOpen,
  english: Languages,
}

const subjectColors: Record<string, string> = {
  physics: '#3b82f6',
  chemistry: '#10b981',
  math: '#8b5cf6',
  biology: '#f59e0b',
  chinese: '#ef4444',
  english: '#06b6d4',
}

const subjectNames: Record<string, string> = {
  physics: '物理',
  chemistry: '化学',
  math: '数学',
  biology: '生物',
  chinese: '语文',
  english: '英语',
}

export function SubjectModuleGrid({ subject }: { subject: SubjectMeta }) {
  const [loading, setLoading] = useState(false)
  const [, setTick] = useState(0)

  useEffect(() => {
    if (isSubjectRegistered(subject.id)) {
      setLoading(false)
      return
    }
    if (!isSubjectLoadable(subject.id)) {
      setLoading(false)
      return
    }

    setLoading(true)
    let cancelled = false

    loadSubjectData(subject.id)?.then(() => {
      if (!cancelled) {
        setLoading(false)
        setTick(t => t + 1)
      }
    }).catch(() => {
      if (!cancelled) setLoading(false)
    })

    return () => { cancelled = true }
  }, [subject.id])

  const subjectData = getSubjectData(subject.id)
  
  const modelCount = subjectData?.getAllModelIds().length || 0
  const paradigmCount = subjectData?.getParadigmList().length || 0
  const questionCount = subjectData?.getAllQuestions().length || 0
  const conceptCount = subjectData?.getAllConceptIds().length || 0
  const hasGraph = subject.id === 'physics' && subjectData?.getGraphData().nodes.length > 0

  if (loading) {
    return (
      <AppLayout showSubjectNav>
        <div className="flex items-center justify-center h-64 gap-3">
          <Spinner className="w-6 h-6 text-primary" />
          <span className="text-muted-foreground">{subject.name}学科数据加载中...</span>
        </div>
      </AppLayout>
    )
  }

  const modules: ModuleItem[] = subject.id === 'physics'
    ? [
        { id: 'guide',       label: '学科指南', icon: BookOpen,    href: `/${subject.id}/guide`,            color: subject.color, badge: null, coming: false },
        { id: 'concepts',    label: '知识节点', icon: BookOpen,    href: `/${subject.id}/concepts`,          color: '#0ea5e9',    badge: conceptCount > 0 ? `${conceptCount}个` : null, coming: conceptCount === 0 },
        { id: 'knowledge',   label: '模型详解', icon: BookMarked,  href: `/${subject.id}/models`,            color: '#10b981',    badge: modelCount > 0 ? `${modelCount}个` : null, coming: modelCount === 0 },
        { id: 'strategies',  label: '分析范式', icon: Lightbulb,   href: `/${subject.id}/strategies`,        color: '#f59e0b',    badge: paradigmCount > 0 ? `${paradigmCount}条` : null, coming: paradigmCount === 0 },
        { id: 'thinking',    label: '思维方法', icon: Zap,         href: `/${subject.id}/thinking`,          color: '#7c3aed',    badge: '7个', coming: false },
        ...(hasGraph ? [{ id: 'graph', label: '认知图谱', icon: GitBranch, href: `/${subject.id}/graph`, color: '#8b5cf6', badge: null, coming: false }] : []),
        { id: 'formulas',    label: '公式速查', icon: Calculator,  href: `/${subject.id}/formulas`,          color: '#06b6d4',    badge: null, coming: false },
        { id: 'vision',      label: '物理视界', icon: Eye,         href: `/${subject.id}/vision`,            color: '#06b6d4',    badge: '6个', coming: false },
        { id: 'exercises',   label: '练习中心', icon: Target,      href: `/${subject.id}/exercises`,         color: '#ef4444',    badge: questionCount > 0 ? `${questionCount}题` : null, coming: questionCount === 0 },
        { id: 'wrong',       label: '错题本',   icon: FlaskConical,href: `/${subject.id}/wrong`,             color: '#dc2626',    badge: null, coming: false },
        { id: 'favorites',   label: '收藏夹',   icon: Star,        href: `/${subject.id}/favorites`,         color: '#eab308',    badge: null, coming: false },
        { id: 'report',      label: '学习报告', icon: BarChart3,   href: '/learning',                         color: '#7c3aed',    badge: null, coming: false },
        { id: 'senior',      label: '高考专项', icon: GraduationCap,href: '/gaokao',                          color: '#f97316',    badge: null, coming: true },
        { id: 'foundation',  label: '强基专项', icon: Zap,         href: '/foundation',                       color: '#8b5cf6',    badge: null, coming: true },
        { id: 'competition', label: '竞赛专区', icon: Trophy,      href: `/${subject.id}/competition`,       color: '#b45309',    badge: '即将上线', coming: true },
        { id: 'paths',       label: '学习路径', icon: Route,       href: `/${subject.id}/paths`,             color: '#0369a1',    badge: '即将上线', coming: true },
      ]
    : [
        { id: 'guide', label: '学科指南', icon: BookOpen, href: `/${subject.id}/guide`, color: subject.color, badge: null, coming: false },
        { id: 'knowledge', label: '模型详解', icon: BookMarked, href: `/${subject.id}/models`, color: '#10b981', badge: modelCount > 0 ? `${modelCount}个` : null, coming: modelCount === 0 },
        { id: 'strategies', label: '分析范式', icon: Lightbulb, href: `/${subject.id}/strategies`, color: '#f59e0b', badge: paradigmCount > 0 ? `${paradigmCount}条` : null, coming: paradigmCount === 0 },
        { id: 'exercises', label: '练习中心', icon: Target, href: `/${subject.id}/exercises`, color: '#ef4444', badge: questionCount > 0 ? `${questionCount}题` : null, coming: questionCount === 0 },
        { id: 'formulas', label: '公式速查', icon: Calculator, href: `/${subject.id}/formulas`, color: '#06b6d4', badge: null, coming: false },
        { id: 'wrong', label: '错题本', icon: FlaskConical, href: `/${subject.id}/wrong`, color: '#dc2626', badge: null, coming: false },
      ]

  if (subject.id !== 'physics') {
    if (hasGraph) {
      modules.splice(1, 0, { id: 'graph', label: '认知图谱', icon: GitBranch, href: `/${subject.id}/graph`, color: '#8b5cf6', badge: null, coming: false })
    }

    // 知识节点：在认知图谱之后（有图谱则第2位，否则第1位）插入
    modules.splice(hasGraph ? 2 : 1, 0, {
      id: 'concepts', label: '知识节点', icon: BookOpen,
      href: `/${subject.id}/concepts`, color: '#0ea5e9',
      badge: conceptCount > 0 ? `${conceptCount}个` : null,
      coming: conceptCount === 0,
    })
  }

  if (subject.id !== 'physics') {
    modules.push(
      { id: 'competition', label: '竞赛专区', icon: Trophy, href: `/${subject.id}/competition`, color: '#b45309', badge: '即将上线', coming: true },
      { id: 'paths', label: '学习路径', icon: Route, href: `/${subject.id}/paths`, color: '#0369a1', badge: '即将上线', coming: true },
    )
  }

  const SubjectIcon = subjectIcons[subject.id] || BookOpen

  return (
    <AppLayout showSubjectNav>
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-5">
        <div className="text-center py-2">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm mb-3`} style={{ backgroundColor: subject.color + '18', color: subject.color }}>
            <SubjectIcon className="w-3.5 h-3.5" />
            高中{subjectNames[subject.id]} · v1.3
          </div>
          <h1 className="text-2xl font-bold mb-1">{subjectNames[subject.id]}学习中心</h1>
          <p className="text-muted-foreground text-sm">选择模块，开始学习</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {modules.map((m) => {
            const Icon = m.icon
            const available = !m.coming
            return (
              <Link key={m.id} to={available ? m.href : '#'}>
                <Card className={`h-full hover:shadow-sm transition-all ${!available ? 'opacity-60 cursor-not-allowed' : ''}`} style={{ borderColor: m.color + '33' }}>
                  <CardContent className="p-2.5 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: m.color + '18' }}>
                      <Icon className="w-4 h-4" {...({ style: { color: m.color } } as any)} />
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

        {subject.id !== 'physics' && (
          <div className="text-center pt-1">
            <Badge variant="outline" className="text-xs">{subjectNames[subject.id]}学科内容持续更新中</Badge>
          </div>
        )}
      </div>
    </AppLayout>
  )
}

export function PhysicsModuleGrid() {
  return <SubjectModuleGrid subject={{ id: 'physics', code: 'PHY', name: '物理', color: '#3b82f6', routePrefix: 'physics', modelPrefix: 'M', conceptPrefix: 'K', available: true }} />
}

export function ChemistryModuleGrid() {
  return <SubjectModuleGrid subject={{ id: 'chemistry', code: 'CHE', name: '化学', color: '#10b981', routePrefix: 'chemistry', modelPrefix: 'C', conceptPrefix: 'C', available: true }} />
}