export default function LegalPage({ page }) {
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
              NUVORYX · {page.eyebrow}
            </span>
            <h1 className="mt-5 text-[42px] font-bold leading-[1.05] sm:text-[60px]">
              {page.title}
            </h1>
            <p className="mt-6 text-[17px] text-white/70">{page.description}</p>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.15em] text-white/45">
              Last updated {page.updated}
            </p>
          </div>
        </div>
      </section>
      <article className="py-14 md:py-20">
        <div className="mx-auto max-w-[900px] px-5 md:px-8">
          {page.sections.map((section, index) => (
            <section key={section.title} className="mb-12">
              <div className="flex gap-5">
                <span className="pt-1 font-mono text-[12px] text-forest">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="text-[24px] font-bold">{section.title}</h2>
                  <p className="mt-4 text-[15px] leading-8 text-muted">
                    {section.body}
                  </p>
                </div>
              </div>
            </section>
          ))}
        </div>
      </article>
    </>
  );
}
