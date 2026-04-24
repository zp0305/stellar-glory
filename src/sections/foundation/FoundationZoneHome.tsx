import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BookOpen, ChevronRight, Clock, BarChart3, Users, GraduationCap, Star, Zap, Brain, Microscope } from 'lucide-react'
import { foundationPolicies, foundationPath } from '@/data/foundation/policy'

export function FoundationZoneHome() {
  const [activeTab, setActiveTab] = useState<'policy'|'interview'|'timeline'>('policy')
  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur border-b">
        <div className="max-w-4xl mx-auto px-4 flex items-center gap-4 py-3">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">← 首页</Link>
          <div className="w-px h-4 bg-border" /><span className="text-sm font-medium text-primary">强基计划</span>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-sm"><Zap className="w-3.5 h-3.5" />强基计划</div>
          <h1 className="text-3xl font-bold">强基计划专区</h1>
          <p className="text-muted-foreground max-w-lg mx-auto">面向985强基计划的政策解读、超纲知识、真题训练与面试准备</p>
        </div>
        <div className="flex gap-1 bg-muted rounded-xl p-1 w-fit mx-auto">
          {([['policy','强基政策',BookOpen],['interview','面试准备',Microscope],['timeline','备考时间线',BarChart3]] as const).map(([k,l,I])=>(
            <button key={k} onClick={()=>setActiveTab(k as any)} className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab===k?'bg-background shadow text-foreground':'text-muted-foreground hover:text-foreground'}`}><I className="w-4 h-4" />{l}</button>
          ))}
        </div>
        <div className="bg-gradient-to-r from-primary/5 to-purple-50 rounded-2xl p-6">
          <h3 className="font-semibold mb-4">学科强基专项</h3>
          <div className="grid grid-cols-3 gap-3">
            {[{n:'物理',h:'/physics/foundation',c:'#3b82f6',bg:'bg-blue-50'},{n:'化学',h:'/chemistry/foundation',c:'#10b981',bg:'bg-green-50'},{n:'数学',h:'/math/foundation',c:'#f59e0b',bg:'bg-amber-50'}].map(s=>(
              <Link key={s.n} to={s.h} className={`${s.bg} rounded-xl p-4 text-center hover:opacity-80 transition-opacity`}>
                <div className="text-lg font-bold" style={{color:s.c}}>{s.n}</div><div className="text-xs text-muted-foreground mt-1">强基专项 →</div>
              </Link>
            ))}
          </div>
        </div>
        {activeTab==='policy'&&(<div className="space-y-4">
          <div className="flex items-center justify-between"><h2 className="text-lg font-bold flex items-center gap-2"><GraduationCap className="w-5 h-5 text-primary" />强基政策</h2><Badge variant="outline" className="text-xs">{foundationPolicies.length}篇</Badge></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {foundationPolicies.map(p=>(
              <Link key={p.id} to={`/foundation/policy/${p.id}`}>
                <Card className="hover:shadow-md hover:border-primary/30 transition-all group h-full">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between gap-2 mb-2"><div><span className="text-xs font-mono text-muted-foreground">{p.id}</span><Badge variant="outline" className="ml-2 text-xs">{p.category==='overview'?'总览':p.category==='process'?'流程':p.category==='exam_format'?'校测':'选专业'}</Badge></div><ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary" /></div>
                    <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">{p.title}</h3><p className="text-xs text-muted-foreground mt-1">{p.subtitle}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>)}
        {activeTab==='interview'&&(<div className="space-y-4">
          <h2 className="text-lg font-bold flex items-center gap-2"><Brain className="w-5 h-5 text-purple-500" />面试准备</h2>
          <Card className="bg-gradient-to-br from-purple-50 to-background">
            <CardContent className="p-6 space-y-3">
              <p className="text-sm text-muted-foreground">面试准备内容正在整理中。</p>
              {[{t:'各校面试形式与流程',d:'清北/华五/其他高校'},{t:'学科素养面试题精讲',d:'物理概念深度理解类'},{t:'通用面试技巧',d:'自我介绍、答题思路'},{t:'模拟面试案例集',d:'10个真实场景'}].map((x,i)=>(
                <div key={i} className="bg-background rounded-xl p-4 border"><h3 className="font-semibold text-sm">{x.t}</h3><p className="text-xs text-muted-foreground">{x.d}</p></div>
              ))}
            </CardContent>
          </Card>
        </div>)}
        {activeTab==='timeline'&&(<div className="space-y-4">
          <h2 className="text-lg font-bold flex items-center gap-2"><BarChart3 className="w-5 h-5 text-green-500" />强基备考时间线</h2>
          <div className="relative"><div className="absolute left-5 top-0 bottom-0 w-px bg-border" />
            {foundationPath.phases.map((phase,i)=>(
              <div key={phase.phase} className="relative flex gap-4 mb-4">
                <div className="relative z-10 w-10 h-10 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center flex-shrink-0"><span className="text-xs font-bold text-primary">{i+1}</span></div>
                <Card className="flex-1"><CardContent className="p-4">
                  <h3 className="font-semibold">{phase.phase}</h3><p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5"><Clock className="w-3 h-3" />{phase.period}</p>
                  <ul className="mt-2 space-y-1">{phase.goals.map((g,gi)=>(<li key={gi} className="text-sm text-muted-foreground flex items-start gap-1.5"><span className="text-primary mt-0.5">·</span>{g}</li>))}</ul>
                  <p className="text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded mt-2">💡 {phase.focus}</p>
                </CardContent></Card>
              </div>
            ))}
          </div>
        </div>)}
      </div>
    </div>
  )
}

export function FoundationPolicyDetail() {
  const { id } = useParams<{ id: string }>()
  const p = foundationPolicies.find(x=>x.id===id)
  if(!p) return <div className="min-h-screen flex items-center justify-center"><p className="text-muted-foreground">文章不存在</p></div>
  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur border-b">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center gap-3">
          <Link to="/foundation" className="text-sm text-muted-foreground hover:text-foreground">← 强基专区</Link>
          <div className="w-px h-4 bg-border" /><span className="text-sm font-medium">{p.title}</span>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="mb-6"><Badge variant="outline" className="mb-3">{p.id}</Badge><h1 className="text-2xl font-bold mb-2">{p.title}</h1><p className="text-muted-foreground mb-2">{p.subtitle}</p><p className="text-xs text-muted-foreground">来源：{p.source}（{p.updateYear}年）</p></div>
        <div className="space-y-1 text-sm leading-relaxed">
          {p.content.split('\n').filter(l=>l.trim()).map((line,i)=>{
            if(line.startsWith('## ')) return <h2 key={i} className="text-lg font-bold mt-6 mb-2">{line.slice(3)}</h2>
            if(line.startsWith('### ')) return <h3 key={i} className="text-base font-semibold mt-4 mb-1">{line.slice(4)}</h3>
            if(line.match(/^\|.+\|$/)&&!line.match(/^\|.+\|.+\|$/)) return null
            return <p key={i} className="text-muted-foreground/80">{line}</p>
          })}
        </div>
      </div>
    </div>
  )
}
