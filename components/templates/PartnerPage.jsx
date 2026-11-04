export default function PartnerPage({ page }) {
  return (
    <>
      <section
        data-hero="dark"
        className="relative -mt-[72px] overflow-hidden bg-ink pt-[72px] text-white"
      >
        <div className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_right,#000_20%,transparent_70%)]" />
        <div className="absolute -right-24 -top-32 h-[480px] w-[480px] rounded-full bg-brand/20 blur-[120px]" />
        <div className="relative mx-auto max-w-[1280px] px-5 pb-24 pt-12 md:px-8 md:pb-28 md:pt-16">
          <nav
            aria-label="Breadcrumb"
            className="flex gap-2 text-[13.5px] font-semibold text-white/50"
          >
            <a href="/" className="hover:text-white">
              Home
            </a>
            <span>/</span>
            <a href="/partners" className="hover:text-white">
              Partners
            </a>
            <span>/</span>
            <span className="text-white">{page.name}</span>
          </nav>
          <div className="mt-12 max-w-4xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand">
              TECHNOLOGY ALLIANCE
            </span>
            <div className="mt-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[22px] font-extrabold text-ink">
              {page.mark}
            </div>
            <h1 className="mt-6 text-[42px] font-bold leading-[1.05] sm:text-[60px]">
              Build more with {page.name} and Nuvoryx.
            </h1>
            <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-white/70">
              {page.description}
            </p>
            <a
              href="/book-consultation"
              className="mt-8 inline-flex rounded-full bg-brand px-7 py-4 font-bold text-ink hover:-translate-y-0.5"
            >
              Talk with a partner specialist →
            </a>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <div className="max-w-2xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              WHY THIS ALLIANCE
            </span>
            <h2 className="mt-3 text-[34px] font-bold">
              Technology expertise with delivery accountability.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-muted">
              Our certified teams bring architecture, implementation and
              operational experience across the {page.name} ecosystem.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {page.capabilities.map((item, index) => (
              <article
                key={item.title}
                className="rounded-[24px] border border-line bg-white p-7 hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="font-mono text-[12px] text-forest">
                  0{index + 1}
                </span>
                <h3 className="mt-5 text-[19px] font-bold">{item.title}</h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-muted">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-paper py-16">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <h2 className="text-[32px] font-bold">What we bring to your team.</h2>
          <div className="mt-7 grid gap-3 md:grid-cols-2">
            {page.proofs.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-line bg-white px-5 py-4 font-semibold"
              >
                ✓ <span className="ml-2">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
