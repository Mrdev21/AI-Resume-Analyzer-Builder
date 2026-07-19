import { NavLink } from "react-router-dom";
import { FileText } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-300">
      {/* Animated Background */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 left-0 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl animate-pulse"></div>

        <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-3xl animate-pulse"></div>

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo */}

          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-cyan-500 to-violet-600 shadow-lg">
                <FileText className="text-white" size={24} />
              </div>

              <div>
                <h2 className="text-xl font-bold text-white">AI Resume</h2>

                <p className="text-sm text-slate-400">Analyzer & Builder</p>
              </div>
            </div>

            <p className="mt-6 leading-7 text-slate-400">
              AI-powered platform to analyze resumes, build ATS-friendly
              resumes, and match them with job descriptions.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <NavLink to="/" className="transition hover:text-cyan-400">
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/resume-analyzer"
                  className="transition hover:text-cyan-400"
                >
                  Resume Analyzer
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/resume-builder"
                  className="transition hover:text-cyan-400"
                >
                  Resume Builder
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/jd-matcher"
                  className="transition hover:text-cyan-400"
                >
                  JD Matcher
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Resources */}

          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">Resources</h3>

            <ul className="space-y-3">
              <li>
                <Link
                  to="/privacy-policy"
                  className="transition hover:text-cyan-400"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/terms-and-conditions"
                  className="transition hover:text-cyan-400"
                >
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link
                  to="/contact-us"
                  className="transition hover:text-cyan-400"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}

          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Connect With Me
            </h3>

            <div className="space-y-4">
              <a
                href="https://github.com/Mrdev21/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 transition hover:text-white"
              >
                <div className="rounded-xl bg-gradient-to-br from-blue-600 via-cyan-500 to-violet-600 p-3 transition duration-300 group-hover:rotate-12 group-hover:scale-110">
                  <FaGithub className="text-white" />
                </div>

                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/himanshu-chaudhari-514552296/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 transition hover:text-white"
              >
                <div className="rounded-xl bg-gradient-to-br from-blue-600 via-cyan-500 to-violet-600 p-3 transition duration-300 group-hover:rotate-12 group-hover:scale-110">
                  <FaLinkedin className="text-white" />
                </div>

                <span>LinkedIn</span>
              </a>

              <a
                href="mailto:hc102023@gmail.com"
                className="group flex items-center gap-4 transition hover:text-white"
              >
                <div className="rounded-xl bg-gradient-to-br from-blue-600 via-cyan-500 to-violet-600 p-3 transition duration-300 group-hover:rotate-12 group-hover:scale-110">
                  <FaEnvelope className="text-white" />
                </div>

                <span>hc102023@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-14 border-t border-slate-800 pt-8 text-center">
          <p className="text-sm text-slate-500">
            © 2026 AI Resume Analyzer & Builder
          </p>

          <p className="mt-2 text-sm text-slate-400">
            Designed & Developed with ❤️ by
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text font-semibold text-transparent">
              {" "}
              Himanshu Chaudhari
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
