// src/App.tsx
import { Route, Routes, Navigate } from 'react-router-dom'
import TopBar from './components/TopBar'
import Home from './pages/Home'
import CurrentAffairsPage from './pages/CurrentAffairs'
import QuizPage from './pages/Quiz'
import PYQPage from './pages/PYQ'
import BookmarksPage from './pages/Bookmarks'
import SettingsPage from './pages/Settings'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/current-affairs" element={<CurrentAffairsPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/pyq" element={<PYQPage />} />
          <Route path="/bookmarks" element={<BookmarksPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </main>
      <footer className="border-t border-slate-200/60 dark:border-slate-800/60 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} GKChaupal. Built with ❤ for UPSC/UPPSC prep.
      </footer>
    </div>
  )
}