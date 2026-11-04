export default function Section07() {
  return (
    <section className="bg-forest text-white py-20 md:py-28 lg:py-32 relative overflow-hidden">
      <div className="absolute -right-20 top-0 h-[400px] w-[400px] rounded-full bg-brand/25 blur-[120px]"></div>
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8 relative">
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="reveal in" style={{ transitionDelay: "0ms" }}>
              <span className="inline-flex items-center gap-2 font-mono text-[11.5px] font-medium uppercase tracking-[0.18em] text-white/60">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-brand"
                  aria-hidden="true"
                ></span>
                Results
              </span>
            </div>
            <div className="reveal in" style={{ transitionDelay: "80ms" }}>
              <h2 className="mt-4 text-[34px] sm:text-[44px] lg:text-[52px]">
                Impact our clients measure.
              </h2>
            </div>
          </div>
        </div>
        <div className="grid gap-px overflow-hidden rounded-[24px] bg-white/10 md:grid-cols-4">
          <div className="bg-forest p-8">
            <div className="font-display text-[56px] font-bold leading-none tracking-[-0.04em]">
              <span className="tabular-nums">62</span>
              <span className="text-brand">%</span>
            </div>
            <div className="mt-3 text-[15px] text-white/65">
              faster time to value
            </div>
          </div>
          <div className="bg-forest p-8">
            <div className="font-display text-[56px] font-bold leading-none tracking-[-0.04em]">
              <span className="tabular-nums">3</span>
              <span className="text-brand">x</span>
            </div>
            <div className="mt-3 text-[15px] text-white/65">
              release frequency
            </div>
          </div>
          <div className="bg-forest p-8">
            <div className="font-display text-[56px] font-bold leading-none tracking-[-0.04em]">
              <span className="tabular-nums">41</span>
              <span className="text-brand">%</span>
            </div>
            <div className="mt-3 text-[15px] text-white/65">
              lower run costs
            </div>
          </div>
          <div className="bg-forest p-8">
            <div className="font-display text-[56px] font-bold leading-none tracking-[-0.04em]">
              <span className="tabular-nums">98</span>
              <span className="text-brand">%</span>
            </div>
            <div className="mt-3 text-[15px] text-white/65">
              on-time milestone delivery
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
