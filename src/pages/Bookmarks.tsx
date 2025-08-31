// src/pages/Bookmarks.tsx
import { useBookmarks } from '../store/bookmarks'
import { CURRENT_AFFAIRS } from '../data/currentAffairs'
import { PYQS } from '../data/pyq'

export default function BookmarksPage() {
  const { items, remove } = useBookmarks()

  // Quick lookup maps
  const newsById = new Map(CURRENT_AFFAIRS.map((n) => [n.id, n]))
  const pyqById = new Map(PYQS.map((p) => [p.id, p]))

  // Build display list from saved items
  const list = items
    .map((b) => (b.type === 'news' ? { ...(newsById.get(b.id) as any), b } : { ...(pyqById.get(b.id) as any), b }))
    .filter(Boolean) as any[]

  return (
    <div className="container py-6 space-y-3">
      <h2 className="text-xl font-bold">Your Bookmarks</h2>

      {list.length === 0 && <p className="text-sm text-slate-500">Nothing saved yet. Save from Current Affairs or PYQ pages.</p>}

      <div className="space-y-3">
        {list.map((it) => (
          <div key={it.id} className="card p-4 flex items-start justify-between gap-4">
            <div>
              <div className="text-xs text-slate-500">{it.b.type.toUpperCase()}</div>
              <div className="font-semibold">
                {it.title || it.question}
              </div>
            </div>
            <button className="btn-ghost" onClick={() => remove(it.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  )
}