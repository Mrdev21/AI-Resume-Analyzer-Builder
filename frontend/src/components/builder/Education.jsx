import { Plus, Trash2 } from "lucide-react";

const Education = ({ resumeData, setResumeData }) => {
  const handleChange = (index, e) => {
    const updatedEducation = [...resumeData.education];

    updatedEducation[index][e.target.name] = e.target.value;

    setResumeData({
      ...resumeData,
      education: updatedEducation,
    });
  };

  const addEducation = () => {
    setResumeData({
      ...resumeData,
      education: [
        ...resumeData.education,
        {
          degree: "",
          college: "",
          location: "",
          startYear: "",
          endYear: "",
          cgpa: "",
        },
      ],
    });
  };

  const removeEducation = (index) => {
    const updatedEducation = resumeData.education.filter((_, i) => i !== index);

    setResumeData({
      ...resumeData,
      education: updatedEducation,
    });
  };

  return (
    <div className="gradient-border">
      <div className="gradient-border-content rounded-3xl bg-white/90 backdrop-blur-xl p-5 sm:p-6 md:p-8 shadow-xl">
        {/* Header */}

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              🎓 Education
            </h2>

            <p className="mt-2 text-sm sm:text-base text-slate-500">
              Add your educational qualifications.
            </p>
          </div>

          <button
            onClick={addEducation}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 px-5 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <Plus size={18} />
            Add Education
          </button>
        </div>

        {resumeData.education.map((edu, index) => (
          <div
            key={index}
            className="group relative mb-8 rounded-3xl border border-slate-200 bg-slate-50/70 p-5 sm:p-6 transition-all duration-300 hover:border-blue-300 hover:shadow-xl"
          >
            {/* Remove */}

            <button
              onClick={() => removeEducation(index)}
              className="absolute right-4 top-4 rounded-xl bg-red-50 p-2 text-red-500 transition duration-300 hover:scale-110 hover:bg-red-100"
            >
              <Trash2 size={20} />
            </button>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-slate-800">
                Education #{index + 1}
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <input
                type="text"
                name="degree"
                placeholder="Degree"
                value={edu.degree}
                onChange={(e) => handleChange(index, e)}
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />

              <input
                type="text"
                name="college"
                placeholder="College / School Name"
                value={edu.college}
                onChange={(e) => handleChange(index, e)}
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />

              <input
                type="text"
                name="location"
                placeholder="Location"
                value={edu.location}
                onChange={(e) => handleChange(index, e)}
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />

              <input
                type="text"
                name="cgpa"
                placeholder="CGPA (Optional)"
                value={edu.cgpa}
                onChange={(e) => handleChange(index, e)}
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />

              <input
                type="text"
                name="startYear"
                placeholder="Start Year"
                value={edu.startYear}
                onChange={(e) => handleChange(index, e)}
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />

              <input
                type="text"
                name="endYear"
                placeholder="End Year"
                value={edu.endYear}
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
export default Education;
