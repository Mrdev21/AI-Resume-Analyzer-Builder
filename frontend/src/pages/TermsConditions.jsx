const TermsConditions = () => {
  const terms = [
    {
      title: "Acceptance of Terms",
      content:
        "By accessing and using AI Resume Analyzer & Builder, you agree to comply with these Terms & Conditions. If you do not agree, please discontinue using the platform.",
    },
    {
      title: "Use of Services",
      content:
        "Our platform provides AI-powered resume analysis, ATS scoring, resume building, and job description matching. These services are intended for informational purposes only.",
    },
    {
      title: "User Responsibilities",
      content:
        "You are responsible for the accuracy of the information you upload. You agree not to upload malicious, illegal, or copyrighted content without authorization.",
    },
    {
      title: "AI Generated Results",
      content:
        "ATS scores, resume suggestions, and JD matching results are generated using Artificial Intelligence. They are recommendations only and do not guarantee interview selection or employment.",
    },
    {
      title: "Intellectual Property",
      content:
        "All website content, design, branding, and software are the property of AI Resume Analyzer & Builder and may not be copied or redistributed without permission.",
    },
    {
      title: "Limitation of Liability",
      content:
        "We are not responsible for hiring decisions, employment outcomes, or any damages arising from the use of our services.",
    },
    {
      title: "Updates to Terms",
      content:
        "We may update these Terms & Conditions from time to time. Continued use of the platform indicates acceptance of any revised terms.",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 py-20">

      {/* Background */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl"></div>
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-violet-300/30 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-blue-300/30 blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-5xl px-6">

        {/* Hero */}

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Legal
          </span>

          <h1 className="mt-6 text-5xl font-extrabold text-slate-900">
            Terms &
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 bg-clip-text text-transparent">
              {" "}Conditions
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-600">
            Please read these Terms & Conditions carefully before using our
            platform.
          </p>

        </div>

        {/* Card */}

        <div className="gradient-border mt-14">

          <div className="gradient-border-content rounded-3xl bg-white/90 p-8 backdrop-blur-xl shadow-xl">

            <div className="space-y-8">

              {terms.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
                >
                  <h2 className="text-xl font-bold text-slate-900">
                    {item.title}
                  </h2>

                  <p className="mt-3 leading-8 text-slate-600">
                    {item.content}
                  </p>
                </div>
              ))}

              <div className="rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 p-8 text-white">

                <h2 className="text-2xl font-bold">
                  Agreement
                </h2>

                <p className="mt-4 leading-8">
                  By continuing to use AI Resume Analyzer & Builder, you
                  acknowledge that you have read, understood, and agreed to
                  these Terms & Conditions.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default TermsConditions;