export default function Section02() {
  return (
    <section className="bg-paper text-ink py-16 md:py-20 relative">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift p-8">
            <div className="font-display text-[56px] font-bold leading-none tracking-[-0.04em] text-forest">
              70%
            </div>
            <div className="mt-3 text-[16px] text-muted">
              claims fully automated
            </div>
          </div>
          <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift p-8">
            <div className="font-display text-[56px] font-bold leading-none tracking-[-0.04em] text-forest">
              4.2 days
            </div>
            <div className="mt-3 text-[16px] text-muted">faster settlement</div>
          </div>
          <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift p-8">
            <div className="font-display text-[56px] font-bold leading-none tracking-[-0.04em] text-forest">
              +18
            </div>
            <div className="mt-3 text-[16px] text-muted">NPS points</div>
          </div>
        </div>
      </div>
    </section>
  );
}
