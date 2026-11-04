export default function Section01() {
  return (
    <section className="bg-paper">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8 pb-10 pt-12">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-1.5 text-[13.5px] font-semibold text-muted"
        >
          <a href="/" className="hover:text-ink">
            Home
          </a>
          <span className="flex items-center gap-1.5">
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
              className="lucide lucide-chevron-right h-3.5 w-3.5 opacity-60"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
            <span className="text-ink">Design System</span>
          </span>
        </nav>
        <div className="mt-10 max-w-3xl">
          <span className="inline-flex items-center gap-2 font-mono text-[11.5px] font-medium uppercase tracking-[0.18em] text-muted">
            <span
              className="h-1.5 w-1.5 rounded-full bg-brand"
              aria-hidden="true"
            ></span>
            Nuvoryx DS v1.0
          </span>
          <h1 className="mt-5 text-[44px] sm:text-[68px]">Design system.</h1>
          <p className="mt-5 text-[18px] text-muted">
            Tokens, typography, components and patterns that power every page.
            Built on a 12-column grid, 8pt spacing and Tailwind CSS v4 tokens.
          </p>
        </div>
        <nav className="no-scrollbar mt-10 flex gap-2 overflow-x-auto">
          <a
            href="#01"
            className="shrink-0 rounded-full border border-line bg-white px-4 py-2 text-[13.5px] font-bold hover:border-ink"
          >
            01 Colors
          </a>
          <a
            href="#02"
            className="shrink-0 rounded-full border border-line bg-white px-4 py-2 text-[13.5px] font-bold hover:border-ink"
          >
            02 Typography
          </a>
          <a
            href="#03"
            className="shrink-0 rounded-full border border-line bg-white px-4 py-2 text-[13.5px] font-bold hover:border-ink"
          >
            03 Buttons
          </a>
          <a
            href="#04"
            className="shrink-0 rounded-full border border-line bg-white px-4 py-2 text-[13.5px] font-bold hover:border-ink"
          >
            04 Forms
          </a>
          <a
            href="#05"
            className="shrink-0 rounded-full border border-line bg-white px-4 py-2 text-[13.5px] font-bold hover:border-ink"
          >
            05 Cards
          </a>
          <a
            href="#06"
            className="shrink-0 rounded-full border border-line bg-white px-4 py-2 text-[13.5px] font-bold hover:border-ink"
          >
            06 Tags
          </a>
          <a
            href="#07"
            className="shrink-0 rounded-full border border-line bg-white px-4 py-2 text-[13.5px] font-bold hover:border-ink"
          >
            07 Icons
          </a>
          <a
            href="#08"
            className="shrink-0 rounded-full border border-line bg-white px-4 py-2 text-[13.5px] font-bold hover:border-ink"
          >
            08 Spacing
          </a>
          <a
            href="#09"
            className="shrink-0 rounded-full border border-line bg-white px-4 py-2 text-[13.5px] font-bold hover:border-ink"
          >
            09 Components
          </a>
          <a
            href="#10"
            className="shrink-0 rounded-full border border-line bg-white px-4 py-2 text-[13.5px] font-bold hover:border-ink"
          >
            10 Shapes
          </a>
          <a
            href="#11"
            className="shrink-0 rounded-full border border-line bg-white px-4 py-2 text-[13.5px] font-bold hover:border-ink"
          >
            11 Logos
          </a>
          <a
            href="#12"
            className="shrink-0 rounded-full border border-line bg-white px-4 py-2 text-[13.5px] font-bold hover:border-ink"
          >
            12 Motion
          </a>
        </nav>
      </div>
    </section>
  );
}
