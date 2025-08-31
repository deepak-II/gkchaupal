// src/pages/Settings.tsx
import { useTheme } from '../store/theme'

export default function SettingsPage() {
  const { toggle } = useTheme()

  return (
    <div className="container py-6 space-y-4">
      <div className="card p-4">
        <h2 className="text-lg font-semibold mb-2">Appearance</h2>
        <button className="btn" onClick={toggle}>Toggle Dark/Light</button>
      </div>

      <div className="card p-4">
        <h2 className="text-lg font-semibold mb-2">Data</h2>
        <button
          className="btn-ghost"
          onClick={() => {
            localStorage.clear()
            location.reload()
          }}
        >
          Clear Local Data
        </button>
      </div>
    </div>
  )
}