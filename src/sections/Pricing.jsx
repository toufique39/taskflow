
import { Check, Sparkles } from "lucide-react";
import { pricingPlans } from "../data/pricing";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="bg-slate-50 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-16 max-w-2xl text-center">

          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Simple Pricing
          </span>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
            Choose the Right Plan
            <span className="block text-blue-600">
              for Your Workflow
            </span>
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            Start for free and upgrade whenever you need
            more powerful productivity tools.
          </p>

        </div>

        {/* Pricing Cards */}
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">

          {pricingPlans.map((plan) => (

            <div
              key={plan.id}
              className={`relative rounded-2xl border p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl ${
                plan.popular
                  ? "border-blue-500 bg-white shadow-lg shadow-blue-100"
                  : "border-slate-200 bg-white"
              }`}
            >

              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 whitespace-nowrap rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white">
                    <Sparkles size={14} />
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Details */}
              <div className="mb-8">

                <h3 className="text-2xl font-bold text-slate-900">
                  {plan.name}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {plan.description}
                </p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-slate-900">
                    ${plan.price}
                  </span>

                  <span className="text-sm text-slate-500">
                    / {plan.period}
                  </span>
                </div>

              </div>

              {/* CTA */}
              <a
                href="#contact"
                className={`mb-8 flex w-full items-center justify-center rounded-xl px-5 py-4 font-semibold transition ${
                  plan.popular
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
                }`}
              >
                {plan.buttonText}
              </a>

              {/* Features */}
              <div>
                <h4 className="mb-5 font-semibold text-slate-900">
                  What's included:
                </h4>

                <ul className="space-y-4">

                  {plan.features.map((feature) => (

                    <li
                      key={feature}
                      className="flex items-start gap-3"
                    >

                      <Check
                        size={19}
                        className="mt-0.5 shrink-0 text-green-500"
                      />

                      <span className="text-sm text-slate-600">
                        {feature}
                      </span>

                    </li>

                  ))}

                </ul>
              </div>

            </div>

          ))}

        </div>

        <p className="mt-10 text-center text-sm text-slate-500">
          No hidden fees. Start free and upgrade anytime.
        </p>

      </div>
    </section>
  );
};

export default Pricing;
