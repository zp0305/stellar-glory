// 共享类型定义，供多个 store 使用
export type FavoriteType = 'model' | 'strategy' | 'vision' | 'question'

export interface Favorite {
  id: string
  type: FavoriteType
  itemId: string
  title: string
  addedAt: string
  note?: string
}
