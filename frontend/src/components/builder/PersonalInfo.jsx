const PersonalInfo = ({ resumeData, setResumeData, errors, setErrors }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setResumeData({
      ...resumeData,
      [name]: value,
    });

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  return (
    <div className="gradient-border">
      <div className="gradient-border-content rounded-3xl bg-white/90 backdrop-blur-xl p-5 sm:p-6 md:p-8 shadow-xl">
        {/* Header */}

        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            👤 Personal Information
          </h2>

          <p className="mt-2 text-sm sm:text-base text-slate-500">
            Fill in your personal details that will appear on your resume.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Full Name */}

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Full Name
            </label>

            <input
              type="text"
              name="fullName"
              placeholder="John Doe"
              value={resumeData.fullName}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />

            {errors.fullName && (
              <p className="mt-2 text-sm text-red-500">{errors.fullName}</p>
            )}
          </div>

          {/* Email */}

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              value={resumeData.email}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />

            {errors.email && (
              <p className="mt-2 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Phone */}

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Phone
            </label>

            <input
              type="text"
              name="phone"
              placeholder="+91 9876543210"
              value={resumeData.phone}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />

            {errors.phone && (
              <p className="mt-2 text-sm text-red-500">{errors.phone}</p>
            )}
          </div>

          {/* City */}

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              City
            </label>

            <input
              type="text"
              name="city"
              placeholder="Greater Noida"
              value={resumeData.city}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />

            {errors.city && (
              <p className="mt-2 text-sm text-red-500">{errors.city}</p>
            )}
          </div>

          {/* State */}

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              State
            </label>

            <input
              type="text"
              name="state"
              placeholder="Uttar Pradesh"
              value={resumeData.state}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />

            {errors.state && (
              <p className="mt-2 text-sm text-red-500">{errors.state}</p>
            )}
          </div>

          {/* Pincode */}

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Pincode
            </label>

            <input
              type="text"
              name="pincode"
              placeholder="201310"
              value={resumeData.pincode}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />

            {errors.pincode && (
              <p className="mt-2 text-sm text-red-500">{errors.pincode}</p>
            )}
          </div>

          {/* Portfolio */}

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Portfolio <span className="text-slate-400">(Optional)</span>
            </label>

            <input
              type="text"
              name="portfolio"
              placeholder="https://portfolio.com"
              value={resumeData.portfolio}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
          </div>

          {/* LinkedIn */}

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              LinkedIn
            </label>

            <input
              type="text"
              name="linkedin"
              placeholder="https://linkedin.com/in/username"
              value={resumeData.linkedin}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
          </div>

          {/* GitHub */}

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              GitHub
            </label>

            <input
              type="text"
              name="github"
              placeholder="https://github.com/username"
              value={resumeData.github}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
