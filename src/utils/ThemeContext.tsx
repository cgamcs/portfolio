import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextValue {
  theme: Theme
  toggleTheme: (event: React.MouseEvent) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Leer preferencia guardada o del sistema
    const saved = localStorage.getItem('theme') as Theme | null
    if (saved) return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  // Sincronizar clase en <html>
  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = useCallback((event: React.MouseEvent) => {
    const next: Theme = theme === 'light' ? 'dark' : 'light'

    // Guardar posición del click como origen del clip-path
    document.documentElement.style.setProperty('--theme-x', `${event.clientX}px`)
    document.documentElement.style.setProperty('--theme-y', `${event.clientY}px`)

    // View Transitions API (Chrome 111+, Firefox 126+)
    if (!document.startViewTransition) {
      setTheme(next)
      return
    }

    document.startViewTransition(() => {
      setTheme(next)
    })
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}