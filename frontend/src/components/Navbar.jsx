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
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        {/* Logo */}
        <NavLink
          to="/"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-2"
        >
          <div className="rounded-xl bg-gradient-to-br from-blue-600 via-cyan-500 to-violet-600 p-2 text-white">
            <FileText size={20} />
          </div>

          <div>
            <h1 className="text-lg font-bold text-slate-900">
              AI Resume
            </h1>

            <p className="text-xs text-slate-500">
              Analyzer & Builder
            </p>
          </div>
        </NavLink>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `font-medium transition ${
                  isActive
                    ? "text-blue-600"
                    : "text-slate-600 hover:text-blue-600"
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
          className="hidden rounded-lg bg-blue-600 px-4 py-2.5 text-white transition hover:bg-blue-700 md:block"
        >
          Analyze Resume
        </NavLink>

        {/* Mobile Hamburger */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg border border-slate-200 p-2 transition hover:bg-slate-100 md:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}

      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isOpen ? "max-h-96 border-t border-slate-200" : "max-h-0"
        }`}
      >
        <nav className="space-y-2 bg-white px-5 py-4">

          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block rounded-xl px-4 py-3 font-medium transition ${
                  isActive
                    ? "bg-blue-50 text-blue-600"
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
            className="mt-3 block rounded-xl bg-blue-600 py-3 text-center font-medium text-white transition hover:bg-blue-700"
          >
            Analyze Resume
          </NavLink>

        </nav>
      </div>
    </header>
  );
};

export default Navbar;