export default function Section02() {
  return (
    <section className="bg-white text-ink py-20 md:py-28 lg:py-32 relative">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <article className="prose-nv text-[17px]">
            <h2 className="!mt-0">About the role</h2>
            <p>
              You’ll join a cross-functional squad delivering for one of our
              flagship clients, owning meaningful parts of the system end to
              end. You’ll work with senior peers, influence technical direction
              and mentor others.
            </p>
            <h3>What you’ll do</h3>
            <ul>
              <li>
                Design, build and operate production systems used by millions
              </li>
              <li>
                Partner with product and design to shape what we build, not just
                how
              </li>
              <li>
                Champion quality through testing, reviews and observability
              </li>
              <li>
                Share knowledge through pairing, writing and internal talks
              </li>
            </ul>
            <h3>What you’ll bring</h3>
            <ul>
              <li>
                5+ years of professional experience in a relevant discipline
              </li>
              <li>A track record of shipping and owning production software</li>
              <li>Clear written and verbal communication in English</li>
              <li>Curiosity, humility and a bias for action</li>
            </ul>
            <h3>Nice to have</h3>
            <ul>
              <li>Experience in regulated industries (fintech, healthcare)</li>
              <li>Open-source contributions or public writing</li>
            </ul>
          </article>
          <div id="apply" className="lg:sticky lg:top-28 lg:self-start">
            <form
              noValidate={true}
              className="flex flex-col gap-4 rounded-[28px] border border-line bg-paper p-6 md:p-8"
            >
              <h2 className="text-[24px]">Apply for this role</h2>
              <label className="flex flex-col gap-2">
                <span className="text-[13.5px] font-bold text-ink">
                  Full name <span className="text-forest">*</span>
                </span>
                <input
                  aria-invalid="false"
                  className="w-full rounded-[14px] border bg-white px-4 text-[15.5px] text-ink placeholder:text-ink/35 transition-colors focus:outline-none focus:ring-4 disabled:cursor-not-allowed disabled:bg-paper disabled:text-ink/40 border-line hover:border-ink/25 focus:border-forest focus:ring-brand/25 h-12"
                  defaultValue=""
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[13.5px] font-bold text-ink">
                  Email <span className="text-forest">*</span>
                </span>
                <input
                  aria-invalid="false"
                  className="w-full rounded-[14px] border bg-white px-4 text-[15.5px] text-ink placeholder:text-ink/35 transition-colors focus:outline-none focus:ring-4 disabled:cursor-not-allowed disabled:bg-paper disabled:text-ink/40 border-line hover:border-ink/25 focus:border-forest focus:ring-brand/25 h-12"
                  type="email"
                  defaultValue=""
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[13.5px] font-bold text-ink">
                  LinkedIn or portfolio{" "}
                </span>
                <input
                  aria-invalid="false"
                  className="w-full rounded-[14px] border bg-white px-4 text-[15.5px] text-ink placeholder:text-ink/35 transition-colors focus:outline-none focus:ring-4 disabled:cursor-not-allowed disabled:bg-paper disabled:text-ink/40 border-line hover:border-ink/25 focus:border-forest focus:ring-brand/25 h-12"
                  placeholder="https://"
                  defaultValue=""
                />
                <span className="text-[13px] text-muted">Optional</span>
              </label>
              <div>
                <span className="text-[13.5px] font-bold">
                  CV / Résumé <span className="text-forest">*</span>
                </span>
                <label className="mt-2 flex cursor-pointer flex-col items-center gap-2 rounded-[14px] border-2 border-dashed bg-white p-6 text-center transition-colors hover:border-forest border-line">
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
                    className="lucide lucide-upload h-6 w-6 text-forest"
                    aria-hidden="true"
                  >
                    <path d="M12 3v12"></path>
                    <path d="m17 8-5-5-5 5"></path>
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  </svg>
                  <span className="text-[14px] font-bold">
                    Click to upload or drag &amp; drop
                  </span>
                  <span className="text-[12.5px] text-muted">
                    PDF or DOCX, max 5 MB
                  </span>
                  <input
                    accept=".pdf,.doc,.docx"
                    className="sr-only"
                    type="file"
                  />
                </label>
              </div>
              <label className="flex flex-col gap-2">
                <span className="text-[13.5px] font-bold text-ink">
                  Anything else?{" "}
                </span>
                <textarea
                  aria-invalid="false"
                  className="w-full rounded-[14px] border bg-white px-4 text-[15.5px] text-ink placeholder:text-ink/35 transition-colors focus:outline-none focus:ring-4 disabled:cursor-not-allowed disabled:bg-paper disabled:text-ink/40 border-line hover:border-ink/25 focus:border-forest focus:ring-brand/25 min-h-32 py-3 min-h-24"
                ></textarea>
                <span className="text-[13px] text-muted">Optional</span>
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[13.5px] font-bold text-ink">
                  How did you hear about us?{" "}
                </span>
                <div className="relative">
                  <select
                    aria-invalid="false"
                    className="w-full rounded-[14px] border bg-white px-4 text-[15.5px] text-ink placeholder:text-ink/35 transition-colors focus:outline-none focus:ring-4 disabled:cursor-not-allowed disabled:bg-paper disabled:text-ink/40 border-line hover:border-ink/25 focus:border-forest focus:ring-brand/25 h-12 appearance-none pr-10"
                  >
                    <option value="" defaultSelected={true}>
                      Select one
                    </option>
                    <option>LinkedIn</option>
                    <option>Referral</option>
                    <option>Event</option>
                    <option>Other</option>
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
              <div>
                <label className="flex cursor-pointer items-start gap-3 text-[14px] text-muted">
                  <input className="peer sr-only" type="checkbox" />
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border-2 transition-colors peer-focus-visible:ring-4 peer-focus-visible:ring-brand/30 border-ink/25"></span>
                  <span>
                    I consent to Nuvoryx storing my data for recruitment
                    purposes for up to 12 months.
                  </span>
                </label>
              </div>
              <button
                className="group/btn relative isolate items-center overflow-hidden rounded-full font-display font-semibold tracking-[-0.01em] whitespace-nowrap select-none transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-40 aria-disabled:pointer-events-none aria-disabled:opacity-40 inline-flex bg-brand text-ink shadow-[0_12px_32px_-14px_rgba(5,207,69,0.75)] hover:shadow-[0_18px_44px_-12px_rgba(5,207,69,0.95)] h-[60px] text-[15.5px] pl-7 pr-1.5 gap-5 mt-2 w-full"
                type="submit"
              >
                <span
                  aria-hidden="true"
                  className="absolute -z-10 aspect-square rounded-full transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] top-1.5 bottom-1.5 right-1.5 bg-forest scale-100 group-hover/btn:scale-[26]"
                ></span>
                <span className="relative inline-flex items-center gap-2 transition-colors duration-300 group-hover/btn:text-white mr-auto">
                  Submit application
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
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
