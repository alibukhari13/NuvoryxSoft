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
        style={{ transform: "translate3d(0px, 88.3px, 0px) scale(1)" }}
      ></div>
      <div
        data-parallax="0.1"
        className="absolute -bottom-40 left-0 h-[400px] w-[600px] rounded-full bg-forest blur-[120px]"
        style={{ transform: "translate3d(0px, -73.6px, 0px) scale(1)" }}
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
            <span className="text-white">Company</span>
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
            <span className="text-white">Leadership</span>
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
                Leadership
              </span>
            </div>
            <h1 className="mt-5 text-[40px] sm:text-[56px] lg:text-[68px]">
              <span className="word-mask">
                <span style={{ animationDelay: "120ms" }}>The</span>
              </span>{" "}
              <span className="word-mask">
                <span style={{ animationDelay: "175ms" }}>people</span>
              </span>{" "}
              <span className="text-brand">
                <span className="word-mask">
                  <span style={{ animationDelay: "230ms" }}>steering</span>
                </span>
              </span>{" "}
              <span className="word-mask">
                <span style={{ animationDelay: "285ms" }}>Nuvoryx.</span>
              </span>
            </h1>
            <p className="mt-6 max-w-2xl animate-fade-up text-[18px] [animation-delay:450ms] md:text-[19px] text-white/70">
              Operators, engineers and builders who have led teams at scale-ups
              and global enterprises.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
