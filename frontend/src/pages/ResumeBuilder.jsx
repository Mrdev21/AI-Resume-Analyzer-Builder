import { useState } from "react";
import PersonalInfo from "../components/builder/PersonalInfo";
import ResumePreview from "../components/builder/ResumePreview";
import Summary from "../components/builder/Summary";
import Skills from "../components/builder/Skills";
import Education from "../components/builder/Education";
import Experience from "../components/builder/Experience";
import Projects from "../components/builder/Projects";
import Certifications from "../components/builder/Certifications";
import Achievements from "../components/builder/Achievements";
import {
  showSuccess,
  showError,
  showLoading,
  hideLoading,
} from "../utils/toast";

const ResumeBuilder = () => {
  const [showPreview, setShowPreview] = useState(false);

  const [resumeData, setResumeData] = useState({
    fullName: "",
    city: "",
    state: "",
    pincode: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    portfolio: "",
    summary: "",
    languages: "",
    frontend: "",
    backend: "",
    database: "",
    dsa: "",
    tools: "",

    education: [
      {
        degree: "",
        college: "",
        location: "",
        startYear: "",
        endYear: "",
        cgpa: "",
      },
    ],

    experience: [
      {
        company: "",
        role: "",
        location: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ],

    projects: [
      {
        projectName: "",
        techStack: "",
        liveLink: "",
        githubLink: "",
        description: "",
      },
    ],

    certifications: [
      {
        name: "",
        issuer: "",
        issueDate: "",
        credentialLink: "",
      },
    ],

    achievements: [""],
  });

  const [errors, setErrors] = useState({});

  const validateResume = () => {
    let newErrors = {};

    if (!resumeData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }

    if (!resumeData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(resumeData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!resumeData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(resumeData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (!resumeData.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!resumeData.state.trim()) {
      newErrors.state = "State is required";
    }

    if (!resumeData.summary.trim()) {
      newErrors.summary = "Professional Summary is required";
    } else if (resumeData.summary.trim().length < 30) {
      newErrors.summary = "Summary should be at least 30 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handlePreview = () => {
    if (validateResume()) {
      setShowPreview(true);
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-50 py-16 md:py-20">
      {/* Animated Background */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl animate-blob"></div>

        <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl animate-blob [animation-delay:2s]"></div>

        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl animate-blob [animation-delay:4s]"></div>
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Hero */}

        <div className="mb-14 text-center">
          <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            🚀 AI Powered Resume Builder
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
            Build Your
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 bg-clip-text text-transparent">
              {" "}
              Professional Resume
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-8 text-slate-600">
            Create an ATS-friendly resume with our intelligent builder. Add your
            education, skills, experience, projects and generate a clean
            professional resume within minutes.
          </p>
        </div>

        {/* Form Wrapper */}

        <div className="gradient-border">
          <div className="gradient-border-content rounded-3xl bg-white/90 backdrop-blur-xl p-5 sm:p-8 md:p-10 shadow-2xl">
            <div className="space-y-8">
              <PersonalInfo
                resumeData={resumeData}
                setResumeData={setResumeData}
                errors={errors}
                setErrors={setErrors}
              />

              <Summary
                resumeData={resumeData}
                setResumeData={setResumeData}
                errors={errors}
                setErrors={setErrors}
              />

              <Skills resumeData={resumeData} setResumeData={setResumeData} />

              <Education
                resumeData={resumeData}
                setResumeData={setResumeData}
              />

              <Experience
                resumeData={resumeData}
                setResumeData={setResumeData}
              />

              <Projects resumeData={resumeData} setResumeData={setResumeData} />

              <Certifications
                resumeData={resumeData}
                setResumeData={setResumeData}
              />

              <Achievements
                resumeData={resumeData}
                setResumeData={setResumeData}
              />

              {/* Preview Button */}

              <div className="pt-6">
                <div className="gradient-border">
                  <div className="gradient-border-content rounded-3xl bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 p-8 text-center shadow-xl">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">
                      Ready to Preview?
                    </h2>

                    <p className="mt-3 text-blue-100 max-w-2xl mx-auto">
                      Verify your details and generate a professional
                      ATS-Friendly Resume with a beautiful preview.
                    </p>

                    <button
                      onClick={handlePreview}
                      className="mt-8 rounded-2xl bg-white px-10 py-4 text-lg font-semibold text-blue-700 shadow-xl transition-all duration-300 hover:scale-105 hover:bg-slate-100 hover:shadow-2xl"
                    >
                      Preview Resume
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Resume Preview */}

        {showPreview && (
          <div className="mt-16">
            <div className="text-center mb-10">
              <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
                ✅ Resume Generated Successfully
              </span>

              <h2 className="mt-5 text-3xl sm:text-4xl font-bold text-slate-900">
                Resume Preview
              </h2>

              <p className="mt-3 text-slate-600">
                Review your resume before downloading.
              </p>
            </div>

            <div className="gradient-border">
              <div className="gradient-border-content rounded-3xl bg-white/90 backdrop-blur-xl p-4 sm:p-6 shadow-2xl">
                <ResumePreview resumeData={resumeData} />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ResumeBuilder;
