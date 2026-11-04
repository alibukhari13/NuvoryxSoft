export default function Section03() {
  return (
    <section className="bg-ink text-white py-20 md:py-28 lg:py-32 relative overflow-hidden">
      <div className="absolute -right-32 top-10 h-[420px] w-[420px] rounded-full bg-brand/20 blur-[120px]"></div>
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8 relative">
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="reveal in" style={{ transitionDelay: "0ms" }}>
              <span className="inline-flex items-center gap-2 font-mono text-[11.5px] font-medium uppercase tracking-[0.18em] text-white/60">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-brand"
                  aria-hidden="true"
                ></span>
                Solutions
              </span>
            </div>
            <div className="reveal in" style={{ transitionDelay: "80ms" }}>
              <h2 className="mt-4 text-[34px] sm:text-[44px] lg:text-[52px]">
                How we help.
              </h2>
            </div>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="group flex gap-6 rounded-[22px] border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-brand/50">
            <span className="grid h-12 w-12 place-items-center rounded-2xl transition-colors duration-300 bg-white/[0.07] text-brand">
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
                className="lucide lucide-trending-up h-[22px] w-[22px]"
                aria-hidden="true"
              >
                <path d="M16 7h6v6"></path>
                <path d="m22 7-8.5 8.5-5-5L2 17"></path>
              </svg>
            </span>
            <div>
              <h3 className="text-[21px]">AI &amp; automation</h3>
              <p className="mt-2 text-white/65">
                Copilots, agents and predictive models tuned for fintech &amp;
                banking workflows.
              </p>
            </div>
          </div>
          <div className="group flex gap-6 rounded-[22px] border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-brand/50">
            <span className="grid h-12 w-12 place-items-center rounded-2xl transition-colors duration-300 bg-white/[0.07] text-brand">
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
                className="lucide lucide-building-complex lucide-building-2 h-[22px] w-[22px]"
                aria-hidden="true"
              >
                <path d="M10 12h4"></path>
                <path d="M10 8h4"></path>
                <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
                <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
              </svg>
            </span>
            <div>
              <h3 className="text-[21px]">Platform modernization</h3>
              <p className="mt-2 text-white/65">
                Move core systems to cloud-native architectures without
                disrupting operations.
              </p>
            </div>
          </div>
          <div className="group flex gap-6 rounded-[22px] border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-brand/50">
            <span className="grid h-12 w-12 place-items-center rounded-2xl transition-colors duration-300 bg-white/[0.07] text-brand">
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
                className="lucide lucide-target h-[22px] w-[22px]"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="6"></circle>
                <circle cx="12" cy="12" r="2"></circle>
              </svg>
            </span>
            <div>
              <h3 className="text-[21px]">Data &amp; analytics</h3>
              <p className="mt-2 text-white/65">
                Unified data platforms and real-time dashboards leaders trust.
              </p>
            </div>
          </div>
          <div className="group flex gap-6 rounded-[22px] border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-brand/50">
            <span className="grid h-12 w-12 place-items-center rounded-2xl transition-colors duration-300 bg-white/[0.07] text-brand">
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
                className="lucide lucide-users-round lucide-users-2 h-[22px] w-[22px]"
                aria-hidden="true"
              >
                <path d="M18 21a8 8 0 0 0-16 0"></path>
                <circle cx="10" cy="8" r="5"></circle>
                <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path>
              </svg>
            </span>
            <div>
              <h3 className="text-[21px]">Customer experience</h3>
              <p className="mt-2 text-white/65">
                Web and mobile journeys that are fast, accessible and
                delightful.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
