export default function CaseStudyPage({ page }) {
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
            <a href="/case-studies" className="hover:text-white">
              Case Studies
            </a>
            <span>/</span>
            <span className="text-white">{page.client}</span>
          </nav>
          <div className="mt-12 max-w-4xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand">
              {page.industry} · {page.service}
            </span>
            <h1 className="mt-5 text-[42px] font-bold leading-[1.05] sm:text-[60px]">
              {page.title}
            </h1>
            <p className="mt-6 max-w-3xl text-[18px] leading-relaxed text-white/70">
              {page.summary}
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {page.metrics.map(([value, label]) => (
              <div
                key={label}
                className="rounded-[22px] border border-white/15 bg-white/[0.04] p-6"
              >
                <div className="text-[36px] font-bold text-brand">{value}</div>
                <p className="mt-2 text-[13px] text-white/65">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-[1120px] gap-12 px-5 md:grid-cols-2 md:px-8">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              THE CHALLENGE
            </span>
            <h2 className="mt-3 text-[30px] font-bold">
              A business-critical problem to solve.
            </h2>
            <p className="mt-5 text-[16px] leading-8 text-muted">
              {page.challenge}
            </p>
          </div>
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              THE APPROACH
            </span>
            <h2 className="mt-3 text-[30px] font-bold">
              Built with the team, for the team.
            </h2>
            <p className="mt-5 text-[16px] leading-8 text-muted">
              {page.approach}
            </p>
          </div>
        </div>
      </section>
      <section className="bg-paper py-16 md:py-20">
        <div className="mx-auto max-w-[1120px] px-5 md:px-8">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            WHAT CHANGED
          </span>
          <h2 className="mt-3 text-[32px] font-bold">
            Outcomes the business can measure.
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {page.outcomes.map((item) => (
              <article key={item.title} className="rounded-[22px] bg-white p-6">
                <h3 className="text-[18px] font-bold">{item.title}</h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-muted">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
          <blockquote className="mt-10 border-l-4 border-brand pl-6 text-[21px] font-semibold leading-relaxed">
            “{page.quote}”
            <footer className="mt-4 text-[13px] font-medium text-muted">
              {page.author} · {page.role}
            </footer>
          </blockquote>
        </div>
      </section>
      <section className="bg-ink py-16 text-white">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <h2 className="text-[32px] font-bold">Have a similar challenge?</h2>
          <p className="mt-3 text-white/65">
            Let’s find the right team and approach for your goals.
          </p>
          <a
            href="/book-consultation"
            className="mt-6 inline-flex rounded-full bg-brand px-6 py-3 font-bold text-ink"
          >
            Start a conversation →
          </a>
        </div>
      </section>
    </>
  );
}
