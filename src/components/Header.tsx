import { Github, House, Linkedin, Mail, ScrollText } from "lucide-react"

function Header() {
  return (
    <>
      <header className="w-fit fixed top-0 z-100 px-2 md:px-0">
        <nav className="border border-zinc-300 dark:border-[#383939] bg-white/80 dark:bg-[#0E0D0B]/70 backdrop-blur-sm rounded-2xl mt-3 p-2 flex items-center text-zinc-700 dark:text-[#7d7d7d]">
            <a className="ml-4" href="https://cgamcs.vercel.app/" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} aria-label="Inicio">
                <House className="hover:opacity-50 transition-opacity" />
            </a>

            <div className="w-px h-5 bg-zinc-300 dark:bg-[#383939] mx-6"></div>

            <div className="flex items-center gap-7">
                <a target="_blank" href="https://github.com/cgamcs" aria-label="GitHub">
                    <Github className="hover:opacity-50 transition-opacity" />
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/cgamcs/" aria-label="LinkedIn">
                    <Linkedin className="hover:opacity-50 transition-opacity" />
                </a>
                <a target="_blank" href="https://cgamcs.hashnode.dev/" aria-label="Blog">
                    <ScrollText className="hover:opacity-50 transition-opacity" />
                </a>
            </div>

            <div className="w-px h-5 bg-zinc-300 dark:bg-[#383939] mx-6"></div>
            
            <a className="bg-black dark:bg-[#262626] shadow-lg hover:opacity-80 px-5 md:px-8 py-3 rounded-2xl text-zinc-50 dark:text-zinc-300" href="mailto:cesar.garciamcs@gmail.com" aria-label="Email">
              <span className="hidden md:block">Contacto</span>

              <Mail className='md:hidden'/>
            </a>
        </nav>
    </header>
    </>
  )
}

export default Header