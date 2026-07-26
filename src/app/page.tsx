const services = [
  {
    title: "Landing Pages",
    description: "Páginas de aterrizaje optimizadas para convertir visitantes en clientes.",
    icon: "🚀",
  },
  {
    title: "Sitios Web Corporativos",
    description: "Presencia profesional para tu negocio con diseño moderno y responsive.",
    icon: "💼",
  },
  {
    title: "E-commerce",
    description: "Tiendas online completas con pasarela de pagos y gestión de productos.",
    icon: "🛒",
  },
  {
    title: "Optimización SEO",
    description: "Posicionamiento en buscadores para que te encuentren fácilmente.",
    icon: "📈",
  },
];

const projects = [
  {
    title: "Restaurante La Parrilla",
    description: "Sitio web para restaurante con menú online y sistema de reservas.",
    tech: ["Next.js", "Tailwind", "TypeScript"],
    color: "bg-amber-500",
  },
  {
    title: "FitPro Gym",
    description: "Plataforma de gimnasio con clases online y seguimiento de progreso.",
    tech: ["React", "Node.js", "MongoDB"],
    color: "bg-emerald-500",
  },
  {
    title: "TechStart Solutions",
    description: "Sitio corporativo para startup de tecnología con blog integrado.",
    tech: ["Next.js", "Tailwind", "Vercel"],
    color: "bg-blue-500",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">TuNombre</span>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#servicios" className="hover:text-gray-900 transition-colors">Servicios</a>
            <a href="#proyectos" className="hover:text-gray-900 transition-colors">Proyectos</a>
            <a href="#contacto" className="hover:text-gray-900 transition-colors">Contacto</a>
          </div>
          <a
            href="#contacto"
            className="bg-gray-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors"
          >
            Contratar
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block bg-gray-100 text-gray-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Disponible para nuevos proyectos
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            Creo páginas web
            <br />
            <span className="text-gray-400">que hacen crecer</span>
            <br />
            tu negocio
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10">
            Diseño y desarrollo de sitios web modernos, rápidos y optimizados.
            Transformo tus ideas en una presencia digital que vende.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Servicios</h2>
          <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">
            Ofrezco soluciones completas para que tu negocio tenga la presencia digital que merece.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-500">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section id="proyectos" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Proyectos Destacados</h2>
          <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">
            Algunos de los trabajos que he realizado para mis clientes.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all"
              >
                <div className={`h-48 ${project.color} flex items-center justify-center`}>
                  <span className="text-white text-4xl font-bold opacity-30">
                    {project.title.charAt(0)}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Tenés un proyecto en mente?
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Hablemos sobre tu idea. Ofrezco presupuestos sin compromiso y plazos de entrega rápidos.
          </p>
          <a
            href="#contacto"
            className="inline-block bg-white text-gray-900 px-8 py-3.5 rounded-full font-medium hover:bg-gray-100 transition-colors"
          >
            Solicitar presupuesto
          </a>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Contacto</h2>
          <p className="text-gray-500 text-center mb-12">
            Completá el formulario y te respondo en menos de 24 horas.
          </p>
          <form className="space-y-5">
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
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-sm text-gray-400">
            © 2026 TuNombre. Todos los derechos reservados.
          </span>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-gray-600 transition-colors">GitHub</a>
            <a href="#" className="hover:text-gray-600 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
