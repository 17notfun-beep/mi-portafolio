"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="sobre-mi" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sobre mí</h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Soy diseñador y desarrollador full stack con base en Argentina. Mi
              enfoque se centra en escuchar atentamente cada necesidad del cliente
              para traducir sus ideas en soluciones web que realmente funcionan.
            </p>
            <p className="text-gray-500 leading-relaxed mb-6">
              No se trata solo de código y diseños bonitos, sino de construir
              herramientas que ayuden a crecer tu negocio. Cada proyecto es una
              oportunidad para superar expectativas.
            </p>
            <div className="flex gap-8">
              <div>
                <p className="text-3xl font-bold text-gray-900">100%</p>
                <p className="text-sm text-gray-400">Compromiso</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">24h</p>
                <p className="text-sm text-gray-400">Respuesta</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">1:1</p>
                <p className="text-sm text-gray-400">Atención</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl h-80 flex items-center justify-center"
          >
            <span className="text-8xl">👨‍💻</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
