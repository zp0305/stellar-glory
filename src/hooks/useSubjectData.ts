import { useParams } from 'react-router-dom'
import { getSubjectData, type SubjectDataRegistry } from '@/data/registry'
import { getSubject } from '@/data/subjects'

export function useSubjectData(): {
  data: SubjectDataRegistry | null
  subject: string | null
  subjectMeta: ReturnType<typeof getSubject>
} {
  const { subject } = useParams<{ subject: string }>()
  const data = subject ? (getSubjectData(subject) ?? null) : null
  const subjectMeta = getSubject(subject ?? '')

  return {
    data,
    subject: subject ?? null,
    subjectMeta,
  }
}