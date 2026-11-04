export default function Section02() {
  return (
    <section className="bg-paper text-ink py-20 md:py-28 lg:py-32 relative">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="relative rounded-[22px] border shadow-soft bg-white border-line p-8 md:p-10">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#FFE9D6] text-[#9A4A0B]">
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
                className="lucide lucide-triangle-alert lucide-alert-triangle h-5 w-5"
                aria-hidden="true"
              >
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                <path d="M12 9v4"></path>
                <path d="M12 17h.01"></path>
              </svg>
            </span>
            <h2 className="mt-6 text-[28px] md:text-[34px]">The problem</h2>
            <ul className="mt-5 flex flex-col gap-3 text-[16px] text-muted">
              <li className="flex gap-3">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E08A3C]"></span>
                Initiatives stall between pilot and production
              </li>
              <li className="flex gap-3">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E08A3C]"></span>
                Legacy systems and data silos slow every change
              </li>
              <li className="flex gap-3">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E08A3C]"></span>
                Skills gaps make teams depend on a few heroes
              </li>
              <li className="flex gap-3">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E08A3C]"></span>
                Hard to prove ROI to the board
              </li>
            </ul>
          </div>
          <div className="relative rounded-[22px] border shadow-soft border-forest bg-forest p-8 text-white md:p-10">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand text-ink">
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
                className="lucide lucide-lightbulb h-5 w-5"
                aria-hidden="true"
              >
                <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                <path d="M9 18h6"></path>
                <path d="M10 22h4"></path>
              </svg>
            </span>
            <h2 className="mt-6 text-[28px] md:text-[34px]">Our solution</h2>
            <ul className="mt-5 flex flex-col gap-3 text-[16px] text-white/75">
              <li className="flex gap-3">
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
                  className="lucide lucide-circle-check lucide-check-circle-2 mt-0.5 h-5 w-5 shrink-0 text-brand"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m16 9-5.5 5.5L8 12"></path>
                </svg>
                A scoped plan with business metrics agreed upfront
              </li>
              <li className="flex gap-3">
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
                  className="lucide lucide-circle-check lucide-check-circle-2 mt-0.5 h-5 w-5 shrink-0 text-brand"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m16 9-5.5 5.5L8 12"></path>
                </svg>
                Incremental delivery that de-risks every release
              </li>
              <li className="flex gap-3">
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
                  className="lucide lucide-circle-check lucide-check-circle-2 mt-0.5 h-5 w-5 shrink-0 text-brand"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m16 9-5.5 5.5L8 12"></path>
                </svg>
                Blended teams that transfer knowledge as they build
              </li>
              <li className="flex gap-3">
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
                  className="lucide lucide-circle-check lucide-check-circle-2 mt-0.5 h-5 w-5 shrink-0 text-brand"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m16 9-5.5 5.5L8 12"></path>
                </svg>
                Dashboards that report value, not just velocity
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
