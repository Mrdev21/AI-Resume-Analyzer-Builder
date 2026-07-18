import { FileSearch, FilePenLine, Target, ArrowRight } from "lucide-react";

const features = [
  {
    icon: <FileSearch size={32} className="text-blue-600" />,
    title: "Resume Analyzer",
    description:
      "Upload your resume and receive ATS score, AI suggestions, keyword analysis, and personalized improvement tips.",
  },
  {
    icon: <FilePenLine size={32} className="text-violet-600" />,
    title: "Resume Builder",
    description:
      "Create a professional ATS-friendly resume in minutes using AI-powered resume generation.",
  },
  {
    icon: <Target size={32} className="text-green-600" />,
    title: "JD Matcher",
    description:
      "Compare your resume with any job description and discover missing skills and keywords instantly.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-24">

      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">

        <div className="absolute top-10 left-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl animate-pulse"></div>

        <div className="absolute bottom-20 right-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl animate-pulse"></div>

      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Everything
            <span className="text-blue-600"> You Need to Build </span>  a Better Resume
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-600">
            AI-powered tools to analyze, improve, and create professional
            ATS-friendly resumes.
          </p>

        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (

            <div
              key={index}
              className="gradient-border group hover:scale-[1.03] transition-all duration-500"
            >

              <div className="gradient-border-content rounded-3xl bg-white/90 backdrop-blur-xl p-8 shadow-xl h-full">

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 via-cyan-100 to-violet-100 flex items-center justify-center transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">

                  {feature.icon}

                </div>

                <h3 className="mt-6 text-2xl font-semibold text-slate-900">

                  {feature.title}

                </h3>

                <p className="mt-4 leading-7 text-slate-600">

                  {feature.description}

                </p>

                <button className="mt-8 inline-flex items-center gap-2 font-medium text-blue-600 transition-all duration-300 group-hover:gap-4">

                  Learn More

                  <ArrowRight size={18} />

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default FeaturesSection;