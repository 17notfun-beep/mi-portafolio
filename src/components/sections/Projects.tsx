"use client";

import Image from "next/image";
import { useInView } from "@/lib/useInView";
import { projects } from "@/data/projects";

export function Projects() {
  const title = useInView();

  return (
    <section id="proyectos" className="py-20 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div
          ref={title.ref}
          className={title.isInView ? "animate-on-scroll" : "opacity-0"}
        >
          <h2 className="text-3xl font-bold text-center text-white mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
            Algunos de los trabajos que he realizado para mis clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
}: {
  project: {
    title: string;
    description: string;
    tech: string[];
    image: string;
    link: string;
  };
}) {
  const { ref, isInView } = useInView<HTMLAnchorElement>();

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      ref={ref}
      className={`group block bg-gray-950 rounded-2xl border border-gray-800 overflow-hidden hover:border-gray-600 transition-all cursor-pointer ${
        isInView ? "animate-on-scroll" : "opacity-0"
      }`}
    >
      <div className="h-80 relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
          <span className="text-white text-sm font-medium bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
            Ver sitio →
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-sm text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="bg-gray-800 text-gray-300 text-xs px-2.5 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
