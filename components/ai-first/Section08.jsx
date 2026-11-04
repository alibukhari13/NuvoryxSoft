export default function Section08() {
  return (
    <section className="bg-paper text-ink py-16 md:py-20 relative">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <div className="relative grid items-center gap-10 overflow-hidden rounded-[32px] bg-gradient-to-br from-forest to-ink p-8 text-white md:p-14 lg:grid-cols-[1.3fr_1fr]">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-brand/30 blur-[100px]"></div>
          <div className="relative">
            <span className="rounded-md px-1.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-[0.12em] bg-brand/15 text-forest">
              White paper
            </span>
            <h2 className="mt-5 text-[32px] sm:text-[44px]">
              AI adoption in 2026: a practical framework.
            </h2>
            <p className="mt-4 text-[17px] text-white/70">
              32 pages on use-case selection, operating models, governance and
              ROI, drawn from 140+ production deployments.
            </p>
            <div className="mt-8">
              <a
                href="/whitepapers/ai-adoption-2026"
                className="group/btn relative isolate items-center overflow-hidden rounded-full font-display font-semibold tracking-[-0.01em] whitespace-nowrap select-none transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-40 aria-disabled:pointer-events-none aria-disabled:opacity-40 inline-flex bg-brand text-ink shadow-[0_12px_32px_-14px_rgba(5,207,69,0.75)] hover:shadow-[0_18px_44px_-12px_rgba(5,207,69,0.95)] h-[60px] text-[15.5px] pl-7 pr-1.5 gap-5"
              >
                <span
                  aria-hidden="true"
                  className="absolute -z-10 aspect-square rounded-full transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] top-1.5 bottom-1.5 right-1.5 bg-forest scale-100 group-hover/btn:scale-[26]"
                ></span>
                <span className="relative inline-flex items-center gap-2 transition-colors duration-300 group-hover/btn:text-white mr-auto">
                  Download free
                </span>
                <span className="relative grid shrink-0 place-items-center overflow-hidden rounded-full h-12 w-12 bg-forest text-white">
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
                    className="lucide lucide-arrow-right absolute transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-x-[220%] h-[18px] w-[18px]"
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
                    className="lucide lucide-arrow-right absolute -translate-x-[220%] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-x-0 h-[18px] w-[18px]"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </span>
              </a>
            </div>
          </div>
          <div className="relative mx-auto w-48 rotate-[-6deg] md:w-56">
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
                    AI Adoption in 2026: A Practical Framework
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
