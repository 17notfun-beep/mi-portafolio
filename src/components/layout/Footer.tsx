export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-sm text-gray-400">
          © 2026 TuNombre. Todos los derechos reservados.
        </span>
        <div className="flex gap-6 text-sm text-gray-400">
          <a href="#" className="hover:text-gray-600 transition-colors">
            GitHub
          </a>
          <a href="#" className="hover:text-gray-600 transition-colors">
            LinkedIn
          </a>
          <a href="#" className="hover:text-gray-600 transition-colors">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
