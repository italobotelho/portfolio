"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function InteractiveUI() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Força a remoção do cursor padrão injetando uma tag de estilo diretamente no head
    const cursorStyle = document.createElement('style');
    cursorStyle.innerHTML = `
      @media (min-width: 768px) {
        * { cursor: none !important; }
      }
    `;
    document.head.appendChild(cursorStyle);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button' || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.head.removeChild(cursorStyle);
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-neon-pink origin-left z-50 shadow-[0_0_10px_var(--color-neon-pink)]"
        style={{ scaleX }}
      />

      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full border-2 border-neon-blue pointer-events-none z-50 mix-blend-screen hidden md:block"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isHovering ? 2 : 1,
          backgroundColor: isHovering ? "rgba(37, 99, 235, 0.2)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-neon-pink rounded-full pointer-events-none z-50 hidden md:block"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 40, mass: 0.1 }}
      />
    </>
  );
}
