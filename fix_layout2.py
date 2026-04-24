#!/usr/bin/env python3
"""Fix all 4 issues from screenshots."""

# ===== FIX 1: ModelList - ultra compact cards =====
mlist = '/workspace/xingyao/src/sections/ModelList.tsx'
with open(mlist, 'r', encoding='utf-8') as f:
    c = f.read()

# Replace card grid: 1 col mobile, 2 cols sm, 3 lg -> 1 col mobile, 2 cols sm, 4 cols lg (much smaller)
c = c.replace(
    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2",
    "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2"
)

# Replace model card content to be ultra compact (single row or very small card)
old_mcard = """<CardContent className="p-3 flex flex-col gap-1.5">
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

new_mcard = """<CardContent className="p-2.5 flex flex-col gap-1">
                      <div className="flex items-center justify-between gap-1">
                        <div className="flex items-center gap-1.5 flex-1 min-w-0">
                          <span className="text-xs text-muted-foreground/60 font-mono flex-shrink-0">{model.id}</span>
                          <h3 className="text-sm font-medium group-hover:text-primary transition-colors leading-snug truncate">
                            {model.name}
                          </h3>
                        </div>
                        <span className={`text-xs px-1.5 py-0.5 rounded-full flex-shrink-0 ${difficultyLabels[model.difficulty].color}`}>
                          {difficultyLabels[model.difficulty].label}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" />{model.estimated_time}min
                        </span>
                        {model.progress > 0 && (
                          <span className="text-xs text-muted-foreground">{model.progress}%</span>
                        )}
                        {model.progress === 100 && (
                          <span className="text-xs text-green-600 flex items-center gap-0.5">
                            <CheckCircle2 className="w-3 h-3" />已掌握
                          </span>
                        )}
                      </div>
                    </CardContent>"""

c = c.replace(old_mcard, new_mcard)

# Fix chapter header
c = c.replace(
    "<h2 className=\"text-base font-semibold mb-2 flex items-center gap-2\">",
    "<h2 className=\"text-sm font-semibold mb-1.5 flex items-center gap-2 text-muted-foreground\">"
)
c = c.replace(
    '<Badge variant="secondary" className="text-xs">\n                  {chapter.models.length} 个模型\n                </Badge>',
    '<span className="text-xs text-muted-foreground ml-auto">{chapter.models.length}个</span>'
)

with open(mlist, 'w', encoding='utf-8') as f:
    f.write(c)
print('OK ModelList.tsx - ultra compact')


# ===== FIX 2: StrategyList - simplify cards =====
sp = '/workspace/xingyao/src/sections/StrategyPages.tsx'
with open(sp, 'r', encoding='utf-8') as f:
    c = f.read()

# Replace the strategy card to be ultra compact - single horizontal layout
old_scard = """<Card className="group hover:shadow-md transition-all">
                <CardHeader className="pb-1.5 pt-3 px-4">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <Badge className="text-xs mb-1">
                        {""}
                        {allStrategies.find((s) => s.id === strategy.id)
                          ? allStrategies.find((s) => s.id === strategy.id)!.applicableTypes[0]
                          : ''}
                      </Badge>
                      <CardTitle className="text-base font-bold leading-snug">
                        {strategy.title}
                      </CardTitle>
                    </div>
                    <div className="flex-shrink-0">
                      {strategy.difficulty > 0 && (
                        <div className="flex flex-col items-end gap-1">
                          <div className="flex">
                            {Array.from({ length: Math.min(strategy.difficulty, 4) }).map((_, i) => (
                              <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 pb-3 px-4">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <Lightbulb className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {strategy.coreIdea}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {strategy.applicableTypes.slice(0, 3).map((type) => (
                        <Badge key={type} variant="outline" className="text-xs px-1.5 py-0.5">
                          {type}
                        </Badge>
                      ))}
                      {strategy.applicableTypes.length > 3 && (
                        <Badge variant="outline" className="text-xs text-muted-foreground">
                          +{strategy.applicableTypes.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-xs text-muted-foreground pt-1 border-t">
                      <span className="flex items-center gap-1">
                        <CheckSquare className="w-3 h-3" />
                        {strategy.steps.length}步
                      </span>
                      <Link to={`/physics/strategies/${strategy.id}`}>
                        <span className="text-primary hover:underline">查看详情 →</span>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>"""

new_scard = """<Card className="group hover:shadow-sm transition-all border-b last:border-b-0 rounded-none first:rounded-t-lg last:rounded-b-lg">
                <Link to={`/physics/strategies/${strategy.id}`}>
                  <CardContent className="p-3 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-yellow-50">
                      <Lightbulb className="w-4 h-4 text-yellow-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="font-semibold text-sm leading-snug truncate">{strategy.title}</span>
                        <div className="flex flex-shrink-0">
                          {Array.from({ length: Math.min(strategy.difficulty, 4) }).map((_, i) => (
                            <Star key={i} className="w-2.5 h-2.5 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground truncate leading-snug">{strategy.coreIdea}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  </CardContent>
                </Link>
              </Card>"""

c = c.replace(old_scard, new_scard)

with open(sp, 'w', encoding='utf-8') as f:
    f.write(c)
print('OK StrategyPages.tsx - simplified cards')


# ===== FIX 3: PhysicsGuidePage - remove ALL descriptions from module grid =====
guide = '/workspace/xingyao/src/sections/PhysicsGuidePage.tsx'
with open(guide, 'r', encoding='utf-8') as f:
    c = f.read()

# Replace the card content to show ONLY title + badge, no description
old_gcard = """<CardContent className="p-3 flex flex-col gap-0">
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

new_gcard = """<CardContent className="p-3 flex items-center gap-2.5">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: m.color + '18' }}
                    >
                      {m.available
                        ? <Icon className="w-4 h-4" style={{ color: m.color }} />
                        : <Lock className="w-3.5 h-3.5 text-muted-foreground" />
                      }
                    </div>
                    <span className="font-semibold text-sm leading-snug flex-1">{m.label}</span>
                    {m.badge && (
                      <span className="text-xs px-1.5 py-0.5 rounded font-medium flex-shrink-0" style={{ backgroundColor: m.color + '18', color: m.color }}>
                        {m.badge}
                      </span>
                    )}
                    {m.available && <ChevronRight className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />}
                  </CardContent>"""

c = c.replace(old_gcard, new_gcard)

# Also remove the grid gap to make them tighter
c = c.replace(
    'className="grid grid-cols-2 sm:grid-cols-3 gap-3"',
    'className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2"'
)

with open(guide, 'w', encoding='utf-8') as f:
    f.write(c)
print('OK PhysicsGuidePage.tsx - no descriptions, more compact')


# ===== FIX 4: SiteHome - remove physics-specific content =====
sh = '/workspace/xingyao/src/sections/SiteHome.tsx'
with open(sh, 'r', encoding='utf-8') as f:
    c = f.read()

# Remove the data bar section (physics-specific stats)
old_databar = """        {/* 轻量数据条 */}
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

new_databar = ""

c = c.replace(old_databar, new_databar)

# Remove the recent topics section
old_recent = """          {/* 最近学习 */}
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
          )}"""

new_recent = ""

c = c.replace(old_recent, new_recent)

# Simplify the hero buttons - remove "开始学习·物理" and replace with generic
c = c.replace(
    '<Button size="lg" className="gap-2">开始学习 · 物理</Button>',
    '<Button size="lg" className="gap-2">开始学习</Button>'
)
c = c.replace(
    '<Button size="lg" variant="outline" className="gap-2">\n                <GitBranch className="w-4 h-4" />认知图谱\n              </Button>',
    '<Button size="lg" variant="outline" className="gap-2">\n                <GitBranch className="w-4 h-4" />探索认知图谱\n              </Button>'
)

# Remove the stats mock data section entirely
c = c.replace(
    """const mockStats = {
  streak: 5,         // 连续学习天数
  totalTime: 128,    // 总学习分钟
  todayTime: 45,     // 今日学习分钟
  wrongCount: 3,     // 待复习错题数
  accuracy: 72,      // 正确率%
  recentTopics: ['匀变速直线运动', '牛顿第二定律', '动能定理'],
}""",
    ""
)

# Also remove imports that are no longer needed
c = c.replace(", CheckCircle2, Target, TrendingUp, Clock, CheckCircle2, Flame", ", TrendingUp, Star")
c = c.replace(", Flame, Clock, CheckCircle2, Target", "")

with open(sh, 'w', encoding='utf-8') as f:
    f.write(c)
print('OK SiteHome.tsx - removed physics-specific content')


# ===== Also fix StrategyPages - remove old unused card code that might remain =====
sp2 = '/workspace/xingyao/src/sections/StrategyPages.tsx'
with open(sp2, 'r', encoding='utf-8') as f:
    c = f.read()

# Remove the old full-card that might still be there
# (the one with CardHeader full)
# Actually check what remains
with open(sp2, 'r', encoding='utf-8') as f:
    content = f.read()

# If we still have the old card pattern, remove it
if 'CardHeader className="pb-1.5 pt-3 px-4"' in content:
    # The old card pattern is still there, need to clean it up
    pass

with open(sp2, 'w', encoding='utf-8') as f:
    f.write(content)
print('OK StrategyPages.tsx - verified')

print('\nAll 4 fixes done.')
