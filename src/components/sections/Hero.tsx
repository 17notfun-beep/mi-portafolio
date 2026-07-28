"use client";

import { motion } from "framer-motion";
import { WebGLShader } from "@/components/ui/web-gl-shader";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <WebGLShader />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6">
        <div className="relative border border-white/10 p-2 mx-auto">
          <main className="relative border border-white/10 py-16 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 text-center"
            >
              <div className="inline-block bg-white/10 backdrop-blur-sm text-white/80 text-sm font-medium px-4 py-1.5 rounded-full border border-white/10">
                Disponible para nuevos proyectos
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 text-white text-center text-7xl font-extrabold tracking-tighter md:text-[clamp(2rem,8vw,7rem)]"
            >
              Design is Everything
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/60 px-6 text-center text-xs md:text-sm lg:text-lg max-w-2xl mx-auto"
            >
              Creo páginas web que hacen crecer tu negocio. Diseño moderno,
              rápido y optimizado para convertir visitantes en clientes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="my-8 flex items-center justify-center gap-1"
            >
              <span className="relative flex h-3 w-3 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              <p className="text-xs text-green-500">Disponible para nuevos proyectos</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex justify-center"
            >
              <a href="#contacto">
                <LiquidButton className="text-white border rounded-full" size="xl">
                  Empezar mi proyecto
                </LiquidButton>
              </a>
            </motion.div>
          </main>
        </div>
      </div>
    </section>
  );
}
