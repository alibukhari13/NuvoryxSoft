export default function Section02() {
  return (
    <section className="bg-paper text-ink py-20 md:py-28 lg:py-32 relative">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="reveal in" style={{ transitionDelay: "0ms" }}>
            <div className="relative rounded-[22px] border shadow-soft transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift group flex h-full flex-col p-7 border-forest bg-forest text-white hover:border-brand">
              <span className="absolute right-5 top-5 rounded-full bg-brand px-2.5 py-1 text-[11px] font-bold text-ink">
                Most popular
              </span>
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
                  className="lucide lucide-users h-[22px] w-[22px]"
                  aria-hidden="true"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                </svg>
              </span>
              <h3 className="mt-6 text-[21px]">Dedicated Team</h3>
              <p className="mt-3 text-[15px] text-white/70">
                A cross-functional squad working exclusively on your roadmap, in
                your rituals and tools.
              </p>
              <ul className="mt-5 flex flex-col gap-2">
                <li className="flex items-center gap-2 text-[14px] font-semibold">
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
                  Full-time vetted specialists
                </li>
                <li className="flex items-center gap-2 text-[14px] font-semibold">
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
                  Scale up or down monthly
                </li>
                <li className="flex items-center gap-2 text-[14px] font-semibold">
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
                  You direct priorities
                </li>
              </ul>
              <div className="mt-auto border-t pt-5 border-white/15">
                <div className="text-[12px] font-semibold uppercase tracking-[0.1em] text-white/50">
                  Best for
                </div>
                <div className="mt-1 text-[14.5px] font-bold">
                  Long-term product development
                </div>
              </div>
            </div>
          </div>
          <div className="reveal in" style={{ transitionDelay: "80ms" }}>
            <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift group flex h-full flex-col p-7">
              <span className="grid h-12 w-12 place-items-center rounded-2xl transition-colors duration-300 bg-forest/[0.06] text-forest group-hover:bg-brand group-hover:text-ink">
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
                  className="lucide lucide-clipboard-check h-[22px] w-[22px]"
                  aria-hidden="true"
                >
                  <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                  <path d="m9 14 2 2 4-4"></path>
                </svg>
              </span>
              <h3 className="mt-6 text-[21px]">Fixed Price Project</h3>
              <p className="mt-3 text-[15px] text-muted">
                Clear scope, timeline and budget agreed upfront, with milestones
                tied to deliverables.
              </p>
              <ul className="mt-5 flex flex-col gap-2">
                <li className="flex items-center gap-2 text-[14px] font-semibold">
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
                  Predictable budget
                </li>
                <li className="flex items-center gap-2 text-[14px] font-semibold">
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
                  Milestone-based payments
                </li>
                <li className="flex items-center gap-2 text-[14px] font-semibold">
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
                  Warranty period included
                </li>
              </ul>
              <div className="mt-auto border-t pt-5 border-line">
                <div className="text-[12px] font-semibold uppercase tracking-[0.1em] text-muted">
                  Best for
                </div>
                <div className="mt-1 text-[14.5px] font-bold">
                  Well-defined scope &amp; MVPs
                </div>
              </div>
            </div>
          </div>
          <div className="reveal in" style={{ transitionDelay: "160ms" }}>
            <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift group flex h-full flex-col p-7">
              <span className="grid h-12 w-12 place-items-center rounded-2xl transition-colors duration-300 bg-forest/[0.06] text-forest group-hover:bg-brand group-hover:text-ink">
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
                  className="lucide lucide-git-merge h-[22px] w-[22px]"
                  aria-hidden="true"
                >
                  <circle cx="18" cy="18" r="3"></circle>
                  <circle cx="6" cy="6" r="3"></circle>
                  <path d="M6 21V9a9 9 0 0 0 9 9"></path>
                </svg>
              </span>
              <h3 className="mt-6 text-[21px]">Hybrid</h3>
              <p className="mt-3 text-[15px] text-muted">
                Fixed-price discovery and MVP, then a flexible dedicated team to
                iterate and scale.
              </p>
              <ul className="mt-5 flex flex-col gap-2">
                <li className="flex items-center gap-2 text-[14px] font-semibold">
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
                  Lower upfront risk
                </li>
                <li className="flex items-center gap-2 text-[14px] font-semibold">
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
                  Smooth hand-off to scale
                </li>
                <li className="flex items-center gap-2 text-[14px] font-semibold">
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
                  Blended rate options
                </li>
              </ul>
              <div className="mt-auto border-t pt-5 border-line">
                <div className="text-[12px] font-semibold uppercase tracking-[0.1em] text-muted">
                  Best for
                </div>
                <div className="mt-1 text-[14.5px] font-bold">
                  New products with evolving needs
                </div>
              </div>
            </div>
          </div>
          <div className="reveal in" style={{ transitionDelay: "240ms" }}>
            <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift group flex h-full flex-col p-7">
              <span className="grid h-12 w-12 place-items-center rounded-2xl transition-colors duration-300 bg-forest/[0.06] text-forest group-hover:bg-brand group-hover:text-ink">
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
                  className="lucide lucide-building h-[22px] w-[22px]"
                  aria-hidden="true"
                >
                  <path d="M12 10h.01"></path>
                  <path d="M12 14h.01"></path>
                  <path d="M12 6h.01"></path>
                  <path d="M16 10h.01"></path>
                  <path d="M16 14h.01"></path>
                  <path d="M16 6h.01"></path>
                  <path d="M8 10h.01"></path>
                  <path d="M8 14h.01"></path>
                  <path d="M8 6h.01"></path>
                  <path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path>
                  <rect x="4" y="2" width="16" height="20" rx="2"></rect>
                </svg>
              </span>
              <h3 className="mt-6 text-[21px]">Offshore Development Center</h3>
              <p className="mt-3 text-[15px] text-muted">
                Your own branded delivery hub, staffed, managed and governed by
                Nuvoryx.
              </p>
              <ul className="mt-5 flex flex-col gap-2">
                <li className="flex items-center gap-2 text-[14px] font-semibold">
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
                  Your brand, our operations
                </li>
                <li className="flex items-center gap-2 text-[14px] font-semibold">
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
                  Build-operate-transfer option
                </li>
                <li className="flex items-center gap-2 text-[14px] font-semibold">
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
                  Full compliance &amp; security
                </li>
              </ul>
              <div className="mt-auto border-t pt-5 border-line">
                <div className="text-[12px] font-semibold uppercase tracking-[0.1em] text-muted">
                  Best for
                </div>
                <div className="mt-1 text-[14.5px] font-bold">
                  Enterprises scaling capacity
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
