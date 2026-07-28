export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-gray-800 bg-gray-950">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-sm text-gray-500">
          © 2026 Ezequiel Serer. Todos los derechos reservados.
        </span>
        <div className="flex gap-6 text-sm text-gray-500">
          <a href="#" className="hover:text-white transition-colors">
            GitHub
          </a>
          <a href="#" className="hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
