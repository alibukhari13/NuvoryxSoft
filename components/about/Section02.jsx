export default function Section02() {
  return (
    <section className="bg-paper text-ink py-20 md:py-28 lg:py-32 relative">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="relative rounded-[22px] border shadow-soft bg-white border-line p-8 md:p-12">
            <span className="inline-flex items-center gap-2 font-mono text-[11.5px] font-medium uppercase tracking-[0.18em] text-muted">
              <span
                className="h-1.5 w-1.5 rounded-full bg-brand"
                aria-hidden="true"
              ></span>
              Mission
            </span>
            <h2 className="mt-5 text-[28px] leading-tight md:text-[36px]">
              Make intelligent software accessible to every ambitious company.
            </h2>
          </div>
          <div className="relative rounded-[22px] border shadow-soft border-forest bg-forest p-8 text-white md:p-12">
            <span className="inline-flex items-center gap-2 font-mono text-[11.5px] font-medium uppercase tracking-[0.18em] text-white/60">
              <span
                className="h-1.5 w-1.5 rounded-full bg-brand"
                aria-hidden="true"
              ></span>
              Vision
            </span>
            <h2 className="mt-5 text-[28px] leading-tight md:text-[36px]">
              A world where great software is the default, not the exception.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
