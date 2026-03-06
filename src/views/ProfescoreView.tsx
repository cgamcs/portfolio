function ProfescoreView() {
  return (
    <>
      <p className="text-lg/7 mb-6.5"><strong>Tecnologías clave:</strong> React, TypeScript, Express, Axios, Tailwind CSS, JWT, MongoDB y varias librerías de componentes UI.</p>

      <p className="text-lg/7 text-black dark:text-white mb-4">Visión y objetivo</p>

      <p className="text-lg/7 mb-6.5">
        Creé una solución <strong>full‑stack</strong> que permite a estudiantes y académicos calificar y comentar la labor docente de manera segura, anónima y estructurada. La plataforma facilita la recopilación de retroalimentación cualitativa y cuantitativa, ofreciendo a las instituciones universitarias datos accionables para mejorar la calidad educativa.
      </p>

      <div className="border rounded-md overflow-hidden mb-6.5">
        <table>
          <thead>
            <tr className="border-b">
              <td className="p-2 text-black dark:text-white">Área</td>
              <td className="p-2 text-black dark:text-white">Acción concreta</td>
              <td className="p-2 text-black dark:text-white">Impacto</td>
            </tr>
          </thead>
          <tbody>
            <tr  className="border-b">
              <td className="p-2"><strong>Arquitectura y backend</strong></td>
              <td className="p-2">
                Diseñé e implementé una API RESTful con <strong>Express</strong> y <strong>Node.js</strong>, gestionando autenticación mediante <strong>JWT</strong> y conectando a <strong>MongoDB</strong> para almacenar evaluaciones, perfiles y métricas.
              </td>
              <td className="p-2">
                Garantiza escalabilidad, seguridad y persistencia de datos en tiempo real.
              </td>
            </tr>

            <tr  className="border-b">
              <td className="p-2"><strong>Frontend</strong></td>
              <td className="p-2">
                Construí la interfaz con <strong>React</strong> y <strong>TypeScript</strong>, aplicando <strong>Tailwind CSS</strong> para lograr un diseño responsivo y consistente. Utilicé librerías de componentes (por ejemplo, <strong>Headless UI, React‑Hook‑Form</strong>) para acelerar el desarrollo y mantener la accesibilidad.
              </td>
              <td className="p-2">
                Ofrece una experiencia fluida y moderna tanto en escritorio como en dispositivos móviles.
              </td>
            </tr>

            <tr  className="border-b">
              <td className="p-2"><strong>Comunicación cliente‑servidor</strong></td>
              <td className="p-2">
                Integré <strong>Axios</strong> para manejar peticiones HTTP, centralizando la lógica de llamadas API y gestión de errores. Implementé interceptores para refrescar tokens automáticamente.
              </td>
              <td className="p-2">
                Reduce la latencia percibida y simplifica el manejo de sesiones expiradas.
              </td>
            </tr>

            <tr>
              <td className="p-2"><strong>Seguridad y privacidad</strong></td>
              <td className="p-2">
                Implementé cifrado de contraseñas con <strong>bcrypt</strong>, validación estricta de payloads y políticas CORS. Los datos de evaluación se almacenan de forma anonimizada cuando el usuario lo solicita.
              </td>
              <td className="p-2">
                Cumple con normativas de protección de datos y genera confianza entre los usuarios.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-lg/7 text-black dark:text-white mb-4">
        Resultados y aprendizaje
      </p>

      <ul className="list-disc pl-4 mb-6.5">
        <li className="mb-1">
          <strong>Adopción temprana:</strong> Cerca de 2,000 usuarios activos en el primeros día de lanzamiento.
        </li>

        <li className="mb-1">
          <strong>Crecimiento técnico:</strong> Consolidé habilidades avanzadas en <strong>TypeScript, optimización de bases de datos NoSQL</strong> y <strong>patrones de arquitectura</strong> (separación de capas, servicios reutilizables).
        </li>
      </ul>

      <p className="text-lg/7 text-black dark:text-white mb-4">
        Enfoque y estilo de trabajo
      </p>

      <ul className="list-disc pl-4">
        <li className="mb-1">
          Añadir <strong>analítica avanzada</strong> on dashboards interactivos (Chart.js/D3).
        </li>

        <li className="mb-1">
          Integrar <strong>OAuth2</strong> (Google, Microsoft) para simplificar el registro.
        </li>

        <li className="mb-1">
          Expandir la plataforma a nivel internacional, adaptando la UI a varios idiomas y normas de privacidad locales.
        </li>
      </ul>
    </>
  )
}

export default ProfescoreView