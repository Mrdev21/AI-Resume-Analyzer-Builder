const ATSScoreCard = ({ score = 91 }) => {
  const radius = 70;
  const stroke = 10;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  const getStatus = () => {
    if (score >= 85)
      return {
        text: "Excellent",
        bg: "bg-green-100",
        textColor: "text-green-700",
      };

    if (score >= 70)
      return {
        text: "Good",
        bg: "bg-yellow-100",
        textColor: "text-yellow-700",
      };

    return {
      text: "Needs Improvement",
      bg: "bg-red-100",
      textColor: "text-red-700",
    };
  };

  const status = getStatus();

  return (
    <div className="gradient-border">

      <div className="gradient-border-content rounded-3xl bg-white/90 backdrop-blur-xl p-6 md:p-8 shadow-xl">

        <div className="mb-8 text-center">

          <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
            🎯 ATS Score
          </h3>

          <p className="mt-2 text-slate-500">
            See how well your resume performs with ATS systems.
          </p>

        </div>

        <div className="flex justify-center">

          <div className="relative h-48 w-48">

            <svg
              className="h-48 w-48 -rotate-90"
              viewBox="0 0 160 160"
            >
              <circle
                cx="80"
                cy="80"
                r={radius}
                fill="none"
                stroke="#E2E8F0"
                strokeWidth={stroke}
              />

              <circle
                cx="80"
                cy="80"
                r={radius}
                fill="none"
                stroke="url(#gradient)"
                strokeWidth={stroke}
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                className="transition-all duration-1000"
              />

              <defs>
                <linearGradient
                  id="gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#2563EB" />
                  <stop offset="50%" stopColor="#06B6D4" />
                  <stop offset="100%" stopColor="#7C3AED" />
                </linearGradient>
              </defs>

            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center">

              <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 bg-clip-text text-transparent">
                {score}%
              </h2>

              <span className="mt-2 text-sm font-medium text-slate-500">
                ATS Score
              </span>

            </div>

          </div>

        </div>

        <div className="mt-8 flex justify-center">

          <span
            className={`rounded-full px-5 py-2 font-semibold ${status.bg} ${status.textColor}`}
          >
            {status.text}
          </span>

        </div>

      </div>

    </div>
  );
};

export default ATSScoreCard;