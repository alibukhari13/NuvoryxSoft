export default function Section01() {
  return (
    <section className="bg-paper">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8 pb-16 pt-12">
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
            <span className="text-ink">Contact</span>
          </span>
        </nav>
        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <span className="inline-flex items-center gap-2 font-mono text-[11.5px] font-medium uppercase tracking-[0.18em] text-muted">
              <span
                className="h-1.5 w-1.5 rounded-full bg-brand"
                aria-hidden="true"
              ></span>
              Contact us
            </span>
            <h1 className="mt-5 text-[40px] sm:text-[60px]">
              Let’s build what’s{" "}
              <span className="relative inline-block">
                next
                <span className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-brand/70"></span>
              </span>
              , together.
            </h1>
            <p className="mt-6 max-w-md text-[18px] text-muted">
              Tell us about your project. A senior architect will reply within
              one business day.
            </p>
            <div className="mt-10 flex flex-col gap-3">
              <a
                href="mailto:hello@nuvoryx.com"
                className="group flex items-center gap-4 rounded-[18px] border border-line bg-white p-4 transition-colors hover:border-brand"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-forest text-brand">
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
                    className="lucide lucide-mail h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  </svg>
                </span>
                <div>
                  <div className="text-[13px] text-muted">Email</div>
                  <div className="font-bold">hello@nuvoryx.com</div>
                </div>
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
                  className="lucide lucide-arrow-right ml-auto h-4 w-4 text-brand opacity-0 transition-opacity group-hover:opacity-100"
                  aria-hidden="true"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
              <a
                href="tel:+14155550142"
                className="group flex items-center gap-4 rounded-[18px] border border-line bg-white p-4 transition-colors hover:border-brand"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-forest text-brand">
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
                    className="lucide lucide-phone h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                  </svg>
                </span>
                <div>
                  <div className="text-[13px] text-muted">Phone</div>
                  <div className="font-bold">+1 (415) 555-0142</div>
                </div>
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
                  className="lucide lucide-arrow-right ml-auto h-4 w-4 text-brand opacity-0 transition-opacity group-hover:opacity-100"
                  aria-hidden="true"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
              <a
                href="mailto:careers@nuvoryx.com"
                className="group flex items-center gap-4 rounded-[18px] border border-line bg-white p-4 transition-colors hover:border-brand"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-forest text-brand">
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
                    className="lucide lucide-message-square h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                  </svg>
                </span>
                <div>
                  <div className="text-[13px] text-muted">Careers</div>
                  <div className="font-bold">careers@nuvoryx.com</div>
                </div>
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
                  className="lucide lucide-arrow-right ml-auto h-4 w-4 text-brand opacity-0 transition-opacity group-hover:opacity-100"
                  aria-hidden="true"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="mt-6">
              <div className="rounded-[24px] p-6 bg-white shadow-soft">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      alt="Ethan Brooks"
                      className="h-16 w-16 rounded-2xl object-cover"
                      src="/agency-assets/d7422bed27487716b559bb42b8b297972b5209268cdead958a64a38f19ae7c18.jpg"
                    />
                    <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-white bg-brand"></span>
                  </div>
                  <div>
                    <div className="font-display text-[17px] font-bold">
                      Ethan Brooks
                    </div>
                    <div className="text-[14px] text-muted">
                      Co-founder &amp; CEO
                    </div>
                  </div>
                </div>
                <p className="mt-5 text-[15px] italic text-ink/80">
                  “Every project starts with a conversation, not a contract.
                  Tell me what you’re trying to achieve, and we’ll be honest
                  about how we can help.”
                </p>
                <div className="mt-5 flex flex-col gap-2 text-[14.5px] font-bold">
                  <a
                    href="mailto:ethan@nuvoryx.com"
                    className="flex items-center gap-2 hover:text-brand"
                  >
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
                      className="lucide lucide-mail h-4 w-4 text-brand"
                      aria-hidden="true"
                    >
                      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    </svg>{" "}
                    ethan@nuvoryx.com
                  </a>
                  <a
                    href="/book-consultation"
                    className="flex items-center gap-2 hover:text-brand"
                  >
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
                      className="lucide lucide-phone-call h-4 w-4 text-brand"
                      aria-hidden="true"
                    >
                      <path d="M13 2a9 9 0 0 1 9 9"></path>
                      <path d="M13 6a5 5 0 0 1 5 5"></path>
                      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                    </svg>{" "}
                    Book a 30-min call
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-[28px] border border-line bg-white p-6 shadow-soft md:p-10">
            <h2 className="mb-6 text-[26px]">Send us a message</h2>
            <form noValidate={true} className="grid gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="text-[13.5px] font-bold text-ink">
                  First name <span className="text-forest">*</span>
                </span>
                <input
                  aria-invalid="false"
                  className="w-full rounded-[14px] border bg-white px-4 text-[15.5px] text-ink placeholder:text-ink/35 transition-colors focus:outline-none focus:ring-4 disabled:cursor-not-allowed disabled:bg-paper disabled:text-ink/40 border-line hover:border-ink/25 focus:border-forest focus:ring-brand/25 h-12"
                  placeholder="Jane"
                  autoComplete="given-name"
                  defaultValue=""
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[13.5px] font-bold text-ink">
                  Last name <span className="text-forest">*</span>
                </span>
                <input
                  aria-invalid="false"
                  className="w-full rounded-[14px] border bg-white px-4 text-[15.5px] text-ink placeholder:text-ink/35 transition-colors focus:outline-none focus:ring-4 disabled:cursor-not-allowed disabled:bg-paper disabled:text-ink/40 border-line hover:border-ink/25 focus:border-forest focus:ring-brand/25 h-12"
                  placeholder="Cooper"
                  autoComplete="family-name"
                  defaultValue=""
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[13.5px] font-bold text-ink">
                  Work email <span className="text-forest">*</span>
                </span>
                <input
                  aria-invalid="false"
                  className="w-full rounded-[14px] border bg-white px-4 text-[15.5px] text-ink placeholder:text-ink/35 transition-colors focus:outline-none focus:ring-4 disabled:cursor-not-allowed disabled:bg-paper disabled:text-ink/40 border-line hover:border-ink/25 focus:border-forest focus:ring-brand/25 h-12"
                  placeholder="jane@company.com"
                  autoComplete="email"
                  type="email"
                  defaultValue=""
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[13.5px] font-bold text-ink">Phone </span>
                <input
                  aria-invalid="false"
                  className="w-full rounded-[14px] border bg-white px-4 text-[15.5px] text-ink placeholder:text-ink/35 transition-colors focus:outline-none focus:ring-4 disabled:cursor-not-allowed disabled:bg-paper disabled:text-ink/40 border-line hover:border-ink/25 focus:border-forest focus:ring-brand/25 h-12"
                  placeholder="+1 555 000 0000"
                  autoComplete="tel"
                  type="tel"
                  defaultValue=""
                />
                <span className="text-[13px] text-muted">Optional</span>
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[13.5px] font-bold text-ink">
                  Company <span className="text-forest">*</span>
                </span>
                <input
                  aria-invalid="false"
                  className="w-full rounded-[14px] border bg-white px-4 text-[15.5px] text-ink placeholder:text-ink/35 transition-colors focus:outline-none focus:ring-4 disabled:cursor-not-allowed disabled:bg-paper disabled:text-ink/40 border-line hover:border-ink/25 focus:border-forest focus:ring-brand/25 h-12"
                  placeholder="Acme Inc."
                  autoComplete="organization"
                  defaultValue=""
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[13.5px] font-bold text-ink">
                  Service interested in <span className="text-forest">*</span>
                </span>
                <div className="relative">
                  <select
                    aria-invalid="false"
                    className="w-full rounded-[14px] border bg-white px-4 text-[15.5px] text-ink placeholder:text-ink/35 transition-colors focus:outline-none focus:ring-4 disabled:cursor-not-allowed disabled:bg-paper disabled:text-ink/40 border-line hover:border-ink/25 focus:border-forest focus:ring-brand/25 h-12 appearance-none pr-10"
                  >
                    <option value="">Select a service</option>
                    <option>AI &amp; Data Innovation</option>
                    <option>Engineering</option>
                    <option>Advisory &amp; Strategy</option>
                    <option>Cybersecurity</option>
                    <option>Optimization &amp; Quality</option>
                    <option>Cloud &amp; Infrastructure</option>
                    <option>Digital Experience</option>
                    <option>Business Process Services</option>
                    <option>Not sure yet</option>
                  </select>
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
                    className="lucide lucide-chevron-down pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/50"
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </div>
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[13.5px] font-bold text-ink">
                  Estimated budget{" "}
                </span>
                <div className="relative">
                  <select
                    aria-invalid="false"
                    className="w-full rounded-[14px] border bg-white px-4 text-[15.5px] text-ink placeholder:text-ink/35 transition-colors focus:outline-none focus:ring-4 disabled:cursor-not-allowed disabled:bg-paper disabled:text-ink/40 border-line hover:border-ink/25 focus:border-forest focus:ring-brand/25 h-12 appearance-none pr-10"
                  >
                    <option value="">Select a range</option>
                    <option>Under $25k</option>
                    <option>$25k – $75k</option>
                    <option>$75k – $250k</option>
                    <option>$250k – $1M</option>
                    <option>$1M+</option>
                  </select>
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
                    className="lucide lucide-chevron-down pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/50"
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </div>
                <span className="text-[13px] text-muted">
                  Helps us propose the right model
                </span>
              </label>
              <div className=""></div>
              <div className="sm:col-span-2">
                <label className="flex flex-col gap-2">
                  <span className="text-[13.5px] font-bold text-ink">
                    How can we help? <span className="text-forest">*</span>
                  </span>
                  <textarea
                    aria-invalid="false"
                    className="w-full rounded-[14px] border bg-white px-4 text-[15.5px] text-ink placeholder:text-ink/35 transition-colors focus:outline-none focus:ring-4 disabled:cursor-not-allowed disabled:bg-paper disabled:text-ink/40 border-line hover:border-ink/25 focus:border-forest focus:ring-brand/25 min-h-32 py-3"
                    placeholder="Briefly describe your project, goals and timeline."
                  ></textarea>
                </label>
              </div>
              <div className="sm:col-span-2">
                <div>
                  <label className="flex cursor-pointer items-start gap-3 text-[14px] text-muted">
                    <input className="peer sr-only" type="checkbox" />
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border-2 transition-colors peer-focus-visible:ring-4 peer-focus-visible:ring-brand/30 border-ink/25"></span>
                    <span>
                      I agree to Nuvoryx processing my information in accordance
                      with the{" "}
                      <a
                        href="/privacy"
                        className="font-bold text-ink underline decoration-brand underline-offset-2"
                      >
                        Privacy Policy
                      </a>
                      .
                    </span>
                  </label>
                </div>
              </div>
              <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                <button
                  className="group/btn relative isolate items-center overflow-hidden rounded-full font-display font-semibold tracking-[-0.01em] whitespace-nowrap select-none transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-40 aria-disabled:pointer-events-none aria-disabled:opacity-40 inline-flex bg-brand text-ink shadow-[0_12px_32px_-14px_rgba(5,207,69,0.75)] hover:shadow-[0_18px_44px_-12px_rgba(5,207,69,0.95)] h-[60px] text-[15.5px] pl-7 pr-1.5 gap-5"
                  type="submit"
                >
                  <span
                    aria-hidden="true"
                    className="absolute -z-10 aspect-square rounded-full transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] top-1.5 bottom-1.5 right-1.5 bg-forest scale-100 group-hover/btn:scale-[26]"
                  ></span>
                  <span className="relative inline-flex items-center gap-2 transition-colors duration-300 group-hover/btn:text-white mr-auto">
                    Send message
                  </span>
                  <span className="relative grid shrink-0 place-items-center overflow-hidden rounded-full h-12 w-12 bg-forest text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right absolute transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-x-[220%] h-[18px] w-[18px]"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right absolute -translate-x-[220%] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-x-0 h-[18px] w-[18px]"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </span>
                </button>
                <span className="text-[13px] text-muted">
                  We reply within one business day.
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
