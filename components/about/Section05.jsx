export default function Section05() {
  return (
    <section className="bg-paper text-ink py-20 md:py-28 lg:py-32 relative">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="reveal in" style={{ transitionDelay: "0ms" }}>
              <span className="inline-flex items-center gap-2 font-mono text-[11.5px] font-medium uppercase tracking-[0.18em] text-muted">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-brand"
                  aria-hidden="true"
                ></span>
                Our story
              </span>
            </div>
            <div className="reveal in" style={{ transitionDelay: "80ms" }}>
              <h2 className="mt-4 text-[34px] sm:text-[44px] lg:text-[52px]">
                Thirteen years in the making.
              </h2>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute left-[19px] top-0 h-full w-px bg-line md:left-0 md:right-0 md:top-[19px] md:h-px md:w-full"></div>
          <div className="grid gap-8 md:grid-cols-6">
            <div className="reveal in" style={{ transitionDelay: "0ms" }}>
              <div className="relative flex gap-5 md:flex-col">
                <span className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-line bg-white">
                  <span className="h-2 w-2 rounded-full bg-ink"></span>
                </span>
                <div>
                  <div className="font-display text-[26px] font-bold">2012</div>
                  <p className="mt-2 text-[14.5px] text-muted">
                    Founded in San Francisco by three engineers with a laptop
                    each and one client.
                  </p>
                </div>
              </div>
            </div>
            <div className="reveal in" style={{ transitionDelay: "80ms" }}>
              <div className="relative flex gap-5 md:flex-col">
                <span className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-line bg-white">
                  <span className="h-2 w-2 rounded-full bg-ink"></span>
                </span>
                <div>
                  <div className="font-display text-[26px] font-bold">2015</div>
                  <p className="mt-2 text-[14.5px] text-muted">
                    Opened our Lahore engineering hub. Crossed 100 engineers.
                  </p>
                </div>
              </div>
            </div>
            <div className="reveal in" style={{ transitionDelay: "160ms" }}>
              <div className="relative flex gap-5 md:flex-col">
                <span className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-line bg-white">
                  <span className="h-2 w-2 rounded-full bg-ink"></span>
                </span>
                <div>
                  <div className="font-display text-[26px] font-bold">2018</div>
                  <p className="mt-2 text-[14.5px] text-muted">
                    Launched cloud practice; became AWS Advanced Partner.
                  </p>
                </div>
              </div>
            </div>
            <div className="reveal in" style={{ transitionDelay: "240ms" }}>
              <div className="relative flex gap-5 md:flex-col">
                <span className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-line bg-white">
                  <span className="h-2 w-2 rounded-full bg-ink"></span>
                </span>
                <div>
                  <div className="font-display text-[26px] font-bold">2020</div>
                  <p className="mt-2 text-[14.5px] text-muted">
                    Expanded to London and Dubai. Achieved ISO 27001 and SOC 2.
                  </p>
                </div>
              </div>
            </div>
            <div className="reveal in" style={{ transitionDelay: "320ms" }}>
              <div className="relative flex gap-5 md:flex-col">
                <span className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-line bg-white">
                  <span className="h-2 w-2 rounded-full bg-ink"></span>
                </span>
                <div>
                  <div className="font-display text-[26px] font-bold">2023</div>
                  <p className="mt-2 text-[14.5px] text-muted">
                    Founded our AI practice; 50+ generative AI systems in
                    production.
                  </p>
                </div>
              </div>
            </div>
            <div className="reveal in" style={{ transitionDelay: "400ms" }}>
              <div className="relative flex gap-5 md:flex-col">
                <span className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-brand bg-brand">
                  <span className="h-2 w-2 rounded-full bg-ink"></span>
                </span>
                <div>
                  <div className="font-display text-[26px] font-bold">2025</div>
                  <p className="mt-2 text-[14.5px] text-muted">
                    Lisbon hub opens. Select partner with OpenAI and Anthropic.
                    1,400+ people.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
