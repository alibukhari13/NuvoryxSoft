export default function Section02() {
  return (
    <section className="bg-paper text-ink py-20 md:py-28 lg:py-32 relative">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <div className="mb-10 flex flex-wrap gap-2">
          <button className="h-10 rounded-full px-4 text-[14px] font-bold transition-colors bg-ink text-white">
            All
          </button>
          <button className="h-10 rounded-full px-4 text-[14px] font-bold transition-colors border border-line bg-white hover:border-ink/30">
            Company
          </button>
        </div>
        <a
          href="/newsroom/anthropic-partner-network"
          className="group mb-10 grid overflow-hidden rounded-[28px] border border-line bg-white shadow-soft transition-shadow hover:shadow-lift lg:grid-cols-2"
        >
          <div className="relative min-h-[300px] overflow-hidden">
            <img
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              src="/agency-assets/80d56b1f8262f3c1d7cc405f0647208571207fa347c1640f1f6891b254280f76.jpg"
            />
          </div>
          <div className="flex flex-col p-8 md:p-12">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center rounded-full px-3 py-1 text-[12.5px] font-semibold bg-brand text-ink">
                Latest
              </span>
              <span className="text-[13.5px] text-muted">Oct 30, 2025</span>
            </div>
            <h2 className="mt-5 text-[28px] leading-tight md:text-[36px]">
              Nuvoryx joins Anthropic's Claude Partner Network as a Select
              Services Partner
            </h2>
            <p className="mt-4 text-[16px] text-muted">
              Expanded access to Claude models and co-delivery for enterprise AI
              programmes.
            </p>
            <div className="mt-auto flex items-center gap-3 pt-8 text-[14px]">
              <img
                alt=""
                className="h-10 w-10 rounded-full object-cover"
                src="/agency-assets/d324e7bacbf7f3fe92080d103f79351a05e37e74831daecf1f438c456a9acc10.jpg"
              />
              <div>
                <div className="font-bold">Newsroom</div>
              </div>
            </div>
          </div>
        </a>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
