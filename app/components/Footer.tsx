import Link from "next/link";

const navigationLinks = [
  { label: "About us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/coderaxo",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="currentColor"
        aria-hidden
      >
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8.02H4.8v13.96H.22zM8.7 8.02h4.39v1.91h.06c.61-1.16 2.11-2.38 4.34-2.38 4.64 0 5.5 3.05 5.5 7.02v8.4h-4.58v-7.44c0-1.78-.03-4.07-2.48-4.07-2.48 0-2.86 1.94-2.86 3.94v7.57H8.7z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="currentColor"
        aria-hidden
      >
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.55v-1.93c-3.2.7-3.87-1.37-3.87-1.37-.53-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.78 1.2 1.78 1.2 1.04 1.78 2.74 1.26 3.4.97.1-.76.41-1.26.75-1.55-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.28 1.2-3.08-.12-.3-.52-1.52.12-3.17 0 0 .97-.31 3.2 1.18.92-.26 1.9-.39 2.88-.39s1.96.13 2.88.39c2.24-1.5 3.2-1.18 3.2-1.18.64 1.65.24 2.87.12 3.17.75.8 1.2 1.82 1.2 3.08 0 4.43-2.71 5.4-5.29 5.69.42.36.8 1.06.8 2.14v3.17c0 .3.21.66.8.55A11.53 11.53 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "https://x.com",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="currentColor"
        aria-hidden
      >
        <path d="M20.2 3H23l-6.4 7.3L23.7 21h-5.7l-4.5-6-5.1 6H1.6l6.8-7.7L2.3 3h5.8l4.1 5.5L20.2 3zm-2.1 15.9h1.5L6 4.1H4.3l13.8 14.8z" />
      </svg>
    ),
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-24 overflow-hidden bg-gradient-to-br from-[#0c0a15] via-[#161022] to-[#090812] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[-20%] h-[320px] w-[320px] rounded-full bg-[#a855f7]/15 blur-[120px]" />
        <div className="absolute right-[-10%] bottom-[-20%] h-[320px] w-[320px] rounded-full bg-indigo-600/15 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(107,76,168,0.12),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(60,43,94,0.14),transparent_35%),radial-gradient(circle_at_50%_90%,rgba(32,26,54,0.18),transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.04)_0,rgba(255,255,255,0.02)_30%,transparent_50%,rgba(255,255,255,0.03)_70%,rgba(255,255,255,0.04)_100%)] opacity-70 mix-blend-screen" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_0.9fr]">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-3">
            <div className="space-y-6 md:col-span-2 lg:col-span-2">
              <div className="flex items-center gap-3">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full ring-1 ring-white/10 shadow-[0_12px_40px_rgba(43,27,58,0.35)] overflow-hidden"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 20%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(0,0,0,0.4) 0%, transparent 50%), linear-gradient(135deg, #000000 0%, #4c1d95 50%, #7c3aed 100%)",
                    boxShadow:
                      "inset -3px -3px 8px rgba(0,0,0,0.5), inset 3px 3px 8px rgba(255,255,255,0.2), 0 4px 12px rgba(0,0,0,0.4)",
                  }}
                >
                  <img
                    src="/logo.png"
                    alt="CoderAxo logo"
                    className="h-8 w-8 object-contain"
                  />
                </div>
                <div>
                  <p
                    className="text-xl font-semibold text-white"
                    style={{
                      fontFamily:
                        '"Orbitron", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      letterSpacing: "-0.5px",
                    }}
                  >
                   Webipro.dev
                  </p>
                  <p className="text-sm text-gray-400">
                    Premium IT services partner
                  </p>
                </div>
              </div>
              <p className="max-w-2xl text-gray-300">
                We blend engineering, design, and AI to craft resilient digital
                products. Let&apos;s build experiences that keep your business
                moving forward.
              </p>
              <div className="flex items-start gap-3 text-sm text-gray-300">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 text-lg leading-none">
                  ★
                </span>
                <p className="leading-relaxed max-w-xl">
                  Trusted delivery team focused on clarity, speed, and measurable outcomes across web, mobile, and AI solutions.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-300">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                    Project Success
                  </p>
                  <p className="mt-1 text-lg font-semibold text-white">97%</p>
                  <p className="text-xs text-gray-400">Delivered on time & scope</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                    Avg. Kickoff
                  </p>
                  <p className="mt-1 text-lg font-semibold text-white">7 days</p>
                  <p className="text-xs text-gray-400">From brief to build</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-300">
                Explore
              </h3>
              <ul className="mt-6 space-y-3 text-gray-300">
                {navigationLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-sm transition-all duration-200 hover:text-white"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#2b1b3a] to-[#6b4ca8] opacity-60 transition-all duration-200 group-hover:opacity-100" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-300">
                Contact
              </h3>
              <div className="mt-6 space-y-4 text-gray-300">
                <p className="text-sm">
                  contact@webipro.dev
                  <br />
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(168,85,247,0.18),transparent_35%)]" />
            <div className="absolute inset-0 opacity-50 mix-blend-overlay bg-[linear-gradient(145deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.0)_35%,rgba(255,255,255,0.08)_70%,rgba(255,255,255,0.0)_100%)]" />
            <div className="relative space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 ring-1 ring-white/15">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Currently taking projects
              </div>
              <h3 className="text-2xl font-semibold text-white">
                Let&apos;s build what&apos;s next.
              </h3>
              <p className="text-sm text-gray-200">
                Tell us about your product, team, and timeline. We reply within
                one business day with a clear plan.
              </p>
              <div className="space-y-2 text-sm text-gray-200">
                <div className="flex items-center gap-2">
                  <span className="h-6 w-6 rounded-full bg-white/10 text-center text-xs leading-6 text-white ring-1 ring-white/15">
                    1
                  </span>
                  Quick discovery call
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-6 w-6 rounded-full bg-white/10 text-center text-xs leading-6 text-white ring-1 ring-white/15">
                    2
                  </span>
                  Plan and estimate
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-6 w-6 rounded-full bg-white/10 text-center text-xs leading-6 text-white ring-1 ring-white/15">
                    3
                  </span>
                  Delivery with weekly demos
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-gray-400 md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} Webipro. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="mailto:contact@webipro.dev"
              className="transition-colors duration-150 hover:text-white"
            >
              contact@webipro.dev
            </Link>
            <span className="hidden text-gray-700 md:inline">•</span>
            <Link
              href="https://webipro.dev"
              className="transition-colors duration-150 hover:text-white"
            >
              webipro.dev
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

