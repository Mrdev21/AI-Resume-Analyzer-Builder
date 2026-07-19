import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FileText, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Resume Analyzer", path: "/resume-analyzer" },
    { name: "Resume Builder", path: "/resume-builder" },
    { name: "JD Matcher", path: "/jd-matcher" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-white/70 backdrop-blur-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        {/* Logo */}
        <NavLink
          to="/"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-3"
        >
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-sky-500 via-blue-600 to-violet-600 p-2.5 text-white shadow-lg shadow-blue-500/30">
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent"></div>
            <FileText className="relative z-10" size={22} />
          </div>

          <div>
            <h1 className="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-lg font-bold text-transparent">
              AI Resume
            </h1>

            <p className="text-xs font-medium text-slate-500">
              Analyzer & Builder
            </p>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 text-white shadow-lg shadow-blue-500/30"
                    : "text-slate-700 hover:bg-slate-100 hover:text-blue-600"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Button */}
        <NavLink
          to="/resume-analyzer"
          className="hidden rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 px-5 py-2.5 font-medium text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/40 md:block"
        >
          Analyze Resume
        </NavLink>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-xl border border-white/30 bg-white/60 p-2 backdrop-blur-xl transition hover:bg-white md:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isOpen ? "max-h-96 border-t border-white/20" : "max-h-0"
        }`}
      >
        <nav className="space-y-2 bg-white/80 px-5 py-4 backdrop-blur-2xl">
          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block rounded-xl px-4 py-3 font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 text-white shadow-lg shadow-blue-500/30"
                    : "text-slate-700 hover:bg-slate-100"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <NavLink
            to="/resume-analyzer"
            onClick={() => setIsOpen(false)}
            className="mt-3 block rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 py-3 text-center font-medium text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            Analyze Resume
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;