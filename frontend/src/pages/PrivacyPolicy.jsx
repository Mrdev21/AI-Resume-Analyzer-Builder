const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Information We Collect",
      content:
        "We may collect information that you voluntarily provide, including your name, email address, uploaded resumes, and job descriptions. Resume files are only processed to generate analysis and are not permanently stored unless explicitly stated.",
    },
    {
      title: "How We Use Your Information",
      content:
        "Your information is used solely to analyze resumes, generate ATS scores, provide AI-powered suggestions, improve user experience, and maintain platform security.",
    },
    {
      title: "Data Security",
      content:
        "We use industry-standard security measures to protect your information. While we strive to safeguard your data, no online platform can guarantee absolute security.",
    },
    {
      title: "Third-Party Services",
      content:
        "Our application may use trusted third-party AI APIs and analytics services to process resume analysis. These providers are responsible for handling data according to their own privacy policies.",
    },
    {
      title: "Cookies",
      content:
        "Cookies may be used to enhance your browsing experience, remember preferences, and improve website performance.",
    },
    {
      title: "Your Rights",
      content:
        "You may request deletion of your data, contact us regarding privacy concerns, or stop using the service at any time.",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 py-20">

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl"></div>
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-violet-300/30 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-blue-300/30 blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Legal
          </span>

          <h1 className="mt-6 text-5xl font-extrabold text-slate-900">
            Privacy
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 bg-clip-text text-transparent">
              {" "}Policy
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-600">
            Your privacy is important to us. This policy explains how we collect,
            use and protect your information.
          </p>

        </div>

        <div className="gradient-border mt-14">

          <div className="gradient-border-content rounded-3xl bg-white/90 p-8 backdrop-blur-xl shadow-xl">

            <div className="space-y-8">

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Introduction
                </h2>

                <p className="mt-3 text-slate-600 leading-8">
                  AI Resume Analyzer & Builder respects your privacy and is
                  committed to protecting your personal information. By using
                  this website, you agree to the practices described in this
                  Privacy Policy.
                </p>
              </div>

              {sections.map((section) => (
                <div
                  key={section.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-xl font-bold text-slate-900">
                    {section.title}
                  </h3>

                  <p className="mt-3 leading-8 text-slate-600">
                    {section.content}
                  </p>
                </div>
              ))}

              <div className="rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 p-8 text-white">

                <h3 className="text-2xl font-bold">
                  Contact Us
                </h3>

                <p className="mt-4">
                  If you have any questions regarding this Privacy Policy,
                  please contact us at:
                </p>

                <p className="mt-3 font-semibold">
                  support@airesumebuilder.com
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default PrivacyPolicy;