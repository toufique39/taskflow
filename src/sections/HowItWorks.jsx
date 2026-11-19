
import {
  UserPlus,
  ListChecks,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    id: 1,
    icon: UserPlus,
    title: "Create Your Account",
    description:
      "Sign up and set up your personal workspace in just a few simple steps.",
  },
  {
    id: 2,
    icon: ListChecks,
    title: "Organize Your Tasks",
    description:
      "Create tasks, organize projects, and set priorities for your daily work.",
  },
  {
    id: 3,
    icon: TrendingUp,
    title: "Track Your Progress",
    description:
      "Monitor your progress, analyze productivity, and achieve your goals.",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="bg-white px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Simple Process
          </span>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
            How It Works
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            Get started with TaskFlow in three simple steps
            and make your workflow more organized.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-3">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="relative rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:bg-white hover:shadow-xl"
              >

                {/* Step Number */}
                <span className="absolute right-6 top-5 text-3xl font-bold text-slate-200">
                  0{step.id}
                </span>

                {/* Icon */}
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                  <Icon size={30} />
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>

                {index !== steps.length - 1 && (
                  <ArrowRight
                    className="absolute -right-5 top-1/2 hidden -translate-y-1/2 text-blue-300 md:block"
                    size={24}
                  />
                )}

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
