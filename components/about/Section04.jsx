export default function Section04() {
  return (
    <section className="bg-forest text-white py-20 md:py-28 lg:py-32 relative overflow-hidden">
      <div className="absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-brand/20 blur-[120px]"></div>
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8 relative">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <div className="font-display text-[48px] font-bold tracking-[-0.04em] md:text-[64px]">
              <span className="tabular-nums">1,400</span>
              <span className="text-brand">+</span>
            </div>
            <div className="text-white/60">People</div>
          </div>
          <div>
            <div className="font-display text-[48px] font-bold tracking-[-0.04em] md:text-[64px]">
              <span className="tabular-nums">7</span>
              <span className="text-brand"></span>
            </div>
            <div className="text-white/60">Global hubs</div>
          </div>
          <div>
            <div className="font-display text-[48px] font-bold tracking-[-0.04em] md:text-[64px]">
              <span className="tabular-nums">300</span>
              <span className="text-brand">+</span>
            </div>
            <div className="text-white/60">Clients</div>
          </div>
          <div>
            <div className="font-display text-[48px] font-bold tracking-[-0.04em] md:text-[64px]">
              <span className="tabular-nums">24</span>
              <span className="text-brand"></span>
            </div>
            <div className="text-white/60">Countries served</div>
          </div>
        </div>
      </div>
    </section>
  );
}
