import { BarChart3, Calendar, Home, Table, User} from "lucide-react";
import NavItem from "../../components/ui/NavItem";

const links = [ 
  { name: "Inicio", path: "/",icon: Home},
  { name: "Grupos", path: "/grupos",icon: Table},
  { name: "Partidos", path: "/partidos", icon: Calendar},
  { name: "Estadisticas", path: "/estaditicas", icon: BarChart3},
  { name: "Mi perfil", path: "/perfil", icon: User},
];

export default function Navbar() {

  return (
    <header className="sticky top-4 z-50 mx-4">
  <nav className="
    max-w-7xl mx-auto
    bg-slate-900/80 backdrop-blur-md
    px-6 py-3
    rounded-full
    shadow-lg shadow-black/20
  ">
    <ul className="flex flex-wrap gap-1 md:gap-4 items-center justify-center">
      {links.map((link) => (
        <NavItem key={link.path} to={link.path} label={link.name}>
          <span className="flex items-center gap-2">
            <link.icon className="md:w-5 md:h-5 w-6 h-6" />
            <span className="hidden sm:inline">{link.name}</span>
          </span>
        </NavItem>
      ))}
    </ul>
  </nav>
</header>

  )
}
