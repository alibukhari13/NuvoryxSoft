export default function Section02() {
  return (
    <section className="bg-white text-ink py-20 md:py-28 lg:py-32 relative">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 font-mono text-[11.5px] font-medium uppercase tracking-[0.18em] text-muted">
              <span
                className="h-1.5 w-1.5 rounded-full bg-brand"
                aria-hidden="true"
              ></span>
              Prefer to talk?
            </span>
            <h2 className="mt-4 text-[34px] sm:text-[44px]">
              Book a 30-minute call.
            </h2>
            <p className="mt-4 text-[17px] text-muted">
              Pick a time that works. You’ll speak with a senior solutions
              architect, not a sales rep.
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              <li className="flex items-center gap-3 font-semibold">
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
                  className="lucide lucide-check h-5 w-5 text-brand"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>{" "}
                Understand your goals and constraints
              </li>
              <li className="flex items-center gap-3 font-semibold">
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
                  className="lucide lucide-check h-5 w-5 text-brand"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>{" "}
                Get honest advice on approach and cost
              </li>
              <li className="flex items-center gap-3 font-semibold">
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
                  className="lucide lucide-check h-5 w-5 text-brand"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>{" "}
                Receive a written recommendation in 3 days
              </li>
            </ul>
          </div>
          <div className="rounded-[28px] border border-line bg-white p-6 shadow-soft md:p-8">
            <div className="flex items-center gap-4">
              <img
                alt="Ethan Brooks"
                className="h-14 w-14 rounded-2xl object-cover"
                src="/agency-assets/d7422bed27487716b559bb42b8b297972b5209268cdead958a64a38f19ae7c18.jpg"
              />
              <div>
                <div className="font-display text-[18px] font-bold">
                  Book a call
                </div>
                <div className="flex items-center gap-3 text-[13.5px] text-muted">
                  <span className="flex items-center gap-1">
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
                    </svg>{" "}
                    30 min
                  </span>
                  <span className="flex items-center gap-1">
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
                      className="lucide lucide-video h-3.5 w-3.5"
                      aria-hidden="true"
                    >
                      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
                      <rect x="2" y="6" width="14" height="12" rx="2"></rect>
                    </svg>{" "}
                    Google Meet
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              November 2025
            </div>
            <div className="mt-3 grid grid-cols-5 gap-2">
              <button className="rounded-xl py-3 text-center text-[13px] font-bold transition-colors bg-paper hover:bg-ink/10">
                <div className="opacity-60">Mon</div>
                <div className="font-display text-[18px]">10</div>
              </button>
              <button className="rounded-xl py-3 text-center text-[13px] font-bold transition-colors bg-forest text-white">
                <div className="opacity-60">Tue</div>
                <div className="font-display text-[18px]">11</div>
              </button>
              <button className="rounded-xl py-3 text-center text-[13px] font-bold transition-colors bg-paper hover:bg-ink/10">
                <div className="opacity-60">Wed</div>
                <div className="font-display text-[18px]">12</div>
              </button>
              <button className="rounded-xl py-3 text-center text-[13px] font-bold transition-colors bg-paper hover:bg-ink/10">
                <div className="opacity-60">Thu</div>
                <div className="font-display text-[18px]">13</div>
              </button>
              <button className="rounded-xl py-3 text-center text-[13px] font-bold transition-colors bg-paper hover:bg-ink/10">
                <div className="opacity-60">Fri</div>
                <div className="font-display text-[18px]">14</div>
              </button>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-5">
              <button className="rounded-xl border py-2.5 text-[14px] font-bold transition-colors disabled:cursor-not-allowed disabled:border-transparent disabled:bg-paper disabled:text-ink/25 disabled:line-through border-line hover:border-ink">
                09:00
              </button>
              <button
                disabled={true}
                className="rounded-xl border py-2.5 text-[14px] font-bold transition-colors disabled:cursor-not-allowed disabled:border-transparent disabled:bg-paper disabled:text-ink/25 disabled:line-through border-line hover:border-ink"
              >
                10:30
              </button>
              <button className="rounded-xl border py-2.5 text-[14px] font-bold transition-colors disabled:cursor-not-allowed disabled:border-transparent disabled:bg-paper disabled:text-ink/25 disabled:line-through border-line hover:border-ink">
                13:00
              </button>
              <button
                disabled={true}
                className="rounded-xl border py-2.5 text-[14px] font-bold transition-colors disabled:cursor-not-allowed disabled:border-transparent disabled:bg-paper disabled:text-ink/25 disabled:line-through border-line hover:border-ink"
              >
                14:30
              </button>
              <button className="rounded-xl border py-2.5 text-[14px] font-bold transition-colors disabled:cursor-not-allowed disabled:border-transparent disabled:bg-paper disabled:text-ink/25 disabled:line-through border-line hover:border-ink">
                16:00
              </button>
            </div>
            <button
              className="group/btn relative isolate items-center overflow-hidden rounded-full font-display font-semibold tracking-[-0.01em] whitespace-nowrap select-none transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-40 aria-disabled:pointer-events-none aria-disabled:opacity-40 inline-flex bg-brand text-ink shadow-[0_12px_32px_-14px_rgba(5,207,69,0.75)] hover:shadow-[0_18px_44px_-12px_rgba(5,207,69,0.95)] h-[52px] text-[14.5px] pl-6 pr-[5px] gap-4 mt-6 w-full"
              disabled={true}
            >
              <span
                aria-hidden="true"
                className="absolute -z-10 aspect-square rounded-full transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] top-[5px] bottom-[5px] right-[5px] bg-forest scale-100 group-hover/btn:scale-[26]"
              ></span>
              <span className="relative inline-flex items-center gap-2 transition-colors duration-300 group-hover/btn:text-white mr-auto">
                Select a time
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
            <p className="mt-3 text-center text-[12.5px] text-muted">
              Times shown in your local time zone (ET).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
