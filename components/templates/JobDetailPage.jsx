export default function JobDetailPage({ page }) {
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
            <a href="/careers" className="hover:text-white">
              Careers
            </a>
            <span>/</span>
            <span className="text-white">{page.title}</span>
          </nav>
          <div className="mt-12 max-w-4xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand">
              CAREERS · {page.team}
            </span>
            <h1 className="mt-5 text-[42px] font-bold leading-[1.05] sm:text-[60px]">
              {page.title}
            </h1>
            <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-white/70">
              {page.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-[13px] font-bold text-white/65">
              <span className="rounded-full border border-white/20 px-4 py-2">
                {page.location}
              </span>
              <span className="rounded-full border border-white/20 px-4 py-2">
                {page.type}
              </span>
              <span className="rounded-full border border-white/20 px-4 py-2">
                {page.level}
              </span>
            </div>
            <a
              href="mailto:careers@nuvoryx.com?subject=Application"
              className="mt-8 inline-flex rounded-full bg-brand px-7 py-4 font-bold text-ink hover:-translate-y-0.5"
            >
              Apply for this role →
            </a>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-[1120px] gap-12 px-5 md:grid-cols-[minmax(0,720px)_300px] md:px-8">
          <div>
            <h2 className="text-[30px] font-bold">About the role</h2>
            <p className="mt-5 text-[16px] leading-8 text-muted">
              {page.about}
            </p>
            <h2 className="mt-12 text-[30px] font-bold">What you’ll do</h2>
            <ul className="mt-5 space-y-3">
              {page.responsibilities.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-[15px] leading-relaxed text-muted"
                >
                  <span className="text-forest">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <h2 className="mt-12 text-[30px] font-bold">What you’ll bring</h2>
            <ul className="mt-5 space-y-3">
              {page.qualifications.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-[15px] leading-relaxed text-muted"
                >
                  <span className="text-forest">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <aside className="h-fit rounded-[24px] bg-paper p-6">
            <h3 className="text-[19px] font-bold">Benefits at Nuvoryx</h3>
            <ul className="mt-4 space-y-3 text-[14px] text-muted">
              {[
                "Flexible, distributed teams",
                "Learning and certification budget",
                "Health and wellbeing support",
                "Clear growth and mentorship",
              ].map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>
            <a
              href="mailto:careers@nuvoryx.com?subject=Application"
              className="mt-7 inline-flex rounded-full bg-brand px-5 py-3 text-[13px] font-bold text-ink"
            >
              Apply now →
            </a>
          </aside>
        </div>
      </section>
      <section className="bg-ink py-16 text-white">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-5 px-5 md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/50">
              GROW WITH US
            </span>
            <h2 className="mt-3 text-[30px] font-bold">
              Do work that moves the world forward.
            </h2>
          </div>
          <a
            href="/careers"
            className="rounded-full border border-white/25 px-6 py-3 font-bold hover:border-brand"
          >
            View all open roles →
          </a>
        </div>
      </section>
    </>
  );
}
