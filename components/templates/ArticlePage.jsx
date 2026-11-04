export default function ArticlePage({ page }) {
  return (
    <>
      <section
        data-hero="dark"
        className="relative -mt-[72px] overflow-hidden bg-ink pt-[72px] text-white"
      >
        <div className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_right,#000_20%,transparent_70%)]" />
        <div className="relative mx-auto max-w-[1280px] px-5 pb-20 pt-12 md:px-8 md:pb-28 md:pt-16">
          <nav
            aria-label="Breadcrumb"
            className="flex gap-2 text-[13.5px] font-semibold text-white/50"
          >
            <a href="/" className="hover:text-white">
              Home
            </a>
            <span>/</span>
            <a href="/blog" className="hover:text-white">
              Insights
            </a>
            <span>/</span>
            <span className="text-white">{page.title}</span>
          </nav>
          <div className="mt-12 max-w-4xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand">
              {page.eyebrow} · {page.date} · {page.readTime}
            </span>
            <h1 className="mt-5 text-[42px] font-bold leading-[1.05] sm:text-[60px]">
              {page.title}
            </h1>
            <p className="mt-6 max-w-3xl text-[18px] leading-relaxed text-white/70">
              {page.description}
            </p>
          </div>
        </div>
      </section>
      <article className="py-16 md:py-24">
        <div className="mx-auto grid max-w-[1120px] gap-12 px-5 md:grid-cols-[minmax(0,760px)_260px] md:px-8">
          <div className="prose max-w-none">
            {page.paragraphs.map((paragraph, index) =>
              index === 0 ? (
                <p
                  key={paragraph}
                  className="text-[20px] font-medium leading-9 text-ink"
                >
                  {paragraph}
                </p>
              ) : (
                <p
                  key={paragraph}
                  className="mt-7 text-[17px] leading-8 text-muted"
                >
                  {paragraph}
                </p>
              ),
            )}
            <blockquote className="my-10 rounded-r-2xl border-l-4 border-brand bg-paper px-7 py-6 text-[20px] font-semibold leading-relaxed text-ink">
              {page.pullQuote}
            </blockquote>
            <a
              href="/resources"
              className="inline-flex font-bold text-forest hover:text-ink"
            >
              ← Back to the Resource Center
            </a>
          </div>
          <aside className="h-fit rounded-[24px] bg-paper p-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              ABOUT THIS ARTICLE
            </span>
            <p className="mt-4 text-[14px] leading-relaxed text-muted">
              {page.description}
            </p>
            <a
              href="/book-consultation"
              className="mt-6 inline-flex font-bold text-forest hover:text-ink"
            >
              Talk to our team →
            </a>
          </aside>
        </div>
      </article>
      <section className="bg-paper py-16">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            KEEP READING
          </span>
          <h2 className="mt-3 text-[32px] font-bold">More from Nuvoryx.</h2>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              className="rounded-full border border-line bg-white px-5 py-3 font-bold hover:border-brand"
              href="/blog"
            >
              All insights →
            </a>
            <a
              className="rounded-full border border-line bg-white px-5 py-3 font-bold hover:border-brand"
              href="/whitepapers"
            >
              White papers →
            </a>
            <a
              className="rounded-full border border-line bg-white px-5 py-3 font-bold hover:border-brand"
              href="/webinars"
            >
              Webinars →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
