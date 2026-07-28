"use client";

import { useInView } from "@/lib/useInView";

export function Cta() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-24 px-6 bg-gray-950">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto text-center ${
          isInView ? "animate-on-scroll" : "opacity-0"
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          ¿Tenés un proyecto en mente?
        </h2>
        <p className="text-gray-400 mb-10 max-w-lg mx-auto text-lg">
          Hablemos sobre tu idea. Ofrezco presupuestos sin compromiso y plazos
          de entrega rápidos.
        </p>
        <a
          href="#contacto"
          className="inline-block bg-emerald-500 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-emerald-400 transition-colors"
        >
          Solicitar presupuesto
        </a>
      </div>
    </section>
  );
}
