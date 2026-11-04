export default function Section02() {
  return (
    <section className="bg-white text-ink py-20 md:py-28 lg:py-32 relative !pt-0">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <section id="01" className="border-t border-line py-16 first:border-0">
          <div className="mb-8 flex items-baseline gap-4">
            <span className="font-mono text-[12px] text-muted">01</span>
            <h2 className="text-[32px]">Colors</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="overflow-hidden rounded-[20px] border border-line">
              <div className="flex h-32 items-end p-4 font-mono text-[13px] font-medium bg-brand text-ink">
                #05CF45
              </div>
              <div className="p-4">
                <div className="font-bold">Brand Green</div>
                <div className="text-[13.5px] text-muted">
                  CTAs, highlights, active states
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-[20px] border border-line">
              <div className="flex h-32 items-end p-4 font-mono text-[13px] font-medium bg-forest text-white">
                #1B3329
              </div>
              <div className="p-4">
                <div className="font-bold">Deep Green</div>
                <div className="text-[13.5px] text-muted">
                  Dark sections, footer, hover
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-[20px] border border-line">
              <div className="flex h-32 items-end p-4 font-mono text-[13px] font-medium bg-ink text-white">
                #111111
              </div>
              <div className="p-4">
                <div className="font-bold">Near Black</div>
                <div className="text-[13.5px] text-muted">
                  Headings, body, dark sections
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-[20px] border border-line">
              <div className="flex h-32 items-end p-4 font-mono text-[13px] font-medium bg-paper text-ink border border-line">
                #F9F9F9
              </div>
              <div className="p-4">
                <div className="font-bold">Paper</div>
                <div className="text-[13.5px] text-muted">
                  Main page background
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-[20px] border border-line">
              <div className="flex h-32 items-end p-4 font-mono text-[13px] font-medium bg-white text-ink border border-line">
                #FFFFFF
              </div>
              <div className="p-4">
                <div className="font-bold">White</div>
                <div className="text-[13.5px] text-muted">
                  Cards on paper only
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-[20px] border border-line">
              <div className="flex h-32 items-end p-4 font-mono text-[13px] font-medium bg-line text-ink">
                #E7E9E8
              </div>
              <div className="p-4">
                <div className="font-bold">Line</div>
                <div className="text-[13.5px] text-muted">
                  Borders &amp; dividers
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-[20px] border border-line">
              <div className="flex h-32 items-end p-4 font-mono text-[13px] font-medium bg-muted text-white">
                #5B625F
              </div>
              <div className="p-4">
                <div className="font-bold">Muted</div>
                <div className="text-[13.5px] text-muted">
                  Secondary text (AA on paper)
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-[20px] border border-line">
              <div className="h-32 bg-gradient-to-br from-forest to-ink p-4">
                <div className="h-full w-full rounded-xl bg-[radial-gradient(circle_at_80%_20%,rgba(5,207,69,0.6),transparent_60%)]"></div>
              </div>
              <div className="p-4">
                <div className="font-bold">Glow gradients</div>
                <div className="text-[13.5px] text-muted">
                  #1B3329 → #111111 + green glow
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 text-[13.5px]">
            <span className="rounded-full bg-paper px-3 py-1.5 font-bold">
              Ratio · 60% light / 25% dark / 15% accent
            </span>
            <span className="rounded-full bg-paper px-3 py-1.5 font-bold">
              Text on green = #111111 (AA 9.6:1)
            </span>
            <span className="rounded-full bg-paper px-3 py-1.5 font-bold">
              Green never used for long body text
            </span>
          </div>
        </section>
        <section id="02" className="border-t border-line py-16 first:border-0">
          <div className="mb-8 flex items-baseline gap-4">
            <span className="font-mono text-[12px] text-muted">02</span>
            <h2 className="text-[32px]">Typography</h2>
          </div>
          <div className="flex flex-col divide-y divide-line">
            <div className="grid gap-2 py-6 md:grid-cols-[200px_1fr] md:items-center">
              <div>
                <div className="font-bold">Display / H1</div>
                <div className="font-mono text-[12px] text-muted">
                  64–84px · Helios Extended 700 · -3%
                </div>
              </div>
              <div className="font-display font-bold tracking-[-0.03em] leading-none text-[44px] md:text-[76px]">
                Engineering intelligence
              </div>
            </div>
            <div className="grid gap-2 py-6 md:grid-cols-[200px_1fr] md:items-center">
              <div>
                <div className="font-bold">H2</div>
                <div className="font-mono text-[12px] text-muted">
                  44–56px · Helios Extended 700 · -3%
                </div>
              </div>
              <div className="font-display font-bold tracking-[-0.03em] leading-none text-[36px] md:text-[52px]">
                Engineering intelligence
              </div>
            </div>
            <div className="grid gap-2 py-6 md:grid-cols-[200px_1fr] md:items-center">
              <div>
                <div className="font-bold">H3</div>
                <div className="font-mono text-[12px] text-muted">
                  28–32px · Helios Extended 700 · -3%
                </div>
              </div>
              <div className="font-display font-bold tracking-[-0.03em] leading-none text-[30px]">
                Engineering intelligence
              </div>
            </div>
            <div className="grid gap-2 py-6 md:grid-cols-[200px_1fr] md:items-center">
              <div>
                <div className="font-bold">H4</div>
                <div className="font-mono text-[12px] text-muted">
                  20px · Helios Extended 700 · -2%
                </div>
              </div>
              <div className="font-display font-bold tracking-[-0.03em] leading-none text-[20px]">
                Engineering intelligence
              </div>
            </div>
            <div className="grid gap-2 py-6 md:grid-cols-[200px_1fr]">
              <div>
                <div className="font-bold">Body</div>
                <div className="font-mono text-[12px] text-muted">
                  16–18px · Nunito 400–700 · 1.6
                </div>
              </div>
              <p className="max-w-2xl text-[17px]">
                We design, build and run AI-powered products for ambitious
                companies, from first prototype to platforms serving millions.{" "}
                <b>Bold 700</b>,{" "}
                <span className="font-semibold">Semibold 600</span>,{" "}
                <span className="font-medium">Medium 500</span>.
              </p>
            </div>
            <div className="grid gap-2 py-6 md:grid-cols-[200px_1fr] md:items-center">
              <div>
                <div className="font-bold">Eyebrow</div>
                <div className="font-mono text-[12px] text-muted">
                  11.5px · Mono · +18% · uppercase
                </div>
              </div>
              <div>
                <span className="inline-flex items-center gap-2 font-mono text-[11.5px] font-medium uppercase tracking-[0.18em] text-muted">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-brand"
                    aria-hidden="true"
                  ></span>
                  Section label
                </span>
              </div>
            </div>
          </div>
        </section>
        <section id="03" className="border-t border-line py-16 first:border-0">
          <div className="mb-8 flex items-baseline gap-4">
            <span className="font-mono text-[12px] text-muted">03</span>
            <h2 className="text-[32px]">Buttons</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[20px] border border-line p-6">
              <div className="mb-4 text-[13px] font-bold text-muted">
                Variants · light
              </div>
              <div className="flex flex-wrap gap-3">
                <button className="group/btn relative isolate items-center overflow-hidden rounded-full font-display font-semibold tracking-[-0.01em] whitespace-nowrap select-none transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-40 aria-disabled:pointer-events-none aria-disabled:opacity-40 inline-flex bg-brand text-ink shadow-[0_12px_32px_-14px_rgba(5,207,69,0.75)] hover:shadow-[0_18px_44px_-12px_rgba(5,207,69,0.95)] h-[52px] text-[14.5px] pl-6 pr-[5px] gap-4">
                  <span
                    aria-hidden="true"
                    className="absolute -z-10 aspect-square rounded-full transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] top-[5px] bottom-[5px] right-[5px] bg-forest scale-100 group-hover/btn:scale-[26]"
                  ></span>
                  <span className="relative inline-flex items-center gap-2 transition-colors duration-300 group-hover/btn:text-white mr-auto">
                    Primary
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
                </button>
                <button className="group/btn relative isolate items-center overflow-hidden rounded-full font-display font-semibold tracking-[-0.01em] whitespace-nowrap select-none transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-40 aria-disabled:pointer-events-none aria-disabled:opacity-40 inline-flex bg-ink text-white shadow-[0_12px_30px_-16px_rgba(17,17,17,0.6)] h-[52px] text-[14.5px] pl-6 pr-[5px] gap-4">
                  <span
                    aria-hidden="true"
                    className="absolute -z-10 aspect-square rounded-full transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] top-[5px] bottom-[5px] right-[5px] bg-brand scale-100 group-hover/btn:scale-[26]"
                  ></span>
                  <span className="relative inline-flex items-center gap-2 transition-colors duration-300 group-hover/btn:text-ink mr-auto">
                    Secondary
                  </span>
                  <span className="relative grid shrink-0 place-items-center overflow-hidden rounded-full h-[42px] w-[42px] bg-brand text-ink">
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
                </button>
                <button className="group/btn relative isolate items-center overflow-hidden rounded-full font-display font-semibold tracking-[-0.01em] whitespace-nowrap select-none transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-40 aria-disabled:pointer-events-none aria-disabled:opacity-40 inline-flex border-[1.5px] border-ink/20 text-ink hover:border-ink h-[52px] text-[14.5px] pl-6 pr-[5px] gap-4">
                  <span
                    aria-hidden="true"
                    className="absolute -z-10 aspect-square rounded-full transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] top-[5px] bottom-[5px] right-[5px] bg-ink scale-100 group-hover/btn:scale-[26]"
                  ></span>
                  <span className="relative inline-flex items-center gap-2 transition-colors duration-300 group-hover/btn:text-white mr-auto">
                    Ghost
                  </span>
                  <span className="relative grid shrink-0 place-items-center overflow-hidden rounded-full h-[42px] w-[42px] bg-ink text-white">
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
                </button>
                <button
                  className="group/btn relative isolate items-center overflow-hidden rounded-full font-display font-semibold tracking-[-0.01em] whitespace-nowrap select-none transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-40 aria-disabled:pointer-events-none aria-disabled:opacity-40 inline-flex bg-brand text-ink shadow-[0_12px_32px_-14px_rgba(5,207,69,0.75)] hover:shadow-[0_18px_44px_-12px_rgba(5,207,69,0.95)] h-[52px] text-[14.5px] pl-6 pr-[5px] gap-4"
                  disabled={true}
                >
                  <span
                    aria-hidden="true"
                    className="absolute -z-10 aspect-square rounded-full transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] top-[5px] bottom-[5px] right-[5px] bg-forest scale-100 group-hover/btn:scale-[26]"
                  ></span>
                  <span className="relative inline-flex items-center gap-2 transition-colors duration-300 group-hover/btn:text-white mr-auto">
                    Disabled
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
                </button>
              </div>
              <div className="mb-4 mt-6 text-[13px] font-bold text-muted">
                Sizes
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <button className="group/btn relative isolate items-center overflow-hidden rounded-full font-display font-semibold tracking-[-0.01em] whitespace-nowrap select-none transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-40 aria-disabled:pointer-events-none aria-disabled:opacity-40 inline-flex bg-brand text-ink shadow-[0_12px_32px_-14px_rgba(5,207,69,0.75)] hover:shadow-[0_18px_44px_-12px_rgba(5,207,69,0.95)] h-10 text-[13px] pl-5 pr-1 gap-3">
                  <span
                    aria-hidden="true"
                    className="absolute -z-10 aspect-square rounded-full transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] top-1 bottom-1 right-1 bg-forest scale-100 group-hover/btn:scale-[26]"
                  ></span>
                  <span className="relative inline-flex items-center gap-2 transition-colors duration-300 group-hover/btn:text-white mr-auto">
                    Small
                  </span>
                  <span className="relative grid shrink-0 place-items-center overflow-hidden rounded-full h-8 w-8 bg-forest text-white">
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
                      className="lucide lucide-arrow-right absolute transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-x-[220%] h-3.5 w-3.5"
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
                      className="lucide lucide-arrow-right absolute -translate-x-[220%] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-x-0 h-3.5 w-3.5"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </span>
                </button>
                <button className="group/btn relative isolate items-center overflow-hidden rounded-full font-display font-semibold tracking-[-0.01em] whitespace-nowrap select-none transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-40 aria-disabled:pointer-events-none aria-disabled:opacity-40 inline-flex bg-brand text-ink shadow-[0_12px_32px_-14px_rgba(5,207,69,0.75)] hover:shadow-[0_18px_44px_-12px_rgba(5,207,69,0.95)] h-[52px] text-[14.5px] pl-6 pr-[5px] gap-4">
                  <span
                    aria-hidden="true"
                    className="absolute -z-10 aspect-square rounded-full transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] top-[5px] bottom-[5px] right-[5px] bg-forest scale-100 group-hover/btn:scale-[26]"
                  ></span>
                  <span className="relative inline-flex items-center gap-2 transition-colors duration-300 group-hover/btn:text-white mr-auto">
                    Medium
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
                </button>
                <button className="group/btn relative isolate items-center overflow-hidden rounded-full font-display font-semibold tracking-[-0.01em] whitespace-nowrap select-none transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-40 aria-disabled:pointer-events-none aria-disabled:opacity-40 inline-flex bg-brand text-ink shadow-[0_12px_32px_-14px_rgba(5,207,69,0.75)] hover:shadow-[0_18px_44px_-12px_rgba(5,207,69,0.95)] h-[60px] text-[15.5px] pl-7 pr-1.5 gap-5">
                  <span
                    aria-hidden="true"
                    className="absolute -z-10 aspect-square rounded-full transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] top-1.5 bottom-1.5 right-1.5 bg-forest scale-100 group-hover/btn:scale-[26]"
                  ></span>
                  <span className="relative inline-flex items-center gap-2 transition-colors duration-300 group-hover/btn:text-white mr-auto">
                    Large
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
              </div>
              <div className="mb-4 mt-6 text-[13px] font-bold text-muted">
                Links &amp; icon buttons
              </div>
              <div className="flex flex-wrap items-center gap-6">
                <a
                  href="/style-guide"
                  className="group inline-flex items-center gap-1.5 text-[15px] font-bold text-ink hover:text-forest"
                >
                  <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1.5px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-300 group-hover:bg-[length:100%_1.5px]">
                    Text link
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
                    className="lucide lucide-arrow-right h-4 w-4 text-brand transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
                <span className="group">
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
                </span>
              </div>
            </div>
            <div className="rounded-[20px] bg-ink p-6">
              <div className="mb-4 text-[13px] font-bold text-white/50">
                Variants · dark
              </div>
              <div className="flex flex-wrap gap-3">
                <button className="group/btn relative isolate items-center overflow-hidden rounded-full font-display font-semibold tracking-[-0.01em] whitespace-nowrap select-none transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-40 aria-disabled:pointer-events-none aria-disabled:opacity-40 inline-flex bg-brand text-ink shadow-[0_12px_32px_-14px_rgba(5,207,69,0.75)] hover:shadow-[0_18px_44px_-12px_rgba(5,207,69,0.95)] h-[52px] text-[14.5px] pl-6 pr-[5px] gap-4">
                  <span
                    aria-hidden="true"
                    className="absolute -z-10 aspect-square rounded-full transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] top-[5px] bottom-[5px] right-[5px] bg-forest scale-100 group-hover/btn:scale-[26]"
                  ></span>
                  <span className="relative inline-flex items-center gap-2 transition-colors duration-300 group-hover/btn:text-white mr-auto">
                    Primary
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
                </button>
                <button className="group/btn relative isolate items-center overflow-hidden rounded-full font-display font-semibold tracking-[-0.01em] whitespace-nowrap select-none transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-40 aria-disabled:pointer-events-none aria-disabled:opacity-40 inline-flex bg-white text-ink shadow-[0_12px_30px_-16px_rgba(0,0,0,0.35)] h-[52px] text-[14.5px] pl-6 pr-[5px] gap-4">
                  <span
                    aria-hidden="true"
                    className="absolute -z-10 aspect-square rounded-full transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] top-[5px] bottom-[5px] right-[5px] bg-ink scale-100 group-hover/btn:scale-[26]"
                  ></span>
                  <span className="relative inline-flex items-center gap-2 transition-colors duration-300 group-hover/btn:text-white mr-auto">
                    White
                  </span>
                  <span className="relative grid shrink-0 place-items-center overflow-hidden rounded-full h-[42px] w-[42px] bg-ink text-white">
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
                </button>
                <button className="group/btn relative isolate items-center overflow-hidden rounded-full font-display font-semibold tracking-[-0.01em] whitespace-nowrap select-none transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-40 aria-disabled:pointer-events-none aria-disabled:opacity-40 inline-flex border-[1.5px] border-white/30 text-white hover:border-white h-[52px] text-[14.5px] pl-6 pr-[5px] gap-4">
                  <span
                    aria-hidden="true"
                    className="absolute -z-10 aspect-square rounded-full transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] top-[5px] bottom-[5px] right-[5px] bg-white scale-100 group-hover/btn:scale-[26]"
                  ></span>
                  <span className="relative inline-flex items-center gap-2 transition-colors duration-300 group-hover/btn:text-ink mr-auto">
                    Ghost
                  </span>
                  <span className="relative grid shrink-0 place-items-center overflow-hidden rounded-full h-[42px] w-[42px] bg-white text-ink">
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
                </button>
              </div>
              <div className="mb-4 mt-6 text-[13px] font-bold text-white/50">
                States · hover to see the fill sweep, press for 0.97 scale
              </div>
              <div className="flex flex-wrap gap-3">
                <button className="group/btn relative isolate items-center overflow-hidden rounded-full font-display font-semibold tracking-[-0.01em] whitespace-nowrap select-none transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-40 aria-disabled:pointer-events-none aria-disabled:opacity-40 inline-flex bg-brand text-ink shadow-[0_12px_32px_-14px_rgba(5,207,69,0.75)] hover:shadow-[0_18px_44px_-12px_rgba(5,207,69,0.95)] h-10 text-[13px] pl-5 pr-1 gap-3">
                  <span
                    aria-hidden="true"
                    className="absolute -z-10 aspect-square rounded-full transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] top-1 bottom-1 right-1 bg-forest scale-100 group-hover/btn:scale-[26]"
                  ></span>
                  <span className="relative inline-flex items-center gap-2 transition-colors duration-300 group-hover/btn:text-white mr-auto">
                    Small 40
                  </span>
                  <span className="relative grid shrink-0 place-items-center overflow-hidden rounded-full h-8 w-8 bg-forest text-white">
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
                      className="lucide lucide-arrow-right absolute transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-x-[220%] h-3.5 w-3.5"
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
                      className="lucide lucide-arrow-right absolute -translate-x-[220%] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-x-0 h-3.5 w-3.5"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </span>
                </button>
                <button className="group/btn relative isolate items-center overflow-hidden rounded-full font-display font-semibold tracking-[-0.01em] whitespace-nowrap select-none transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-40 aria-disabled:pointer-events-none aria-disabled:opacity-40 inline-flex bg-brand text-ink shadow-[0_12px_32px_-14px_rgba(5,207,69,0.75)] hover:shadow-[0_18px_44px_-12px_rgba(5,207,69,0.95)] h-[52px] text-[14.5px] pl-6 pr-[5px] gap-4">
                  <span
                    aria-hidden="true"
                    className="absolute -z-10 aspect-square rounded-full transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] top-[5px] bottom-[5px] right-[5px] bg-forest scale-100 group-hover/btn:scale-[26]"
                  ></span>
                  <span className="relative inline-flex items-center gap-2 transition-colors duration-300 group-hover/btn:text-white mr-auto">
                    Medium 52
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
                </button>
                <button className="group/btn relative isolate items-center overflow-hidden rounded-full font-display font-semibold tracking-[-0.01em] whitespace-nowrap select-none transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-40 aria-disabled:pointer-events-none aria-disabled:opacity-40 inline-flex bg-brand text-ink shadow-[0_12px_32px_-14px_rgba(5,207,69,0.75)] hover:shadow-[0_18px_44px_-12px_rgba(5,207,69,0.95)] h-[60px] text-[15.5px] pl-7 pr-1.5 gap-5">
                  <span
                    aria-hidden="true"
                    className="absolute -z-10 aspect-square rounded-full transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] top-1.5 bottom-1.5 right-1.5 bg-forest scale-100 group-hover/btn:scale-[26]"
                  ></span>
                  <span className="relative inline-flex items-center gap-2 transition-colors duration-300 group-hover/btn:text-white mr-auto">
                    Large 60
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
                <button
                  className="group/btn relative isolate items-center overflow-hidden rounded-full font-display font-semibold tracking-[-0.01em] whitespace-nowrap select-none transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-40 aria-disabled:pointer-events-none aria-disabled:opacity-40 inline-flex bg-brand text-ink shadow-[0_12px_32px_-14px_rgba(5,207,69,0.75)] hover:shadow-[0_18px_44px_-12px_rgba(5,207,69,0.95)] h-[52px] text-[14.5px] pl-6 pr-[5px] gap-4"
                  disabled={true}
                >
                  <span
                    aria-hidden="true"
                    className="absolute -z-10 aspect-square rounded-full transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] top-[5px] bottom-[5px] right-[5px] bg-forest scale-100 group-hover/btn:scale-[26]"
                  ></span>
                  <span className="relative inline-flex items-center gap-2 transition-colors duration-300 group-hover/btn:text-white mr-auto">
                    Disabled
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
                </button>
              </div>
              <p className="mt-4 text-[13px] text-white/55">
                Pill + inset circular arrow. Hover: circle colour sweeps across
                the pill (transform scale), arrow exits right while a new arrow
                enters from the left, glow increases. Focus: 2px #05CF45 ring.
              </p>
            </div>
          </div>
        </section>
        <section id="04" className="border-t border-line py-16 first:border-0">
          <div className="mb-8 flex items-baseline gap-4">
            <span className="font-mono text-[12px] text-muted">04</span>
            <h2 className="text-[32px]">Form controls</h2>
          </div>
          <div className="grid gap-6 rounded-[20px] border border-line bg-paper p-6 md:grid-cols-2 lg:grid-cols-4">
            <label className="flex flex-col gap-2">
              <span className="text-[13.5px] font-bold text-ink">Default </span>
              <input
                aria-invalid="false"
                className="w-full rounded-[14px] border bg-white px-4 text-[15.5px] text-ink placeholder:text-ink/35 transition-colors focus:outline-none focus:ring-4 disabled:cursor-not-allowed disabled:bg-paper disabled:text-ink/40 border-line hover:border-ink/25 focus:border-forest focus:ring-brand/25 h-12"
                placeholder="name@company.com"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-[13.5px] font-bold text-ink">Filled </span>
              <input
                aria-invalid="false"
                className="w-full rounded-[14px] border bg-white px-4 text-[15.5px] text-ink placeholder:text-ink/35 transition-colors focus:outline-none focus:ring-4 disabled:cursor-not-allowed disabled:bg-paper disabled:text-ink/40 border-line hover:border-ink/25 focus:border-forest focus:ring-brand/25 h-12"
                defaultValue="Jane Cooper"
              />
              <span className="text-[13px] text-muted">Helper text</span>
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-[13.5px] font-bold text-ink">Error </span>
              <input
                aria-invalid="true"
                className="w-full rounded-[14px] border bg-white px-4 text-[15.5px] text-ink placeholder:text-ink/35 transition-colors focus:outline-none focus:ring-4 disabled:cursor-not-allowed disabled:bg-paper disabled:text-ink/40 border-[#D93F3F] focus:border-[#D93F3F] focus:ring-[#D93F3F]/15 h-12"
                defaultValue="jane@"
              />
              <span
                className="text-[13px] font-semibold text-[#C23434]"
                role="alert"
              >
                Enter a valid email.
              </span>
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-[13.5px] font-bold text-ink">
                Disabled{" "}
              </span>
              <input
                aria-invalid="false"
                className="w-full rounded-[14px] border bg-white px-4 text-[15.5px] text-ink placeholder:text-ink/35 transition-colors focus:outline-none focus:ring-4 disabled:cursor-not-allowed disabled:bg-paper disabled:text-ink/40 border-line hover:border-ink/25 focus:border-forest focus:ring-brand/25 h-12"
                disabled={true}
                placeholder="Not editable"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-[13.5px] font-bold text-ink">Select </span>
              <div className="relative">
                <select
                  aria-invalid="false"
                  className="w-full rounded-[14px] border bg-white px-4 text-[15.5px] text-ink placeholder:text-ink/35 transition-colors focus:outline-none focus:ring-4 disabled:cursor-not-allowed disabled:bg-paper disabled:text-ink/40 border-line hover:border-ink/25 focus:border-forest focus:ring-brand/25 h-12 appearance-none pr-10"
                >
                  <option value="" defaultSelected={true}>
                    Choose one
                  </option>
                  <option>AI &amp; Data</option>
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
            <div className="md:col-span-2">
              <label className="flex flex-col gap-2">
                <span className="text-[13.5px] font-bold text-ink">
                  Textarea{" "}
                </span>
                <textarea
                  aria-invalid="false"
                  className="w-full rounded-[14px] border bg-white px-4 text-[15.5px] text-ink placeholder:text-ink/35 transition-colors focus:outline-none focus:ring-4 disabled:cursor-not-allowed disabled:bg-paper disabled:text-ink/40 border-line hover:border-ink/25 focus:border-forest focus:ring-brand/25 min-h-32 py-3 !min-h-12"
                  placeholder="Tell us about your project"
                ></textarea>
              </label>
            </div>
            <div className="flex flex-col justify-end gap-3">
              <div>
                <label className="flex cursor-pointer items-start gap-3 text-[14px] text-muted">
                  <input
                    className="peer sr-only"
                    type="checkbox"
                    defaultChecked={true}
                  />
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border-2 transition-colors peer-focus-visible:ring-4 peer-focus-visible:ring-brand/30 border-forest bg-forest">
                    <svg
                      viewBox="0 0 12 12"
                      className="h-3 w-3 text-brand"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                    >
                      <path d="M2.5 6.5l2.2 2.2L9.5 3.5"></path>
                    </svg>
                  </span>
                  <span>Checked</span>
                </label>
              </div>
              <div>
                <label className="flex cursor-pointer items-start gap-3 text-[14px] text-muted">
                  <input className="peer sr-only" type="checkbox" />
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border-2 transition-colors peer-focus-visible:ring-4 peer-focus-visible:ring-brand/30 border-[#D93F3F]"></span>
                  <span>Error state</span>
                </label>
                <p className="mt-1.5 pl-8 text-[13px] font-semibold text-[#C23434]">
                  Required
                </p>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="mb-2 text-[13.5px] font-bold">
                Newsletter input
              </div>
              <form noValidate={true}>
                <div className="flex items-center rounded-full border p-1.5 transition-colors focus-within:border-brand border-line bg-white">
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
                    className="lucide lucide-mail ml-3 h-4 w-4 shrink-0 text-ink/40"
                    aria-hidden="true"
                  >
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  </svg>
                  <input
                    placeholder="Your work email"
                    aria-label="Email address"
                    className="h-10 min-w-0 flex-1 bg-transparent px-3 text-[15px] outline-none placeholder:text-ink/40"
                    type="email"
                    defaultValue=""
                  />
                  <button
                    className="group/btn relative isolate items-center overflow-hidden rounded-full font-display font-semibold tracking-[-0.01em] whitespace-nowrap select-none transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-40 aria-disabled:pointer-events-none aria-disabled:opacity-40 inline-flex bg-brand text-ink shadow-[0_12px_32px_-14px_rgba(5,207,69,0.75)] hover:shadow-[0_18px_44px_-12px_rgba(5,207,69,0.95)] h-10 text-[13px] pl-5 pr-1 gap-3"
                    type="submit"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -z-10 aspect-square rounded-full transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] top-1 bottom-1 right-1 bg-forest scale-100 group-hover/btn:scale-[26]"
                    ></span>
                    <span className="relative inline-flex items-center gap-2 transition-colors duration-300 group-hover/btn:text-white mr-auto">
                      Subscribe
                    </span>
                    <span className="relative grid shrink-0 place-items-center overflow-hidden rounded-full h-8 w-8 bg-forest text-white">
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
                        className="lucide lucide-arrow-right absolute transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-x-[220%] h-3.5 w-3.5"
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
                        className="lucide lucide-arrow-right absolute -translate-x-[220%] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-x-0 h-3.5 w-3.5"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </form>
            </div>
            <div className="md:col-span-2">
              <div className="mb-2 text-[13.5px] font-bold">Search</div>
              <div className="relative">
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
                  className="lucide lucide-search absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40"
                  aria-hidden="true"
                >
                  <path d="m21 21-4.34-4.34"></path>
                  <circle cx="11" cy="11" r="8"></circle>
                </svg>
                <input
                  className="h-12 w-full rounded-full border border-line bg-white pl-11 pr-4 outline-none focus:border-forest focus:ring-4 focus:ring-brand/25"
                  placeholder="Search…"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="05" className="border-t border-line py-16 first:border-0">
          <div className="mb-8 flex items-baseline gap-4">
            <span className="font-mono text-[12px] text-muted">05</span>
            <h2 className="text-[32px]">Cards</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <a
              href="/services/ai-data-innovation"
              className="group block h-full"
            >
              <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift flex h-full flex-col overflow-hidden p-6">
                <div className="relative -mx-6 -mt-6 mb-6 grid h-44 place-items-center overflow-hidden rounded-t-[22px] bg-paper">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,rgba(5,207,69,0.16),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                  <div className="transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1.5 group-hover:scale-105">
                    <svg
                      viewBox="-20 -20 240 240"
                      className="h-36 w-36 animate-float-rot"
                      aria-hidden="true"
                    >
                      <defs>
                        <linearGradient id="_r_h_g" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#3DF06F"></stop>
                          <stop offset="45%" stopColor="#05CF45"></stop>
                          <stop offset="100%" stopColor="#1B3329"></stop>
                        </linearGradient>
                        <linearGradient id="_r_h_f" x1="0" y1="1" x2="1" y2="0">
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
                          id="_r_h_m"
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
                            fill="url(#_r_h_f)"
                          ></rect>
                        </mask>
                        <filter
                          id="_r_h_n"
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
                          id="_r_h_s"
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
                        filter="url(#_r_h_s)"
                        transform="translate(0 10)"
                      >
                        <path
                          d="M100 14 C104 78 122 96 188 100 C122 104 104 122 100 186 C96 122 78 104 12 100 C78 96 96 78 100 14Z"
                          fill="#05CF45"
                        ></path>
                      </g>
                      <g mask="url(#_r_h_m)" filter="url(#_r_h_n)">
                        <path
                          d="M100 14 C104 78 122 96 188 100 C122 104 104 122 100 186 C96 122 78 104 12 100 C78 96 96 78 100 14Z"
                          fill="url(#_r_h_g)"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-forest">
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
                    className="lucide lucide-brain-circuit h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M12 13h4"></path>
                    <path d="M12 18h6a2 2 0 012 2v1"></path>
                    <path d="M12 8h8"></path>
                    <path d="M12 9a4.17 4.17 0 01-3 4"></path>
                    <path d="M16 8V5a2 2 0 012-2"></path>
                    <path d="M6 18a4 4 0 01-2-7.465"></path>
                    <path d="M6.004 5.125a4 4 0 00-2.526 5.77"></path>
                    <path d="M6.294 6.294A3 3 0 1112 5v13a4 4 0 11-7.967-.518"></path>
                    <circle
                      cx="16"
                      cy="13"
                      r="0.5"
                      fill="currentColor"
                    ></circle>
                    <circle cx="18" cy="3" r="0.5" fill="currentColor"></circle>
                    <circle
                      cx="20"
                      cy="21"
                      r="0.5"
                      fill="currentColor"
                    ></circle>
                    <circle cx="20" cy="8" r="0.5" fill="currentColor"></circle>
                  </svg>
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted">
                    01
                  </span>
                </div>
                <h3 className="mt-3 text-[20px] leading-tight">
                  AI &amp; Data Innovation
                </h3>
                <p className="mt-2 text-[15px] text-muted">
                  Turn data into decisions with production-grade AI.
                </p>
                <div className="mt-auto flex items-center justify-between pt-6">
                  <span className="text-[13px] font-bold text-ink/60">
                    8 services
                  </span>
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
              </div>
            </a>
            <a
              href="/case-studies/lumenpay-fraud-ai"
              className="group block shrink-0 snap-start w-full"
            >
              <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift flex h-full flex-col overflow-hidden">
                <div className="relative aspect-[16/9] overflow-hidden rounded-t-[22px]">
                  <img
                    alt="LumenPay project"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="https://images.unsplash.com/photo-1681826291722-70bd7e9e6fc3?auto=format&fit=crop&w=1600&q=75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent"></div>
                  <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full px-3 py-1 text-[12.5px] font-semibold text-ink/80 bg-white/90 backdrop-blur">
                      Fintech &amp; Banking
                    </span>
                    <span className="inline-flex items-center rounded-full px-3 py-1 text-[12.5px] font-semibold text-ink/80 bg-white/90 backdrop-blur">
                      AI &amp; Data Innovation
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 font-display text-[18px] font-bold text-white">
                    LumenPay
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-[19px] leading-snug">
                    43% fewer fraudulent transactions with real-time ML scoring
                  </h3>
                  <div className="mt-5 grid grid-cols-3 gap-3 border-y border-line py-4">
                    <div>
                      <div className="font-display text-[20px] font-bold text-forest">
                        43%
                      </div>
                      <div className="text-[12px] leading-tight text-muted">
                        drop in fraud losses
                      </div>
                    </div>
                    <div>
                      <div className="font-display text-[20px] font-bold text-forest">
                        38ms
                      </div>
                      <div className="text-[12px] leading-tight text-muted">
                        scoring latency
                      </div>
                    </div>
                    <div>
                      <div className="font-display text-[20px] font-bold text-forest">
                        $12M
                      </div>
                      <div className="text-[12px] leading-tight text-muted">
                        annual savings
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 flex items-start gap-3">
                    <img
                      alt="Amara Okafor"
                      loading="lazy"
                      className="h-10 w-10 shrink-0 rounded-full object-cover"
                      src="/agency-assets/64fc47639d5c3f087c78903c57faf4827168ba7fa8c8cd1e3e86bc6eb4c8f79d.jpg"
                    />
                    <div>
                      <p className="line-clamp-2 text-[14px] italic text-ink/80">
                        “Nuvoryx shipped a model our risk team trusts and our
                        engineers can operate. It paid for itself in the first
                        quarter.”
                      </p>
                      <p className="mt-1 text-[12.5px] font-bold">
                        Amara Okafor{" "}
                        <span className="font-normal text-muted">
                          · Chief Risk Officer, LumenPay
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="/blog/ai-agents-in-production"
              className="group block h-full"
            >
              <div className="flex h-full flex-col overflow-hidden rounded-[22px] border transition-all duration-300 hover:-translate-y-1 border-line bg-white shadow-soft hover:border-brand/40 hover:shadow-lift">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="/agency-assets/9c8de0c77c9da88f26e482a351c86908ec748448f3430f4505e83f50ed63891d.jpg"
                  />
                  <span className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[12px] font-bold text-ink backdrop-blur">
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
                      className="lucide lucide-file-text h-3.5 w-3.5 text-forest"
                      aria-hidden="true"
                    >
                      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                      <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                      <path d="M10 9H8"></path>
                      <path d="M16 13H8"></path>
                      <path d="M16 17H8"></path>
                    </svg>{" "}
                    Blog
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-[12.5px] font-semibold text-muted">
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
                        className="lucide lucide-calendar-days h-3.5 w-3.5"
                        aria-hidden="true"
                      >
                        <path d="M8 2v3"></path>
                        <path d="M16 2v3"></path>
                        <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                        <path d="M3 9h18"></path>
                        <path d="M8 13h.01"></path>
                        <path d="M12 13h.01"></path>
                        <path d="M16 13h.01"></path>
                        <path d="M8 17h.01"></path>
                        <path d="M12 17h.01"></path>
                        <path d="M16 17h.01"></path>
                      </svg>
                      Oct 28, 2025
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
                        className="lucide lucide-clock h-3.5 w-3.5"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 6v6l4 2"></path>
                      </svg>
                      9 min
                    </span>
                  </div>
                  <h3 className="mt-3 text-[18px] leading-snug">
                    AI agents in production: guardrails, evals and the boring
                    bits that matter
                  </h3>
                  <p className="mt-2 line-clamp-2 text-[14.5px] text-muted">
                    What separates an impressive agent demo from one that runs
                    your claims desk at 3am.
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[14px] font-bold text-ink group-hover:text-forest">
                    Read more
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
                      className="lucide lucide-arrow-right h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift group p-6">
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
                  className="lucide lucide-sparkles lucide-stars h-[22px] w-[22px]"
                  aria-hidden="true"
                >
                  <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                  <path d="M20 2v4"></path>
                  <path d="M22 4h-4"></path>
                  <circle cx="4" cy="20" r="2"></circle>
                </svg>
              </span>
              <div className="mt-4 font-display text-[18px] font-bold">
                Feature card
              </div>
              <p className="mt-1 text-[14.5px] text-muted">
                White on paper, 1px line, soft shadow. Hover lifts and reveals a
                green accent.
              </p>
            </div>
            <div className="relative rounded-[22px] border shadow-soft transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift border-forest bg-forest p-6 text-white">
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
                  className="lucide lucide-zap h-[22px] w-[22px]"
                  aria-hidden="true"
                >
                  <path d="M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z"></path>
                </svg>
              </span>
              <div className="mt-4 font-display text-[18px] font-bold">
                Emphasis card
              </div>
              <p className="mt-1 text-[14.5px] text-white/65">
                Deep green for one highlighted item per group.
              </p>
            </div>
            <div className="rounded-[22px] border border-white/10 bg-ink p-6 text-white">
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
                  className="lucide lucide-bot h-[22px] w-[22px]"
                  aria-hidden="true"
                >
                  <path d="M12 8V4H8"></path>
                  <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                  <path d="M2 14h2"></path>
                  <path d="M20 14h2"></path>
                  <path d="M15 13v2"></path>
                  <path d="M9 13v2"></path>
                </svg>
              </span>
              <div className="mt-4 font-display text-[18px] font-bold">
                Dark card
              </div>
              <p className="mt-1 text-[14.5px] text-white/65">
                Used on #111111 sections at 4% white.
              </p>
            </div>
          </div>
        </section>
        <section id="06" className="border-t border-line py-16 first:border-0">
          <div className="mb-8 flex items-baseline gap-4">
            <span className="font-mono text-[12px] text-muted">06</span>
            <h2 className="text-[32px]">Tags &amp; badges</h2>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center rounded-full px-3 py-1 text-[12.5px] font-semibold bg-ink/[0.05] text-ink/75">
              Fintech
            </span>
            <span className="inline-flex items-center rounded-full px-3 py-1 text-[12.5px] font-semibold bg-brand text-ink">
              Active
            </span>
            <span className="rounded-full bg-ink p-2">
              <span className="inline-flex items-center rounded-full px-3 py-1 text-[12.5px] font-semibold bg-white/10 text-white/80">
                On dark
              </span>
            </span>
            <span className="rounded-md px-1.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-[0.12em] bg-brand/15 text-forest">
              New
            </span>
            <span className="rounded-md px-1.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-[0.12em] bg-[#FFE9D6] text-[#9A4A0B]">
              Popular
            </span>
            <span className="rounded-md px-1.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-[0.12em] bg-ink text-white">
              Beta
            </span>
          </div>
        </section>
        <section id="07" className="border-t border-line py-16 first:border-0">
          <div className="mb-8 flex items-baseline gap-4">
            <span className="font-mono text-[12px] text-muted">07</span>
            <h2 className="text-[32px]">Iconography</h2>
          </div>
          <p className="mb-6 text-muted">
            Lucide line icons, 1.5px stroke, 22–24px in tiles. Tiles flip to
            green on card hover.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="group">
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
                  className="lucide lucide-brain-circuit h-[22px] w-[22px]"
                  aria-hidden="true"
                >
                  <path d="M12 13h4"></path>
                  <path d="M12 18h6a2 2 0 012 2v1"></path>
                  <path d="M12 8h8"></path>
                  <path d="M12 9a4.17 4.17 0 01-3 4"></path>
                  <path d="M16 8V5a2 2 0 012-2"></path>
                  <path d="M6 18a4 4 0 01-2-7.465"></path>
                  <path d="M6.004 5.125a4 4 0 00-2.526 5.77"></path>
                  <path d="M6.294 6.294A3 3 0 1112 5v13a4 4 0 11-7.967-.518"></path>
                  <circle cx="16" cy="13" r="0.5" fill="currentColor"></circle>
                  <circle cx="18" cy="3" r="0.5" fill="currentColor"></circle>
                  <circle cx="20" cy="21" r="0.5" fill="currentColor"></circle>
                  <circle cx="20" cy="8" r="0.5" fill="currentColor"></circle>
                </svg>
              </span>
            </span>
            <span className="group">
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
                  className="lucide lucide-code-xml lucide-code-2 h-[22px] w-[22px]"
                  aria-hidden="true"
                >
                  <path d="m18 16 4-4-4-4"></path>
                  <path d="m6 8-4 4 4 4"></path>
                  <path d="m14.5 4-5 16"></path>
                </svg>
              </span>
            </span>
            <span className="group">
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
                  className="lucide lucide-compass h-[22px] w-[22px]"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path>
                </svg>
              </span>
            </span>
            <span className="group">
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
                  className="lucide lucide-shield-check h-[22px] w-[22px]"
                  aria-hidden="true"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </span>
            </span>
            <span className="group">
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
                  className="lucide lucide-gauge h-[22px] w-[22px]"
                  aria-hidden="true"
                >
                  <path d="m12 14 4-4"></path>
                  <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
                </svg>
              </span>
            </span>
            <span className="group">
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
                  className="lucide lucide-cloud h-[22px] w-[22px]"
                  aria-hidden="true"
                >
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
                </svg>
              </span>
            </span>
            <span className="group">
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
                  className="lucide lucide-users h-[22px] w-[22px]"
                  aria-hidden="true"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                </svg>
              </span>
            </span>
            <span className="group">
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
                  className="lucide lucide-sparkles lucide-stars h-[22px] w-[22px]"
                  aria-hidden="true"
                >
                  <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                  <path d="M20 2v4"></path>
                  <path d="M22 4h-4"></path>
                  <circle cx="4" cy="20" r="2"></circle>
                </svg>
              </span>
            </span>
            <span className="group">
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
                  className="lucide lucide-bot h-[22px] w-[22px]"
                  aria-hidden="true"
                >
                  <path d="M12 8V4H8"></path>
                  <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                  <path d="M2 14h2"></path>
                  <path d="M20 14h2"></path>
                  <path d="M15 13v2"></path>
                  <path d="M9 13v2"></path>
                </svg>
              </span>
            </span>
            <span className="group">
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
                  className="lucide lucide-zap h-[22px] w-[22px]"
                  aria-hidden="true"
                >
                  <path d="M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z"></path>
                </svg>
              </span>
            </span>
          </div>
        </section>
        <section id="08" className="border-t border-line py-16 first:border-0">
          <div className="mb-8 flex items-baseline gap-4">
            <span className="font-mono text-[12px] text-muted">08</span>
            <h2 className="text-[32px]">Spacing, radius, shadow &amp; grid</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[20px] border border-line p-6">
              <div className="mb-4 text-[13px] font-bold text-muted">
                8pt spacing scale
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <span className="w-12 font-mono text-[12px] text-muted">
                    8px
                  </span>
                  <span
                    className="h-3 rounded-full bg-brand"
                    style={{ width: "16px" }}
                  ></span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-12 font-mono text-[12px] text-muted">
                    16px
                  </span>
                  <span
                    className="h-3 rounded-full bg-brand"
                    style={{ width: "32px" }}
                  ></span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-12 font-mono text-[12px] text-muted">
                    24px
                  </span>
                  <span
                    className="h-3 rounded-full bg-brand"
                    style={{ width: "48px" }}
                  ></span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-12 font-mono text-[12px] text-muted">
                    32px
                  </span>
                  <span
                    className="h-3 rounded-full bg-brand"
                    style={{ width: "64px" }}
                  ></span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-12 font-mono text-[12px] text-muted">
                    48px
                  </span>
                  <span
                    className="h-3 rounded-full bg-brand"
                    style={{ width: "96px" }}
                  ></span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-12 font-mono text-[12px] text-muted">
                    64px
                  </span>
                  <span
                    className="h-3 rounded-full bg-brand"
                    style={{ width: "128px" }}
                  ></span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-12 font-mono text-[12px] text-muted">
                    96px
                  </span>
                  <span
                    className="h-3 rounded-full bg-brand"
                    style={{ width: "192px" }}
                  ></span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-12 font-mono text-[12px] text-muted">
                    128px
                  </span>
                  <span
                    className="h-3 rounded-full bg-brand"
                    style={{ width: "256px" }}
                  ></span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="rounded-[20px] border border-line p-6">
                <div className="mb-4 text-[13px] font-bold text-muted">
                  Radius
                </div>
                <div className="flex flex-wrap gap-4">
                  <div className="text-center">
                    <div
                      className="h-16 w-16 border-2 border-forest bg-paper"
                      style={{ borderRadius: "14px" }}
                    ></div>
                    <div className="mt-2 font-mono text-[11px] text-muted">
                      14 · Inputs
                    </div>
                  </div>
                  <div className="text-center">
                    <div
                      className="h-16 w-16 border-2 border-forest bg-paper"
                      style={{ borderRadius: "22px" }}
                    ></div>
                    <div className="mt-2 font-mono text-[11px] text-muted">
                      22 · Cards
                    </div>
                  </div>
                  <div className="text-center">
                    <div
                      className="h-16 w-16 border-2 border-forest bg-paper"
                      style={{ borderRadius: "28px" }}
                    ></div>
                    <div className="mt-2 font-mono text-[11px] text-muted">
                      28 · Panels
                    </div>
                  </div>
                  <div className="text-center">
                    <div
                      className="h-16 w-16 border-2 border-forest bg-paper"
                      style={{ borderRadius: "32px" }}
                    ></div>
                    <div className="mt-2 font-mono text-[11px] text-muted">
                      999 · Buttons
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-[20px] border border-line bg-paper p-6">
                <div className="mb-4 text-[13px] font-bold text-muted">
                  Shadows
                </div>
                <div className="flex flex-wrap gap-4">
                  <div className="grid h-20 w-28 place-items-center rounded-2xl bg-white font-mono text-[11px] shadow-soft">
                    soft
                  </div>
                  <div className="grid h-20 w-28 place-items-center rounded-2xl bg-white font-mono text-[11px] shadow-lift">
                    lift
                  </div>
                  <div className="grid h-20 w-28 place-items-center rounded-2xl bg-white font-mono text-[11px] shadow-glow">
                    glow
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 rounded-[20px] border border-line p-6">
            <div className="mb-4 text-[13px] font-bold text-muted">
              12-column grid · 1280px max · 32px gutter (desktop) / 20px
              (mobile)
            </div>
            <div className="grid grid-cols-12 gap-2 md:gap-4">
              <div className="grid h-20 place-items-center rounded-lg bg-brand/15 font-mono text-[11px] text-forest">
                1
              </div>
              <div className="grid h-20 place-items-center rounded-lg bg-brand/15 font-mono text-[11px] text-forest">
                2
              </div>
              <div className="grid h-20 place-items-center rounded-lg bg-brand/15 font-mono text-[11px] text-forest">
                3
              </div>
              <div className="grid h-20 place-items-center rounded-lg bg-brand/15 font-mono text-[11px] text-forest">
                4
              </div>
              <div className="grid h-20 place-items-center rounded-lg bg-brand/15 font-mono text-[11px] text-forest">
                5
              </div>
              <div className="grid h-20 place-items-center rounded-lg bg-brand/15 font-mono text-[11px] text-forest">
                6
              </div>
              <div className="grid h-20 place-items-center rounded-lg bg-brand/15 font-mono text-[11px] text-forest">
                7
              </div>
              <div className="grid h-20 place-items-center rounded-lg bg-brand/15 font-mono text-[11px] text-forest">
                8
              </div>
              <div className="grid h-20 place-items-center rounded-lg bg-brand/15 font-mono text-[11px] text-forest">
                9
              </div>
              <div className="grid h-20 place-items-center rounded-lg bg-brand/15 font-mono text-[11px] text-forest">
                10
              </div>
              <div className="grid h-20 place-items-center rounded-lg bg-brand/15 font-mono text-[11px] text-forest">
                11
              </div>
              <div className="grid h-20 place-items-center rounded-lg bg-brand/15 font-mono text-[11px] text-forest">
                12
              </div>
            </div>
            <div className="mt-4 grid gap-3 text-[13.5px] md:grid-cols-3">
              <div className="rounded-xl bg-paper p-3">
                <b>Desktop</b> · 1440 · 12 col · section padding 128px
              </div>
              <div className="rounded-xl bg-paper p-3">
                <b>Tablet</b> · 834 · 8 col · section padding 96px
              </div>
              <div className="rounded-xl bg-paper p-3">
                <b>Mobile</b> · 390 · 4 col · section padding 80px
              </div>
            </div>
          </div>
        </section>
        <section id="09" className="border-t border-line py-16 first:border-0">
          <div className="mb-8 flex items-baseline gap-4">
            <span className="font-mono text-[12px] text-muted">09</span>
            <h2 className="text-[32px]">Components</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[20px] border border-line bg-paper p-6">
              <div className="mb-4 text-[13px] font-bold text-muted">Tabs</div>
              <div
                role="tablist"
                className="no-scrollbar relative flex gap-2 overflow-x-auto"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-10 rounded-full transition-[transform,width,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] bg-ink opacity-100"
                  style={{ transform: "translateX(0px)", width: "96px" }}
                ></span>
                <button
                  role="tab"
                  aria-selected="true"
                  className="relative h-10 shrink-0 rounded-full px-4 text-[14px] font-bold transition-colors duration-300 text-white border border-transparent bg-transparent"
                >
                  Overview
                </button>
                <button
                  role="tab"
                  aria-selected="false"
                  className="relative h-10 shrink-0 rounded-full px-4 text-[14px] font-bold transition-colors duration-300 border border-line bg-white text-ink/75 hover:border-ink/30"
                >
                  Process
                </button>
                <button
                  role="tab"
                  aria-selected="false"
                  className="relative h-10 shrink-0 rounded-full px-4 text-[14px] font-bold transition-colors duration-300 border border-line bg-white text-ink/75 hover:border-ink/30"
                >
                  Pricing
                </button>
              </div>
              <div className="mb-4 mt-8 text-[13px] font-bold text-muted">
                Modal
              </div>
              <button className="group/btn relative isolate items-center overflow-hidden rounded-full font-display font-semibold tracking-[-0.01em] whitespace-nowrap select-none transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-40 aria-disabled:pointer-events-none aria-disabled:opacity-40 inline-flex bg-ink text-white shadow-[0_12px_30px_-16px_rgba(17,17,17,0.6)] h-[52px] text-[14.5px] pl-6 pr-[5px] gap-4">
                <span
                  aria-hidden="true"
                  className="absolute -z-10 aspect-square rounded-full transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] top-[5px] bottom-[5px] right-[5px] bg-brand scale-100 group-hover/btn:scale-[26]"
                ></span>
                <span className="relative inline-flex items-center gap-2 transition-colors duration-300 group-hover/btn:text-ink mr-auto">
                  Open modal
                </span>
                <span className="relative grid shrink-0 place-items-center overflow-hidden rounded-full h-[42px] w-[42px] bg-brand text-ink">
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
              </button>
            </div>
            <div className="rounded-[20px] border border-line bg-paper p-6">
              <div className="mb-4 text-[13px] font-bold text-muted">
                Accordion
              </div>
              <div className="flex flex-col gap-3">
                <div className="rounded-[18px] border transition-colors border-line bg-white border-forest/25">
                  <button
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                    aria-expanded="true"
                  >
                    <span className="text-[16.5px] font-bold">
                      How quickly can you start?
                    </span>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-300 rotate-45 bg-brand text-ink">
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
                        className="lucide lucide-plus h-4 w-4"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                      </svg>
                    </span>
                  </button>
                  <div className="grid transition-[grid-template-rows] duration-300 grid-rows-[1fr]">
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 text-[15.5px] text-muted">
                        Most engagements kick off within 10 business days.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-[18px] border transition-colors border-line bg-white">
                  <button
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                    aria-expanded="false"
                  >
                    <span className="text-[16.5px] font-bold">
                      Who owns the IP?
                    </span>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-300 bg-ink/5">
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
                        className="lucide lucide-plus h-4 w-4"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                      </svg>
                    </span>
                  </button>
                  <div className="grid transition-[grid-template-rows] duration-300 grid-rows-[0fr]">
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 text-[15.5px] text-muted">
                        You do, from day one.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 rounded-[20px] border border-line p-6 text-[14.5px] text-muted">
            <b className="text-ink">Also in the library:</b> Navbar (sticky,
            blur on scroll) · Services / Industries / Customers / Company /
            Resources mega menus · Mobile drawer with nested accordion · Search
            overlay · Footer · CTA banner · Stats band with count-up · Logo
            &amp; tech marquees · Case-study carousel · Testimonial photo cards
            · Process timeline · Engagement model cards · Contact form with
            validation · Multi-step form · Scheduler · Podcast player · Reading
            progress bar · Cookie banner · Chat launcher · Back-to-top.
          </div>
        </section>
        <section id="10" className="border-t border-line py-16 first:border-0">
          <div className="mb-8 flex items-baseline gap-4">
            <span className="font-mono text-[12px] text-muted">10</span>
            <h2 className="text-[32px]">Service shapes</h2>
          </div>
          <p className="mb-6 text-muted">
            One unique grainy, airbrushed silhouette per service: blurred shape
            + fractal-noise displacement, #05CF45 → #1B3329 gradient, one-side
            fade and soft glow. Idle float/rotate 7s; card hover scales 1.05.
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-[20px] border border-line bg-paper p-4 text-center">
              <svg
                viewBox="-20 -20 240 240"
                className="mx-auto h-28 w-28 animate-float-rot"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="_r_i_g" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#3DF06F"></stop>
                    <stop offset="45%" stopColor="#05CF45"></stop>
                    <stop offset="100%" stopColor="#1B3329"></stop>
                  </linearGradient>
                  <linearGradient id="_r_i_f" x1="0" y1="1" x2="1" y2="0">
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
                    id="_r_i_m"
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
                      fill="url(#_r_i_f)"
                    ></rect>
                  </mask>
                  <filter
                    id="_r_i_n"
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
                    id="_r_i_s"
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
                  filter="url(#_r_i_s)"
                  transform="translate(0 10)"
                >
                  <path
                    d="M100 14 C104 78 122 96 188 100 C122 104 104 122 100 186 C96 122 78 104 12 100 C78 96 96 78 100 14Z"
                    fill="#05CF45"
                  ></path>
                </g>
                <g mask="url(#_r_i_m)" filter="url(#_r_i_n)">
                  <path
                    d="M100 14 C104 78 122 96 188 100 C122 104 104 122 100 186 C96 122 78 104 12 100 C78 96 96 78 100 14Z"
                    fill="url(#_r_i_g)"
                  ></path>
                </g>
              </svg>
              <div className="mt-2 flex items-center justify-center gap-2 text-[13px] font-bold">
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
                  className="lucide lucide-brain-circuit h-4 w-4 text-forest"
                  aria-hidden="true"
                >
                  <path d="M12 13h4"></path>
                  <path d="M12 18h6a2 2 0 012 2v1"></path>
                  <path d="M12 8h8"></path>
                  <path d="M12 9a4.17 4.17 0 01-3 4"></path>
                  <path d="M16 8V5a2 2 0 012-2"></path>
                  <path d="M6 18a4 4 0 01-2-7.465"></path>
                  <path d="M6.004 5.125a4 4 0 00-2.526 5.77"></path>
                  <path d="M6.294 6.294A3 3 0 1112 5v13a4 4 0 11-7.967-.518"></path>
                  <circle cx="16" cy="13" r="0.5" fill="currentColor"></circle>
                  <circle cx="18" cy="3" r="0.5" fill="currentColor"></circle>
                  <circle cx="20" cy="21" r="0.5" fill="currentColor"></circle>
                  <circle cx="20" cy="8" r="0.5" fill="currentColor"></circle>
                </svg>{" "}
                01 AI &amp; Data Innovation
              </div>
            </div>
            <div className="rounded-[20px] border border-line bg-paper p-4 text-center">
              <svg
                viewBox="-20 -20 240 240"
                className="mx-auto h-28 w-28 animate-float-rot"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="_r_j_g" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#3DF06F"></stop>
                    <stop offset="45%" stopColor="#05CF45"></stop>
                    <stop offset="100%" stopColor="#1B3329"></stop>
                  </linearGradient>
                  <linearGradient id="_r_j_f" x1="0" y1="0.5" x2="1" y2="0.5">
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
                    id="_r_j_m"
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
                      fill="url(#_r_j_f)"
                    ></rect>
                  </mask>
                  <filter
                    id="_r_j_n"
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
                    id="_r_j_s"
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
                  filter="url(#_r_j_s)"
                  transform="translate(0 10)"
                >
                  <path
                    d="M100 32a68 68 0 1 0 0.01 0Z M100 66a34 34 0 1 1 -0.01 0Z"
                    fill="#05CF45"
                    fillRule="evenodd"
                  ></path>
                </g>
                <g mask="url(#_r_j_m)" filter="url(#_r_j_n)">
                  <path
                    d="M100 32a68 68 0 1 0 0.01 0Z M100 66a34 34 0 1 1 -0.01 0Z"
                    fill="url(#_r_j_g)"
                    fillRule="evenodd"
                  ></path>
                </g>
              </svg>
              <div className="mt-2 flex items-center justify-center gap-2 text-[13px] font-bold">
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
                  className="lucide lucide-code-xml lucide-code-2 h-4 w-4 text-forest"
                  aria-hidden="true"
                >
                  <path d="m18 16 4-4-4-4"></path>
                  <path d="m6 8-4 4 4 4"></path>
                  <path d="m14.5 4-5 16"></path>
                </svg>{" "}
                02 Engineering
              </div>
            </div>
            <div className="rounded-[20px] border border-line bg-paper p-4 text-center">
              <svg
                viewBox="-20 -20 240 240"
                className="mx-auto h-28 w-28 animate-float-rot"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="_r_k_g" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#3DF06F"></stop>
                    <stop offset="45%" stopColor="#05CF45"></stop>
                    <stop offset="100%" stopColor="#1B3329"></stop>
                  </linearGradient>
                  <linearGradient id="_r_k_f" x1="0" y1="1" x2="1" y2="0.2">
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
                    id="_r_k_m"
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
                      fill="url(#_r_k_f)"
                    ></rect>
                  </mask>
                  <filter
                    id="_r_k_n"
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
                    id="_r_k_s"
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
                  filter="url(#_r_k_s)"
                  transform="translate(0 10)"
                >
                  <path
                    d="M104 30 A70 70 0 1 1 34 100 L34 30 A70 70 0 0 1 104 100 Z"
                    fill="#05CF45"
                  ></path>
                </g>
                <g mask="url(#_r_k_m)" filter="url(#_r_k_n)">
                  <path
                    d="M104 30 A70 70 0 1 1 34 100 L34 30 A70 70 0 0 1 104 100 Z"
                    fill="url(#_r_k_g)"
                  ></path>
                </g>
              </svg>
              <div className="mt-2 flex items-center justify-center gap-2 text-[13px] font-bold">
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
                  className="lucide lucide-compass h-4 w-4 text-forest"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path>
                </svg>{" "}
                03 Advisory &amp; Strategy
              </div>
            </div>
            <div className="rounded-[20px] border border-line bg-paper p-4 text-center">
              <svg
                viewBox="-20 -20 240 240"
                className="mx-auto h-28 w-28 animate-float-rot"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="_r_l_g" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#3DF06F"></stop>
                    <stop offset="45%" stopColor="#05CF45"></stop>
                    <stop offset="100%" stopColor="#1B3329"></stop>
                  </linearGradient>
                  <linearGradient id="_r_l_f" x1="0.5" y1="0" x2="0.5" y2="1">
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
                    id="_r_l_m"
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
                      fill="url(#_r_l_f)"
                    ></rect>
                  </mask>
                  <filter
                    id="_r_l_n"
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
                    id="_r_l_s"
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
                  filter="url(#_r_l_s)"
                  transform="translate(0 10)"
                >
                  <path
                    d="M100 22 C128 38 152 42 168 42 C170 112 148 154 100 180 C52 154 30 112 32 42 C48 42 72 38 100 22Z"
                    fill="#05CF45"
                  ></path>
                </g>
                <g mask="url(#_r_l_m)" filter="url(#_r_l_n)">
                  <path
                    d="M100 22 C128 38 152 42 168 42 C170 112 148 154 100 180 C52 154 30 112 32 42 C48 42 72 38 100 22Z"
                    fill="url(#_r_l_g)"
                  ></path>
                </g>
              </svg>
              <div className="mt-2 flex items-center justify-center gap-2 text-[13px] font-bold">
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
                  className="lucide lucide-shield-check h-4 w-4 text-forest"
                  aria-hidden="true"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>{" "}
                04 Cybersecurity
              </div>
            </div>
            <div className="rounded-[20px] border border-line bg-paper p-4 text-center">
              <svg
                viewBox="-20 -20 240 240"
                className="mx-auto h-28 w-28 animate-float-rot"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="_r_m_g" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#3DF06F"></stop>
                    <stop offset="45%" stopColor="#05CF45"></stop>
                    <stop offset="100%" stopColor="#1B3329"></stop>
                  </linearGradient>
                  <linearGradient id="_r_m_f" x1="0" y1="0" x2="1" y2="1">
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
                    id="_r_m_m"
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
                      fill="url(#_r_m_f)"
                    ></rect>
                  </mask>
                  <filter
                    id="_r_m_n"
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
                    id="_r_m_s"
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
                  filter="url(#_r_m_s)"
                  transform="translate(0 10)"
                >
                  <circle cx="70" cy="70" r="31" fill="#05CF45"></circle>
                  <circle cx="130" cy="70" r="31" fill="#05CF45"></circle>
                  <circle cx="70" cy="130" r="31" fill="#05CF45"></circle>
                  <circle cx="130" cy="130" r="31" fill="#05CF45"></circle>
                </g>
                <g mask="url(#_r_m_m)" filter="url(#_r_m_n)">
                  <circle cx="70" cy="70" r="31" fill="url(#_r_m_g)"></circle>
                  <circle cx="130" cy="70" r="31" fill="url(#_r_m_g)"></circle>
                  <circle cx="70" cy="130" r="31" fill="url(#_r_m_g)"></circle>
                  <circle cx="130" cy="130" r="31" fill="url(#_r_m_g)"></circle>
                </g>
              </svg>
              <div className="mt-2 flex items-center justify-center gap-2 text-[13px] font-bold">
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
                  className="lucide lucide-gauge h-4 w-4 text-forest"
                  aria-hidden="true"
                >
                  <path d="m12 14 4-4"></path>
                  <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
                </svg>{" "}
                05 Optimization &amp; Quality
              </div>
            </div>
            <div className="rounded-[20px] border border-line bg-paper p-4 text-center">
              <svg
                viewBox="-20 -20 240 240"
                className="mx-auto h-28 w-28 animate-float-rot"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="_r_n_g" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#3DF06F"></stop>
                    <stop offset="45%" stopColor="#05CF45"></stop>
                    <stop offset="100%" stopColor="#1B3329"></stop>
                  </linearGradient>
                  <linearGradient id="_r_n_f" x1="0" y1="0.4" x2="1" y2="1">
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
                    id="_r_n_m"
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
                      fill="url(#_r_n_f)"
                    ></rect>
                  </mask>
                  <filter
                    id="_r_n_n"
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
                    id="_r_n_s"
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
                  filter="url(#_r_n_s)"
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
                <g mask="url(#_r_n_m)" filter="url(#_r_n_n)">
                  <circle
                    cx="66"
                    cy="118"
                    r="34"
                    fill="url(#_r_n_g)"
                    opacity="0.75"
                  ></circle>
                  <circle
                    cx="140"
                    cy="114"
                    r="38"
                    fill="url(#_r_n_g)"
                    opacity="0.85"
                  ></circle>
                  <circle cx="102" cy="86" r="46" fill="url(#_r_n_g)"></circle>
                  <rect
                    x="40"
                    y="112"
                    width="128"
                    height="46"
                    rx="23"
                    fill="url(#_r_n_g)"
                  ></rect>
                </g>
              </svg>
              <div className="mt-2 flex items-center justify-center gap-2 text-[13px] font-bold">
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
                  className="lucide lucide-cloud h-4 w-4 text-forest"
                  aria-hidden="true"
                >
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
                </svg>{" "}
                06 Cloud &amp; Infrastructure
              </div>
            </div>
            <div className="rounded-[20px] border border-line bg-paper p-4 text-center">
              <svg
                viewBox="-20 -20 240 240"
                className="mx-auto h-28 w-28 animate-float-rot"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="_r_o_g" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#3DF06F"></stop>
                    <stop offset="45%" stopColor="#05CF45"></stop>
                    <stop offset="100%" stopColor="#1B3329"></stop>
                  </linearGradient>
                  <linearGradient id="_r_o_f" x1="0.5" y1="0" x2="0.5" y2="1">
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
                    id="_r_o_m"
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
                      fill="url(#_r_o_f)"
                    ></rect>
                  </mask>
                  <filter
                    id="_r_o_n"
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
                    id="_r_o_s"
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
                  filter="url(#_r_o_s)"
                  transform="translate(0 10)"
                >
                  <path
                    d="M70 24h60a24 24 0 0 1 24 24v104a24 24 0 0 1-24 24H70a24 24 0 0 1-24-24V48a24 24 0 0 1 24-24Z M74 46h52a8 8 0 0 1 8 8v86a8 8 0 0 1-8 8H74a8 8 0 0 1-8-8V54a8 8 0 0 1 8-8Z M88 158h24a4 4 0 0 1 0 8H88a4 4 0 0 1 0-8Z"
                    fill="#05CF45"
                    fillRule="evenodd"
                  ></path>
                </g>
                <g mask="url(#_r_o_m)" filter="url(#_r_o_n)">
                  <path
                    d="M70 24h60a24 24 0 0 1 24 24v104a24 24 0 0 1-24 24H70a24 24 0 0 1-24-24V48a24 24 0 0 1 24-24Z M74 46h52a8 8 0 0 1 8 8v86a8 8 0 0 1-8 8H74a8 8 0 0 1-8-8V54a8 8 0 0 1 8-8Z M88 158h24a4 4 0 0 1 0 8H88a4 4 0 0 1 0-8Z"
                    fill="url(#_r_o_g)"
                    fillRule="evenodd"
                  ></path>
                </g>
              </svg>
              <div className="mt-2 flex items-center justify-center gap-2 text-[13px] font-bold">
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
                  className="lucide lucide-monitor-smartphone h-4 w-4 text-forest"
                  aria-hidden="true"
                >
                  <path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"></path>
                  <path d="M10 19v-3.96 3.15"></path>
                  <path d="M7 19h5"></path>
                  <rect width="6" height="10" x="16" y="12" rx="2"></rect>
                </svg>{" "}
                07 Digital Experience
              </div>
            </div>
            <div className="rounded-[20px] border border-line bg-paper p-4 text-center">
              <svg
                viewBox="-20 -20 240 240"
                className="mx-auto h-28 w-28 animate-float-rot"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="_r_p_g" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#3DF06F"></stop>
                    <stop offset="45%" stopColor="#05CF45"></stop>
                    <stop offset="100%" stopColor="#1B3329"></stop>
                  </linearGradient>
                  <linearGradient id="_r_p_f" x1="1" y1="0" x2="0" y2="1">
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
                    id="_r_p_m"
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
                      fill="url(#_r_p_f)"
                    ></rect>
                  </mask>
                  <filter
                    id="_r_p_n"
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
                    id="_r_p_s"
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
                  filter="url(#_r_p_s)"
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
                <g mask="url(#_r_p_m)" filter="url(#_r_p_n)">
                  <path
                    d="M100 58 L56 140 L144 140 Z"
                    fill="none"
                    stroke="url(#_r_p_g)"
                    strokeWidth="12"
                    strokeLinejoin="round"
                  ></path>
                  <circle cx="100" cy="54" r="28" fill="url(#_r_p_g)"></circle>
                  <circle cx="54" cy="142" r="28" fill="url(#_r_p_g)"></circle>
                  <circle cx="146" cy="142" r="28" fill="url(#_r_p_g)"></circle>
                </g>
              </svg>
              <div className="mt-2 flex items-center justify-center gap-2 text-[13px] font-bold">
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
                  className="lucide lucide-users h-4 w-4 text-forest"
                  aria-hidden="true"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                </svg>{" "}
                08 Business Process Services
              </div>
            </div>
          </div>
        </section>
        <section id="11" className="border-t border-line py-16 first:border-0">
          <div className="mb-8 flex items-baseline gap-4">
            <span className="font-mono text-[12px] text-muted">11</span>
            <h2 className="text-[32px]">Brand logos</h2>
          </div>
          <p className="mb-6 text-muted">
            Official marks only (Simple Icons, Iconify Logos, Wikimedia
            Commons), generated by{" "}
            <code className="rounded bg-paper px-1.5 py-0.5 font-mono text-[13px]">
              scripts/gen-logos.mjs
            </code>
            . Monochrome #111111 by default; hover reveals brand colour (or
            #05CF45 for black marks).
          </p>
          <div className="flex flex-wrap gap-3">
            <span
              className="group/chip flex items-center gap-3 whitespace-nowrap rounded-[18px] border px-5 py-3.5 text-[15.5px] font-bold transition-[border-color,box-shadow] duration-300 border-line bg-white text-ink shadow-soft hover:border-brand/50 hover:shadow-lift"
              style={{ "--brand-c": "#61DAFB" }}
            >
              <span className="flex h-7 min-w-7 items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  role="img"
                  aria-label="React"
                  className="aspect-square shrink-0 h-[26px] w-[28px] transition-[color,filter] duration-300 text-ink group-hover/chip:text-[var(--brand-c)] group-hover/chip:[filter:none]"
                  fill="currentColor"
                >
                  <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"></path>
                </svg>
              </span>
              React
            </span>
            <span
              className="group/chip flex items-center gap-3 whitespace-nowrap rounded-[18px] border px-5 py-3.5 text-[15.5px] font-bold transition-[border-color,box-shadow] duration-300 border-line bg-white text-ink shadow-soft hover:border-brand/50 hover:shadow-lift"
              style={{ "--brand-c": "#05CF45" }}
            >
              <span className="flex h-7 min-w-7 items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  role="img"
                  aria-label="Next.js"
                  className="aspect-square shrink-0 h-[26px] w-[28px] transition-[color,filter] duration-300 text-ink group-hover/chip:text-[var(--brand-c)] group-hover/chip:[filter:none]"
                  fill="currentColor"
                >
                  <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"></path>
                </svg>
              </span>
              Next.js
            </span>
            <span
              className="group/chip flex items-center gap-3 whitespace-nowrap rounded-[18px] border px-5 py-3.5 text-[15.5px] font-bold transition-[border-color,box-shadow] duration-300 border-line bg-white text-ink shadow-soft hover:border-brand/50 hover:shadow-lift"
              style={{ "--brand-c": "#3178C6" }}
            >
              <span className="flex h-7 min-w-7 items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  role="img"
                  aria-label="TypeScript"
                  className="aspect-square shrink-0 h-[26px] w-[28px] transition-[color,filter] duration-300 text-ink group-hover/chip:text-[var(--brand-c)] group-hover/chip:[filter:none]"
                  fill="currentColor"
                >
                  <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"></path>
                </svg>
              </span>
              TypeScript
            </span>
            <span
              className="group/chip flex items-center gap-3 whitespace-nowrap rounded-[18px] border px-5 py-3.5 text-[15.5px] font-bold transition-[border-color,box-shadow] duration-300 border-line bg-white text-ink shadow-soft hover:border-brand/50 hover:shadow-lift"
              style={{ "--brand-c": "#3776AB" }}
            >
              <span className="flex h-7 min-w-7 items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  role="img"
                  aria-label="Python"
                  className="aspect-square shrink-0 h-[26px] w-[28px] transition-[color,filter] duration-300 text-ink group-hover/chip:text-[var(--brand-c)] group-hover/chip:[filter:none]"
                  fill="currentColor"
                >
                  <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"></path>
                </svg>
              </span>
              Python
            </span>
            <span
              className="group/chip flex items-center gap-3 whitespace-nowrap rounded-[18px] border px-5 py-3.5 text-[15.5px] font-bold transition-[border-color,box-shadow] duration-300 border-line bg-white text-ink shadow-soft hover:border-brand/50 hover:shadow-lift"
              style={{ "--brand-c": "#05CF45" }}
            >
              <span className="flex h-7 min-w-7 items-center justify-center">
                <span
                  role="img"
                  aria-label="AWS"
                  className="inline-flex shrink-0 items-center justify-center [&amp;>svg]:h-full [&amp;>svg]:w-full h-[26px] w-[28px] transition-[color,filter] duration-300 text-ink group-hover/chip:text-[var(--brand-c)] group-hover/chip:[filter:none]"
                  style={{ filter: "brightness(0)" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 104 256 52"
                  >
                    <path
                      fill="#f90"
                      d="M230.993 120.964c-27.888 20.599-68.408 31.534-103.247 31.534c-48.827 0-92.821-18.056-126.05-48.064c-2.628-2.373-.255-5.594 2.881-3.73c35.942 20.854 80.276 33.484 126.136 33.484c30.94 0 64.932-6.442 96.212-19.666c4.662-2.12 8.646 3.052 4.068 6.442m11.614-13.224c-3.56-4.577-23.566-2.204-32.636-1.102c-2.713.34-3.137-2.034-.678-3.814c15.936-11.19 42.13-7.968 45.181-4.239c3.052 3.815-.848 30.008-15.767 42.554c-2.288 1.95-4.492.933-3.475-1.61c3.39-8.393 10.935-27.296 7.375-31.789"
                    ></path>
                  </svg>
                </span>
              </span>
              AWS
            </span>
            <span
              className="group/chip flex items-center gap-3 whitespace-nowrap rounded-[18px] border px-5 py-3.5 text-[15.5px] font-bold transition-[border-color,box-shadow] duration-300 border-line bg-white text-ink shadow-soft hover:border-brand/50 hover:shadow-lift"
              style={{ "--brand-c": "#326CE5" }}
            >
              <span className="flex h-7 min-w-7 items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  role="img"
                  aria-label="Kubernetes"
                  className="aspect-square shrink-0 h-[26px] w-[28px] transition-[color,filter] duration-300 text-ink group-hover/chip:text-[var(--brand-c)] group-hover/chip:[filter:none]"
                  fill="currentColor"
                >
                  <path d="M10.204 14.35l.007.01-.999 2.413a5.171 5.171 0 0 1-2.075-2.597l2.578-.437.004.005a.44.44 0 0 1 .484.606zm-.833-2.129a.44.44 0 0 0 .173-.756l.002-.011L7.585 9.7a5.143 5.143 0 0 0-.73 3.255l2.514-.725.002-.009zm1.145-1.98a.44.44 0 0 0 .699-.337l.01-.005.15-2.62a5.144 5.144 0 0 0-3.01 1.442l2.147 1.523.004-.002zm.76 2.75l.723.349.722-.347.18-.78-.5-.623h-.804l-.5.623.179.779zm1.5-3.095a.44.44 0 0 0 .7.336l.008.003 2.134-1.513a5.188 5.188 0 0 0-2.992-1.442l.148 2.615.002.001zm10.876 5.97l-5.773 7.181a1.6 1.6 0 0 1-1.248.594l-9.261.003a1.6 1.6 0 0 1-1.247-.596l-5.776-7.18a1.583 1.583 0 0 1-.307-1.34L2.1 5.573c.108-.47.425-.864.863-1.073L11.305.513a1.606 1.606 0 0 1 1.385 0l8.345 3.985c.438.209.755.604.863 1.073l2.062 8.955c.108.47-.005.963-.308 1.34zm-3.289-2.057c-.042-.01-.103-.026-.145-.034-.174-.033-.315-.025-.479-.038-.35-.037-.638-.067-.895-.148-.105-.04-.18-.165-.216-.216l-.201-.059a6.45 6.45 0 0 0-.105-2.332 6.465 6.465 0 0 0-.936-2.163c.052-.047.15-.133.177-.159.008-.09.001-.183.094-.282.197-.185.444-.338.743-.522.142-.084.273-.137.415-.242.032-.024.076-.062.11-.089.24-.191.295-.52.123-.736-.172-.216-.506-.236-.745-.045-.034.027-.08.062-.111.088-.134.116-.217.23-.33.35-.246.25-.45.458-.673.609-.097.056-.239.037-.303.033l-.19.135a6.545 6.545 0 0 0-4.146-2.003l-.012-.223c-.065-.062-.143-.115-.163-.25-.022-.268.015-.557.057-.905.023-.163.061-.298.068-.475.001-.04-.001-.099-.001-.142 0-.306-.224-.555-.5-.555-.275 0-.499.249-.499.555l.001.014c0 .041-.002.092 0 .128.006.177.044.312.067.475.042.348.078.637.056.906a.545.545 0 0 1-.162.258l-.012.211a6.424 6.424 0 0 0-4.166 2.003 8.373 8.373 0 0 1-.18-.128c-.09.012-.18.04-.297-.029-.223-.15-.427-.358-.673-.608-.113-.12-.195-.234-.329-.349-.03-.026-.077-.062-.111-.088a.594.594 0 0 0-.348-.132.481.481 0 0 0-.398.176c-.172.216-.117.546.123.737l.007.005.104.083c.142.105.272.159.414.242.299.185.546.338.743.522.076.082.09.226.1.288l.16.143a6.462 6.462 0 0 0-1.02 4.506l-.208.06c-.055.072-.133.184-.215.217-.257.081-.546.11-.895.147-.164.014-.305.006-.48.039-.037.007-.09.02-.133.03l-.004.002-.007.002c-.295.071-.484.342-.423.608.061.267.349.429.645.365l.007-.001.01-.003.129-.029c.17-.046.294-.113.448-.172.33-.118.604-.217.87-.256.112-.009.23.069.288.101l.217-.037a6.5 6.5 0 0 0 2.88 3.596l-.09.218c.033.084.069.199.044.282-.097.252-.263.517-.452.813-.091.136-.185.242-.268.399-.02.037-.045.095-.064.134-.128.275-.034.591.213.71.248.12.556-.007.69-.282v-.002c.02-.039.046-.09.062-.127.07-.162.094-.301.144-.458.132-.332.205-.68.387-.897.05-.06.13-.082.215-.105l.113-.205a6.453 6.453 0 0 0 4.609.012l.106.192c.086.028.18.042.256.155.136.232.229.507.342.84.05.156.074.295.145.457.016.037.043.09.062.129.133.276.442.402.69.282.247-.118.341-.435.213-.71-.02-.039-.045-.096-.065-.134-.083-.156-.177-.261-.268-.398-.19-.296-.346-.541-.443-.793-.04-.13.007-.21.038-.294-.018-.022-.059-.144-.083-.202a6.499 6.499 0 0 0 2.88-3.622c.064.01.176.03.213.038.075-.05.144-.114.28-.104.266.039.54.138.87.256.154.06.277.128.448.173.036.01.088.019.13.028l.009.003.007.001c.297.064.584-.098.645-.365.06-.266-.128-.537-.423-.608zM16.4 9.701l-1.95 1.746v.005a.44.44 0 0 0 .173.757l.003.01 2.526.728a5.199 5.199 0 0 0-.108-1.674A5.208 5.208 0 0 0 16.4 9.7zm-4.013 5.325a.437.437 0 0 0-.404-.232.44.44 0 0 0-.372.233h-.002l-1.268 2.292a5.164 5.164 0 0 0 3.326.003l-1.27-2.296h-.01zm1.888-1.293a.44.44 0 0 0-.27.036.44.44 0 0 0-.214.572l-.003.004 1.01 2.438a5.15 5.15 0 0 0 2.081-2.615l-2.6-.44-.004.005z"></path>
                </svg>
              </span>
              Kubernetes
            </span>
            <span
              className="group/chip flex items-center gap-3 whitespace-nowrap rounded-[18px] border px-5 py-3.5 text-[15.5px] font-bold transition-[border-color,box-shadow] duration-300 border-line bg-white text-ink shadow-soft hover:border-brand/50 hover:shadow-lift"
              style={{ "--brand-c": "#05CF45" }}
            >
              <span className="flex h-7 min-w-7 items-center justify-center">
                <span
                  role="img"
                  aria-label="OpenAI"
                  className="inline-flex shrink-0 items-center justify-center [&amp;>svg]:h-full [&amp;>svg]:w-full h-[26px] w-[28px] transition-[color,filter] duration-300 text-ink group-hover/chip:text-[var(--brand-c)] group-hover/chip:[filter:none]"
                  style={{ filter: "brightness(0)" }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 260">
                    <path d="M239.184 106.203a64.72 64.72 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.72 64.72 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.67 64.67 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.77 64.77 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483m-97.56 136.338a48.4 48.4 0 0 1-31.105-11.255l1.535-.87l51.67-29.825a8.6 8.6 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601M37.158 197.93a48.35 48.35 0 0 1-5.781-32.589l1.534.921l51.722 29.826a8.34 8.34 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803M23.549 85.38a48.5 48.5 0 0 1 25.58-21.333v61.39a8.29 8.29 0 0 0 4.195 7.316l62.874 36.272l-21.845 12.636a.82.82 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405zm179.466 41.695l-63.08-36.63L161.73 77.86a.82.82 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.54 8.54 0 0 0-4.4-7.213m21.742-32.69l-1.535-.922l-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.72.72 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391zM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87l-51.67 29.825a8.6 8.6 0 0 0-4.246 7.367zm11.868-25.58L128.067 97.3l28.188 16.218v32.434l-28.086 16.218l-28.188-16.218z"></path>
                  </svg>
                </span>
              </span>
              OpenAI
            </span>
            <span
              className="group/chip flex items-center gap-3 whitespace-nowrap rounded-[18px] border px-5 py-3.5 text-[15.5px] font-bold transition-[border-color,box-shadow] duration-300 border-line bg-white text-ink shadow-soft hover:border-brand/50 hover:shadow-lift"
              style={{ "--brand-c": "#05CF45" }}
            >
              <span className="flex h-7 min-w-7 items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  role="img"
                  aria-label="Anthropic"
                  className="aspect-square shrink-0 h-[26px] w-[28px] transition-[color,filter] duration-300 text-ink group-hover/chip:text-[var(--brand-c)] group-hover/chip:[filter:none]"
                  fill="currentColor"
                >
                  <path d="M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z"></path>
                </svg>
              </span>
              Anthropic
            </span>
          </div>
          <div className="mt-8 grid gap-4 rounded-[24px] bg-ink p-6 md:grid-cols-3">
            <a
              href="/partners/microsoft"
              className="group/pc flex h-full min-h-[200px] flex-col justify-between gap-6 rounded-[24px] border p-6 transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 md:p-7 border-white/10 bg-white/[0.04] backdrop-blur hover:border-brand/70 hover:shadow-[0_0_0_1px_rgba(5,207,69,0.35),0_24px_60px_-24px_rgba(5,207,69,0.5)]"
            >
              <span className="flex items-center gap-3 font-display text-[19px] font-bold tracking-[-0.02em] text-white">
                <span className="grid h-9 min-w-9 place-items-center transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/pc:scale-110">
                  <span
                    role="img"
                    aria-label="Microsoft"
                    className="inline-flex shrink-0 items-center [&amp;>svg]:h-full [&amp;>svg]:w-auto [&amp;_svg]:fill-white h-7"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                    >
                      <path
                        fill="#f1511b"
                        d="M121.666 121.666H0V0h121.666z"
                      ></path>
                      <path
                        fill="#80cc28"
                        d="M256 121.666H134.335V0H256z"
                      ></path>
                      <path
                        fill="#00adef"
                        d="M121.663 256.002H0V134.336h121.663z"
                      ></path>
                      <path
                        fill="#fbbc09"
                        d="M256 256.002H134.335V134.336H256z"
                      ></path>
                    </svg>
                  </span>
                </span>
                Microsoft
              </span>
              <span className="flex items-end justify-between gap-3">
                <span className="text-[14px] font-semibold leading-snug text-white/55">
                  Solutions Partner · Azure
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
                  className="lucide lucide-arrow-right h-4 w-4 shrink-0 -translate-x-1 text-brand opacity-0 transition-all duration-300 group-hover/pc:translate-x-0 group-hover/pc:opacity-100"
                  aria-hidden="true"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </span>
            </a>
            <a
              href="/partners/aws"
              className="group/pc flex h-full min-h-[200px] flex-col justify-between gap-6 rounded-[24px] border p-6 transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 md:p-7 border-white/10 bg-white/[0.04] backdrop-blur hover:border-brand/70 hover:shadow-[0_0_0_1px_rgba(5,207,69,0.35),0_24px_60px_-24px_rgba(5,207,69,0.5)]"
            >
              <span className="flex items-center gap-3 font-display text-[19px] font-bold tracking-[-0.02em] text-white">
                <span className="grid h-9 min-w-9 place-items-center transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/pc:scale-110">
                  <span
                    role="img"
                    aria-label="AWS"
                    className="inline-flex shrink-0 items-center [&amp;>svg]:h-full [&amp;>svg]:w-auto [&amp;_svg]:fill-white h-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 104 256 52"
                    >
                      <path
                        fill="#f90"
                        d="M230.993 120.964c-27.888 20.599-68.408 31.534-103.247 31.534c-48.827 0-92.821-18.056-126.05-48.064c-2.628-2.373-.255-5.594 2.881-3.73c35.942 20.854 80.276 33.484 126.136 33.484c30.94 0 64.932-6.442 96.212-19.666c4.662-2.12 8.646 3.052 4.068 6.442m11.614-13.224c-3.56-4.577-23.566-2.204-32.636-1.102c-2.713.34-3.137-2.034-.678-3.814c15.936-11.19 42.13-7.968 45.181-4.239c3.052 3.815-.848 30.008-15.767 42.554c-2.288 1.95-4.492.933-3.475-1.61c3.39-8.393 10.935-27.296 7.375-31.789"
                      ></path>
                    </svg>
                  </span>
                </span>
                AWS
              </span>
              <span className="flex items-end justify-between gap-3">
                <span className="text-[14px] font-semibold leading-snug text-white/55">
                  Advanced Tier Services Partner
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
                  className="lucide lucide-arrow-right h-4 w-4 shrink-0 -translate-x-1 text-brand opacity-0 transition-all duration-300 group-hover/pc:translate-x-0 group-hover/pc:opacity-100"
                  aria-hidden="true"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </span>
            </a>
            <a
              href="/partners/google-cloud"
              className="group/pc flex h-full min-h-[200px] flex-col justify-between gap-6 rounded-[24px] border p-6 transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 md:p-7 border-white/10 bg-white/[0.04] backdrop-blur hover:border-brand/70 hover:shadow-[0_0_0_1px_rgba(5,207,69,0.35),0_24px_60px_-24px_rgba(5,207,69,0.5)]"
            >
              <span className="flex items-center gap-3 font-display text-[19px] font-bold tracking-[-0.02em] text-white">
                <span className="grid h-9 min-w-9 place-items-center transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/pc:scale-110">
                  <span
                    role="img"
                    aria-label="Google Cloud"
                    className="inline-flex shrink-0 items-center [&amp;>svg]:h-full [&amp;>svg]:w-auto [&amp;_svg]:fill-white h-7"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 206"
                    >
                      <path
                        fill="#ea4335"
                        d="m170.252 56.819l22.253-22.253l1.483-9.37C153.437-11.677 88.976-7.496 52.42 33.92C42.267 45.423 34.734 59.764 30.717 74.573l7.97-1.123l44.505-7.34l3.436-3.513c19.797-21.742 53.27-24.667 76.128-6.168z"
                      ></path>
                      <path
                        fill="#4285f4"
                        d="M224.205 73.918a100.25 100.25 0 0 0-30.217-48.722l-31.232 31.232a55.52 55.52 0 0 1 20.379 44.037v5.544c15.35 0 27.797 12.445 27.797 27.796c0 15.352-12.446 27.485-27.797 27.485h-55.671l-5.466 5.934v33.34l5.466 5.231h55.67c39.93.311 72.553-31.494 72.864-71.424a72.3 72.3 0 0 0-31.793-60.453"
                      ></path>
                      <path
                        fill="#34a853"
                        d="M71.87 205.796h55.593V161.29H71.87a27.3 27.3 0 0 1-11.399-2.498l-7.887 2.42l-22.409 22.253l-1.952 7.574c12.567 9.489 27.9 14.825 43.647 14.757"
                      ></path>
                      <path
                        fill="#fbbc05"
                        d="M71.87 61.426C31.94 61.663-.237 94.227.001 134.158a72.3 72.3 0 0 0 28.222 56.88l32.248-32.246c-13.99-6.322-20.208-22.786-13.887-36.776s22.786-20.208 36.775-13.888a27.8 27.8 0 0 1 13.887 13.888l32.248-32.248A72.22 72.22 0 0 0 71.87 61.427"
                      ></path>
                    </svg>
                  </span>
                </span>
                Google Cloud
              </span>
              <span className="flex items-end justify-between gap-3">
                <span className="text-[14px] font-semibold leading-snug text-white/55">
                  Premier Partner
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
                  className="lucide lucide-arrow-right h-4 w-4 shrink-0 -translate-x-1 text-brand opacity-0 transition-all duration-300 group-hover/pc:translate-x-0 group-hover/pc:opacity-100"
                  aria-hidden="true"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </span>
            </a>
          </div>
          <div className="mt-8 rounded-[24px] bg-paper p-6">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              <div className="reveal in" style={{ transitionDelay: "0ms" }}>
                <div className="group/al relative grid h-36 place-items-center rounded-[20px] border border-transparent bg-white px-8 shadow-soft transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-glow md:h-44">
                  <span
                    role="img"
                    aria-label="IBM"
                    className="inline-flex shrink-0 items-center [&amp;>svg]:h-full [&amp;>svg]:w-auto transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/al:scale-110 h-7 md:h-9 [&amp;_svg]:fill-[#1F70C1]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 205"
                    >
                      <path d="M99.556 190.06v14.223H0V190.06zm155.582 0a53.9 53.9 0 0 1-36.633 14.222l-104.727-.14V190.06Zm148.028 0l-4.966 14.222l-4.922-14.222zm-47.61 0v14.223h-71.111V190.06zm156.444 0v14.223h-71.111V190.06zm-240.753-27.15a54 54 0 0 1-5.722 14.222H113.778V162.91Zm141.45 0l-4.991 14.223h-18.967l-4.992-14.223zm-57.141 0v14.222h-71.111V162.91zm156.444 0v14.222h-71.111V162.91zm-412.444 0v14.222H0V162.91zM71.11 135.757v14.223H28.444v-14.223zm113.778 0v14.223h-42.667v-14.223zm86.017 0a54.3 54.3 0 0 1 1.902 14.223H224.97v-14.223Zm151.324 0l-4.993 14.223h-38.029l-4.994-14.223zm-66.674 0v14.223h-42.667v-14.223zm128 0v14.223h-42.667v-14.223zM71.11 108.606v14.222H28.444v-14.222zm284.445 0v14.222h-42.667v-14.222zm128 0v14.222h-42.667v-14.222zm-229.91 0a54.5 54.5 0 0 1 11.863 14.221H142.222v-14.222Zm178.116 0l-4.992 14.222h-57.095l-4.992-14.223zm-37.538-27.151l3.998 11.496l3.997-11.496h81.336v14.222H440.89V82.61l-4.59 13.068h-76.156l-4.589-13.07v13.07H312.89V81.455zm-252.002 0H265.51a54.5 54.5 0 0 1-11.864 14.222H142.222zm-71.111 0v14.222H28.444V81.454zm0-27.152v14.222H28.444V54.303zm113.778 0v14.222h-42.667V54.303zm87.92 0a54.3 54.3 0 0 1-1.903 14.222H224.97V54.303Zm111.973 0l4.946 14.222H312.89V54.303zm98.773 0v14.222h-76.838l4.945-14.222zm-384-27.152v14.223H0V27.15zm165.97 0a54 54 0 0 1 5.722 14.222h-157.47V27.151Zm246.475 0v14.222h-95.842l4.946-14.222zm-136.66 0l4.946 14.222h-95.841V27.151zM99.557.001v14.221H0V0zM218.505 0a54.1 54.1 0 0 1 36.633 14.222h-141.36V0ZM512 0v14.223h-86.4L430.546.001zM365.9 0l4.945 14.223h-86.4V.001z"></path>
                    </svg>
                  </span>
                  <span className="absolute bottom-3 text-[12px] font-semibold text-muted opacity-0 transition-opacity duration-300 group-hover/al:opacity-100">
                    Business Partner
                  </span>
                </div>
              </div>
              <div className="reveal in" style={{ transitionDelay: "80ms" }}>
                <div className="group/al relative grid h-36 place-items-center rounded-[20px] border border-transparent bg-white px-8 shadow-soft transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-glow md:h-44">
                  <span
                    role="img"
                    aria-label="SAP"
                    className="inline-flex shrink-0 items-center [&amp;>svg]:h-full [&amp;>svg]:w-auto [&amp;_svg]:fill-ink transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/al:scale-110 h-12 md:h-14"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 254"
                    >
                      <defs>
                        <linearGradient
                          id="SVGG66mF8Jd"
                          x1="50%"
                          x2="50%"
                          y1="0%"
                          y2="100.002%"
                        >
                          <stop offset="0%" stopColor="#00aeef"></stop>
                          <stop offset="21.2%" stopColor="#0097dc"></stop>
                          <stop offset="51.9%" stopColor="#007cc5"></stop>
                          <stop offset="79.2%" stopColor="#006cb8"></stop>
                          <stop offset="100%" stopColor="#0066b3"></stop>
                        </linearGradient>
                      </defs>
                      <path
                        fill="url(#SVGG66mF8Jd)"
                        d="M0 253.281h258.764L512 0H0z"
                      ></path>
                      <path
                        fill="#fff"
                        d="M303.848 50.656H253.28l.17 118.93l-44.032-118.975h-43.66l-37.587 99.36c-3.996-25.283-30.135-34.007-50.702-40.542c-13.581-4.362-27.996-10.779-27.85-17.87c.113-5.82 7.712-11.218 22.813-10.413c10.131.546 19.08 1.362 36.883 9.962l17.505-30.506c-16.233-8.263-38.679-13.48-57.084-13.497h-.113c-21.461 0-39.331 6.95-50.408 18.405C11.493 73.502 7.328 83.667 7.16 94.907c-.282 15.467 5.386 26.432 17.296 35.195c10.064 7.374 22.936 12.158 34.277 15.67c13.987 4.334 25.413 8.105 25.272 16.131c-.112 2.927-1.216 5.662-3.32 7.869c-3.49 3.602-8.837 4.953-16.239 5.1c-14.28.303-24.86-1.943-41.724-11.91l-15.574 30.9c16.846 9.58 34.728 14.386 55.047 14.386l4.57-.034c17.685-.32 32.037-4.559 43.44-13.733c.654-.524 1.239-1.053 1.847-1.588l-1.914 9.862l42.664-.135l7.655-19.599c8.048 2.747 17.2 4.267 26.915 4.267c9.467 0 18.371-1.441 26.268-4.03l5.336 19.362l76.547.073l.186-44.68h16.289c39.371 0 62.645-20.037 62.645-53.639c-.013-37.423-22.638-53.723-70.795-53.723zM187.372 152.318c-5.882 0-11.398-1.025-16.142-2.826l15.962-50.403h.31l15.703 50.544c-4.728 1.689-10.115 2.685-15.839 2.685zm119.436-28.959h-11.11V82.74h11.116c14.803 0 26.623 4.93 26.623 20.048c-.013 15.647-11.82 20.572-26.623 20.572"
                      ></path>
                    </svg>
                  </span>
                  <span className="absolute bottom-3 text-[12px] font-semibold text-muted opacity-0 transition-opacity duration-300 group-hover/al:opacity-100">
                    Silver Partner
                  </span>
                </div>
              </div>
              <div className="reveal in" style={{ transitionDelay: "160ms" }}>
                <div className="group/al relative grid h-36 place-items-center rounded-[20px] border border-transparent bg-white px-8 shadow-soft transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-glow md:h-44">
                  <span
                    role="img"
                    aria-label="Oracle"
                    className="inline-flex shrink-0 items-center [&amp;>svg]:h-full [&amp;>svg]:w-auto [&amp;_svg]:fill-ink transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/al:scale-110 h-7 md:h-9"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 67"
                    >
                      <path
                        fill="#ea1b22"
                        d="M221.034 43.303h33.832l-17.889-28.781l-32.833 52.037h-14.942l39.935-62.508c1.736-2.525 4.63-4.051 7.84-4.051c3.104 0 5.998 1.473 7.682 3.946l40.093 62.613H269.81l-7.05-11.628h-34.253zM376.251 54.93V.631h-12.68v59.614c0 1.631.631 3.21 1.841 4.42s2.841 1.894 4.63 1.894h57.825l7.472-11.628zm-209.78-9.734c12.313 0 22.31-9.944 22.31-22.256c0-12.313-9.997-22.31-22.31-22.31h-55.473v65.93h12.676v-54.3h41.956c5.893 0 10.628 4.789 10.628 10.682c0 5.892-4.735 10.68-10.628 10.68l-35.747-.052l37.851 32.99h18.416l-25.466-21.362zM32.97 66.559C14.77 66.56 0 51.827 0 33.622C0 15.416 14.77.632 32.97.632h38.32c18.204 0 32.963 14.784 32.963 32.99c0 18.205-14.759 32.937-32.964 32.937zm37.468-11.628c11.791 0 21.341-9.524 21.341-21.31S82.228 12.26 70.437 12.26h-36.62c-11.787 0-21.342 9.576-21.342 21.362S22.03 54.93 33.816 54.93zm240.78 11.628c-18.204 0-32.99-14.732-32.99-32.937c0-18.206 14.786-32.99 32.99-32.99h45.514l-7.42 11.628H312.06c-11.786 0-21.362 9.576-21.362 21.362s9.576 21.309 21.362 21.309h45.723l-7.472 11.628zm155.06-11.628c-9.734 0-17.995-6.524-20.52-15.522h54.194l7.471-11.628h-61.665c2.525-8.945 10.786-15.521 20.52-15.521h37.2L511 .63h-45.565c-18.205 0-32.99 14.785-32.99 32.99s14.785 32.938 32.99 32.938h39.094L512 54.931z"
                      ></path>
                    </svg>
                  </span>
                  <span className="absolute bottom-3 text-[12px] font-semibold text-muted opacity-0 transition-opacity duration-300 group-hover/al:opacity-100">
                    Partner Network
                  </span>
                </div>
              </div>
              <div className="reveal in" style={{ transitionDelay: "0ms" }}>
                <div className="group/al relative grid h-36 place-items-center rounded-[20px] border border-transparent bg-white px-8 shadow-soft transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-glow md:h-44">
                  <span
                    role="img"
                    aria-label="Red Hat"
                    className="inline-flex shrink-0 items-center [&amp;>svg]:h-full [&amp;>svg]:w-auto [&amp;_svg]:fill-ink transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/al:scale-110 h-12 md:h-14"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 121"
                    >
                      <path
                        fill="#e00"
                        d="M106.25 69.447c10.469 0 25.615-2.159 25.615-14.61a11.7 11.7 0 0 0-.26-2.862l-6.234-27.08c-1.439-5.958-2.702-8.66-13.163-13.89C104.091 6.853 86.41 0 81.18 0c-4.87 0-6.284 6.276-12.092 6.276c-5.59 0-9.74-4.686-14.97-4.686c-5.021 0-8.293 3.423-10.82 10.46c0 0-7.038 19.85-7.942 22.728a5.4 5.4 0 0 0-.184 1.623c0 7.716 30.377 33.013 71.08 33.013m27.22-9.523c1.448 6.853 1.448 7.573 1.448 8.477c0 11.715-13.171 18.217-30.485 18.217c-39.13.025-73.405-22.903-73.405-38.058a15.4 15.4 0 0 1 1.264-6.134C18.217 43.096 0 45.606 0 61.69c0 26.343 62.418 58.81 111.84 58.81c37.891 0 47.447-17.138 47.447-30.669c0-10.644-9.204-22.728-25.798-29.941"
                      ></path>
                      <path d="M133.472 59.89c1.447 6.854 1.447 7.574 1.447 8.478c0 11.715-13.171 18.217-30.485 18.217c-39.13.025-73.405-22.903-73.405-38.058a15.4 15.4 0 0 1 1.264-6.134l3.062-7.582a5.4 5.4 0 0 0-.184 1.59c0 7.716 30.377 33.013 71.08 33.013c10.468 0 25.614-2.16 25.614-14.611a11.7 11.7 0 0 0-.26-2.862zm351.244 17.348c0 9.95 5.983 14.786 16.895 14.786a43.6 43.6 0 0 0 9.95-1.405v-11.54a20.8 20.8 0 0 1-6.427.97c-4.493 0-6.159-1.405-6.159-5.631V56.736h13.021V44.853h-13.02V29.791l-14.227 3.079v11.983h-9.447v11.883h9.414zm-44.351.268c0-3.08 3.088-4.578 7.749-4.578c2.849.017 5.686.37 8.452 1.055v5.983a18 18 0 0 1-8.896 2.2c-4.569 0-7.305-1.757-7.305-4.66m4.351 14.694c5.021 0 9.071-1.054 12.854-3.607v2.82h14.075v-29.84c0-11.347-7.649-17.573-20.41-17.573c-7.13 0-14.176 1.673-21.757 5.104l5.104 10.477c5.456-2.293 10.042-3.699 14.084-3.699c5.858 0 8.887 2.285 8.887 6.954v2.285a41.5 41.5 0 0 0-10.56-1.322c-11.975 0-19.189 5.02-19.189 14c0 8.184 6.51 14.426 16.896 14.426m-77.356-.786h15.138V67.297h25.348v24.117h15.18V29.807h-15.122v23.674h-25.347V29.807h-15.138zm-57.623-23.347c0-6.695 5.28-11.8 12.235-11.8a14.4 14.4 0 0 1 9.84 3.615v16.277a13.7 13.7 0 0 1-9.84 3.732c-6.862 0-12.235-5.105-12.235-11.791m22.268 23.322h14.084v-64.72l-14.226 3.08v17.515a23.7 23.7 0 0 0-11.883-3.08c-13.548 0-24.2 10.469-24.2 23.85a23.64 23.64 0 0 0 23.765 23.933a21.02 21.02 0 0 0 12.494-4.042zm-64.627-35.799c4.485 0 8.268 2.904 9.766 7.39h-19.414c1.405-4.628 4.928-7.39 9.648-7.39M243.371 68.2c0 13.557 11.087 24.117 25.338 24.117c7.833 0 13.557-2.117 19.456-7.046l-9.422-8.368c-2.201 2.293-5.456 3.523-9.322 3.523a12.04 12.04 0 0 1-11.448-7.389h33.18v-3.54c0-14.786-9.942-25.43-23.498-25.43a23.91 23.91 0 0 0-24.268 24.108m-24.56-25.43c5.02 0 7.832 3.163 7.832 6.953s-2.811 6.954-7.832 6.954h-14.97V42.744zM188.7 91.413h15.138V68.97h11.523l11.624 22.444h16.945l-13.556-24.645a18.64 18.64 0 0 0 11.615-17.338c0-11.088-8.711-19.624-21.757-19.624H188.7z"></path>
                    </svg>
                  </span>
                  <span className="absolute bottom-3 text-[12px] font-semibold text-muted opacity-0 transition-opacity duration-300 group-hover/al:opacity-100">
                    Advanced Partner
                  </span>
                </div>
              </div>
              <div className="reveal in" style={{ transitionDelay: "80ms" }}>
                <div className="group/al relative grid h-36 place-items-center rounded-[20px] border border-transparent bg-white px-8 shadow-soft transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-glow md:h-44">
                  <span
                    role="img"
                    aria-label="ServiceNow"
                    className="inline-flex shrink-0 items-center [&amp;>svg]:h-full [&amp;>svg]:w-auto [&amp;_svg]:fill-ink transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/al:scale-110 h-7 md:h-9"
                  >
                    <svg
                      enableBackground="new 0 0 132.5 20"
                      version="1.1"
                      viewBox="0 0 130.3 19.25"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>ServiceNow logo</title>
                      <desc>
                        A cloud computing and enterprise software provider based
                        in Santa Clara, California, United States
                      </desc>
                      <g clipRule="evenodd" fillRule="evenodd">
                        <g fill="#293e40">
                          {" "}
                          <path d="m31.7 5.862c-1.4 0-2.6 0.5-3.6 1.3v-1.1h-3.4v12.9h3.5v-8.2c0.5-0.7 1.7-1.6 3.2-1.6 0.5 0 1 0.1 1.4 0.2v-3.3c-0.4-0.1-0.8-0.2-1.1-0.2"></path>{" "}
                          <path d="m1.6 14.96c0.9 0.8 2.3 1.3 3.5 1.3 0.9 0 1.7-0.5 1.7-1.1 0-2-6.3-1.3-6.3-5.4 0-2.5 2.4-4 4.9-4 1.7 0 3.5 0.6 4.4 1.3l-1.6 2.5c-0.7-0.4-1.5-0.9-2.5-0.9s-1.7 0.4-1.7 1.1c0 1.7 6.3 1 6.3 5.5 0 2.5-2.4 4-5.1 4-1.8 0-3.7-0.6-5.2-1.7z"></path>{" "}
                          <path d="m23.2 12.36c0-3.6-2.5-6.6-6.1-6.6-3.8 0-6.3 3.2-6.3 6.7 0 4.1 2.9 6.7 6.7 6.7 2 0 4-0.8 5.3-2.3l-2-2c-0.6 0.7-1.8 1.5-3.2 1.5-1.8 0-3.3-1.3-3.5-3.1h8.9c0.2-0.2 0.2-0.5 0.2-0.9zm-8.8-1.5c0.2-1.2 1.4-2.3 2.8-2.3s2.4 1.1 2.6 2.3z"></path>{" "}
                          <polygon
                            transform="translate(-.3 -.5379)"
                            points="48.3 6.6 42.4 19.5 40 19.5 34.1 6.6 37.6 6.6 41.2 14.5 44.7 6.6"
                          ></polygon>{" "}
                          <path d="m50.9-0.03788c1.3 0 2.3 1 2.3 2.2 0 1.3-1 2.2-2.3 2.2s-2.2-1-2.2-2.2c0-1.3 0.9-2.2 2.2-2.2"></path>{" "}
                          <rect
                            x="49.2"
                            y="6.062"
                            width="3.5"
                            height="12.9"
                          ></rect>{" "}
                          <path d="m66.9 16.26c-1.5 2-3.4 2.9-5.8 2.9-4 0-6.9-3-6.9-6.7 0-3.8 3-6.7 6.9-6.7 2.3 0 4.2 1.1 5.4 2.6l-2.3 2.1c-0.7-0.9-1.7-1.5-2.9-1.5-2 0-3.5 1.6-3.5 3.5 0 2 1.4 3.5 3.5 3.5 1.4 0 2.5-0.8 3.1-1.7z"></path>{" "}
                          <path d="m79.4 16.86c-1.3 1.5-3.3 2.3-5.3 2.3-3.8 0-6.7-2.6-6.7-6.7 0-3.6 2.4-6.7 6.3-6.7 3.5 0 6.1 3 6.1 6.6 0 0.4 0 0.7-0.1 1h-9c0.2 1.8 1.7 3.1 3.5 3.1 1.4 0 2.6-0.8 3.2-1.5zm-3.2-6c-0.1-1.1-1.1-2.3-2.6-2.3-1.4 0-2.6 1.1-2.8 2.3z"></path>{" "}
                          <path d="m81.1 18.96v-12.9h3.3v1.1c1-0.8 2.2-1.3 3.6-1.3 1.8 0 3.4 0.8 4.5 2.1 0.8 1 1.4 2.3 1.4 4.5v6.6h-3.5v-6.9c0-1.3-0.3-2-0.8-2.4-0.5-0.5-1.1-0.8-2-0.8-1.4 0-2.6 0.9-3.2 1.6v8.4h-3.3z"></path>{" "}
                        </g>
                        <path
                          d="m102.8 5.762c-4.2 0-7.5 3.3-7.5 7.5 0 2.2 0.9 4.2 2.3 5.6 0.5 0.5 1.4 0.5 2 0.1 0.8-0.7 2-1.1 3.2-1.1 1.3 0 2.3 0.4 3.2 1.1 0.6 0.5 1.4 0.4 2-0.2 1.4-1.4 2.3-3.3 2.3-5.5-0.1-4.1-3.4-7.5-7.5-7.5m-0.1 11.4c-2.3 0-3.8-1.7-3.8-3.8s1.5-3.8 3.8-3.8 3.8 1.7 3.8 3.8-1.5 3.8-3.8 3.8"
                          fill="#81b5a1"
                        ></path>{" "}
                        <polygon
                          transform="translate(-.3 -.5379)"
                          points="109.7 6.6 113.1 6.6 115.9 14 118.7 6.6 121.6 6.6 124.3 14 127.1 6.6 130.6 6.6 125.5 19.5 122.9 19.5 120.1 12.2 117.4 19.5 114.8 19.5"
                          fill="#293e40"
                        ></polygon>{" "}
                      </g>
                    </svg>
                  </span>
                  <span className="absolute bottom-3 text-[12px] font-semibold text-muted opacity-0 transition-opacity duration-300 group-hover/al:opacity-100">
                    Build Partner
                  </span>
                </div>
              </div>
              <div className="reveal in" style={{ transitionDelay: "160ms" }}>
                <div className="group/al relative grid h-36 place-items-center rounded-[20px] border border-transparent bg-white px-8 shadow-soft transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-glow md:h-44">
                  <span
                    role="img"
                    aria-label="Temenos"
                    className="inline-flex shrink-0 items-center [&amp;>svg]:h-full [&amp;>svg]:w-auto [&amp;_svg]:fill-ink transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/al:scale-110 h-7 md:h-9"
                  >
                    <svg
                      version="1.1"
                      id="svg2"
                      viewBox="0 0 246.10919 39.482265"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {" "}
                      <defs id="defs6">
                        {" "}
                        <clipPath
                          clipPathUnits="userSpaceOnUse"
                          id="clipPath18"
                        >
                          {" "}
                          <path
                            d="M 0,841.89 H 595.276 V 0 H 0 Z"
                            id="path16"
                          ></path>{" "}
                        </clipPath>{" "}
                        <clipPath
                          clipPathUnits="userSpaceOnUse"
                          id="clipPath26"
                        >
                          {" "}
                          <path
                            d="m 45.355,801.144 h 41.953 v 6.73 H 45.355 Z"
                            id="path24"
                          ></path>{" "}
                        </clipPath>{" "}
                        <clipPath
                          clipPathUnits="userSpaceOnUse"
                          id="clipPath46"
                        >
                          {" "}
                          <path
                            d="M 0,0 H 595.276 V 841.89 H 0 Z"
                            id="path44"
                          ></path>{" "}
                        </clipPath>{" "}
                        <clipPath
                          clipPathUnits="userSpaceOnUse"
                          id="clipPath64"
                        >
                          {" "}
                          <path
                            d="M 0,841.89 H 595.276 V 0 H 0 Z"
                            id="path62"
                          ></path>{" "}
                        </clipPath>{" "}
                        <clipPath
                          clipPathUnits="userSpaceOnUse"
                          id="clipPath76"
                        >
                          {" "}
                          <path
                            d="M 0,0 H 595.275 V 841.89 H 0 Z"
                            id="path74"
                          ></path>{" "}
                        </clipPath>{" "}
                        <clipPath
                          clipPathUnits="userSpaceOnUse"
                          id="clipPath86"
                        >
                          {" "}
                          <path
                            d="M 0,369.518 H 368.859 V 841.89 H 0 Z"
                            id="path84"
                          ></path>{" "}
                        </clipPath>{" "}
                        <clipPath
                          clipPathUnits="userSpaceOnUse"
                          id="clipPath106"
                        >
                          {" "}
                          <path
                            d="M 45.355,34.451 H 229.938 V 64.063 H 45.355 Z"
                            id="path104"
                          ></path>{" "}
                        </clipPath>{" "}
                      </defs>{" "}
                      <g
                        id="g8"
                        transform="matrix(1.3333333,0,0,-1.3333333,-60.473332,85.417331)"
                      >
                        {" "}
                        <g
                          id="g100"
                          style={{ fill: "#293276", fillOpacity: "1" }}
                        >
                          {" "}
                          <g
                            id="g102"
                            clipPath="url(#clipPath106)"
                            style={{ fill: "#293276", fillOpacity: "1" }}
                          >
                            {" "}
                            <g
                              id="g108"
                              transform="translate(55.0929,58.2003)"
                              style={{ fill: "#293276", fillOpacity: "1" }}
                            >
                              {" "}
                              <path
                                d="M 0,0 H 7.063 V -4.221 H 0 v -11.224 c 0,-2.18 1.358,-3.433 3.622,-3.433 1.087,0 2.219,0.278 3.034,0.742 v -4.546 c -1.358,-0.649 -3.215,-1.067 -4.935,-1.067 -4.845,0 -7.698,2.783 -7.698,7.515 V -4.221 H -9.739 V 0 h 3.762 V 5.863 H 0 Z m 81.686,-9.829 c 0.456,3.756 2.383,5.701 5.36,5.701 2.934,0 4.86,-1.945 5.273,-5.701 z m 16.416,0 H 98.1 c -0.619,6.537 -4.651,10.293 -11.054,10.293 -7.063,0 -11.229,-4.453 -11.229,-12.106 0,-7.607 4.166,-12.107 11.229,-12.107 6.021,0 10.136,3.106 11.078,8.404 h -5.833 c -0.685,-2.336 -2.574,-3.766 -5.245,-3.766 -2.963,0 -4.887,2.722 -5.347,6.491 h 16.486 v 0.978 c 0,0.602 -0.028,1.182 -0.08,1.744 z m -82.887,0 c 0.456,3.756 2.382,5.701 5.36,5.701 2.934,0 4.86,-1.945 5.273,-5.701 z m 16.416,0 H 31.628 C 31.01,-3.292 26.977,0.464 20.575,0.464 c -7.064,0 -11.229,-4.453 -11.229,-12.106 0,-7.607 4.165,-12.107 11.229,-12.107 6.021,0 10.136,3.106 11.077,8.404 H 25.82 c -0.685,-2.336 -2.574,-3.766 -5.245,-3.766 -2.964,0 -4.887,2.722 -5.347,6.491 h 16.486 v 0.978 c 0,0.602 -0.029,1.183 -0.08,1.744 z m 92.137,0.738 v -14.194 h -5.977 v 13.916 c 0,3.153 -1.63,5.009 -4.438,5.009 -3.169,0 -5.025,-2.365 -5.025,-6.308 v -12.617 h -5.977 V 0 h 5.977 v -5.893 l -0.008,-2.08 c 0.583,4.193 3.428,8.437 7.479,8.437 5.026,0 7.969,-3.526 7.969,-9.555 m -51.937,0.232 v -14.426 h -5.976 v 14.147 c 0,3.016 -1.585,4.778 -4.257,4.778 -2.988,0 -4.754,-2.273 -4.754,-6.076 v -12.849 h -5.977 v 14.147 c 0,3.016 -1.54,4.778 -4.211,4.778 -3.033,0 -4.8,-2.273 -4.8,-6.076 V -23.285 H 35.88 V 0 h 5.976 v -5.893 l -0.018,-2.08 c 0.562,4.201 3.409,8.437 7.445,8.437 4.182,0 6.855,-2.249 7.438,-6.357 l 0.076,-2.08 c 0.536,4.201 3.292,8.437 7.247,8.437 4.889,0 7.787,-3.433 7.787,-9.323 m 103.013,-7.236 c 0,-4.778 -3.848,-7.653 -10.323,-7.653 -6.52,0 -10.323,2.968 -10.323,8.024 h 5.569 c 0,-2.598 1.766,-4.128 4.754,-4.128 2.897,0 4.573,1.113 4.573,3.061 0,2.459 -2.671,2.922 -5.66,3.433 -3.939,0.649 -8.648,1.437 -8.648,6.771 0,4.406 3.622,7.051 9.735,7.051 6.067,0 9.69,-2.829 9.69,-7.654 h -5.57 c 0,2.459 -1.494,3.85 -4.12,3.85 -2.49,0 -3.985,-1.02 -3.985,-2.736 0,-2.087 2.491,-2.505 5.389,-3.015 4.029,-0.696 8.919,-1.531 8.919,-7.004 m -35.227,-2.783 c -3.623,0 -5.751,2.69 -5.751,7.235 0,4.547 2.128,7.283 5.751,7.283 3.622,0 5.75,-2.736 5.75,-7.283 0,-4.545 -2.128,-7.235 -5.75,-7.235 m 0,19.342 c -7.426,0 -11.864,-4.499 -11.864,-12.107 0,-7.606 4.438,-12.106 11.864,-12.106 7.425,0 11.817,4.5 11.817,12.106 0,7.608 -4.392,12.107 -11.817,12.107"
                                style={{
                                  fill: "#293276",
                                  fillOpacity: "1",
                                  fillRule: "nonzero",
                                  stroke: "none",
                                }}
                                id="path110"
                              ></path>{" "}
                            </g>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>{" "}
                    </svg>
                  </span>
                  <span className="absolute bottom-3 text-[12px] font-semibold text-muted opacity-0 transition-opacity duration-300 group-hover/al:opacity-100">
                    Delivery Partner
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 overflow-hidden rounded-[24px]">
            <section
              aria-label="Trusted by"
              className="relative z-[1] -mt-px rounded-b-[40px] bg-ink pb-14 pt-4 text-white md:rounded-b-[64px] md:pb-16 !rounded-b-[40px] pt-8"
            >
              <div className="flex items-center justify-center gap-4 px-5">
                <span className="h-px w-10 bg-white/35 sm:w-14"></span>
                <span className="text-[15px] font-semibold tracking-[-0.01em] text-white/90">
                  Trusted by the best.
                </span>
                <span className="h-px w-10 bg-white/35 sm:w-14"></span>
              </div>
              <div className="group/mq relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)] mt-8">
                <div
                  className="flex w-max animate-marquee will-change-transform group-hover/mq:[animation-play-state:paused]"
                  style={{ animationDuration: "45s" }}
                >
                  <div
                    className="flex shrink-0 items-center"
                    style={{ gap: "40px", paddingRight: "40px" }}
                  >
                    <div className="flex h-[92px] items-center gap-3 rounded-[26px] bg-[#1C1C1C] px-10 transition-colors hover:bg-[#242424] md:h-[108px] md:px-12">
                      <svg
                        viewBox="0 0 24 24"
                        role="img"
                        aria-label="Discord"
                        className="aspect-square shrink-0 h-8 text-white"
                        fill="currentColor"
                      >
                        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"></path>
                      </svg>
                      <span className="font-display text-[24px] font-bold tracking-[-0.04em] text-white">
                        Discord
                      </span>
                    </div>
                    <div className="flex h-[92px] items-center gap-3 rounded-[26px] bg-[#1C1C1C] px-10 transition-colors hover:bg-[#242424] md:h-[108px] md:px-12">
                      <svg
                        viewBox="0 0 24 24"
                        role="img"
                        aria-label="Dropbox"
                        className="aspect-square shrink-0 h-8 text-white"
                        fill="currentColor"
                      >
                        <path d="M6 1.807L0 5.629l6 3.822 6.001-3.822L6 1.807zM18 1.807l-6 3.822 6 3.822 6-3.822-6-3.822zM0 13.274l6 3.822 6.001-3.822L6 9.452l-6 3.822zM18 9.452l-6 3.822 6 3.822 6-3.822-6-3.822zM6 18.371l6.001 3.822 6-3.822-6-3.822L6 18.371z"></path>
                      </svg>
                      <span className="font-display text-[24px] font-bold tracking-[-0.04em] text-white">
                        Dropbox
                      </span>
                    </div>
                    <div className="flex h-[92px] items-center gap-3 rounded-[26px] bg-[#1C1C1C] px-10 transition-colors hover:bg-[#242424] md:h-[108px] md:px-12">
                      <svg
                        viewBox="0 0 24 24"
                        role="img"
                        aria-label="Stripe"
                        className="aspect-square shrink-0 h-8 text-white"
                        fill="currentColor"
                      >
                        <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z"></path>
                      </svg>
                      <span className="font-display text-[24px] font-bold tracking-[-0.04em] text-white">
                        Stripe
                      </span>
                    </div>
                    <div className="flex h-[92px] items-center gap-3 rounded-[26px] bg-[#1C1C1C] px-10 transition-colors hover:bg-[#242424] md:h-[108px] md:px-12">
                      <svg
                        viewBox="0 0 24 24"
                        role="img"
                        aria-label="Spotify"
                        className="aspect-square shrink-0 h-8 text-white"
                        fill="currentColor"
                      >
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"></path>
                      </svg>
                      <span className="font-display text-[24px] font-bold tracking-[-0.04em] text-white">
                        Spotify
                      </span>
                    </div>
                    <div className="flex h-[92px] items-center gap-3 rounded-[26px] bg-[#1C1C1C] px-10 transition-colors hover:bg-[#242424] md:h-[108px] md:px-12">
                      <span
                        role="img"
                        aria-label="Slack"
                        className="inline-flex shrink-0 items-center [&amp;>svg]:h-full [&amp;>svg]:w-auto h-8 text-white"
                        style={{ filter: "brightness(0) invert(1)" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 256 256"
                        >
                          <path
                            fill="#e01e5a"
                            d="M53.841 161.32c0 14.832-11.987 26.82-26.819 26.82S.203 176.152.203 161.32c0-14.831 11.987-26.818 26.82-26.818H53.84zm13.41 0c0-14.831 11.987-26.818 26.819-26.818s26.819 11.987 26.819 26.819v67.047c0 14.832-11.987 26.82-26.82 26.82c-14.83 0-26.818-11.988-26.818-26.82z"
                          ></path>
                          <path
                            fill="#36c5f0"
                            d="M94.07 53.638c-14.832 0-26.82-11.987-26.82-26.819S79.239 0 94.07 0s26.819 11.987 26.819 26.819v26.82zm0 13.613c14.832 0 26.819 11.987 26.819 26.819s-11.987 26.819-26.82 26.819H26.82C11.987 120.889 0 108.902 0 94.069c0-14.83 11.987-26.818 26.819-26.818z"
                          ></path>
                          <path
                            fill="#2eb67d"
                            d="M201.55 94.07c0-14.832 11.987-26.82 26.818-26.82s26.82 11.988 26.82 26.82s-11.988 26.819-26.82 26.819H201.55zm-13.41 0c0 14.832-11.988 26.819-26.82 26.819c-14.831 0-26.818-11.987-26.818-26.82V26.82C134.502 11.987 146.489 0 161.32 0s26.819 11.987 26.819 26.819z"
                          ></path>
                          <path
                            fill="#ecb22e"
                            d="M161.32 201.55c14.832 0 26.82 11.987 26.82 26.818s-11.988 26.82-26.82 26.82c-14.831 0-26.818-11.988-26.818-26.82V201.55zm0-13.41c-14.831 0-26.818-11.988-26.818-26.82c0-14.831 11.987-26.818 26.819-26.818h67.25c14.832 0 26.82 11.987 26.82 26.819s-11.988 26.819-26.82 26.819z"
                          ></path>
                        </svg>
                      </span>
                      <span className="font-display text-[24px] font-bold tracking-[-0.04em] text-white">
                        Slack
                      </span>
                    </div>
                    <div className="flex h-[92px] items-center gap-3 rounded-[26px] bg-[#1C1C1C] px-10 transition-colors hover:bg-[#242424] md:h-[108px] md:px-12">
                      <svg
                        viewBox="0 0 24 24"
                        role="img"
                        aria-label="Notion"
                        className="aspect-square shrink-0 h-8 text-white"
                        fill="currentColor"
                      >
                        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"></path>
                      </svg>
                      <span className="font-display text-[24px] font-bold tracking-[-0.04em] text-white">
                        Notion
                      </span>
                    </div>
                    <div className="flex h-[92px] items-center gap-3 rounded-[26px] bg-[#1C1C1C] px-10 transition-colors hover:bg-[#242424] md:h-[108px] md:px-12">
                      <svg
                        viewBox="0 0 24 24"
                        role="img"
                        aria-label="Figma"
                        className="aspect-square shrink-0 h-8 text-white"
                        fill="currentColor"
                      >
                        <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"></path>
                      </svg>
                      <span className="font-display text-[24px] font-bold tracking-[-0.04em] text-white">
                        Figma
                      </span>
                    </div>
                    <div className="flex h-[92px] items-center gap-3 rounded-[26px] bg-[#1C1C1C] px-10 transition-colors hover:bg-[#242424] md:h-[108px] md:px-12">
                      <svg
                        viewBox="0 0 24 24"
                        role="img"
                        aria-label="Airbnb"
                        className="aspect-square shrink-0 h-8 text-white"
                        fill="currentColor"
                      >
                        <path d="M12.001 18.275c-1.353-1.697-2.148-3.184-2.413-4.457-.263-1.027-.16-1.848.291-2.465.477-.71 1.188-1.056 2.121-1.056s1.643.345 2.12 1.063c.446.61.558 1.432.286 2.465-.291 1.298-1.085 2.785-2.412 4.458zm9.601 1.14c-.185 1.246-1.034 2.28-2.2 2.783-2.253.98-4.483-.583-6.392-2.704 3.157-3.951 3.74-7.028 2.385-9.018-.795-1.14-1.933-1.695-3.394-1.695-2.944 0-4.563 2.49-3.927 5.382.37 1.565 1.352 3.343 2.917 5.332-.98 1.085-1.91 1.856-2.732 2.333-.636.344-1.245.558-1.828.609-2.679.399-4.778-2.2-3.825-4.88.132-.345.395-.98.845-1.961l.025-.053c1.464-3.178 3.242-6.79 5.285-10.795l.053-.132.58-1.116c.45-.822.635-1.19 1.351-1.643.346-.21.77-.315 1.246-.315.954 0 1.698.558 2.016 1.007.158.239.345.557.582.953l.558 1.089.08.159c2.041 4.004 3.821 7.608 5.279 10.794l.026.025.533 1.22.318.764c.243.613.294 1.222.213 1.858zm1.22-2.39c-.186-.583-.505-1.271-.9-2.094v-.03c-1.889-4.006-3.642-7.608-5.307-10.844l-.111-.163C15.317 1.461 14.468 0 12.001 0c-2.44 0-3.476 1.695-4.535 3.898l-.081.16c-1.669 3.236-3.421 6.843-5.303 10.847v.053l-.559 1.22c-.21.504-.317.768-.345.847C-.172 20.74 2.611 24 5.98 24c.027 0 .132 0 .265-.027h.372c1.75-.213 3.554-1.325 5.384-3.317 1.829 1.989 3.635 3.104 5.382 3.317h.372c.133.027.239.027.265.027 3.37.003 6.152-3.261 4.802-6.975z"></path>
                      </svg>
                      <span className="font-display text-[24px] font-bold tracking-[-0.04em] text-white">
                        Airbnb
                      </span>
                    </div>
                    <div className="flex h-[92px] items-center gap-3 rounded-[26px] bg-[#1C1C1C] px-10 transition-colors hover:bg-[#242424] md:h-[108px] md:px-12">
                      <svg
                        viewBox="0 0 24 24"
                        role="img"
                        aria-label="Shopify"
                        className="aspect-square shrink-0 h-8 text-white"
                        fill="currentColor"
                      >
                        <path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01zM11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.656.213-1.293.405-1.889.578C7.697 3.75 8.951.84 11.17.84V.83zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736.466-1.777 1.333-2.645 2.085-2.971.193.501.309 1.176.309 2.1zm.539-2.234c.694.074 1.141.867 1.429 1.755-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871v.002zm2.992 1.289c-.02 0-.06.021-.078.021s-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0 8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674-.675.213-.694.232-.772.87-.075.462-1.83 14.063-1.83 14.063L15.009 24l.927-21.166z"></path>
                      </svg>
                      <span className="font-display text-[24px] font-bold tracking-[-0.04em] text-white">
                        Shopify
                      </span>
                    </div>
                    <div className="flex h-[92px] items-center gap-3 rounded-[26px] bg-[#1C1C1C] px-10 transition-colors hover:bg-[#242424] md:h-[108px] md:px-12">
                      <svg
                        viewBox="0 0 24 24"
                        role="img"
                        aria-label="Linear"
                        className="aspect-square shrink-0 h-8 text-white"
                        fill="currentColor"
                      >
                        <path d="M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z"></path>
                      </svg>
                      <span className="font-display text-[24px] font-bold tracking-[-0.04em] text-white">
                        Linear
                      </span>
                    </div>
                    <div className="flex h-[92px] items-center gap-3 rounded-[26px] bg-[#1C1C1C] px-10 transition-colors hover:bg-[#242424] md:h-[108px] md:px-12">
                      <svg
                        viewBox="0 0 24 24"
                        role="img"
                        aria-label="Vercel"
                        className="aspect-square shrink-0 h-8 text-white"
                        fill="currentColor"
                      >
                        <path d="m12 1.608 12 20.784H0Z"></path>
                      </svg>
                      <span className="font-display text-[24px] font-bold tracking-[-0.04em] text-white">
                        Vercel
                      </span>
                    </div>
                  </div>
                  <div
                    className="flex shrink-0 items-center"
                    aria-hidden="true"
                    style={{ gap: "40px", paddingRight: "40px" }}
                  >
                    <div className="flex h-[92px] items-center gap-3 rounded-[26px] bg-[#1C1C1C] px-10 transition-colors hover:bg-[#242424] md:h-[108px] md:px-12">
                      <svg
                        viewBox="0 0 24 24"
                        role="img"
                        aria-label="Discord"
                        className="aspect-square shrink-0 h-8 text-white"
                        fill="currentColor"
                      >
                        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"></path>
                      </svg>
                      <span className="font-display text-[24px] font-bold tracking-[-0.04em] text-white">
                        Discord
                      </span>
                    </div>
                    <div className="flex h-[92px] items-center gap-3 rounded-[26px] bg-[#1C1C1C] px-10 transition-colors hover:bg-[#242424] md:h-[108px] md:px-12">
                      <svg
                        viewBox="0 0 24 24"
                        role="img"
                        aria-label="Dropbox"
                        className="aspect-square shrink-0 h-8 text-white"
                        fill="currentColor"
                      >
                        <path d="M6 1.807L0 5.629l6 3.822 6.001-3.822L6 1.807zM18 1.807l-6 3.822 6 3.822 6-3.822-6-3.822zM0 13.274l6 3.822 6.001-3.822L6 9.452l-6 3.822zM18 9.452l-6 3.822 6 3.822 6-3.822-6-3.822zM6 18.371l6.001 3.822 6-3.822-6-3.822L6 18.371z"></path>
                      </svg>
                      <span className="font-display text-[24px] font-bold tracking-[-0.04em] text-white">
                        Dropbox
                      </span>
                    </div>
                    <div className="flex h-[92px] items-center gap-3 rounded-[26px] bg-[#1C1C1C] px-10 transition-colors hover:bg-[#242424] md:h-[108px] md:px-12">
                      <svg
                        viewBox="0 0 24 24"
                        role="img"
                        aria-label="Stripe"
                        className="aspect-square shrink-0 h-8 text-white"
                        fill="currentColor"
                      >
                        <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z"></path>
                      </svg>
                      <span className="font-display text-[24px] font-bold tracking-[-0.04em] text-white">
                        Stripe
                      </span>
                    </div>
                    <div className="flex h-[92px] items-center gap-3 rounded-[26px] bg-[#1C1C1C] px-10 transition-colors hover:bg-[#242424] md:h-[108px] md:px-12">
                      <svg
                        viewBox="0 0 24 24"
                        role="img"
                        aria-label="Spotify"
                        className="aspect-square shrink-0 h-8 text-white"
                        fill="currentColor"
                      >
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"></path>
                      </svg>
                      <span className="font-display text-[24px] font-bold tracking-[-0.04em] text-white">
                        Spotify
                      </span>
                    </div>
                    <div className="flex h-[92px] items-center gap-3 rounded-[26px] bg-[#1C1C1C] px-10 transition-colors hover:bg-[#242424] md:h-[108px] md:px-12">
                      <span
                        role="img"
                        aria-label="Slack"
                        className="inline-flex shrink-0 items-center [&amp;>svg]:h-full [&amp;>svg]:w-auto h-8 text-white"
                        style={{ filter: "brightness(0) invert(1)" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 256 256"
                        >
                          <path
                            fill="#e01e5a"
                            d="M53.841 161.32c0 14.832-11.987 26.82-26.819 26.82S.203 176.152.203 161.32c0-14.831 11.987-26.818 26.82-26.818H53.84zm13.41 0c0-14.831 11.987-26.818 26.819-26.818s26.819 11.987 26.819 26.819v67.047c0 14.832-11.987 26.82-26.82 26.82c-14.83 0-26.818-11.988-26.818-26.82z"
                          ></path>
                          <path
                            fill="#36c5f0"
                            d="M94.07 53.638c-14.832 0-26.82-11.987-26.82-26.819S79.239 0 94.07 0s26.819 11.987 26.819 26.819v26.82zm0 13.613c14.832 0 26.819 11.987 26.819 26.819s-11.987 26.819-26.82 26.819H26.82C11.987 120.889 0 108.902 0 94.069c0-14.83 11.987-26.818 26.819-26.818z"
                          ></path>
                          <path
                            fill="#2eb67d"
                            d="M201.55 94.07c0-14.832 11.987-26.82 26.818-26.82s26.82 11.988 26.82 26.82s-11.988 26.819-26.82 26.819H201.55zm-13.41 0c0 14.832-11.988 26.819-26.82 26.819c-14.831 0-26.818-11.987-26.818-26.82V26.82C134.502 11.987 146.489 0 161.32 0s26.819 11.987 26.819 26.819z"
                          ></path>
                          <path
                            fill="#ecb22e"
                            d="M161.32 201.55c14.832 0 26.82 11.987 26.82 26.818s-11.988 26.82-26.82 26.82c-14.831 0-26.818-11.988-26.818-26.82V201.55zm0-13.41c-14.831 0-26.818-11.988-26.818-26.82c0-14.831 11.987-26.818 26.819-26.818h67.25c14.832 0 26.82 11.987 26.82 26.819s-11.988 26.819-26.82 26.819z"
                          ></path>
                        </svg>
                      </span>
                      <span className="font-display text-[24px] font-bold tracking-[-0.04em] text-white">
                        Slack
                      </span>
                    </div>
                    <div className="flex h-[92px] items-center gap-3 rounded-[26px] bg-[#1C1C1C] px-10 transition-colors hover:bg-[#242424] md:h-[108px] md:px-12">
                      <svg
                        viewBox="0 0 24 24"
                        role="img"
                        aria-label="Notion"
                        className="aspect-square shrink-0 h-8 text-white"
                        fill="currentColor"
                      >
                        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"></path>
                      </svg>
                      <span className="font-display text-[24px] font-bold tracking-[-0.04em] text-white">
                        Notion
                      </span>
                    </div>
                    <div className="flex h-[92px] items-center gap-3 rounded-[26px] bg-[#1C1C1C] px-10 transition-colors hover:bg-[#242424] md:h-[108px] md:px-12">
                      <svg
                        viewBox="0 0 24 24"
                        role="img"
                        aria-label="Figma"
                        className="aspect-square shrink-0 h-8 text-white"
                        fill="currentColor"
                      >
                        <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"></path>
                      </svg>
                      <span className="font-display text-[24px] font-bold tracking-[-0.04em] text-white">
                        Figma
                      </span>
                    </div>
                    <div className="flex h-[92px] items-center gap-3 rounded-[26px] bg-[#1C1C1C] px-10 transition-colors hover:bg-[#242424] md:h-[108px] md:px-12">
                      <svg
                        viewBox="0 0 24 24"
                        role="img"
                        aria-label="Airbnb"
                        className="aspect-square shrink-0 h-8 text-white"
                        fill="currentColor"
                      >
                        <path d="M12.001 18.275c-1.353-1.697-2.148-3.184-2.413-4.457-.263-1.027-.16-1.848.291-2.465.477-.71 1.188-1.056 2.121-1.056s1.643.345 2.12 1.063c.446.61.558 1.432.286 2.465-.291 1.298-1.085 2.785-2.412 4.458zm9.601 1.14c-.185 1.246-1.034 2.28-2.2 2.783-2.253.98-4.483-.583-6.392-2.704 3.157-3.951 3.74-7.028 2.385-9.018-.795-1.14-1.933-1.695-3.394-1.695-2.944 0-4.563 2.49-3.927 5.382.37 1.565 1.352 3.343 2.917 5.332-.98 1.085-1.91 1.856-2.732 2.333-.636.344-1.245.558-1.828.609-2.679.399-4.778-2.2-3.825-4.88.132-.345.395-.98.845-1.961l.025-.053c1.464-3.178 3.242-6.79 5.285-10.795l.053-.132.58-1.116c.45-.822.635-1.19 1.351-1.643.346-.21.77-.315 1.246-.315.954 0 1.698.558 2.016 1.007.158.239.345.557.582.953l.558 1.089.08.159c2.041 4.004 3.821 7.608 5.279 10.794l.026.025.533 1.22.318.764c.243.613.294 1.222.213 1.858zm1.22-2.39c-.186-.583-.505-1.271-.9-2.094v-.03c-1.889-4.006-3.642-7.608-5.307-10.844l-.111-.163C15.317 1.461 14.468 0 12.001 0c-2.44 0-3.476 1.695-4.535 3.898l-.081.16c-1.669 3.236-3.421 6.843-5.303 10.847v.053l-.559 1.22c-.21.504-.317.768-.345.847C-.172 20.74 2.611 24 5.98 24c.027 0 .132 0 .265-.027h.372c1.75-.213 3.554-1.325 5.384-3.317 1.829 1.989 3.635 3.104 5.382 3.317h.372c.133.027.239.027.265.027 3.37.003 6.152-3.261 4.802-6.975z"></path>
                      </svg>
                      <span className="font-display text-[24px] font-bold tracking-[-0.04em] text-white">
                        Airbnb
                      </span>
                    </div>
                    <div className="flex h-[92px] items-center gap-3 rounded-[26px] bg-[#1C1C1C] px-10 transition-colors hover:bg-[#242424] md:h-[108px] md:px-12">
                      <svg
                        viewBox="0 0 24 24"
                        role="img"
                        aria-label="Shopify"
                        className="aspect-square shrink-0 h-8 text-white"
                        fill="currentColor"
                      >
                        <path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01zM11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.656.213-1.293.405-1.889.578C7.697 3.75 8.951.84 11.17.84V.83zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736.466-1.777 1.333-2.645 2.085-2.971.193.501.309 1.176.309 2.1zm.539-2.234c.694.074 1.141.867 1.429 1.755-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871v.002zm2.992 1.289c-.02 0-.06.021-.078.021s-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0 8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674-.675.213-.694.232-.772.87-.075.462-1.83 14.063-1.83 14.063L15.009 24l.927-21.166z"></path>
                      </svg>
                      <span className="font-display text-[24px] font-bold tracking-[-0.04em] text-white">
                        Shopify
                      </span>
                    </div>
                    <div className="flex h-[92px] items-center gap-3 rounded-[26px] bg-[#1C1C1C] px-10 transition-colors hover:bg-[#242424] md:h-[108px] md:px-12">
                      <svg
                        viewBox="0 0 24 24"
                        role="img"
                        aria-label="Linear"
                        className="aspect-square shrink-0 h-8 text-white"
                        fill="currentColor"
                      >
                        <path d="M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z"></path>
                      </svg>
                      <span className="font-display text-[24px] font-bold tracking-[-0.04em] text-white">
                        Linear
                      </span>
                    </div>
                    <div className="flex h-[92px] items-center gap-3 rounded-[26px] bg-[#1C1C1C] px-10 transition-colors hover:bg-[#242424] md:h-[108px] md:px-12">
                      <svg
                        viewBox="0 0 24 24"
                        role="img"
                        aria-label="Vercel"
                        className="aspect-square shrink-0 h-8 text-white"
                        fill="currentColor"
                      >
                        <path d="m12 1.608 12 20.784H0Z"></path>
                      </svg>
                      <span className="font-display text-[24px] font-bold tracking-[-0.04em] text-white">
                        Vercel
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
        <section id="12" className="border-t border-line py-16 first:border-0">
          <div className="mb-8 flex items-baseline gap-4">
            <span className="font-mono text-[12px] text-muted">12</span>
            <h2 className="text-[32px]">Motion spec</h2>
          </div>
          <div className="overflow-x-auto rounded-[20px] border border-line">
            <table className="w-full min-w-[640px] text-left text-[14.5px]">
              <thead className="bg-paper font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                <tr>
                  <th className="px-5 py-3 font-medium">Element</th>
                  <th className="px-5 py-3 font-medium">Behaviour</th>
                  <th className="px-5 py-3 font-medium">Timing</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-line">
                  <td className="px-5 py-3 font-bold">Global easing</td>
                  <td className="px-5 py-3 text-muted">
                    cubic-bezier(0.22, 1, 0.36, 1); transform + opacity only
                  </td>
                  <td className="px-5 py-3 font-mono text-[12.5px]">—</td>
                </tr>
                <tr className="border-t border-line">
                  <td className="px-5 py-3 font-bold">Smooth scroll</td>
                  <td className="px-5 py-3 text-muted">
                    Lenis inertia (easeOutQuint)
                  </td>
                  <td className="px-5 py-3 font-mono text-[12.5px]">1.1s</td>
                </tr>
                <tr className="border-t border-line">
                  <td className="px-5 py-3 font-bold">Scroll reveal</td>
                  <td className="px-5 py-3 text-muted">
                    Fade-up 24px, plays once, 80ms stagger
                  </td>
                  <td className="px-5 py-3 font-mono text-[12.5px]">700ms</td>
                </tr>
                <tr className="border-t border-line">
                  <td className="px-5 py-3 font-bold">Hero headline</td>
                  <td className="px-5 py-3 text-muted">
                    Word-by-word mask reveal; text, buttons &amp; visual
                    fade/scale in
                  </td>
                  <td className="px-5 py-3 font-mono text-[12.5px]">
                    900ms / 60ms step
                  </td>
                </tr>
                <tr className="border-t border-line">
                  <td className="px-5 py-3 font-bold">
                    Floating chips &amp; shapes
                  </td>
                  <td className="px-5 py-3 text-muted">
                    Idle float (+ 4° rotate on shapes)
                  </td>
                  <td className="px-5 py-3 font-mono text-[12.5px]">
                    6–9s loop
                  </td>
                </tr>
                <tr className="border-t border-line">
                  <td className="px-5 py-3 font-bold">Stats</td>
                  <td className="px-5 py-3 text-muted">
                    Count-up on enter (ease-out cubic)
                  </td>
                  <td className="px-5 py-3 font-mono text-[12.5px]">1.6s</td>
                </tr>
                <tr className="border-t border-line">
                  <td className="px-5 py-3 font-bold">Marquees</td>
                  <td className="px-5 py-3 text-muted">
                    Infinite, row 2 reversed, pause on hover, edge fade
                  </td>
                  <td className="px-5 py-3 font-mono text-[12.5px]">
                    40–50s loop
                  </td>
                </tr>
                <tr className="border-t border-line">
                  <td className="px-5 py-3 font-bold">Navbar</td>
                  <td className="px-5 py-3 text-muted">
                    Blur after 40px; hide on scroll down, show on scroll up
                  </td>
                  <td className="px-5 py-3 font-mono text-[12.5px]">500ms</td>
                </tr>
                <tr className="border-t border-line">
                  <td className="px-5 py-3 font-bold">Mega menus</td>
                  <td className="px-5 py-3 text-muted">
                    Fade + slide-down, items staggered 30ms
                  </td>
                  <td className="px-5 py-3 font-mono text-[12.5px]">220ms</td>
                </tr>
                <tr className="border-t border-line">
                  <td className="px-5 py-3 font-bold">Cards</td>
                  <td className="px-5 py-3 text-muted">
                    Lift −6px, shadow growth, #05CF45 accent border
                  </td>
                  <td className="px-5 py-3 font-mono text-[12.5px]">500ms</td>
                </tr>
                <tr className="border-t border-line">
                  <td className="px-5 py-3 font-bold">Buttons</td>
                  <td className="px-5 py-3 text-muted">
                    Circle fill sweep, arrow swap, press 0.97
                  </td>
                  <td className="px-5 py-3 font-mono text-[12.5px]">
                    650ms / 500ms
                  </td>
                </tr>
                <tr className="border-t border-line">
                  <td className="px-5 py-3 font-bold">Tabs / accordions</td>
                  <td className="px-5 py-3 text-muted">
                    Sliding indicator; smooth height
                  </td>
                  <td className="px-5 py-3 font-mono text-[12.5px]">
                    500ms / 300ms
                  </td>
                </tr>
                <tr className="border-t border-line">
                  <td className="px-5 py-3 font-bold">Page transition</td>
                  <td className="px-5 py-3 text-muted">Fade + 14px slide-up</td>
                  <td className="px-5 py-3 font-mono text-[12.5px]">550ms</td>
                </tr>
                <tr className="border-t border-line">
                  <td className="px-5 py-3 font-bold">Parallax</td>
                  <td className="px-5 py-3 text-muted">
                    Images &amp; glows translate with scroll (±6–15%)
                  </td>
                  <td className="px-5 py-3 font-mono text-[12.5px]">rAF</td>
                </tr>
                <tr className="border-t border-line">
                  <td className="px-5 py-3 font-bold">Reduced motion</td>
                  <td className="px-5 py-3 text-muted">
                    All animation, Lenis and parallax disabled
                  </td>
                  <td className="px-5 py-3 font-mono text-[12.5px]">—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </section>
  );
}
