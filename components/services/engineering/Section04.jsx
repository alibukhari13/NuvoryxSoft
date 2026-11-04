export default function Section04() {
  return (
    <section className="bg-ink text-white py-20 md:py-28 lg:py-32 relative">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="reveal in" style={{ transitionDelay: "0ms" }}>
              <span className="inline-flex items-center gap-2 font-mono text-[11.5px] font-medium uppercase tracking-[0.18em] text-white/60">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-brand"
                  aria-hidden="true"
                ></span>
                Process
              </span>
            </div>
            <div className="reveal in" style={{ transitionDelay: "80ms" }}>
              <h2 className="mt-4 text-[34px] sm:text-[44px] lg:text-[52px]">
                How we deliver.
              </h2>
            </div>
            <div className="reveal in" style={{ transitionDelay: "160ms" }}>
              <p className="mt-5 max-w-2xl text-lg text-white/70">
                Clear stages, clear gates, working software every two weeks.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="relative grid gap-4 md:grid-cols-5">
            <div className="absolute left-0 right-0 top-6 hidden h-px md:block bg-white/15"></div>
            <div
              className="absolute left-0 top-6 hidden h-px bg-brand transition-all duration-500 md:block"
              style={{ width: "0%" }}
            ></div>
            <button className="group relative text-left">
              <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full border-2 font-display text-[15px] font-bold transition-all border-brand bg-brand text-ink">
                01
              </span>
              <div className="mt-6 rounded-[20px] border p-6 transition-all border-white/10 border-brand">
                <div className="flex items-center justify-between">
                  <h3 className="flex items-center gap-2.5 text-[22px]">
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
                      className="lucide lucide-search h-5 w-5 text-brand"
                      aria-hidden="true"
                    >
                      <path d="m21 21-4.34-4.34"></path>
                      <circle cx="11" cy="11" r="8"></circle>
                    </svg>
                    Discover
                  </h3>
                  <span className="font-mono text-[10.5px] uppercase text-white/50">
                    1–2 weeks
                  </span>
                </div>
                <p className="mt-3 text-[14.5px] text-white/65">
                  Workshops, audits and stakeholder interviews to define
                  outcomes, constraints and success metrics.
                </p>
              </div>
            </button>
            <button className="group relative text-left">
              <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full border-2 font-display text-[15px] font-bold transition-all border-line bg-white text-ink">
                02
              </span>
              <div className="mt-6 rounded-[20px] border p-6 transition-all border-white/10 border-transparent">
                <div className="flex items-center justify-between">
                  <h3 className="flex items-center gap-2.5 text-[22px]">
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
                      className="lucide lucide-pen-tool h-5 w-5 text-brand"
                      aria-hidden="true"
                    >
                      <path d="m18 13-.654-4.736a4 4 0 00-2.756-3.266l-9.163-2.9a2 2 0 00-2.017.493l-.82.819a2 2 0 00-.492 2.017l2.9 9.163a4 4 0 003.266 2.756L13 18"></path>
                      <path d="M18.648 12.352a1.205 1.205 0 011.704 0l1.296 1.296a1.205 1.205 0 010 1.704l-6.296 6.296a1.205 1.205 0 01-1.704 0l-1.296-1.296a1.205 1.205 0 010-1.704z"></path>
                      <path d="m3 3 6.586 6.586"></path>
                      <circle cx="11" cy="11" r="2"></circle>
                    </svg>
                    Design
                  </h3>
                  <span className="font-mono text-[10.5px] uppercase text-white/50">
                    2–4 weeks
                  </span>
                </div>
                <p className="mt-3 text-[14.5px] text-white/65">
                  Architecture, UX flows and clickable prototypes validated with
                  real users before a line of production code.
                </p>
              </div>
            </button>
            <button className="group relative text-left">
              <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full border-2 font-display text-[15px] font-bold transition-all border-line bg-white text-ink">
                03
              </span>
              <div className="mt-6 rounded-[20px] border p-6 transition-all border-white/10 border-transparent">
                <div className="flex items-center justify-between">
                  <h3 className="flex items-center gap-2.5 text-[22px]">
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
                      className="lucide lucide-code-xml lucide-code-2 h-5 w-5 text-brand"
                      aria-hidden="true"
                    >
                      <path d="m18 16 4-4-4-4"></path>
                      <path d="m6 8-4 4 4 4"></path>
                      <path d="m14.5 4-5 16"></path>
                    </svg>
                    Build
                  </h3>
                  <span className="font-mono text-[10.5px] uppercase text-white/50">
                    8–20 weeks
                  </span>
                </div>
                <p className="mt-3 text-[14.5px] text-white/65">
                  Two-week sprints with demos, automated testing and CI/CD, so
                  you see working software every fortnight.
                </p>
              </div>
            </button>
            <button className="group relative text-left">
              <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full border-2 font-display text-[15px] font-bold transition-all border-line bg-white text-ink">
                04
              </span>
              <div className="mt-6 rounded-[20px] border p-6 transition-all border-brand/50 bg-white/[0.06] border-transparent">
                <div className="flex items-center justify-between">
                  <h3 className="flex items-center gap-2.5 text-[22px]">
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
                      className="lucide lucide-rocket h-5 w-5 text-brand"
                      aria-hidden="true"
                    >
                      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"></path>
                      <path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"></path>
                      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"></path>
                    </svg>
                    Launch
                  </h3>
                  <span className="font-mono text-[10.5px] uppercase text-white/50">
                    1–2 weeks
                  </span>
                </div>
                <p className="mt-3 text-[14.5px] text-white/65">
                  Staged rollouts, load testing, observability and hypercare so
                  go-live is a non-event.
                </p>
              </div>
            </button>
            <button className="group relative text-left">
              <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full border-2 font-display text-[15px] font-bold transition-all border-white/20 bg-ink text-white border-line bg-white text-ink">
                05
              </span>
              <div className="mt-6 rounded-[20px] border p-6 transition-all border-white/10 border-transparent">
                <div className="flex items-center justify-between">
                  <h3 className="flex items-center gap-2.5 text-[22px]">
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
                      className="lucide lucide-trending-up h-5 w-5 text-brand"
                      aria-hidden="true"
                    >
                      <path d="M16 7h6v6"></path>
                      <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                    </svg>
                    Scale
                  </h3>
                  <span className="font-mono text-[10.5px] uppercase text-white/50">
                    Ongoing
                  </span>
                </div>
                <p className="mt-3 text-[14.5px] text-white/65">
                  Continuous optimisation, feature growth and managed operations
                  backed by clear SLAs.
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
