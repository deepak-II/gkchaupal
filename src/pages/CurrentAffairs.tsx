// src/pages/CurrentAffairs.tsx
import dayjs from 'dayjs'
import { useState, useMemo } from 'react'
import SearchBar from '../components/SearchBar'
import Tag from '../components/Tag'
import { CURRENT_AFFAIRS, type CAItem } from '../data/currentAffairs'
import { useBookmarks } from '../store/bookmarks'

const CATEGORIES = [
  'All',
  'National',
  'International',
  'Economy',
  'Science & Tech',
  'Environment',
  'Polity',
  'Society',
  'Defence',
  'Sports',
  'Culture',
] as const

type Cat = typeof CATEGORIES[number]

function Card({ item }: { item: CAItem }) {
  const { items, add, remove } = useBookmarks()
  const isSaved = items.some((b) => b.id === item.id)

  return (
    <article className="card p-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-lg leading-snug">{item.title}</h3>
        <button
          className="btn-ghost"
          onClick={() =>
            isSaved ? remove(item.id) : add({ id: item.id, type: 'news' })
          }
        >
          {isSaved ? '★ Saved' : '☆ Save'}
        </button>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <Tag label={item.category} />
        <span className="text-xs text-slate-500">
          {dayjs(item.date).format('DD MMM YYYY')}
        </span>
      </div>
      <ul className="list-disc pl-5 space-y-1 text-sm">
        {item.points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
      {item.source && (
        <p className="text-xs text-slate-500 mt-2">Source: {item.source}</p>
      )}
    </article>
  )
}

export default function CurrentAffairsPage() {
  const [q, setQ] = useState('')
  const [cat, setCat] = useState<Cat>('All')

  const list = useMemo(
    () =>
      CURRENT_AFFAIRS.filter((i) => cat === 'All' || i.category === cat)
        .filter((i) =>
          q
            ? (i.title + ' ' + i.points.join(' '))
                .toLowerCase()
                .includes(q.toLowerCase())
            : true
        )
        .sort((a, b) => b.date.localeCompare(a.date)),
    [q, cat]
  )

  return (
    <div className="container py-6 space-y-4">
      <div className="flex flex-col sm:flex-row gap-2 justify-between items-stretch sm:items-center">
        <SearchBar placeholder="Search by keywords" onChange={setQ} />
        <div className="flex gap-2 overflow-x-auto">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`badge ${c === cat ? 'ring-2 ring-sky-500' : ''}`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {list.map((item) => (
          <Card key={item.id} item={item} />
        ))}
        {list.length === 0 && (
          <p className="text-sm text-slate-500">
            No results. Try another keyword or category.
          </p>
        )}
      </div>
    </div>
  )
}