export default function Section03() {
  return (
    <section className="bg-ink text-white py-20 md:py-28 lg:py-32 relative overflow-hidden">
      <div className="absolute -left-20 top-20 h-[400px] w-[400px] rounded-full bg-brand/15 blur-[120px]"></div>
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8 relative">
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="reveal" style={{ transitionDelay: "0ms" }}>
              <span className="inline-flex items-center gap-2 font-mono text-[11.5px] font-medium uppercase tracking-[0.18em] text-white/60">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-brand"
                  aria-hidden="true"
                ></span>
                Agile, done properly
              </span>
            </div>
            <div className="reveal" style={{ transitionDelay: "80ms" }}>
              <h2 className="mt-4 text-[34px] sm:text-[44px] lg:text-[52px]">
                Two-week sprints. Zero surprises.
              </h2>
            </div>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          <div className="rounded-[22px] border border-white/10 bg-white/[0.03] p-6">
            <div className="font-mono text-[12px] text-brand">Day 1</div>
            <h3 className="mt-3 text-[20px]">Sprint planning</h3>
            <p className="mt-2 text-[14.5px] text-white/60">
              Agree sprint goals and capacity with your product owner.
            </p>
          </div>
          <div className="rounded-[22px] border border-white/10 bg-white/[0.03] p-6">
            <div className="font-mono text-[12px] text-brand">Day 1–10</div>
            <h3 className="mt-3 text-[20px]">Daily stand-up</h3>
            <p className="mt-2 text-[14.5px] text-white/60">
              15 minutes, async-friendly, blockers raised immediately.
            </p>
          </div>
          <div className="rounded-[22px] border border-white/10 bg-white/[0.03] p-6">
            <div className="font-mono text-[12px] text-brand">Day 10</div>
            <h3 className="mt-3 text-[20px]">Sprint demo</h3>
            <p className="mt-2 text-[14.5px] text-white/60">
              Working software shown to stakeholders every fortnight.
            </p>
          </div>
          <div className="rounded-[22px] border border-white/10 bg-white/[0.03] p-6">
            <div className="font-mono text-[12px] text-brand">Day 10</div>
            <h3 className="mt-3 text-[20px]">Retrospective</h3>
            <p className="mt-2 text-[14.5px] text-white/60">
              Inspect and adapt: what to keep, change and try.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
