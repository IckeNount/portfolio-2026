import { useState } from "react";
import { NAV_LINKS } from "../../constants/nav";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between backdrop-blur-md bg-surface/80 border-b border-white/5">
      <span className="font-display text-xl text-white">Portfolio.</span>
      <ul className="hidden md:flex gap-8">
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="text-white/60 hover:text-accent text-sm transition-colors">{link.label}</a>
          </li>
        ))}
      </ul>
      <button className="md:hidden text-white/60" onClick={() => setOpen(!open)}>☰</button>
    </nav>
  );
};
export default Navbar;
