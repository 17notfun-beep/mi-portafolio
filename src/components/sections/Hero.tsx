"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block bg-gray-100 text-gray-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6"
        >
          Disponible para nuevos proyectos
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight"
        >
          Creo páginas web
          <br />
          <span className="text-gray-400">que hacen crecer</span>
          <br />
          tu negocio
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-gray-500 max-w-2xl mx-auto mb-10"
        >
          Diseño y desarrollo de sitios web modernos, rápidos y optimizados.
          Transformo tus ideas en una presencia digital que vende.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contacto"
            className="bg-gray-900 text-white px-8 py-3.5 rounded-full font-medium hover:bg-gray-700 transition-colors"
          >
            Empezar mi proyecto
          </a>
          <a
            href="#proyectos"
            className="border border-gray-200 text-gray-700 px-8 py-3.5 rounded-full font-medium hover:bg-gray-50 transition-colors"
          >
            Ver trabajos
          </a>
        </motion.div>
      </div>
    </section>
  );
}
