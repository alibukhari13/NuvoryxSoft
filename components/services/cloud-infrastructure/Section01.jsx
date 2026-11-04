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
        style={{ transform: "translate3d(0px, 118px, 0px) scale(1)" }}
      ></div>
      <div
        data-parallax="0.1"
        className="absolute -bottom-40 left-0 h-[400px] w-[600px] rounded-full bg-forest blur-[120px]"
        style={{ transform: "translate3d(0px, -98.3px, 0px) scale(1)" }}
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
            <a href="/services" className="hover:text-white">
              Services
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
            <span className="text-white">Cloud &amp; Infrastructure</span>
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
                Cloud &amp; Infrastructure
              </span>
            </div>
            <h1 className="mt-5 text-[40px] sm:text-[56px] lg:text-[68px]">
              <span className="word-mask">
                <span style={{ animationDelay: "120ms" }}>Cloud</span>
              </span>{" "}
              <span className="word-mask">
                <span style={{ animationDelay: "175ms" }}>that</span>
              </span>{" "}
              <span className="word-mask">
                <span style={{ animationDelay: "230ms" }}>scales</span>
              </span>{" "}
              <span className="word-mask">
                <span style={{ animationDelay: "285ms" }}>with</span>
              </span>{" "}
              <span className="word-mask">
                <span style={{ animationDelay: "340ms" }}>you,</span>
              </span>{" "}
              <span className="word-mask">
                <span style={{ animationDelay: "395ms" }}>not</span>
              </span>{" "}
              <span className="word-mask">
                <span style={{ animationDelay: "450ms" }}>your</span>
              </span>{" "}
              <span className="word-mask">
                <span style={{ animationDelay: "505ms" }}>bill.</span>
              </span>
            </h1>
            <p className="mt-6 max-w-2xl animate-fade-up text-[18px] [animation-delay:450ms] md:text-[19px] text-white/70">
              Resilient, cost-efficient cloud platforms. Certified architects
              across AWS, Azure and Google Cloud who plan migrations, build
              platforms and run operations with clear SLAs and relentless
              attention to cost.
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
                  Talk to an expert
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
                href="#subs"
                className="group/btn relative isolate items-center overflow-hidden rounded-full font-display font-semibold tracking-[-0.01em] whitespace-nowrap select-none transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-40 aria-disabled:pointer-events-none aria-disabled:opacity-40 inline-flex border-[1.5px] border-white/30 text-white hover:border-white h-[60px] text-[15.5px] px-7"
              >
                <span
                  aria-hidden="true"
                  className="absolute -z-10 aspect-square rounded-full transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] top-1.5 bottom-1.5 right-1.5 bg-white scale-0 group-hover/btn:scale-[26]"
                ></span>
                <span className="relative inline-flex items-center gap-2 transition-colors duration-300 group-hover/btn:text-ink mx-auto">
                  Explore services
                </span>
              </a>
            </div>
          </div>
          <div className="animate-scale-in [animation-delay:250ms]">
            <div className="relative hidden aspect-square lg:block">
              <div className="absolute inset-10 rounded-full bg-brand/30 blur-[80px]"></div>
              <svg
                viewBox="-20 -20 240 240"
                className="relative h-full w-full animate-float-rot p-10"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="_r_5_g" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#3DF06F"></stop>
                    <stop offset="45%" stopColor="#05CF45"></stop>
                    <stop offset="100%" stopColor="#1B3329"></stop>
                  </linearGradient>
                  <linearGradient id="_r_5_f" x1="0" y1="0.4" x2="1" y2="1">
                    <stop
                      offset="0%"
                      stopColor="#fff"
                      stopOpacity="0.04"
                    ></stop>
                    <stop
                      offset="50%"
                      stopColor="#fff"
                      stopOpacity="0.85"
                    ></stop>
                    <stop offset="100%" stopColor="#fff" stopOpacity="1"></stop>
                  </linearGradient>
                  <mask
                    id="_r_5_m"
                    maskUnits="userSpaceOnUse"
                    x="-20"
                    y="-20"
                    width="240"
                    height="240"
                  >
                    <rect
                      x="-20"
                      y="-20"
                      width="240"
                      height="240"
                      fill="url(#_r_5_f)"
                    ></rect>
                  </mask>
                  <filter
                    id="_r_5_n"
                    x="-30%"
                    y="-30%"
                    width="160%"
                    height="160%"
                  >
                    <feGaussianBlur
                      in="SourceGraphic"
                      stdDeviation="3.2"
                      result="b"
                    ></feGaussianBlur>
                    <feTurbulence
                      type="fractalNoise"
                      baseFrequency="1.1"
                      numOctaves="2"
                      seed="8"
                      result="t"
                    ></feTurbulence>
                    <feDisplacementMap
                      in="b"
                      in2="t"
                      scale="7"
                      xChannelSelector="R"
                      yChannelSelector="G"
                      result="d"
                    ></feDisplacementMap>
                    <feColorMatrix
                      in="t"
                      type="saturate"
                      values="0"
                      result="g"
                    ></feColorMatrix>
                    <feComposite
                      in="d"
                      in2="g"
                      operator="arithmetic"
                      k1="0.5"
                      k2="0.72"
                      k3="0"
                      k4="0"
                    ></feComposite>
                  </filter>
                  <filter
                    id="_r_5_s"
                    x="-50%"
                    y="-50%"
                    width="200%"
                    height="200%"
                  >
                    <feGaussianBlur stdDeviation="14"></feGaussianBlur>
                  </filter>
                </defs>
                <g
                  opacity="0.35"
                  filter="url(#_r_5_s)"
                  transform="translate(0 10)"
                >
                  <circle
                    cx="66"
                    cy="118"
                    r="34"
                    fill="#05CF45"
                    opacity="0.75"
                  ></circle>
                  <circle
                    cx="140"
                    cy="114"
                    r="38"
                    fill="#05CF45"
                    opacity="0.85"
                  ></circle>
                  <circle cx="102" cy="86" r="46" fill="#05CF45"></circle>
                  <rect
                    x="40"
                    y="112"
                    width="128"
                    height="46"
                    rx="23"
                    fill="#05CF45"
                  ></rect>
                </g>
                <g mask="url(#_r_5_m)" filter="url(#_r_5_n)">
                  <circle
                    cx="66"
                    cy="118"
                    r="34"
                    fill="url(#_r_5_g)"
                    opacity="0.75"
                  ></circle>
                  <circle
                    cx="140"
                    cy="114"
                    r="38"
                    fill="url(#_r_5_g)"
                    opacity="0.85"
                  ></circle>
                  <circle cx="102" cy="86" r="46" fill="url(#_r_5_g)"></circle>
                  <rect
                    x="40"
                    y="112"
                    width="128"
                    height="46"
                    rx="23"
                    fill="url(#_r_5_g)"
                  ></rect>
                </g>
              </svg>
              <div className="absolute bottom-10 left-0 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-ink shadow-lift">
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
                  className="lucide lucide-cloud h-6 w-6 text-forest"
                  aria-hidden="true"
                >
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
                </svg>
                <div>
                  <div className="font-display text-[18px] font-bold leading-none">
                    34%
                  </div>
                  <div className="text-[12px] text-muted">
                    average cloud cost reduction via FinOps
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
