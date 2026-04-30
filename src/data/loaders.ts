const subjectLoaders: Record<string, () => Promise<unknown>> = {
  physics: () => import('@/data/physics'),
  chemistry: () => import('@/data/chemistry'),
  math: () => import('@/data/math'),
  biology: () => import('@/data/biology'),
  english: () => import('@/data/english'),
  chinese: () => import('@/data/chinese'),
}

const loadingPromises = new Map<string, Promise<unknown>>()

export function loadSubjectData(subjectId: string): Promise<unknown> | null {
  const loader = subjectLoaders[subjectId]
  if (!loader) return null
  if (loadingPromises.has(subjectId)) return loadingPromises.get(subjectId)!
  const promise = loader().catch(err => {
    console.error(`Failed to load subject data: ${subjectId}`, err)
    loadingPromises.delete(subjectId)
    throw err
  })
  loadingPromises.set(subjectId, promise)
  return promise
}

export function isSubjectLoadable(subjectId: string): boolean {
  return subjectId in subjectLoaders
}
