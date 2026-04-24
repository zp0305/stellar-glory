// @ts-nocheck
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BookOpen, ChevronRight, Clock, BarChart3, GraduationCap, Route, Star, Users, Globe } from 'lucide-react'
import { gaokaoPolicies } from '@/data/gaokao/policy'
import { seniorPath } from '@/data/gaokao/policy'
import { admissionInfos } from '@/data/gaokao/admission'

export function GaokaoZoneHome() {
  const [activeTab, setActiveTab] = useState<'policy' | 'admission' | 'timeline'>('policy')

  return (
    <div className="min-h-screen bg-background">
      {/* 顶部导航 */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur border-b">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-4 py-3">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1">
              ← 首页
            </Link>
            <div className="w-px h-4 bg-border" />
            <span className="text-sm font-medium">高考专区</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* 头部 */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-sm">
            <GraduationCap className="w-3.5 h-3.5" />
            高考复习
          </div>
          <h1 className="text-3xl font-bold">高考专区</h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            高考政策解读、升学路径参考、各学科备考专项，助你科学备考
          </p>
        </div>

        {/* Tab切换 */}
        <div className="flex gap-1 bg-muted rounded-xl p-1 w-fit mx-auto">
          {([
            ['policy', '高考政策', BookOpen],
            ['admission', '升学参考', GraduationCap],
            ['timeline', '备考时间线', Route],
          ] as const).map(([key, label, Icon]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === key
                  ? 'bg-background shadow text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>

        {/* 学科入口 */}
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-6">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <Star className="w-4 h-4 text-orange-500" />
            学科备考专项
          </h3>
          <div className="grid grid-cols-3 gap-3">
            {[
              { name: '物理', href: '/physics/senior', color: '#3b82f6', bg: 'bg-blue-50' },
              { name: '化学', href: '/chemistry/senior', color: '#10b981', bg: 'bg-green-50' },
              { name: '数学', href: '/math/senior', color: '#f59e0b', bg: 'bg-amber-50' },
            ].map(s => (
              <Link
                key={s.name}
                to={s.href}
                className={`${s.bg} rounded-xl p-4 text-center hover:opacity-80 transition-opacity`}
              >
                <div className="text-lg font-bold" style={{ color: s.color }}>{s.name}</div>
                <div className="text-xs text-muted-foreground mt-1">高考专项 →</div>
              </Link>
            ))}
          </div>
        </div>

        {/* 高考政策 */}
        {activeTab === 'policy' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold flex items-center gap-2">
                <Globe className="w-5 h-5 text-blue-500" />
                高考政策与趋势
              </h2>
              <Badge variant="outline" className="text-xs">{gaokaoPolicies.length}篇</Badge>
            </div>
            <div className="space-y-3">
              {gaokaoPolicies.map(p => (
                <Link key={p.id} to={`/gaokao/policy/${p.id}`}>
                  <Card className="hover:shadow-md hover:border-primary/30 transition-all group">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-mono text-muted-foreground">{p.id}</span>
                            <Badge variant="outline" className="text-xs">{p.category === 'policy' ? '政策' : p.category === 'trend' ? '趋势' : '分析'}</Badge>
                          </div>
                          <h3 className="font-semibold group-hover:text-primary transition-colors">{p.title}</h3>
                          <p className="text-sm text-muted-foreground mt-0.5">{p.subtitle}</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1 group-hover:text-primary transition-colors" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* 升学参考 */}
        {activeTab === 'admission' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-500" />
                升学路径参考
              </h2>
              <Badge variant="outline" className="text-xs">{admissionInfos.length}篇</Badge>
            </div>
            <div className="space-y-3">
              {admissionInfos.map(a => (
                <Link key={a.id} to={`/gaokao/admission/${a.id}`}>
                  <Card className="hover:shadow-md hover:border-primary/30 transition-all group">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-mono text-muted-foreground">{a.id}</span>
                            <Badge variant="outline" className="text-xs">{a.category === 'strong_basis' ? '强基' : a.category === 'subject_combination' ? '选科' : a.category === 'competition' ? '竞赛' : '升学'}</Badge>
                          </div>
                          <h3 className="font-semibold group-hover:text-primary transition-colors">{a.title}</h3>
                          <p className="text-sm text-muted-foreground mt-0.5">{a.subtitle}</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1 group-hover:text-primary transition-colors" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* 备考时间线 */}
        {activeTab === 'timeline' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-green-500" />
                高考备考时间线
              </h2>
            </div>
            <div className="relative">
              {/* 时间线竖线 */}
              <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />

              <div className="space-y-4">
                {seniorPath.phases.map((phase, i) => (
                  <div key={phase.phase} className="relative flex gap-4 pl-0">
                    {/* 圆点 */}
                    <div className="relative z-10 w-10 h-10 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-primary">{i + 1}</span>
                    </div>

                    <Card className="flex-1 hover:shadow-sm transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold">{phase.phase}</h3>
                            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                              <Clock className="w-3 h-3" />
                              {phase.period}
                            </p>
                          </div>
                        </div>
                        <ul className="space-y-1">
                          {phase.goals.map((g, gi) => (
                            <li key={gi} className="text-sm text-muted-foreground flex items-start gap-1.5">
                              <span className="text-primary mt-1">·</span>
                              {g}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-3 flex items-center gap-2">
                          <span className="text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded-full">⚠️ {phase.warning}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// 高考政策详情页
export function GaokaoPolicyDetail() {
  const { id } = useParams<{ id: string }>()
  const policy = gaokaoPolicies.find(p => p.id === id)
  if (!policy) return <div className="min-h-screen flex items-center justify-center"><p className="text-muted-foreground">文章不存在</p></div>
  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur border-b">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center gap-3">
          <Link to="/gaokao" className="text-sm text-muted-foreground hover:text-foreground">← 高考专区</Link>
          <div className="w-px h-4 bg-border" />
          <span className="text-sm font-medium">{policy.title}</span>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="mb-6">
          <Badge variant="outline" className="mb-3">{policy.id}</Badge>
          <h1 className="text-2xl font-bold mb-2">{policy.title}</h1>
          <p className="text-muted-foreground">{policy.subtitle}</p>
          <p className="text-xs text-muted-foreground mt-2">信息来源：{policy.source}（{policy.updateYear}年）</p>
        </div>
        <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{
          __html: policy.content.replace(/\n/g, '<br>')
            .replace(/^## (.+)$/gm, '<h2 class="text-lg font-bold mt-6 mb-2">$1</h2>')
            .replace(/^### (.+)$/gm, '<h3 class="text-base font-semibold mt-4 mb-1">$1</h3>')
            .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
            .replace(/\|(.+)\|/g, (m) => {
              const cells = m.split('|').filter(c => c.trim())
              if (cells.every(c => c.match(/^-+$/))) return ''
              return '<tr>' + cells.map(c => `<td class="border px-3 py-1.5">${c.trim()}</td>`).join('') + '</tr>'
            })
        }} />
        {/* 简化渲染：处理表格 */}
        <div className="overflow-x-auto mt-4">
          {policy.content.includes('|') && (
            <table className="w-full text-sm border-collapse">
              {policy.content.split('\n').filter(l => l.includes('|')).slice(0, 20).map((row, i) => (
                <tr key={i} className={i === 0 ? 'bg-muted/50 font-semibold' : 'border-b'}>
                  {row.split('|').filter(c => c.trim() && !c.match(/^-+$/)).map((cell, j) => (
                    <td key={j} className="px-3 py-2 text-sm">{cell.trim()}</td>
                  ))}
                </tr>
              ))}
            </table>
          )}
        </div>
      </div>
    </div>
  )
}

// 升学参考详情页
export function GaokaoAdmissionDetail() {
  const { id } = useParams<{ id: string }>()
  const info = admissionInfos.find(a => a.id === id)
  if (!info) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center"><p className="text-muted-foreground">文章不存在</p></div>
    </div>
  )
  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur border-b">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center gap-3">
          <Link to="/gaokao" className="text-sm text-muted-foreground hover:text-foreground">← 高考专区</Link>
          <div className="w-px h-4 bg-border" />
          <span className="text-sm font-medium">{info.title}</span>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="mb-6">
          <Badge variant="outline" className="mb-3">{info.id}</Badge>
          <h1 className="text-2xl font-bold mb-2">{info.title}</h1>
          <p className="text-muted-foreground">{info.subtitle}</p>
          <p className="text-xs text-muted-foreground mt-2">信息来源：{info.source}（{info.updateYear}年）</p>
        </div>
        <div className="space-y-1 text-sm leading-relaxed">
          {(info.content || '').split('\n').filter((l: string) => l.trim()).map((line: string, i: number) => {
            if (line.startsWith('## ')) return <h2 key={i} className="text-lg font-bold mt-6 mb-2">{line.replace('## ', '')}</h2>
            if (line.startsWith('### ')) return <h3 key={i} className="text-base font-semibold mt-4 mb-1">{line.replace('### ', '')}</h3>
            if (line.startsWith('#### ')) return <h4 key={i} className="text-sm font-semibold mt-3 mb-1">{line.replace('#### ', '')}</h4>
            if (line.match(/^\*\*.*?\*\*$/)) return <p key={i} className="font-semibold mt-3">{line.replace(/\*\*/g, '')}</p>
            if (line.trim() && !line.startsWith('|') && !line.startsWith('-') && !line.match(/^\|.+\|$/)) return <p key={i} className="text-sm text-muted-foreground/80">{line}</p>
            return null
          })}
        </div>
        {/* 简化表格渲染 */}
        <div className="overflow-x-auto mt-4">
          {info && info.content && info.content.includes('|') && (
            <table className="w-full text-sm border-collapse">
              {info.content.split('\n').filter(l => l.includes('|') && !l.match(/^\|.+\|$/).every(c => !c.match(/^-+$/))).slice(0, 15).map((row, i) => (
                <tr key={i} className={i === 0 ? 'bg-muted/50 font-semibold' : 'border-b'}>
                  {row.split('|').filter(c => c.trim() && !String(c).match(/^-+$/)).map((cell, j) => (
                    <td key={j} className="px-3 py-2 text-sm">{cell.trim()}</td>
                  ))}
                </tr>
              ))}
            </table>
          )}
        </div>
      </div>
    </div>
  )
}
