export default function Section01() {
  return (
    <section
      data-hero="dark"
      className="relative overflow-hidden -mt-[72px] bg-ink pt-[72px] text-white"
    >
      <div className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_right,#000_20%,transparent_70%)]"></div>
      <div
        data-parallax="-0.12"
        className="absolute -right-32 -top-40 h-[560px] w-[560px] rounded-full bg-brand/25 blur-[140px]"
        style={{ transform: "translate3d(0px, 107.8px, 0px) scale(1)" }}
      ></div>
      <div
        data-parallax="0.1"
        className="absolute -bottom-40 left-0 h-[400px] w-[600px] rounded-full bg-forest blur-[120px]"
        style={{ transform: "translate3d(0px, -89.8px, 0px) scale(1)" }}
      ></div>
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8 relative pb-20 pt-12 md:pb-28 md:pt-16">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-1.5 text-[13.5px] font-semibold text-white/50"
        >
          <a href="/" className="hover:text-white">
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
            <span className="text-white">Customers</span>
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
            <span className="text-white">Case Studies</span>
          </span>
        </nav>
        <div className="mt-10 grid gap-12">
          <div>
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 font-mono text-[11.5px] font-medium uppercase tracking-[0.18em] text-white/60">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-brand"
                  aria-hidden="true"
                ></span>
                Case studies
              </span>
            </div>
            <h1 className="mt-5 text-[40px] sm:text-[56px] lg:text-[68px]">
              <span className="word-mask">
                <span style={{ animationDelay: "120ms" }}>Outcomes</span>
              </span>{" "}
              <span className="word-mask">
                <span style={{ animationDelay: "175ms" }}>our</span>
              </span>{" "}
              <span className="word-mask">
                <span style={{ animationDelay: "230ms" }}>clients</span>
              </span>{" "}
              <span className="text-brand">
                <span className="word-mask">
                  <span style={{ animationDelay: "285ms" }}>measure.</span>
                </span>
              </span>
            </h1>
            <p className="mt-6 max-w-2xl animate-fade-up text-[18px] [animation-delay:450ms] md:text-[19px] text-white/70">
              Revenue grown, hours returned, risk removed. Explore how we’ve
              helped teams across ten industries ship software that matters.
            </p>
          </div>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-[22px] bg-white/10 md:grid-cols-4">
          <div className="bg-ink/80 p-6 backdrop-blur">
            <div className="font-display text-[30px] font-bold text-brand">
              $480M+
            </div>
            <div className="text-[13.5px] text-white/60">
              client value created
            </div>
          </div>
          <div className="bg-ink/80 p-6 backdrop-blur">
            <div className="font-display text-[30px] font-bold text-brand">
              400+
            </div>
            <div className="text-[13.5px] text-white/60">products shipped</div>
          </div>
          <div className="bg-ink/80 p-6 backdrop-blur">
            <div className="font-display text-[30px] font-bold text-brand">
              4.9/5
            </div>
            <div className="text-[13.5px] text-white/60">Clutch rating</div>
          </div>
          <div className="bg-ink/80 p-6 backdrop-blur">
            <div className="font-display text-[30px] font-bold text-brand">
              94%
            </div>
            <div className="text-[13.5px] text-white/60">client retention</div>
          </div>
        </div>
      </div>
    </section>
  );
}
