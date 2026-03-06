import { useEffect } from "react";
import Marquee from "../components/Marquee";
import { Link } from "react-router-dom";

function MainView() {
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           entry.target.classList.add("visible");
  //         }
  //       });
  //     },
  //     { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  //   );

  //   const animatedElements = document.querySelectorAll(".fade-in-up, .fade-in");
  //   console.log("Elementos encontrados:", animatedElements.length);
  //   animatedElements.forEach((el) => observer.observe(el));

  //   // Cleanup al desmontar el componente
  //   return () => observer.disconnect();
  // }, []); // [] = solo se ejecuta una vez al montar
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".fade-in-up, .fade-in");
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      // Si ya está en el viewport al cargar, agregarlo visible sin animación
      if (rect.top < window.innerHeight) {
        el.classList.add("no-transition");
        el.classList.add("visible");
      } else {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className=" mt-50 mb-5 flex flex-col fade-in-up">
        <Link to="/" className="text-black dark:text-white">
          César García
        </Link>

        <span className="-mt-1.5 text-indigo-600 dark:text-indigo-400">
          Software Engineer
        </span>
      </div>

      <div className="mt-10">
        <div className="fade-in-up delay-100">
          <h2 className="font-medium text-black dark:text-white mb-5 sm:mb-6">
            Actualmente
          </h2>

          <p className="text-lg/7">
            Practicante de Ingeniería de Software en Viakable. Construyo
            aplicaciones web con JavaScript y Progress enfocadas en interfaces
            limpias y funcionales.
          </p>

          <p className="text-lg/7 mt-4 mb-16">
            Me gusta programar y ver peliculas.
          </p>

          <section
            className="enable-animation relative overflow-hidden
            mask-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
          >
            <Marquee />
          </section>
        </div>

        <section className="-mb-3 mt-16 sm:mt-16 fade-in-up delay-200">
          <h2 className="font-medium text-black dark:text-white mb-5 sm:mb-6">
            Proyectos
          </h2>

          <div className="flex flex-col gap-7 sm:gap-4">
            <a
              href="https://www.profescore.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="-mx-3 flex flex-col rounded-md px-3 no-underline hover:bg-[#F5F4F4] dark:hover:bg-[#222221] sm:py-3"
            >
              <h3 className="text-black dark:text-white">ProfeScore</h3>
              <span>Plataforma para evaluar profesores.</span>
            </a>

            <a
              href="https://simulacion-horario.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="-mx-3 flex flex-col rounded-md px-3 no-underline hover:bg-[#F5F4F4] dark:hover:bg-[#222221] sm:py-3"
            >
              <h3 className="text-black dark:text-white">
                Simulación de Horario
              </h3>
              <span>Aplicación para simular horarios de clases.</span>
            </a>

            <a
              href="https://control-gastos-smoky.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="-mx-3 flex flex-col rounded-md px-3 no-underline hover:bg-[#F5F4F4] dark:hover:bg-[#222221] sm:py-3"
            >
              <h3 className="text-black dark:text-white">Control de Gastos</h3>
              <span>Aplicación para controlar gastos personales.</span>
            </a>
          </div>
        </section>

        <section className="-mb-3 mt-16 sm:mt-32 fade-in-up delay-300">
          <h2 className="font-medium text-black dark:text-white mb-5 sm:mb-6">
            Experiencia
          </h2>

          <div className="flex flex-col gap-7 sm:gap-4">
            <Link
              to="/experiencia/viakable"
              className="-mx-3 flex flex-col rounded-md px-3 no-underline hover:bg-[#F5F4F4] dark:hover:bg-[#222221] sm:py-3"
            >
              <h3 className="text-black dark:text-white">
                Software Engineer (Prácticas) @{" "}
                <span className="font-medium text-indigo-600 dark:text-indigo-400">
                  Viakable
                </span>{" "}
              </h3>
              <span>Junio 2025 - Presente</span>
            </Link>

            <Link
              to="/experiencia/profescore"
              className="-mx-3 flex flex-col rounded-md px-3 no-underline hover:bg-[#F5F4F4] dark:hover:bg-[#222221] sm:py-3"
            >
              <h3 className="text-black dark:text-white">
                Lead Developer & Founder @{" "}
                <span className="font-medium text-indigo-600 dark:text-indigo-400">
                  ProfeScore
                </span>{" "}
              </h3>
              <span>Diciembre 2024 - Presente</span>
            </Link>

            <Link
              to="/experiencia/uanl"
              className="-mx-3 flex flex-col rounded-md px-3 no-underline hover:bg-[#F5F4F4] dark:hover:bg-[#222221] sm:py-3"
            >
              <h3 className="text-black dark:text-white">
                Estudiante de Ingeniería de Software @{" "}
                <span className="font-medium text-indigo-600 dark:text-indigo-400">
                  UANL
                </span>{" "}
              </h3>
              <span>Agosto 2021 - Presente</span>
            </Link>
          </div>
        </section>

        <section className="-mb-3 mt-16 sm:mt-32">
          <h2 className="font-medium text-black dark:text-white mb-5 sm:mb-6">
            Más información
          </h2>
          <p>
            Puedes ver mi código en{" "}
            <a
              href="https://github.com/cgamcs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400 underline"
            >
              GitHub
            </a>{" "}
            o revisar mi perfil en{" "}
            <a
              href="https://www.linkedin.com/in/cgamcs/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400 underline"
            >
              LinkedIn
            </a>{" "}
            para conocer mi vida profesional.
          </p>
        </section>
      </div>
    </>
  );
}

export default MainView;
