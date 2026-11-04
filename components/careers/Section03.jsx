export default function Section03() {
  return (
    <section
      id="roles"
      className="bg-white text-ink py-20 md:py-28 lg:py-32 relative"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="reveal in" style={{ transitionDelay: "0ms" }}>
              <span className="inline-flex items-center gap-2 font-mono text-[11.5px] font-medium uppercase tracking-[0.18em] text-muted">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-brand"
                  aria-hidden="true"
                ></span>
                Open positions
              </span>
            </div>
            <div className="reveal in" style={{ transitionDelay: "80ms" }}>
              <h2 className="mt-4 text-[34px] sm:text-[44px] lg:text-[52px]">
                10 roles open now.
              </h2>
            </div>
            <div className="reveal in" style={{ transitionDelay: "160ms" }}>
              <p className="mt-5 max-w-2xl text-lg text-muted">
                Don’t see the perfect fit? Send us your CV anyway: we hire for
                talent first.
              </p>
            </div>
          </div>
        </div>
        <div className="mb-6 grid gap-3 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="relative">
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
              className="lucide lucide-search pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40"
              aria-hidden="true"
            >
              <path d="m21 21-4.34-4.34"></path>
              <circle cx="11" cy="11" r="8"></circle>
            </svg>
            <input
              placeholder="Search roles"
              aria-label="Search roles"
              className="h-12 w-full rounded-full border border-line bg-white pl-11 pr-4 text-[15px] outline-none transition focus:border-forest focus:ring-4 focus:ring-brand/25"
              defaultValue=""
            />
          </div>
          <select
            aria-label="Department"
            className="h-12 w-full appearance-none rounded-full border border-line bg-white px-4 text-[14.5px] font-bold outline-none focus:border-forest focus:ring-4 focus:ring-brand/25"
          >
            <option>All departments</option>
            <option>AI &amp; Data</option>
            <option>Engineering</option>
            <option>Cloud</option>
            <option>Design</option>
            <option>Security</option>
            <option>Delivery</option>
          </select>
          <select
            aria-label="Location"
            className="h-12 w-full appearance-none rounded-full border border-line bg-white px-4 text-[14.5px] font-bold outline-none focus:border-forest focus:ring-4 focus:ring-brand/25"
          >
            <option>All locations</option>
            <option>Lisbon</option>
            <option>Remote (EU)</option>
            <option>London</option>
            <option>San Francisco</option>
            <option>Dubai</option>
            <option>Lahore</option>
            <option>New York</option>
            <option>Remote (Global)</option>
            <option>Singapore</option>
          </select>
          <select
            aria-label="Type"
            className="h-12 w-full appearance-none rounded-full border border-line bg-white px-4 text-[14.5px] font-bold outline-none focus:border-forest focus:ring-4 focus:ring-brand/25"
          >
            <option>All types</option>
            <option>Full-time</option>
            <option>Contract</option>
            <option>Internship</option>
          </select>
        </div>
        <div className="flex flex-col gap-3">
          <a
            href="/careers/senior-ml-engineer"
            className="group flex flex-col gap-4 rounded-[20px] border border-line bg-paper p-5 transition-all hover:border-brand hover:bg-white hover:shadow-lift md:flex-row md:items-center md:p-6"
          >
            <div className="flex-1">
              <h3 className="text-[19px]">Senior Machine Learning Engineer</h3>
              <div className="mt-2 flex flex-wrap gap-4 text-[14px] text-muted">
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
                    className="lucide lucide-briefcase h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                  </svg>{" "}
                  AI &amp; Data
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
                    className="lucide lucide-map-pin h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>{" "}
                  Lisbon
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
                    className="lucide lucide-clock h-4 w-4"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>{" "}
                  Full-time
                </span>
              </div>
            </div>
            <span className="inline-flex items-center rounded-full px-3 py-1 text-[12.5px] font-semibold bg-ink/[0.05] text-ink/75">
              Hybrid
            </span>
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full transition-all duration-300 group-hover:rotate-45 group-hover:bg-brand group-hover:text-ink bg-ink text-white">
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
          </a>
          <a
            href="/careers/staff-frontend-engineer"
            className="group flex flex-col gap-4 rounded-[20px] border border-line bg-paper p-5 transition-all hover:border-brand hover:bg-white hover:shadow-lift md:flex-row md:items-center md:p-6"
          >
            <div className="flex-1">
              <h3 className="text-[19px]">Staff Frontend Engineer (React)</h3>
              <div className="mt-2 flex flex-wrap gap-4 text-[14px] text-muted">
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
                    className="lucide lucide-briefcase h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                  </svg>{" "}
                  Engineering
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
                    className="lucide lucide-map-pin h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>{" "}
                  Remote (EU)
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
                    className="lucide lucide-clock h-4 w-4"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>{" "}
                  Full-time
                </span>
              </div>
            </div>
            <span className="inline-flex items-center rounded-full px-3 py-1 text-[12.5px] font-semibold bg-ink/[0.05] text-ink/75">
              Remote
            </span>
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full transition-all duration-300 group-hover:rotate-45 group-hover:bg-brand group-hover:text-ink bg-ink text-white">
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
          </a>
          <a
            href="/careers/cloud-architect-aws"
            className="group flex flex-col gap-4 rounded-[20px] border border-line bg-paper p-5 transition-all hover:border-brand hover:bg-white hover:shadow-lift md:flex-row md:items-center md:p-6"
          >
            <div className="flex-1">
              <h3 className="text-[19px]">Principal Cloud Architect, AWS</h3>
              <div className="mt-2 flex flex-wrap gap-4 text-[14px] text-muted">
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
                    className="lucide lucide-briefcase h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                  </svg>{" "}
                  Cloud
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
                    className="lucide lucide-map-pin h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>{" "}
                  London
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
                    className="lucide lucide-clock h-4 w-4"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>{" "}
                  Full-time
                </span>
              </div>
            </div>
            <span className="inline-flex items-center rounded-full px-3 py-1 text-[12.5px] font-semibold bg-ink/[0.05] text-ink/75">
              Hybrid
            </span>
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full transition-all duration-300 group-hover:rotate-45 group-hover:bg-brand group-hover:text-ink bg-ink text-white">
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
          </a>
          <a
            href="/careers/product-designer"
            className="group flex flex-col gap-4 rounded-[20px] border border-line bg-paper p-5 transition-all hover:border-brand hover:bg-white hover:shadow-lift md:flex-row md:items-center md:p-6"
          >
            <div className="flex-1">
              <h3 className="text-[19px]">Senior Product Designer</h3>
              <div className="mt-2 flex flex-wrap gap-4 text-[14px] text-muted">
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
                    className="lucide lucide-briefcase h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                  </svg>{" "}
                  Design
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
                    className="lucide lucide-map-pin h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>{" "}
                  San Francisco
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
                    className="lucide lucide-clock h-4 w-4"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>{" "}
                  Full-time
                </span>
              </div>
            </div>
            <span className="inline-flex items-center rounded-full px-3 py-1 text-[12.5px] font-semibold bg-ink/[0.05] text-ink/75">
              Hybrid
            </span>
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full transition-all duration-300 group-hover:rotate-45 group-hover:bg-brand group-hover:text-ink bg-ink text-white">
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
          </a>
          <a
            href="/careers/security-engineer"
            className="group flex flex-col gap-4 rounded-[20px] border border-line bg-paper p-5 transition-all hover:border-brand hover:bg-white hover:shadow-lift md:flex-row md:items-center md:p-6"
          >
            <div className="flex-1">
              <h3 className="text-[19px]">Application Security Engineer</h3>
              <div className="mt-2 flex flex-wrap gap-4 text-[14px] text-muted">
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
                    className="lucide lucide-briefcase h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                  </svg>{" "}
                  Security
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
                    className="lucide lucide-map-pin h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>{" "}
                  Dubai
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
                    className="lucide lucide-clock h-4 w-4"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>{" "}
                  Full-time
                </span>
              </div>
            </div>
            <span className="inline-flex items-center rounded-full px-3 py-1 text-[12.5px] font-semibold bg-ink/[0.05] text-ink/75">
              On-site
            </span>
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full transition-all duration-300 group-hover:rotate-45 group-hover:bg-brand group-hover:text-ink bg-ink text-white">
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
          </a>
          <a
            href="/careers/qa-automation-lead"
            className="group flex flex-col gap-4 rounded-[20px] border border-line bg-paper p-5 transition-all hover:border-brand hover:bg-white hover:shadow-lift md:flex-row md:items-center md:p-6"
          >
            <div className="flex-1">
              <h3 className="text-[19px]">QA Automation Lead</h3>
              <div className="mt-2 flex flex-wrap gap-4 text-[14px] text-muted">
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
                    className="lucide lucide-briefcase h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                  </svg>{" "}
                  Engineering
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
                    className="lucide lucide-map-pin h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>{" "}
                  Lahore
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
                    className="lucide lucide-clock h-4 w-4"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>{" "}
                  Full-time
                </span>
              </div>
            </div>
            <span className="inline-flex items-center rounded-full px-3 py-1 text-[12.5px] font-semibold bg-ink/[0.05] text-ink/75">
              Hybrid
            </span>
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full transition-all duration-300 group-hover:rotate-45 group-hover:bg-brand group-hover:text-ink bg-ink text-white">
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
          </a>
          <a
            href="/careers/engagement-manager"
            className="group flex flex-col gap-4 rounded-[20px] border border-line bg-paper p-5 transition-all hover:border-brand hover:bg-white hover:shadow-lift md:flex-row md:items-center md:p-6"
          >
            <div className="flex-1">
              <h3 className="text-[19px]">Engagement Manager</h3>
              <div className="mt-2 flex flex-wrap gap-4 text-[14px] text-muted">
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
                    className="lucide lucide-briefcase h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                  </svg>{" "}
                  Delivery
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
                    className="lucide lucide-map-pin h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>{" "}
                  New York
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
                    className="lucide lucide-clock h-4 w-4"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>{" "}
                  Full-time
                </span>
              </div>
            </div>
            <span className="inline-flex items-center rounded-full px-3 py-1 text-[12.5px] font-semibold bg-ink/[0.05] text-ink/75">
              Hybrid
            </span>
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full transition-all duration-300 group-hover:rotate-45 group-hover:bg-brand group-hover:text-ink bg-ink text-white">
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
          </a>
          <a
            href="/careers/data-engineer-contract"
            className="group flex flex-col gap-4 rounded-[20px] border border-line bg-paper p-5 transition-all hover:border-brand hover:bg-white hover:shadow-lift md:flex-row md:items-center md:p-6"
          >
            <div className="flex-1">
              <h3 className="text-[19px]">Data Engineer (Databricks)</h3>
              <div className="mt-2 flex flex-wrap gap-4 text-[14px] text-muted">
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
                    className="lucide lucide-briefcase h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                  </svg>{" "}
                  AI &amp; Data
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
                    className="lucide lucide-map-pin h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>{" "}
                  Remote (Global)
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
                    className="lucide lucide-clock h-4 w-4"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>{" "}
                  Contract
                </span>
              </div>
            </div>
            <span className="inline-flex items-center rounded-full px-3 py-1 text-[12.5px] font-semibold bg-ink/[0.05] text-ink/75">
              Remote
            </span>
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full transition-all duration-300 group-hover:rotate-45 group-hover:bg-brand group-hover:text-ink bg-ink text-white">
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
          </a>
          <a
            href="/careers/devops-engineer"
            className="group flex flex-col gap-4 rounded-[20px] border border-line bg-paper p-5 transition-all hover:border-brand hover:bg-white hover:shadow-lift md:flex-row md:items-center md:p-6"
          >
            <div className="flex-1">
              <h3 className="text-[19px]">DevOps Engineer</h3>
              <div className="mt-2 flex flex-wrap gap-4 text-[14px] text-muted">
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
                    className="lucide lucide-briefcase h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                  </svg>{" "}
                  Cloud
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
                    className="lucide lucide-map-pin h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>{" "}
                  Singapore
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
                    className="lucide lucide-clock h-4 w-4"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>{" "}
                  Full-time
                </span>
              </div>
            </div>
            <span className="inline-flex items-center rounded-full px-3 py-1 text-[12.5px] font-semibold bg-ink/[0.05] text-ink/75">
              Hybrid
            </span>
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full transition-all duration-300 group-hover:rotate-45 group-hover:bg-brand group-hover:text-ink bg-ink text-white">
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
          </a>
          <a
            href="/careers/ai-research-intern"
            className="group flex flex-col gap-4 rounded-[20px] border border-line bg-paper p-5 transition-all hover:border-brand hover:bg-white hover:shadow-lift md:flex-row md:items-center md:p-6"
          >
            <div className="flex-1">
              <h3 className="text-[19px]">AI Research Intern</h3>
              <div className="mt-2 flex flex-wrap gap-4 text-[14px] text-muted">
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
                    className="lucide lucide-briefcase h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                  </svg>{" "}
                  AI &amp; Data
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
                    className="lucide lucide-map-pin h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>{" "}
                  Lisbon
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
                    className="lucide lucide-clock h-4 w-4"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>{" "}
                  Internship
                </span>
              </div>
            </div>
            <span className="inline-flex items-center rounded-full px-3 py-1 text-[12.5px] font-semibold bg-ink/[0.05] text-ink/75">
              On-site
            </span>
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full transition-all duration-300 group-hover:rotate-45 group-hover:bg-brand group-hover:text-ink bg-ink text-white">
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
          </a>
        </div>
      </div>
    </section>
  );
}
