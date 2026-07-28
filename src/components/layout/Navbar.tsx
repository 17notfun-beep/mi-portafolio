"use client";

import { useState } from "react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-xl font-bold text-white">Ezequiel Serer</span>

        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          <a href="#sobre-mi" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded px-1">
            Sobre mí
          </a>
          <a href="#servicios" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded px-1">
            Servicios
          </a>
          <a href="#proyectos" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded px-1">
            Proyectos
          </a>
          <a href="#testimonios" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded px-1">
            Testimonios
          </a>
          <a href="#contacto" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded px-1">
            Contacto
          </a>
        </div>

        <a
          href="#contacto"
          className="bg-white text-gray-900 px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
        >
          Contratar
        </a>

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-gray-800 bg-gray-950 px-6 py-4 space-y-3">
          <a href="#sobre-mi" className="block text-sm text-gray-400 hover:text-white" onClick={() => setMenuOpen(false)}>
            Sobre mí
          </a>
          <a href="#servicios" className="block text-sm text-gray-400 hover:text-white" onClick={() => setMenuOpen(false)}>
            Servicios
          </a>
          <a href="#proyectos" className="block text-sm text-gray-400 hover:text-white" onClick={() => setMenuOpen(false)}>
            Proyectos
          </a>
          <a href="#testimonios" className="block text-sm text-gray-400 hover:text-white" onClick={() => setMenuOpen(false)}>
            Testimonios
          </a>
          <a href="#contacto" className="block text-sm text-gray-400 hover:text-white" onClick={() => setMenuOpen(false)}>
            Contacto
          </a>
        </div>
      )}
    </nav>
  );
}
