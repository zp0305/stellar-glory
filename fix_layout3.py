#!/usr/bin/env python3
"""Final layout fix: no vertical text, no descriptions on nav/menu pages."""

# ===== FIX 1: PhysicsGuidePage module grid =====
# Replace card to force single-line, no wrapping
guide = '/workspace/xingyao/src/sections/PhysicsGuidePage.tsx'
with open(guide, 'r', encoding='utf-8') as f:
    c = f.read()

# Fix module grid card - FORCE single line with flex-nowrap
old_gcard = """<CardContent className="p-3 flex items-center gap-2.5">
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

new_gcard = """<CardContent className="p-3 flex items-center gap-2 flex-nowrap overflow-hidden">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: m.color + '18' }}
                    >
                      {m.available
                        ? <Icon className="w-4 h-4" style={{ color: m.color }} />
                        : <Lock className="w-3.5 h-3.5 text-muted-foreground" />
                      }
                    </div>
                    <span className="font-semibold text-sm whitespace-nowrap flex-shrink-0">{m.label}</span>
                    {m.badge && (
                      <span className="text-xs px-1.5 py-0.5 rounded font-medium flex-shrink-0 ml-auto" style={{ backgroundColor: m.color + '18', color: m.color }}>
                        {m.badge}
                      </span>
                    )}
                    {m.available && <ChevronRight className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0 ml-1" />}
                  </CardContent>"""

c = c.replace(old_gcard, new_gcard)

# Remove module description in "模块入口" section of the guide
old_mod_desc = """                    <div className="flex items-center gap-3 p-3 rounded-xl border hover:bg-muted/30 transition-colors"
                      style={{ borderColor: m.color + '33' }}
                    >
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: m.color + '18' }}
                      >
                        <Icon className="w-4 h-4" style={{ color: m.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm">{m.label}</div>
                        <div className="text-xs text-muted-foreground">{m.description}</div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    </div>"""

new_mod_desc = """                    <div className="flex items-center gap-3 p-3 rounded-xl border hover:bg-muted/30 transition-colors"
                      style={{ borderColor: m.color + '33' }}
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: m.color + '18' }}
                      >
                        <Icon className="w-4 h-4" style={{ color: m.color }} />
                      </div>
                      <span className="font-semibold text-sm flex-1">{m.label}</span>
                      <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    </div>"""

c = c.replace(old_mod_desc, new_mod_desc)

with open(guide, 'w', encoding='utf-8') as f:
    f.write(c)
print('OK PhysicsGuidePage.tsx - single-line cards, no descriptions')


# ===== FIX 2: SiteHome - remove all subject card descriptions =====
sh = '/workspace/xingyao/src/sections/SiteHome.tsx'
with open(sh, 'r', encoding='utf-8') as f:
    c = f.read()

# Remove description from subject cards
old_subj_desc = """                          <p className="text-sm text-muted-foreground mb-2">{s.description}</p>"""
new_subj_desc = ""

c = c.replace(old_subj_desc, new_subj_desc)

# Also remove the "modules / progress" info lines at bottom of subject cards
old_subj_meta = """                          {s.available && (
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-muted-foreground">
                                {s.moduleCount} 个核心模型
                              </span>
                              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                            </div>
                          )}"""
new_subj_meta = ""

c = c.replace(old_subj_meta, new_subj_meta)

# Simplify hero - remove the "explore cognition graph" button if it has physics content
# Replace it with a more generic "Browse subjects" style
c = c.replace(
    '<Button size="lg" variant="outline" className="gap-2">\n                <GitBranch className="w-4 h-4" />探索认知图谱\n              </Button>',
    '<Button size="lg" variant="outline" className="gap-2">\n                <GitBranch className="w-4 h-4" />查看认知图谱\n              </Button>'
)

with open(sh, 'w', encoding='utf-8') as f:
    f.write(c)
print('OK SiteHome.tsx - no descriptions on subject cards')


# ===== FIX 3: VisionPages - remove descriptions from list cards =====
vp = '/workspace/xingyao/src/sections/VisionPages.tsx'
with open(vp, 'r', encoding='utf-8') as f:
    c = f.read()

# Remove description text from vision list cards
c = c.replace(
    '<p className="text-sm text-muted-foreground leading-relaxed mb-3">{story.description}</p>',
    ''
)
# Remove tags display from vision list (the inline tags take too much space)
c = c.replace(
    '<div className="flex flex-wrap gap-1 mb-2">\n                          {story.tags.slice(0, 4).map((tag) => (\n                            <Badge key={tag} variant="secondary" className="text-xs">\n                              {tag}\n                            </Badge>\n                          ))}\n                        </div>',
    ''
)

with open(vp, 'w', encoding='utf-8') as f:
    f.write(c)
print('OK VisionPages.tsx - simplified list')


# ===== FIX 4: ModelList - remove chapter description if any =====
ml = '/workspace/xingyao/src/sections/ModelList.tsx'
with open(ml, 'r', encoding='utf-8') as f:
    c = f.read()

# Chapter subtitle "3个模型" is already cleaned up, just verify
# Remove any remaining description text
c = c.replace(
    '<p className="text-xs text-muted-foreground mt-1">{chapter.models.length} 个模型</p>',
    ''
)

with open(ml, 'w', encoding='utf-8') as f:
    f.write(c)
print('OK ModelList.tsx')


# ===== FIX 5: StrategyList - make filter bar more compact =====
sp = '/workspace/xingyao/src/sections/StrategyPages.tsx'
with open(sp, 'r', encoding='utf-8') as f:
    c = f.read()

# Remove the "how to use" card that takes too much space
old_tip_card = """        {/* 难度说明 */}
        <Card className="bg-muted/30 border-dashed">
          <CardContent className="p-4">
            <p className="text-xs font-medium text-muted-foreground mb-2">💡 如何使用解题套路？</p>
            <div className="flex flex-wrap gap-3 text-xs">
              <span className="text-green-600">⭐ 基础：公式直接应用</span>
              <span className="text-yellow-600">⭐⭐ 进阶：多步综合</span>
              <span className="text-orange-600">⭐⭐⭐ 挑战：复杂问题</span>
              <span className="text-red-600">⭐⭐⭐⭐ 竞赛：竞赛难度</span>
            </div>
          </CardContent>
        </Card>"""
new_tip_card = ""

c = c.replace(old_tip_card, new_tip_card)

with open(sp, 'w', encoding='utf-8') as f:
    f.write(c)
print('OK StrategyPages.tsx - removed tip card')


# ===== FIX 6: CognitionGraphPage - remove "拖拽移动 · 滚轮缩放" text =====
cg = '/workspace/xingyao/src/sections/CognitionGraphPage.tsx'
with open(cg, 'r', encoding='utf-8') as f:
    c = f.read()

c = c.replace(
    '<span className="text-muted-foreground/60 ml-1">双指缩放 · 拖拽移动</span>',
    ''
)

with open(cg, 'w', encoding='utf-8') as f:
    f.write(c)
print('OK CognitionGraphPage.tsx - removed hint text')


print('\nAll fixes applied. Run: cd /workspace/xingyao && npm run build')
