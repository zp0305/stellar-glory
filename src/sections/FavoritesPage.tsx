import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AppLayout } from '@/components/layout/Navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useFavoritesStore } from '@/stores/favoritesStore'
import type { FavoriteType } from '@/stores/types'
import {
  Star, Trash2, BookOpen, Lightbulb, Eye, Target,
  ChevronRight, Search, X
} from 'lucide-react'

const TYPE_CONFIG: Record<FavoriteType, { label: string; icon: typeof BookOpen; color: string; href: (id: string) => string }> = {
  model: {
    label: '知识模型',
    icon: BookOpen,
    color: '#10b981',
    href: (id) => `/physics/models/${id}`,
  },
  strategy: {
    label: '解题套路',
    icon: Lightbulb,
    color: '#f59e0b',
    href: (id) => `/physics/strategies/${id}`,
  },
  vision: {
    label: '物理视界',
    icon: Eye,
    color: '#06b6d4',
    href: (id) => `/physics/vision/${id}`,
  },
  question: {
    label: '题目',
    icon: Target,
    color: '#ef4444',
    href: (id) => `/physics/practice/do?question=${id}`,
  },
}

const TABS: { id: FavoriteType | 'all'; label: string }[] = [
  { id: 'all', label: '全部' },
  { id: 'model', label: '知识' },
  { id: 'strategy', label: '套路' },
  { id: 'vision', label: '视界' },
]

export function FavoritesPage() {
  const { favorites, removeFavorite } = useFavoritesStore()
  const [activeTab, setActiveTab] = useState<FavoriteType | 'all'>('all')
  const [search, setSearch] = useState('')

  const filtered = favorites.filter((f) => {
    const matchTab = activeTab === 'all' || f.type === activeTab
    const matchSearch = !search || f.title.includes(search)
    return matchTab && matchSearch
  })

  const grouped = filtered.reduce<Record<string, typeof filtered>>((acc, f) => {
    if (!acc[f.type]) acc[f.type] = []
    acc[f.type].push(f)
    return acc
  }, {})

  return (
    <AppLayout showSubjectNav>
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        {/* 页面头部 */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center">
            <Star className="w-5 h-5 text-yellow-500" />
          </div>
          <div>
            <h1 className="text-xl font-bold">我的收藏</h1>
            <p className="text-xs text-muted-foreground">
              {favorites.length} 个收藏 · 永久保存
            </p>
          </div>
        </div>

        {/* 搜索 + Tab */}
        <div className="space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="搜索收藏内容..."
              className="w-full pl-9 pr-4 py-2 rounded-lg border bg-background text-sm outline-none focus:ring-2 focus:ring-primary/20"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            )}
          </div>

          {/* Tab */}
          <div className="flex gap-1.5 border-b pb-0">
            {TABS.map((tab) => {
              const count = tab.id === 'all'
                ? favorites.length
                : favorites.filter((f) => f.type === tab.id).length
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-1.5 text-xs font-medium border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-primary text-primary'
                      : 'border-transparent text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {tab.label} {count > 0 && <span className="ml-1 text-muted-foreground/60">({count})</span>}
                </button>
              )
            })}
          </div>
        </div>

        {/* 空状态 */}
        {filtered.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            <Star className="w-12 h-12 mx-auto mb-3 opacity-20" />
            <p className="font-medium mb-1">
              {search ? '没有找到相关收藏' : '还没有收藏任何内容'}
            </p>
            <p className="text-xs">
              {search ? '试试其他关键词' : '点击知识/套路/视界页面的 ⭐ 来添加收藏'}
            </p>
          </div>
        )}

        {/* 分组列表 */}
        {activeTab === 'all' ? (
          // 分组展示
          <div className="space-y-6">
            {(['model', 'strategy', 'vision', 'question'] as FavoriteType[]).map((type) => {
              const items = grouped[type] || []
              if (items.length === 0) return null
              const config = TYPE_CONFIG[type]
              return (
                <div key={type}>
                  <div className="flex items-center gap-2 mb-2">
                    <config.icon className="w-4 h-4" style={{ color: config.color }} />
                    <span className="text-sm font-semibold">{config.label}</span>
                    <span className="text-xs text-muted-foreground">({items.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {items.map((f) => (
                      <FavoriteCard
                        key={f.id}
                        favorite={f}
                        config={config}
                        onRemove={() => removeFavorite(f.itemId, f.type)}
                      />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          // 单类型展示
          <div className="space-y-1.5">
            {filtered.map((f) => {
              const config = TYPE_CONFIG[f.type]
              return (
                <FavoriteCard
                  key={f.id}
                  favorite={f}
                  config={config}
                  onRemove={() => removeFavorite(f.itemId, f.type)}
                />
              )
            })}
          </div>
        )}

        {/* 清除全部 */}
        {favorites.length > 0 && (
          <div className="pt-4 border-t text-center">
            <Button
              variant="ghost"
              size="sm"
              className="text-xs text-muted-foreground hover:text-red-500 gap-1"
              onClick={() => {
                if (confirm('确定清除全部收藏？')) {
                  useFavoritesStore.getState().clearAll()
                }
              }}
            >
              <Trash2 className="w-3.5 h-3.5" /> 清除全部收藏
            </Button>
          </div>
        )}
      </div>
    </AppLayout>
  )
}

function FavoriteCard({
  favorite: f,
  config,
  onRemove,
}: {
  favorite: ReturnType<typeof useFavoritesStore.getState>['favorites'][0]
  config: (typeof TYPE_CONFIG)[FavoriteType]
  onRemove: () => void
}) {
  const Icon = config.icon
  const href = config.href(f.itemId)

  return (
    <div className="group flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/30 transition-colors">
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: config.color + '18' }}
      >
        <Icon className="w-4 h-4" style={{ color: config.color }} />
      </div>

      <Link to={href} className="flex-1 min-w-0">
        <p className="text-sm font-medium truncate group-hover:text-primary transition-colors">
          {f.title}
        </p>
        <p className="text-xs text-muted-foreground">
          {new Date(f.addedAt).toLocaleDateString('zh-CN', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
          {f.note && <span className="ml-2 text-primary">· {f.note}</span>}
        </p>
      </Link>

      <button
        onClick={(e) => {
          e.preventDefault()
          onRemove()
        }}
        className="opacity-0 group-hover:opacity-100 p-1.5 rounded-md hover:bg-red-50 text-muted-foreground hover:text-red-500 transition-all flex-shrink-0"
        title="取消收藏"
      >
        <Trash2 className="w-3.5 h-3.5" />
      </button>

      <Link to={href}>
        <ChevronRight className="w-4 h-4 text-muted-foreground" />
      </Link>
    </div>
  )
}
