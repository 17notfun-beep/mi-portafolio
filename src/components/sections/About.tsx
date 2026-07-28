"use client";

import { useInView } from "@/lib/useInView";

export function About() {
  const left = useInView();
  const right = useInView();

  return (
    <section id="sobre-mi" className="py-20 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            ref={left.ref}
            className={left.isInView ? "animate-on-scroll-left" : "opacity-0"}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Sobre mí</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Soy diseñador y desarrollador full stack con base en Argentina. Mi
              enfoque se centra en escuchar atentamente cada necesidad del cliente
              para traducir sus ideas en soluciones web que realmente funcionan.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              No se trata solo de código y diseños bonitos, sino de construir
              herramientas que ayuden a crecer tu negocio. Cada proyecto es una
              oportunidad para superar expectativas.
            </p>
            <div className="flex gap-8">
              <div>
                <p className="text-3xl font-bold text-white">100%</p>
                <p className="text-sm text-gray-400">Compromiso</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">24h</p>
                <p className="text-sm text-gray-400">Respuesta</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">1:1</p>
                <p className="text-sm text-gray-400">Atención</p>
              </div>
            </div>
          </div>

          <div
            ref={right.ref}
            className={`bg-gradient-to-br from-gray-800 to-gray-700 rounded-3xl h-80 flex items-center justify-center ${
              right.isInView ? "animate-on-scroll-right" : "opacity-0"
            }`}
          >
            <span className="text-8xl">👨‍💻</span>
          </div>
        </div>
      </div>
    </section>
  );
}
