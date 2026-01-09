import { NavLink } from "react-router-dom"


type Props = {
    to: string;
    children: React.ReactNode;
    label: string;
}
export default function navItem({ to, children, label }: Props) {
  return (
    <NavLink to={to} className={({isActive}) => [
         "group relative flex items-center justify-center gap-1 mx-1",
      "cursor-pointer font-medium text-white md:text-base text-sm",
      "px-3 py-2 rounded-full transition-colors",
      "hover:bg-white/10",
       "after:absolute after:left-0 after:-bottom-1",
      "after:h-0.5 after:bg-green-400 after:transition-all after:duration-300",
      isActive ? "after:w-full" : "after:w-0 group-hover:after:w-full",
    ].join(" ")}>
         {children}
          <span
    className="
      pointer-events-none
      absolute -bottom-10 left-1/2 -translate-x-1/2
      whitespace-nowrap
      rounded-md bg-slate-900 px-2 py-1 text-xs text-white
      opacity-0 scale-95
      transition-all duration-200
      group-hover:opacity-100 group-hover:scale-100
      md:hidden
    "
  >
    {label}
  </span>
    </NavLink>
  );
}
