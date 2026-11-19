
import { useState } from "react";
import {
  Mail,
  MessageSquare,
  Send,
  CheckCircle2,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    e.preventDefault();
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="bg-white px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">

          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Get In Touch
          </span>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
            Let's Talk About Your Workflow
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            Have questions or want to learn more about TaskFlow?
            Send us a message.
          </p>

        </div>

        {/* Contact Layout */}
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2">

          {/* Contact Information */}
          <div className="rounded-2xl bg-slate-900 p-8 text-white">

            <h3 className="text-2xl font-bold">
              Let's Connect
            </h3>

            <p className="mt-4 leading-7 text-slate-300">
              We're here to help you make your workflow
              simpler and more productive.
            </p>

            <div className="mt-10 space-y-7">

              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-blue-600 p-3">
                  <Mail size={22} />
                </div>

                <div>
                  <p className="text-sm text-slate-400">
                    Email Us
                  </p>

                  <p className="font-medium">
                    hello@taskflow.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-blue-600 p-3">
                  <MessageSquare size={22} />
                </div>

                <div>
                  <p className="text-sm text-slate-400">
                    Support
                  </p>

                  <p className="font-medium">
                    We're here to help
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
          >

            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Your Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                minLength={2}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Email Address
              </label>

              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows={5}
                required
                minLength={10}
                className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              Send Message
              <Send size={18} />
            </button>

            {/* Success Message */}
            {submitted && (
              <div
                role="status"
                className="flex items-center gap-3 rounded-xl bg-green-50 p-4 text-green-700"
              >
                <CheckCircle2 size={22} />

                <p className="text-sm font-medium">
                  Thank you! Your message has been submitted successfully.
                </p>
              </div>
            )}

          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;
