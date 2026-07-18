import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <section className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
      <div className="text-center max-w-xl">

        <h1 className="text-8xl md:text-9xl font-extrabold text-blue-600">
          404
        </h1>

        <h2 className="mt-6 text-3xl md:text-4xl font-bold text-slate-900">
          Page Not Found
        </h2>

        <p className="mt-4 text-slate-600 text-lg">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition"
        >
          <Home size={20} />
          Go to Home
        </Link>

      </div>
    </section>
  );
};

export default NotFound;