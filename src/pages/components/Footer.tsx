import { Facebook, Instagram, Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-8 items-center justify-between">

        {/* Branding */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-white">
            Copa del Mundo <span className="text-green-500">2026</span>
          </h3>
          <p className="text-sm text-slate-400 mt-2">
            Resultados, partidos y estadísticas en tiempo real
          </p>
        </div>

        {/* Links */}
        <nav className="flex gap-6 text-sm text-slate-400">
          <a href="/partidos" className="hover:text-white transition">Partidos</a>
          <a href="/grupos" className="hover:text-white transition">Grupos</a>
          <a href="/estadisticas" className="hover:text-white transition">Estadísticas</a>
        </nav>

        {/* Social */}
        <div className="flex gap-4">
          <a className="text-slate-400 hover:text-white transition" href="#">
            <Facebook className="w-5 h-5" />
          </a>
          <a className="text-slate-400 hover:text-white transition" href="#">
            <Instagram className="w-5 h-5" />
          </a>
          <a className="text-slate-400 hover:text-white transition" href="#">
            <Twitter className="w-5 h-5" />
          </a>
          <a className="text-slate-400 hover:text-white transition" href="#">
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-xs text-slate-500 py-4 border-t border-white/5">
        © {new Date().getFullYear()} Copa del Mundo 2026 — Todos los derechos reservados
      </div>
    </footer>
  );
}
