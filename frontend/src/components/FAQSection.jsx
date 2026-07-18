import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is this resume analyzer free?",
    answer:
      "Yes, you can analyze your resume and receive AI-powered suggestions for free.",
  },
  {
    question: "Which resume format is supported?",
    answer:
      "Currently we support PDF resumes. More formats will be added soon.",
  },
  {
    question: "How is the ATS score calculated?",
    answer:
      "The AI evaluates your resume based on keywords, formatting, readability, skills, and overall ATS compatibility.",
  },
  {
    question: "Can I build a new resume from scratch?",
    answer:
      "Yes. The Resume Builder helps you create a professional ATS-friendly resume in minutes.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative overflow-hidden py-20 md:py-24">

      {/* Animated Background */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute top-10 left-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl animate-pulse"></div>

        <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/20 blur-3xl animate-pulse"></div>

        <div className="absolute bottom-20 right-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl animate-pulse"></div>

      </div>

      <div className="max-w-4xl mx-auto px-5 sm:px-6">

        <div className="text-center mb-14">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Frequently <span className="text-blue-600">Asked Questions</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-600">
            Everything you need to know about our AI Resume platform.
          </p>

        </div>

        <div className="space-y-6">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="gradient-border group transition-all duration-500"
            >

              <div className="gradient-border-content rounded-3xl bg-white/90 backdrop-blur-xl shadow-xl overflow-hidden">

                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-6 text-left transition-all duration-300 hover:bg-slate-50"
                >

                  <span className="font-semibold text-base sm:text-lg text-slate-900">

                    {faq.question}

                  </span>

                  <ChevronDown
                    className={`text-blue-600 transition-all duration-500 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />

                </button>

                <div
                  className={`grid transition-all duration-500 ${
                    openIndex === index
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >

                  <div className="overflow-hidden">

                    <div className="px-6 pb-6 text-slate-600 leading-7">

                      {faq.answer}

                    </div>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default FAQSection;