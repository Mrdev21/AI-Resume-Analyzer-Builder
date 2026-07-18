import { ShieldCheck, Zap, Brain, Award } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck size={34} className="text-blue-600" />,
    title: "ATS Optimized",
    description:
      "Create resumes that are optimized for Applicant Tracking Systems.",
  },
  {
    icon: <Brain size={34} className="text-violet-600" />,
    title: "AI Powered",
    description:
      "Get smart suggestions, resume analysis and keyword improvements.",
  },
  {
    icon: <Zap size={34} className="text-amber-500" />,
    title: "Fast Analysis",
    description:
      "Receive detailed resume insights and ATS score within seconds.",
  },
  {
    icon: <Award size={34} className="text-green-600" />,
    title: "Professional Templates",
    description:
      "Build clean, modern and recruiter-friendly resumes effortlessly.",
  },
];

const WhyChooseSection = () => {
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
            Why Choose <span className="text-blue-600">Our AI Resume</span>  Platform?
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-600">
            Everything you need to create an ATS-friendly resume and increase
            your chances of getting hired.
          </p>

        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => (

            <div
              key={index}
              className="gradient-border group hover:scale-[1.03] transition-all duration-500"
            >

              <div className="gradient-border-content rounded-3xl bg-white/90 backdrop-blur-xl p-8 shadow-xl h-full text-center">

                <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 via-cyan-100 to-violet-100 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">

                  {item.icon}

                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-900">

                  {item.title}

                </h3>

                <p className="mt-4 leading-7 text-slate-600">

                  {item.description}

                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default WhyChooseSection;