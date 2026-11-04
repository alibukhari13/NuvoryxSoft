export default function Section02() {
  return (
    <section className="bg-paper text-ink py-20 md:py-28 lg:py-32 relative">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <div className="mb-10 flex flex-wrap gap-2">
          <button className="h-10 rounded-full px-4 text-[14px] font-bold transition-colors bg-ink text-white">
            All
          </button>
          <button className="h-10 rounded-full px-4 text-[14px] font-bold transition-colors border border-line bg-white hover:border-ink/30">
            Engineering
          </button>
          <button className="h-10 rounded-full px-4 text-[14px] font-bold transition-colors border border-line bg-white hover:border-ink/30">
            Cloud
          </button>
          <button className="h-10 rounded-full px-4 text-[14px] font-bold transition-colors border border-line bg-white hover:border-ink/30">
            AI
          </button>
        </div>
        <a
          href="/webinars/modernizing-for-ai-era"
          className="group mb-10 grid overflow-hidden rounded-[28px] border border-line bg-white shadow-soft transition-shadow hover:shadow-lift lg:grid-cols-2"
        >
          <div className="relative min-h-[300px] overflow-hidden">
            <img
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              src="/agency-assets/0a01c34d15def8cac5dbc804480ffc98afc43fb2987a38e3b4a0db71dd324583.jpg"
            />
          </div>
          <div className="flex flex-col p-8 md:p-12">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center rounded-full px-3 py-1 text-[12.5px] font-semibold bg-brand text-ink">
                Latest
              </span>
              <span className="text-[13.5px] text-muted">Nov 20, 2025</span>
            </div>
            <h2 className="mt-5 text-[28px] leading-tight md:text-[36px]">
              Modernizing legacy apps for the AI era
            </h2>
            <p className="mt-4 text-[16px] text-muted">
              A live session with our CTO and AWS on making legacy estates
              AI-ready.
            </p>
            <div className="mt-auto flex items-center gap-3 pt-8 text-[14px]">
              <img
                alt=""
                className="h-10 w-10 rounded-full object-cover"
                src="/agency-assets/c78fe39cfa6d3b8fe9ea80fec6107fd74c9d5f60a871f7a07abcfddfa241218c.jpg"
              />
              <div>
                <div className="font-bold">Ethan Brooks &amp; AWS</div>
              </div>
            </div>
          </div>
        </a>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="reveal in" style={{ transitionDelay: "0ms" }}>
            <a
              href="/webinars/finops-for-ai-workloads"
              className="group block h-full"
            >
              <div className="flex h-full flex-col overflow-hidden rounded-[22px] border transition-all duration-300 hover:-translate-y-1 border-line bg-white shadow-soft hover:border-brand/40 hover:shadow-lift">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="/agency-assets/533ed5199e62fda4057bb5b179673bd29bfc34d7527a96435d00de0b035ea9e7.jpg"
                  />
                  <span className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[12px] font-bold text-ink backdrop-blur">
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
                      className="lucide lucide-play h-3.5 w-3.5 text-forest"
                      aria-hidden="true"
                    >
                      <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
                    </svg>{" "}
                    Webinar
                  </span>
                  <span className="absolute bottom-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-brand text-ink transition-transform group-hover:scale-110">
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
                      className="lucide lucide-play h-4 w-4 fill-current"
                      aria-hidden="true"
                    >
                      <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
                    </svg>
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-[12.5px] font-semibold text-muted">
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
                        className="lucide lucide-calendar-days h-3.5 w-3.5"
                        aria-hidden="true"
                      >
                        <path d="M8 2v3"></path>
                        <path d="M16 2v3"></path>
                        <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                        <path d="M3 9h18"></path>
                        <path d="M8 13h.01"></path>
                        <path d="M12 13h.01"></path>
                        <path d="M16 13h.01"></path>
                        <path d="M8 17h.01"></path>
                        <path d="M12 17h.01"></path>
                        <path d="M16 17h.01"></path>
                      </svg>
                      Oct 09, 2025
                    </span>
                  </div>
                  <h3 className="mt-3 text-[18px] leading-snug">
                    FinOps for AI workloads: controlling GPU costs at scale
                  </h3>
                  <p className="mt-2 line-clamp-2 text-[14.5px] text-muted">
                    Practical tactics to forecast, govern and reduce AI
                    infrastructure spend.
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[14px] font-bold text-ink group-hover:text-forest">
                    Watch now
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
                      className="lucide lucide-arrow-right h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          </div>
          <div className="reveal in" style={{ transitionDelay: "80ms" }}>
            <a
              href="/webinars/responsible-ai-governance"
              className="group block h-full"
            >
              <div className="flex h-full flex-col overflow-hidden rounded-[22px] border transition-all duration-300 hover:-translate-y-1 border-line bg-white shadow-soft hover:border-brand/40 hover:shadow-lift">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="/agency-assets/1c779ce8de1ee75565dee7aa908e931b94c0d1f3f89ded1ceb1a5f78a0b9f745.jpg"
                  />
                  <span className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[12px] font-bold text-ink backdrop-blur">
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
                      className="lucide lucide-play h-3.5 w-3.5 text-forest"
                      aria-hidden="true"
                    >
                      <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
                    </svg>{" "}
                    Webinar
                  </span>
                  <span className="absolute bottom-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-brand text-ink transition-transform group-hover:scale-110">
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
                      className="lucide lucide-play h-4 w-4 fill-current"
                      aria-hidden="true"
                    >
                      <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
                    </svg>
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-[12.5px] font-semibold text-muted">
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
                        className="lucide lucide-calendar-days h-3.5 w-3.5"
                        aria-hidden="true"
                      >
                        <path d="M8 2v3"></path>
                        <path d="M16 2v3"></path>
                        <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                        <path d="M3 9h18"></path>
                        <path d="M8 13h.01"></path>
                        <path d="M12 13h.01"></path>
                        <path d="M16 13h.01"></path>
                        <path d="M8 17h.01"></path>
                        <path d="M12 17h.01"></path>
                        <path d="M16 17h.01"></path>
                      </svg>
                      Sep 04, 2025
                    </span>
                  </div>
                  <h3 className="mt-3 text-[18px] leading-snug">
                    Responsible AI governance that does not slow you down
                  </h3>
                  <p className="mt-2 line-clamp-2 text-[14.5px] text-muted">
                    Building review boards, model cards and risk tiers that
                    teams embrace.
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[14px] font-bold text-ink group-hover:text-forest">
                    Watch now
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
                      className="lucide lucide-arrow-right h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          </div>
          <div className="reveal in" style={{ transitionDelay: "160ms" }}>
            <a
              href="/blog/ai-agents-in-production"
              className="group block h-full"
            >
              <div className="flex h-full flex-col overflow-hidden rounded-[22px] border transition-all duration-300 hover:-translate-y-1 border-line bg-white shadow-soft hover:border-brand/40 hover:shadow-lift">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="/agency-assets/9c8de0c77c9da88f26e482a351c86908ec748448f3430f4505e83f50ed63891d.jpg"
                  />
                  <span className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[12px] font-bold text-ink backdrop-blur">
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
                      className="lucide lucide-file-text h-3.5 w-3.5 text-forest"
                      aria-hidden="true"
                    >
                      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                      <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                      <path d="M10 9H8"></path>
                      <path d="M16 13H8"></path>
                      <path d="M16 17H8"></path>
                    </svg>{" "}
                    Blog
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-[12.5px] font-semibold text-muted">
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
                        className="lucide lucide-calendar-days h-3.5 w-3.5"
                        aria-hidden="true"
                      >
                        <path d="M8 2v3"></path>
                        <path d="M16 2v3"></path>
                        <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                        <path d="M3 9h18"></path>
                        <path d="M8 13h.01"></path>
                        <path d="M12 13h.01"></path>
                        <path d="M16 13h.01"></path>
                        <path d="M8 17h.01"></path>
                        <path d="M12 17h.01"></path>
                        <path d="M16 17h.01"></path>
                      </svg>
                      Oct 28, 2025
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
                        className="lucide lucide-clock h-3.5 w-3.5"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 6v6l4 2"></path>
                      </svg>
                      9 min
                    </span>
                  </div>
                  <h3 className="mt-3 text-[18px] leading-snug">
                    AI agents in production: guardrails, evals and the boring
                    bits that matter
                  </h3>
                  <p className="mt-2 line-clamp-2 text-[14.5px] text-muted">
                    What separates an impressive agent demo from one that runs
                    your claims desk at 3am.
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[14px] font-bold text-ink group-hover:text-forest">
                    Read more
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
                      className="lucide lucide-arrow-right h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <button
            className="group/btn relative isolate items-center overflow-hidden rounded-full font-display font-semibold tracking-[-0.01em] whitespace-nowrap select-none transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-40 aria-disabled:pointer-events-none aria-disabled:opacity-40 inline-flex border-[1.5px] border-ink/20 text-ink hover:border-ink h-[52px] text-[14.5px] px-6"
            disabled={true}
          >
            <span
              aria-hidden="true"
              className="absolute -z-10 aspect-square rounded-full transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] top-[5px] bottom-[5px] right-[5px] bg-ink scale-0 group-hover/btn:scale-[26]"
            ></span>
            <span className="relative inline-flex items-center gap-2 transition-colors duration-300 group-hover/btn:text-white mx-auto">
              You’re all caught up
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
