export default function Section10() {
  return (
    <section className="bg-white text-ink py-16 md:py-20 relative">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="reveal in" style={{ transitionDelay: "0ms" }}>
              <span className="inline-flex items-center gap-2 font-mono text-[11.5px] font-medium uppercase tracking-[0.18em] text-muted">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-brand"
                  aria-hidden="true"
                ></span>
                Related services
              </span>
            </div>
            <div className="reveal in" style={{ transitionDelay: "80ms" }}>
              <h2 className="mt-4 text-[34px] sm:text-[44px] lg:text-[52px]">
                More from Digital Experience
              </h2>
            </div>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <a
            href="/services/digital-experience/web-development"
            className="group"
          >
            <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift flex items-center justify-between gap-4 p-6">
              <div>
                <div className="font-display text-[17px] font-bold">
                  Web Development
                </div>
                <div className="mt-1 text-[14px] text-muted">
                  Explore our web development capabilities.
                </div>
              </div>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full transition-all duration-300 group-hover:rotate-45 group-hover:bg-brand group-hover:text-ink bg-ink text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-up-right h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M7 7h10v10"></path>
                  <path d="M7 17 17 7"></path>
                </svg>
              </span>
            </div>
          </a>
          <a
            href="/services/digital-experience/mobile-app-development"
            className="group"
          >
            <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift flex items-center justify-between gap-4 p-6">
              <div>
                <div className="font-display text-[17px] font-bold">
                  Mobile App Development
                </div>
                <div className="mt-1 text-[14px] text-muted">
                  Explore our mobile app development capabilities.
                </div>
              </div>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full transition-all duration-300 group-hover:rotate-45 group-hover:bg-brand group-hover:text-ink bg-ink text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-up-right h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M7 7h10v10"></path>
                  <path d="M7 17 17 7"></path>
                </svg>
              </span>
            </div>
          </a>
          <a
            href="/services/digital-experience/e-commerce-solutions"
            className="group"
          >
            <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift flex items-center justify-between gap-4 p-6">
              <div>
                <div className="font-display text-[17px] font-bold">
                  E-commerce Solutions
                </div>
                <div className="mt-1 text-[14px] text-muted">
                  Explore our e-commerce solutions capabilities.
                </div>
              </div>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full transition-all duration-300 group-hover:rotate-45 group-hover:bg-brand group-hover:text-ink bg-ink text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-up-right h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M7 7h10v10"></path>
                  <path d="M7 17 17 7"></path>
                </svg>
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
