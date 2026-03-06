// import { Github, Linkedin, Moon, Sun } from 'lucide-react'
// import { useTheme } from '../utils/ThemeContext'
import { ThemeToggle } from './ThemeToggle'

function Footer() {

  return (
    <footer className="mt-10 py-10 flex items-center justify-between">
      <p>César García - {new Date().getFullYear()}</p>

      {/* <div className="flex items-center gap-4">
        <a
          href="https://www.linkedin.com/in/cgamcs/"
          target="_blank"
          rel="noopener noreferrer"
          className='hover:text-black dark:text-white transition-colors ease-out 100ms'
        >
          <Linkedin />
        </a>

        <a
          href="https://github.com/cgamcs"
          target="_blank"
          rel="noopener noreferrer"
          className='hover:text-black dark:text-white transition-colors ease-out 100ms'
        >
          <Github />
        </a>
      </div> */}

      <ThemeToggle />
    </footer>
  )
}

export default Footer