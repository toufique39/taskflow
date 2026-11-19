
import { features } from "../data/features";

const Features = () => {
  return (
    <section
      id="features"
      className="bg-white px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">

          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Powerful Features
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Everything You Need to
            <span className="text-blue-600"> Work Smarter</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600">
            Simple tools, powerful results. Everything your team
            needs to stay organized and productive.
          </p>

        </div>

        {/* Feature Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => {

            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50"
              >

                {/* Icon */}
                <div className="mb-6 inline-flex rounded-xl bg-blue-50 p-4 transition group-hover:bg-blue-600">

                  <Icon
                    size={26}
                    className="text-blue-600 transition group-hover:text-white"
                  />

                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Features;
