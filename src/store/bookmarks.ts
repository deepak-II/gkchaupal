// src/store/bookmarks.ts
import { create } from 'zustand'

export type Bookmark = { id: string; type: 'news' | 'pyq' | 'fact' }

type S = {
  items: Bookmark[]
  add: (b: Bookmark) => void
  remove: (id: string) => void
}

const KEY = 'gkc__bookmarks'

export const useBookmarks = create<S>((set, get) => ({
  items: (() => {
    try {
      return JSON.parse(localStorage.getItem(KEY) || '[]')
    } catch {
      return []
    }
  })(),

  add: (b) =>
    set(() => {
      const next = [
        ...get().items.filter((x) => !(x.id === b.id && x.type === b.type)),
        b,
      ]
      localStorage.setItem(KEY, JSON.stringify(next))
      return { items: next }
    }),

  remove: (id) =>
    set(() => {
      const next = get().items.filter((x) => x.id !== id)
      localStorage.setItem(KEY, JSON.stringify(next))
      return { items: next }
    }),
}))
