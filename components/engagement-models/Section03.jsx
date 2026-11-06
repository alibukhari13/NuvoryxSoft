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
                Compare
              </span>
            </div>
            <div className="reveal in" style={{ transitionDelay: "80ms" }}>
              <h2 className="mt-4 text-[34px] sm:text-[44px] lg:text-[52px]">
                Side-by-side comparison.
              </h2>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto rounded-[24px] border border-line">
          <table className="w-full min-w-[760px] text-left text-[15px]">
            <thead>
              <tr className="bg-paper">
                <th className="px-6 py-5"></th>
                <th className="px-6 py-5 font-display text-[16px] font-bold bg-forest text-white">
                  Dedicated Team
                  <span className="ml-2 rounded-full bg-brand px-2 py-0.5 align-middle text-[10px] text-ink">
                    Popular
                  </span>
                </th>
                <th className="px-6 py-5 font-display text-[16px] font-bold">
                  Fixed Scope
                </th>
                <th className="px-6 py-5 font-display text-[16px] font-bold">
                  Time &amp; Material
                </th>
                <th className="px-6 py-5 font-display text-[16px] font-bold">
                  Hybrid
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-line">
                <td className="px-6 py-4 font-bold">Best for</td>
                <td className="px-6 py-4 bg-forest/[0.04]">
                  <span className="text-muted">Long-term products</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-muted">Clear, fixed scope</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-muted">Evolving requirements</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-muted">Scaling capacity</span>
                </td>
              </tr>
              <tr className="border-t border-line">
                <td className="px-6 py-4 font-bold">Budget predictability</td>
                <td className="px-6 py-4 bg-forest/[0.04]">
                  <span className="text-muted">Monthly</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-muted">Fixed</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-muted">Hourly</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-muted">Phased</span>
                </td>
              </tr>
              <tr className="border-t border-line">
                <td className="px-6 py-4 font-bold">Scope flexibility</td>
                <td className="px-6 py-4 bg-forest/[0.04]">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-brand text-ink">
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
                      className="lucide lucide-check h-3.5 w-3.5"
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </span>
                </td>
                <td className="px-6 py-4">
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
                    className="lucide lucide-minus h-4 w-4 text-ink/25"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                  </svg>
                </td>
                <td className="px-6 py-4">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-brand text-ink">
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
                      className="lucide lucide-check h-3.5 w-3.5"
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-brand text-ink">
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
                      className="lucide lucide-check h-3.5 w-3.5"
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </span>
                </td>
              </tr>
              <tr className="border-t border-line">
                <td className="px-6 py-4 font-bold">You direct priorities</td>
                <td className="px-6 py-4 bg-forest/[0.04]">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-brand text-ink">
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
                      className="lucide lucide-check h-3.5 w-3.5"
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </span>
                </td>
                <td className="px-6 py-4">
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
                    className="lucide lucide-minus h-4 w-4 text-ink/25"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                  </svg>
                </td>
                <td className="px-6 py-4">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-brand text-ink">
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
                      className="lucide lucide-check h-3.5 w-3.5"
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-brand text-ink">
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
                      className="lucide lucide-check h-3.5 w-3.5"
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </span>
                </td>
              </tr>
              <tr className="border-t border-line">
                <td className="px-6 py-4 font-bold">Dedicated team members</td>
                <td className="px-6 py-4 bg-forest/[0.04]">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-brand text-ink">
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
                      className="lucide lucide-check h-3.5 w-3.5"
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </span>
                </td>
                <td className="px-6 py-4">
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
                    className="lucide lucide-minus h-4 w-4 text-ink/25"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                  </svg>
                </td>
                <td className="px-6 py-4">
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
                    className="lucide lucide-minus h-4 w-4 text-ink/25"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                  </svg>
                </td>
                <td className="px-6 py-4">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-brand text-ink">
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
                      className="lucide lucide-check h-3.5 w-3.5"
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </span>
                </td>
              </tr>
              <tr className="border-t border-line">
                <td className="px-6 py-4 font-bold">Milestone payments</td>
                <td className="px-6 py-4 bg-forest/[0.04]">
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
                    className="lucide lucide-minus h-4 w-4 text-ink/25"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                  </svg>
                </td>
                <td className="px-6 py-4">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-brand text-ink">
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
                      className="lucide lucide-check h-3.5 w-3.5"
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </span>
                </td>
                <td className="px-6 py-4">
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
                    className="lucide lucide-minus h-4 w-4 text-ink/25"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                  </svg>
                </td>
                <td className="px-6 py-4">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-brand text-ink">
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
                      className="lucide lucide-check h-3.5 w-3.5"
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </span>
                </td>
              </tr>
              <tr className="border-t border-line">
                <td className="px-6 py-4 font-bold">Warranty period</td>
                <td className="px-6 py-4 bg-forest/[0.04]">
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
                    className="lucide lucide-minus h-4 w-4 text-ink/25"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                  </svg>
                </td>
                <td className="px-6 py-4">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-brand text-ink">
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
                      className="lucide lucide-check h-3.5 w-3.5"
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </span>
                </td>
                <td className="px-6 py-4">
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
                    className="lucide lucide-minus h-4 w-4 text-ink/25"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                  </svg>
                </td>
                <td className="px-6 py-4">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-brand text-ink">
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
                      className="lucide lucide-check h-3.5 w-3.5"
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </span>
                </td>
              </tr>
              <tr className="border-t border-line">
                <td className="px-6 py-4 font-bold">Typical start</td>
                <td className="px-6 py-4 bg-forest/[0.04]">
                  <span className="text-muted">10 days</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-muted">2–3 weeks</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-muted">1 week</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-muted">10 days</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
