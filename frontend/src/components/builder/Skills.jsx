const Skills = ({ resumeData, setResumeData }) => {
  const handleChange = (e) => {
    setResumeData({
      ...resumeData,
      [e.target.name]: e.target.value,
    });
  };

  const inputClass =
    "w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100";

  const labelClass =
    "mb-2 block text-sm font-semibold text-slate-700";

  return (
    <div className="gradient-border">
      <div className="gradient-border-content rounded-3xl bg-white/90 backdrop-blur-xl p-5 sm:p-6 md:p-8 shadow-xl">

        {/* Header */}

        <div className="mb-8">

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            💻 Technical Skills
          </h2>

          <p className="mt-2 text-sm sm:text-base text-slate-500">
            Organize your technical skills to make your resume ATS-friendly.
          </p>

        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          <div>
            <label className={labelClass}>Programming Languages</label>

            <input
              type="text"
              name="languages"
              placeholder="Java, JavaScript, Python, C++"
              value={resumeData.languages}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Frontend</label>

            <input
              type="text"
              name="frontend"
              placeholder="React.js, HTML, CSS, Tailwind CSS"
              value={resumeData.frontend}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Backend</label>

            <input
              type="text"
              name="backend"
              placeholder="Spring Boot, Node.js, REST APIs"
              value={resumeData.backend}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Database</label>

            <input
              type="text"
              name="database"
              placeholder="MySQL, PostgreSQL, MongoDB"
              value={resumeData.database}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>
              Data Structures & Algorithms
            </label>

            <input
              type="text"
              name="dsa"
              placeholder="Problem Solving, Java, LeetCode"
              value={resumeData.dsa}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Development Tools</label>

            <input
              type="text"
              name="tools"
              placeholder="Git, GitHub, VS Code, IntelliJ IDEA"
              value={resumeData.tools}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

        </div>

      </div>
    </div>
  );
};

export default Skills;