export default function Section01() {
  return (
    <section className="min-h-[calc(100vh-72px)] bg-paper">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8 py-12">
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
            <span className="text-ink">Book a Consultation</span>
          </span>
        </nav>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-forest to-ink p-8 text-white md:p-10 lg:sticky lg:top-28 lg:self-start">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand/30 blur-3xl"></div>
            <div className="relative">
              <span className="inline-flex items-center gap-2 font-mono text-[11.5px] font-medium uppercase tracking-[0.18em] text-white/60">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-brand"
                  aria-hidden="true"
                ></span>
                Free consultation
              </span>
              <h1 className="mt-5 text-[34px] sm:text-[44px]">
                Get a tailored plan in 3 days.
              </h1>
              <p className="mt-4 text-white/70">
                Answer a few questions (about 2 minutes). We’ll come back with a
                recommended approach, team and estimate.
              </p>
              <ul className="mt-8 flex flex-col gap-3 text-[15px]">
                <li className="flex items-center gap-3">
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
                    className="lucide lucide-check h-4 w-4 text-brand"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>{" "}
                  45-minute call with a senior architect
                </li>
                <li className="flex items-center gap-3">
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
                    className="lucide lucide-check h-4 w-4 text-brand"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>{" "}
                  Written recommendation &amp; estimate
                </li>
                <li className="flex items-center gap-3">
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
                    className="lucide lucide-check h-4 w-4 text-brand"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>{" "}
                  NDA available on request
                </li>
                <li className="flex items-center gap-3">
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
                    className="lucide lucide-check h-4 w-4 text-brand"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>{" "}
                  No obligation, ever
                </li>
              </ul>
              <div className="mt-10 flex items-center gap-3 border-t border-white/15 pt-6">
                <div className="flex -space-x-3">
                  <img
                    alt=""
                    className="h-10 w-10 rounded-full border-2 border-forest object-cover"
                    src="/agency-assets/64fc47639d5c3f087c78903c57faf4827168ba7fa8c8cd1e3e86bc6eb4c8f79d.jpg"
                  />
                  <img
                    alt=""
                    className="h-10 w-10 rounded-full border-2 border-forest object-cover"
                    src="/agency-assets/d7422bed27487716b559bb42b8b297972b5209268cdead958a64a38f19ae7c18.jpg"
                  />
                  <img
                    alt=""
                    className="h-10 w-10 rounded-full border-2 border-forest object-cover"
                    src="/agency-assets/c78fe39cfa6d3b8fe9ea80fec6107fd74c9d5f60a871f7a07abcfddfa241218c.jpg"
                  />
                </div>
                <div className="text-[13.5px] text-white/70">
                  Our architects reply within 1 business day
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-[28px] border border-line bg-white p-6 shadow-soft md:p-10">
            <ol className="flex items-center gap-2" aria-label="Progress">
              <li className="flex flex-1 items-center gap-2">
                <span
                  className="grid h-8 w-8 shrink-0 place-items-center rounded-full font-display text-[13px] font-bold transition-colors bg-brand text-ink"
                  aria-current="step"
                >
                  1
                </span>
                <span className="hidden text-[13px] font-bold md:block text-ink">
                  Your project
                </span>
                <span className="h-[2px] flex-1 rounded-full bg-line"></span>
              </li>
              <li className="flex flex-1 items-center gap-2">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full font-display text-[13px] font-bold transition-colors bg-paper text-ink/40">
                  2
                </span>
                <span className="hidden text-[13px] font-bold md:block text-muted">
                  Scope &amp; budget
                </span>
                <span className="h-[2px] flex-1 rounded-full bg-line"></span>
              </li>
              <li className="flex flex-1 items-center gap-2">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full font-display text-[13px] font-bold transition-colors bg-paper text-ink/40">
                  3
                </span>
                <span className="hidden text-[13px] font-bold md:block text-muted">
                  Your details
                </span>
                <span className="h-[2px] flex-1 rounded-full bg-line"></span>
              </li>
              <li className="flex flex-1 items-center gap-2">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full font-display text-[13px] font-bold transition-colors bg-paper text-ink/40">
                  4
                </span>
                <span className="hidden text-[13px] font-bold md:block text-muted">
                  Review
                </span>
              </li>
            </ol>
            <div className="mt-3 h-1 overflow-hidden rounded-full bg-paper md:hidden">
              <div
                className="h-full bg-brand transition-all"
                style={{ width: "25%" }}
              ></div>
            </div>
            <div className="mt-10 animate-fade-up">
              <div className="flex flex-col gap-8">
                <div>
                  <h2 className="text-[24px]">What can we help with?</h2>
                  <p className="mt-1 text-[14.5px] text-muted">
                    Select all that apply.
                  </p>
                  <div className="mt-5 grid gap-2 sm:grid-cols-2">
                    <button
                      type="button"
                      aria-pressed="false"
                      className="flex items-center gap-2 rounded-2xl border px-4 py-3 text-left text-[14.5px] font-bold transition-all border-line bg-white hover:border-ink/40"
                    >
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-md border-2 border-ink/20"></span>
                      AI &amp; Data Innovation
                    </button>
                    <button
                      type="button"
                      aria-pressed="false"
                      className="flex items-center gap-2 rounded-2xl border px-4 py-3 text-left text-[14.5px] font-bold transition-all border-line bg-white hover:border-ink/40"
                    >
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-md border-2 border-ink/20"></span>
                      Engineering
                    </button>
                    <button
                      type="button"
                      aria-pressed="false"
                      className="flex items-center gap-2 rounded-2xl border px-4 py-3 text-left text-[14.5px] font-bold transition-all border-line bg-white hover:border-ink/40"
                    >
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-md border-2 border-ink/20"></span>
                      Advisory &amp; Strategy
                    </button>
                    <button
                      type="button"
                      aria-pressed="false"
                      className="flex items-center gap-2 rounded-2xl border px-4 py-3 text-left text-[14.5px] font-bold transition-all border-line bg-white hover:border-ink/40"
                    >
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-md border-2 border-ink/20"></span>
                      Cybersecurity
                    </button>
                    <button
                      type="button"
                      aria-pressed="false"
                      className="flex items-center gap-2 rounded-2xl border px-4 py-3 text-left text-[14.5px] font-bold transition-all border-line bg-white hover:border-ink/40"
                    >
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-md border-2 border-ink/20"></span>
                      Optimization &amp; Quality
                    </button>
                    <button
                      type="button"
                      aria-pressed="false"
                      className="flex items-center gap-2 rounded-2xl border px-4 py-3 text-left text-[14.5px] font-bold transition-all border-line bg-white hover:border-ink/40"
                    >
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-md border-2 border-ink/20"></span>
                      Cloud &amp; Infrastructure
                    </button>
                    <button
                      type="button"
                      aria-pressed="false"
                      className="flex items-center gap-2 rounded-2xl border px-4 py-3 text-left text-[14.5px] font-bold transition-all border-line bg-white hover:border-ink/40"
                    >
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-md border-2 border-ink/20"></span>
                      Digital Experience
                    </button>
                    <button
                      type="button"
                      aria-pressed="false"
                      className="flex items-center gap-2 rounded-2xl border px-4 py-3 text-left text-[14.5px] font-bold transition-all border-line bg-white hover:border-ink/40"
                    >
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-md border-2 border-ink/20"></span>
                      Business Process Services
                    </button>
                  </div>
                </div>
                <div>
                  <h3 className="text-[18px]">Where are you today?</h3>
                  <div className="mt-4 grid gap-2 sm:grid-cols-2">
                    <button
                      type="button"
                      aria-pressed="false"
                      className="flex items-center gap-2 rounded-2xl border px-4 py-3 text-left text-[14.5px] font-bold transition-all border-line bg-white hover:border-ink/40"
                    >
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-md border-2 border-ink/20"></span>
                      Just an idea
                    </button>
                    <button
                      type="button"
                      aria-pressed="false"
                      className="flex items-center gap-2 rounded-2xl border px-4 py-3 text-left text-[14.5px] font-bold transition-all border-line bg-white hover:border-ink/40"
                    >
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-md border-2 border-ink/20"></span>
                      Planning / scoping
                    </button>
                    <button
                      type="button"
                      aria-pressed="false"
                      className="flex items-center gap-2 rounded-2xl border px-4 py-3 text-left text-[14.5px] font-bold transition-all border-line bg-white hover:border-ink/40"
                    >
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-md border-2 border-ink/20"></span>
                      Existing product to improve
                    </button>
                    <button
                      type="button"
                      aria-pressed="false"
                      className="flex items-center gap-2 rounded-2xl border px-4 py-3 text-left text-[14.5px] font-bold transition-all border-line bg-white hover:border-ink/40"
                    >
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-md border-2 border-ink/20"></span>
                      Need extra capacity
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 flex items-center justify-between border-t border-line pt-6">
              <button
                disabled={true}
                className="flex items-center gap-2 text-[14.5px] font-bold text-ink/70 hover:text-ink disabled:opacity-30"
              >
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
                  className="lucide lucide-arrow-left h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="m12 19-7-7 7-7"></path>
                  <path d="M19 12H5"></path>
                </svg>{" "}
                Back
              </button>
              <span className="hidden text-[13px] text-muted sm:block">
                Step 1 of 4
              </span>
              <button className="group/btn relative isolate items-center overflow-hidden rounded-full font-display font-semibold tracking-[-0.01em] whitespace-nowrap select-none transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-40 aria-disabled:pointer-events-none aria-disabled:opacity-40 inline-flex bg-brand text-ink shadow-[0_12px_32px_-14px_rgba(5,207,69,0.75)] hover:shadow-[0_18px_44px_-12px_rgba(5,207,69,0.95)] h-[52px] text-[14.5px] pl-6 pr-[5px] gap-4">
                <span
                  aria-hidden="true"
                  className="absolute -z-10 aspect-square rounded-full transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] top-[5px] bottom-[5px] right-[5px] bg-forest scale-100 group-hover/btn:scale-[26]"
                ></span>
                <span className="relative inline-flex items-center gap-2 transition-colors duration-300 group-hover/btn:text-white mr-auto">
                  Continue
                </span>
                <span className="relative grid shrink-0 place-items-center overflow-hidden rounded-full h-[42px] w-[42px] bg-forest text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right absolute transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-x-[220%] h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right absolute -translate-x-[220%] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-x-0 h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
