export default function Section01() {
  return (
    <section className="bg-paper">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8 pb-12 pt-12">
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
            <span className="text-ink">Legal</span>
          </span>
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
            <span className="text-ink">Privacy Policy</span>
          </span>
        </nav>
        <div className="mt-10 max-w-3xl">
          <span className="inline-flex items-center gap-2 font-mono text-[11.5px] font-medium uppercase tracking-[0.18em] text-muted">
            <span
              className="h-1.5 w-1.5 rounded-full bg-brand"
              aria-hidden="true"
            ></span>
            Legal
          </span>
          <h1 className="mt-5 text-[40px] sm:text-[56px]">Privacy Policy</h1>
          <p className="mt-4 text-muted">Last updated October 1, 2025</p>
        </div>
      </div>
    </section>
  );
}
