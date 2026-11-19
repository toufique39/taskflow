
import {
  CheckCircle2,
  Users,
  Target,
  TrendingUp,
} from "lucide-react";

const About = () => {
  const benefits = [
    "Keep all your projects organized",
    "Collaborate with your team easily",
    "Track progress in real time",
    "Focus on what matters most",
  ];

  return (
    <section id="about" className="bg-slate-50 px-6 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

        {/* Left Content */}
        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            About TaskFlow
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
            One Workspace.
            <span className="block text-blue-600">
              Endless Possibilities.
            </span>
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            TaskFlow is designed to simplify the way you work.
            Bring your tasks, projects, and team collaboration
            together in one organized workspace.
          </p>

          <div className="mt-8 space-y-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3">
                <CheckCircle2
                  size={20}
                  className="shrink-0 text-green-500"
                />
                <span className="text-sm font-medium text-slate-700">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          <a
            href="#how-it-works"
            className="mt-9 inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Discover How It Works
          </a>
        </div>

        {/* Right Visual */}
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-blue-100/60 blur-2xl" />

          <div className="relative space-y-5 rounded-3xl border border-slate-200 bg-white p-7 shadow-xl">

            <h3 className="text-xl font-bold text-slate-900">
              Why Choose TaskFlow?
            </h3>

            {[
              {
                icon: Target,
                title: "Clear Goals",
                description: "Stay focused on your priorities.",
                color: "text-blue-600",
                bg: "bg-blue-50",
              },
              {
                icon: Users,
                title: "Better Collaboration",
                description: "Bring your team together.",
                color: "text-purple-600",
                bg: "bg-purple-50",
              },
              {
                icon: TrendingUp,
                title: "Improved Productivity",
                description: "Understand and improve your workflow.",
                color: "text-green-600",
                bg: "bg-green-50",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-start gap-4 rounded-xl border border-slate-100 p-4 transition hover:border-blue-200 hover:shadow-md"
                >
                  <div className={`rounded-lg p-3 ${item.bg}`}>
                    <Icon size={24} className={item.color} />
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900">
                      {item.title}
                    </h4>

                    <p className="mt-1 text-sm text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
