import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AppLayout } from '@/components/layout/Navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { questionsByModel, DIFF_LABEL, DIFF_COLOR } from '@/data/physics/questions'
import { PHYSICS_TYPE_OPTIONS } from '@/data/physics/questions/filters'
import { cn } from '@/lib/utils'
import { ChevronRight, ChevronDown, Clock, Tag, Lightbulb } from 'lucide-react'
import type { Question } from '@/data/physics/questions/types'

// 单题卡片（预览模式，不含答案）
function QuestionCard({ q, index }: { q: Question; index: number }) {
  return (
    <div className="border rounded-xl p-4 space-y-3">
      {/* 题号 + 难度 + 时间 */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-muted-foreground">
            {q.difficulty}{String(index + 1).padStart(2, '0')}
          </span>
          <span className={cn('text-xs px-2 py-0.5 rounded-full font-medium border', DIFF_COLOR[q.difficulty])}>
            {DIFF_LABEL[q.difficulty]}
          </span>
          <span className="text-xs text-muted-foreground">{q.type}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="w-3 h-3" />{q.estimatedMinutes}min
          </span>
          {q.tags.slice(0, 2).map(t => (
            <span key={t} className="text-xs px-1.5 py-0.5 rounded bg-muted text-muted-foreground">{t}</span>
          ))}
        </div>
      </div>

      {/* 题干 */}
      <p className="text-sm leading-relaxed whitespace-pre-wrap">{q.question}</p>

      {/* 选项预览 */}
      {q.options && (
        <div className="space-y-1.5">
          {q.options.map((opt, i) => (
            <div key={i} className="text-sm text-muted-foreground">
              {String.fromCharCode(65 + i)}. {opt}
            </div>
          ))}
        </div>
      )}

      {/* 入口 */}
      <div className="pt-1">
        <Link to={`/physics/exercises/${q.modelId}/do?q=${q.id}`}>
          <Button size="sm" variant="outline" className="w-full gap-1.5">
            <span>开始练习</span>
            <ChevronRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

// 可折叠难度区块
function DiffSection({ label, icon, questions }: { label: string; icon: string; questions: Question[] }) {
  const [open, setOpen] = useState(true)

  return (
    <div className="space-y-3">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-1 py-2 rounded-lg hover:bg-muted/50 transition-colors"
      >
        <div className="flex items-center gap-2">
          <span className="text-base">{icon}</span>
          <span className="font-semibold text-sm">{label}</span>
          <span className="text-xs text-muted-foreground">共 {questions.length} 题</span>
        </div>
        {open ? <ChevronDown className="w-4 h-4 text-muted-foreground" /> : <ChevronRight className="w-4 h-4 text-muted-foreground" />}
      </button>
      {open && (
        <div className="space-y-3 pl-1">
          {questions.map((q, i) => (
            <QuestionCard key={q.id} q={q} index={i} />
          ))}
        </div>
      )}
    </div>
  )
}

export function QuestionBankDetailPage() {
  const { modelId } = useParams<{ modelId: string }>()
  const [selectedType, setSelectedType] = useState<string>('all')
  const questions = modelId ? (questionsByModel[modelId] ?? null) : null

  const filteredQuestions = questions?.filter(q => selectedType === 'all' || q.type === selectedType) ?? []

  const B_questions = filteredQuestions.filter(q => q.difficulty === 'B')
  const J_questions = filteredQuestions.filter(q => q.difficulty === 'J')
  const T_questions = filteredQuestions.filter(q => q.difficulty === 'T')

  const availableTypes = [...new Set(questions?.map(q => q.type))]
  const typeOptions = [{ value: 'all', label: '全部题型' }, ...PHYSICS_TYPE_OPTIONS.filter(opt => availableTypes.includes(opt.value))]

  if (!questions) {
    return (
      <AppLayout showSubjectNav>
        <div className="max-w-3xl mx-auto px-4 py-16 text-center">
          <p className="text-muted-foreground">该模型暂无题库</p>
          <Link to="/physics/exercises" className="mt-4">
            <Button variant="outline">返回题库列表</Button>
          </Link>
        </div>
      </AppLayout>
    )
  }

  const modelLabel = modelId?.replace('PHY-M', 'M') ?? ''

  return (
    <AppLayout showSubjectNav>
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">

        {/* 头部 */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
              <Link to="/physics/exercises" className="hover:underline">题库列表</Link>
              <span>/</span>
              <span>{modelId}</span>
            </div>
            <h1 className="text-2xl font-bold">{modelLabel} 配套题库</h1>
            <p className="text-sm text-muted-foreground mt-1">
              共 {questions.length} 题 · B层×{B_questions.length} J层×{J_questions.length} T层×{T_questions.length}
            </p>
          </div>
          <Link to={`/physics/exercises/${modelId}/do`}>
            <Button className="gap-1.5">
              <span>随机练习</span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="flex flex-wrap gap-2">
          {typeOptions.map(opt => (
            <button
              key={opt.value}
              onClick={() => setSelectedType(opt.value)}
              className={cn(
                'flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-all',
                selectedType === opt.value
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              )}>
              {opt.label}
            </button>
          ))}
        </div>

        {/* 难度区块 */}
        {B_questions.length > 0 && (
          <DiffSection label="🟢 基础题" icon="🟢" questions={B_questions} />
        )}
        {J_questions.length > 0 && (
          <DiffSection label="🟡 进阶题" icon="🟡" questions={J_questions} />
        )}
        {T_questions.length > 0 && (
          <DiffSection label="🔴 挑战题" icon="🔴" questions={T_questions} />
        )}

        {/* 返回 */}
        <div className="pt-4 border-t">
          <Link to="/physics/exercises">
            <Button variant="ghost" size="sm" className="pl-0 gap-1 text-muted-foreground">
              ← 返回题库列表
            </Button>
          </Link>
        </div>

      </div>
    </AppLayout>
  )
}