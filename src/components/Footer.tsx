// import { Github, Linkedin, Moon, Sun } from 'lucide-react'
// import { useTheme } from '../utils/ThemeContext'
import { ThemeToggle } from './ThemeToggle'

function Footer() {

  return (
    <footer className="mt-10 py-10 flex items-center justify-between w-full">
      <p>César García - {new Date().getFullYear()}</p>

      <ThemeToggle />
    </footer>
  )
}

export default Footer