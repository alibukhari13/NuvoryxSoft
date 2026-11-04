export default function Section06() {
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
                Featured case study
              </span>
            </div>
            <div className="reveal in" style={{ transitionDelay: "80ms" }}>
              <h2 className="mt-4 text-[34px] sm:text-[44px] lg:text-[52px]">
                Proof, not promises.
              </h2>
            </div>
          </div>
          <div
            className="reveal in shrink-0"
            style={{ transitionDelay: "240ms" }}
          >
            <a
              href="/case-studies"
              className="group inline-flex items-center gap-1.5 text-[15px] font-bold text-ink hover:text-forest"
            >
              <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1.5px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-300 group-hover:bg-[length:100%_1.5px]">
                All case studies
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
        <a
          href="/case-studies/kestrel-ai-agents"
          className="group grid overflow-hidden rounded-[28px] border border-line bg-white shadow-soft transition-shadow hover:shadow-lift lg:grid-cols-2"
        >
          <div className="relative min-h-[300px] overflow-hidden">
            <img
              alt="Kestrel Insurance"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              src="https://images.unsplash.com/photo-1677611998429-1baa4371456b?auto=format&fit=crop&w=1600&q=75"
            />
          </div>
          <div className="p-8 md:p-12">
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full px-3 py-1 text-[12.5px] font-semibold bg-ink/[0.05] text-ink/75">
                Fintech &amp; Banking
              </span>
              <span className="inline-flex items-center rounded-full px-3 py-1 text-[12.5px] font-semibold bg-ink/[0.05] text-ink/75">
                AI &amp; Data Innovation
              </span>
            </div>
            <h3 className="mt-5 text-[28px] leading-tight md:text-[34px]">
              AI agents process 70% of claims end to end
            </h3>
            <p className="mt-4 text-muted">
              An insurer wanted to cut claims cycle times without compromising
              accuracy or compliance.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div>
                <div className="font-display text-[28px] font-bold text-forest">
                  70%
                </div>
                <div className="text-[13px] text-muted">
                  claims fully automated
                </div>
              </div>
              <div>
                <div className="font-display text-[28px] font-bold text-forest">
                  4.2 days
                </div>
                <div className="text-[13px] text-muted">faster settlement</div>
              </div>
              <div>
                <div className="font-display text-[28px] font-bold text-forest">
                  +18
                </div>
                <div className="text-[13px] text-muted">NPS points</div>
              </div>
            </div>
            <span className="mt-8 inline-flex items-center gap-2 font-bold">
              Read the case study{" "}
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
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}
