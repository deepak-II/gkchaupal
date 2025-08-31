// src/components/SearchBar.tsx
import { useState } from 'react'
import { X } from 'lucide-react'

export default function SearchBar({
  placeholder,
  onChange,
}: {
  placeholder?: string
  onChange: (q: string) => void
}) {
  const [q, setQ] = useState('')

  const update = (val: string) => {
    setQ(val)
    onChange(val)
  }

  return (
    <div className="flex items-center gap-2">
      <input
        className="input"
        value={q}
        placeholder={placeholder || 'Search...'}
        onChange={(e) => update(e.target.value)}
      />
      {q && (
        <button className="btn-ghost" onClick={() => update('')}>
          <X size={18} />
        </button>
      )}
    </div>
  )
}