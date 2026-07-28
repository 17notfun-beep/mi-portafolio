"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { WebGLShader } from "@/components/ui/web-gl-shader";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

const spring = {
  type: "spring" as const,
  damping: 20,
  stiffness: 100,
  mass: 0.8,
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  initial: { opacity: 0, y: 30, filter: "blur(8px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: spring,
  },
};

export function Hero() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    let rafId: number | null = null;

    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const heroHeight = window.innerHeight;
        const fade = Math.max(0.08, 1 - scrollY / heroHeight);
        setOpacity(fade);
        rafId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div style={{ opacity }} className="fixed inset-0 z-0">
        <WebGLShader />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6">
        <div className="relative border border-white/10 p-2 mx-auto">
          <main className="relative border border-white/10 py-16 overflow-hidden">
            <motion.div
              variants={stagger}
              initial="initial"
              animate="animate"
            >
              <motion.div
                variants={fadeUp}
                className="mb-6 text-center"
              >
                <div className="inline-block bg-white/10 backdrop-blur-sm text-white/80 text-sm font-medium px-4 py-1.5 rounded-full border border-white/10">
                  Disponible para nuevos proyectos
                </div>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mb-6 text-white text-center text-7xl font-black tracking-tight md:text-[clamp(2rem,8vw,7rem)]"
              >
                Crea. Escala.{' '}
                <span className="text-emerald-400">
                  Vende.
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-white/60 px-6 text-center text-xs md:text-sm lg:text-lg max-w-2xl mx-auto"
              >
                Creo páginas web que hacen crecer tu negocio. Diseño moderno,
                rápido y optimizado para convertir visitantes en clientes.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="my-8 flex items-center justify-center gap-1"
              >
                <span className="relative flex h-3 w-3 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>
                <p className="text-xs text-green-500">Disponible para nuevos proyectos</p>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="flex justify-center"
              >
                <a href="#contacto">
                  <LiquidButton className="text-white border rounded-full" size="xl">
                    Empezar mi proyecto
                  </LiquidButton>
                </a>
              </motion.div>
            </motion.div>
          </main>
        </div>
      </div>
    </section>
  );
}
