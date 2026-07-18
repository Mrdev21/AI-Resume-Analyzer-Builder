import { useState } from "react";
import { Upload, FileText } from "lucide-react";

const JDMatcher = () => {
  const [file, setFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) return;

    if (selectedFile.type !== "application/pdf") {
      alert("Only PDF files are allowed.");
      return;
    }

    if (selectedFile.size > 5 * 1024 * 1024) {
      alert("File size must be less than 5 MB.");
      return;
    }

    setFile(selectedFile);
    setShowResult(false);
    setLoading(false);
  };

  const handleMatch = () => {
    if (!file || !jobDescription.trim()) return;

    setShowResult(false);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setShowResult(true);
    }, 2500);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 py-20">
      {/* Background Blobs */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="animate-blob absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl"></div>

        <div className="animate-blob absolute right-0 top-40 h-80 w-80 rounded-full bg-violet-300/30 blur-3xl"></div>

        <div className="animate-blob absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-blue-300/30 blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Hero */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            AI Powered JD Matching
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl">
            Match Your Resume
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 bg-clip-text text-transparent">
              {" "}
              With Any Job Description
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Upload your resume and paste a Job Description to instantly compare
            ATS compatibility, matching skills, missing keywords and AI
            suggestions.
          </p>
        </div>

        {/* Main Grid */}

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Upload Resume */}

          <div className="gradient-border">
            <div className="gradient-border-content rounded-3xl bg-white/90 p-6 backdrop-blur-xl shadow-xl md:p-8">
              <h2 className="text-2xl font-bold text-slate-900">
                📄 Upload Resume
              </h2>

              <label className="mt-8 block cursor-pointer rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50 p-12 text-center transition-all duration-300 hover:border-blue-500 hover:bg-blue-50">
                <Upload className="mx-auto text-blue-600" size={60} />

                <h3 className="mt-5 text-xl font-semibold text-slate-800">
                  Upload Resume
                </h3>

                <p className="mt-2 text-slate-500">PDF only • Maximum 5 MB</p>

                <input
                  type="file"
                  hidden
                  accept=".pdf"
                  onChange={handleFileChange}
                />
              </label>

              {file && (
                <div className="mt-6 flex items-center gap-4 rounded-2xl border border-blue-100 bg-blue-50 p-5">
                  <FileText className="text-blue-600" size={32} />

                  <div>
                    <h4 className="font-semibold text-slate-800">
                      {file.name}
                    </h4>

                    <p className="text-sm text-slate-500">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Job Description */}

          <div className="gradient-border">
            <div className="gradient-border-content rounded-3xl bg-white/90 p-6 backdrop-blur-xl shadow-xl md:p-8">
              <h2 className="text-2xl font-bold text-slate-900">
                💼 Job Description
              </h2>

              <textarea
                rows={16}
                placeholder="Paste the complete Job Description here..."
                value={jobDescription}
                onChange={(e) => {
                  setJobDescription(e.target.value);
                  setShowResult(false);
                }}
                className="mt-6 w-full resize-none rounded-2xl border border-slate-300 bg-white px-5 py-4 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>
          </div>
        </div>

        {/* Match Button */}

        <div className="mt-12 flex justify-center">
          <button
            onClick={handleMatch}
            disabled={!file || !jobDescription.trim() || loading}
            className={`rounded-2xl px-10 py-4 text-lg font-semibold shadow-xl transition-all duration-300 ${
              !file || !jobDescription.trim() || loading
                ? "cursor-not-allowed bg-slate-400 text-white"
                : "bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 text-white hover:scale-105 hover:shadow-2xl"
            }`}
          >
            {loading ? "Matching Resume..." : "🚀 Match Resume"}
          </button>
        </div>

        {/* Loading */}

        {loading && (
          <div className="gradient-border mt-12">
            <div className="gradient-border-content rounded-3xl bg-white/90 p-10 text-center backdrop-blur-xl shadow-xl">
              <div className="mx-auto h-20 w-20 rounded-full border-4 border-blue-600 border-t-transparent animate-spin"></div>

              <h2 className="mt-8 text-3xl font-bold text-slate-900">
                AI is Matching...
              </h2>

              <p className="mt-4 text-slate-500">
                Comparing your resume with the Job Description and identifying
                matching keywords, missing skills and ATS compatibility.
              </p>
            </div>
          </div>
        )}

        {/* Result */}

        {showResult && (
          <div className="gradient-border mt-16">
            <div className="gradient-border-content rounded-3xl bg-white/90 p-6 backdrop-blur-xl shadow-xl md:p-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">
                    🎯 Match Result
                  </h2>

                  <p className="mt-2 text-slate-500">
                    AI compared your resume with the provided Job Description.
                  </p>
                </div>

                <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 px-8 py-5 text-center text-white shadow-xl">
                  <p className="text-sm font-medium opacity-90">Match Score</p>

                  <h2 className="mt-1 text-5xl font-extrabold">87%</h2>
                </div>
              </div>

              {/* Skills Grid */}

              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {/* Matching Skills */}

                <div className="rounded-3xl border border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-green-700">
                    ✅ Matching Skills
                  </h3>

                  <p className="mt-2 text-sm text-green-600">
                    These keywords were found in your resume.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {["Java", "Spring Boot", "REST API", "MySQL"].map(
                      (skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700"
                        >
                          {skill}
                        </span>
                      ),
                    )}
                  </div>
                </div>

                {/* Missing Skills */}

                <div className="rounded-3xl border border-red-200 bg-gradient-to-br from-red-50 to-rose-50 p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-red-700">
                    ❌ Missing Skills
                  </h3>

                  <p className="mt-2 text-sm text-red-600">
                    Consider adding these skills if you have experience.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {["Docker", "AWS", "Kubernetes"].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* AI Suggestions */}

              <div className="mt-8 rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50 p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-blue-700">
                  💡 AI Suggestions
                </h3>

                <p className="mt-2 text-slate-600">
                  Improve your resume to increase the overall ATS match score.
                </p>

                <ul className="mt-6 space-y-4">
                  {[
                    "Add Docker experience in your projects section.",
                    "Mention AWS deployment if applicable.",
                    "Include measurable achievements with numbers.",
                    "Highlight REST API development experience.",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm"
                    >
                      <span className="mt-1 text-blue-600">✔</span>

                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default JDMatcher;
