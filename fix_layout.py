#!/usr/bin/env python3
"""Fix all layout issues identified from screenshots."""

import re

base = '/workspace/xingyao/src/sections'

# ===== 1. PhysicsGuidePage: Fix module grid cards =====
guide = f'{base}/PhysicsGuidePage.tsx'
with open(guide, 'r', encoding='utf-8') as f:
    c = f.read()

# Replace the entire card content in the grid
old_card = """<CardContent className="p-4 flex flex-col gap-2">
                    <div className="flex items-start gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: m.color + '18' }}
                      >
                        {m.available
                          ? <Icon className="w-5 h-5" style={{ color: m.color }} />
                          : <Lock className="w-4 h-4 text-muted-foreground" />
                        }
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <span className="font-semibold text-sm">{m.label}</span>
                          {m.badge && (
                            <Badge
                              className="text-xs"
                              style={{ backgroundColor: m.color + '18', color: m.color }}
                            >
                              {m.badge}
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">{m.description}</p>
                      </div>
                    </div>
                    {m.available && (
                      <div className="flex items-center justify-end">
                        <ChevronRight className="w-4 h-4 text-muted-foreground" />
                      </div>
                    )}
                  </CardContent>"""

new_card = """<CardContent className="p-3 flex flex-col gap-0">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: m.color + '18' }}
                      >
                        {m.available
                          ? <Icon className="w-4 h-4" style={{ color: m.color }} />
                          : <Lock className="w-3.5 h-3.5 text-muted-foreground" />
                        }
                      </div>
                      <div className="flex-1 min-w-0 flex items-center gap-1.5 flex-wrap">
                        <span className="font-semibold text-sm leading-snug">{m.label}</span>
                        {m.badge && (
                          <span className="text-xs px-1.5 py-0.5 rounded font-medium" style={{ backgroundColor: m.color + '18', color: m.color }}>
                            {m.badge}
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground leading-snug pl-0.5">{m.description}</p>
                  </CardContent>"""

c = c.replace(old_card, new_card)
with open(guide, 'w', encoding='utf-8') as f:
    f.write(c)
print('OK PhysicsGuidePage.tsx card fix')


# ===== 2. ModelList.tsx: Fix card height + add description =====
mlist = f'{base}/ModelList.tsx'
with open(mlist, 'r', encoding='utf-8') as f:
    c = f.read()

# Replace the card content to be more compact
old_mcard = """<CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <span className="text-xs text-muted-foreground">{model.id}</span>
                          <h3 className="font-medium group-hover:text-primary transition-colors">
                            {model.name}
                          </h3>
                        </div>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${difficultyLabels[model.difficulty].color}`}>
                          {difficultyLabels[model.difficulty].label}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {model.estimated_time}分钟
                        </span>
                      </div>
                      
                      {model.progress > 0 && (
                        <div className="flex items-center gap-2">
                          <Progress value={model.progress} className="flex-1 h-1" />
                          <span className="text-xs text-muted-foreground">{model.progress}%</span>
                        </div>
                      )}
                      
                      {model.progress === 100 && (
                        <div className="flex items-center gap-1 text-green-600 text-xs">
                          <CheckCircle2 className="w-3 h-3" />
                          已完成
                        </div>
                      )}
                    </CardContent>"""

new_mcard = """<CardContent className="p-3 flex flex-col gap-1.5">
                      <div className="flex items-start justify-between gap-1">
                        <div className="flex-1 min-w-0">
                          <span className="text-xs text-muted-foreground font-mono">{model.id}</span>
                          <h3 className="font-medium text-sm group-hover:text-primary transition-colors leading-snug">
                            {model.name}
                          </h3>
                        </div>
                        <span className={`text-xs px-1.5 py-0.5 rounded-full flex-shrink-0 mt-4 ${difficultyLabels[model.difficulty].color}`}>
                          {difficultyLabels[model.difficulty].label}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {model.estimated_time}分钟
                        </span>
                      </div>
                      {model.progress > 0 && (
                        <div className="flex items-center gap-2">
                          <Progress value={model.progress} className="flex-1 h-1" />
                          <span className="text-xs text-muted-foreground">{model.progress}%</span>
                        </div>
                      )}
                      {model.progress === 100 && (
                        <div className="flex items-center gap-1 text-green-600 text-xs">
                          <CheckCircle2 className="w-3 h-3" />已完成
                        </div>
                      )}
                    </CardContent>"""

c = c.replace(old_mcard, new_mcard)

# Fix grid: 1 col on mobile, 2 on md, 3 on lg
c = c.replace(
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3",
    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2"
)

# Fix chapter header
c = c.replace(
    "<h2 className=\"text-lg font-semibold mb-3 flex items-center gap-2\">",
    "<h2 className=\"text-base font-semibold mb-2 flex items-center gap-2\">"
)

with open(mlist, 'w', encoding='utf-8') as f:
    f.write(c)
print('OK ModelList.tsx')


# ===== 3. StrategyPages.tsx: Fix filter bar + card layout =====
sp = f'{base}/StrategyPages.tsx'
with open(sp, 'r', encoding='utf-8') as f:
    c = f.read()

# Replace module filter tabs (make them scrollable/compact)
old_tabs = """<div className="flex items-center gap-2 overflow-x-auto pb-2">
          {strategyModules.map((m) => (
            <button
              key={m.id}
              onClick={() => setActiveModule(m.id)}
              className={cn(
                'px-4 py-1.5 rounded-full text-sm whitespace-nowrap transition-all',
                activeModule === m.id
                  ? 'bg-primary text-white font-medium'
                  : 'bg-muted hover:bg-muted/80 text-muted-foreground'
              )}
            >
              {m.label} ({m.count})
            </button>
          ))}
        </div>"""

new_tabs = """<div className="flex items-center gap-1.5 overflow-x-auto pb-1 -mx-1 px-1">
          {strategyModules.map((m) => (
            <button
              key={m.id}
              onClick={() => setActiveModule(m.id)}
              className={cn(
                'px-3 py-1 rounded-full text-xs whitespace-nowrap transition-all flex-shrink-0',
                activeModule === m.id
                  ? 'bg-primary text-white font-medium'
                  : 'bg-muted hover:bg-muted/80 text-muted-foreground'
              )}
            >
              {m.label} {m.count}
            </button>
          ))}
        </div>"""

c = c.replace(old_tabs, new_tabs)

# Fix search bar to be more compact
c = c.replace(
    "<Input placeholder=\"搜索套路...\" value={search} onChange={(e) => setSearch(e.target.value)} className=\"max-w-xs\" />",
    "<Input placeholder=\"搜索套路...\" value={search} onChange={(e) => setSearch(e.target.value)} className=\"w-36 sm:w-48\" />"
)

# Fix difficulty filter buttons
c = c.replace(
    '<div className="flex items-center gap-2">\n            <span className="text-sm text-muted-foreground">难度：</span>',
    '<div className="flex items-center gap-1.5">\n            <span className="text-xs text-muted-foreground">难度：</span>'
)

# Fix strategy card - make it compact with horizontal layout
old_scard = """<Card className="group hover:shadow-md transition-all">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <Badge className="text-xs mb-1">"""
new_scard = """<Card className="group hover:shadow-md transition-all">
                <CardHeader className="pb-1.5 pt-3 px-4">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <Badge className="text-xs mb-1">"""

c = c.replace(old_scard, new_scard)

# Fix card content padding
c = c.replace(
    "<CardContent className=\"pt-0 pb-4\">",
    "<CardContent className=\"pt-0 pb-3 px-4\">"
)

with open(sp, 'w', encoding='utf-8') as f:
    f.write(c)
print('OK StrategyPages.tsx')


# ===== 4. CognitionGraphPage: Fix top bar (remove duplicate nav, use AppLayout) =====
cg = f'{base}/CognitionGraphPage.tsx'
with open(cg, 'r', encoding='utf-8') as f:
    c = f.read()

# Remove the "返回" button from the top bar since AppLayout already has left sidebar
old_topbar = """<div className="flex items-center justify-between px-4 py-2.5 border-b bg-card sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="gap-1" onClick={() => navigate('/physics')}>
            <ArrowLeft className="w-4 h-4" /> 返回
          </Button>
          <GitBranch className="w-5 h-5 text-primary" />
          <h1 className="text-lg font-bold">物理 · 认知图谱</h1>
          <span className="text-xs text-muted-foreground hidden sm:block">
            {graphData.nodes.length} 节点 · {graphData.edges.length} 条关系
          </span>
        </div>"""

new_topbar = """<div className="flex items-center justify-between px-4 py-2 border-b bg-card sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <GitBranch className="w-5 h-5 text-primary" />
          <h1 className="text-base font-bold">物理 · 认知图谱</h1>
          <span className="text-xs text-muted-foreground hidden sm:block">
            {graphData.nodes.length} 节点 · {graphData.edges.length} 条关系
          </span>
        </div>"""

c = c.replace(old_topbar, new_topbar)

# Remove the legend bar since it's redundant with the sidebar info
old_legend = """      {/* 图例条 */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 px-4 py-1.5 text-xs text-muted-foreground border-b bg-muted/20">
        <span className="font-medium text-foreground">节点：</span>
        <span className="w-3 h-2 rounded-sm border border-purple-500 inline-block" />模块
        <span className="w-2 h-2 rounded-full bg-green-500 opacity-70 inline-block" />基础
        <span className="w-2 h-2 rounded-full bg-yellow-500 opacity-70 inline-block" />进阶
        <span className="w-2 h-2 rounded-full bg-red-500 opacity-70 inline-block" />综合
        <span className="w-4 h-0.5 bg-yellow-500 inline-block" />前置
        <span className="w-4 h-0.5 bg-indigo-300 inline-block" />包含
      </div>"""

new_legend = """      {/* 图例条 */}
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 px-4 py-1.5 text-xs text-muted-foreground border-b bg-muted/10">
        <span className="w-2.5 h-1.5 rounded-sm bg-purple-400 inline-block" />模块
        <span className="w-2 h-1.5 rounded-full bg-green-500 inline-block" />基础
        <span className="w-2 h-1.5 rounded-full bg-yellow-500 inline-block" />进阶
        <span className="w-2 h-1.5 rounded-full bg-red-500 inline-block" />综合
        <span className="w-4 h-0.5 bg-yellow-500 inline-block align-middle" />前置
        <span className="text-muted-foreground/60 ml-1">双指缩放 · 拖拽移动</span>
      </div>"""

c = c.replace(old_legend, new_legend)

with open(cg, 'w', encoding='utf-8') as f:
    f.write(c)
print('OK CognitionGraphPage.tsx')


# ===== 5. SiteHome.tsx: Remove stat cards, move recent learning up =====
sh = f'{base}/SiteHome.tsx'
with open(sh, 'r', encoding='utf-8') as f:
    c = f.read()

# Remove the large stat cards section
old_stats = """        {/* 学习统计（如果有数据的话） */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { icon: Flame, label: '连续学习', value: `${mockStats.streak}天`, color: 'text-orange-500', bg: 'bg-orange-50' },
            { icon: Clock, label: '今日学习', value: `${mockStats.todayTime}分钟`, color: 'text-blue-500', bg: 'bg-blue-50' },
            { icon: CheckCircle2, label: '总正确率', value: `${mockStats.accuracy}%`, color: 'text-green-500', bg: 'bg-green-50' },
            { icon: Target, label: '待复习', value: `${mockStats.wrongCount}题`, color: 'text-red-500', bg: 'bg-red-50' },
          ].map((stat) => (
            <Card key={stat.label} className={stat.bg}>
              <CardContent className="p-4 flex items-center gap-3">
                <stat.icon className={`w-8 h-8 ${stat.color} flex-shrink-0`} />
                <div>
                  <p className="text-xl font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>"""

new_stats = """        {/* 轻量数据条 */}
        <div className="flex items-center justify-center gap-4 py-2 text-xs text-muted-foreground border-y border-dashed">
          <span className="flex items-center gap-1"><Flame className="w-3.5 h-3.5 text-orange-400" />连续{mockStats.streak}天</span>
          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-blue-400" />今日{mockStats.todayTime}分钟</span>
          <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-green-400" />正确率{mockStats.accuracy}%</span>
          {mockStats.wrongCount > 0 && (
            <Link to="/physics/wrong" className="flex items-center gap-1 text-red-400 hover:underline">
              <Target className="w-3.5 h-3.5" />{mockStats.wrongCount}题待复习
            </Link>
          )}
        </div>"""

c = c.replace(old_stats, new_stats)

# Remove the "最近学习" section (move to after hero buttons)
old_recent = """        {/* 最近学习 */}
        {mockStats.recentTopics.length > 0 && (
          <section>
            <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />最近学习
            </h2>
            <div className="flex flex-wrap gap-2">
              {mockStats.recentTopics.map((topic) => (
                <Link key={topic} to="/physics/models/M01">
                  <Badge variant="outline" className="px-3 py-1.5 text-sm hover:bg-primary/5 cursor-pointer">
                    {topic}
                  </Badge>
                </Link>
              ))}
            </div>
          </section>
        )}"""

new_recent = ""

c = c.replace(old_recent, new_recent)

# Add "最近学习" after the hero buttons section
old_hero_end = """          <div className="flex items-center justify-center gap-4 pt-2">
            <Link to="/physics">
              <Button size="lg" className="gap-2">
                <FlaskConical className="w-5 h-5" />开始学习 · 物理
              </Button>
            </Link>
            <Link to="/physics/graph">
              <Button size="lg" variant="outline" className="gap-2">
                <GitBranch className="w-5 h-5" />查看认知图谱
              </Button>
            </Link>
          </div>
        </section>"""

new_hero_end = """          <div className="flex items-center justify-center gap-3 pt-2">
            <Link to="/physics">
              <Button size="lg" className="gap-2">开始学习 · 物理</Button>
            </Link>
            <Link to="/physics/graph">
              <Button size="lg" variant="outline" className="gap-2">
                <GitBranch className="w-4 h-4" />认知图谱
              </Button>
            </Link>
          </div>

          {/* 最近学习 */}
          {mockStats.recentTopics.length > 0 && (
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="text-xs text-muted-foreground self-center mr-1">最近：</span>
              {mockStats.recentTopics.map((topic) => (
                <Link key={topic} to="/physics/models/M01">
                  <Badge variant="outline" className="px-2 py-1 text-xs hover:bg-primary/5 cursor-pointer">
                    {topic}
                  </Badge>
                </Link>
              ))}
            </div>
          )}
        </section>"""

c = c.replace(old_hero_end, new_hero_end)

with open(sh, 'w', encoding='utf-8') as f:
    f.write(c)
print('OK SiteHome.tsx')


print('\nAll fixes applied. Run: cd /workspace/xingyao && npm run build')
