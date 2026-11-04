export default function Section02() {
  return (
    <section className="bg-paper text-ink py-20 md:py-28 lg:py-32 relative">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div className="mx-auto w-56 rotate-[-4deg] md:w-72">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[10px] bg-white p-5 shadow-lift">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand/60 blur-2xl"></div>
              <svg
                viewBox="0 0 200 200"
                className="absolute -right-6 top-6 h-32 w-32"
                aria-hidden="true"
              >
                <defs>
                  <radialGradient id="sp0" cx="35%" cy="30%" r="80%">
                    <stop offset="0%" stopColor="#C8FFD8"></stop>
                    <stop offset="40%" stopColor="#05CF45"></stop>
                    <stop offset="100%" stopColor="#1B3329"></stop>
                  </radialGradient>
                  <filter id="sp0-blur">
                    <feGaussianBlur stdDeviation="8"></feGaussianBlur>
                  </filter>
                </defs>
                <path
                  d="M100 10 C108 70 130 92 190 100 C130 108 108 130 100 190 C92 130 70 108 10 100 C70 92 92 70 100 10Z"
                  fill="#05CF45"
                  opacity="0.35"
                  filter="url(#sp0-blur)"
                  transform="translate(0 10)"
                ></path>
                <path
                  d="M100 10 C108 70 130 92 190 100 C130 108 108 130 100 190 C92 130 70 108 10 100 C70 92 92 70 100 10Z"
                  fill="url(#sp0)"
                  rx="24"
                ></path>
              </svg>
              <div className="relative flex h-full flex-col">
                <div className="flex items-center gap-1.5 font-display text-[11px] font-extrabold tracking-tight">
                  <svg
                    viewBox="0 0 32 32"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <rect width="32" height="32" rx="9" fill="#05CF45"></rect>
                    <path
                      d="M9 23V9l14 14V9"
                      fill="none"
                      stroke="#111"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>{" "}
                  nuvoryx
                </div>
                <div className="mt-auto">
                  <span className="rounded bg-brand/15 px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-widest text-forest">
                    White paper
                  </span>
                  <div className="mt-2 font-display text-[14px] font-bold leading-tight text-ink">
                    AI adoption in 2026: a practical framework for
                    enterprise-scale impact
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <span className="inline-flex items-center gap-2 font-mono text-[11.5px] font-medium uppercase tracking-[0.18em] text-muted">
              <span
                className="h-1.5 w-1.5 rounded-full bg-brand"
                aria-hidden="true"
              ></span>
              Inside the report
            </span>
            <h2 className="mt-4 text-[32px] sm:text-[40px]">
              What you’ll learn.
            </h2>
            <ul className="mt-8 flex flex-col gap-4">
              <li className="flex items-start gap-3 text-[16.5px] font-semibold">
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
                A scoring model to prioritise AI use cases by value and risk
              </li>
              <li className="flex items-start gap-3 text-[16.5px] font-semibold">
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
                Operating model blueprints for centralised, federated and hybrid
                AI teams
              </li>
              <li className="flex items-start gap-3 text-[16.5px] font-semibold">
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
                Governance checklists aligned to NIST AI RMF and the EU AI Act
              </li>
              <li className="flex items-start gap-3 text-[16.5px] font-semibold">
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
                ROI benchmarks from 140+ production deployments
              </li>
              <li className="flex items-start gap-3 text-[16.5px] font-semibold">
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
                A 90-day action plan for leadership teams
              </li>
            </ul>
            <div className="mt-8 flex items-center gap-3 text-[14px] text-muted">
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
                className="lucide lucide-users h-4 w-4"
                aria-hidden="true"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <circle cx="9" cy="7" r="4"></circle>
              </svg>{" "}
              Downloaded by 6,800+ technology leaders
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
