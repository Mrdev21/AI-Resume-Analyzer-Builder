import {
  FileSearch,
  FileText,
  Briefcase,
  CheckCircle,
  Cpu,
  Rocket,
} from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <FileSearch size={40} className="text-blue-600" />,
      title: "AI Resume Analyzer",
      description:
        "Analyze resumes with AI-powered insights, ATS score, and personalized suggestions.",
    },
    {
      icon: <Briefcase size={40} className="text-green-600" />,
      title: "JD Matcher",
      description:
        "Compare your resume with a Job Description and discover missing skills and keywords.",
    },
    {
      icon: <FileText size={40} className="text-purple-600" />,
      title: "Resume Builder",
      description:
        "Build a professional ATS-friendly resume with a clean and modern interface.",
    },
  ];

  const techStack = [
    "React",
    "Vite",
    "Tailwind CSS",
    "Spring Boot",
    "Java",
    "MySQL",
    "Gemini AI",
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-transparent">

      {/* Hero */}

      <section className="relative overflow-hidden py-20 md:py-28">
        
        <div className="mx-auto max-w-6xl px-5 sm:px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-sm font-medium text-blue-700">
            AI Powered Resume Platform
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
            About
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 bg-clip-text text-transparent">
              {" "}
              ResumeAI
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-8 text-slate-600">
            ResumeAI is an AI-powered platform that helps job seekers analyze,
            improve, and build ATS-friendly resumes while matching them with job
            descriptions for better interview opportunities.
          </p>
        </div>
      </section>

      {/* Mission */}

      <section className="mx-auto max-w-6xl px-5 sm:px-6 py-10">
        <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl animate-blob"></div>

        <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-3xl animate-blob"></div>

        <div className="absolute bottom-20 right-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl animate-blob"></div>
      </div>
        <div className="rounded-3xl bg-white/90 backdrop-blur-xl p-8 md:p-12 shadow-xl">
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-slate-900">
            Our Mission
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-center leading-8 text-slate-600">
            We aim to make resume building smarter and easier using Artificial
            Intelligence. Our goal is to help students and professionals create
            resumes that stand out and perform well in Applicant Tracking
            Systems (ATS).
          </p>
        </div>
      </section>

      {/* Features */}

      <section className="mx-auto max-w-6xl px-5 sm:px-6 py-20">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-slate-900">
          What We Offer
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="gradient-border group transition duration-500 hover:scale-[1.03]"
            >
              <div className="gradient-border-content rounded-3xl bg-white/90 backdrop-blur-xl p-8 shadow-xl h-full text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 via-cyan-100 to-violet-100 transition duration-500 group-hover:rotate-12 group-hover:scale-110">
                  {feature.icon}
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Why Choose */}

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-slate-900">
            Why Choose ResumeAI?
          </h2>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "ATS-Friendly Resume Builder",
              "AI Resume Analysis",
              "Job Description Matching",
              "Professional Resume Preview",
              "Instant PDF Download",
              "Simple & Modern Interface",
            ].map((item, index) => (
              <div
                key={index}
                className="gradient-border group transition duration-500 hover:scale-[1.02]"
              >
                <div className="gradient-border-content rounded-3xl bg-white/90 backdrop-blur-xl p-6 shadow-xl h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 via-cyan-500 to-violet-500 transition duration-500 group-hover:rotate-12 group-hover:scale-110">
                      <CheckCircle className="text-white" />
                    </div>

                    <p className="text-lg text-slate-700">{item}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}

      <section className="py-20">

        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 via-cyan-500 to-violet-600 shadow-xl">
              <Cpu className="text-white" size={38} />
            </div>

            <h2 className="mt-8 text-3xl sm:text-4xl font-bold text-slate-900">
              Technologies Used
            </h2>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 px-6 py-3 font-medium text-white shadow-lg transition duration-300 hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Future Roadmap */}

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="gradient-border">
            <div className="gradient-border-content rounded-3xl bg-white/90 backdrop-blur-xl p-8 md:p-12 shadow-xl text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 via-cyan-500 to-violet-600 shadow-lg">
                <Rocket className="text-white" size={38} />
              </div>

              <h2 className="mt-8 text-3xl sm:text-4xl font-bold text-slate-900">
                Future Roadmap
              </h2>

              <p className="mx-auto mt-6 max-w-3xl leading-8 text-slate-600">
                We plan to introduce AI-generated resume summaries, project
                descriptions, multiple professional templates, multi-page PDF
                export, interview preparation, career guidance, and many more
                AI-powered features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="rounded-[32px] bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 p-10 md:p-16 text-center text-white shadow-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Build Your Professional Resume Today
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-blue-100 text-base sm:text-lg">
              Analyze, Improve and Build ATS-Friendly Resumes using Artificial
              Intelligence in just a few clicks.
            </p>

            <button className="mt-10 rounded-2xl bg-white px-8 py-4 font-semibold text-blue-700 transition duration-300 hover:scale-105 hover:bg-slate-100">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
