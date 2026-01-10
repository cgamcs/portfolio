import { motion } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}

export function FadeIn({ 
  children, 
  delay = 0, 
  className = "", 
  direction = "up" 
}: FadeInProps) {
  
  // Configuración de direcciones
  const directionOffset = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directionOffset[direction] 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      // 'once: true' hace que la animación solo ocurra la primera vez (no se repite al subir/bajar)
      // 'margin: -100px' espera a que el elemento entre 100px en pantalla antes de iniciar
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 1.2, 
        delay: delay, 
        type: "spring", 
        bounce: 0.2 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}