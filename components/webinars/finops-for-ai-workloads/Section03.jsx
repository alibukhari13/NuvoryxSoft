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
                More webinars
              </span>
            </div>
            <div className="reveal in" style={{ transitionDelay: "80ms" }}>
              <h2 className="mt-4 text-[34px] sm:text-[44px] lg:text-[52px]">
                Watch on demand.
              </h2>
            </div>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
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
                  Building review boards, model cards and risk tiers that teams
                  embrace.
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
                  The agentic enterprise: what changes when software acts on its
                  own
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
      </div>
    </section>
  );
}
