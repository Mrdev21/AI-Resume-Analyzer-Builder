import { NavLink } from "react-router-dom";
import { CheckCircle, FileText, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Blur */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-blue-500/30 blur-3xl animate-pulse"></div>

        <div className="absolute bottom-8 right-0 h-80 w-80 rounded-full bg-cyan-400/30 blur-3xl animate-pulse delay-1000"></div>

        <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-400/20 blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles size={16} />
              AI Powered Resume Tool
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Analyze &<span className="text-blue-700"> Build</span>
              <br />
              <span className="text-blue-700"> ATS-Friendly </span>
              Resume
              <br />
              Using AI
            </h1>

            <p className="mt-6 max-w-xl text-base sm:text-lg text-slate-600">
              Upload your resume, improve your ATS score, generate a
              professional resume, and match it with any job description.
            </p>

            <div className="mt-8 flex flex-row sm:flex-row gap-4">
              <NavLink
                to="/resume-analyzer"
                className="rounded-lg bg-blue-600 px-3 py-4 text-xs md:px-4 md:py-3 md:text-base text-white transition hover:bg-blue-700"
              >
                Analyze Resume
              </NavLink>

              <NavLink
                to="/resume-builder"
                className="border border-slate-300 px-6 py-3 rounded-xl font-medium hover:bg-slate-200"
              >
                Build Resume
              </NavLink>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-2 text-slate-600">
              ⭐⭐⭐⭐⭐
              <span>Trusted by Students & Job Seekers</span>
            </div>
          </div>

          {/* Right */}

          <div className="gradient-border">
            <div className="gradient-border-content rounded-3xl bg-white/80 backdrop-blur-xl shadow-2xl p-6 sm:p-8">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <FileText className="text-blue-600" />
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      Resume Uploaded (Showcase)
                    </h3>

                    <p className="text-sm text-slate-500">resume.pdf</p>
                  </div>
                </div>

                <CheckCircle className="text-green-600" />
              </div>

              <div className="mt-8">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">ATS Score</span>
                  <span className="text-blue-600 font-bold">91%</span>
                </div>

                <div className="w-full bg-slate-200 rounded-full h-3">
                  <div className="bg-blue-600 h-3 rounded-full w-[91%]"></div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold mb-4">Missing Skills</h3>

                <div className="flex flex-wrap gap-3">
                  <span className="bg-red-100 text-red-600 px-3 py-2 rounded-lg">
                    Docker
                  </span>

                  <span className="bg-amber-100 text-amber-600 px-3 py-2 rounded-lg">
                    AWS
                  </span>

                  <span className="bg-violet-100 text-violet-600 px-3 py-2 rounded-lg">
                    Redis
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
