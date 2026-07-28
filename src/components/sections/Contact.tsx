"use client";

import { useState } from "react";
import { useInView } from "@/lib/useInView";

export function Contact() {
  const title = useInView();
  const form = useInView();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const res = await fetch("https://formspree.io/f/mdaqbael", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(e.currentTarget))),
    });

    setStatus(res.ok ? "sent" : "error");
  };

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
          {status === "sent" ? (
            <div className="text-center py-12">
              <p className="text-2xl mb-2">✓</p>
              <p className="text-white font-medium">Mensaje enviado</p>
              <p className="text-gray-400 text-sm mt-1">Te respondo en menos de 24 horas</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-950 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-950 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                />
              </div>
              <input
                type="text"
                name="asunto"
                placeholder="Asunto"
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-950 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              />
              <textarea
                name="mensaje"
                placeholder="Contame sobre tu proyecto..."
                rows={5}
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-950 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent resize-none"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-white text-gray-900 py-3.5 rounded-xl font-medium hover:bg-gray-100 transition-colors disabled:opacity-50"
              >
                {status === "sending" ? "Enviando..." : "Enviar mensaje"}
              </button>
              {status === "error" && (
                <p className="text-red-400 text-sm text-center">Hubo un error, intentá de nuevo</p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
