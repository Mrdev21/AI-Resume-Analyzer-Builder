import { NavLink } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-3xl p-14 text-center text-white">

          <h2 className="text-4xl font-bold">
            Ready to Build Your Dream Resume?
          </h2>

          <p className="mt-5 text-lg text-blue-100 max-w-2xl mx-auto">
            Boost your ATS score, create a professional resume, and match
            your resume with any job description using AI.
          </p>

          <div className="mt-10 flex justify-center gap-5 flex-wrap">

            <NavLink
              to="/resume-analyzer"
              className="bg-white text-blue-600 px-7 py-3 rounded-xl font-semibold hover:bg-slate-100 transition"
            >
              Analyze Resume
            </NavLink>

            <NavLink
              to="/resume-builder"
              className="border border-white px-7 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition"
            >
              Build Resume
            </NavLink>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CTASection;