const Summary = ({
  resumeData,
  setResumeData,
  errors,
  setErrors,
}) => {

  const handleChange = (e) => {
    setResumeData({
      ...resumeData,
      summary: e.target.value,
    });

    setErrors((prev) => ({
      ...prev,
      summary: "",
    }));
  };

  return (
    <div className="gradient-border">

      <div className="gradient-border-content rounded-3xl bg-white/90 backdrop-blur-xl p-5 sm:p-6 md:p-8 shadow-xl">

        {/* Header */}

        <div className="mb-8">

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            📝 Professional Summary
          </h2>

          <p className="mt-2 text-sm sm:text-base text-slate-500">
            Write a short, impactful summary that highlights your experience,
            skills, and career goals.
          </p>

        </div>

        <textarea
          rows={7}
          name="summary"
          placeholder="Example: Passionate Full Stack Java Developer with experience in Spring Boot, React.js, REST APIs, MySQL and building scalable web applications..."
          value={resumeData.summary}
          onChange={handleChange}
          className="w-full resize-none rounded-2xl border border-slate-300 bg-white px-4 py-4 text-slate-700 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        />

        {errors.summary && (
          <p className="mt-3 flex items-center gap-2 text-sm font-medium text-red-500">
            ⚠️ {errors.summary}
          </p>
        )}

      </div>

    </div>
  );
};

export default Summary;