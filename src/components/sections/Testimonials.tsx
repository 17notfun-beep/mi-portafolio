"use client";

import { useInView } from "@/lib/useInView";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const title = useInView();

  return (
    <section id="testimonios" className="py-20 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div
          ref={title.ref}
          className={title.isInView ? "animate-on-scroll" : "opacity-0"}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            Lo que dicen mis clientes
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-xl mx-auto text-lg">
            La satisfacción de mis clientes es mi mayor prioridad.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: { name: string; role: string; text: string };
}) {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={`bg-gray-900 p-8 rounded-2xl border border-gray-800 ${
        isInView ? "animate-on-scroll" : "opacity-0"
      }`}
    >
      <div className="flex gap-1 mb-5">
        {[...Array(5)].map((_, j) => (
          <span key={j} className="text-yellow-400 text-lg">
            ★
          </span>
        ))}
      </div>
      <p className="text-white text-base leading-relaxed mb-6">
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <div className="border-t border-gray-800 pt-4">
        <p className="font-semibold text-white">
          {testimonial.name}
        </p>
        <p className="text-emerald-400 text-sm">{testimonial.role}</p>
      </div>
    </div>
  );
}
