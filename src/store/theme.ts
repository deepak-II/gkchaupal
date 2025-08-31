// src/store/theme.ts
import { useEffect } from 'react'

export function useTheme() {
  // Run once when app loads
  useEffect(() => {
    const initial =
      localStorage.getItem('theme') ||
      (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')

    document.documentElement.classList.toggle('dark', initial === 'dark')
  }, [])

  // Toggle between light and dark
  const toggle = () => {
    const nowDark = !document.documentElement.classList.contains('dark')
    document.documentElement.classList.toggle('dark', nowDark)
    localStorage.setItem('theme', nowDark ? 'dark' : 'light')
  }

  return { toggle }
}