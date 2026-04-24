import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { UserProgress } from '@/types'

interface User {
  id: string
  email: string
  username?: string
  avatar_url?: string
  created_at: string
}

interface UserState {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  progress: Record<string, UserProgress>
  setUser: (user: User | null) => void
  setLoading: (loading: boolean) => void
  logout: () => void
  updateProgress: (knowledgeId: string, update: Partial<UserProgress>) => void
  getProgress: (knowledgeId: string) => UserProgress | undefined
}

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      user: null,
      isLoading: true,
      isAuthenticated: false,
      progress: {},

      setUser: (user) => set({ user, isAuthenticated: !!user, isLoading: false }),
      setLoading: (isLoading) => set({ isLoading }),

      logout: () => set({ user: null, isAuthenticated: false, progress: {} }),

      updateProgress: (knowledgeId, update) => {
        set((state) => {
          const existing = state.progress[knowledgeId]
          const updated: UserProgress = {
            knowledgeId,
            status: existing?.status ?? 'undone',
            progress: existing?.progress ?? 0,
            lastAccessed: new Date().toISOString(),
            ...update,
          }
          return { progress: { ...state.progress, [knowledgeId]: updated } }
        })
      },

      getProgress: (knowledgeId) => get().progress[knowledgeId],
    }),
    { name: 'xingyao-user', partialize: (s) => ({ user: s.user, isAuthenticated: s.isAuthenticated, progress: s.progress }) }
  )
)
