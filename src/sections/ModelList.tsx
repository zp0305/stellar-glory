import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AppLayout } from '@/components/layout/Navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Search, BookOpen, Clock, ChevronRight, Lock } from 'lucide-react'

// 对齐 physicsData.ts 的 26 个模型 + M27-M42（待内容填充）
const chapters = [
  {
    id: 'C01',
    name: '运动的描述',
    module: '运动学',
    models: [
      { id: 'PHY-M01', name: '匀变速直线运动', difficulty: '基础', progress: 0, estimated_time: 45 },
      { id: 'PHY-M02', name: '自由落体运动', difficulty: '基础', progress: 0, estimated_time: 30 },
      { id: 'PHY-M03', name: '竖直上抛运动', difficulty: '中等', progress: 0, estimated_time: 35 },
      { id: 'PHY-M04', name: '追及与相遇', difficulty: '中等', progress: 0, estimated_time: 50 },
    ],
  },
  {
    id: 'C02',
    name: '相互作用',
    module: '力学',
    models: [
      { id: 'PHY-M05', name: '力的合成与分解', difficulty: '基础', progress: 0, estimated_time: 40 },
      { id: 'PHY-M06', name: '牛顿第二定律', difficulty: '中等', progress: 0, estimated_time: 55 },
      { id: 'PHY-M07', name: '弹簧模型', difficulty: '中等', progress: 0, estimated_time: 50 },
      { id: 'PHY-M08', name: '板块模型', difficulty: '进阶', progress: 0, estimated_time: 60 },
      { id: 'PHY-M09', name: '传送带模型', difficulty: '进阶', progress: 0, estimated_time: 55 },
    ],
  },
  {
    id: 'C03',
    name: '牛顿运动定律',
    module: '力学',
    models: [
      { id: 'PHY-M10', name: '曲线运动基础', difficulty: '中等', progress: 0, estimated_time: 40 },
      { id: 'PHY-M11', name: '平抛运动', difficulty: '中等', progress: 0, estimated_time: 50 },
      { id: 'PHY-M12', name: '圆周运动', difficulty: '中等', progress: 0, estimated_time: 60 },
      { id: 'PHY-M13', name: '天体运动', difficulty: '进阶', progress: 0, estimated_time: 65 },
    ],
  },
  {
    id: 'C04',
    name: '机械能',
    module: '能量',
    models: [
      { id: 'PHY-M14', name: '功和功率', difficulty: '基础', progress: 0, estimated_time: 40 },
      { id: 'PHY-M15', name: '动能定理', difficulty: '中等', progress: 0, estimated_time: 55 },
      { id: 'PHY-M16', name: '机械能守恒', difficulty: '中等', progress: 0, estimated_time: 50 },
    ],
  },
  {
    id: 'C05',
    name: '动量守恒',
    module: '动量',
    models: [
      { id: 'PHY-M17', name: '动量定理', difficulty: '中等', progress: 0, estimated_time: 45 },
      { id: 'PHY-M18', name: '动量守恒', difficulty: '中等', progress: 0, estimated_time: 50 },
      { id: 'PHY-M19', name: '碰撞模型', difficulty: '进阶', progress: 0, estimated_time: 60 },
    ],
  },
  {
    id: 'C06',
    name: '电场',
    module: '电磁学',
    models: [
      { id: 'PHY-M20', name: '电场强度', difficulty: '中等', progress: 0, estimated_time: 55 },
      { id: 'PHY-M21', name: '电势与电势能', difficulty: '进阶', progress: 0, estimated_time: 60 },
      { id: 'PHY-M22', name: '电容器', difficulty: '中等', progress: 0, estimated_time: 50 },
    ],
  },
  {
    id: 'C07',
    name: '电路',
    module: '电磁学',
    models: [
      { id: 'PHY-M23', name: '欧姆定律与电路', difficulty: '基础', progress: 0, estimated_time: 40 },
      { id: 'PHY-M24', name: '磁场与安培力', difficulty: '中等', progress: 0, estimated_time: 55 },
      { id: 'PHY-M25', name: '洛伦兹力', difficulty: '中等', progress: 0, estimated_time: 50 },
      { id: 'PHY-M26', name: '电磁感应', difficulty: '进阶', progress: 0, estimated_time: 65 },
    ],
  },
  {
    id: 'C08',
    name: '交流电',
    module: '电磁学',
    models: [
      { id: 'PHY-M27', name: '交变电流', difficulty: '中等', progress: 0, estimated_time: 50 },
      { id: 'PHY-M28', name: '理想变压器', difficulty: '中等', progress: 0, estimated_time: 45 },
    ],
  },
  {
    id: 'C09',
    name: '热学',
    module: '热学',
    models: [
      { id: 'PHY-M29', name: '分子动理论', difficulty: '基础', progress: 0, estimated_time: 35 },
      { id: 'PHY-M30', name: '气体实验定律', difficulty: '中等', progress: 0, estimated_time: 50 },
      { id: 'PHY-M31', name: '理想气体状态方程', difficulty: '中等', progress: 0, estimated_time: 55 },
      { id: 'PHY-M32', name: '热力学第一定律', difficulty: '进阶', progress: 0, estimated_time: 60 },
    ],
  },
  {
    id: 'C10',
    name: '光学',
    module: '光学',
    models: [
      { id: 'PHY-M33', name: '光的折射与全反射', difficulty: '中等', progress: 0, estimated_time: 50 },
      { id: 'PHY-M34', name: '光的干涉与衍射', difficulty: '进阶', progress: 0, estimated_time: 55 },
      { id: 'PHY-M35', name: '光的偏振', difficulty: '基础', progress: 0, estimated_time: 30 },
    ],
  },
  {
    id: 'C11',
    name: '机械波',
    module: '机械波',
    models: [
      { id: 'PHY-M36', name: '机械振动', difficulty: '中等', progress: 0, estimated_time: 45 },
      { id: 'PHY-M37', name: '机械波', difficulty: '中等', progress: 0, estimated_time: 50 },
      { id: 'PHY-M38', name: '波的干涉与衍射', difficulty: '进阶', progress: 0, estimated_time: 55 },
    ],
  },
  {
    id: 'C12',
    name: '近代物理',
    module: '近代物理',
    models: [
      { id: 'PHY-M39', name: '光的粒子性', difficulty: '中等', progress: 0, estimated_time: 50 },
      { id: 'PHY-M40', name: '原子结构', difficulty: '基础', progress: 0, estimated_time: 40 },
      { id: 'PHY-M41', name: '原子核', difficulty: '中等', progress: 0, estimated_time: 55 },
      { id: 'PHY-M42', name: '核反应与核能', difficulty: '进阶', progress: 0, estimated_time: 60 },
    ],
  },
]

const diffColor: Record<string, string> = {
  '基础': 'bg-green-100 text-green-700',
  '中等': 'bg-yellow-100 text-yellow-700',
  '进阶': 'bg-red-100 text-red-700',
}

export function ModelList() {
  const [search, setSearch] = useState('')
  const [activeModule, setActiveModule] = useState<string>('全部')
  const [selectedDiff, setSelectedDiff] = useState<string | null>(null)

  const modules = ['全部', '运动学', '力学', '能量', '动量', '电磁学', '热学', '光学', '机械波', '近代物理']

  const filtered = chapters
    .map(ch => ({
      ...ch,
      models: ch.models.filter(m => {
        const matchS = !search || m.name.includes(search)
        const matchM = activeModule === '全部' || ch.module === activeModule
        const matchD = !selectedDiff || m.difficulty === selectedDiff
        return matchS && matchM && matchD
      }),
    }))
    .filter(ch => ch.models.length > 0)

  const totalModels = chapters.reduce((s, c) => s + c.models.length, 0)

  return (
    <AppLayout showSubjectNav>
      <div className="max-w-4xl mx-auto px-4 py-6 space-y-5">
        {/* 头部 */}
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-primary" />
            模型详解
            <Badge variant="outline" className="ml-2 text-xs">{totalModels}个模型</Badge>
          </h1>
        </div>

        {/* 模块筛选 */}
        <div className="flex flex-wrap gap-1.5">
          {modules.map(m => (
            <button
              key={m}
              onClick={() => setActiveModule(activeModule === m ? '全部' : m)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                activeModule === m
                  ? 'bg-primary text-white border-primary'
                  : 'border-border hover:border-primary/40 text-muted-foreground'
              }`}
            >
              {m}
            </button>
          ))}
        </div>

        {/* 搜索 + 难度筛选 */}
        <div className="flex flex-wrap gap-2 items-center">
          <div className="relative flex-1 min-w-48">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="搜索模型名称..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="flex gap-1">
            {['全部', '基础', '中等', '进阶'].map(d => (
              <button
                key={d}
                onClick={() => setSelectedDiff(selectedDiff === d || d === '全部' ? null : d)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                  (d === '全部' && !selectedDiff) || d === selectedDiff
                    ? 'bg-primary/10 text-primary border-primary/30'
                    : 'border-border hover:border-primary/30 text-muted-foreground'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {/* 模型列表 */}
        <div className="space-y-6">
          {filtered.map(ch => (
            <div key={ch.id}>
              <h2 className="text-sm font-semibold text-muted-foreground mb-2 flex items-center gap-2">
                {ch.name}
                <span className="text-xs font-normal">（{ch.models.length}个模型）</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {ch.models.map(model => (
                  <Link key={model.id} to={`/physics/models/${model.id}`}>
                    <Card className="hover:shadow-sm hover:border-primary/30 transition-all group">
                      <CardContent className="p-3 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <BookOpen className="w-4 h-4 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium truncate">{model.name}</span>
                            <span className={`text-xs px-1.5 py-0.5 rounded-full flex-shrink-0 ${diffColor[model.difficulty] || 'bg-gray-100 text-gray-600'}`}>
                              {model.difficulty}
                            </span>
                          </div>
                          <div className="flex items-center gap-3 mt-0.5">
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              约{model.estimated_time}分钟
                            </span>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0 group-hover:text-primary transition-colors" />
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <Search className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm">未找到匹配 "{search}" 的模型</p>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  )
}
