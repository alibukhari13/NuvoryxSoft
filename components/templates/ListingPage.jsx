export default function ListingPage({ page }) {
  return (
    <>
      <section
        data-hero="dark"
        className="relative -mt-[72px] overflow-hidden bg-ink pt-[72px] text-white"
      >
        <div className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_right,#000_20%,transparent_70%)]" />
        <div className="relative mx-auto max-w-[1280px] px-5 pb-20 pt-12 md:px-8 md:pb-24 md:pt-16">
          <nav
            aria-label="Breadcrumb"
            className="flex gap-2 text-[13.5px] font-semibold text-white/50"
          >
            <a href="/" className="hover:text-white">
              Home
            </a>
            <span>/</span>
            <span className="text-white">{page.title}</span>
          </nav>
          <div className="mt-12 max-w-3xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand">
              {page.eyebrow}
            </span>
            <h1 className="mt-5 text-[42px] font-bold leading-[1.05] sm:text-[60px]">
              {page.headline || page.title}
            </h1>
            <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-white/70">
              {page.description}
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          {page.filterLabel && (
            <div className="mb-8 flex flex-wrap gap-2">
              {page.filters.map((filter) => (
                <button
                  key={filter}
                  className="rounded-full border border-line px-4 py-2 text-[13px] font-bold transition hover:border-brand hover:bg-paper"
                >
                  {filter}
                </button>
              ))}
            </div>
          )}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {page.items.map((item, index) => (
              <article
                key={item.title}
                className="group flex min-h-[260px] flex-col rounded-[24px] border border-line bg-white p-7 transition duration-500 hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                  {item.eyebrow ||
                    `${page.itemLabel || "FEATURED"} · 0${index + 1}`}
                </span>
                <h2 className="mt-5 text-[22px] font-bold leading-tight tracking-[-0.02em]">
                  {item.title}
                </h2>
                <p className="mt-3 text-[14.5px] leading-relaxed text-muted">
                  {item.description}
                </p>
                <a
                  href={item.href || "/resources"}
                  className="mt-auto inline-flex pt-7 text-[13px] font-bold text-forest group-hover:text-ink"
                >
                  {item.action || "Explore"}{" "}
                  <span className="ml-2 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </article>
            ))}
          </div>
          {page.emptyMessage && (
            <p className="mt-6 text-center text-[14px] text-muted">
              {page.emptyMessage}
            </p>
          )}
        </div>
      </section>
      <section className="bg-paper py-16">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-5 md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              HAVE A QUESTION?
            </span>
            <h2 className="mt-3 text-[30px] font-bold">
              Our team can help you find the right next step.
            </h2>
          </div>
          <a
            href="/contact"
            className="rounded-full bg-brand px-7 py-4 font-bold text-ink hover:-translate-y-0.5"
          >
            Talk to our team →
          </a>
        </div>
      </section>
    </>
  );
}
