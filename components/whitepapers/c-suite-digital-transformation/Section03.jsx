export default function Section03() {
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
                More research
              </span>
            </div>
            <div className="reveal in" style={{ transitionDelay: "80ms" }}>
              <h2 className="mt-4 text-[34px] sm:text-[44px] lg:text-[52px]">
                Related white papers.
              </h2>
            </div>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
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
                  AI agents in production: guardrails, evals and the boring bits
                  that matter
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
    </section>
  );
}
