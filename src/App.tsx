import { FadeIn } from "@/components/ui/fade-in";
import { DotScreenShader } from "@/components/ui/dot-shader-background";
import SobreMi from "@/components/SobreMi";
import ExperienciaLista from "@/components/ExperienciaLista";
import ProyectosTarjeta from "@/components/ProyectosTarjeta";
import { Github, Linkedin } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const projects = [
  {
    title: "ProfeScore",
    description:
      "Plataforma desarrollada para que los estudiantes puedan calificar y compartir su experiencia con sus profesores, facilitando la toma de decisiones académicas.",
    demoUrl: "https://www.profescore.com/",
    repoUrl: "https://github.com/cgamcs/profescore-main",
  },
  {
    title: "UniPlanner",
    description:
      "Generador de horarios optimizado y personalizado según las materias, cupos disponibles y el historial académico del usuario.",
    demoUrl: "https://simulacion-horario.vercel.app/",
    repoUrl: "https://github.com/cgamcs/horarioEscolar",
  },
  {
    title: "Administrador de Gastos",
    description:
      "Aplicación web para gestionar y categorizar gastos personales, proporcionando visualizaciones claras para un mejor control financiero.",
    demoUrl: "https://control-gastos-smoky.vercel.app/",
    repoUrl: "https://github.com/cgamcs/administrador-pacientes-zustand",
  },
];

export default function App() {
  window.addEventListener("scroll", function () {
    const header = document.getElementById("miHeader");
    if (window.scrollY > 100) {
      header?.classList.add("scroll-activo");
    } else {
      header?.classList.remove("scroll-activo");
    }
  });

  return (
    <>
      <main className="min-h-screen w-full bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
        <section
          id="inicio"
          className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden"
        >
          <header
            id="miHeader"
            className="fixed top-0 w-full z-999 transition-all duration-800 ease-in-out"
          >
            <nav>
              <ul className="flex items-center justify-center gap-6 p-6 text-sm md:text-base font-medium">
                <li>
                  <a
                    href="#inicio"
                    className="transition-colors hover:text-violet-400"
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="#sobre-mi"
                    className="transition-colors hover:text-violet-400"
                  >
                    Sobre mí
                  </a>
                </li>
                <li>
                  <a
                    href="#experiencia"
                    className="transition-colors hover:text-violet-400"
                  >
                    Experiencia
                  </a>
                </li>
                <li>
                  <a
                    href="#proyectos"
                    className="transition-colors hover:text-violet-400"
                  >
                    Proyectos
                  </a>
                </li>
              </ul>
            </nav>
          </header>
          <div className="absolute inset-0 z-0">
            <DotScreenShader />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative z-10 flex flex-col items-center gap-6 px-4">
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mix-blend-exclusion text-white text-center">
                  Hola, soy César.
                </h1>
                <p className="text-lg md:text-xl font-light text-center text-white/90 mix-blend-exclusion max-w-2xl leading-relaxed">
                  Apasionado por la tecnología y el aprendizaje continuo.
                  Actualmente enfocado en JavaScript y en seguir de cerca la
                  evolución de la inteligencia artificial.
                </p>

                <a
                  href="/resumen.pdf"
                  target="_blank"
                  className="mt-8 px-8 py-3 bg-white text-black rounded-full font-medium hover:scale-105 transition-transform hover:opacity-80"
                >
                  Descargar CV
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </section>

        {/* Sobre mí */}
        <section id="sobre-mi" className="py-24 px-6 md:px-12">
          <FadeIn direction="up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mx-auto max-w-5xl">
              <SobreMi />

              <div className="hidden md:block w-64 aspect-[3/4] rounded-lg overflow-hidden shadow-lg mx-auto">
                <img src="/pfp.jpg" alt="" className="w-92" />
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Experiencia */}
        <section id="experiencia" className="py-24 px-6 md:px-12">
          <FadeIn direction="up">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-3xl font-bold mb-12">Experiencia.</h3>

              <ExperienciaLista />
            </div>
          </FadeIn>
        </section>

        {/* Proyectos */}
        <section id="proyectos" className="py-24 px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <FadeIn direction="up">
              <h3 className="text-3xl font-bold mb-12">Proyectos.</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <ProyectosTarjeta
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    demoUrl={project.demoUrl}
                    repoUrl={project.repoUrl}
                  />
                ))}
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <footer className="max-w-5xl mx-auto py-12 flex justify-between">
        <p>
          © César García - <span>{new Date().getFullYear()}</span>
        </p>

        <div className="flex gap-4 items-center">
          <a
            href="https://github.com/cgamcs"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-violet-400 cursor-pointer"
          >
            <Github className="w-6 h-6" />
          </a>

          <a
            href="https://www.linkedin.com/in/cgamcs/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-violet-400 cursor-pointer"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </footer>
    </>
  );
}
