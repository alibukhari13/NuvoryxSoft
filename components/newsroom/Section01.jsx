export default function Section01() {
  return (
    <section
      data-hero="light"
      className="relative overflow-hidden bg-paper text-ink"
    >
      <div className="grid-bg-light absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,#000_10%,transparent_65%)]"></div>
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8 relative pb-20 pt-12 md:pb-28 md:pt-16">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-1.5 text-[13.5px] font-semibold text-muted"
        >
          <a href="/" className="hover:text-ink">
            Home
          </a>
          <span className="flex items-center gap-1.5">
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
              className="lucide lucide-chevron-right h-3.5 w-3.5 opacity-60"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
            <a href="/resources" className="hover:text-ink">
              Resources
            </a>
          </span>
          <span className="flex items-center gap-1.5">
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
              className="lucide lucide-chevron-right h-3.5 w-3.5 opacity-60"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
            <span className="text-ink">Newsroom</span>
          </span>
        </nav>
        <div className="mt-10 grid gap-12">
          <div>
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 font-mono text-[11.5px] font-medium uppercase tracking-[0.18em] text-muted">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-brand"
                  aria-hidden="true"
                ></span>
                Newsroom
              </span>
            </div>
            <h1 className="mt-5 text-[40px] sm:text-[56px] lg:text-[68px]">
              <span className="word-mask">
                <span style={{ animationDelay: "120ms" }}>News</span>
              </span>{" "}
              <span className="word-mask">
                <span style={{ animationDelay: "175ms" }}>&amp;</span>
              </span>{" "}
              <span className="text-brand">
                <span className="word-mask">
                  <span style={{ animationDelay: "230ms" }}>
                    announcements.
                  </span>
                </span>
              </span>
            </h1>
            <p className="mt-6 max-w-2xl animate-fade-up text-[18px] [animation-delay:450ms] md:text-[19px] text-muted">
              The latest from Nuvoryx: partnerships, milestones and press
              coverage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
