export default function Section05() {
  return (
    <section className="bg-paper text-ink py-20 md:py-28 lg:py-32 relative">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 font-mono text-[11.5px] font-medium uppercase tracking-[0.18em] text-muted">
              <span
                className="h-1.5 w-1.5 rounded-full bg-brand"
                aria-hidden="true"
              ></span>
              Responsible AI
            </span>
            <h2 className="mt-4 text-[34px] sm:text-[44px]">
              Powerful AI, responsibly built.
            </h2>
            <p className="mt-5 text-[17px] text-muted">
              Our Responsible AI board reviews every production model. We align
              with the NIST AI RMF, ISO/IEC 42001 and the EU AI Act.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-[20px] border border-line bg-white p-6">
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
                className="lucide lucide-shield-check h-6 w-6 text-forest"
                aria-hidden="true"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              <div className="mt-4 font-display text-[17px] font-bold">
                Safety &amp; security
              </div>
              <p className="mt-1.5 text-[14.5px] text-muted">
                Red-teaming, prompt-injection defence and data isolation.
              </p>
            </div>
            <div className="rounded-[20px] border border-line bg-white p-6">
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
                className="lucide lucide-scale h-6 w-6 text-forest"
                aria-hidden="true"
              >
                <path d="M12 3v18"></path>
                <path d="m19 8 3 8a5 5 0 0 1-6 0zV7"></path>
                <path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1"></path>
                <path d="m5 8 3 8a5 5 0 0 1-6 0zV7"></path>
                <path d="M7 21h10"></path>
              </svg>
              <div className="mt-4 font-display text-[17px] font-bold">
                Fairness
              </div>
              <p className="mt-1.5 text-[14.5px] text-muted">
                Bias testing across protected attributes.
              </p>
            </div>
            <div className="rounded-[20px] border border-line bg-white p-6">
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
                className="lucide lucide-eye h-6 w-6 text-forest"
                aria-hidden="true"
              >
                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              <div className="mt-4 font-display text-[17px] font-bold">
                Transparency
              </div>
              <p className="mt-1.5 text-[14.5px] text-muted">
                Model cards, citations and explainability.
              </p>
            </div>
            <div className="rounded-[20px] border border-line bg-white p-6">
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
                className="lucide lucide-users h-6 w-6 text-forest"
                aria-hidden="true"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <circle cx="9" cy="7" r="4"></circle>
              </svg>
              <div className="mt-4 font-display text-[17px] font-bold">
                Human oversight
              </div>
              <p className="mt-1.5 text-[14.5px] text-muted">
                Clear escalation and human-in-the-loop design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
