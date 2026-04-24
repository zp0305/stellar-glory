import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { supabase, isSupabaseConfigured } from '@/lib/supabase'
import { useAuthStore } from './authStore'
import type { Favorite, FavoriteType } from './types'

interface FavoritesState {
  favorites: Favorite[]
  isLoading: boolean
  isSynced: boolean

  // Actions
  syncFromSupabase: () => Promise<void>
  addFavorite: (item: Omit<Favorite, 'id' | 'addedAt'>) => void
  removeFavorite: (itemId: string, type: FavoriteType) => void
  toggleFavorite: (item: Omit<Favorite, 'id' | 'addedAt'>) => void
  isFavorited: (itemId: string, type: FavoriteType) => boolean
  clearAll: () => void
}

// 监听 auth 变化，自动同步
function subscribeToAuthChange(syncFn: () => Promise<void>) {
  if (!isSupabaseConfigured) return () => {}
  return supabase.auth.onAuthStateChange(() => {
    // 用户登录/登出时，重新同步收藏
    syncFn()
  }).data.subscription
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],
      isLoading: false,
      isSynced: false,

      syncFromSupabase: async () => {
        const userId = useAuthStore.getState().userId
        if (!isSupabaseConfigured || !userId) return

        set({ isLoading: true })
        try {
          const { data, error } = await supabase
            .from('favorites')
            .select('*')
            .eq('user_id', userId)
            .order('created_at', { ascending: false })

          if (!error && data) {
            const favorites: Favorite[] = data.map((row: Record<string, unknown>) => ({
              id: row.id as string,
              type: row.type as FavoriteType,
              itemId: row.item_id as string,
              title: row.title as string,
              note: row.note as string | undefined,
              addedAt: row.created_at as string,
            }))
            set({ favorites, isLoading: false, isSynced: true })
          }
        } catch {
          set({ isLoading: false })
        }
      },

      addFavorite: async (item) => {
        const { favorites } = get()
        const exists = favorites.some(
          (f) => f.itemId === item.itemId && f.type === item.type
        )
        if (exists) return

        const newFav: Favorite = {
          ...item,
          id: `${item.type}-${item.itemId}-${Date.now()}`,
          addedAt: new Date().toISOString(),
        }

        // 先更新本地
        set({ favorites: [...favorites, newFav] })

        // 同步 Supabase
        if (isSupabaseConfigured) {
          const userId = useAuthStore.getState().userId
          if (userId) {
            await supabase.from('favorites').insert({
              user_id: userId,
              type: item.type,
              item_id: item.itemId,
              title: item.title,
              note: item.note,
            })
          }
        }
      },

      removeFavorite: async (itemId, type) => {
        set((state) => ({
          favorites: state.favorites.filter(
            (f) => !(f.itemId === itemId && f.type === type)
          ),
        }))

        if (isSupabaseConfigured) {
          const userId = useAuthStore.getState().userId
          if (userId) {
            await supabase
              .from('favorites')
              .delete()
              .eq('user_id', userId)
              .eq('item_id', itemId)
              .eq('type', type)
          }
        }
      },

      toggleFavorite: (item) => {
        const { favorites, addFavorite, removeFavorite } = get()
        const exists = favorites.some(
          (f) => f.itemId === item.itemId && f.type === item.type
        )
        if (exists) {
          removeFavorite(item.itemId, item.type)
        } else {
          addFavorite(item)
        }
      },

      isFavorited: (itemId, type) => {
        return get().favorites.some(
          (f) => f.itemId === itemId && f.type === type
        )
      },

      clearAll: async () => {
        set({ favorites: [] })
        if (isSupabaseConfigured) {
          const userId = useAuthStore.getState().userId
          if (userId) {
            await supabase.from('favorites').delete().eq('user_id', userId)
          }
        }
      },
    }),
    {
      name: 'xingyao-favorites',
      // 只在未配置 Supabase 时持久化到 localStorage
      // 配置后由 Supabase 管理
      skipHydration: isSupabaseConfigured,
    }
  )
)

// Supabase 配置好后，自动同步
if (isSupabaseConfigured) {
  // 用户登录/登出时重新同步
  // 监听 userId 变化，变化后同步收藏夹
  let lastUserId: string | null = null
  useAuthStore.subscribe(
    (state) => {
      if (state.userId !== lastUserId) {
        lastUserId = state.userId
        if (state.userId) useFavoritesStore.getState().syncFromSupabase()
      }
    }
  )

  // 初始化时：安静降级，不强制匿名登录（避免 422）
  useAuthStore.getState().init().then(() => {
    useFavoritesStore.getState().syncFromSupabase()
  })
}
