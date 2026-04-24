import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AppLayout } from '@/components/layout/Navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import {
  ChevronLeft, ChevronRight, ArrowLeft,
  type LucideIcon,
} from 'lucide-react'

// ===== 统一章节类型 =====
export interface DetailSection {
  id: string
  label: string          // 显示标题
  Icon: LucideIcon       // 图标
  iconBg?: string         // 图标背景色类名，默认 "bg-primary/10"
  iconColor?: string     // 图标颜色类名，默认 "text-primary"
  content: string | null // Markdown 或纯文字，为空显示"整理中"
  isMarkdown?: boolean   // 是否渲染 Markdown，默认 false
}

// ===== 统一详情页组件 =====
interface UnifiedDetailProps {
  title: string
  badge?: React.ReactNode        // 右上角徽章
  subtitle?: string               // 标题下方副标题
  sections: DetailSection[]      // 内容章节
  backHref: string               // 返回链接
  backLabel: string              // 返回按钮文字
  prevId?: string | null
  nextId?: string | null
  prevHref?: (id: string) => string   // 构造 prev href
  nextHref?: (id: string) => string   // 构造 next href
  related?: React.ReactNode           // 底部相关推荐
}

export function UnifiedDetail({
  title,
  badge,
  subtitle,
  sections,
  backHref,
  backLabel,
  prevId,
  nextId,
  prevHref,
  nextHref,
  related,
}: UnifiedDetailProps) {
  return (
    <AppLayout>
      {/* ===== 顶部粘性栏 ===== */}
      <div className="sticky top-[3.5rem] z-20 bg-background border-b shadow-sm">
        <div className="max-w-3xl mx-auto px-4 py-2.5 flex items-center gap-3">
          <Link to={backHref}>
            <Button variant="ghost" size="sm" className="gap-1 pl-0">
              <ArrowLeft className="w-4 h-4" />{backLabel}
            </Button>
          </Link>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">{title}</p>
          </div>
          {badge}
          <div className="flex items-center gap-0.5 shrink-0">
            {prevId && prevHref && (
              <Link to={prevHref(prevId)} className="p-1.5 rounded-md hover:bg-muted">
                <ChevronLeft className="w-4 h-4" />
              </Link>
            )}
            {nextId && nextHref && (
              <Link to={nextHref(nextId)} className="p-1.5 rounded-md hover:bg-muted">
                <ChevronRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* ===== 主内容 ===== */}
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">

        {/* ===== 标题区 ===== */}
        <div>
          {subtitle && (
            <p className="text-sm text-muted-foreground mb-2">{subtitle}</p>
          )}
        </div>

        {/* ===== 内容章节 ===== */}
        {sections.map((sec) => (
          <section key={sec.id}>
            {/* 章节标题 */}
            <div className="flex items-center gap-2 mb-3">
              <div className={cn(
                "w-7 h-7 rounded-full flex items-center justify-center shrink-0",
                sec.iconBg || "bg-primary/10"
              )}>
                <sec.Icon className={cn("w-4 h-4", sec.iconColor || "text-primary")} />
              </div>
              <h2 className="font-bold text-base">{sec.label}</h2>
            </div>
            {/* 章节内容 */}
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
        ))}

        {/* ===== 底部 prev/next ===== */}
        {(prevId || nextId) && (
          <div className="flex items-center justify-between gap-4 pt-2 border-t">
            {prevId && prevHref ? (
              <Link to={prevHref(prevId)} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                <ChevronLeft className="w-4 h-4" />上一个
              </Link>
            ) : <div />}
            {nextId && nextHref ? (
              <Link to={nextHref(nextId)} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                下一个<ChevronRight className="w-4 h-4" />
              </Link>
            ) : <div />}
          </div>
        )}

        {/* ===== 相关推荐 ===== */}
        {related}
      </div>
    </AppLayout>
  )
}
