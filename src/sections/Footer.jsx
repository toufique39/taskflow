
import { Layers, ArrowUp } from "lucide-react";

const currentYear = new Date().getFullYear();

const GithubIcon = ({ size = 20, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.17c-3.2.7-3.88-1.36-3.88-1.36-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.41.35.78 1.05.78 2.12v3.14c0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
  </svg>
);

const LinkedinIcon = ({ size = 20, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
  </svg>
);

const TwitterIcon = ({ size = 20, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.23l-4.88-6.38L6.5 22H3.38l7.24-8.28L2.8 2h6.39l4.41 5.83L18.9 2zm-1.1 18.13h1.72L7.29 3.78H5.45l12.35 16.35z" />
  </svg>
);

const Footer = () => {
  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "How It Works", href: "#how-it-works" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Get Started", href: "#pricing" },
        { name: "Contact Support", href: "#contact" },
      ],
    },
  ];

  const socialLinks = [
    { icon: GithubIcon, href: "https://github.com", label: "GitHub" },
    { icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: TwitterIcon, href: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <footer className="bg-slate-950 px-6 pt-16 text-white">

      <div className="mx-auto max-w-7xl">

        {/* Footer Main */}
        <div className="grid gap-12 pb-12 md:grid-cols-2 lg:grid-cols-5">

          {/* Brand */}
          <div className="lg:col-span-2">

            <a href="#home" className="inline-flex items-center gap-2">
              <div className="rounded-lg bg-blue-600 p-2">
                <Layers size={22} className="text-white" />
              </div>

              <span className="text-2xl font-bold">
                TaskFlow
              </span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Make your work simpler, smarter, and more
              productive with TaskFlow. Manage tasks and
              projects in one powerful workspace.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">

              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="rounded-lg border border-slate-700 p-3 text-slate-400 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
                  >
                    <Icon size={19} />
                  </a>
                );
              })}

            </div>

          </div>

          {/* Footer Navigation */}
          {footerLinks.map((group) => (

            <div key={group.title}>

              <h3 className="mb-5 font-semibold text-white">
                {group.title}
              </h3>

              <ul className="space-y-4">

                {group.links.map((link) => (

                  <li key={link.name}>

                    <a
                      href={link.href}
                      className="text-sm text-slate-400 transition hover:text-blue-400"
                    >
                      {link.name}
                    </a>

                  </li>

                ))}

              </ul>

            </div>

          ))}

        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-800 py-7 sm:flex-row">

          <p className="text-center text-sm text-slate-400">
            © {currentYear} TaskFlow. All rights reserved.
          </p>

          <a
            href="#home"
            className="flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-white"
          >
            Back to Top
            <ArrowUp size={17} />
          </a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
