import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { AppLayout } from '@/components/layout/Navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import {
  Tabs, TabsContent, TabsList, TabsTrigger
} from '@/components/ui/tabs'
import { physicsVisionStories } from '@/data/physics/visionStories'
import {
  Eye, Search, Clock, ChevronRight, Star, ArrowRight,
  Atom, Users, FlaskConical, Globe, Zap, Bug, Puzzle, Telescope, Sparkles,
} from 'lucide-react'

// 十大分类配置
const categories = [
  { id: 'all', label: '全部', icon: Eye, color: '#6b7280' },
  { id: '溯源', label: '溯源', icon: Globe, color: '#10b981', desc: '物理学起源，经典发现的来龙去脉' },
  { id: '群星', label: '群星', icon: Users, color: '#6366f1', desc: '改变人类认知的物理学家故事' },
  { id: '趣玩', label: '趣玩', icon: FlaskConical, color: '#f59e0b', desc: '生活中的趣味物理现象' },
  { id: '察微', label: '察微', icon: Atom, color: '#06b6d4', desc: '实验室里的重大科学发现' },
  { id: '思辨', label: '思辨', icon: Sparkles, color: '#8b5cf6', desc: '物理学革命（相对论、量子论）' },
  { id: '前沿', label: '前沿', icon: Zap, color: '#ef4444', desc: '物理学的最前沿（弦理论，暗物质）' },
  { id: '洞见', label: '洞见', icon: Bug, color: '#f97316', desc: '物理技术推动工业发展' },
  { id: '迷思', label: '迷思', icon: Puzzle, color: '#14b8a6', desc: '打破常见的物理认知误区' },
  { id: '谜题', label: '谜题', icon: Telescope, color: '#7c3aed', desc: '物理难题与悬而未决的问题' },
  { id: '幻想', label: '幻想', icon: Star, color: '#ec4899', desc: '物理学塑造的未来世界' },
]

const DIFFICULTY_CONFIG: Record<string, { label: string; color: string; bg: string }> = {
  '🟢': { label: '简单', color: '#16a34a', bg: 'bg-green-100 text-green-700' },
  '🟡': { label: '中等', color: '#ca8a04', bg: 'bg-yellow-100 text-yellow-700' },
  '🔴': { label: '困难', color: '#dc2626', bg: 'bg-red-100 text-red-700' },
}

// 故事详情数据
const storyDetails: Record<string, {
  background: string
  core: string
  principle: string
  thinking: string
}> = {
  'origin-001': {
    background: `**时间**：1604年 / **地点**：意大利帕多瓦\n\n伽利略在帕多瓦大学任教期间，设计了一个斜面实验来研究物体的运动规律。他让铜球在斜面上滚动，测量不同倾斜角度下的运动距离和时间。\n\n这一实验的背景是：当时人们普遍相信亚里士多德的观点——重的物体下落得更快。伽利略通过实验证明，这个"常识"是错的。`,
    core: `伽利略用斜面"冲淡"了重力，使得物体运动变慢，便于精确测量时间。他发现：\n\n- 铜球滚下斜面的距离，与时间的平方成正比（S ∝ t²）\n- 这意味着速度在不断增加（匀加速运动）\n\n他进一步推断：在真空中，所有物体下落的速度是相同的，与质量无关。\n\n**关键方法**：用斜面"冲淡"重力，用数学语言描述运动规律——这是物理学方法论的重大突破。`,
    principle: `相关物理概念：\n- 匀变速直线运动\n- 加速度 $a = g \\sin\\theta$\n- 位移公式 $S = \\frac{1}{2}at^2$\n\n这一发现为后来牛顿运动定律的建立奠定了实验基础。`,
    thinking: `**为什么重要？**\n伽利略的斜面实验标志着物理学从"哲学思辨"走向"实验验证"。他不是坐在书斋里空想，而是动手做实验、用数学描述自然规律。\n\n**现代应用**\n所有汽车碰撞测试、航空器减速设计，都离不开对匀减速运动的精确计算。\n\n**还有什么未解之谜？**\n为什么惯性质量等于引力质量？（这个问题最终引导爱因斯坦建立了广义相对论）`,
  },
}

// ==================== 物理视界首页 ====================
export function VisionListPage() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeDiff, setActiveDiff] = useState<string | null>(null)

  const filtered = physicsVisionStories.filter((s) => {
    const matchSearch = !search || s.title.includes(search) || s.category.includes(search)
    const matchCat = activeCategory === 'all' || s.category === activeCategory
    const matchDiff = !activeDiff || s.difficulty === activeDiff
    return matchSearch && matchCat && matchDiff
  })

  return (
    <AppLayout showSubjectNav>
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        {/* 头部 */}
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Eye className="w-6 h-6 text-cyan-500" />
            <h1 className="text-2xl font-bold">物理视界</h1>
          </div>
          <p className="text-muted-foreground text-sm">
            用故事的方式，看见物理学的广度与深度
          </p>
        </div>

        {/* 十大分类 */}
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-2">十大分类</p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {categories.filter((c) => c.id !== 'all').map((cat) => {
              const CatIcon = cat.icon
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(activeCategory === cat.id ? 'all' : cat.id)}
                  className={`flex flex-col items-center gap-1 p-3 rounded-xl border text-center transition-all text-xs ${
                    activeCategory === cat.id
                      ? 'border-primary bg-primary/5 shadow-sm'
                      : 'hover:border-primary/30 hover:bg-muted/50'
                  }`}
                >
                  <CatIcon className="w-5 h-5" style={{ color: cat.color }} />
                  <span className="font-medium">{cat.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* 搜索 */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="搜索故事标题..."
            className="pl-9"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* 难度筛选 */}
        <div className="flex gap-2">
          {[['🟢', '简单'], ['🟡', '中等'], ['🔴', '困难']].map(([d, label]) => (
            <Button
              key={d}
              variant={activeDiff === d ? 'default' : 'outline'}
              size="sm"
              className="text-xs h-8"
              onClick={() => setActiveDiff(activeDiff === d ? null : d)}
            >
              {d} {label}
            </Button>
          ))}
          {(activeDiff || activeCategory !== 'all') && (
            <Button variant="ghost" size="sm" className="text-xs h-8"
              onClick={() => { setActiveDiff(null); setActiveCategory('all'); }}>
              清除筛选
            </Button>
          )}
        </div>

        {/* 故事列表 */}
        <div className="space-y-3">
          {filtered.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <Eye className="w-8 h-8 mx-auto mb-2 opacity-30" />
              <p>没有找到匹配的物理视界故事</p>
            </div>
          ) : (
            filtered.map((story) => {
              const diffCfg = DIFFICULTY_CONFIG[story.difficulty]
              const cat = categories.find((c) => c.id === story.category)
              return (
                <Link key={story.id} to={`/physics/vision/${story.id}`}>
                  <Card className="hover:shadow-md hover:border-primary/30 transition-all group cursor-pointer">
                    <CardContent className="p-5">
                      <div className="flex gap-4">
                        <div className="w-1 rounded-full flex-shrink-0" style={{ backgroundColor: cat?.color }} />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <div className="flex items-center gap-2 flex-wrap">
                              <Badge className={`${diffCfg.bg} text-xs`}>{diffCfg.label}</Badge>
                              <Badge variant="outline" className="text-xs" style={{ borderColor: cat?.color, color: cat?.color }}>
                                {cat?.label}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground flex-shrink-0">
                              <Clock className="w-3 h-3" />
                              {story.readTime}分钟
                            </div>
                          </div>
                          <h3 className="font-semibold text-base mb-1 group-hover:text-primary transition-colors">
                            {story.title}
                          </h3>
                          <p className="text-xs text-muted-foreground line-clamp-2">
                            点击阅读全文，了解故事背后的物理原理和思维方式
                          </p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })
          )}
        </div>
      </div>
    </AppLayout>
  )
}

// ==================== 故事详情页 ====================
export function VisionDetailPage() {
  const { storyId } = useParams<{ storyId: string }>()
  const story = physicsVisionStories.find((s) => s.id === storyId)
  const cat = categories.find((c) => c.id === story?.category)
  const CatIcon = cat?.icon || Eye
  const diffCfg = story ? DIFFICULTY_CONFIG[story.difficulty] : DIFFICULTY_CONFIG['🟢']
  const detail = story ? (storyDetails[story.id] || storyDetails['origin-001']) : null

  if (!story) {
    return (
      <AppLayout showSubjectNav>
        <div className="max-w-3xl mx-auto px-4 py-16 text-center">
          <Eye className="w-12 h-12 mx-auto mb-4 text-muted-foreground opacity-30" />
          <h2 className="text-xl font-bold mb-2">故事不存在</h2>
          <p className="text-muted-foreground mb-4">未找到对应的物理视界故事</p>
          <Link to="/physics/vision">
            <Button variant="outline">返回物理视界</Button>
          </Link>
        </div>
      </AppLayout>
    )
  }

  return (
    <AppLayout showSubjectNav>
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">
        {/* 返回 */}
        <div>
          <Link to="/physics/vision">
            <Button variant="ghost" size="sm" className="gap-1">← 返回物理视界</Button>
          </Link>
        </div>

        {/* 故事头部 */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 flex-wrap">
            <Badge className={`${diffCfg.bg} text-xs`}>{diffCfg.label}</Badge>
            <Badge variant="outline" style={{ borderColor: cat?.color, color: cat?.color }}>
              <CatIcon className="w-3 h-3 mr-1" />{cat?.label}
            </Badge>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="w-3 h-3" />约 {story.readTime} 分钟阅读
            </span>
          </div>
          <h1 className="text-3xl font-bold leading-tight">{story.title}</h1>
        </div>

        {/* 故事正文 */}
        {detail ? (
          <div className="space-y-8">
            {/* 故事背景 */}
            <section>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: `${cat?.color}22` }}>
                  <Globe className="w-4 h-4" style={{ color: cat?.color }} />
                </div>
                <h2 className="font-bold text-base">故事背景</h2>
              </div>
              <Card>
                <CardContent className="p-5 text-sm leading-relaxed whitespace-pre-wrap">
                  {detail.background}
                </CardContent>
              </Card>
            </section>

            {/* 核心内容 */}
            <section>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Atom className="w-4 h-4 text-primary" />
                </div>
                <h2 className="font-bold text-base">核心内容</h2>
              </div>
              <Card className="bg-blue-50/50 border-blue-100">
                <CardContent className="p-5 text-sm leading-relaxed whitespace-pre-wrap">
                  {detail.core}
                </CardContent>
              </Card>
            </section>

            {/* 物理原理 */}
            <section>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-yellow-600" />
                </div>
                <h2 className="font-bold text-base">物理原理</h2>
              </div>
              <Card className="bg-yellow-50/50 border-yellow-100">
                <CardContent className="p-5 text-sm leading-relaxed whitespace-pre-wrap">
                  {detail.principle}
                </CardContent>
              </Card>
            </section>

            {/* 思考延伸 */}
            <section>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-purple-600" />
                </div>
                <h2 className="font-bold text-base">思考延伸</h2>
              </div>
              <Card className="bg-purple-50/50 border-purple-100">
                <CardContent className="p-5 text-sm leading-relaxed whitespace-pre-wrap">
                  {detail.thinking}
                </CardContent>
              </Card>
            </section>
          </div>
        ) : (
          <Card className="bg-muted/30 border-dashed">
            <CardContent className="p-8 text-center text-muted-foreground">
              <Eye className="w-8 h-8 mx-auto mb-2 opacity-30" />
              <p className="text-sm">该故事详细内容正在编写中</p>
            </CardContent>
          </Card>
        )}

        {/* 相关推荐 */}
        <div>
          <h3 className="font-bold text-base mb-3">相关故事</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {physicsVisionStories
              .filter((s) => s.id !== storyId && s.category === story.category)
              .slice(0, 2)
              .map((s) => {
                const sdiff = DIFFICULTY_CONFIG[s.difficulty]
                return (
                  <Link key={s.id} to={`/physics/vision/${s.id}`}>
                    <Card className="hover:shadow-sm hover:border-primary/30 transition-all cursor-pointer">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-2">
                          <Badge className={`${sdiff.bg} text-xs flex-shrink-0`}>{sdiff.label}</Badge>
                          <div className="min-w-0">
                            <p className="text-sm font-medium line-clamp-2">{s.title}</p>
                            <p className="text-xs text-muted-foreground mt-0.5">{s.readTime} 分钟</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            {physicsVisionStories.filter((s) => s.id !== storyId && s.category === story.category).length === 0 && (
              <Link to="/physics/vision">
                <Button variant="outline" className="w-full gap-2">
                  查看更多物理视界 <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
