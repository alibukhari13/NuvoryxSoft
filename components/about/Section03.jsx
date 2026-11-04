export default function Section03() {
  return (
    <section className="bg-white text-ink py-20 md:py-28 lg:py-32 relative">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="reveal in" style={{ transitionDelay: "0ms" }}>
              <span className="inline-flex items-center gap-2 font-mono text-[11.5px] font-medium uppercase tracking-[0.18em] text-muted">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-brand"
                  aria-hidden="true"
                ></span>
                Values
              </span>
            </div>
            <div className="reveal in" style={{ transitionDelay: "80ms" }}>
              <h2 className="mt-4 text-[34px] sm:text-[44px] lg:text-[52px]">
                What we stand for.
              </h2>
            </div>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift group p-7">
            <span className="grid h-12 w-12 place-items-center rounded-2xl transition-colors duration-300 bg-forest/[0.06] text-forest group-hover:bg-brand group-hover:text-ink">
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
                className="lucide lucide-target h-[22px] w-[22px]"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="6"></circle>
                <circle cx="12" cy="12" r="2"></circle>
              </svg>
            </span>
            <h3 className="mt-6 text-[20px]">Own the outcome</h3>
            <p className="mt-2 text-[15px] text-muted">
              We measure ourselves by your results, not our hours.
            </p>
          </div>
          <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift group p-7">
            <span className="grid h-12 w-12 place-items-center rounded-2xl transition-colors duration-300 bg-forest/[0.06] text-forest group-hover:bg-brand group-hover:text-ink">
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
                className="lucide lucide-eye h-[22px] w-[22px]"
                aria-hidden="true"
              >
                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </span>
            <h3 className="mt-6 text-[20px]">Radical candour</h3>
            <p className="mt-2 text-[15px] text-muted">
              We tell you what you need to hear, early and kindly.
            </p>
          </div>
          <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift group p-7">
            <span className="grid h-12 w-12 place-items-center rounded-2xl transition-colors duration-300 bg-forest/[0.06] text-forest group-hover:bg-brand group-hover:text-ink">
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
                className="lucide lucide-lightbulb h-[22px] w-[22px]"
                aria-hidden="true"
              >
                <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                <path d="M9 18h6"></path>
                <path d="M10 22h4"></path>
              </svg>
            </span>
            <h3 className="mt-6 text-[20px]">Stay curious</h3>
            <p className="mt-2 text-[15px] text-muted">
              We learn relentlessly and share what we learn.
            </p>
          </div>
          <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift group p-7">
            <span className="grid h-12 w-12 place-items-center rounded-2xl transition-colors duration-300 bg-forest/[0.06] text-forest group-hover:bg-brand group-hover:text-ink">
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
                className="lucide lucide-heart-handshake h-[22px] w-[22px]"
                aria-hidden="true"
              >
                <path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"></path>
              </svg>
            </span>
            <h3 className="mt-6 text-[20px]">Win together</h3>
            <p className="mt-2 text-[15px] text-muted">
              Low ego, high standards, one team with our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
