import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { AppLayout } from '@/components/layout/Navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { allRoutines } from '@/data/physics/strategies'
import { cn } from '@/lib/utils'
import {
  Lightbulb, ChevronRight, Search,
  ArrowRight, Zap, AlertTriangle, BookText,
  Target, ChevronLeft,
} from 'lucide-react'

const DIFF_LABEL: Record<number, string> = { 1: '基础', 2: '进阶', 3: '挑战' }
const DIFF_COLOR: Record<number, string> = {
  1: 'bg-green-100 text-green-700',
  2: 'bg-yellow-100 text-yellow-700',
  3: 'bg-red-100 text-red-700',
}
const CAT_COLOR: Record<string, string> = {
  '运动学':'bg-blue-100 text-blue-700',
  '力学':'bg-purple-100 text-purple-700',
  '曲线运动':'bg-cyan-100 text-cyan-700',
  '万有引力':'bg-indigo-100 text-indigo-700',
  '能量':'bg-green-100 text-green-700',
  '动量':'bg-orange-100 text-orange-700',
  '静电场':'bg-pink-100 text-pink-700',
  '磁场':'bg-violet-100 text-violet-700',
  '电磁感应':'bg-rose-100 text-rose-700',
  '交流电':'bg-teal-100 text-teal-700',
  '热学':'bg-amber-100 text-amber-700',
  '光学':'bg-yellow-100 text-yellow-700',
  '近代物理':'bg-slate-100 text-slate-700',
}

const TITLE_MAP: Record<string, string> = {
  'PHY-R01':'匀变速基本公式选择','PHY-R02':'刹车陷阱处理','PHY-R03':'追及相遇分析',
  'PHY-R04':'v-t图分析法','PHY-R05':'x-t图分析法','PHY-R06':'自由落体比例速解',
  'PHY-R07':'竖直上抛对称性','PHY-R08':'多过程衔接分析','PHY-R09':'整体法与隔离法选择',
  'PHY-R10':'受力分析标准流程','PHY-R11':'正交分解法','PHY-R12':'传送带分析流程',
  'PHY-R13':'板块相对滑动判断','PHY-R14':'斜面问题通法','PHY-R15':'弹簧问题分类',
  'PHY-R16':'临界问题处理','PHY-R17':'竖直圆周最高点','PHY-R18':'竖直圆周最低点',
  'PHY-R19':'圆锥摆分析','PHY-R20':'动态平衡分析法','PHY-R21':'摩擦力突变分析',
  'PHY-R22':'隔离法求系统内力','PHY-R23':'平抛运动分解法','PHY-R24':'斜面上平抛通法',
  'PHY-R25':'平抛运动结论速用','PHY-R26':'斜抛运动分解','PHY-R27':'圆周运动动力学方程',
  'PHY-R28':'竖直圆周临界条件','PHY-R29':'天体运动基本方程','PHY-R30':'卫星变轨分析',
  'PHY-R31':'同步卫星特征','PHY-R32':'天体质量密度计算','PHY-R33':'双星问题标准解法',
  'PHY-R34':'宇宙速度推导与记忆','PHY-R35':'动能定理全程法','PHY-R36':'机械能守恒判断',
  'PHY-R37':'能量守恒的整体法','PHY-R38':'功率计算','PHY-R39':'汽车启动两种模式',
  'PHY-R40':'动量定理求冲量','PHY-R41':'动量守恒判断','PHY-R42':'碰撞分类与判断',
  'PHY-R43':'人船模型','PHY-R44':'子弹打木块模型','PHY-R45':'能量动量综合分析',
  'PHY-R46':'动量定理电磁应用','PHY-R47':'带电粒子在电场加速','PHY-R48':'带电粒子在电场偏转',
  'PHY-R49':'电场功能关系','PHY-R50':'电容器的动态分析','PHY-R51':'闭合电路欧姆定律',
  'PHY-R52':'电路动态分析','PHY-R53':'磁场对电流的作用','PHY-R54':'洛伦兹力的应用',
  'PHY-R55':'带电粒子在磁场运动','PHY-R56':'质谱仪工作原理','PHY-R57':'回旋加速器',
  'PHY-R58':'电磁感应概念','PHY-R59':'楞次定律应用','PHY-R60':'右手定则与左手定则区分',
  'PHY-R61':'线框在磁场中转动','PHY-R62':'自感与互感','PHY-R63':'交变电流有效值',
  'PHY-R64':'理想变压器','PHY-R65':'远距离输电','PHY-R66':'热学分子动理论',
  'PHY-R67':'气体状态方程','PHY-R68':'热力学第一定律','PHY-R69':'热力学第二定律',
  'PHY-R70':'光的折射定律','PHY-R71':'全反射条件','PHY-R72':'光的干涉条件',
  'PHY-R73':'光的衍射条件','PHY-R74':'光电效应方程','PHY-R75':'光子说',
  'PHY-R76':'原子能级跃迁','PHY-R77':'原子核衰变','PHY-R78':'半衰期计算',
  'PHY-R79':'核反应方程','PHY-R80':'质能方程','PHY-R81':'实验：打点计时器',
  'PHY-R82':'验证牛顿第二定律','PHY-R83':'验证机械能守恒','PHY-R84':'验证动量守恒',
  'PHY-R85':'测定金属电阻率','PHY-R86':'练习使用示波器',
}
function getTitle(id: string): string {
  return TITLE_MAP[id] || id
}

/* ============= 套路列表页 ============= */
export function StrategyListPage() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('全部')
  const categories = ['全部','运动学','力学','曲线运动','万有引力','能量','动量','静电场','磁场','电磁感应','交流电','热学','光学','近代物理']

  const filtered = allRoutines.filter(r => {
    const matchSearch = !search || getTitle(r.id).includes(search) || r.oneLine.includes(search)
    const matchCat = activeCategory === '全部' || r.category === activeCategory
    return matchSearch && matchCat
  })

  return (
    <AppLayout showSubjectNav>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-1">解题套路</h1>
          <p className="text-sm text-muted-foreground">{allRoutines.length} 个解题方法 · 覆盖所有物理模型</p>
        </div>
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="搜索套路..." value={search} onChange={e => setSearch(e.target.value)} className="pl-9 bg-card" />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 mb-6">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                'flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-all',
                activeCategory === cat ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
              )}>
              {cat}
            </button>
          ))}
        </div>
        <div className="space-y-3">
          {filtered.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <Search className="w-8 h-8 mx-auto mb-2 opacity-30" />
              <p className="text-sm">没有找到符合条件的套路</p>
            </div>
          )}
          {filtered.map(routine => (
            <Link key={routine.id} to={`/physics/strategies/${routine.id}`}>
              <Card className="hover:shadow-sm hover:border-primary/30 transition-all cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className={"text-xs px-2 py-0.5 rounded-full font-medium " + (DIFF_COLOR[routine.difficulty] || 'bg-gray-100')}>
                          {DIFF_LABEL[routine.difficulty]}
                        </span>
                        <span className={"text-xs px-2 py-0.5 rounded-full " + (CAT_COLOR[routine.category] || 'bg-gray-100')}>
                          {routine.category}
                        </span>
                      </div>
                      <p className="font-medium text-sm mb-0.5">{getTitle(routine.id)}</p>
                      <p className="text-xs text-muted-foreground line-clamp-2">{routine.oneLine}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground mt-2 shrink-0" />
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

/* ============= 套路详情页 ============= */
export function StrategyDetailPage() {
  const { strategyId } = useParams<{ strategyId: string }>()
  const routine = strategyId ? (allRoutines.find(r => r.id === strategyId) ?? null) : null

  const ALL_IDS = allRoutines.map(r => r.id)
  const idx = strategyId ? ALL_IDS.indexOf(strategyId) : -1
  const prevId = idx > 0 ? ALL_IDS[idx - 1] : null
  const nextId = idx < ALL_IDS.length - 1 ? ALL_IDS[idx + 1] : null

  if (!routine) {
    return (
      <AppLayout showSubjectNav>
        <div className="max-w-3xl mx-auto px-4 py-16 text-center">
          <AlertTriangle className="w-12 h-12 mx-auto mb-4 text-orange-400" />
          <h2 className="text-xl font-semibold mb-2">套路不存在</h2>
          <p className="text-muted-foreground mb-6">该套路尚未收录</p>
          <Link to="/physics/strategies"><Button variant="outline">返回列表</Button></Link>
        </div>
      </AppLayout>
    )
  }

  const anchors = [
    { id: 'section-steps', label: '核心步骤' },
    { id: 'section-types', label: '适用题型' },
    { id: 'section-mistakes', label: '常见错误' },
    { id: 'section-tip', label: '记忆口诀' },
    { id: 'section-detail', label: '详细讲解' },
  ]

  const sectionsContent = [
    {
      id: 'steps', label: '核心步骤', Icon: BookText, bg: 'bg-blue-50', color: 'text-blue-600',
      content: routine.coreSteps?.length
        ? routine.coreSteps.map((s, i) => `${i + 1}. ${s}`).join('\n')
        : null,
    },
    {
      id: 'types', label: '适用题型', Icon: Target, bg: 'bg-green-50', color: 'text-green-600',
      content: routine.applicableTypes?.length ? routine.applicableTypes.join('\n') : null,
    },
    {
      id: 'mistakes', label: '常见错误', Icon: AlertTriangle, bg: 'bg-red-50', color: 'text-red-500',
      content: routine.commonMistakes?.length
        ? routine.commonMistakes.map(m => `· ${m}`).join('\n')
        : null,
    },
    {
      id: 'tip', label: '记忆口诀', Icon: Lightbulb, bg: 'bg-amber-50', color: 'text-amber-500',
      content: routine.memoryTip || null,
    },
    {
      id: 'detail', label: '详细讲解', Icon: Zap, bg: 'bg-primary/10', color: 'text-primary',
      content: routine.content || null,
    },
  ]

  const related = allRoutines.filter(r =>
    r.id !== strategyId && r.category === routine.category
  ).slice(0, 4)

  return (
    <AppLayout showSubjectNav anchors={[]}>
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">

        {/* 返回 + 翻页 */}
        <div className="flex items-center justify-between">
          <Link to="/physics/strategies">
            <Button variant="ghost" size="sm" className="pl-0 gap-1">
              <span className="text-muted-foreground">←</span> 套路列表
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            {prevId && <Link to={`/physics/strategies/${prevId}`}><Button variant="outline" size="sm">← 上一套路</Button></Link>}
            {nextId && <Link to={`/physics/strategies/${nextId}`}><Button variant="outline" size="sm">下一套路 →</Button></Link>}
          </div>
        </div>

        {/* 头部 */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span className={"text-xs px-2.5 py-1 rounded-full font-medium " + (DIFF_COLOR[routine.difficulty] || 'bg-gray-100')}>
              {DIFF_LABEL[routine.difficulty]}
            </span>
            <span className={"text-xs px-2.5 py-1 rounded-full " + (CAT_COLOR[routine.category] || 'bg-gray-100')}>
              {routine.category}
            </span>
          </div>
          <h1 className="text-3xl font-bold">{getTitle(routine.id)}</h1>
          <p className="text-sm text-muted-foreground">{routine.oneLine}</p>
        </div>

        {/* 章节列表 */}
        {sectionsContent.map((sec) => (
          <div key={sec.id} id={'section-' + sec.id}>
            <div className="flex items-center gap-2 mb-3">
              <div className={cn("w-6 h-6 rounded-full flex items-center justify-center shrink-0", sec.bg)}>
                <sec.Icon className={cn("w-4 h-4", sec.color)} />
              </div>
              <h2 className="font-bold text-base">{sec.label}</h2>
            </div>
            {sec.content ? (
              <Card>
                <CardContent className="p-5 text-sm leading-relaxed whitespace-pre-wrap">
                  {sec.content}
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-muted/30 border-dashed">
                <CardContent className="p-5 text-center text-muted-foreground text-sm">
                  该章节内容整理中
                </CardContent>
              </Card>
            )}
          </div>
        ))}

        {/* 底部翻页 */}
        <div className="flex items-center justify-between gap-4 pt-4 border-t">
          {prevId ? (
            <Link to={`/physics/strategies/${prevId}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              <ChevronLeft className="w-4 h-4" /> 上一套路
            </Link>
          ) : <div />}
          <Link to="/physics/strategies" className="text-xs text-muted-foreground hover:text-foreground">套路列表</Link>
          {nextId ? (
            <Link to={`/physics/strategies/${nextId}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              下一套路 <ChevronRight className="w-4 h-4" />
            </Link>
          ) : <div />}
        </div>

        {/* 同分类推荐 */}
        {related.length > 0 && (
          <div className="pt-4 border-t">
            <h3 className="font-bold text-sm mb-3">同分类推荐</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {related.map(r => (
                <Link key={r.id} to={`/physics/strategies/${r.id}`}>
                  <Card className="hover:shadow-sm hover:border-primary/30 transition-all cursor-pointer">
                    <CardContent className="p-3">
                      <p className="text-sm font-medium line-clamp-1 mb-1">{getTitle(r.id)}</p>
                      <p className="text-xs text-muted-foreground line-clamp-1">{r.oneLine}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </AppLayout>
  )
}
