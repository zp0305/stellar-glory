export interface SubjectMeta {
  id: string
  code: string
  name: string
  color: string
  routePrefix: string
  modelPrefix: string
  conceptPrefix: string
  available: boolean
}

export const SUBJECTS: SubjectMeta[] = [
  { id: 'physics', code: 'PHY', name: '物理', color: '#3b82f6', routePrefix: '/physics', modelPrefix: 'PHY-M', conceptPrefix: 'P', available: true },
  { id: 'chemistry', code: 'CHE', name: '化学', color: '#10b981', routePrefix: '/chemistry', modelPrefix: 'CHE-M', conceptPrefix: 'C', available: true },
  { id: 'math', code: 'MAT', name: '数学', color: '#8b5cf6', routePrefix: '/math', modelPrefix: 'MAT-M', conceptPrefix: 'K', available: true },
  { id: 'biology', code: 'BIO', name: '生物', color: '#f59e0b', routePrefix: '/biology', modelPrefix: 'BIO-M', conceptPrefix: 'B', available: true },
  { id: 'chinese', code: 'CHN', name: '语文', color: '#ef4444', routePrefix: '/chinese', modelPrefix: 'CHN-C', conceptPrefix: 'Y', available: true },
  { id: 'english', code: 'ENG', name: '英语', color: '#06b6d4', routePrefix: '/english', modelPrefix: 'ENG-M', conceptPrefix: 'E', available: true },
]

export function getSubject(id: string): SubjectMeta | undefined {
  return SUBJECTS.find(s => s.id === id)
}

export function parseSubjectFromPath(pathname: string): string | null {
  const path = pathname.replace('/stellar-glory', '')
  const firstSegment = path.split('/')[1]
  return SUBJECTS.find(s => s.id === firstSegment)?.id ?? null
}
