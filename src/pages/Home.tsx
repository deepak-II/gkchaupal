// src/pages/Home.tsx
import { Link } from 'react-router-dom'

const Tile = ({ to, title, desc }: { to: string; title: string; desc: string }) => (
  <Link to={to} className="card p-5 hover:shadow-md transition-all">
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{desc}</p>
  </Link>
)

export default function Home() {
  return (
    <div className="container py-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <Tile
        to="/current-affairs"
        title="Daily Current Affairs"
        desc="Curated news points with exam relevance, categories & bookmarking."
      />
      <Tile
        to="/quiz"
        title="Quiz Arena"
        desc="Timed MCQs with instant explanations and review mode."
      />
      <Tile
        to="/pyq"
        title="PYQ Library"
        desc="Filterable previous year questions (UPSC/UPPSC etc.)."
      />
      <Tile to="/bookmarks" title="Bookmarks" desc="Revisit saved items anytime (offline)." />
      <Tile to="/settings" title="Settings" desc="Theme & data controls." />
      <a href="https://gkchaupal.com" target="_blank" rel="noreferrer" className="card p-5">
        <h3 className="text-lg font-semibold">gkchaupal.com</h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Open your site in a new tab.</p>
      </a>
    </div>
  )
}