import { useTheme } from '../utils/ThemeContext'
import { Sun, Moon } from 'lucide-react'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Cambiar a tema ${theme === 'light' ? 'oscuro' : 'claro'}`}
      className="
        relative w-10 h-10 rounded-full
        flex items-center justify-center
        bg-neutral-100 dark:bg-neutral-800
        text-neutral-700 dark:text-neutral-300
        hover:bg-neutral-200 dark:hover:bg-neutral-700
        transition-all active:scale-[0.97] duration-200
        cursor-pointer
      "
    >
      <span
        className="absolute transition-all duration-300"
        style={{
          opacity: theme === 'light' ? 1 : 0,
          transform: theme === 'light'
            ? 'rotate(0deg) scale(1)'
            : 'rotate(90deg) scale(0)',
          filter: theme === 'light' ? 'blur(0px)' : 'blur(2px)', // 👈
        }}
      >
        <Sun size={18} />
      </span>
      <span
        className="absolute transition-all duration-300"
        style={{
          opacity: theme === 'dark' ? 1 : 0,
          transform: theme === 'dark'
            ? 'rotate(0deg) scale(1)'
            : 'rotate(-90deg) scale(0)',
          filter: theme === 'dark' ? 'blur(0px)' : 'blur(2px)', // 👈
        }}
      >
        <Moon size={18} />
      </span>
    </button>
  )
}