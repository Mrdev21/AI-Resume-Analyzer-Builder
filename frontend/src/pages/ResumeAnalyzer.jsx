import { useState } from "react";
import { Upload, FileText, X } from "lucide-react";
import { analyzeResume } from "../services/resumeService";
import ATSScoreCard from "../components/ATSScoreCard";

const ResumeAnalyzer = () => {
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [file, setFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [analysis, setAnalysis] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) return;

    // Only PDF
    if (selectedFile.type !== "application/pdf") {
      alert("Only PDF files are allowed.");
      return;
    }

    // Max 5 MB
    if (selectedFile.size > 5 * 1024 * 1024) {
      alert("File size must be less than 5 MB.");
      return;
    }

    setFile(selectedFile);
  };

  const handleAnalyze = async () => {
    if (!file) {
      alert("Please upload a resume.");
      return;
    }

    try {
      setLoading(true);

      const result = await analyzeResume(file);

      console.log(result);

      setAnalysis(result);

      setShowResult(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setDragActive(false);

    const droppedFile = e.dataTransfer.files[0];

    if (!droppedFile) return;

    if (droppedFile.type !== "application/pdf") {
      alert("Only PDF files are allowed.");
      return;
    }

    if (droppedFile.size > 5 * 1024 * 1024) {
      alert("File size must be less than 5 MB.");
      return;
    }

    setFile(droppedFile);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-50 py-16 md:py-20">
      {/* Animated Background */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl animate-blob"></div>

        <div className="absolute top-1/3 right-0 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl animate-blob [animation-delay:2s]"></div>

        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl animate-blob [animation-delay:4s]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Hero */}

        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            🚀 AI Powered Resume Analysis
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
            Analyze Your
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 bg-clip-text text-transparent">
              {" "}
              Resume
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-8 text-slate-600">
            Upload your resume and receive ATS Score, AI Suggestions, Keyword
            Analysis, Missing Skills and Professional Improvements within
            seconds.
          </p>
        </div>

        {/* Upload Box */}

        {/* Upload Box */}

        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          className={`gradient-border mt-14 group transition duration-500 ${
            dragActive ? "scale-[1.02]" : ""
          }`}
        >
          <div
            className={`gradient-border-content rounded-3xl p-8 sm:p-10 md:p-14 text-center backdrop-blur-xl transition-all duration-500 ${
              dragActive ? "bg-blue-50/80" : "bg-white/90"
            }`}
          >
            <div
              className={`mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500 via-cyan-500 to-violet-600 shadow-xl transition duration-500 ${
                dragActive
                  ? "scale-110 rotate-12"
                  : "group-hover:scale-110 group-hover:rotate-12"
              }`}
            >
              <Upload size={46} className="text-white" />
            </div>

            <h2 className="mt-8 text-2xl sm:text-3xl font-bold text-slate-900">
              {dragActive ? "Drop Resume Here 📄" : "Upload Your Resume"}
            </h2>

            <p className="mt-4 text-slate-600 leading-7 text-sm sm:text-base">
              Drag & Drop your PDF here
              <br />
              or click below to browse your device.
            </p>

            <label className="mt-8 inline-block">
              <input
                type="file"
                accept=".pdf"
                hidden
                onChange={handleFileChange}
              />

              <span className="inline-flex cursor-pointer items-center rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 px-8 py-4 font-semibold text-white shadow-lg transition duration-300 hover:scale-105 hover:shadow-2xl">
                Browse Resume
              </span>
            </label>

            <p className="mt-6 text-sm text-slate-500">
              PDF Only • Maximum File Size 5 MB
            </p>
          </div>
        </div>
        {/* Selected File */}

        {/* Selected File */}

        {file && (
          <>
            {/* Selected File */}

            <div className="gradient-border mt-8">
              <div className="gradient-border-content rounded-3xl bg-white/90 backdrop-blur-xl p-5 sm:p-6 shadow-xl">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-cyan-500 to-violet-600 shadow-lg">
                      <FileText size={32} className="text-white" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="truncate text-lg font-semibold text-slate-900">
                        {file.name}
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setFile(null);
                      setShowResult(true);
                      setLoading(false);
                    }}
                    className="self-end rounded-xl bg-red-50 p-3 transition duration-300 hover:scale-110 hover:bg-red-100 sm:self-auto"
                  >
                    <X className="text-red-500" size={22} />
                  </button>
                </div>
              </div>
            </div>

            {/* Analyze Button */}

            <div className="mt-8 flex justify-center">
              <button
                onClick={handleAnalyze}
                disabled={loading}
                className={`rounded-2xl px-10 py-4 font-semibold text-white shadow-xl transition-all duration-300 ${
                  loading
                    ? "cursor-not-allowed bg-slate-400"
                    : "bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 hover:scale-105 hover:shadow-2xl"
                }`}
              >
                {loading ? "Analyzing Resume..." : "Analyze Resume"}
              </button>
            </div>
          </>
        )}
        {loading && (
          <div className="gradient-border mt-12">
            <div className="gradient-border-content rounded-3xl bg-white/90 backdrop-blur-xl p-8 sm:p-10 shadow-xl text-center">
              <div className="relative mx-auto h-24 w-24">
                <div className="absolute inset-0 rounded-full border-[6px] border-blue-100"></div>

                <div className="absolute inset-0 rounded-full border-[6px] border-blue-600 border-t-transparent animate-spin"></div>

                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-600 via-cyan-500 to-violet-600 animate-pulse"></div>
              </div>

              <h2 className="mt-8 text-2xl sm:text-3xl font-bold text-slate-900">
                AI is Analyzing Your Resume...
              </h2>

              <p className="mt-4 text-slate-600 leading-7">
                Checking ATS Score, Skills, Keywords, Formatting, Resume Quality
                and AI Suggestions.
              </p>

              {/* Progress Animation */}

              <div className="mx-auto mt-8 h-3 w-full max-w-md overflow-hidden rounded-full bg-slate-200">
                <div className="h-full w-1/2 animate-pulse rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600"></div>
              </div>

              <p className="mt-3 text-sm text-slate-500">
                This usually takes a few seconds...
              </p>
            </div>
          </div>
        )}

        {showResult && (
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* ATS Score */}

            <div className="gradient-border animate-fade-in">
              <div className="gradient-border-content rounded-3xl bg-white/90 backdrop-blur-xl p-6 sm:p-8 shadow-xl h-full">
                <ATSScoreCard score={analysis?.atsScore || 0} />
              </div>
            </div>

            {/* Resume Summary */}

            <div className="gradient-border group transition duration-500 hover:scale-[1.02]">
              <div className="gradient-border-content rounded-3xl bg-white/90 backdrop-blur-xl p-8 shadow-xl h-full">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-cyan-500 to-violet-600 shadow-lg transition duration-500 group-hover:rotate-12">
                    <FileText className="text-white" size={28} />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    Resume Summary
                  </h3>
                </div>

                <p className="mt-6 leading-8 text-slate-600">
                  {analysis?.summary}
                </p>
              </div>
            </div>

            {/* Strengths */}

            <div className="gradient-border group transition duration-500 hover:scale-[1.02]">
              <div className="gradient-border-content rounded-3xl bg-white/90 backdrop-blur-xl p-8 shadow-xl h-full">
                <h3 className="text-2xl font-bold text-slate-900">
                  ✅ Strengths
                </h3>

                <div className="mt-8 flex flex-wrap gap-4">
                  {analysis?.strengths?.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-green-100 px-5 py-2 font-medium text-green-700 transition hover:scale-105"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Missing Skills */}

            <div className="gradient-border group transition duration-500 hover:scale-[1.02]">
              <div className="gradient-border-content rounded-3xl bg-white/90 backdrop-blur-xl p-8 shadow-xl h-full">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 shadow-lg transition duration-500 group-hover:rotate-12">
                    <Upload className="text-white" size={28} />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    Missing Skills
                  </h3>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  {analysis?.weaknesses?.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-red-100 px-5 py-2 font-medium text-red-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* AI Suggestions */}

            <div className="gradient-border group transition duration-500 hover:scale-[1.02]">
              <div className="gradient-border-content rounded-3xl bg-white/90 backdrop-blur-xl p-8 shadow-xl h-full">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 shadow-lg transition duration-500 group-hover:rotate-12">
                    <FileText className="text-white" size={28} />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    AI Suggestions
                  </h3>
                </div>

                <ul className="mt-8 space-y-5 text-slate-600">
                  {analysis?.suggestions?.map((item) => (
                    <li key={item} className="rounded-xl bg-slate-50 p-4">
                      ✅ {item}
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

export default ResumeAnalyzer;
