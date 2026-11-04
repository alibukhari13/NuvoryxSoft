export default function Section05() {
  return (
    <section className="bg-paper text-ink py-20 md:py-28 lg:py-32 relative">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="reveal in" style={{ transitionDelay: "0ms" }}>
              <span className="inline-flex items-center gap-2 font-mono text-[11.5px] font-medium uppercase tracking-[0.18em] text-muted">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-brand"
                  aria-hidden="true"
                ></span>
                Employee voices
              </span>
            </div>
            <div className="reveal in" style={{ transitionDelay: "80ms" }}>
              <h2 className="mt-4 text-[34px] sm:text-[44px] lg:text-[52px]">
                Hear it from the team.
              </h2>
            </div>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift flex flex-col p-7">
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
              className="lucide lucide-quote h-7 w-7 text-brand"
              aria-hidden="true"
            >
              <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
              <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
            </svg>
            <p className="mt-5 flex-1 text-[16.5px] font-semibold leading-relaxed">
              “I joined as a recruiter and now lead people for 1,400 colleagues.
              Nuvoryx bets on people early.”
            </p>
            <div className="mt-6 flex items-center gap-3">
              <img
                alt="Aisha Rahman"
                loading="lazy"
                className="h-12 w-12 rounded-full object-cover"
                src="/agency-assets/1bdedd80b1b9718c857f5c59926a6754b22af989a250fd1266137ada32e0ef6b.jpg"
              />
              <div>
                <div className="font-bold">Aisha Rahman</div>
                <div className="text-[13.5px] text-muted">
                  Chief People Officer · 7 years
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-[22px] border shadow-soft transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift flex flex-col p-7 border-forest bg-forest text-white">
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
              className="lucide lucide-quote h-7 w-7 text-brand"
              aria-hidden="true"
            >
              <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
              <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
            </svg>
            <p className="mt-5 flex-1 text-[16.5px] font-semibold leading-relaxed">
              “I’ve shipped AI systems for a hospital network and an insurer.
              The variety and mentorship are unmatched.”
            </p>
            <div className="mt-6 flex items-center gap-3">
              <img
                alt="Omar Sheikh"
                loading="lazy"
                className="h-12 w-12 rounded-full object-cover"
                src="/agency-assets/3ad520413c8aa8f51e18a9bef18ad187de341cf519443a2b1bdb5b563a3b2557.jpg"
              />
              <div>
                <div className="font-bold">Omar Sheikh</div>
                <div className="text-[13.5px] text-white/60">
                  Senior ML Engineer · 3 years
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift flex flex-col p-7">
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
              className="lucide lucide-quote h-7 w-7 text-brand"
              aria-hidden="true"
            >
              <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
              <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
            </svg>
            <p className="mt-5 flex-1 text-[16.5px] font-semibold leading-relaxed">
              “Design is treated as a first-class discipline here. Our work wins
              awards and, more importantly, users.”
            </p>
            <div className="mt-6 flex items-center gap-3">
              <img
                alt="Yuki Tanaka"
                loading="lazy"
                className="h-12 w-12 rounded-full object-cover"
                src="/agency-assets/beec6426c045f4398902c3cbb2bf59861c981673bf055b1e0a9a656fbaf29136.jpg"
              />
              <div>
                <div className="font-bold">Yuki Tanaka</div>
                <div className="text-[13.5px] text-muted">
                  VP, Design · 5 years
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
