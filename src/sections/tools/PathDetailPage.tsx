/**
 * 学习路径详情页
 * 展示单条学习路线的阶段和里程碑
 */

import { useParams, useNavigate } from 'react-router-dom'
import {
  ArrowLeft,
  GraduationCap,
  Rocket,
  Trophy,
  ChevronRight,
  CheckCircle2,
  Circle,
  Clock,
  Target,
} from 'lucide-react'
import { getPathById, calculatePathProgress } from '@/data/tools/paths'
import { useState } from 'react'

// 图标映射
const iconMap: Record<string, React.ElementType> = {
  GraduationCap,
  Rocket,
  Trophy,
}

// 颜色映射
const colorMap: Record<string, { bg: string; border: string; text: string; ring: string }> = {
  blue: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-600',
    ring: 'ring-blue-500',
  },
  purple: {
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    text: 'text-purple-600',
    ring: 'ring-purple-500',
  },
  amber: {
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    text: 'text-amber-600',
    ring: 'ring-amber-500',
  },
}

export default function PathDetailPage() {
  const { pathId } = useParams<{ pathId: string }>()
  const navigate = useNavigate()
  const [expandedPhases, setExpandedPhases] = useState<Set<string>>(new Set())

  const path = getPathById(pathId || '')

  if (!path) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">路径不存在</h2>
          <button
            onClick={() => navigate('/planner')}
            className="text-blue-600 hover:text-blue-700"
          >
            返回规划页
          </button>
        </div>
      </div>
    )
  }

  const Icon = iconMap[path.icon] || GraduationCap
  const colors = colorMap[path.color] || colorMap.blue
  const progress = calculatePathProgress(path)

  const togglePhase = (phaseId: string) => {
    setExpandedPhases((prev) => {
      const next = new Set(prev)
      if (next.has(phaseId)) {
        next.delete(phaseId)
      } else {
        next.add(phaseId)
      }
      return next
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航栏 */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-4">
          <button
            onClick={() => navigate('/planner')}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600">学习路径</span>
          <span className="text-gray-400">/</span>
          <span className="font-medium text-gray-900">{path.title}</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* 路径头部卡片 */}
        <div className={`${colors.bg} rounded-2xl p-6 mb-8 border ${colors.border}`}>
          <div className="flex items-start gap-4">
            <div className={`p-3 rounded-xl bg-white border ${colors.border}`}>
              <Icon className={`w-8 h-8 ${colors.text}`} />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{path.title}</h1>
              <p className="text-gray-600 mb-4">{path.description}</p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{path.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Target className="w-4 h-4" />
                  <span>{path.targetAudience}</span>
                </div>
              </div>
            </div>
          </div>

          {/* 进度条 */}
          <div className="mt-6">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600">总进度</span>
              <span className="font-medium text-gray-900">{progress}%</span>
            </div>
            <div className="h-2 bg-white rounded-full overflow-hidden">
              <div
                className={`h-full ${colors.text} transition-all duration-500`}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* 阶段时间线 */}
        <div className="relative">
          {/* 时间线竖线 */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200" />

          <div className="space-y-6">
            {path.phases.map((phase, phaseIndex) => {
              const isExpanded = expandedPhases.has(phase.id)
              const phaseCompleted = phase.milestones.filter((m) => m.completed).length

              return (
                <div key={phase.id} className="relative pl-14">
                  {/* 时间线节点 */}
                  <div
                    className={`absolute left-3 w-6 h-6 rounded-full border-2 ${colors.border} ${colors.bg} flex items-center justify-center`}
                  >
                    <span className="text-xs font-medium text-gray-600">
                      {phaseIndex + 1}
                    </span>
                  </div>

                  {/* 阶段卡片 */}
                  <div
                    className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-gray-300 transition-colors cursor-pointer"
                    onClick={() => togglePhase(phase.id)}
                  >
                    <div className="p-4 flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-gray-900">{phase.title}</h3>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${colors.bg} ${colors.text}`}>
                            {phase.duration}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500">{phase.subtitle}</p>
                        <p className="text-sm text-gray-600 mt-1">{phase.description}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-500">
                          {phaseCompleted}/{phase.milestones.length}
                        </span>
                        <ChevronRight
                          className={`w-5 h-5 text-gray-400 transition-transform ${isExpanded ? 'rotate-90' : ''}`}
                        />
                      </div>
                    </div>

                    {/* 展开的里程碑 */}
                    {isExpanded && (
                      <div className="border-t border-gray-100">
                        <div className="p-4 bg-gray-50 space-y-3">
                          {phase.milestones.map((milestone) => (
                            <div
                              key={milestone.id}
                              className="bg-white rounded-lg p-4 border border-gray-100"
                            >
                              <div className="flex items-start gap-3">
                                <div className="mt-0.5">
                                  {milestone.completed ? (
                                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                                  ) : (
                                    <Circle className="w-5 h-5 text-gray-300" />
                                  )}
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-medium text-gray-900 mb-1">
                                    {milestone.title}
                                  </h4>
                                  <p className="text-sm text-gray-600 mb-2">
                                    {milestone.description}
                                  </p>
                                  <ul className="space-y-1">
                                    {milestone.tasks.map((task, taskIndex) => (
                                      <li
                                        key={taskIndex}
                                        className="flex items-start gap-2 text-sm text-gray-500"
                                      >
                                        <span className="text-gray-300">•</span>
                                        <span>{task}</span>
                                      </li>
                                    ))}
                                  </ul>
                                  {milestone.relatedModels && milestone.relatedModels.length > 0 && (
                                    <div className="mt-3 flex flex-wrap gap-2">
                                      {milestone.relatedModels.map((modelId) => (
                                        <button
                                          key={modelId}
                                          onClick={(e) => {
                                            e.stopPropagation()
                                            navigate(`/physics/models/${modelId}`)
                                          }}
                                          className={`text-xs px-2 py-1 rounded border ${colors.border} ${colors.text} hover:bg-white transition-colors`}
                                        >
                                          {modelId}
                                        </button>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* 底部操作区 */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => navigate('/planner')}
            className="px-6 py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors"
          >
            查看其他路径
          </button>
        </div>
      </div>
    </div>
  )
}
