// src/components/TopBar.tsx
import { Link, NavLink } from 'react-router-dom'
import { useTheme } from '../store/theme'
import { BookMarked, Bookmark, Home, Newspaper, Settings, Trophy } from 'lucide-react'

export default function TopBar() {
  const { toggle } = useTheme()

  const NavItem = ({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) => (
    <NavLink
      to={to}
      className={({ isActive }) => `btn-ghost ${isActive ? 'bg-slate-100 dark:bg-slate-800' : ''}`}
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </NavLink>
  )

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/60 dark:border-slate-800/60 backdrop-blur bg-white/70 dark:bg-slate-950/60">
      <div className="container flex items-center justify-between py-2 gap-2">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/favicon.svg"
            alt="logo"
            className="w-8 h-8"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none'
            }}
          />
          <h1 className="text-lg sm:text-xl font-extrabold tracking-tight">GKChaupal</h1>
        </Link>
        <nav className="flex items-center gap-1">
          <NavItem to="/" icon={<Home size={18} />} label="Home" />
          <NavItem to="/current-affairs" icon={<Newspaper size={18} />} label="Current Affairs" />
          <NavItem to="/quiz" icon={<Trophy size={18} />} label="Quiz" />
          <NavItem to="/pyq" icon={<BookMarked size={18} />} label="PYQ" />
          <NavItem to="/bookmarks" icon={<Bookmark size={18} />} label="Bookmarks" />
          <button className="btn-ghost" onClick={toggle}>
            <Settings size={18} />
            <span className="hidden sm:inline">Theme</span>
          </button>
        </nav>
      </div>
    </header>
  )
}
