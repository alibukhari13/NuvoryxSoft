export default function Section04() {
  return (
    <section className="bg-paper text-ink py-20 md:py-28 lg:py-32 relative">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="relative aspect-[4/3.2] overflow-hidden rounded-[28px]">
            <img
              alt="Engineer reviewing deliverables"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
              src="/agency-assets/e1f37521d8a1eb7bf6f441db119a7e2728f89355e13aff138cc88652277f833b.jpg"
            />
            <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl bg-white/95 p-4 backdrop-blur">
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
                className="lucide lucide-file-check-corner lucide-file-check-2 h-6 w-6 text-forest"
                aria-hidden="true"
              >
                <path d="M10.5 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v6"></path>
                <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                <path d="m14 20 2 2 4-4"></path>
              </svg>
              <div className="text-[14px] font-bold">
                Every deliverable is versioned, reviewed and yours to keep.
              </div>
            </div>
          </div>
          <div>
            <span className="inline-flex items-center gap-2 font-mono text-[11.5px] font-medium uppercase tracking-[0.18em] text-muted">
              <span
                className="h-1.5 w-1.5 rounded-full bg-brand"
                aria-hidden="true"
              ></span>
              Deliverables
            </span>
            <h2 className="mt-4 text-[34px] sm:text-[44px]">
              What you walk away with.
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3 text-[15px] font-bold">
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
                  className="lucide lucide-circle-check lucide-check-circle-2 h-5 w-5 shrink-0 text-brand"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m16 9-5.5 5.5L8 12"></path>
                </svg>{" "}
                Discovery report &amp; roadmap
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3 text-[15px] font-bold">
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
                  className="lucide lucide-circle-check lucide-check-circle-2 h-5 w-5 shrink-0 text-brand"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m16 9-5.5 5.5L8 12"></path>
                </svg>{" "}
                Architecture decision records
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3 text-[15px] font-bold">
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
                  className="lucide lucide-circle-check lucide-check-circle-2 h-5 w-5 shrink-0 text-brand"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m16 9-5.5 5.5L8 12"></path>
                </svg>{" "}
                Production-ready codebase
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3 text-[15px] font-bold">
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
                  className="lucide lucide-circle-check lucide-check-circle-2 h-5 w-5 shrink-0 text-brand"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m16 9-5.5 5.5L8 12"></path>
                </svg>{" "}
                Automated test suites
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3 text-[15px] font-bold">
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
                  className="lucide lucide-circle-check lucide-check-circle-2 h-5 w-5 shrink-0 text-brand"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m16 9-5.5 5.5L8 12"></path>
                </svg>{" "}
                CI/CD pipelines &amp; IaC
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3 text-[15px] font-bold">
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
                  className="lucide lucide-circle-check lucide-check-circle-2 h-5 w-5 shrink-0 text-brand"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m16 9-5.5 5.5L8 12"></path>
                </svg>{" "}
                Runbooks &amp; documentation
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3 text-[15px] font-bold">
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
                  className="lucide lucide-circle-check lucide-check-circle-2 h-5 w-5 shrink-0 text-brand"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m16 9-5.5 5.5L8 12"></path>
                </svg>{" "}
                Value dashboard
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3 text-[15px] font-bold">
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
                  className="lucide lucide-circle-check lucide-check-circle-2 h-5 w-5 shrink-0 text-brand"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m16 9-5.5 5.5L8 12"></path>
                </svg>{" "}
                Team enablement sessions
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
