import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 1. Definimos los datos fuera del componente para mantener el código limpio
const experienceData = {
  viakable: {
    title: "Software Engineer (Prácticas)",
    company: "Viakable",
    date: "Junio 2025 - Presente",
    points: [
      "Desarrollo y mantenimiento de interfaces de usuario responsivas utilizando JavaScript, HTML y CSS.",
      "Manejo de bases de datos y lógica de negocio en Progress 4GL / ABL y WebSpeed.",
      "Colaboración directa con el equipo de sistemas internos para la automatización de reportes.",
    ],
  },
  profescore: {
    title: "Lead Developer & Founder",
    company: "ProfeScore",
    date: "Diciembre 2024 - Presente",
    points: [
      "Diseño y desarrollo de una plataforma para la evaluación de profesores universitarios.",
      "Implementación de arquitectura Fullstack utilizando React, Node.js y MongoDB.",
      "Optimización de consultas y manejo de estados globales para mejorar la experiencia de usuario.",
    ],
  },
  uanl: {
    title: "Estudiante de Ingeniería de Software",
    company: "UANL - FIME",
    date: "Agosto 2021 - Presente",
    points: [
      "Especialización en Tecnología de Software.",
      "Proyectos destacados: Text Embeddings para detectar temas y Algoritmos de optimización."
    ],
  },
};

const menuItems = [
  { id: "viakable", label: "Viakable" },
  { id: "profescore", label: "ProfeScore" },
  { id: "uanl", label: "UANL" },
];

export default function ExperienciaLista() {
  const [activeTab, setActiveTab] = useState("viakable"); 

  // 2. Extraemos la información actual basada en el estado
  // @ts-ignore
  const content = experienceData[activeTab];

  return (
    <div className="flex flex-col md:flex-row gap-5 md:gap-0 w-full">
      <div className="flex flex-col gap-2 md:h-60 border-l-2 md:border-l-0 md:border-r border-[#121212] md:pr-4">
        {menuItems.map((item) => {
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`
                relative py-3 px-6 cursor-pointer text-start transition-all duration-300 uppercase
                ${
                  isActive
                    ? "text-violet-400 font-medium bg-white/5 md:bg-transparent rounded-md md:rounded-none"
                    : "text-neutral-500 hover:text-neutral-300 hover:bg-white/5 md:hover:bg-transparent rounded-md md:rounded-none"
                }
              `}
            >
              <span className="block w-full md:w-32">{item.label}</span>

              {/* Borde animado */}
              {isActive && (
                <motion.div
                  layoutId="activeBorder"
                  className="hidden md:block absolute right-[-17px] top-0 h-full w-[2px] bg-violet-400 rounded-l-sm"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      <div className="flex-1 px-4 md:px-8 py-2">
        <h4 className="text-2xl font-semibold mb-1 text-white">
          {content.title} @{" "}
          <span className="text-violet-400">{content.company}</span>
        </h4>

        <span className=" font-mono text-neutral-500 mb-6 block">
          {content.date}
        </span>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="flex flex-col gap-3 text-neutral-400">
              {content.points.map((point: string, index: number) => (
                <li key={index} className="relative pl-6">
                  <span className="absolute left-0 top-[6px] text-violet-400 text-xs">
                    ▹
                  </span>
                  <p className="leading-relaxed text-sm md:text-lg">
                    {point}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
