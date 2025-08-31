// src/pages/PYQ.tsx
import { useMemo, useState } from 'react'
import SearchBar from '../components/SearchBar'
import { PYQS, type PYQ } from '../data/pyq'
import Tag from '../components/Tag'
import { useBookmarks } from '../store/bookmarks'

export default function PYQPage() {
  const [q, setQ] = useState('')
  const [year, setYear] = useState<number | 'All'>('All')
  const { items, add, remove } = useBookmarks()

  const years = Array.from(new Set(PYQS.map((p) => p.year))).sort((a, b) => b - a)

  const list = useMemo(
    () =>
      PYQS.filter((p) => (year === 'All' ? true : p.year === year)).filter((p) =>
        q ? (p.question + ' ' + p.topic + ' ' + p.paper).toLowerCase().includes(q.toLowerCase()) : true
      ),
    [q, year]
  )

  return (
    <div className="container py-6 space-y-4">
      <div className="flex flex-col sm:flex-row gap-2 justify-between items-stretch sm:items-center">
        <SearchBar placeholder="Search PYQs by keyword/topic" onChange={setQ} />
        <div className="flex gap-2 overflow-x-auto items-center">
          <span className="text-sm">Year:</span>
          <button
            className={`badge ${year === 'All' ? 'ring-2 ring-sky-500' : ''}`}
            onClick={() => setYear('All')}
          >
            All
          </button>
          {years.map((y) => (
            <button
              key={y}
              className={`badge ${year === y ? 'ring-2 ring-sky-500' : ''}`}
              onClick={() => setYear(y)}
            >
              {y}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {list.map((p: PYQ) => {
          const saved = items.some((b) => b.id === p.id)
          return (
            <article key={p.id} className="card p-4">
              <div className="flex items-center justify-between">
                <div className="flex gap-2 items-center">
                  <Tag label={p.paper} />
                  <Tag label={String(p.year)} />
                  <Tag label={p.topic} />
                </div>
                <button
                  className="btn-ghost"
                  onClick={() => (saved ? remove(p.id) : add({ id: p.id, type: 'pyq' }))}
                >
                  {saved ? '★ Saved' : '☆ Save'}
                </button>
              </div>
              <p className="mt-2 text-sm leading-relaxed">{p.question}</p>
            </article>
          )
        })}
        {list.length === 0 && <p className="text-sm text-slate-500">No PYQs match your search.</p>}
      </div>
    </div>
  )
}