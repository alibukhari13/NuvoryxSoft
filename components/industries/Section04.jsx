export default function Section04() {
  return (
    <section className="bg-white text-ink py-20 md:py-28 lg:py-32 relative">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <div className="grid gap-6 md:grid-cols-4">
          <div className="border-l-2 border-brand pl-6">
            <div className="font-display text-[48px] font-bold tracking-[-0.04em]">
              <span className="tabular-nums">300</span>+
            </div>
            <div className="text-muted">clients served</div>
          </div>
          <div className="border-l-2 border-brand pl-6">
            <div className="font-display text-[48px] font-bold tracking-[-0.04em]">
              <span className="tabular-nums">24</span>
            </div>
            <div className="text-muted">countries</div>
          </div>
          <div className="border-l-2 border-brand pl-6">
            <div className="font-display text-[48px] font-bold tracking-[-0.04em]">
              <span className="tabular-nums">10</span>
            </div>
            <div className="text-muted">industries</div>
          </div>
          <div className="border-l-2 border-brand pl-6">
            <div className="font-display text-[48px] font-bold tracking-[-0.04em]">
              <span className="tabular-nums">70</span>+
            </div>
            <div className="text-muted">compliance audits passed</div>
          </div>
        </div>
      </div>
    </section>
  );
}
