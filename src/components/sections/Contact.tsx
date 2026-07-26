"use client";

import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contacto" className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-gray-900 mb-4"
        >
          Contacto
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-500 text-center mb-12"
        >
          Completá el formulario y te respondo en menos de 24 horas.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-5"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="Nombre"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            />
          </div>
          <input
            type="text"
            placeholder="Asunto"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          />
          <textarea
            placeholder="Contame sobre tu proyecto..."
            rows={5}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none"
          />
          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-3.5 rounded-xl font-medium hover:bg-gray-700 transition-colors"
          >
            Enviar mensaje
          </button>
        </motion.form>
      </div>
    </section>
  );
}
