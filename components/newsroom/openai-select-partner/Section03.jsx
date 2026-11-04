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
                Newsroom
              </span>
            </div>
            <div className="reveal in" style={{ transitionDelay: "80ms" }}>
              <h2 className="mt-4 text-[34px] sm:text-[44px] lg:text-[52px]">
                More news.
              </h2>
            </div>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
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
          <a href="/newsroom/lisbon-hub-opening" className="group block h-full">
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
                  Nuvoryx opens Lisbon engineering hub to serve European clients
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
                  Nuvoryx ranks on the Inc. 5000 list for the fourth consecutive
                  year
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
    </section>
  );
}
