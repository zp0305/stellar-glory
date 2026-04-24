import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'
import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

// ===== 章节类型（无AppLayout版本）=====
export interface Section {
  id: string
  label: string
  Icon: LucideIcon
  iconBg?: string
  iconColor?: string
  content: string | null
  isMarkdown?: boolean
}

// ===== 单章节渲染 =====
export function DetailSection({ sec }: { sec: Section }) {
  return (
    <section>
      <div className="flex items-center gap-2 mb-3">
        <div className={cn(
          "w-7 h-7 rounded-full flex items-center justify-center shrink-0",
          sec.iconBg || "bg-primary/10"
        )}>
          <sec.Icon className={cn("w-4 h-4", sec.iconColor || "text-primary")} />
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
    </section>
  )
}

// ===== 章节列表（无AppLayout）=====
export function SectionList({ sections }: { sections: Section[] }) {
  return (
    <div className="space-y-8">
      {sections.map(sec => <DetailSection key={sec.id} sec={sec} />)}
    </div>
  )
}

// ===== 底部前后导航（无AppLayout）=====
export function PrevNext({
  prevId, nextId, prevHref, nextHref,
}: {
  prevId?: string | null
  nextId?: string | null
  prevHref?: (id: string) => string
  nextHref?: (id: string) => string
}) {
  if (!prevId && !nextId) return null
  return (
    <div className="flex items-center justify-between gap-4 pt-6 border-t">
      {prevId && prevHref ? (
        <a href={prevHref(prevId)} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          ← 上一个
        </a>
      ) : <div />}
      {nextId && nextHref ? (
        <a href={nextHref(nextId)} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          下一个 →
        </a>
      ) : <div />}
    </div>
  )
}
