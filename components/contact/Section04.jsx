export default function Section04() {
  return (
    <section className="bg-paper text-ink py-20 md:py-28 lg:py-32 relative">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="reveal in" style={{ transitionDelay: "0ms" }}>
              <span className="inline-flex items-center gap-2 font-mono text-[11.5px] font-medium uppercase tracking-[0.18em] text-muted">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-brand"
                  aria-hidden="true"
                ></span>
                FAQ
              </span>
            </div>
            <div className="reveal in" style={{ transitionDelay: "80ms" }}>
              <h2 className="mt-4 text-[34px] sm:text-[44px] lg:text-[52px]">
                Questions, answered.
              </h2>
            </div>
            <div className="reveal in" style={{ transitionDelay: "160ms" }}>
              <p className="mt-5 max-w-2xl text-lg text-muted">
                Straight answers to what clients ask us most. Can’t find yours?
              </p>
            </div>
          </div>
          <div
            className="reveal in shrink-0"
            style={{ transitionDelay: "240ms" }}
          >
            <a
              href="/contact"
              className="group/btn relative isolate items-center overflow-hidden rounded-full font-display font-semibold tracking-[-0.01em] whitespace-nowrap select-none transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-40 aria-disabled:pointer-events-none aria-disabled:opacity-40 inline-flex bg-ink text-white shadow-[0_12px_30px_-16px_rgba(17,17,17,0.6)] h-[52px] text-[14.5px] pl-6 pr-[5px] gap-4"
            >
              <span
                aria-hidden="true"
                className="absolute -z-10 aspect-square rounded-full transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] top-[5px] bottom-[5px] right-[5px] bg-brand scale-100 group-hover/btn:scale-[26]"
              ></span>
              <span className="relative inline-flex items-center gap-2 transition-colors duration-300 group-hover/btn:text-ink mr-auto">
                Ask our team
              </span>
              <span className="relative grid shrink-0 place-items-center overflow-hidden rounded-full h-[42px] w-[42px] bg-brand text-ink">
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
            </a>
          </div>
        </div>
        <div className="grid gap-3 lg:grid-cols-2 lg:gap-5">
          <div className="flex flex-col gap-3">
            <div className="rounded-[18px] border transition-colors border-line bg-white border-forest/25">
              <button
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                aria-expanded="true"
              >
                <span className="text-[16.5px] font-bold">
                  How quickly can you start?
                </span>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-300 rotate-45 bg-brand text-ink">
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
                    className="lucide lucide-plus h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                </span>
              </button>
              <div className="grid transition-[grid-template-rows] duration-300 grid-rows-[1fr]">
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 text-[15.5px] text-muted">
                    Most engagements kick off within 10 business days. Dedicated
                    teams are typically fully onboarded within two weeks of
                    signing.
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-[18px] border transition-colors border-line bg-white">
              <button
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                aria-expanded="false"
              >
                <span className="text-[16.5px] font-bold">
                  Do you work with startups or only enterprises?
                </span>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-300 bg-ink/5">
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
                    className="lucide lucide-plus h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                </span>
              </button>
              <div className="grid transition-[grid-template-rows] duration-300 grid-rows-[0fr]">
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 text-[15.5px] text-muted">
                    Both. Roughly 40% of our clients are venture-backed startups
                    and 60% are mid-market and enterprise organisations.
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-[18px] border transition-colors border-line bg-white">
              <button
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                aria-expanded="false"
              >
                <span className="text-[16.5px] font-bold">
                  Who owns the intellectual property?
                </span>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-300 bg-ink/5">
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
                    className="lucide lucide-plus h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                </span>
              </button>
              <div className="grid transition-[grid-template-rows] duration-300 grid-rows-[0fr]">
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 text-[15.5px] text-muted">
                    You do. All code, designs and documentation we create for
                    you are assigned to you on payment, with no lock-in.
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-[18px] border transition-colors border-line bg-white">
              <button
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                aria-expanded="false"
              >
                <span className="text-[16.5px] font-bold">
                  How do you price projects?
                </span>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-300 bg-ink/5">
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
                    className="lucide lucide-plus h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                </span>
              </button>
              <div className="grid transition-[grid-template-rows] duration-300 grid-rows-[0fr]">
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 text-[15.5px] text-muted">
                    We offer fixed-price, time &amp; materials, dedicated team
                    and hybrid models. We will recommend the one that fits your
                    risk profile and scope clarity.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="rounded-[18px] border transition-colors border-line bg-white">
              <button
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                aria-expanded="false"
              >
                <span className="text-[16.5px] font-bold">
                  How do you handle security and compliance?
                </span>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-300 bg-ink/5">
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
                    className="lucide lucide-plus h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                </span>
              </button>
              <div className="grid transition-[grid-template-rows] duration-300 grid-rows-[0fr]">
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 text-[15.5px] text-muted">
                    We are ISO 27001 and SOC 2 Type II certified, run secure
                    SDLC practices on every project and can work within HIPAA,
                    PCI DSS and GDPR requirements.
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-[18px] border transition-colors border-line bg-white">
              <button
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                aria-expanded="false"
              >
                <span className="text-[16.5px] font-bold">
                  Which time zones do you cover?
                </span>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-300 bg-ink/5">
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
                    className="lucide lucide-plus h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                </span>
              </button>
              <div className="grid transition-[grid-template-rows] duration-300 grid-rows-[0fr]">
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 text-[15.5px] text-muted">
                    With hubs across the Americas, Europe, the Middle East and
                    Asia, we guarantee at least four hours of overlap with your
                    core working day.
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-[18px] border transition-colors border-line bg-white">
              <button
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                aria-expanded="false"
              >
                <span className="text-[16.5px] font-bold">
                  Can you take over an existing codebase?
                </span>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-300 bg-ink/5">
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
                    className="lucide lucide-plus h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                </span>
              </button>
              <div className="grid transition-[grid-template-rows] duration-300 grid-rows-[0fr]">
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 text-[15.5px] text-muted">
                    Yes. We start with a two-week code and architecture audit,
                    then agree a stabilisation plan before taking on new feature
                    work.
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-[18px] border transition-colors border-line bg-white">
              <button
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                aria-expanded="false"
              >
                <span className="text-[16.5px] font-bold">
                  What does a consultation involve?
                </span>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-300 bg-ink/5">
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
                    className="lucide lucide-plus h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                </span>
              </button>
              <div className="grid transition-[grid-template-rows] duration-300 grid-rows-[0fr]">
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 text-[15.5px] text-muted">
                    A free 45-minute call with a senior architect to understand
                    your goals, followed by a written recommendation within
                    three business days.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
