import { Plus, Trash2 } from "lucide-react";

const Certifications = ({ resumeData, setResumeData }) => {
  const handleChange = (index, e) => {
    const updatedCertifications = [...resumeData.certifications];

    updatedCertifications[index][e.target.name] = e.target.value;

    setResumeData({
      ...resumeData,
      certifications: updatedCertifications,
    });
  };

  const addCertification = () => {
    setResumeData({
      ...resumeData,
      certifications: [
        ...resumeData.certifications,
        {
          name: "",
          issuer: "",
          issueDate: "",
          credentialLink: "",
        },
      ],
    });
  };

  const removeCertification = (index) => {
    setResumeData({
      ...resumeData,
      certifications: resumeData.certifications.filter(
        (_, i) => i !== index
      ),
    });
  };

  return (
    <div className="gradient-border">
      <div className="gradient-border-content rounded-3xl bg-white/90 backdrop-blur-xl p-5 sm:p-6 md:p-8 shadow-xl">

        {/* Header */}

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              🏆 Certifications
            </h2>

            <p className="mt-2 text-sm sm:text-base text-slate-500">
              Add your certifications and credentials.
            </p>
          </div>

          <button
            onClick={addCertification}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 px-5 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <Plus size={18} />
            Add Certification
          </button>

        </div>

        {resumeData.certifications.map((cert, index) => (

          <div
            key={index}
            className="group relative mb-8 rounded-3xl border border-slate-200 bg-slate-50/70 p-5 sm:p-6 transition-all duration-300 hover:border-blue-300 hover:shadow-xl"
          >

            <button
              onClick={() => removeCertification(index)}
              className="absolute right-4 top-4 rounded-xl bg-red-50 p-2 text-red-500 transition duration-300 hover:scale-110 hover:bg-red-100"
            >
              <Trash2 size={20} />
            </button>

            <h3 className="mb-6 text-lg font-semibold text-slate-800">
              Certification #{index + 1}
            </h3>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

              <input
                type="text"
                name="name"
                placeholder="Certificate Name"
                value={cert.name}
                onChange={(e) => handleChange(index, e)}
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />

              <input
                type="text"
                name="issuer"
                placeholder="Issuer"
                value={cert.issuer}
                onChange={(e) => handleChange(index, e)}
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />

              <input
                type="text"
                name="issueDate"
                placeholder="Issue Date"
                value={cert.issueDate}
                onChange={(e) => handleChange(index, e)}
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />

              <input
                type="url"
                name="credentialLink"
                placeholder="Credential Link (Optional)"
                value={cert.credentialLink}
                onChange={(e) => handleChange(index, e)}
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />

            </div>

          </div>

        ))}

      </div>
    </div>
  );
};

export default Certifications;