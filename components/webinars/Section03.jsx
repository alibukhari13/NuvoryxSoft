export default function Section03() {
  return (
    <section className="bg-white text-ink py-16 md:py-20 relative">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <div className="grid gap-8 rounded-[28px] border border-line bg-paper p-8 md:p-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 font-mono text-[11.5px] font-medium uppercase tracking-[0.18em] text-muted">
              <span
                className="h-1.5 w-1.5 rounded-full bg-brand"
                aria-hidden="true"
              ></span>
              Newsletter
            </span>
            <h2 className="mt-4 text-[30px] sm:text-[38px]">
              The Nuvoryx Brief.
            </h2>
            <p className="mt-3 text-muted">
              Our best thinking on AI, engineering and cloud, once a month. Join
              24,000 tech leaders.
            </p>
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
      </div>
    </section>
  );
}
