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
    <header>
    <nav className="bg-slate-900 text-white px-3 py-4 mx-4 flex flex-wrap items-center justify-center rounded-full gap-y-4">
      
       <ul className="flex flex-wrap gap-4 text-base font-medium justify-center">
        {links.map((link)=>(
            <NavItem key={link.path} to={link.path}>
               <link.icon className='w-5 h-5 mx-1 my-1' /> {link.name}
            </NavItem>
        ))}
       </ul>
    </nav>
    </header>
  )
}
