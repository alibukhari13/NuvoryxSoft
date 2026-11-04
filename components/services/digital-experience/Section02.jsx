export default function Section02() {
  return (
    <section className="bg-paper text-ink py-20 md:py-28 lg:py-32 relative">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 font-mono text-[11.5px] font-medium uppercase tracking-[0.18em] text-muted">
              <span
                className="h-1.5 w-1.5 rounded-full bg-brand"
                aria-hidden="true"
              ></span>
              Overview
            </span>
            <h2 className="mt-4 text-[34px] sm:text-[44px]">
              What digital experience means at Nuvoryx.
            </h2>
            <p className="mt-5 text-[17px] text-muted">
              Brand, design and engineering under one roof. We build fast,
              accessible websites, apps and storefronts that are a pleasure to
              use and easy for your teams to manage.
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              <li className="flex items-start gap-3 text-[16px] font-semibold">
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
                  className="lucide lucide-circle-check lucide-check-circle-2 mt-0.5 h-5 w-5 shrink-0 text-brand"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m16 9-5.5 5.5L8 12"></path>
                </svg>{" "}
                Senior, certified specialists on every engagement
              </li>
              <li className="flex items-start gap-3 text-[16px] font-semibold">
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
                  className="lucide lucide-circle-check lucide-check-circle-2 mt-0.5 h-5 w-5 shrink-0 text-brand"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m16 9-5.5 5.5L8 12"></path>
                </svg>{" "}
                Measurable outcomes agreed before work starts
              </li>
              <li className="flex items-start gap-3 text-[16px] font-semibold">
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
                  className="lucide lucide-circle-check lucide-check-circle-2 mt-0.5 h-5 w-5 shrink-0 text-brand"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m16 9-5.5 5.5L8 12"></path>
                </svg>{" "}
                Security and compliance built into delivery
              </li>
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            <div className="relative rounded-[22px] border shadow-soft transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift flex items-center gap-6 p-6 border-forest bg-forest text-white">
              <div className="font-display text-[40px] font-bold leading-none tracking-[-0.04em] text-brand">
                +41%
              </div>
              <div className="text-[15px] text-white/75">
                average conversion uplift post-launch
              </div>
            </div>
            <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift flex items-center gap-6 p-6">
              <div className="font-display text-[40px] font-bold leading-none tracking-[-0.04em] text-forest">
                95+
              </div>
              <div className="text-[15px] text-muted">
                Lighthouse performance scores as standard
              </div>
            </div>
            <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift flex items-center gap-6 p-6">
              <div className="font-display text-[40px] font-bold leading-none tracking-[-0.04em] text-forest">
                4.8★
              </div>
              <div className="text-[15px] text-muted">
                average app store rating
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
