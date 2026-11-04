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
        style={{ transform: "translate3d(0px, -6.9px, 0px) scale(1)" }}
      ></div>
      <div
        data-parallax="0.1"
        className="absolute -bottom-40 left-0 h-[400px] w-[600px] rounded-full bg-forest blur-[120px]"
        style={{ transform: "translate3d(0px, 5.7px, 0px) scale(1)" }}
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
            <span className="text-white">Services</span>
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
                Services
              </span>
            </div>
            <h1 className="mt-5 text-[40px] sm:text-[56px] lg:text-[68px]">
              <span className="word-mask">
                <span style={{ animationDelay: "120ms" }}>Everything</span>
              </span>{" "}
              <span className="word-mask">
                <span style={{ animationDelay: "175ms" }}>you</span>
              </span>{" "}
              <span className="word-mask">
                <span style={{ animationDelay: "230ms" }}>need</span>
              </span>{" "}
              <span className="word-mask">
                <span style={{ animationDelay: "285ms" }}>to</span>
              </span>{" "}
              <span className="text-brand">
                <span className="word-mask">
                  <span style={{ animationDelay: "340ms" }}>build,</span>
                </span>{" "}
                <span className="word-mask">
                  <span style={{ animationDelay: "395ms" }}>scale</span>
                </span>{" "}
                <span className="word-mask">
                  <span style={{ animationDelay: "450ms" }}>and</span>
                </span>{" "}
                <span className="word-mask">
                  <span style={{ animationDelay: "505ms" }}>run</span>
                </span>
              </span>{" "}
              <span className="word-mask">
                <span style={{ animationDelay: "560ms" }}>intelligent</span>
              </span>{" "}
              <span className="word-mask">
                <span style={{ animationDelay: "615ms" }}>software.</span>
              </span>
            </h1>
            <p className="mt-6 max-w-2xl animate-fade-up text-[18px] [animation-delay:450ms] md:text-[19px] text-white/70">
              Eight practices and 48 specialist services, delivered by one
              accountable team. Start anywhere, from a two-week AI audit to a
              fully managed platform.
            </p>
            <div className="mt-9 flex animate-fade-up flex-wrap gap-3 [animation-delay:600ms]">
              <a
                href="/book-consultation"
                className="group/btn relative isolate items-center overflow-hidden rounded-full font-display font-semibold tracking-[-0.01em] whitespace-nowrap select-none transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-40 aria-disabled:pointer-events-none aria-disabled:opacity-40 inline-flex bg-brand text-ink shadow-[0_12px_32px_-14px_rgba(5,207,69,0.75)] hover:shadow-[0_18px_44px_-12px_rgba(5,207,69,0.95)] h-[60px] text-[15.5px] pl-7 pr-1.5 gap-5"
              >
                <span
                  aria-hidden="true"
                  className="absolute -z-10 aspect-square rounded-full transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] top-1.5 bottom-1.5 right-1.5 bg-forest scale-100 group-hover/btn:scale-[26]"
                ></span>
                <span className="relative inline-flex items-center gap-2 transition-colors duration-300 group-hover/btn:text-white mr-auto">
                  Book a Free Consultation
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
              <a
                href="/engagement-models"
                className="group/btn relative isolate items-center overflow-hidden rounded-full font-display font-semibold tracking-[-0.01em] whitespace-nowrap select-none transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-40 aria-disabled:pointer-events-none aria-disabled:opacity-40 inline-flex border-[1.5px] border-white/30 text-white hover:border-white h-[60px] text-[15.5px] pl-7 pr-1.5 gap-5"
              >
                <span
                  aria-hidden="true"
                  className="absolute -z-10 aspect-square rounded-full transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] top-1.5 bottom-1.5 right-1.5 bg-white scale-100 group-hover/btn:scale-[26]"
                ></span>
                <span className="relative inline-flex items-center gap-2 transition-colors duration-300 group-hover/btn:text-ink mr-auto">
                  Engagement models
                </span>
                <span className="relative grid shrink-0 place-items-center overflow-hidden rounded-full h-12 w-12 bg-white text-ink">
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
          <div className="animate-scale-in [animation-delay:250ms]">
            <div className="relative hidden lg:block">
              <svg
                viewBox="0 0 400 400"
                className="mx-auto h-[380px] w-[380px] animate-float"
                aria-hidden="true"
              >
                <defs>
                  <radialGradient id="svc-a" cx="35%" cy="30%" r="75%">
                    <stop offset="0%" stopColor="#B9FFD0"></stop>
                    <stop offset="28%" stopColor="#05CF45"></stop>
                    <stop offset="70%" stopColor="#1B3329"></stop>
                    <stop offset="100%" stopColor="#0A120E"></stop>
                  </radialGradient>
                  <radialGradient id="svc-b" cx="70%" cy="80%" r="50%">
                    <stop
                      offset="0%"
                      stopColor="#05CF45"
                      stopOpacity="0.55"
                    ></stop>
                    <stop
                      offset="100%"
                      stopColor="#05CF45"
                      stopOpacity="0"
                    ></stop>
                  </radialGradient>
                  <linearGradient id="svc-c" x1="0" y1="0" x2="1" y2="1">
                    <stop
                      offset="0%"
                      stopColor="#fff"
                      stopOpacity="0.75"
                    ></stop>
                    <stop offset="100%" stopColor="#fff" stopOpacity="0"></stop>
                  </linearGradient>
                </defs>
                <circle cx="200" cy="200" r="170" fill="url(#svc-a)"></circle>
                <circle cx="200" cy="200" r="170" fill="url(#svc-b)"></circle>
                <ellipse
                  cx="150"
                  cy="120"
                  rx="80"
                  ry="40"
                  fill="url(#svc-c)"
                  transform="rotate(-30 150 120)"
                  opacity="0.6"
                ></ellipse>
                <ellipse
                  cx="200"
                  cy="200"
                  rx="190"
                  ry="54"
                  fill="none"
                  stroke="#05CF45"
                  strokeOpacity="0.5"
                  strokeWidth="1.5"
                  transform="rotate(-18 200 200)"
                ></ellipse>
                <ellipse
                  cx="200"
                  cy="200"
                  rx="200"
                  ry="70"
                  fill="none"
                  stroke="#fff"
                  strokeOpacity="0.12"
                  strokeWidth="1"
                  transform="rotate(24 200 200)"
                ></ellipse>
              </svg>
              <div className="absolute bottom-6 left-0 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-ink/70 px-5 py-4 backdrop-blur">
                  <div className="font-display text-[26px] font-bold text-brand">
                    48
                  </div>
                  <div className="text-[13px] text-white/60">
                    Specialist services
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-ink/70 px-5 py-4 backdrop-blur">
                  <div className="font-display text-[26px] font-bold text-brand">
                    400+
                  </div>
                  <div className="text-[13px] text-white/60">
                    Products shipped
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
