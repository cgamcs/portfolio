const SobreMi = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-6 tracking-tight">Sobre mí.</h2>

      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-5">
        Soy estudiante de Ingeniería en Tecnología de Software desde 2021,
        actualmente en 8.º semestre. Me especializo en desarrollo frontend y
        recientemente inicié mis prácticas profesionales, donde trabajo con
        tecnologías como Progress y JavaScript.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-5">
        He completado el certificado{" "}
        <strong>CS50's Introduction to Computer Science de Harvard</strong>, lo
        que fortaleció mi base en fundamentos de programación, algoritmos y
        estructuras de datos.
      </p>

      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-5">
        Estas son algunas de las tecnologías con las que he trabajado:
      </p>

      <div className="flex gap-6 mb-5">
        <ul className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
          <li className="relative pl-6">
            <span className="absolute left-0 top-[6px] text-violet-400 text-xs">
              ▹
            </span>
            JavaScript
          </li>
          <li className="relative pl-6">
            <span className="absolute left-0 top-[6px] text-violet-400 text-xs">
              ▹
            </span>
            NodeJS
          </li>
          <li className="relative pl-6">
            <span className="absolute left-0 top-[6px] text-violet-400 text-xs">
              ▹
            </span>
            Express
          </li>
        </ul>
        <ul className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
          <li className="relative pl-6">
            <span className="absolute left-0 top-[6px] text-violet-400 text-xs">
              ▹
            </span>
            PHP
          </li>
          <li className="relative pl-6">
            <span className="absolute left-0 top-[6px] text-violet-400 text-xs">
              ▹
            </span>
            SQL
          </li>
          <li className="relative pl-6">
            <span className="absolute left-0 top-[6px] text-violet-400 text-xs">
              ▹
            </span>
            Git
          </li>
        </ul>
      </div>

      <p className="w-full mb-5 text-neutral-600 dark:text-neutral-400 leading-relaxed">
        Busco seguir creciendo como desarrollador aplicando mis conocimientos en
        diseño de software e interfaces centradas en el usuario.
      </p>
    </div>
  );
};

export default SobreMi;
