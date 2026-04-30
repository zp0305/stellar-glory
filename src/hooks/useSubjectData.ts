import { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { getSubjectData, isSubjectRegistered, type SubjectDataRegistry } from '@/data/registry'
import { getSubject, SUBJECTS } from '@/data/subjects'
import { loadSubjectData, isSubjectLoadable } from '@/data/loaders'

/** 从路径中解析学科 ID，如 /chemistry/concepts 返回 'chemistry' */
function parseSubjectFromPath(pathname: string): string | undefined {
  const segments = pathname.split('/').filter(Boolean)
  // 移除可能的 base（如 stellar-glory）
  const start = segments[0] === 'stellar-glory' ? 1 : 0
  const candidate = segments[start]
  return SUBJECTS.find(s => s.id === candidate)?.id
}

export function useSubjectData(): {
  data: SubjectDataRegistry | null
  subject: string | null
  subjectMeta: ReturnType<typeof getSubject>
  loading: boolean
} {
  const params = useParams<{ subject: string }>()
  const location = useLocation()
  const [, setTick] = useState(0)
  const [loading, setLoading] = useState(false)

  // 优先用路由参数、其次从路径解析
  const subject = params.subject ?? parseSubjectFromPath(location.pathname) ?? null

  const data = subject ? (getSubjectData(subject) ?? null) : null
  const subjectMeta = getSubject(subject ?? '')

  useEffect(() => {
    if (!subject) {
      setLoading(false)
      return
    }
    if (isSubjectRegistered(subject)) {
      setLoading(false)
      return
    }
    if (!isSubjectLoadable(subject)) {
      setLoading(false)
      return
    }

    setLoading(true)
    let cancelled = false

    loadSubjectData(subject)?.then(() => {
      if (!cancelled) {
        setLoading(false)
        // 强制重渲染以读取新注册的数据
        setTick(t => t + 1)
      }
    }).catch(() => {
      if (!cancelled) setLoading(false)
    })

    return () => { cancelled = true }
  }, [subject])

  return { data, subject, subjectMeta, loading }
}