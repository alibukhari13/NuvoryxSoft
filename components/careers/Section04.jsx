export default function Section04() {
  return (
    <section className="bg-ink text-white py-20 md:py-28 lg:py-32 relative">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="reveal in" style={{ transitionDelay: "0ms" }}>
              <span className="inline-flex items-center gap-2 font-mono text-[11.5px] font-medium uppercase tracking-[0.18em] text-white/60">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-brand"
                  aria-hidden="true"
                ></span>
                Hiring process
              </span>
            </div>
            <div className="reveal in" style={{ transitionDelay: "80ms" }}>
              <h2 className="mt-4 text-[34px] sm:text-[44px] lg:text-[52px]">
                Transparent, respectful, fast.
              </h2>
            </div>
            <div className="reveal in" style={{ transitionDelay: "160ms" }}>
              <p className="mt-5 max-w-2xl text-lg text-white/70">
                Average time from application to offer: 18 days.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="relative grid gap-4 md:grid-cols-5">
            <div className="absolute left-0 right-0 top-6 hidden h-px md:block bg-white/15"></div>
            <div
              className="absolute left-0 top-6 hidden h-px bg-brand transition-all duration-500 md:block"
              style={{ width: "0%" }}
            ></div>
            <button className="group relative text-left">
              <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full border-2 font-display text-[15px] font-bold transition-all border-brand bg-brand text-ink">
                01
              </span>
              <div className="mt-6 rounded-[20px] border p-6 transition-all border-brand/50 bg-white/[0.06] border-brand">
                <div className="flex items-center justify-between">
                  <h3 className="flex items-center gap-2.5 text-[22px]">
                    Apply
                  </h3>
                  <span className="font-mono text-[10.5px] uppercase text-white/50">
                    Day 0
                  </span>
                </div>
                <p className="mt-3 text-[14.5px] text-white/65">
                  Send your CV and a few lines about what excites you.
                </p>
              </div>
            </button>
            <button className="group relative text-left">
              <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full border-2 font-display text-[15px] font-bold transition-all border-white/20 bg-ink text-white border-line bg-white text-ink">
                02
              </span>
              <div className="mt-6 rounded-[20px] border p-6 transition-all border-white/10 border-transparent">
                <div className="flex items-center justify-between">
                  <h3 className="flex items-center gap-2.5 text-[22px]">
                    Intro call
                  </h3>
                  <span className="font-mono text-[10.5px] uppercase text-white/50">
                    Day 3
                  </span>
                </div>
                <p className="mt-3 text-[14.5px] text-white/65">
                  A 30-minute chat with our talent team about you and the role.
                </p>
              </div>
            </button>
            <button className="group relative text-left">
              <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full border-2 font-display text-[15px] font-bold transition-all border-white/20 bg-ink text-white border-line bg-white text-ink">
                03
              </span>
              <div className="mt-6 rounded-[20px] border p-6 transition-all border-white/10 border-transparent">
                <div className="flex items-center justify-between">
                  <h3 className="flex items-center gap-2.5 text-[22px]">
                    Skills
                  </h3>
                  <span className="font-mono text-[10.5px] uppercase text-white/50">
                    Day 8
                  </span>
                </div>
                <p className="mt-3 text-[14.5px] text-white/65">
                  A practical, paid take-home or live pairing, never trick
                  puzzles.
                </p>
              </div>
            </button>
            <button className="group relative text-left">
              <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full border-2 font-display text-[15px] font-bold transition-all border-white/20 bg-ink text-white border-line bg-white text-ink">
                04
              </span>
              <div className="mt-6 rounded-[20px] border p-6 transition-all border-white/10 border-transparent">
                <div className="flex items-center justify-between">
                  <h3 className="flex items-center gap-2.5 text-[22px]">
                    Team
                  </h3>
                  <span className="font-mono text-[10.5px] uppercase text-white/50">
                    Day 12
                  </span>
                </div>
                <p className="mt-3 text-[14.5px] text-white/65">
                  Meet your future lead and teammates. Ask us anything.
                </p>
              </div>
            </button>
            <button className="group relative text-left">
              <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full border-2 font-display text-[15px] font-bold transition-all border-white/20 bg-ink text-white border-line bg-white text-ink">
                05
              </span>
              <div className="mt-6 rounded-[20px] border p-6 transition-all border-white/10 border-transparent">
                <div className="flex items-center justify-between">
                  <h3 className="flex items-center gap-2.5 text-[22px]">
                    Offer
                  </h3>
                  <span className="font-mono text-[10.5px] uppercase text-white/50">
                    Day 18
                  </span>
                </div>
                <p className="mt-3 text-[14.5px] text-white/65">
                  A clear offer with full compensation breakdown.
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
