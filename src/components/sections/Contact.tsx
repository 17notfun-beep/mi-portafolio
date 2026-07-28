"use client";

import { useInView } from "@/lib/useInView";

export function Contact() {
  const title = useInView();
  const form = useInView();

  return (
    <section id="contacto" className="py-20 px-6 bg-gray-900">
      <div className="max-w-2xl mx-auto">
        <div
          ref={title.ref}
          className={title.isInView ? "animate-on-scroll" : "opacity-0"}
        >
          <h2 className="text-3xl font-bold text-center text-white mb-4">
            Contacto
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Completá el formulario y te respondo en menos de 24 horas.
          </p>
        </div>

        <div
          ref={form.ref}
          className={form.isInView ? "animate-on-scroll" : "opacity-0"}
        >
          <form className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Nombre"
                className="w-full px-4 py-3 rounded-xl bg-gray-950 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-xl bg-gray-950 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              />
            </div>
            <input
              type="text"
              placeholder="Asunto"
              className="w-full px-4 py-3 rounded-xl bg-gray-950 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
            />
            <textarea
              placeholder="Contame sobre tu proyecto..."
              rows={5}
              className="w-full px-4 py-3 rounded-xl bg-gray-950 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent resize-none"
            />
            <button
              type="submit"
              className="w-full bg-white text-gray-900 py-3.5 rounded-xl font-medium hover:bg-gray-100 transition-colors"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
