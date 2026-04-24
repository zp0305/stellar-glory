import { create } from 'zustand'
import { supabase, isSupabaseConfigured } from '@/lib/supabase'

interface AuthState {
  userId: string | null
  isLoading: boolean
  isAnonymous: boolean

  // Actions
  init: () => Promise<void>
  signInAnonymously: () => Promise<void>
  signOut: () => Promise<void>
}

export const useAuthStore = create<AuthState>((set) => ({
  userId: null,
  isLoading: true,
  isAnonymous: false,

  init: async () => {
    if (!isSupabaseConfigured) {
      set({ isLoading: false, userId: null, isAnonymous: false })
      return
    }

    try {
      const { data: { session } } = await supabase.auth.getSession()
      if (session?.user) {
        set({ userId: session.user.id, isLoading: false, isAnonymous: session.user.is_anonymous ?? false })
        return
      }
      // 无 session，安静降级，不尝试匿名登录
      set({ isLoading: false, userId: null, isAnonymous: false })
    } catch {
      set({ isLoading: false, userId: null, isAnonymous: false })
    }
  },

  signInAnonymously: async () => {
    if (!isSupabaseConfigured) {
      console.warn('Supabase 未配置')
      return
    }

    try {
      const { data, error } = await supabase.auth.signInAnonymously()
      if (error) throw error
      set({
        userId: data.user?.id ?? null,
        isAnonymous: true,
      })
    } catch (err) {
      console.error('匿名登录失败:', err)
    }
  },

  signOut: async () => {
    if (!isSupabaseConfigured) return
    await supabase.auth.signOut()
    set({ userId: null, isAnonymous: false })
  },
}))
