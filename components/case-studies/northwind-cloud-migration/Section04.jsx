export default function Section04() {
  return (
    <a
      href="/case-studies/medacore-clinical-copilot"
      className="group relative block overflow-hidden bg-forest text-white"
    >
      <img
        alt=""
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover absolute inset-0 opacity-25 transition-all duration-700 group-hover:scale-105 group-hover:opacity-35"
        src="/agency-assets/82af4cd5afbf2b0570b22b32617943dda126bf537cb0bb833b9542e38f374d4c.jpg"
      />
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8 relative flex flex-col gap-6 py-20 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand">
            Next case study
          </div>
          <div className="mt-3 max-w-3xl font-display text-[28px] font-bold leading-tight tracking-[-0.03em] md:text-[40px]">
            A clinical copilot that gives physicians 9 hours back every week
          </div>
        </div>
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full transition-all duration-300 group-hover:rotate-45 group-hover:bg-brand group-hover:text-ink bg-white/10 text-white !h-16 !w-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-up-right h-5 w-5"
            aria-hidden="true"
          >
            <path d="M7 7h10v10"></path>
            <path d="M7 17 17 7"></path>
          </svg>
        </span>
      </div>
    </a>
  );
}
