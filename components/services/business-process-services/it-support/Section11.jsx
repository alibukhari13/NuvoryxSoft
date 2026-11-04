export default function Section11() {
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
                IT Support: FAQs
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
                  How long does a typical IT Support engagement take?
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
                    Most engagements deliver first value in 6–10 weeks. Larger
                    programmes run in quarterly increments with clear
                    milestones.
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
                  What does it cost?
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
                    Fixed-price projects start from $45k; dedicated teams from
                    $28k per month. We provide a written estimate within three
                    business days of a consultation.
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
                  Do we need a large internal team?
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
                    No. We can deliver end to end, or blend with your team. We
                    only need a product owner with decision authority.
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
                  How do you measure success?
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
                    Business KPIs agreed in discovery, tracked on a shared
                    dashboard and reviewed at every sprint demo.
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
                  Can you support us after launch?
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
                    Yes. We offer managed services with SLAs from 99.9% to
                    99.99% availability and 15-minute P1 response.
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
                  What if requirements change mid-project?
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
                    Change is expected. We use lightweight change control on
                    fixed-price work and flexible backlogs on dedicated teams.
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
