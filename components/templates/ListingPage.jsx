import Section04 from "@/components/webinars/Section04";

function ArrowRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 transition-transform group-hover:translate-x-1"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function ResourceCard({ item, itemLabel, index }) {
  return (
    <a href={item.href || "/resources"} className="group block h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-[22px] border border-line bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lift">
        <div className="relative aspect-[16/10] overflow-hidden bg-forest">
          {item.image ? (
            <img
              src={item.image}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <>
              <div className="grid-bg absolute inset-0 opacity-50" />
              <div className="absolute -right-10 -top-16 h-48 w-48 rounded-full bg-brand/30 blur-3xl transition-transform duration-700 group-hover:scale-125" />
            </>
          )}
          <div className="absolute bottom-5 left-5 right-5">
            <span className="inline-flex rounded-full bg-white/95 px-3 py-1 text-[12px] font-bold text-ink backdrop-blur">
              {itemLabel || "Resource"}
            </span>
          </div>
          <div className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-brand text-ink transition-transform group-hover:scale-110">
            <ArrowRight />
          </div>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center gap-3 text-[12.5px] font-semibold text-muted">
            {item.eyebrow || `${itemLabel || "Resource"} · 0${index + 1}`}
          </div>
          <h2 className="mt-3 text-[18px] leading-snug">{item.title}</h2>
          <p className="mt-2 line-clamp-2 text-[14.5px] text-muted">
            {item.description}
          </p>
          <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[14px] font-bold text-ink group-hover:text-forest">
            {item.action || "Explore"}
            <ArrowRight />
          </span>
        </div>
      </article>
    </a>
  );
}

function Newsletter() {
  return (
    <section className="relative bg-white py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <div className="grid gap-8 rounded-[28px] border border-line bg-paper p-8 md:p-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 font-mono text-[11.5px] font-medium uppercase tracking-[0.18em] text-muted">
              <span
                className="h-1.5 w-1.5 rounded-full bg-brand"
                aria-hidden="true"
              />
              Newsletter
            </span>
            <h2 className="mt-4 text-[30px] sm:text-[38px]">
              The Nuvoryx Brief.
            </h2>
            <p className="mt-3 text-muted">
              Our best thinking on AI, engineering and cloud, once a month. Join
              24,000 tech leaders.
            </p>
          </div>
          <form noValidate>
            <div className="flex items-center rounded-full border border-line bg-white p-1.5 transition-colors focus-within:border-brand">
              <input
                placeholder="Your work email"
                aria-label="Email address"
                className="h-10 min-w-0 flex-1 bg-transparent px-4 text-[15px] outline-none placeholder:text-ink/40"
                type="email"
              />
              <button
                className="h-10 rounded-full bg-brand px-5 text-[13px] font-semibold text-ink transition-colors hover:bg-forest hover:text-white"
                type="submit"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default function ListingPage({ page }) {
  const [featured, ...items] = page.items;

  return (
    <>
      <section
        data-hero="dark"
        className="relative -mt-[72px] overflow-hidden bg-ink pt-[72px] text-white"
      >
        <div className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_right,#000_20%,transparent_70%)]" />
        <div className="absolute -right-32 -top-40 h-[560px] w-[560px] rounded-full bg-brand/25 blur-[140px]" />
        <div className="absolute -bottom-40 left-0 h-[400px] w-[600px] rounded-full bg-forest blur-[120px]" />
        <div className="relative mx-auto w-full max-w-[1280px] px-5 pb-20 pt-12 md:px-8 md:pb-28 md:pt-16">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1.5 text-[13.5px] font-semibold text-white/50"
          >
            <a href="/" className="hover:text-white">
              Home
            </a>
            <span aria-hidden="true">›</span>
            <span className="text-white">Resources</span>
            <span aria-hidden="true">›</span>
            <span className="text-white">{page.title}</span>
          </nav>
          <div className="mt-10 max-w-3xl">
            <span className="inline-flex items-center gap-2 font-mono text-[11.5px] font-medium uppercase tracking-[0.18em] text-white/60">
              <span
                className="h-1.5 w-1.5 rounded-full bg-brand"
                aria-hidden="true"
              />
              {page.eyebrow}
            </span>
            <h1 className="mt-5 text-[40px] leading-[1.05] sm:text-[56px] lg:text-[68px]">
              {page.headline || page.title}
            </h1>
            <p className="mt-6 max-w-2xl text-[18px] text-white/70 md:text-[19px]">
              {page.description}
            </p>
          </div>
        </div>
      </section>

      <section className="relative bg-paper py-20 text-ink md:py-28 lg:py-32">
        <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
          {page.filterLabel && (
            <div className="mb-10 flex flex-wrap gap-2">
              {(page.filters || ["All"]).map((filter, index) => (
                <button
                  key={filter}
                  className={`h-10 rounded-full px-4 text-[14px] font-bold transition-colors ${
                    index === 0
                      ? "bg-ink text-white"
                      : "border border-line bg-white hover:border-ink/30"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          )}
          {featured && (
            <a
              href={featured.href || "/resources"}
              className="group mb-10 grid overflow-hidden rounded-[28px] border border-line bg-white shadow-soft transition-shadow hover:shadow-lift lg:grid-cols-2"
            >
              <div className="relative min-h-[280px] overflow-hidden bg-forest">
                {featured.image ? (
                  <img
                    src={featured.image}
                    alt=""
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <>
                    <div className="grid-bg absolute inset-0 opacity-60" />
                    <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full bg-brand/30 blur-3xl transition-transform duration-700 group-hover:scale-110" />
                  </>
                )}
                <span className="absolute bottom-6 left-6 rounded-full bg-brand px-3 py-1 text-[12.5px] font-semibold text-ink">
                  Latest
                </span>
              </div>
              <div className="flex flex-col p-8 md:p-12">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-brand px-3 py-1 text-[12.5px] font-semibold text-ink">
                    {page.itemLabel || "Resource"}
                  </span>
                  <span className="text-[13.5px] text-muted">
                    {featured.eyebrow || "Featured"}
                  </span>
                </div>
                <h2 className="mt-5 text-[28px] leading-tight md:text-[36px]">
                  {featured.title}
                </h2>
                <p className="mt-4 text-[16px] text-muted">
                  {featured.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-8 text-[14px] font-bold">
                  {featured.action || "Explore"}
                  <ArrowRight />
                </span>
              </div>
            </a>
          )}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => (
              <ResourceCard
                key={item.title}
                item={item}
                itemLabel={page.itemLabel}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
      <Section04 />
    </>
  );
}
