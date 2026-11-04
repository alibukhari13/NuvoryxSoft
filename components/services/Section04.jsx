export default function Section04() {
  return (
    <section className="bg-ink text-white py-20 md:py-28 lg:py-32 relative overflow-hidden">
      <div className="absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-brand/15 blur-[120px]"></div>
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8 relative">
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="reveal in" style={{ transitionDelay: "0ms" }}>
              <span className="inline-flex items-center gap-2 font-mono text-[11.5px] font-medium uppercase tracking-[0.18em] text-white/60">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-brand"
                  aria-hidden="true"
                ></span>
                Why Nuvoryx
              </span>
            </div>
            <div className="reveal in" style={{ transitionDelay: "80ms" }}>
              <h2 className="mt-4 text-[34px] sm:text-[44px] lg:text-[52px]">
                Why leaders choose us, and stay.
              </h2>
            </div>
            <div className="reveal in" style={{ transitionDelay: "160ms" }}>
              <p className="mt-5 max-w-2xl text-lg text-white/70">
                94% of clients renew or expand within their first year. Here’s
                why.
              </p>
            </div>
          </div>
        </div>
        <div className="grid gap-px overflow-hidden rounded-[24px] bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="group bg-ink p-8 transition-colors hover:bg-forest">
            <span className="grid h-12 w-12 place-items-center rounded-2xl transition-colors duration-300 bg-white/[0.07] text-brand">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-target h-[22px] w-[22px]"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="6"></circle>
                <circle cx="12" cy="12" r="2"></circle>
              </svg>
            </span>
            <h3 className="mt-6 text-[20px]">Outcome-led delivery</h3>
            <p className="mt-2 text-[15px] text-white/60">
              Success metrics agreed in week one and reported every sprint.
            </p>
          </div>
          <div className="group bg-ink p-8 transition-colors hover:bg-forest">
            <span className="grid h-12 w-12 place-items-center rounded-2xl transition-colors duration-300 bg-white/[0.07] text-brand">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-users h-[22px] w-[22px]"
                aria-hidden="true"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <circle cx="9" cy="7" r="4"></circle>
              </svg>
            </span>
            <h3 className="mt-6 text-[20px]">Senior by default</h3>
            <p className="mt-2 text-[15px] text-white/60">
              70% of our engineers have 6+ years of experience. No bait and
              switch.
            </p>
          </div>
          <div className="group bg-ink p-8 transition-colors hover:bg-forest">
            <span className="grid h-12 w-12 place-items-center rounded-2xl transition-colors duration-300 bg-white/[0.07] text-brand">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-shield-check h-[22px] w-[22px]"
                aria-hidden="true"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </span>
            <h3 className="mt-6 text-[20px]">Secure &amp; compliant</h3>
            <p className="mt-2 text-[15px] text-white/60">
              ISO 27001, SOC 2 Type II, HIPAA and GDPR-ready processes.
            </p>
          </div>
          <div className="group bg-ink p-8 transition-colors hover:bg-forest">
            <span className="grid h-12 w-12 place-items-center rounded-2xl transition-colors duration-300 bg-white/[0.07] text-brand">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-clock-3 h-[22px] w-[22px]"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 6v6h4"></path>
              </svg>
            </span>
            <h3 className="mt-6 text-[20px]">Time-zone aligned</h3>
            <p className="mt-2 text-[15px] text-white/60">
              Minimum four hours of overlap with your team, guaranteed.
            </p>
          </div>
          <div className="group bg-ink p-8 transition-colors hover:bg-forest">
            <span className="grid h-12 w-12 place-items-center rounded-2xl transition-colors duration-300 bg-white/[0.07] text-brand">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-cpu h-[22px] w-[22px]"
                aria-hidden="true"
              >
                <path d="M12 20v2"></path>
                <path d="M12 2v2"></path>
                <path d="M17 20v2"></path>
                <path d="M17 2v2"></path>
                <path d="M2 12h2"></path>
                <path d="M2 17h2"></path>
                <path d="M2 7h2"></path>
                <path d="M20 12h2"></path>
                <path d="M20 17h2"></path>
                <path d="M20 7h2"></path>
                <path d="M7 20v2"></path>
                <path d="M7 2v2"></path>
                <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                <rect x="8" y="8" width="8" height="8" rx="1"></rect>
              </svg>
            </span>
            <h3 className="mt-6 text-[20px]">AI-accelerated</h3>
            <p className="mt-2 text-[15px] text-white/60">
              AI-assisted engineering that ships 30% faster with the same
              quality bar.
            </p>
          </div>
          <div className="group bg-ink p-8 transition-colors hover:bg-forest">
            <span className="grid h-12 w-12 place-items-center rounded-2xl transition-colors duration-300 bg-white/[0.07] text-brand">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-badge-check lucide-verified h-[22px] w-[22px]"
                aria-hidden="true"
              >
                <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                <path d="m16 9-5.5 5.5L8 12"></path>
              </svg>
            </span>
            <h3 className="mt-6 text-[20px]">Zero lock-in</h3>
            <p className="mt-2 text-[15px] text-white/60">
              You own the code, the docs and the know-how from day one.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
