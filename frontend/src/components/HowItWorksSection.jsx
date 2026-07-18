import { Upload, Sparkles, Download } from "lucide-react";

const steps = [
  {
    icon: <Upload size={32} className="text-blue-600" />,
    title: "Upload Resume",
    description:
      "Upload your resume in PDF format and let AI analyze it instantly.",
  },
  {
    icon: <Sparkles size={32} className="text-violet-600" />,
    title: "AI Analysis",
    description:
      "Receive ATS score, keyword analysis, missing skills and improvement suggestions.",
  },
  {
    icon: <Download size={32} className="text-green-600" />,
    title: "Download Resume",
    description:
      "Download your optimized ATS-friendly resume in just one click.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-24">

      {/* Animated Background */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute top-10 left-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl animate-pulse"></div>

        <div className="absolute bottom-20 right-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl animate-pulse"></div>

      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div className="max-w-3xl mx-auto text-center">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            How It <span className="text-blue-600">Works</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-600">
            Improve your resume in three simple steps.
          </p>

        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {steps.map((step, index) => (

            <div
              key={index}
              className="gradient-border group hover:scale-[1.03] transition-all duration-500"
            >

              <div className="gradient-border-content rounded-3xl bg-white/90 backdrop-blur-xl p-8 shadow-xl h-full relative text-center">

                {/* Step Number */}

                <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 text-white flex items-center justify-center font-bold shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">

                  {index + 1}

                </div>

                {/* Icon */}

                <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 via-cyan-100 to-violet-100 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">

                  {step.icon}

                </div>

                <h3 className="mt-6 text-2xl font-semibold text-slate-900">

                  {step.title}

                </h3>

                <p className="mt-4 leading-7 text-slate-600">

                  {step.description}

                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default HowItWorksSection;