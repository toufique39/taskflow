
import {
  ArrowRight,
  Play,
  CheckCircle2,
  Circle,
  Sparkles,
  Clock3,
  Users,
} from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="overflow-hidden bg-slate-50 px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* Hero Content */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
            <Sparkles size={16} className="text-blue-600" />
            <span className="text-sm font-medium text-blue-700">
              Your productivity, reimagined
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Manage Work Smarter.
            <span className="mt-2 block text-blue-600">
              Achieve More.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
            Organize your tasks, manage projects, and collaborate
            with your team — all in one powerful workspace.
          </p>

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
            >
              Get Started Free
              <ArrowRight size={18} />
            </a>

            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              <Play size={17} />
              Explore Features
            </a>

          </div>

          <p className="mt-5 text-sm text-slate-500">
            No credit card required · Free to get started
          </p>

        </div>

        {/* Dashboard Preview */}
        <div className="relative mx-auto mt-16 max-w-5xl">

          <div className="absolute -left-10 top-10 h-48 w-48 rounded-full bg-blue-300/20 blur-3xl" />

          <div className="absolute -right-10 bottom-10 h-48 w-48 rounded-full bg-purple-300/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-300/40">

            {/* Dashboard Header */}
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">

              <div className="flex items-center gap-2">
                <div className="rounded-lg bg-blue-600 p-2">
                  <Sparkles className="text-white" size={18} />
                </div>

                <span className="font-bold text-slate-900">
                  TaskFlow Dashboard
                </span>
              </div>

              <div className="hidden items-center gap-3 sm:flex">
                <span className="text-sm text-slate-500">
                  Welcome back, Alex
                </span>

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600">
                  A
                </div>
              </div>

            </div>

            {/* Dashboard Body */}
            <div className="grid gap-5 bg-slate-50 p-5 md:grid-cols-3 md:p-7">

              {/* Main Content */}
              <div className="space-y-5 md:col-span-2">

                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Overview
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Here's what's happening with your projects.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">

                  <div className="rounded-xl border border-slate-200 bg-white p-4">
                    <p className="text-xs text-slate-500">Total Tasks</p>
                    <h4 className="mt-2 text-2xl font-bold text-slate-900">
                      24
                    </h4>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-white p-4">
                    <p className="text-xs text-slate-500">Completed</p>
                    <h4 className="mt-2 text-2xl font-bold text-green-600">
                      18
                    </h4>
                  </div>

                  <div className="col-span-2 rounded-xl border border-slate-200 bg-white p-4 sm:col-span-1">
                    <p className="text-xs text-slate-500">In Progress</p>
                    <h4 className="mt-2 text-2xl font-bold text-blue-600">
                      6
                    </h4>
                  </div>

                </div>

                {/* Task List */}
                <div className="rounded-xl border border-slate-200 bg-white p-4">

                  <h4 className="mb-4 font-semibold text-slate-900">
                    Today's Tasks
                  </h4>

                  {[
                    { title: "Design landing page", done: true },
                    { title: "Complete project setup", done: false },
                    { title: "Review team progress", done: false },
                  ].map((task) => (

                    <div
                      key={task.title}
                      className="flex items-center gap-3 border-t border-slate-100 py-3"
                    >
                      {task.done ? (
                        <CheckCircle2
                          size={19}
                          className="text-green-500"
                        />
                      ) : (
                        <Circle
                          size={19}
                          className="text-slate-300"
                        />
                      )}

                      <span className="text-sm text-slate-700">
                        {task.title}
                      </span>
                    </div>

                  ))}

                </div>

              </div>

              {/* Sidebar */}
              <div className="space-y-4">

                <div className="rounded-xl border border-slate-200 bg-white p-4">

                  <h4 className="font-semibold text-slate-900">
                    Weekly Progress
                  </h4>

                  <div className="mt-5 text-center">
                    <h3 className="text-4xl font-bold text-blue-600">
                      75%
                    </h3>
                    <p className="mt-1 text-xs text-slate-500">
                      Tasks completed
                    </p>
                  </div>

                  <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full w-3/4 rounded-full bg-blue-600" />
                  </div>

                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-4">

                  <div className="flex items-center gap-2">
                    <Users size={18} className="text-blue-600" />
                    <h4 className="font-semibold text-slate-900">
                      Team Members
                    </h4>
                  </div>

                  <p className="mt-3 text-2xl font-bold text-slate-900">
                    08
                  </p>

                  <p className="text-xs text-slate-500">
                    Working together
                  </p>

                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-4">

                  <div className="flex items-center gap-2">
                    <Clock3 size={18} className="text-orange-500" />
                    <h4 className="font-semibold text-slate-900">
                      Upcoming
                    </h4>
                  </div>

                  <p className="mt-3 text-sm font-semibold text-slate-800">
                    Project Deadline
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Tomorrow, 10:00 AM
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
