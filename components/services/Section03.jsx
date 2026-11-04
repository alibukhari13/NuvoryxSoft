export default function Section03() {
  return (
    <section className="bg-paper text-ink py-20 md:py-28 lg:py-32 relative">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <div className="relative z-20 -mx-5 mb-10 bg-paper px-5 py-4 md:-mx-8 md:px-8">
          <div
            role="tablist"
            className="no-scrollbar relative flex gap-2 overflow-x-auto"
          >
            <span
              aria-hidden="true"
              className="absolute left-0 top-0 h-10 rounded-full transition-[transform,width,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] bg-ink opacity-100"
              style={{ transform: "translateX(0px)", width: "53px" }}
            ></span>
            <button
              role="tab"
              aria-selected="true"
              className="relative h-10 shrink-0 rounded-full px-4 text-[14px] font-bold transition-colors duration-300 text-white border border-transparent bg-transparent"
            >
              All
            </button>
            <button
              role="tab"
              aria-selected="false"
              className="relative h-10 shrink-0 rounded-full px-4 text-[14px] font-bold transition-colors duration-300 border border-line bg-white text-ink/75 hover:border-ink/30"
            >
              AI &amp; Data Innovation
            </button>
            <button
              role="tab"
              aria-selected="false"
              className="relative h-10 shrink-0 rounded-full px-4 text-[14px] font-bold transition-colors duration-300 border border-line bg-white text-ink/75 hover:border-ink/30"
            >
              Engineering
            </button>
            <button
              role="tab"
              aria-selected="false"
              className="relative h-10 shrink-0 rounded-full px-4 text-[14px] font-bold transition-colors duration-300 border border-line bg-white text-ink/75 hover:border-ink/30"
            >
              Advisory &amp; Strategy
            </button>
            <button
              role="tab"
              aria-selected="false"
              className="relative h-10 shrink-0 rounded-full px-4 text-[14px] font-bold transition-colors duration-300 border border-line bg-white text-ink/75 hover:border-ink/30"
            >
              Cybersecurity
            </button>
            <button
              role="tab"
              aria-selected="false"
              className="relative h-10 shrink-0 rounded-full px-4 text-[14px] font-bold transition-colors duration-300 border border-line bg-white text-ink/75 hover:border-ink/30"
            >
              Optimization &amp; Quality
            </button>
            <button
              role="tab"
              aria-selected="false"
              className="relative h-10 shrink-0 rounded-full px-4 text-[14px] font-bold transition-colors duration-300 border border-line bg-white text-ink/75 hover:border-ink/30"
            >
              Cloud &amp; Infrastructure
            </button>
            <button
              role="tab"
              aria-selected="false"
              className="relative h-10 shrink-0 rounded-full px-4 text-[14px] font-bold transition-colors duration-300 border border-line bg-white text-ink/75 hover:border-ink/30"
            >
              Digital Experience
            </button>
            <button
              role="tab"
              aria-selected="false"
              className="relative h-10 shrink-0 rounded-full px-4 text-[14px] font-bold transition-colors duration-300 border border-line bg-white text-ink/75 hover:border-ink/30"
            >
              Business Process Services
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="reveal in" style={{ transitionDelay: "0ms" }}>
            <div className="grid overflow-hidden rounded-[28px] border border-line bg-white shadow-soft lg:grid-cols-[1fr_1.3fr]">
              <div className="relative flex min-h-[280px] flex-col justify-between overflow-hidden bg-forest p-8 text-white md:p-10">
                <div className="absolute -right-10 -top-10 h-60 w-60 rounded-full bg-brand/30 blur-3xl"></div>
                <svg
                  viewBox="-20 -20 240 240"
                  className="absolute -bottom-8 -right-8 h-52 w-52 animate-float-rot opacity-95"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="_r_u_g" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#3DF06F"></stop>
                      <stop offset="45%" stopColor="#05CF45"></stop>
                      <stop offset="100%" stopColor="#1B3329"></stop>
                    </linearGradient>
                    <linearGradient id="_r_u_f" x1="0" y1="1" x2="1" y2="0">
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
                      <stop
                        offset="100%"
                        stopColor="#fff"
                        stopOpacity="1"
                      ></stop>
                    </linearGradient>
                    <mask
                      id="_r_u_m"
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
                        fill="url(#_r_u_f)"
                      ></rect>
                    </mask>
                    <filter
                      id="_r_u_n"
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
                        seed="3"
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
                      id="_r_u_s"
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
                    filter="url(#_r_u_s)"
                    transform="translate(0 10)"
                  >
                    <path
                      d="M100 14 C104 78 122 96 188 100 C122 104 104 122 100 186 C96 122 78 104 12 100 C78 96 96 78 100 14Z"
                      fill="#05CF45"
                    ></path>
                  </g>
                  <g mask="url(#_r_u_m)" filter="url(#_r_u_n)">
                    <path
                      d="M100 14 C104 78 122 96 188 100 C122 104 104 122 100 186 C96 122 78 104 12 100 C78 96 96 78 100 14Z"
                      fill="url(#_r_u_g)"
                    ></path>
                  </g>
                </svg>
                <div className="relative">
                  <span className="font-mono text-[12px] text-white/50">
                    01 / 08
                  </span>
                  <h2 className="mt-4 text-[30px] md:text-[36px]">
                    AI &amp; Data Innovation
                  </h2>
                  <p className="mt-3 max-w-sm text-[16px] text-white/70">
                    From AI pilots to production systems that earn their keep.
                  </p>
                </div>
                <div className="relative mt-8">
                  <a
                    href="/services/ai-data-innovation"
                    className="group/btn relative isolate items-center overflow-hidden rounded-full font-display font-semibold tracking-[-0.01em] whitespace-nowrap select-none transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-40 aria-disabled:pointer-events-none aria-disabled:opacity-40 inline-flex bg-brand text-ink shadow-[0_12px_32px_-14px_rgba(5,207,69,0.75)] hover:shadow-[0_18px_44px_-12px_rgba(5,207,69,0.95)] h-[52px] text-[14.5px] pl-6 pr-[5px] gap-4"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -z-10 aspect-square rounded-full transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] top-[5px] bottom-[5px] right-[5px] bg-forest scale-100 group-hover/btn:scale-[26]"
                    ></span>
                    <span className="relative inline-flex items-center gap-2 transition-colors duration-300 group-hover/btn:text-white mr-auto">
                      Explore AI
                    </span>
                    <span className="relative grid shrink-0 place-items-center overflow-hidden rounded-full h-[42px] w-[42px] bg-forest text-white">
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
              <div className="p-6 md:p-10">
                <p className="text-[16px] text-muted">
                  We help enterprises move past experimentation. Our AI
                  engineers, data scientists and platform specialists design,
                  ship and operate AI systems that are measurable, governed and
                  wired into the way your business actually runs.
                </p>
                <div className="mt-6 grid gap-2 sm:grid-cols-2">
                  <a
                    href="/services/ai-data-innovation/ai-strategy-and-roadmap"
                    className="group flex items-center justify-between rounded-2xl border border-line px-4 py-3 transition-colors hover:border-brand hover:bg-paper"
                  >
                    <span className="text-[14.5px] font-bold">
                      AI Strategy &amp; Roadmap
                    </span>
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
                      className="lucide lucide-arrow-right h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                  <a
                    href="/services/ai-data-innovation/generative-ai-and-llm-solutions"
                    className="group flex items-center justify-between rounded-2xl border border-line px-4 py-3 transition-colors hover:border-brand hover:bg-paper"
                  >
                    <span className="text-[14.5px] font-bold">
                      Generative AI &amp; LLM Solutions
                    </span>
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
                      className="lucide lucide-arrow-right h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                  <a
                    href="/services/ai-data-innovation/ai-agents-and-workflow-automation"
                    className="group flex items-center justify-between rounded-2xl border border-line px-4 py-3 transition-colors hover:border-brand hover:bg-paper"
                  >
                    <span className="text-[14.5px] font-bold">
                      AI Agents &amp; Workflow Automation
                    </span>
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
                      className="lucide lucide-arrow-right h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                  <a
                    href="/services/ai-data-innovation/machine-learning-and-predictive-analytics"
                    className="group flex items-center justify-between rounded-2xl border border-line px-4 py-3 transition-colors hover:border-brand hover:bg-paper"
                  >
                    <span className="text-[14.5px] font-bold">
                      Machine Learning &amp; Predictive Analytics
                    </span>
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
                      className="lucide lucide-arrow-right h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                  <a
                    href="/services/ai-data-innovation/data-engineering-and-pipelines"
                    className="group flex items-center justify-between rounded-2xl border border-line px-4 py-3 transition-colors hover:border-brand hover:bg-paper"
                  >
                    <span className="text-[14.5px] font-bold">
                      Data Engineering &amp; Pipelines
                    </span>
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
                      className="lucide lucide-arrow-right h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                  <a
                    href="/services/ai-data-innovation/data-analytics-and-bi"
                    className="group flex items-center justify-between rounded-2xl border border-line px-4 py-3 transition-colors hover:border-brand hover:bg-paper"
                  >
                    <span className="text-[14.5px] font-bold">
                      Data Analytics &amp; BI
                    </span>
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
                      className="lucide lucide-arrow-right h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                  <a
                    href="/services/ai-data-innovation/computer-vision"
                    className="group flex items-center justify-between rounded-2xl border border-line px-4 py-3 transition-colors hover:border-brand hover:bg-paper"
                  >
                    <span className="text-[14.5px] font-bold">
                      Computer Vision
                    </span>
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
                      className="lucide lucide-arrow-right h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                  <a
                    href="/services/ai-data-innovation/conversational-ai-chatbots"
                    className="group flex items-center justify-between rounded-2xl border border-line px-4 py-3 transition-colors hover:border-brand hover:bg-paper"
                  >
                    <span className="text-[14.5px] font-bold">
                      Conversational AI / Chatbots
                    </span>
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
                      className="lucide lucide-arrow-right h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="reveal in" style={{ transitionDelay: "0ms" }}>
            <div className="grid overflow-hidden rounded-[28px] border border-line bg-white shadow-soft lg:grid-cols-[1fr_1.3fr]">
              <div className="relative flex min-h-[280px] flex-col justify-between overflow-hidden bg-forest p-8 text-white md:p-10 lg:order-2">
                <div className="absolute -right-10 -top-10 h-60 w-60 rounded-full bg-brand/30 blur-3xl"></div>
                <svg
                  viewBox="-20 -20 240 240"
                  className="absolute -bottom-8 -right-8 h-52 w-52 animate-float-rot opacity-95"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="_r_v_g" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#3DF06F"></stop>
                      <stop offset="45%" stopColor="#05CF45"></stop>
                      <stop offset="100%" stopColor="#1B3329"></stop>
                    </linearGradient>
                    <linearGradient id="_r_v_f" x1="0" y1="0.5" x2="1" y2="0.5">
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
                      <stop
                        offset="100%"
                        stopColor="#fff"
                        stopOpacity="1"
                      ></stop>
                    </linearGradient>
                    <mask
                      id="_r_v_m"
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
                        fill="url(#_r_v_f)"
                      ></rect>
                    </mask>
                    <filter
                      id="_r_v_n"
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
                        seed="4"
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
                      id="_r_v_s"
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
                    filter="url(#_r_v_s)"
                    transform="translate(0 10)"
                  >
                    <path
                      d="M100 32a68 68 0 1 0 0.01 0Z M100 66a34 34 0 1 1 -0.01 0Z"
                      fill="#05CF45"
                      fillRule="evenodd"
                    ></path>
                  </g>
                  <g mask="url(#_r_v_m)" filter="url(#_r_v_n)">
                    <path
                      d="M100 32a68 68 0 1 0 0.01 0Z M100 66a34 34 0 1 1 -0.01 0Z"
                      fill="url(#_r_v_g)"
                      fillRule="evenodd"
                    ></path>
                  </g>
                </svg>
                <div className="relative">
                  <span className="font-mono text-[12px] text-white/50">
                    02 / 08
                  </span>
                  <h2 className="mt-4 text-[30px] md:text-[36px]">
                    Engineering
                  </h2>
                  <p className="mt-3 max-w-sm text-[16px] text-white/70">
                    Software built like a product, not a project.
                  </p>
                </div>
                <div className="relative mt-8">
                  <a
                    href="/services/engineering"
                    className="group/btn relative isolate items-center overflow-hidden rounded-full font-display font-semibold tracking-[-0.01em] whitespace-nowrap select-none transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-40 aria-disabled:pointer-events-none aria-disabled:opacity-40 inline-flex bg-brand text-ink shadow-[0_12px_32px_-14px_rgba(5,207,69,0.75)] hover:shadow-[0_18px_44px_-12px_rgba(5,207,69,0.95)] h-[52px] text-[14.5px] pl-6 pr-[5px] gap-4"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -z-10 aspect-square rounded-full transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] top-[5px] bottom-[5px] right-[5px] bg-forest scale-100 group-hover/btn:scale-[26]"
                    ></span>
                    <span className="relative inline-flex items-center gap-2 transition-colors duration-300 group-hover/btn:text-white mr-auto">
                      Explore Engineering
                    </span>
                    <span className="relative grid shrink-0 place-items-center overflow-hidden rounded-full h-[42px] w-[42px] bg-forest text-white">
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
              <div className="p-6 md:p-10">
                <p className="text-[16px] text-muted">
                  Cross-functional squads of designers, engineers and QA
                  specialists who own outcomes from first sketch to scale. We
                  write clean, tested, documented code that your team will be
                  glad to inherit.
                </p>
                <div className="mt-6 grid gap-2 sm:grid-cols-2">
                  <a
                    href="/services/engineering/ux-ui-design"
                    className="group flex items-center justify-between rounded-2xl border border-line px-4 py-3 transition-colors hover:border-brand hover:bg-paper"
                  >
                    <span className="text-[14.5px] font-bold">
                      UX/UI Design
                    </span>
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
                      className="lucide lucide-arrow-right h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                  <a
                    href="/services/engineering/product-development"
                    className="group flex items-center justify-between rounded-2xl border border-line px-4 py-3 transition-colors hover:border-brand hover:bg-paper"
                  >
                    <span className="text-[14.5px] font-bold">
                      Product Development
                    </span>
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
                      className="lucide lucide-arrow-right h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                  <a
                    href="/services/engineering/application-modernization"
                    className="group flex items-center justify-between rounded-2xl border border-line px-4 py-3 transition-colors hover:border-brand hover:bg-paper"
                  >
                    <span className="text-[14.5px] font-bold">
                      Application Modernization
                    </span>
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
                      className="lucide lucide-arrow-right h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                  <a
                    href="/services/engineering/quality-assurance-and-continuous-delivery"
                    className="group flex items-center justify-between rounded-2xl border border-line px-4 py-3 transition-colors hover:border-brand hover:bg-paper"
                  >
                    <span className="text-[14.5px] font-bold">
                      Quality Assurance &amp; Continuous Delivery
                    </span>
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
                      className="lucide lucide-arrow-right h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                  <a
                    href="/services/engineering/poc-mvp-development"
                    className="group flex items-center justify-between rounded-2xl border border-line px-4 py-3 transition-colors hover:border-brand hover:bg-paper"
                  >
                    <span className="text-[14.5px] font-bold">
                      POC / MVP Development
                    </span>
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
                      className="lucide lucide-arrow-right h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                  <a
                    href="/services/engineering/application-development"
                    className="group flex items-center justify-between rounded-2xl border border-line px-4 py-3 transition-colors hover:border-brand hover:bg-paper"
                  >
                    <span className="text-[14.5px] font-bold">
                      Application Development
                    </span>
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
                      className="lucide lucide-arrow-right h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                  <a
                    href="/services/engineering/ai-development-services"
                    className="group flex items-center justify-between rounded-2xl border border-line px-4 py-3 transition-colors hover:border-brand hover:bg-paper"
                  >
                    <span className="text-[14.5px] font-bold">
                      AI Development Services
                    </span>
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
                      className="lucide lucide-arrow-right h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="reveal in" style={{ transitionDelay: "0ms" }}>
            <div className="grid overflow-hidden rounded-[28px] border border-line bg-white shadow-soft lg:grid-cols-[1fr_1.3fr]">
              <div className="relative flex min-h-[280px] flex-col justify-between overflow-hidden bg-forest p-8 text-white md:p-10">
                <div className="absolute -right-10 -top-10 h-60 w-60 rounded-full bg-brand/30 blur-3xl"></div>
                <svg
                  viewBox="-20 -20 240 240"
                  className="absolute -bottom-8 -right-8 h-52 w-52 animate-float-rot opacity-95"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="_r_10_g" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#3DF06F"></stop>
                      <stop offset="45%" stopColor="#05CF45"></stop>
                      <stop offset="100%" stopColor="#1B3329"></stop>
                    </linearGradient>
                    <linearGradient id="_r_10_f" x1="0" y1="1" x2="1" y2="0.2">
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
                      <stop
                        offset="100%"
                        stopColor="#fff"
                        stopOpacity="1"
                      ></stop>
                    </linearGradient>
                    <mask
                      id="_r_10_m"
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
                        fill="url(#_r_10_f)"
                      ></rect>
                    </mask>
                    <filter
                      id="_r_10_n"
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
                        seed="5"
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
                      id="_r_10_s"
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
                    filter="url(#_r_10_s)"
                    transform="translate(0 10)"
                  >
                    <path
                      d="M104 30 A70 70 0 1 1 34 100 L34 30 A70 70 0 0 1 104 100 Z"
                      fill="#05CF45"
                    ></path>
                  </g>
                  <g mask="url(#_r_10_m)" filter="url(#_r_10_n)">
                    <path
                      d="M104 30 A70 70 0 1 1 34 100 L34 30 A70 70 0 0 1 104 100 Z"
                      fill="url(#_r_10_g)"
                    ></path>
                  </g>
                </svg>
                <div className="relative">
                  <span className="font-mono text-[12px] text-white/50">
                    03 / 08
                  </span>
                  <h2 className="mt-4 text-[30px] md:text-[36px]">
                    Advisory &amp; Strategy
                  </h2>
                  <p className="mt-3 max-w-sm text-[16px] text-white/70">
                    Clear decisions before costly commitments.
                  </p>
                </div>
                <div className="relative mt-8">
                  <a
                    href="/services/advisory-strategy"
                    className="group/btn relative isolate items-center overflow-hidden rounded-full font-display font-semibold tracking-[-0.01em] whitespace-nowrap select-none transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-40 aria-disabled:pointer-events-none aria-disabled:opacity-40 inline-flex bg-brand text-ink shadow-[0_12px_32px_-14px_rgba(5,207,69,0.75)] hover:shadow-[0_18px_44px_-12px_rgba(5,207,69,0.95)] h-[52px] text-[14.5px] pl-6 pr-[5px] gap-4"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -z-10 aspect-square rounded-full transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] top-[5px] bottom-[5px] right-[5px] bg-forest scale-100 group-hover/btn:scale-[26]"
                    ></span>
                    <span className="relative inline-flex items-center gap-2 transition-colors duration-300 group-hover/btn:text-white mr-auto">
                      Explore Advisory
                    </span>
                    <span className="relative grid shrink-0 place-items-center overflow-hidden rounded-full h-[42px] w-[42px] bg-forest text-white">
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
              <div className="p-6 md:p-10">
                <p className="text-[16px] text-muted">
                  Our principals have led engineering at scale-ups and Fortune
                  500s. We help you decide what to build, what to buy, and how
                  to sequence change so value lands early and risk stays
                  contained.
                </p>
                <div className="mt-6 grid gap-2 sm:grid-cols-2">
                  <a
                    href="/services/advisory-strategy/digital-transformation-consulting"
                    className="group flex items-center justify-between rounded-2xl border border-line px-4 py-3 transition-colors hover:border-brand hover:bg-paper"
                  >
                    <span className="text-[14.5px] font-bold">
                      Digital Transformation Consulting
                    </span>
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
                      className="lucide lucide-arrow-right h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                  <a
                    href="/services/advisory-strategy/technology-roadmapping"
                    className="group flex items-center justify-between rounded-2xl border border-line px-4 py-3 transition-colors hover:border-brand hover:bg-paper"
                  >
                    <span className="text-[14.5px] font-bold">
                      Technology Roadmapping
                    </span>
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
                      className="lucide lucide-arrow-right h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                  <a
                    href="/services/advisory-strategy/fractional-cto"
                    className="group flex items-center justify-between rounded-2xl border border-line px-4 py-3 transition-colors hover:border-brand hover:bg-paper"
                  >
                    <span className="text-[14.5px] font-bold">
                      Fractional CTO
                    </span>
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
                      className="lucide lucide-arrow-right h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                  <a
                    href="/services/advisory-strategy/product-strategy"
                    className="group flex items-center justify-between rounded-2xl border border-line px-4 py-3 transition-colors hover:border-brand hover:bg-paper"
                  >
                    <span className="text-[14.5px] font-bold">
                      Product Strategy
                    </span>
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
                      className="lucide lucide-arrow-right h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                  <a
                    href="/services/advisory-strategy/architecture-review"
                    className="group flex items-center justify-between rounded-2xl border border-line px-4 py-3 transition-colors hover:border-brand hover:bg-paper"
                  >
                    <span className="text-[14.5px] font-bold">
                      Architecture Review
                    </span>
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
                      className="lucide lucide-arrow-right h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="reveal in" style={{ transitionDelay: "0ms" }}>
            <div className="grid overflow-hidden rounded-[28px] border border-line bg-white shadow-soft lg:grid-cols-[1fr_1.3fr]">
              <div className="relative flex min-h-[280px] flex-col justify-between overflow-hidden bg-forest p-8 text-white md:p-10 lg:order-2">
                <div className="absolute -right-10 -top-10 h-60 w-60 rounded-full bg-brand/30 blur-3xl"></div>
                <svg
                  viewBox="-20 -20 240 240"
                  className="absolute -bottom-8 -right-8 h-52 w-52 animate-float-rot opacity-95"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="_r_11_g" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#3DF06F"></stop>
                      <stop offset="45%" stopColor="#05CF45"></stop>
                      <stop offset="100%" stopColor="#1B3329"></stop>
                    </linearGradient>
                    <linearGradient
                      id="_r_11_f"
                      x1="0.5"
                      y1="0"
                      x2="0.5"
                      y2="1"
                    >
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
                      <stop
                        offset="100%"
                        stopColor="#fff"
                        stopOpacity="1"
                      ></stop>
                    </linearGradient>
                    <mask
                      id="_r_11_m"
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
                        fill="url(#_r_11_f)"
                      ></rect>
                    </mask>
                    <filter
                      id="_r_11_n"
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
                        seed="6"
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
                      id="_r_11_s"
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
                    filter="url(#_r_11_s)"
                    transform="translate(0 10)"
                  >
                    <path
                      d="M100 22 C128 38 152 42 168 42 C170 112 148 154 100 180 C52 154 30 112 32 42 C48 42 72 38 100 22Z"
                      fill="#05CF45"
                    ></path>
                  </g>
                  <g mask="url(#_r_11_m)" filter="url(#_r_11_n)">
                    <path
                      d="M100 22 C128 38 152 42 168 42 C170 112 148 154 100 180 C52 154 30 112 32 42 C48 42 72 38 100 22Z"
                      fill="url(#_r_11_g)"
                    ></path>
                  </g>
                </svg>
                <div className="relative">
                  <span className="font-mono text-[12px] text-white/50">
                    04 / 08
                  </span>
                  <h2 className="mt-4 text-[30px] md:text-[36px]">
                    Cybersecurity
                  </h2>
                  <p className="mt-3 max-w-sm text-[16px] text-white/70">
                    Defend what matters. Prove it to auditors.
                  </p>
                </div>
                <div className="relative mt-8">
                  <a
                    href="/services/cybersecurity"
                    className="group/btn relative isolate items-center overflow-hidden rounded-full font-display font-semibold tracking-[-0.01em] whitespace-nowrap select-none transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-40 aria-disabled:pointer-events-none aria-disabled:opacity-40 inline-flex bg-brand text-ink shadow-[0_12px_32px_-14px_rgba(5,207,69,0.75)] hover:shadow-[0_18px_44px_-12px_rgba(5,207,69,0.95)] h-[52px] text-[14.5px] pl-6 pr-[5px] gap-4"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -z-10 aspect-square rounded-full transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] top-[5px] bottom-[5px] right-[5px] bg-forest scale-100 group-hover/btn:scale-[26]"
                    ></span>
                    <span className="relative inline-flex items-center gap-2 transition-colors duration-300 group-hover/btn:text-white mr-auto">
                      Explore Cybersecurity
                    </span>
                    <span className="relative grid shrink-0 place-items-center overflow-hidden rounded-full h-[42px] w-[42px] bg-forest text-white">
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
              <div className="p-6 md:p-10">
                <p className="text-[16px] text-muted">
                  We combine offensive testing, secure engineering and
                  continuous monitoring to reduce your attack surface and keep
                  you audit-ready across SOC 2, ISO 27001, HIPAA and PCI DSS.
                </p>
                <div className="mt-6 grid gap-2 sm:grid-cols-2">
                  <a
                    href="/services/cybersecurity/application-security-and-pen-testing"
                    className="group flex items-center justify-between rounded-2xl border border-line px-4 py-3 transition-colors hover:border-brand hover:bg-paper"
                  >
                    <span className="text-[14.5px] font-bold">
                      Application Security &amp; Pen Testing
                    </span>
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
                      className="lucide lucide-arrow-right h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                  <a
                    href="/services/cybersecurity/cloud-security"
                    className="group flex items-center justify-between rounded-2xl border border-line px-4 py-3 transition-colors hover:border-brand hover:bg-paper"
                  >
                    <span className="text-[14.5px] font-bold">
                      Cloud Security
                    </span>
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
                      className="lucide lucide-arrow-right h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                  <a
                    href="/services/cybersecurity/security-audits-and-compliance"
                    className="group flex items-center justify-between rounded-2xl border border-line px-4 py-3 transition-colors hover:border-brand hover:bg-paper"
                  >
                    <span className="text-[14.5px] font-bold">
                      Security Audits &amp; Compliance
                    </span>
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
                      className="lucide lucide-arrow-right h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                  <a
                    href="/services/cybersecurity/managed-security-soc"
                    className="group flex items-center justify-between rounded-2xl border border-line px-4 py-3 transition-colors hover:border-brand hover:bg-paper"
                  >
                    <span className="text-[14.5px] font-bold">
                      Managed Security / SOC
                    </span>
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
                      className="lucide lucide-arrow-right h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                  <a
                    href="/services/cybersecurity/data-protection"
                    className="group flex items-center justify-between rounded-2xl border border-line px-4 py-3 transition-colors hover:border-brand hover:bg-paper"
                  >
                    <span className="text-[14.5px] font-bold">
                      Data Protection
                    </span>
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
                      className="lucide lucide-arrow-right h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="reveal in" style={{ transitionDelay: "0ms" }}>
            <div className="grid overflow-hidden rounded-[28px] border border-line bg-white shadow-soft lg:grid-cols-[1fr_1.3fr]">
              <div className="relative flex min-h-[280px] flex-col justify-between overflow-hidden bg-forest p-8 text-white md:p-10">
                <div className="absolute -right-10 -top-10 h-60 w-60 rounded-full bg-brand/30 blur-3xl"></div>
                <svg
                  viewBox="-20 -20 240 240"
                  className="absolute -bottom-8 -right-8 h-52 w-52 animate-float-rot opacity-95"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="_r_12_g" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#3DF06F"></stop>
                      <stop offset="45%" stopColor="#05CF45"></stop>
                      <stop offset="100%" stopColor="#1B3329"></stop>
                    </linearGradient>
                    <linearGradient id="_r_12_f" x1="0" y1="0" x2="1" y2="1">
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
                      <stop
                        offset="100%"
                        stopColor="#fff"
                        stopOpacity="1"
                      ></stop>
                    </linearGradient>
                    <mask
                      id="_r_12_m"
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
                        fill="url(#_r_12_f)"
                      ></rect>
                    </mask>
                    <filter
                      id="_r_12_n"
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
                        seed="7"
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
                      id="_r_12_s"
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
                    filter="url(#_r_12_s)"
                    transform="translate(0 10)"
                  >
                    <circle cx="70" cy="70" r="31" fill="#05CF45"></circle>
                    <circle cx="130" cy="70" r="31" fill="#05CF45"></circle>
                    <circle cx="70" cy="130" r="31" fill="#05CF45"></circle>
                    <circle cx="130" cy="130" r="31" fill="#05CF45"></circle>
                  </g>
                  <g mask="url(#_r_12_m)" filter="url(#_r_12_n)">
                    <circle
                      cx="70"
                      cy="70"
                      r="31"
                      fill="url(#_r_12_g)"
                    ></circle>
                    <circle
                      cx="130"
                      cy="70"
                      r="31"
                      fill="url(#_r_12_g)"
                    ></circle>
                    <circle
                      cx="70"
                      cy="130"
                      r="31"
                      fill="url(#_r_12_g)"
                    ></circle>
                    <circle
                      cx="130"
                      cy="130"
                      r="31"
                      fill="url(#_r_12_g)"
                    ></circle>
                  </g>
                </svg>
                <div className="relative">
                  <span className="font-mono text-[12px] text-white/50">
                    05 / 08
                  </span>
                  <h2 className="mt-4 text-[30px] md:text-[36px]">
                    Optimization &amp; Quality
                  </h2>
                  <p className="mt-3 max-w-sm text-[16px] text-white/70">
                    Make what you have faster, cheaper and safer to change.
                  </p>
                </div>
                <div className="relative mt-8">
                  <a
                    href="/services/optimization-quality"
                    className="group/btn relative isolate items-center overflow-hidden rounded-full font-display font-semibold tracking-[-0.01em] whitespace-nowrap select-none transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-40 aria-disabled:pointer-events-none aria-disabled:opacity-40 inline-flex bg-brand text-ink shadow-[0_12px_32px_-14px_rgba(5,207,69,0.75)] hover:shadow-[0_18px_44px_-12px_rgba(5,207,69,0.95)] h-[52px] text-[14.5px] pl-6 pr-[5px] gap-4"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -z-10 aspect-square rounded-full transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] top-[5px] bottom-[5px] right-[5px] bg-forest scale-100 group-hover/btn:scale-[26]"
                    ></span>
                    <span className="relative inline-flex items-center gap-2 transition-colors duration-300 group-hover/btn:text-white mr-auto">
                      Explore Optimization
                    </span>
                    <span className="relative grid shrink-0 place-items-center overflow-hidden rounded-full h-[42px] w-[42px] bg-forest text-white">
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
              <div className="p-6 md:p-10">
                <p className="text-[16px] text-muted">
                  Performance engineering, test automation and code health
                  programmes that pay back quickly. We measure first, fix what
                  matters and leave you with guardrails that keep quality high.
                </p>
                <div className="mt-6 grid gap-2 sm:grid-cols-2">
                  <a
                    href="/services/optimization-quality/performance-optimization"
                    className="group flex items-center justify-between rounded-2xl border border-line px-4 py-3 transition-colors hover:border-brand hover:bg-paper"
                  >
                    <span className="text-[14.5px] font-bold">
                      Performance Optimization
                    </span>
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
                      className="lucide lucide-arrow-right h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                  <a
                    href="/services/optimization-quality/software-testing-and-automation"
                    className="group flex items-center justify-between rounded-2xl border border-line px-4 py-3 transition-colors hover:border-brand hover:bg-paper"
                  >
                    <span className="text-[14.5px] font-bold">
                      Software Testing &amp; Automation
                    </span>
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
                      className="lucide lucide-arrow-right h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                  <a
                    href="/services/optimization-quality/code-audit"
                    className="group flex items-center justify-between rounded-2xl border border-line px-4 py-3 transition-colors hover:border-brand hover:bg-paper"
                  >
                    <span className="text-[14.5px] font-bold">Code Audit</span>
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
                      className="lucide lucide-arrow-right h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                  <a
                    href="/services/optimization-quality/technical-debt-reduction"
                    className="group flex items-center justify-between rounded-2xl border border-line px-4 py-3 transition-colors hover:border-brand hover:bg-paper"
                  >
                    <span className="text-[14.5px] font-bold">
                      Technical Debt Reduction
                    </span>
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
                      className="lucide lucide-arrow-right h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                  <a
                    href="/services/optimization-quality/process-optimization"
                    className="group flex items-center justify-between rounded-2xl border border-line px-4 py-3 transition-colors hover:border-brand hover:bg-paper"
                  >
                    <span className="text-[14.5px] font-bold">
                      Process Optimization
                    </span>
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
                      className="lucide lucide-arrow-right h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="reveal in" style={{ transitionDelay: "0ms" }}>
            <div className="grid overflow-hidden rounded-[28px] border border-line bg-white shadow-soft lg:grid-cols-[1fr_1.3fr]">
              <div className="relative flex min-h-[280px] flex-col justify-between overflow-hidden bg-forest p-8 text-white md:p-10 lg:order-2">
                <div className="absolute -right-10 -top-10 h-60 w-60 rounded-full bg-brand/30 blur-3xl"></div>
                <svg
                  viewBox="-20 -20 240 240"
                  className="absolute -bottom-8 -right-8 h-52 w-52 animate-float-rot opacity-95"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="_r_13_g" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#3DF06F"></stop>
                      <stop offset="45%" stopColor="#05CF45"></stop>
                      <stop offset="100%" stopColor="#1B3329"></stop>
                    </linearGradient>
                    <linearGradient id="_r_13_f" x1="0" y1="0.4" x2="1" y2="1">
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
                      <stop
                        offset="100%"
                        stopColor="#fff"
                        stopOpacity="1"
                      ></stop>
                    </linearGradient>
                    <mask
                      id="_r_13_m"
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
                        fill="url(#_r_13_f)"
                      ></rect>
                    </mask>
                    <filter
                      id="_r_13_n"
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
                      id="_r_13_s"
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
                    filter="url(#_r_13_s)"
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
                  <g mask="url(#_r_13_m)" filter="url(#_r_13_n)">
                    <circle
                      cx="66"
                      cy="118"
                      r="34"
                      fill="url(#_r_13_g)"
                      opacity="0.75"
                    ></circle>
                    <circle
                      cx="140"
                      cy="114"
                      r="38"
                      fill="url(#_r_13_g)"
                      opacity="0.85"
                    ></circle>
                    <circle
                      cx="102"
                      cy="86"
                      r="46"
                      fill="url(#_r_13_g)"
                    ></circle>
                    <rect
                      x="40"
                      y="112"
                      width="128"
                      height="46"
                      rx="23"
                      fill="url(#_r_13_g)"
                    ></rect>
                  </g>
                </svg>
                <div className="relative">
                  <span className="font-mono text-[12px] text-white/50">
                    06 / 08
                  </span>
                  <h2 className="mt-4 text-[30px] md:text-[36px]">
                    Cloud &amp; Infrastructure
                  </h2>
                  <p className="mt-3 max-w-sm text-[16px] text-white/70">
                    Cloud that scales with you, not your bill.
                  </p>
                </div>
                <div className="relative mt-8">
                  <a
                    href="/services/cloud-infrastructure"
                    className="group/btn relative isolate items-center overflow-hidden rounded-full font-display font-semibold tracking-[-0.01em] whitespace-nowrap select-none transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-40 aria-disabled:pointer-events-none aria-disabled:opacity-40 inline-flex bg-brand text-ink shadow-[0_12px_32px_-14px_rgba(5,207,69,0.75)] hover:shadow-[0_18px_44px_-12px_rgba(5,207,69,0.95)] h-[52px] text-[14.5px] pl-6 pr-[5px] gap-4"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -z-10 aspect-square rounded-full transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] top-[5px] bottom-[5px] right-[5px] bg-forest scale-100 group-hover/btn:scale-[26]"
                    ></span>
                    <span className="relative inline-flex items-center gap-2 transition-colors duration-300 group-hover/btn:text-white mr-auto">
                      Explore Cloud
                    </span>
                    <span className="relative grid shrink-0 place-items-center overflow-hidden rounded-full h-[42px] w-[42px] bg-forest text-white">
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
              <div className="p-6 md:p-10">
                <p className="text-[16px] text-muted">
                  Certified architects across AWS, Azure and Google Cloud who
                  plan migrations, build platforms and run operations with clear
                  SLAs and relentless attention to cost.
                </p>
                <div className="mt-6 grid gap-2 sm:grid-cols-2">
                  <a
                    href="/services/cloud-infrastructure/cloud-strategy-and-architecture"
                    className="group flex items-center justify-between rounded-2xl border border-line px-4 py-3 transition-colors hover:border-brand hover:bg-paper"
                  >
                    <span className="text-[14.5px] font-bold">
                      Cloud Strategy &amp; Architecture
                    </span>
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
                      className="lucide lucide-arrow-right h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                  <a
                    href="/services/cloud-infrastructure/cloud-migration"
                    className="group flex items-center justify-between rounded-2xl border border-line px-4 py-3 transition-colors hover:border-brand hover:bg-paper"
                  >
                    <span className="text-[14.5px] font-bold">
                      Cloud Migration
                    </span>
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
                      className="lucide lucide-arrow-right h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                  <a
                    href="/services/cloud-infrastructure/devops-and-ci-cd"
                    className="group flex items-center justify-between rounded-2xl border border-line px-4 py-3 transition-colors hover:border-brand hover:bg-paper"
                  >
                    <span className="text-[14.5px] font-bold">
                      DevOps &amp; CI/CD
                    </span>
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
                      className="lucide lucide-arrow-right h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                  <a
                    href="/services/cloud-infrastructure/managed-cloud-operations"
                    className="group flex items-center justify-between rounded-2xl border border-line px-4 py-3 transition-colors hover:border-brand hover:bg-paper"
                  >
                    <span className="text-[14.5px] font-bold">
                      Managed Cloud Operations
                    </span>
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
                      className="lucide lucide-arrow-right h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                  <a
                    href="/services/cloud-infrastructure/infrastructure-modernization"
                    className="group flex items-center justify-between rounded-2xl border border-line px-4 py-3 transition-colors hover:border-brand hover:bg-paper"
                  >
                    <span className="text-[14.5px] font-bold">
                      Infrastructure Modernization
                    </span>
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
                      className="lucide lucide-arrow-right h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                  <a
                    href="/services/cloud-infrastructure/finops-cost-optimization"
                    className="group flex items-center justify-between rounded-2xl border border-line px-4 py-3 transition-colors hover:border-brand hover:bg-paper"
                  >
                    <span className="text-[14.5px] font-bold">
                      FinOps / Cost Optimization
                    </span>
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
                      className="lucide lucide-arrow-right h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                  <a
                    href="/services/cloud-infrastructure/multi-cloud-aws-azure-gcp"
                    className="group flex items-center justify-between rounded-2xl border border-line px-4 py-3 transition-colors hover:border-brand hover:bg-paper"
                  >
                    <span className="text-[14.5px] font-bold">
                      Multi-Cloud (AWS, Azure, GCP)
                    </span>
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
                      className="lucide lucide-arrow-right h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="reveal in" style={{ transitionDelay: "0ms" }}>
            <div className="grid overflow-hidden rounded-[28px] border border-line bg-white shadow-soft lg:grid-cols-[1fr_1.3fr]">
              <div className="relative flex min-h-[280px] flex-col justify-between overflow-hidden bg-forest p-8 text-white md:p-10">
                <div className="absolute -right-10 -top-10 h-60 w-60 rounded-full bg-brand/30 blur-3xl"></div>
                <svg
                  viewBox="-20 -20 240 240"
                  className="absolute -bottom-8 -right-8 h-52 w-52 animate-float-rot opacity-95"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="_r_14_g" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#3DF06F"></stop>
                      <stop offset="45%" stopColor="#05CF45"></stop>
                      <stop offset="100%" stopColor="#1B3329"></stop>
                    </linearGradient>
                    <linearGradient
                      id="_r_14_f"
                      x1="0.5"
                      y1="0"
                      x2="0.5"
                      y2="1"
                    >
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
                      <stop
                        offset="100%"
                        stopColor="#fff"
                        stopOpacity="1"
                      ></stop>
                    </linearGradient>
                    <mask
                      id="_r_14_m"
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
                        fill="url(#_r_14_f)"
                      ></rect>
                    </mask>
                    <filter
                      id="_r_14_n"
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
                        seed="9"
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
                      id="_r_14_s"
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
                    filter="url(#_r_14_s)"
                    transform="translate(0 10)"
                  >
                    <path
                      d="M70 24h60a24 24 0 0 1 24 24v104a24 24 0 0 1-24 24H70a24 24 0 0 1-24-24V48a24 24 0 0 1 24-24Z M74 46h52a8 8 0 0 1 8 8v86a8 8 0 0 1-8 8H74a8 8 0 0 1-8-8V54a8 8 0 0 1 8-8Z M88 158h24a4 4 0 0 1 0 8H88a4 4 0 0 1 0-8Z"
                      fill="#05CF45"
                      fillRule="evenodd"
                    ></path>
                  </g>
                  <g mask="url(#_r_14_m)" filter="url(#_r_14_n)">
                    <path
                      d="M70 24h60a24 24 0 0 1 24 24v104a24 24 0 0 1-24 24H70a24 24 0 0 1-24-24V48a24 24 0 0 1 24-24Z M74 46h52a8 8 0 0 1 8 8v86a8 8 0 0 1-8 8H74a8 8 0 0 1-8-8V54a8 8 0 0 1 8-8Z M88 158h24a4 4 0 0 1 0 8H88a4 4 0 0 1 0-8Z"
                      fill="url(#_r_14_g)"
                      fillRule="evenodd"
                    ></path>
                  </g>
                </svg>
                <div className="relative">
                  <span className="font-mono text-[12px] text-white/50">
                    07 / 08
                  </span>
                  <h2 className="mt-4 text-[30px] md:text-[36px]">
                    Digital Experience
                  </h2>
                  <p className="mt-3 max-w-sm text-[16px] text-white/70">
                    Experiences that look sharp and convert harder.
                  </p>
                </div>
                <div className="relative mt-8">
                  <a
                    href="/services/digital-experience"
                    className="group/btn relative isolate items-center overflow-hidden rounded-full font-display font-semibold tracking-[-0.01em] whitespace-nowrap select-none transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-40 aria-disabled:pointer-events-none aria-disabled:opacity-40 inline-flex bg-brand text-ink shadow-[0_12px_32px_-14px_rgba(5,207,69,0.75)] hover:shadow-[0_18px_44px_-12px_rgba(5,207,69,0.95)] h-[52px] text-[14.5px] pl-6 pr-[5px] gap-4"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -z-10 aspect-square rounded-full transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] top-[5px] bottom-[5px] right-[5px] bg-forest scale-100 group-hover/btn:scale-[26]"
                    ></span>
                    <span className="relative inline-flex items-center gap-2 transition-colors duration-300 group-hover/btn:text-white mr-auto">
                      Explore Digital
                    </span>
                    <span className="relative grid shrink-0 place-items-center overflow-hidden rounded-full h-[42px] w-[42px] bg-forest text-white">
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
              <div className="p-6 md:p-10">
                <p className="text-[16px] text-muted">
                  Brand, design and engineering under one roof. We build fast,
                  accessible websites, apps and storefronts that are a pleasure
                  to use and easy for your teams to manage.
                </p>
                <div className="mt-6 grid gap-2 sm:grid-cols-2">
                  <a
                    href="/services/digital-experience/web-development"
                    className="group flex items-center justify-between rounded-2xl border border-line px-4 py-3 transition-colors hover:border-brand hover:bg-paper"
                  >
                    <span className="text-[14.5px] font-bold">
                      Web Development
                    </span>
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
                      className="lucide lucide-arrow-right h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                  <a
                    href="/services/digital-experience/mobile-app-development"
                    className="group flex items-center justify-between rounded-2xl border border-line px-4 py-3 transition-colors hover:border-brand hover:bg-paper"
                  >
                    <span className="text-[14.5px] font-bold">
                      Mobile App Development
                    </span>
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
                      className="lucide lucide-arrow-right h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                  <a
                    href="/services/digital-experience/e-commerce-solutions"
                    className="group flex items-center justify-between rounded-2xl border border-line px-4 py-3 transition-colors hover:border-brand hover:bg-paper"
                  >
                    <span className="text-[14.5px] font-bold">
                      E-commerce Solutions
                    </span>
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
                      className="lucide lucide-arrow-right h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                  <a
                    href="/services/digital-experience/cms-and-headless"
                    className="group flex items-center justify-between rounded-2xl border border-line px-4 py-3 transition-colors hover:border-brand hover:bg-paper"
                  >
                    <span className="text-[14.5px] font-bold">
                      CMS &amp; Headless
                    </span>
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
                      className="lucide lucide-arrow-right h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                  <a
                    href="/services/digital-experience/digital-marketing"
                    className="group flex items-center justify-between rounded-2xl border border-line px-4 py-3 transition-colors hover:border-brand hover:bg-paper"
                  >
                    <span className="text-[14.5px] font-bold">
                      Digital Marketing
                    </span>
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
                      className="lucide lucide-arrow-right h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                  <a
                    href="/services/digital-experience/branding-and-design"
                    className="group flex items-center justify-between rounded-2xl border border-line px-4 py-3 transition-colors hover:border-brand hover:bg-paper"
                  >
                    <span className="text-[14.5px] font-bold">
                      Branding &amp; Design
                    </span>
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
                      className="lucide lucide-arrow-right h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="reveal in" style={{ transitionDelay: "0ms" }}>
            <div className="grid overflow-hidden rounded-[28px] border border-line bg-white shadow-soft lg:grid-cols-[1fr_1.3fr]">
              <div className="relative flex min-h-[280px] flex-col justify-between overflow-hidden bg-forest p-8 text-white md:p-10 lg:order-2">
                <div className="absolute -right-10 -top-10 h-60 w-60 rounded-full bg-brand/30 blur-3xl"></div>
                <svg
                  viewBox="-20 -20 240 240"
                  className="absolute -bottom-8 -right-8 h-52 w-52 animate-float-rot opacity-95"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="_r_15_g" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#3DF06F"></stop>
                      <stop offset="45%" stopColor="#05CF45"></stop>
                      <stop offset="100%" stopColor="#1B3329"></stop>
                    </linearGradient>
                    <linearGradient id="_r_15_f" x1="1" y1="0" x2="0" y2="1">
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
                      <stop
                        offset="100%"
                        stopColor="#fff"
                        stopOpacity="1"
                      ></stop>
                    </linearGradient>
                    <mask
                      id="_r_15_m"
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
                        fill="url(#_r_15_f)"
                      ></rect>
                    </mask>
                    <filter
                      id="_r_15_n"
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
                        seed="10"
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
                      id="_r_15_s"
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
                    filter="url(#_r_15_s)"
                    transform="translate(0 10)"
                  >
                    <path
                      d="M100 58 L56 140 L144 140 Z"
                      fill="none"
                      stroke="#05CF45"
                      strokeWidth="12"
                      strokeLinejoin="round"
                    ></path>
                    <circle cx="100" cy="54" r="28" fill="#05CF45"></circle>
                    <circle cx="54" cy="142" r="28" fill="#05CF45"></circle>
                    <circle cx="146" cy="142" r="28" fill="#05CF45"></circle>
                  </g>
                  <g mask="url(#_r_15_m)" filter="url(#_r_15_n)">
                    <path
                      d="M100 58 L56 140 L144 140 Z"
                      fill="none"
                      stroke="url(#_r_15_g)"
                      strokeWidth="12"
                      strokeLinejoin="round"
                    ></path>
                    <circle
                      cx="100"
                      cy="54"
                      r="28"
                      fill="url(#_r_15_g)"
                    ></circle>
                    <circle
                      cx="54"
                      cy="142"
                      r="28"
                      fill="url(#_r_15_g)"
                    ></circle>
                    <circle
                      cx="146"
                      cy="142"
                      r="28"
                      fill="url(#_r_15_g)"
                    ></circle>
                  </g>
                </svg>
                <div className="relative">
                  <span className="font-mono text-[12px] text-white/50">
                    08 / 08
                  </span>
                  <h2 className="mt-4 text-[30px] md:text-[36px]">
                    Business Process Services
                  </h2>
                  <p className="mt-3 max-w-sm text-[16px] text-white/70">
                    The right people, in place, in weeks.
                  </p>
                </div>
                <div className="relative mt-8">
                  <a
                    href="/services/business-process-services"
                    className="group/btn relative isolate items-center overflow-hidden rounded-full font-display font-semibold tracking-[-0.01em] whitespace-nowrap select-none transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-40 aria-disabled:pointer-events-none aria-disabled:opacity-40 inline-flex bg-brand text-ink shadow-[0_12px_32px_-14px_rgba(5,207,69,0.75)] hover:shadow-[0_18px_44px_-12px_rgba(5,207,69,0.95)] h-[52px] text-[14.5px] pl-6 pr-[5px] gap-4"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -z-10 aspect-square rounded-full transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] top-[5px] bottom-[5px] right-[5px] bg-forest scale-100 group-hover/btn:scale-[26]"
                    ></span>
                    <span className="relative inline-flex items-center gap-2 transition-colors duration-300 group-hover/btn:text-white mr-auto">
                      Explore Business
                    </span>
                    <span className="relative grid shrink-0 place-items-center overflow-hidden rounded-full h-[42px] w-[42px] bg-forest text-white">
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
              <div className="p-6 md:p-10">
                <p className="text-[16px] text-muted">
                  Scale your engineering capacity with vetted specialists who
                  work in your rituals and time zone, or stand up a fully
                  managed offshore centre with governance built in.
                </p>
                <div className="mt-6 grid gap-2 sm:grid-cols-2">
                  <a
                    href="/services/business-process-services/staff-augmentation-dedicated-teams"
                    className="group flex items-center justify-between rounded-2xl border border-line px-4 py-3 transition-colors hover:border-brand hover:bg-paper"
                  >
                    <span className="text-[14.5px] font-bold">
                      Staff Augmentation / Dedicated Teams
                    </span>
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
                      className="lucide lucide-arrow-right h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                  <a
                    href="/services/business-process-services/offshore-development-center"
                    className="group flex items-center justify-between rounded-2xl border border-line px-4 py-3 transition-colors hover:border-brand hover:bg-paper"
                  >
                    <span className="text-[14.5px] font-bold">
                      Offshore Development Center
                    </span>
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
                      className="lucide lucide-arrow-right h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                  <a
                    href="/services/business-process-services/it-support"
                    className="group flex items-center justify-between rounded-2xl border border-line px-4 py-3 transition-colors hover:border-brand hover:bg-paper"
                  >
                    <span className="text-[14.5px] font-bold">IT Support</span>
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
                      className="lucide lucide-arrow-right h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                  <a
                    href="/services/business-process-services/recruitment-support"
                    className="group flex items-center justify-between rounded-2xl border border-line px-4 py-3 transition-colors hover:border-brand hover:bg-paper"
                  >
                    <span className="text-[14.5px] font-bold">
                      Recruitment Support
                    </span>
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
                      className="lucide lucide-arrow-right h-4 w-4 shrink-0 text-brand transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
