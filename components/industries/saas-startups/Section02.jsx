export default function Section02() {
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
                Challenges
              </span>
            </div>
            <div className="reveal in" style={{ transitionDelay: "80ms" }}>
              <h2 className="mt-4 text-[34px] sm:text-[44px] lg:text-[52px]">
                What’s holding SaaS &amp; Startups leaders back.
              </h2>
            </div>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift p-7">
            <span className="font-display text-[44px] font-bold leading-none text-brand">
              01
            </span>
            <h3 className="mt-6 text-[20px] leading-snug">
              Product roadmaps outgrow engineering capacity
            </h3>
          </div>
          <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift p-7">
            <span className="font-display text-[44px] font-bold leading-none text-brand">
              02
            </span>
            <h3 className="mt-6 text-[20px] leading-snug">
              Reliability must improve while the product scales
            </h3>
          </div>
          <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift p-7">
            <span className="font-display text-[44px] font-bold leading-none text-brand">
              03
            </span>
            <h3 className="mt-6 text-[20px] leading-snug">
              Teams need to ship without building up technical debt
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
