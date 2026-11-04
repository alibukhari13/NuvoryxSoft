export default function Section02() {
  return (
    <section className="bg-paper text-ink py-20 md:py-28 lg:py-32 relative">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <a
          href="/whitepapers/ai-adoption-2026"
          className="group mb-14 grid overflow-hidden rounded-[28px] bg-forest text-white lg:grid-cols-[1.2fr_1fr]"
        >
          <div className="p-8 md:p-12">
            <span className="rounded-md px-1.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-[0.12em] bg-brand/15 text-forest">
              Featured white paper
            </span>
            <h2 className="mt-5 text-[30px] leading-tight sm:text-[40px]">
              AI adoption in 2026: a practical framework for enterprise-scale
              impact
            </h2>
            <p className="mt-4 text-white/70">
              A 32-page framework covering use-case selection, operating model,
              governance and ROI.
            </p>
            <span className="mt-8 inline-flex items-center gap-2 font-bold text-brand">
              Download free{" "}
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
                className="lucide lucide-download h-4 w-4"
                aria-hidden="true"
              >
                <path d="M12 15V3"></path>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <path d="m7 10 5 5 5-5"></path>
              </svg>
            </span>
          </div>
          <div className="relative grid min-h-[260px] place-items-center bg-[radial-gradient(circle_at_50%_50%,rgba(5,207,69,0.4),transparent_70%)]">
            <div className="w-40 rotate-[-5deg] transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105 md:w-48">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[10px] bg-white p-5 shadow-lift">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand/60 blur-2xl"></div>
                <svg
                  viewBox="0 0 200 200"
                  className="absolute -right-6 top-6 h-32 w-32"
                  aria-hidden="true"
                >
                  <defs>
                    <radialGradient id="sp0" cx="35%" cy="30%" r="80%">
                      <stop offset="0%" stopColor="#C8FFD8"></stop>
                      <stop offset="40%" stopColor="#05CF45"></stop>
                      <stop offset="100%" stopColor="#1B3329"></stop>
                    </radialGradient>
                    <filter id="sp0-blur">
                      <feGaussianBlur stdDeviation="8"></feGaussianBlur>
                    </filter>
                  </defs>
                  <path
                    d="M100 10 C108 70 130 92 190 100 C130 108 108 130 100 190 C92 130 70 108 10 100 C70 92 92 70 100 10Z"
                    fill="#05CF45"
                    opacity="0.35"
                    filter="url(#sp0-blur)"
                    transform="translate(0 10)"
                  ></path>
                  <path
                    d="M100 10 C108 70 130 92 190 100 C130 108 108 130 100 190 C92 130 70 108 10 100 C70 92 92 70 100 10Z"
                    fill="url(#sp0)"
                    rx="24"
                  ></path>
                </svg>
                <div className="relative flex h-full flex-col">
                  <div className="flex items-center gap-1.5 font-display text-[11px] font-extrabold tracking-tight">
                    <svg
                      viewBox="0 0 32 32"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <rect width="32" height="32" rx="9" fill="#05CF45"></rect>
                      <path
                        d="M9 23V9l14 14V9"
                        fill="none"
                        stroke="#111"
                        strokeWidth="3.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>{" "}
                    nuvoryx
                  </div>
                  <div className="mt-auto">
                    <span className="rounded bg-brand/15 px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-widest text-forest">
                      White paper
                    </span>
                    <div className="mt-2 font-display text-[14px] font-bold leading-tight text-ink">
                      AI Adoption in 2026
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div
            className="no-scrollbar flex gap-2 overflow-x-auto"
            role="tablist"
          >
            <button
              role="tab"
              aria-selected="true"
              className="h-10 shrink-0 rounded-full px-4 text-[14px] font-bold transition-colors bg-ink text-white"
            >
              All
            </button>
            <button
              role="tab"
              aria-selected="false"
              className="h-10 shrink-0 rounded-full px-4 text-[14px] font-bold transition-colors border border-line bg-white text-ink/75 hover:border-ink/30"
            >
              Blog
            </button>
            <button
              role="tab"
              aria-selected="false"
              className="h-10 shrink-0 rounded-full px-4 text-[14px] font-bold transition-colors border border-line bg-white text-ink/75 hover:border-ink/30"
            >
              Webinars
            </button>
            <button
              role="tab"
              aria-selected="false"
              className="h-10 shrink-0 rounded-full px-4 text-[14px] font-bold transition-colors border border-line bg-white text-ink/75 hover:border-ink/30"
            >
              Podcasts
            </button>
            <button
              role="tab"
              aria-selected="false"
              className="h-10 shrink-0 rounded-full px-4 text-[14px] font-bold transition-colors border border-line bg-white text-ink/75 hover:border-ink/30"
            >
              White papers &amp; Ebooks
            </button>
            <button
              role="tab"
              aria-selected="false"
              className="h-10 shrink-0 rounded-full px-4 text-[14px] font-bold transition-colors border border-line bg-white text-ink/75 hover:border-ink/30"
            >
              Newsroom
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="rounded-full px-3 py-1.5 text-[13px] font-bold transition-colors bg-brand text-ink">
              All topics
            </button>
            <button className="rounded-full px-3 py-1.5 text-[13px] font-bold transition-colors bg-ink/5 text-ink/70 hover:bg-ink/10">
              AI
            </button>
            <button className="rounded-full px-3 py-1.5 text-[13px] font-bold transition-colors bg-ink/5 text-ink/70 hover:bg-ink/10">
              Strategy
            </button>
            <button className="rounded-full px-3 py-1.5 text-[13px] font-bold transition-colors bg-ink/5 text-ink/70 hover:bg-ink/10">
              Cloud
            </button>
            <button className="rounded-full px-3 py-1.5 text-[13px] font-bold transition-colors bg-ink/5 text-ink/70 hover:bg-ink/10">
              Engineering
            </button>
            <button className="rounded-full px-3 py-1.5 text-[13px] font-bold transition-colors bg-ink/5 text-ink/70 hover:bg-ink/10">
              Security
            </button>
            <button className="rounded-full px-3 py-1.5 text-[13px] font-bold transition-colors bg-ink/5 text-ink/70 hover:bg-ink/10">
              Company
            </button>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="reveal in" style={{ transitionDelay: "0ms" }}>
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
          <div className="reveal in" style={{ transitionDelay: "80ms" }}>
            <a href="/blog/pilot-to-production" className="group block h-full">
              <div className="flex h-full flex-col overflow-hidden rounded-[22px] border transition-all duration-300 hover:-translate-y-1 border-line bg-white shadow-soft hover:border-brand/40 hover:shadow-lift">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="/agency-assets/b5fc3909037b463e8635a1a08ea39d2df6a3eccc443a71719ca8f3432de1e22d.jpg"
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
                      Oct 14, 2025
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
                      7 min
                    </span>
                  </div>
                  <h3 className="mt-3 text-[18px] leading-snug">
                    How enterprises can move past the AI pilot phase
                  </h3>
                  <p className="mt-2 line-clamp-2 text-[14.5px] text-muted">
                    Most AI pilots stall for organisational reasons, not
                    technical ones. Here is how to unstick them.
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
          <div className="reveal in" style={{ transitionDelay: "160ms" }}>
            <a href="/blog/finops-playbook" className="group block h-full">
              <div className="flex h-full flex-col overflow-hidden rounded-[22px] border transition-all duration-300 hover:-translate-y-1 border-line bg-white shadow-soft hover:border-brand/40 hover:shadow-lift">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="/agency-assets/af4c544e3bce5f0b8761227a94c303a9d70d8a163af6ff0b3395763a1742ddc0.jpg"
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
                      Sep 30, 2025
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
                      11 min
                    </span>
                  </div>
                  <h3 className="mt-3 text-[18px] leading-snug">
                    The FinOps playbook: cutting cloud spend 30% without slowing
                    teams
                  </h3>
                  <p className="mt-2 line-clamp-2 text-[14.5px] text-muted">
                    Tagging, rightsizing and unit economics: the order of
                    operations that actually works.
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
          <div className="reveal in" style={{ transitionDelay: "0ms" }}>
            <a
              href="/blog/legacy-modernization-patterns"
              className="group block h-full"
            >
              <div className="flex h-full flex-col overflow-hidden rounded-[22px] border transition-all duration-300 hover:-translate-y-1 border-line bg-white shadow-soft hover:border-brand/40 hover:shadow-lift">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="/agency-assets/6c15d0a91a7fb3bef937c50f670e4be24eca75db3d0b531d390b6ab89d2e7047.jpg"
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
                      Sep 12, 2025
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
                      8 min
                    </span>
                  </div>
                  <h3 className="mt-3 text-[18px] leading-snug">
                    Strangler, rehost or rebuild? Choosing your modernization
                    pattern
                  </h3>
                  <p className="mt-2 line-clamp-2 text-[14.5px] text-muted">
                    A decision framework for legacy systems that can not afford
                    a big-bang rewrite.
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
          <div className="reveal in" style={{ transitionDelay: "80ms" }}>
            <a href="/blog/rag-evaluation" className="group block h-full">
              <div className="flex h-full flex-col overflow-hidden rounded-[22px] border transition-all duration-300 hover:-translate-y-1 border-line bg-white shadow-soft hover:border-brand/40 hover:shadow-lift">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="/agency-assets/0ee706f47ea4cd4b89f824f5b8cd64181ca6151514d777e37827ea89cd435fc2.jpg"
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
                      Aug 21, 2025
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
                      10 min
                    </span>
                  </div>
                  <h3 className="mt-3 text-[18px] leading-snug">
                    Evaluating RAG systems: metrics that correlate with user
                    trust
                  </h3>
                  <p className="mt-2 line-clamp-2 text-[14.5px] text-muted">
                    Faithfulness, groundedness and answer relevance, measured
                    the right way.
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
          <div className="reveal in" style={{ transitionDelay: "160ms" }}>
            <a
              href="/webinars/modernizing-for-ai-era"
              className="group block h-full"
            >
              <div className="flex h-full flex-col overflow-hidden rounded-[22px] border transition-all duration-300 hover:-translate-y-1 border-line bg-white shadow-soft hover:border-brand/40 hover:shadow-lift">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="/agency-assets/0a01c34d15def8cac5dbc804480ffc98afc43fb2987a38e3b4a0db71dd324583.jpg"
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
                      Nov 20, 2025
                    </span>
                  </div>
                  <h3 className="mt-3 text-[18px] leading-snug">
                    Modernizing legacy apps for the AI era
                  </h3>
                  <p className="mt-2 line-clamp-2 text-[14.5px] text-muted">
                    A live session with our CTO and AWS on making legacy estates
                    AI-ready.
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
              href="/podcasts/ep-42-agentic-enterprise"
              className="group block h-full"
            >
              <div className="flex h-full flex-col overflow-hidden rounded-[22px] border transition-all duration-300 hover:-translate-y-1 border-line bg-white shadow-soft hover:border-brand/40 hover:shadow-lift">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="/agency-assets/bf87c7e2c10cd81354113000068ba84a0f8f93025c9be467f1896aee20d754b7.jpg"
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
                      className="lucide lucide-headphones h-3.5 w-3.5 text-forest"
                      aria-hidden="true"
                    >
                      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path>
                    </svg>{" "}
                    Podcast
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
                      Oct 22, 2025
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
                      48 min
                    </span>
                  </div>
                  <h3 className="mt-3 text-[18px] leading-snug">
                    The agentic enterprise: what changes when software acts on
                    its own
                  </h3>
                  <p className="mt-2 line-clamp-2 text-[14.5px] text-muted">
                    Ep. 42 with the Head of AI at a global insurer.
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[14px] font-bold text-ink group-hover:text-forest">
                    Listen
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
          <div className="reveal in" style={{ transitionDelay: "0ms" }}>
            <a
              href="/podcasts/ep-41-cto-playbook"
              className="group block h-full"
            >
              <div className="flex h-full flex-col overflow-hidden rounded-[22px] border transition-all duration-300 hover:-translate-y-1 border-line bg-white shadow-soft hover:border-brand/40 hover:shadow-lift">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="/agency-assets/529f655a42c3a3f646a18f76686ccb0bf97f94e98dda304a3f47fd06d4edc85d.jpg"
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
                      className="lucide lucide-headphones h-3.5 w-3.5 text-forest"
                      aria-hidden="true"
                    >
                      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path>
                    </svg>{" "}
                    Podcast
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
                      Oct 08, 2025
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
                      52 min
                    </span>
                  </div>
                  <h3 className="mt-3 text-[18px] leading-snug">
                    A first-90-days playbook for new CTOs
                  </h3>
                  <p className="mt-2 line-clamp-2 text-[14.5px] text-muted">
                    Ep. 41 with three CTOs on inheriting teams, debt and
                    expectations.
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[14px] font-bold text-ink group-hover:text-forest">
                    Listen
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
              href="/podcasts/ep-40-security-by-default"
              className="group block h-full"
            >
              <div className="flex h-full flex-col overflow-hidden rounded-[22px] border transition-all duration-300 hover:-translate-y-1 border-line bg-white shadow-soft hover:border-brand/40 hover:shadow-lift">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="/agency-assets/e3f4811934b221a71f1a164de30028bdaedf036c019d0f335b3140b47a36419e.jpg"
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
                      className="lucide lucide-headphones h-3.5 w-3.5 text-forest"
                      aria-hidden="true"
                    >
                      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path>
                    </svg>{" "}
                    Podcast
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
                      Sep 24, 2025
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
                      45 min
                    </span>
                  </div>
                  <h3 className="mt-3 text-[18px] leading-snug">
                    Security by default: shifting left without slowing down
                  </h3>
                  <p className="mt-2 line-clamp-2 text-[14.5px] text-muted">
                    Ep. 40 with a former bank CISO on secure engineering
                    culture.
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[14px] font-bold text-ink group-hover:text-forest">
                    Listen
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
              href="/whitepapers/ai-adoption-2026"
              className="group block h-full"
            >
              <div className="flex h-full flex-col overflow-hidden rounded-[22px] border transition-all duration-300 hover:-translate-y-1 border-line bg-white shadow-soft hover:border-brand/40 hover:shadow-lift">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div className="grid h-full place-items-center bg-[radial-gradient(circle_at_50%_30%,rgba(5,207,69,0.4),#1B3329_70%)]">
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[10px] bg-white p-5 shadow-lift !w-28 transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-105">
                      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand/60 blur-2xl"></div>
                      <svg
                        viewBox="0 0 200 200"
                        className="absolute -right-6 top-6 h-32 w-32"
                        aria-hidden="true"
                      >
                        <defs>
                          <radialGradient id="sp0" cx="35%" cy="30%" r="80%">
                            <stop offset="0%" stopColor="#C8FFD8"></stop>
                            <stop offset="40%" stopColor="#05CF45"></stop>
                            <stop offset="100%" stopColor="#1B3329"></stop>
                          </radialGradient>
                          <filter id="sp0-blur">
                            <feGaussianBlur stdDeviation="8"></feGaussianBlur>
                          </filter>
                        </defs>
                        <path
                          d="M100 10 C108 70 130 92 190 100 C130 108 108 130 100 190 C92 130 70 108 10 100 C70 92 92 70 100 10Z"
                          fill="#05CF45"
                          opacity="0.35"
                          filter="url(#sp0-blur)"
                          transform="translate(0 10)"
                        ></path>
                        <path
                          d="M100 10 C108 70 130 92 190 100 C130 108 108 130 100 190 C92 130 70 108 10 100 C70 92 92 70 100 10Z"
                          fill="url(#sp0)"
                          rx="24"
                        ></path>
                      </svg>
                      <div className="relative flex h-full flex-col">
                        <div className="flex items-center gap-1.5 font-display text-[11px] font-extrabold tracking-tight">
                          <svg
                            viewBox="0 0 32 32"
                            className="h-4 w-4"
                            aria-hidden="true"
                          >
                            <rect
                              width="32"
                              height="32"
                              rx="9"
                              fill="#05CF45"
                            ></rect>
                            <path
                              d="M9 23V9l14 14V9"
                              fill="none"
                              stroke="#111"
                              strokeWidth="3.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>{" "}
                          nuvoryx
                        </div>
                        <div className="mt-auto">
                          <span className="rounded bg-brand/15 px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-widest text-forest">
                            White paper
                          </span>
                          <div className="mt-2 font-display text-[14px] font-bold leading-tight text-ink">
                            AI adoption in 2026
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                    White paper
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
                      Oct 01, 2025
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
                      32 pages
                    </span>
                  </div>
                  <h3 className="mt-3 text-[18px] leading-snug">
                    AI adoption in 2026: a practical framework for
                    enterprise-scale impact
                  </h3>
                  <p className="mt-2 line-clamp-2 text-[14.5px] text-muted">
                    A 32-page framework covering use-case selection, operating
                    model, governance and ROI.
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[14px] font-bold text-ink group-hover:text-forest">
                    Download
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
          <div className="reveal in" style={{ transitionDelay: "0ms" }}>
            <a
              href="/whitepapers/c-suite-digital-transformation"
              className="group block h-full"
            >
              <div className="flex h-full flex-col overflow-hidden rounded-[22px] border transition-all duration-300 hover:-translate-y-1 border-line bg-white shadow-soft hover:border-brand/40 hover:shadow-lift">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div className="grid h-full place-items-center bg-[radial-gradient(circle_at_50%_30%,rgba(5,207,69,0.4),#1B3329_70%)]">
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[10px] bg-white p-5 shadow-lift !w-28 transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-105">
                      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand/60 blur-2xl"></div>
                      <svg
                        viewBox="0 0 200 200"
                        className="absolute -right-6 top-6 h-32 w-32"
                        aria-hidden="true"
                      >
                        <defs>
                          <radialGradient id="sp0" cx="35%" cy="30%" r="80%">
                            <stop offset="0%" stopColor="#C8FFD8"></stop>
                            <stop offset="40%" stopColor="#05CF45"></stop>
                            <stop offset="100%" stopColor="#1B3329"></stop>
                          </radialGradient>
                          <filter id="sp0-blur">
                            <feGaussianBlur stdDeviation="8"></feGaussianBlur>
                          </filter>
                        </defs>
                        <path
                          d="M100 10 C108 70 130 92 190 100 C130 108 108 130 100 190 C92 130 70 108 10 100 C70 92 92 70 100 10Z"
                          fill="#05CF45"
                          opacity="0.35"
                          filter="url(#sp0-blur)"
                          transform="translate(0 10)"
                        ></path>
                        <path
                          d="M100 10 C108 70 130 92 190 100 C130 108 108 130 100 190 C92 130 70 108 10 100 C70 92 92 70 100 10Z"
                          fill="url(#sp0)"
                          rx="24"
                        ></path>
                      </svg>
                      <div className="relative flex h-full flex-col">
                        <div className="flex items-center gap-1.5 font-display text-[11px] font-extrabold tracking-tight">
                          <svg
                            viewBox="0 0 32 32"
                            className="h-4 w-4"
                            aria-hidden="true"
                          >
                            <rect
                              width="32"
                              height="32"
                              rx="9"
                              fill="#05CF45"
                            ></rect>
                            <path
                              d="M9 23V9l14 14V9"
                              fill="none"
                              stroke="#111"
                              strokeWidth="3.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>{" "}
                          nuvoryx
                        </div>
                        <div className="mt-auto">
                          <span className="rounded bg-brand/15 px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-widest text-forest">
                            White paper
                          </span>
                          <div className="mt-2 font-display text-[14px] font-bold leading-tight text-ink">
                            The C-suite's guide to mastering digital
                            transformation
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                    White paper
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
                      Aug 15, 2025
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
                      24 pages
                    </span>
                  </div>
                  <h3 className="mt-3 text-[18px] leading-snug">
                    The C-suite's guide to mastering digital transformation
                  </h3>
                  <p className="mt-2 line-clamp-2 text-[14.5px] text-muted">
                    How boards and executive teams fund, sequence and measure
                    transformation.
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[14px] font-bold text-ink group-hover:text-forest">
                    Download
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
              href="/whitepapers/cloud-cost-benchmark"
              className="group block h-full"
            >
              <div className="flex h-full flex-col overflow-hidden rounded-[22px] border transition-all duration-300 hover:-translate-y-1 border-line bg-white shadow-soft hover:border-brand/40 hover:shadow-lift">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div className="grid h-full place-items-center bg-[radial-gradient(circle_at_50%_30%,rgba(5,207,69,0.4),#1B3329_70%)]">
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[10px] bg-white p-5 shadow-lift !w-28 transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-105">
                      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand/60 blur-2xl"></div>
                      <svg
                        viewBox="0 0 200 200"
                        className="absolute -right-6 top-6 h-32 w-32"
                        aria-hidden="true"
                      >
                        <defs>
                          <radialGradient id="sp0" cx="35%" cy="30%" r="80%">
                            <stop offset="0%" stopColor="#C8FFD8"></stop>
                            <stop offset="40%" stopColor="#05CF45"></stop>
                            <stop offset="100%" stopColor="#1B3329"></stop>
                          </radialGradient>
                          <filter id="sp0-blur">
                            <feGaussianBlur stdDeviation="8"></feGaussianBlur>
                          </filter>
                        </defs>
                        <path
                          d="M100 10 C108 70 130 92 190 100 C130 108 108 130 100 190 C92 130 70 108 10 100 C70 92 92 70 100 10Z"
                          fill="#05CF45"
                          opacity="0.35"
                          filter="url(#sp0-blur)"
                          transform="translate(0 10)"
                        ></path>
                        <path
                          d="M100 10 C108 70 130 92 190 100 C130 108 108 130 100 190 C92 130 70 108 10 100 C70 92 92 70 100 10Z"
                          fill="url(#sp0)"
                          rx="24"
                        ></path>
                      </svg>
                      <div className="relative flex h-full flex-col">
                        <div className="flex items-center gap-1.5 font-display text-[11px] font-extrabold tracking-tight">
                          <svg
                            viewBox="0 0 32 32"
                            className="h-4 w-4"
                            aria-hidden="true"
                          >
                            <rect
                              width="32"
                              height="32"
                              rx="9"
                              fill="#05CF45"
                            ></rect>
                            <path
                              d="M9 23V9l14 14V9"
                              fill="none"
                              stroke="#111"
                              strokeWidth="3.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>{" "}
                          nuvoryx
                        </div>
                        <div className="mt-auto">
                          <span className="rounded bg-brand/15 px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-widest text-forest">
                            White paper
                          </span>
                          <div className="mt-2 font-display text-[14px] font-bold leading-tight text-ink">
                            Cloud cost benchmark report 2025
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                    White paper
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
                      Jul 10, 2025
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
                      28 pages
                    </span>
                  </div>
                  <h3 className="mt-3 text-[18px] leading-snug">
                    Cloud cost benchmark report 2025
                  </h3>
                  <p className="mt-2 line-clamp-2 text-[14.5px] text-muted">
                    Data from 180 cloud estates on where spend goes and how
                    leaders cut it.
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[14px] font-bold text-ink group-hover:text-forest">
                    Download
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
              href="/newsroom/anthropic-partner-network"
              className="group block h-full"
            >
              <div className="flex h-full flex-col overflow-hidden rounded-[22px] border transition-all duration-300 hover:-translate-y-1 border-line bg-white shadow-soft hover:border-brand/40 hover:shadow-lift">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="/agency-assets/80d56b1f8262f3c1d7cc405f0647208571207fa347c1640f1f6891b254280f76.jpg"
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
                      className="lucide lucide-newspaper h-3.5 w-3.5 text-forest"
                      aria-hidden="true"
                    >
                      <path d="M15 18h-5"></path>
                      <path d="M18 14h-8"></path>
                      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"></path>
                      <rect width="8" height="4" x="10" y="6" rx="1"></rect>
                    </svg>{" "}
                    News
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
                      Oct 30, 2025
                    </span>
                  </div>
                  <h3 className="mt-3 text-[18px] leading-snug">
                    Nuvoryx joins Anthropic's Claude Partner Network as a Select
                    Services Partner
                  </h3>
                  <p className="mt-2 line-clamp-2 text-[14.5px] text-muted">
                    Expanded access to Claude models and co-delivery for
                    enterprise AI programmes.
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
          <div className="reveal in" style={{ transitionDelay: "0ms" }}>
            <a
              href="/newsroom/openai-select-partner"
              className="group block h-full"
            >
              <div className="flex h-full flex-col overflow-hidden rounded-[22px] border transition-all duration-300 hover:-translate-y-1 border-line bg-white shadow-soft hover:border-brand/40 hover:shadow-lift">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="/agency-assets/d78dff08536844d544fe9d4eb8a2ba470b662140848218c20817cc878cb9b113.jpg"
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
                      className="lucide lucide-newspaper h-3.5 w-3.5 text-forest"
                      aria-hidden="true"
                    >
                      <path d="M15 18h-5"></path>
                      <path d="M18 14h-8"></path>
                      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"></path>
                      <rect width="8" height="4" x="10" y="6" rx="1"></rect>
                    </svg>{" "}
                    News
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
                      Sep 18, 2025
                    </span>
                  </div>
                  <h3 className="mt-3 text-[18px] leading-snug">
                    Nuvoryx named an OpenAI Select Partner
                  </h3>
                  <p className="mt-2 line-clamp-2 text-[14.5px] text-muted">
                    Recognition for production deployments of GPT-based
                    solutions across regulated industries.
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
          <div className="reveal in" style={{ transitionDelay: "80ms" }}>
            <a
              href="/newsroom/lisbon-hub-opening"
              className="group block h-full"
            >
              <div className="flex h-full flex-col overflow-hidden rounded-[22px] border transition-all duration-300 hover:-translate-y-1 border-line bg-white shadow-soft hover:border-brand/40 hover:shadow-lift">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="/agency-assets/a530cda2c11520a681921a25055410cd9c8789b4529cf5cbc4dc695adb55544d.jpg"
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
                      className="lucide lucide-newspaper h-3.5 w-3.5 text-forest"
                      aria-hidden="true"
                    >
                      <path d="M15 18h-5"></path>
                      <path d="M18 14h-8"></path>
                      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"></path>
                      <rect width="8" height="4" x="10" y="6" rx="1"></rect>
                    </svg>{" "}
                    News
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
                      Aug 02, 2025
                    </span>
                  </div>
                  <h3 className="mt-3 text-[18px] leading-snug">
                    Nuvoryx opens Lisbon engineering hub to serve European
                    clients
                  </h3>
                  <p className="mt-2 line-clamp-2 text-[14.5px] text-muted">
                    The new hub will host 200 engineers by the end of 2026.
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
          <div className="reveal in" style={{ transitionDelay: "160ms" }}>
            <a href="/newsroom/inc-5000-2025" className="group block h-full">
              <div className="flex h-full flex-col overflow-hidden rounded-[22px] border transition-all duration-300 hover:-translate-y-1 border-line bg-white shadow-soft hover:border-brand/40 hover:shadow-lift">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="/agency-assets/c6230b8eb3c1525b426c0aaacc76948933509b209362e7763056f203f6cce6bd.jpg"
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
                      className="lucide lucide-newspaper h-3.5 w-3.5 text-forest"
                      aria-hidden="true"
                    >
                      <path d="M15 18h-5"></path>
                      <path d="M18 14h-8"></path>
                      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"></path>
                      <rect width="8" height="4" x="10" y="6" rx="1"></rect>
                    </svg>{" "}
                    News
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
                      Jul 22, 2025
                    </span>
                  </div>
                  <h3 className="mt-3 text-[18px] leading-snug">
                    Nuvoryx ranks on the Inc. 5000 list for the fourth
                    consecutive year
                  </h3>
                  <p className="mt-2 line-clamp-2 text-[14.5px] text-muted">
                    Sustained growth driven by AI and cloud modernisation
                    programmes.
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
      </div>
    </section>
  );
}
