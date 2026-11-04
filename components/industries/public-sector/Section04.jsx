export default function Section04() {
  return (
    <section className="bg-white text-ink py-20 md:py-28 lg:py-32 relative">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="reveal in" style={{ transitionDelay: "0ms" }}>
              <span className="inline-flex items-center gap-2 font-mono text-[11.5px] font-medium uppercase tracking-[0.18em] text-muted">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-brand"
                  aria-hidden="true"
                ></span>
                Relevant services
              </span>
            </div>
            <div className="reveal in" style={{ transitionDelay: "80ms" }}>
              <h2 className="mt-4 text-[34px] sm:text-[44px] lg:text-[52px]">
                Capabilities we bring.
              </h2>
            </div>
          </div>
          <div
            className="reveal in shrink-0"
            style={{ transitionDelay: "240ms" }}
          >
            <a
              href="/services"
              className="group inline-flex items-center gap-1.5 text-[15px] font-bold text-ink hover:text-forest"
            >
              <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1.5px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-300 group-hover:bg-[length:100%_1.5px]">
                All services
              </span>
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
                className="lucide lucide-arrow-right h-4 w-4 text-brand transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <a href="/services/ai-data-innovation" className="group">
            <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift h-full p-6">
              <span className="grid h-12 w-12 place-items-center rounded-2xl transition-colors duration-300 bg-forest/[0.06] text-forest group-hover:bg-brand group-hover:text-ink">
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
                  className="lucide lucide-brain-circuit h-[22px] w-[22px]"
                  aria-hidden="true"
                >
                  <path d="M12 13h4"></path>
                  <path d="M12 18h6a2 2 0 012 2v1"></path>
                  <path d="M12 8h8"></path>
                  <path d="M12 9a4.17 4.17 0 01-3 4"></path>
                  <path d="M16 8V5a2 2 0 012-2"></path>
                  <path d="M6 18a4 4 0 01-2-7.465"></path>
                  <path d="M6.004 5.125a4 4 0 00-2.526 5.77"></path>
                  <path d="M6.294 6.294A3 3 0 1112 5v13a4 4 0 11-7.967-.518"></path>
                  <circle cx="16" cy="13" r="0.5" fill="currentColor"></circle>
                  <circle cx="18" cy="3" r="0.5" fill="currentColor"></circle>
                  <circle cx="20" cy="21" r="0.5" fill="currentColor"></circle>
                  <circle cx="20" cy="8" r="0.5" fill="currentColor"></circle>
                </svg>
              </span>
              <h3 className="mt-5 text-[18px]">AI &amp; Data Innovation</h3>
              <p className="mt-2 text-[14.5px] text-muted">
                Turn data into decisions with production-grade AI.
              </p>
            </div>
          </a>
          <a href="/services/cloud-infrastructure" className="group">
            <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift h-full p-6">
              <span className="grid h-12 w-12 place-items-center rounded-2xl transition-colors duration-300 bg-forest/[0.06] text-forest group-hover:bg-brand group-hover:text-ink">
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
                  className="lucide lucide-cloud h-[22px] w-[22px]"
                  aria-hidden="true"
                >
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
                </svg>
              </span>
              <h3 className="mt-5 text-[18px]">Cloud &amp; Infrastructure</h3>
              <p className="mt-2 text-[14.5px] text-muted">
                Resilient, cost-efficient cloud platforms.
              </p>
            </div>
          </a>
          <a href="/services/cybersecurity" className="group">
            <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift h-full p-6">
              <span className="grid h-12 w-12 place-items-center rounded-2xl transition-colors duration-300 bg-forest/[0.06] text-forest group-hover:bg-brand group-hover:text-ink">
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
              <h3 className="mt-5 text-[18px]">Cybersecurity</h3>
              <p className="mt-2 text-[14.5px] text-muted">
                Security engineered in, not bolted on.
              </p>
            </div>
          </a>
          <a href="/services/digital-experience" className="group">
            <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift h-full p-6">
              <span className="grid h-12 w-12 place-items-center rounded-2xl transition-colors duration-300 bg-forest/[0.06] text-forest group-hover:bg-brand group-hover:text-ink">
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
                  className="lucide lucide-monitor-smartphone h-[22px] w-[22px]"
                  aria-hidden="true"
                >
                  <path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"></path>
                  <path d="M10 19v-3.96 3.15"></path>
                  <path d="M7 19h5"></path>
                  <rect width="6" height="10" x="16" y="12" rx="2"></rect>
                </svg>
              </span>
              <h3 className="mt-5 text-[18px]">Digital Experience</h3>
              <p className="mt-2 text-[14.5px] text-muted">
                Web, mobile and commerce that customers love.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
