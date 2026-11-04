function Crumb() {
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
      className="h-3.5 w-3.5 opacity-60"
      aria-hidden="true"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export default function ResourceHero({
  label,
  title,
  text,
  dark = true,
}) {
  return (
    <section
      data-hero={dark ? "dark" : "light"}
      className={
        dark
          ? "relative -mt-[72px] overflow-hidden bg-ink pt-[72px] text-white"
          : "relative overflow-hidden bg-paper text-ink"
      }
    >
      <div
        className={
          dark
            ? "grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_right,#000_20%,transparent_70%)]"
            : "grid-bg-light absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,#000_10%,transparent_65%)]"
        }
      />
      {dark ? (
        <>
          <div
            data-parallax="-0.12"
            className="absolute -right-32 -top-40 h-[560px] w-[560px] rounded-full bg-brand/25 blur-[140px]"
          />
          <div
            data-parallax="0.1"
            className="absolute -bottom-40 left-0 h-[400px] w-[600px] rounded-full bg-forest blur-[120px]"
          />
        </>
      ) : null}
      <div className="relative mx-auto w-full max-w-[1280px] px-5 pb-20 pt-12 md:px-8 md:pb-28 md:pt-16">
        <nav
          aria-label="Breadcrumb"
          className={`flex flex-wrap items-center gap-1.5 text-[13.5px] font-semibold ${dark ? "text-white/50" : "text-ink/50"}`}
        >
          <a href="/" className={dark ? "hover:text-white" : "hover:text-ink"}>
            Home
          </a>
          <span className="flex items-center gap-1.5">
            <Crumb />
            <a href="/resources" className={dark ? "hover:text-white" : "hover:text-ink"}>
              Resources
            </a>
          </span>
          <span className="flex items-center gap-1.5">
            <Crumb />
            <span className={dark ? "text-white" : "text-ink"}>{label}</span>
          </span>
        </nav>
        <div className="mt-10">
          <span
            className={`inline-flex items-center gap-2 font-mono text-[11.5px] font-medium uppercase tracking-[0.18em] ${dark ? "text-white/60" : "text-muted"}`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
            {label}
          </span>
          <h1 className="mt-5 max-w-4xl text-[40px] sm:text-[56px] lg:text-[68px]">{title}</h1>
          <p className={`mt-6 max-w-2xl text-[18px] md:text-[19px] ${dark ? "text-white/70" : "text-muted"}`}>
            {text}
          </p>
        </div>
      </div>
    </section>
  );
}
