import { NavLink } from "react-router-dom"


type Props = {
    to: string;
    children: React.ReactNode;
}
export default function navItem({ to, children }: Props) {
  return (
    <NavLink to={to} className={({isActive}) => [
         "flex gap-1 relative cursor-pointer font-medium text-white md:text-lg text-sm ",
      "after:absolute after:left-0 after:-bottom-1",
      "after:h-0.5 after:bg-green-400 after:transition-all after:duration-300",
      isActive ? "after:w-full" : "after:w-0 hover:after:w-full",
    ].join(" ")}>
         {children}
    </NavLink>
  );
}
