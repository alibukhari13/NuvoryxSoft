export default function MarketingPage({ page }) {
  return (
    <>
      <section
        data-hero="dark"
        className="relative -mt-[72px] overflow-hidden bg-ink pt-[72px] text-white"
      >
        <div className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_right,#000_20%,transparent_70%)]" />
        <div className="absolute -right-24 -top-32 h-[480px] w-[480px] rounded-full bg-brand/20 blur-[120px]" />
        <div className="relative mx-auto w-full max-w-[1280px] px-5 pb-24 pt-12 md:px-8 md:pb-28 md:pt-16">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-[13.5px] font-semibold text-white/50"
          >
            <a href="/" className="hover:text-white">
              Home
            </a>
            <span>/</span>
            <span className="text-white">{page.title}</span>
          </nav>
          <div className="mt-12 max-w-3xl">
            <span className="inline-flex items-center gap-2 font-mono text-[11.5px] uppercase tracking-[0.18em] text-white/60">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              {page.eyebrow}
            </span>
            <h1 className="mt-5 text-[42px] font-bold leading-[1.05] sm:text-[60px]">
              {page.headline || page.title}
            </h1>
            <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-white/70">
              {page.description}
            </p>
            <a
              href={page.ctaHref || "/book-consultation"}
              className="mt-8 inline-flex rounded-full bg-brand px-7 py-4 font-bold text-ink transition hover:-translate-y-0.5"
            >
              {page.cta || "Talk to an expert"}{" "}
              <span aria-hidden="true" className="ml-2">
                →
              </span>
            </a>
          </div>
        </div>
      </section>
      {page.sections?.map((section, index) => (
        <section
          key={section.title}
          className={index % 2 ? "bg-paper py-16 md:py-20" : "py-16 md:py-20"}
        >
          <div className="mx-auto max-w-[1280px] px-5 md:px-8">
            <div className="max-w-3xl">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                {section.eyebrow || page.eyebrow}
              </span>
              <h2 className="mt-3 text-[32px] font-bold leading-tight md:text-[40px]">
                {section.title}
              </h2>
              {section.description && (
                <p className="mt-4 text-[17px] leading-relaxed text-muted">
                  {section.description}
                </p>
              )}
            </div>
            {section.items?.length > 0 && (
              <div className="mt-9 grid gap-4 md:grid-cols-3">
                {section.items.map((item, itemIndex) => (
                  <article
                    key={item.title}
                    className="rounded-[24px] border border-line bg-white p-7 transition duration-500 hover:-translate-y-1.5 hover:shadow-lift"
                  >
                    <span className="font-mono text-[12px] text-forest">
                      0{itemIndex + 1}
                    </span>
                    <h3 className="mt-5 text-[19px] font-bold">{item.title}</h3>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-muted">
                      {item.description}
                    </p>
                    {item.href && (
                      <a
                        className="mt-5 inline-flex text-[13px] font-bold text-forest hover:text-ink"
                        href={item.href}
                      >
                        Learn more →
                      </a>
                    )}
                  </article>
                ))}
              </div>
            )}
            {section.paragraphs?.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-5 max-w-3xl text-[16px] leading-8 text-muted"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      ))}
      <section className="bg-ink py-16 text-white md:py-20">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-5 md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/50">
              NEXT STEP
            </span>
            <h2 className="mt-3 text-[32px] font-bold">
              Let’s build what’s next, together.
            </h2>
          </div>
          <a
            href="/book-consultation"
            className="rounded-full bg-brand px-7 py-4 font-bold text-ink transition hover:-translate-y-0.5"
          >
            Book a Free Consultation →
          </a>
        </div>
      </section>
    </>
  );
}
