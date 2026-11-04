export default function Section01() {
  return (
    <section
      data-hero="dark"
      className="relative overflow-hidden -mt-[72px] bg-ink pt-[72px] text-white"
    >
      <div className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_right,#000_20%,transparent_70%)]"></div>
      <div
        data-parallax="-0.12"
        className="absolute -right-32 -top-40 h-[560px] w-[560px] rounded-full bg-brand/25 blur-[140px]"
        style={{ transform: "translate3d(0px, -8px, 0px) scale(1)" }}
      ></div>
      <div
        data-parallax="0.1"
        className="absolute -bottom-40 left-0 h-[400px] w-[600px] rounded-full bg-forest blur-[120px]"
        style={{ transform: "translate3d(0px, 6.7px, 0px) scale(1)" }}
      ></div>
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8 relative pb-20 pt-12 md:pb-28 md:pt-16">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-1.5 text-[13.5px] font-semibold text-white/50"
        >
          <a href="/" className="hover:text-white">
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
            <a href="/whitepapers" className="hover:text-white">
              White papers
            </a>
          </span>
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
            <span className="text-white">AI adoption in 2026</span>
          </span>
        </nav>
        <div className="mt-10 grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:items-center">
          <div>
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 font-mono text-[11.5px] font-medium uppercase tracking-[0.18em] text-white/60">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-brand"
                  aria-hidden="true"
                ></span>
                White paper · 32 pages
              </span>
            </div>
            <h1 className="mt-5 text-[40px] sm:text-[56px] lg:text-[68px]">
              <span className="word-mask">
                <span style={{ animationDelay: "120ms" }}>AI</span>
              </span>{" "}
              <span className="word-mask">
                <span style={{ animationDelay: "175ms" }}>adoption</span>
              </span>{" "}
              <span className="word-mask">
                <span style={{ animationDelay: "230ms" }}>in</span>
              </span>{" "}
              <span className="word-mask">
                <span style={{ animationDelay: "285ms" }}>2026:</span>
              </span>{" "}
              <span className="word-mask">
                <span style={{ animationDelay: "340ms" }}>a</span>
              </span>{" "}
              <span className="word-mask">
                <span style={{ animationDelay: "395ms" }}>practical</span>
              </span>{" "}
              <span className="word-mask">
                <span style={{ animationDelay: "450ms" }}>framework</span>
              </span>{" "}
              <span className="word-mask">
                <span style={{ animationDelay: "505ms" }}>for</span>
              </span>{" "}
              <span className="word-mask">
                <span style={{ animationDelay: "560ms" }}>
                  enterprise-scale
                </span>
              </span>{" "}
              <span className="word-mask">
                <span style={{ animationDelay: "615ms" }}>impact</span>
              </span>
            </h1>
            <p className="mt-6 max-w-2xl animate-fade-up text-[18px] [animation-delay:450ms] md:text-[19px] text-white/70">
              A 32-page framework covering use-case selection, operating model,
              governance and ROI.
            </p>
          </div>
          <div className="animate-scale-in [animation-delay:250ms]">
            <div className="rounded-[28px] bg-white p-6 text-ink md:p-8">
              <h3 className="mb-1 text-[20px]">Get your free copy</h3>
              <p className="mb-5 text-[14px] text-muted">
                Instant access. No spam, ever.
              </p>
              <form noValidate={true} className="flex flex-col gap-4">
                <label className="flex flex-col gap-2">
                  <span className="text-[13.5px] font-bold text-ink">
                    Full name <span className="text-forest">*</span>
                  </span>
                  <input
                    aria-invalid="false"
                    className="w-full rounded-[14px] border bg-white px-4 text-[15.5px] text-ink placeholder:text-ink/35 transition-colors focus:outline-none focus:ring-4 disabled:cursor-not-allowed disabled:bg-paper disabled:text-ink/40 border-line hover:border-ink/25 focus:border-forest focus:ring-brand/25 h-12"
                    placeholder="Jane Cooper"
                    defaultValue=""
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-[13.5px] font-bold text-ink">
                    Work email <span className="text-forest">*</span>
                  </span>
                  <input
                    aria-invalid="false"
                    className="w-full rounded-[14px] border bg-white px-4 text-[15.5px] text-ink placeholder:text-ink/35 transition-colors focus:outline-none focus:ring-4 disabled:cursor-not-allowed disabled:bg-paper disabled:text-ink/40 border-line hover:border-ink/25 focus:border-forest focus:ring-brand/25 h-12"
                    placeholder="jane@company.com"
                    type="email"
                    defaultValue=""
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-[13.5px] font-bold text-ink">
                    Company <span className="text-forest">*</span>
                  </span>
                  <input
                    aria-invalid="false"
                    className="w-full rounded-[14px] border bg-white px-4 text-[15.5px] text-ink placeholder:text-ink/35 transition-colors focus:outline-none focus:ring-4 disabled:cursor-not-allowed disabled:bg-paper disabled:text-ink/40 border-line hover:border-ink/25 focus:border-forest focus:ring-brand/25 h-12"
                    placeholder="Acme Inc."
                    defaultValue=""
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-[13.5px] font-bold text-ink">
                    Role <span className="text-forest">*</span>
                  </span>
                  <div className="relative">
                    <select
                      aria-invalid="false"
                      className="w-full rounded-[14px] border bg-white px-4 text-[15.5px] text-ink placeholder:text-ink/35 transition-colors focus:outline-none focus:ring-4 disabled:cursor-not-allowed disabled:bg-paper disabled:text-ink/40 border-line hover:border-ink/25 focus:border-forest focus:ring-brand/25 h-12 appearance-none pr-10"
                    >
                      <option value="">Select your role</option>
                      <option>C-level executive</option>
                      <option>VP / Director</option>
                      <option>Engineering manager</option>
                      <option>Engineer / Data scientist</option>
                      <option>Product manager</option>
                      <option>Other</option>
                    </select>
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
                      className="lucide lucide-chevron-down pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/50"
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </div>
                </label>
                <div>
                  <label className="flex cursor-pointer items-start gap-3 text-[14px] text-muted">
                    <input className="peer sr-only" type="checkbox" />
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border-2 transition-colors peer-focus-visible:ring-4 peer-focus-visible:ring-brand/30 border-ink/25"></span>
                    <span>
                      I agree to receive this content and related communications
                      from Nuvoryx. Unsubscribe anytime.
                    </span>
                  </label>
                </div>
                <button
                  className="group/btn relative isolate items-center overflow-hidden rounded-full font-display font-semibold tracking-[-0.01em] whitespace-nowrap select-none transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-40 aria-disabled:pointer-events-none aria-disabled:opacity-40 inline-flex bg-brand text-ink shadow-[0_12px_32px_-14px_rgba(5,207,69,0.75)] hover:shadow-[0_18px_44px_-12px_rgba(5,207,69,0.95)] h-[60px] text-[15.5px] pl-7 pr-1.5 gap-5 mt-2 w-full"
                  type="submit"
                >
                  <span
                    aria-hidden="true"
                    className="absolute -z-10 aspect-square rounded-full transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] top-1.5 bottom-1.5 right-1.5 bg-forest scale-100 group-hover/btn:scale-[26]"
                  ></span>
                  <span className="relative inline-flex items-center gap-2 transition-colors duration-300 group-hover/btn:text-white mr-auto">
                    Download the white paper
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
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
