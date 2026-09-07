import { House, Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/BrandIcons";

const ICON = 16;
const LINK = "transition-opacity duration-200 ease-(--ease) hover:opacity-50";

export default function Header() {
  return (
    <header className="fixed top-0 z-100 w-fit px-2 md:px-0">
      <nav className="mt-3 flex items-center gap-4 rounded-full border border-border bg-white/80 p-1.5 pl-4 text-secondary backdrop-blur-sm dark:bg-background/70">
        <a href="#top" aria-label="Home">
          <House size={ICON} className={LINK} />
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/cgamcs"
          aria-label="GitHub"
        >
          <Github size={ICON} className={LINK} />
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/cgamcs/"
          aria-label="LinkedIn"
        >
          <Linkedin size={ICON} className={LINK} />
        </a>

        <a
          className="rounded-full bg-black px-3.5 py-1.5 text-14/5 text-zinc-50 transition-opacity duration-200 ease-(--ease) hover:opacity-80 dark:bg-control-active dark:text-zinc-300"
          href="mailto:cesar.garciamcs@gmail.com"
          aria-label="Email"
        >
          <span className="hidden md:block">Contact</span>
          <Mail size={ICON} className="md:hidden" />
        </a>
      </nav>
    </header>
  );
}
