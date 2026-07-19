import { Mail, MapPin, Globe, Clock, Send } from "lucide-react";

const ContactUs = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 py-20">

      {/* Background */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl"></div>
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-violet-300/30 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-blue-300/30 blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6">

        {/* Hero */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Contact
          </span>

          <h1 className="mt-6 text-5xl font-extrabold text-slate-900">
            Get In
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 bg-clip-text text-transparent">
              {" "}Touch
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-600">
            Have questions, suggestions or feedback? We'd love to hear from
            you.
          </p>

        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {/* Contact Form */}

          <div className="gradient-border">

            <div className="gradient-border-content rounded-3xl bg-white/90 p-8 backdrop-blur-xl shadow-xl">

              <h2 className="text-3xl font-bold text-slate-900">
                Send us a Message
              </h2>

              <div className="mt-8 space-y-5">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />

                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-2xl border border-slate-300 bg-white px-5 py-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />

                <button className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 px-6 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">

                  <Send size={20} />

                  Send Message

                </button>

              </div>

            </div>

          </div>

          {/* Contact Info */}

          <div className="space-y-6">

            <div className="gradient-border">

              <div className="gradient-border-content rounded-3xl bg-white/90 p-6 backdrop-blur-xl shadow-xl">

                <div className="flex items-center gap-4">

                  <Mail className="text-blue-600" size={32} />

                  <div>

                    <h3 className="font-bold text-slate-900">
                      Email
                    </h3>

                    <p className="text-slate-600">
                      support@hc102023.com
                    </p>

                  </div>

                </div>

              </div>

            </div>

            <div className="gradient-border">

              <div className="gradient-border-content rounded-3xl bg-white/90 p-6 backdrop-blur-xl shadow-xl">

                <div className="flex items-center gap-4">

                  <MapPin className="text-blue-600" size={32} />

                  <div>

                    <h3 className="font-bold text-slate-900">
                      Location
                    </h3>

                    <p className="text-slate-600">
                      India
                    </p>

                  </div>

                </div>

              </div>

            </div>

            <div className="gradient-border">

              <div className="gradient-border-content rounded-3xl bg-white/90 p-6 backdrop-blur-xl shadow-xl">

                <div className="flex items-center gap-4">

                  <Globe className="text-blue-600" size={32} />

                  <div>

                    <h3 className="font-bold text-slate-900">
                      Website
                    </h3>

                    <p className="text-slate-600">
                      www.airesumebuilder.com
                    </p>

                  </div>

                </div>

              </div>

            </div>

            <div className="gradient-border">

              <div className="gradient-border-content rounded-3xl bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 p-6 text-white shadow-xl">

                <div className="flex items-center gap-4">

                  <Clock size={32} />

                  <div>

                    <h3 className="font-bold">
                      Support Hours
                    </h3>

                    <p>
                      Monday - Friday
                    </p>

                    <p>
                      9:00 AM - 6:00 PM (IST)
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* FAQ */}

        <div className="gradient-border mt-16">

          <div className="gradient-border-content rounded-3xl bg-white/90 p-8 backdrop-blur-xl shadow-xl">

            <h2 className="text-3xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>

            <div className="mt-8 space-y-6">

              <div className="rounded-2xl border border-slate-200 p-6">

                <h3 className="font-semibold text-slate-900">
                  Is this platform free?
                </h3>

                <p className="mt-2 text-slate-600">
                  Yes. The basic Resume Analyzer and Resume Builder features are
                  free to use.
                </p>

              </div>

              <div className="rounded-2xl border border-slate-200 p-6">

                <h3 className="font-semibold text-slate-900">
                  Do you store uploaded resumes?
                </h3>

                <p className="mt-2 text-slate-600">
                  No. Uploaded resumes are processed only for analysis unless
                  future features explicitly require storage.
                </p>

              </div>

              <div className="rounded-2xl border border-slate-200 p-6">

                <h3 className="font-semibold text-slate-900">
                  How long does AI analysis take?
                </h3>

                <p className="mt-2 text-slate-600">
                  Usually less than a minute, depending on the resume size and
                  server load.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ContactUs;