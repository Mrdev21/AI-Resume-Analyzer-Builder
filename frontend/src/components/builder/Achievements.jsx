import { Plus, Trash2 } from "lucide-react";

const Achievements = ({ resumeData, setResumeData }) => {
  const handleChange = (index, value) => {
    const updatedAchievements = [...resumeData.achievements];

    updatedAchievements[index] = value;

    setResumeData({
      ...resumeData,
      achievements: updatedAchievements,
    });
  };

  const addAchievement = () => {
    setResumeData({
      ...resumeData,
      achievements: [...resumeData.achievements, ""],
    });
  };

  const removeAchievement = (index) => {
    setResumeData({
      ...resumeData,
      achievements: resumeData.achievements.filter(
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
              🏅 Achievements
            </h2>

            <p className="mt-2 text-sm sm:text-base text-slate-500">
              Highlight your accomplishments and awards.
            </p>
          </div>

          <button
            onClick={addAchievement}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 px-5 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <Plus size={18} />
            Add Achievement
          </button>

        </div>

        {resumeData.achievements.map((achievement, index) => (

          <div
            key={index}
            className="group mb-5 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 transition-all duration-300 hover:border-blue-300 hover:shadow-lg sm:flex-row sm:items-center"
          >

            <input
              type="text"
              placeholder="Enter Achievement"
              value={achievement}
              onChange={(e) => handleChange(index, e.target.value)}
              className="flex-1 rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />

            <button
              onClick={() => removeAchievement(index)}
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-500 transition-all duration-300 hover:scale-110 hover:bg-red-100"
            >
              <Trash2 size={20} />
            </button>

          </div>

        ))}

      </div>
    </div>
  );
};

export default Achievements;