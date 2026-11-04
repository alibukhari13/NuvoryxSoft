export default function StatusPage({ page }) {
  return (
    <section
      data-hero="dark"
      className="relative -mt-[72px] flex min-h-[70vh] items-center overflow-hidden bg-ink pt-[72px] text-white"
    >
      <div className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_right,#000_20%,transparent_70%)]" />
      <div className="absolute -right-24 -top-32 h-[480px] w-[480px] rounded-full bg-brand/20 blur-[120px]" />
      <div className="relative mx-auto w-full max-w-[1280px] px-5 py-20 md:px-8">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand">
          {page.eyebrow}
        </span>
        <h1 className="mt-5 max-w-3xl text-[42px] font-bold leading-[1.05] sm:text-[60px]">
          {page.title}
        </h1>
        <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-white/70">
          {page.description}
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href={page.primaryHref || "/"}
            className="rounded-full bg-brand px-7 py-4 font-bold text-ink"
          >
            {page.primary || "Back to home"} →
          </a>
          {page.secondaryHref && (
            <a
              href={page.secondaryHref}
              className="rounded-full border border-white/25 px-7 py-4 font-bold hover:border-white"
            >
              {page.secondary} →
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
