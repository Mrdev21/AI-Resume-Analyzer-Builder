import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { showSuccess, showError } from "../../utils/toast";

const ResumePreview = ({ resumeData }) => {
  const downloadPDF = async () => {
    const loadingId = showLoading("Generating PDF...");
    const resume = document.getElementById("resume-preview");

    if (!resume) return;

    const canvas = await html2canvas(resume, {
      scale: 2,
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

    pdf.save(`${resumeData.fullName || "Resume"}.pdf`);

    hideLoading(loadingId);
    showSuccess("Resume downloaded successfully!");
  };
  return (
    <div className="relative mt-10">
      {/* Background */}

      <div className="absolute inset-0 -z-10 overflow-hidden rounded-[40px]">
        <div className="animate-blob absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl"></div>
        <div className="animate-blob absolute bottom-0 right-0 h-80 w-80 rounded-full bg-violet-300/30 blur-3xl"></div>
      </div>

      <div className="gradient-border">
        <div className="gradient-border-content rounded-[32px] bg-white/90 backdrop-blur-xl p-5 sm:p-6 md:p-8 shadow-2xl">
          {/* Header */}

          <div className="mb-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              📄 Resume Preview
            </h2>

            <p className="mt-3 text-slate-500">
              Review your ATS-friendly resume before downloading.
            </p>
          </div>

          {/* Resume */}

          <div
            id="resume-preview"
            className="mx-auto max-w-4xl rounded-xl border border-slate-300 bg-white p-6 md:p-10 shadow-lg"
          >
            {/* Header */}

            <div className="border-b-2 border-slate-900 pb-5 text-center">
              <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-wide text-slate-900">
                {resumeData.fullName || "YOUR NAME"}
              </h1>

              <p className="mt-3 text-gray-600">
                {[resumeData.city, resumeData.state, resumeData.pincode]
                  .filter(Boolean)
                  .join(", ")}
              </p>

              <div className="mt-4 flex flex-wrap justify-center gap-3 text-sm">
                {resumeData.phone && <span>{resumeData.phone}</span>}

                {resumeData.email && <span>{resumeData.email}</span>}

                {resumeData.github && (
                  <a
                    href={resumeData.github}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    GitHub
                  </a>
                )}

                {resumeData.linkedin && (
                  <a
                    href={resumeData.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    LinkedIn
                  </a>
                )}

                {resumeData.portfolio && (
                  <a
                    href={resumeData.portfolio}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Portfolio
                  </a>
                )}
              </div>
            </div>

            {/* Professional Summary */}

            {resumeData.summary && (
              <section className="mt-8">
                <h2 className="border-b border-slate-900 pb-2 text-lg font-bold uppercase tracking-wide">
                  Professional Summary
                </h2>

                <p className="mt-4 whitespace-pre-line leading-7 text-slate-700">
                  {resumeData.summary}
                </p>
              </section>
            )}

            {/* Technical Skills */}

            <section className="mt-8">
              <h2 className="border-b border-slate-900 pb-2 text-lg font-bold uppercase tracking-wide">
                Technical Skills
              </h2>

              <div className="mt-4 space-y-2 text-slate-700">
                {resumeData.languages && (
                  <p>
                    <strong>Languages:</strong> {resumeData.languages}
                  </p>
                )}

                {resumeData.frontend && (
                  <p>
                    <strong>Frontend:</strong> {resumeData.frontend}
                  </p>
                )}

                {resumeData.backend && (
                  <p>
                    <strong>Backend:</strong> {resumeData.backend}
                  </p>
                )}

                {resumeData.database && (
                  <p>
                    <strong>Database:</strong> {resumeData.database}
                  </p>
                )}

                {resumeData.dsa && (
                  <p>
                    <strong>DSA:</strong> {resumeData.dsa}
                  </p>
                )}

                {resumeData.tools && (
                  <p>
                    <strong>Tools:</strong> {resumeData.tools}
                  </p>
                )}
              </div>
            </section>

            {/* Education */}

            {resumeData.education.length > 0 && (
              <section className="mt-8">
                <h2 className="border-b border-slate-900 pb-2 text-lg font-bold uppercase tracking-wide">
                  Education
                </h2>

                <div className="mt-5 space-y-5">
                  {resumeData.education.map((edu, index) => (
                    <div key={index}>
                      <div className="flex flex-col justify-between gap-2 md:flex-row">
                        <div>
                          <h3 className="text-lg font-bold text-slate-900">
                            {edu.degree}
                          </h3>

                          <p className="font-medium text-slate-700">
                            {edu.college}
                          </p>

                          <p className="text-slate-500">{edu.location}</p>
                        </div>

                        <div className="text-sm text-slate-500">
                          {edu.startYear} - {edu.endYear}
                        </div>
                      </div>

                      {edu.cgpa && (
                        <p className="mt-2">
                          <strong>CGPA:</strong> {edu.cgpa}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Experience */}

            {resumeData.experience.length > 0 && (
              <section className="mt-8">
                <h2 className="border-b border-slate-900 pb-2 text-lg font-bold uppercase tracking-wide">
                  Experience
                </h2>

                <div className="mt-5 space-y-6">
                  {resumeData.experience.map((exp, index) => (
                    <div key={index}>
                      <div className="flex flex-col justify-between gap-2 md:flex-row">
                        <div>
                          <h3 className="text-lg font-bold">{exp.role}</h3>

                          <p className="font-medium">{exp.company}</p>
                        </div>

                        <div className="text-sm text-right text-slate-500">
                          <p>
                            {exp.startDate} - {exp.endDate}
                          </p>

                          <p>{exp.location}</p>
                        </div>
                      </div>

                      {exp.description && (
                        <p className="mt-3 whitespace-pre-line leading-7 text-slate-700">
                          {exp.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Projects */}

            {resumeData.projects.length > 0 && (
              <section className="mt-8">
                <h2 className="border-b border-slate-900 pb-2 text-lg font-bold uppercase tracking-wide">
                  Projects
                </h2>

                <div className="mt-5 space-y-6">
                  {resumeData.projects.map((project, index) => (
                    <div key={index}>
                      <div className="flex flex-col justify-between gap-2 md:flex-row">
                        <h3 className="text-lg font-bold">
                          {project.projectName}
                        </h3>

                        {project.techStack && (
                          <span className="text-sm text-slate-500">
                            {project.techStack}
                          </span>
                        )}
                      </div>

                      {project.description && (
                        <p className="mt-3 whitespace-pre-line leading-7 text-slate-700">
                          {project.description}
                        </p>
                      )}

                      <div className="mt-3 flex flex-wrap gap-4">
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium text-blue-600 hover:underline"
                          >
                            GitHub Repository
                          </a>
                        )}

                        {project.liveLink && (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium text-blue-600 hover:underline"
                          >
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Certifications */}

            {resumeData.certifications.length > 0 && (
              <section className="mt-8">
                <h2 className="border-b border-slate-900 pb-2 text-lg font-bold uppercase tracking-wide">
                  Certifications
                </h2>

                <div className="mt-5 space-y-5">
                  {resumeData.certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="flex flex-col justify-between gap-2 md:flex-row"
                    >
                      <div>
                        <h3 className="font-bold text-slate-900">
                          {cert.name}
                        </h3>

                        <p className="text-slate-700">{cert.issuer}</p>

                        {cert.credentialLink && (
                          <a
                            href={cert.credentialLink}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-1 inline-block text-sm font-medium text-blue-600 hover:underline"
                          >
                            View Credential
                          </a>
                        )}
                      </div>

                      <span className="text-sm text-slate-500">
                        {cert.issueDate}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Achievements */}

            {resumeData.achievements.filter((item) => item.trim() !== "")
              .length > 0 && (
              <section className="mt-8">
                <h2 className="border-b border-slate-900 pb-2 text-lg font-bold uppercase tracking-wide">
                  Achievements
                </h2>

                <ul className="mt-5 list-disc space-y-2 pl-5 text-slate-700">
                  {resumeData.achievements
                    .filter((item) => item.trim() !== "")
                    .map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                </ul>
              </section>
            )}
          </div>

          {/* Download Button */}

          <div className="mt-10 flex justify-center">
            <button
              onClick={downloadPDF}
              className="rounded-2xl bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              📥 Download Resume PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;
