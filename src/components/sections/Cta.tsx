"use client";

import { useInView } from "@/lib/useInView";

export function Cta() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 px-6 bg-gray-950">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto text-center ${
          isInView ? "animate-on-scroll" : "opacity-0"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          ¿Tenés un proyecto en mente?
        </h2>
        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
          Hablemos sobre tu idea. Ofrezco presupuestos sin compromiso y plazos
          de entrega rápidos.
        </p>
        <a
          href="#contacto"
          className="inline-block bg-white text-gray-900 px-8 py-3.5 rounded-full font-medium hover:bg-gray-100 transition-colors"
        >
          Solicitar presupuesto
        </a>
      </div>
    </section>
  );
}
