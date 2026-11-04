export default function Section02() {
  return (
    <section className="bg-paper text-ink py-20 md:py-28 lg:py-32 relative">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          <div className="relative rounded-[22px] border shadow-soft p-8 border-forest bg-forest text-white">
            <span className="grid h-12 w-12 place-items-center rounded-2xl transition-colors duration-300 bg-white/[0.07] text-brand">
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
                className="lucide lucide-leaf h-[22px] w-[22px]"
                aria-hidden="true"
              >
                <path d="M11 20a10 10 0 0010-10 25.9 25.9 0 00-1.04-7.281 1 1 0 00-1.755-.325C15.833 5.5 13 5.5 9.8 6.1A7 7 0 0011 20"></path>
                <path d="M2 21a5 5 0 012.911-4.544C7.613 15.212 8.351 15.24 11 13"></path>
              </svg>
            </span>
            <h3 className="mt-6 text-[24px]">Environmental</h3>
            <div className="mt-6 font-display text-[44px] font-bold leading-none text-brand">
              -38%
            </div>
            <div className="mt-2 text-[14.5px] text-white/65">
              carbon per employee since 2021
            </div>
            <ul className="mt-6 flex flex-col gap-2.5 border-t pt-6 border-white/15">
              <li className="flex items-start gap-2.5 text-[15px]">
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
                  className="lucide lucide-check mt-1 h-4 w-4 shrink-0 text-brand"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>{" "}
                100% renewable power in 5 of 7 hubs
              </li>
              <li className="flex items-start gap-2.5 text-[15px]">
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
                  className="lucide lucide-check mt-1 h-4 w-4 shrink-0 text-brand"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>{" "}
                Green software engineering guidelines
              </li>
              <li className="flex items-start gap-2.5 text-[15px]">
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
                  className="lucide lucide-check mt-1 h-4 w-4 shrink-0 text-brand"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>{" "}
                Carbon-aware cloud architecture reviews
              </li>
            </ul>
          </div>
          <div className="relative rounded-[22px] border shadow-soft bg-white border-line p-8">
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
                className="lucide lucide-users h-[22px] w-[22px]"
                aria-hidden="true"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <circle cx="9" cy="7" r="4"></circle>
              </svg>
            </span>
            <h3 className="mt-6 text-[24px]">Social</h3>
            <div className="mt-6 font-display text-[44px] font-bold leading-none text-forest">
              36%
            </div>
            <div className="mt-2 text-[14.5px] text-muted">
              women in technical roles
            </div>
            <ul className="mt-6 flex flex-col gap-2.5 border-t pt-6 border-line">
              <li className="flex items-start gap-2.5 text-[15px]">
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
                  className="lucide lucide-check mt-1 h-4 w-4 shrink-0 text-brand"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>{" "}
                Nuvoryx Academy: 6,200 graduates
              </li>
              <li className="flex items-start gap-2.5 text-[15px]">
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
                  className="lucide lucide-check mt-1 h-4 w-4 shrink-0 text-brand"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>{" "}
                Pay equity audits every year
              </li>
              <li className="flex items-start gap-2.5 text-[15px]">
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
                  className="lucide lucide-check mt-1 h-4 w-4 shrink-0 text-brand"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>{" "}
                Employee resource groups in every hub
              </li>
            </ul>
          </div>
          <div className="relative rounded-[22px] border shadow-soft bg-white border-line p-8">
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
                className="lucide lucide-scale h-[22px] w-[22px]"
                aria-hidden="true"
              >
                <path d="M12 3v18"></path>
                <path d="m19 8 3 8a5 5 0 0 1-6 0zV7"></path>
                <path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1"></path>
                <path d="m5 8 3 8a5 5 0 0 1-6 0zV7"></path>
                <path d="M7 21h10"></path>
              </svg>
            </span>
            <h3 className="mt-6 text-[24px]">Governance</h3>
            <div className="mt-6 font-display text-[44px] font-bold leading-none text-forest">
              100%
            </div>
            <div className="mt-2 text-[14.5px] text-muted">
              staff trained on ethics &amp; privacy
            </div>
            <ul className="mt-6 flex flex-col gap-2.5 border-t pt-6 border-line">
              <li className="flex items-start gap-2.5 text-[15px]">
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
                  className="lucide lucide-check mt-1 h-4 w-4 shrink-0 text-brand"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>{" "}
                Independent board members
              </li>
              <li className="flex items-start gap-2.5 text-[15px]">
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
                  className="lucide lucide-check mt-1 h-4 w-4 shrink-0 text-brand"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>{" "}
                Whistleblower hotline
              </li>
              <li className="flex items-start gap-2.5 text-[15px]">
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
                  className="lucide lucide-check mt-1 h-4 w-4 shrink-0 text-brand"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>{" "}
                Responsible AI review board
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
