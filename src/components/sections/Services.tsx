"use client";

import { useInView } from "@/lib/useInView";
import { services } from "@/data/services";

export function Services() {
  const title = useInView();

  return (
    <section id="servicios" className="py-20 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div
          ref={title.ref}
          className={title.isInView ? "animate-on-scroll" : "opacity-0"}
        >
          <h2 className="text-3xl font-bold text-center text-white mb-4">
            Servicios
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
            Ofrezco soluciones completas para que tu negocio tenga la presencia
            digital que merece.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
}: {
  service: {
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
  };
}) {
  const { ref, isInView } = useInView();
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className={`bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-gray-700 transition-colors ${
        isInView ? "animate-on-scroll" : "opacity-0"
      }`}
    >
      <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-emerald-400" />
      </div>
      <h3 className="font-semibold text-white mb-2">{service.title}</h3>
      <p className="text-sm text-gray-400">{service.description}</p>
    </div>
  );
}
