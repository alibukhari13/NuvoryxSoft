export default function Section03() {
  return (
    <section className="bg-white text-ink py-20 md:py-28 lg:py-32 relative">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[300px_1fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[22px] border border-line bg-paper p-6">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Client overview
              </div>
              <dl className="mt-5 flex flex-col gap-4 text-[14.5px]">
                <div className="flex justify-between gap-4 border-b border-line pb-3 last:border-0">
                  <dt className="text-muted">Client</dt>
                  <dd className="text-right font-bold">Northwind Logistics</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-line pb-3 last:border-0">
                  <dt className="text-muted">Industry</dt>
                  <dd className="text-right font-bold">
                    Logistics &amp; Supply Chain
                  </dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-line pb-3 last:border-0">
                  <dt className="text-muted">Service</dt>
                  <dd className="text-right font-bold">
                    Cloud &amp; Infrastructure
                  </dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-line pb-3 last:border-0">
                  <dt className="text-muted">Region</dt>
                  <dd className="text-right font-bold">
                    North America &amp; Europe
                  </dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-line pb-3 last:border-0">
                  <dt className="text-muted">Duration</dt>
                  <dd className="text-right font-bold">7 months</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-line pb-3 last:border-0">
                  <dt className="text-muted">Team</dt>
                  <dd className="text-right font-bold">12 specialists</dd>
                </div>
              </dl>
              <div className="mt-4 flex flex-wrap gap-1.5">
                <span className="inline-flex items-center rounded-full px-3 py-1 text-[12.5px] font-semibold bg-ink/[0.05] text-ink/75">
                  AWS
                </span>
                <span className="inline-flex items-center rounded-full px-3 py-1 text-[12.5px] font-semibold bg-ink/[0.05] text-ink/75">
                  Terraform
                </span>
                <span className="inline-flex items-center rounded-full px-3 py-1 text-[12.5px] font-semibold bg-ink/[0.05] text-ink/75">
                  Kubernetes
                </span>
                <span className="inline-flex items-center rounded-full px-3 py-1 text-[12.5px] font-semibold bg-ink/[0.05] text-ink/75">
                  Datadog
                </span>
              </div>
            </div>
          </aside>
          <div className="flex flex-col gap-16">
            <div>
              <span className="inline-flex items-center gap-2 font-mono text-[11.5px] font-medium uppercase tracking-[0.18em] text-muted">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-brand"
                  aria-hidden="true"
                ></span>
                The challenge
              </span>
              <h2 className="mt-4 text-[32px] sm:text-[40px]">
                What stood in the way.
              </h2>
              <p className="mt-5 text-[17px] text-muted">
                A global freight forwarder needed to exit two data centres in
                nine months while keeping 24/7 operations live.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                <li className="flex gap-3 rounded-2xl bg-paper p-4 text-[15px] font-semibold">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E08A3C]"></span>{" "}
                  Fragmented data across 14 systems
                </li>
                <li className="flex gap-3 rounded-2xl bg-paper p-4 text-[15px] font-semibold">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E08A3C]"></span>{" "}
                  Manual reviews creating multi-day backlogs
                </li>
                <li className="flex gap-3 rounded-2xl bg-paper p-4 text-[15px] font-semibold">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E08A3C]"></span>{" "}
                  Strict regulatory and audit obligations
                </li>
                <li className="flex gap-3 rounded-2xl bg-paper p-4 text-[15px] font-semibold">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E08A3C]"></span>{" "}
                  Peak loads 6x the daily average
                </li>
              </ul>
            </div>
            <div>
              <span className="inline-flex items-center gap-2 font-mono text-[11.5px] font-medium uppercase tracking-[0.18em] text-muted">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-brand"
                  aria-hidden="true"
                ></span>
                The solution
              </span>
              <h2 className="mt-4 text-[32px] sm:text-[40px]">
                What we built.
              </h2>
              <p className="mt-5 text-[17px] text-muted">
                A cross-functional squad ran a two-week discovery, then
                delivered in fortnightly increments. We introduced an
                event-driven architecture, an ML-powered decision layer and an
                observability stack that gave the client’s team full confidence
                to operate it.
              </p>
              <div className="mt-8">
                <div className="grid-bg relative overflow-hidden rounded-[24px] bg-ink p-6 md:p-10">
                  <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/20 blur-[90px]"></div>
                  <div className="relative grid gap-4 md:grid-cols-5 md:items-center">
                    <div className="relative">
                      <div className="rounded-2xl border p-4 text-center border-white/10 bg-white/[0.04]">
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
                          className="lucide lucide-activity mx-auto h-6 w-6 text-brand"
                          aria-hidden="true"
                        >
                          <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                        </svg>
                        <div className="mt-2 text-[13.5px] font-bold text-white">
                          Data sources
                        </div>
                      </div>
                      <div className="mx-auto h-4 w-px bg-brand/50 md:absolute md:-right-4 md:top-1/2 md:h-px md:w-4"></div>
                    </div>
                    <div className="relative">
                      <div className="rounded-2xl border p-4 text-center border-white/10 bg-white/[0.04]">
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
                          className="lucide lucide-sparkles lucide-stars mx-auto h-6 w-6 text-brand"
                          aria-hidden="true"
                        >
                          <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                          <path d="M20 2v4"></path>
                          <path d="M22 4h-4"></path>
                          <circle cx="4" cy="20" r="2"></circle>
                        </svg>
                        <div className="mt-2 text-[13.5px] font-bold text-white">
                          Event stream
                        </div>
                      </div>
                      <div className="mx-auto h-4 w-px bg-brand/50 md:absolute md:-right-4 md:top-1/2 md:h-px md:w-4"></div>
                    </div>
                    <div className="relative">
                      <div className="rounded-2xl border p-4 text-center border-brand bg-forest">
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
                          className="lucide lucide-bot mx-auto h-6 w-6 text-brand"
                          aria-hidden="true"
                        >
                          <path d="M12 8V4H8"></path>
                          <rect
                            width="16"
                            height="12"
                            x="4"
                            y="8"
                            rx="2"
                          ></rect>
                          <path d="M2 14h2"></path>
                          <path d="M20 14h2"></path>
                          <path d="M15 13v2"></path>
                          <path d="M9 13v2"></path>
                        </svg>
                        <div className="mt-2 text-[13.5px] font-bold text-white">
                          AI decision layer
                        </div>
                      </div>
                      <div className="mx-auto h-4 w-px bg-brand/50 md:absolute md:-right-4 md:top-1/2 md:h-px md:w-4"></div>
                    </div>
                    <div className="relative">
                      <div className="rounded-2xl border p-4 text-center border-white/10 bg-white/[0.04]">
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
                          className="lucide lucide-zap mx-auto h-6 w-6 text-brand"
                          aria-hidden="true"
                        >
                          <path d="M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z"></path>
                        </svg>
                        <div className="mt-2 text-[13.5px] font-bold text-white">
                          APIs &amp; apps
                        </div>
                      </div>
                      <div className="mx-auto h-4 w-px bg-brand/50 md:absolute md:-right-4 md:top-1/2 md:h-px md:w-4"></div>
                    </div>
                    <div className="relative">
                      <div className="rounded-2xl border p-4 text-center border-white/10 bg-white/[0.04]">
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
                          className="lucide lucide-circle-check lucide-check-circle-2 mx-auto h-6 w-6 text-brand"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="m16 9-5.5 5.5L8 12"></path>
                        </svg>
                        <div className="mt-2 text-[13.5px] font-bold text-white">
                          Observability
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <span className="inline-flex items-center gap-2 font-mono text-[11.5px] font-medium uppercase tracking-[0.18em] text-muted">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-brand"
                  aria-hidden="true"
                ></span>
                Tech stack
              </span>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <div className="group/t flex flex-col items-center gap-3 rounded-2xl border border-line p-5 text-center font-display text-[15px] font-bold transition-colors hover:border-brand/60">
                  <svg
                    viewBox="0 0 24 24"
                    role="img"
                    aria-label="Python"
                    className="aspect-square shrink-0 h-8 transition-transform duration-500 group-hover/t:scale-110"
                    fill="#3776AB"
                  >
                    <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"></path>
                  </svg>
                  AWS
                </div>
                <div className="group/t flex flex-col items-center gap-3 rounded-2xl border border-line p-5 text-center font-display text-[15px] font-bold transition-colors hover:border-brand/60">
                  <svg
                    viewBox="0 0 24 24"
                    role="img"
                    aria-label="Kafka"
                    className="aspect-square shrink-0 h-8 transition-transform duration-500 group-hover/t:scale-110"
                    fill="#231F20"
                  >
                    <path d="M9.71 2.136a1.43 1.43 0 0 0-2.047 0h-.007a1.48 1.48 0 0 0-.421 1.042c0 .41.161.777.422 1.039l.007.007c.257.264.616.426 1.019.426.404 0 .766-.162 1.027-.426l.003-.007c.261-.262.421-.629.421-1.039 0-.408-.159-.777-.421-1.042H9.71zM8.683 22.295c.404 0 .766-.167 1.027-.429l.003-.008c.261-.261.421-.631.421-1.036 0-.41-.159-.778-.421-1.044H9.71a1.42 1.42 0 0 0-1.027-.432 1.4 1.4 0 0 0-1.02.432h-.007c-.26.266-.422.634-.422 1.044 0 .406.161.775.422 1.036l.007.008c.258.262.617.429 1.02.429zm7.89-4.462c.359-.096.683-.33.882-.684l.027-.052a1.47 1.47 0 0 0 .114-1.067 1.454 1.454 0 0 0-.675-.896l-.021-.014a1.425 1.425 0 0 0-1.078-.132c-.36.091-.684.335-.881.686-.2.349-.241.75-.146 1.119.099.363.33.691.675.896h.002c.346.203.737.239 1.101.144zm-6.405-7.342a2.083 2.083 0 0 0-1.485-.627c-.58 0-1.103.242-1.482.627-.378.385-.612.916-.612 1.507s.233 1.124.612 1.514a2.08 2.08 0 0 0 2.967 0c.379-.39.612-.923.612-1.514s-.233-1.122-.612-1.507zm-.835-2.51c.843.141 1.6.552 2.178 1.144h.004c.092.093.182.196.265.299l1.446-.851a3.176 3.176 0 0 1-.047-1.808 3.149 3.149 0 0 1 1.456-1.926l.025-.016a3.062 3.062 0 0 1 2.345-.306c.77.21 1.465.721 1.898 1.482v.002c.431.757.518 1.626.313 2.408a3.145 3.145 0 0 1-1.456 1.928l-.198.118h-.02a3.095 3.095 0 0 1-2.154.201 3.127 3.127 0 0 1-1.514-.944l-1.444.848a4.162 4.162 0 0 1 0 2.879l1.444.846c.413-.47.939-.789 1.514-.944a3.041 3.041 0 0 1 2.371.319l.048.023v.002a3.17 3.17 0 0 1 1.408 1.906 3.215 3.215 0 0 1-.313 2.405l-.026.053-.003-.005a3.147 3.147 0 0 1-1.867 1.436 3.096 3.096 0 0 1-2.371-.318v-.006a3.156 3.156 0 0 1-1.456-1.927 3.175 3.175 0 0 1 .047-1.805l-1.446-.848a3.905 3.905 0 0 1-.265.294l-.004.005a3.938 3.938 0 0 1-2.178 1.138v1.699a3.09 3.09 0 0 1 1.56.862l.002.004c.565.572.914 1.368.914 2.243 0 .873-.35 1.664-.914 2.239l-.002.009a3.1 3.1 0 0 1-2.21.931 3.1 3.1 0 0 1-2.206-.93h-.002v-.009a3.186 3.186 0 0 1-.916-2.239c0-.875.35-1.672.916-2.243v-.004h.002a3.1 3.1 0 0 1 1.558-.862v-1.699a3.926 3.926 0 0 1-2.176-1.138l-.006-.005a4.098 4.098 0 0 1-1.173-2.874c0-1.122.452-2.136 1.173-2.872h.006a3.947 3.947 0 0 1 2.176-1.144V6.289a3.137 3.137 0 0 1-1.558-.864h-.002v-.004a3.192 3.192 0 0 1-.916-2.243c0-.871.35-1.669.916-2.243l.002-.002A3.084 3.084 0 0 1 8.683 0c.861 0 1.641.355 2.21.932v.002h.002c.565.574.914 1.372.914 2.243 0 .876-.35 1.667-.914 2.243l-.002.005a3.142 3.142 0 0 1-1.56.864v1.692zm8.121-1.129l-.012-.019a1.452 1.452 0 0 0-.87-.668 1.43 1.43 0 0 0-1.103.146h.002c-.347.2-.58.529-.677.896-.095.365-.054.768.146 1.119l.007.009c.2.347.519.579.874.673.357.103.755.059 1.098-.144l.019-.009a1.47 1.47 0 0 0 .657-.885 1.493 1.493 0 0 0-.141-1.118"></path>
                  </svg>
                  Terraform
                </div>
                <div className="group/t flex flex-col items-center gap-3 rounded-2xl border border-line p-5 text-center font-display text-[15px] font-bold transition-colors hover:border-brand/60">
                  <span
                    role="img"
                    aria-label="AWS"
                    className="inline-flex shrink-0 items-center [&amp;>svg]:h-full [&amp;>svg]:w-auto [&amp;_svg]:fill-ink h-8 transition-transform duration-500 group-hover/t:scale-110"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 104 256 52"
                    >
                      <path
                        fill="#f90"
                        d="M230.993 120.964c-27.888 20.599-68.408 31.534-103.247 31.534c-48.827 0-92.821-18.056-126.05-48.064c-2.628-2.373-.255-5.594 2.881-3.73c35.942 20.854 80.276 33.484 126.136 33.484c30.94 0 64.932-6.442 96.212-19.666c4.662-2.12 8.646 3.052 4.068 6.442m11.614-13.224c-3.56-4.577-23.566-2.204-32.636-1.102c-2.713.34-3.137-2.034-.678-3.814c15.936-11.19 42.13-7.968 45.181-4.239c3.052 3.815-.848 30.008-15.767 42.554c-2.288 1.95-4.492.933-3.475-1.61c3.39-8.393 10.935-27.296 7.375-31.789"
                      ></path>
                    </svg>
                  </span>
                  Kubernetes
                </div>
                <div className="group/t flex flex-col items-center gap-3 rounded-2xl border border-line p-5 text-center font-display text-[15px] font-bold transition-colors hover:border-brand/60">
                  <span
                    role="img"
                    aria-label="Snowflake"
                    className="inline-flex shrink-0 items-center [&amp;>svg]:h-full [&amp;>svg]:w-auto [&amp;_svg]:fill-ink h-8 transition-transform duration-500 group-hover/t:scale-110"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 255"
                    >
                      <path
                        fill="#29b5e8"
                        d="M100.212 161.19c8.15.579 14.607 7.254 14.776 15.442l.003.328v62.095c0 8.751-7.166 15.842-15.965 15.842c-8.735 0-15.813-6.92-15.982-15.526l-.003-.316V204.32l-30.408 17.383c-7.625 4.397-17.376 1.795-21.803-5.763c-4.35-7.48-1.866-17.04 5.541-21.495l.295-.173l54.275-31.015a15.83 15.83 0 0 1 9.27-2.067m64.452 1.854l.382.213l54.264 31.015c7.647 4.376 10.241 14.09 5.846 21.668c-4.348 7.46-13.915 10.092-21.503 5.931l-.299-.168l-30.387-17.383v34.735c0 8.751-7.144 15.842-15.986 15.842c-8.735 0-15.794-6.92-15.963-15.526l-.003-.316V176.96c0-8.337 6.502-15.184 14.78-15.77c2.97-.252 6.056.33 8.87 1.854M23.671 82.509l.3.167l54.234 31.035c3.813 2.179 6.358 5.635 7.432 9.504c.357 1.246.52 2.49.583 3.737c.04 1.72-.185 3.464-.727 5.155a15.74 15.74 0 0 1-6.926 8.824l-.362.213L23.971 172.2c-7.656 4.367-17.417 1.783-21.81-5.773c-4.371-7.5-1.886-17.013 5.544-21.475l.292-.17l30.306-17.323l-30.306-17.37C.34 105.708-2.276 96.047 2.16 88.481c4.337-7.478 13.902-10.105 21.511-5.973m230.177 5.973c4.425 7.565 1.808 17.227-5.846 21.605l-30.308 17.37l30.308 17.323c7.654 4.386 10.27 14.05 5.846 21.646c-4.417 7.556-14.186 10.14-21.813 5.773l-54.275-31.055c-3.619-2.087-6.132-5.36-7.247-9.037a15.4 15.4 0 0 1-.716-5.155a15.3 15.3 0 0 1 .562-3.737a15.9 15.9 0 0 1 7.401-9.504l54.275-31.035c7.627-4.367 17.396-1.77 21.813 5.806M131.306 97.84c.919 0 2.186.516 2.831 1.174l22.558 22.326c.643.638 1.165 1.904 1.165 2.817v6.583c0 .892-.522 2.157-1.165 2.786l-22.558 22.327c-.645.656-1.892 1.193-2.831 1.193h-6.634c-.911 0-2.178-.537-2.833-1.193l-22.546-22.327c-.646-.629-1.167-1.894-1.167-2.786v-6.583c0-.913.521-2.18 1.167-2.817l22.546-22.326c.655-.658 1.922-1.174 2.833-1.174zm-3.192 19.054h-.253c-.91 0-2.177.528-2.811 1.164l-6.532 6.444c-.655.667-1.156 1.924-1.156 2.826v.252c0 .891.501 2.137 1.156 2.786l6.532 6.462c.643.638 1.9 1.164 2.81 1.164h.254c.912 0 2.18-.526 2.824-1.164l6.531-6.462c.644-.649 1.195-1.895 1.195-2.786v-.252c0-.902-.551-2.16-1.195-2.826l-6.531-6.444c-.644-.636-1.912-1.164-2.824-1.164M156.98 0c8.735 0 15.813 6.923 15.983 15.505l.003.315v34.746l30.387-17.404c7.636-4.374 17.397-1.78 21.802 5.784a15.783 15.783 0 0 1-5.55 21.477l-.296.173l-54.264 31.044a16 16 0 0 1-9.252 2.065c-8.168-.597-14.608-7.283-14.776-15.462l-.003-.328V15.82C141.015 7.092 148.14 0 156.98 0M99.026 0c8.693 0 15.792 6.923 15.962 15.505l.003.315v62.095c0 8.327-6.52 15.185-14.78 15.79a16.05 16.05 0 0 1-8.888-1.854l-.382-.211l-54.275-31.044c-7.636-4.378-10.243-14.051-5.836-21.65c4.37-7.465 13.926-10.09 21.505-5.95l.298.166l30.408 17.404V15.82C83.041 7.092 90.185 0 99.026 0"
                      ></path>
                    </svg>
                  </span>
                  Datadog
                </div>
              </div>
            </div>
            <div>
              <span className="inline-flex items-center gap-2 font-mono text-[11.5px] font-medium uppercase tracking-[0.18em] text-muted">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-brand"
                  aria-hidden="true"
                ></span>
                Results
              </span>
              <h2 className="mt-4 text-[32px] sm:text-[40px]">The impact.</h2>
              <div className="mt-8 grid gap-px overflow-hidden rounded-[24px] bg-line sm:grid-cols-3">
                <div className="bg-forest p-8 text-white">
                  <div className="font-display text-[48px] font-bold leading-none text-brand">
                    340
                  </div>
                  <div className="mt-3 text-white/70">workloads migrated</div>
                </div>
                <div className="bg-forest p-8 text-white">
                  <div className="font-display text-[48px] font-bold leading-none text-brand">
                    36%
                  </div>
                  <div className="mt-3 text-white/70">lower infra cost</div>
                </div>
                <div className="bg-forest p-8 text-white">
                  <div className="font-display text-[48px] font-bold leading-none text-brand">
                    0
                  </div>
                  <div className="mt-3 text-white/70">unplanned outages</div>
                </div>
              </div>
            </div>
            <figure className="relative overflow-hidden rounded-[28px] bg-ink p-8 text-white md:p-12">
              <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-brand/25 blur-3xl"></div>
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
                className="lucide lucide-quote relative h-10 w-10 text-brand"
                aria-hidden="true"
              >
                <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
                <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
              </svg>
              <blockquote className="relative mt-6 font-display text-[22px] font-semibold leading-snug tracking-[-0.02em] md:text-[28px]">
                “They treated our cutover weekend like a launch at NASA. Nothing
                went wrong, and our bill went down.”
              </blockquote>
              <figcaption className="relative mt-8 flex items-center gap-4">
                <img
                  alt="Amara Okafor"
                  className="h-14 w-14 rounded-full object-cover"
                  src="/agency-assets/64fc47639d5c3f087c78903c57faf4827168ba7fa8c8cd1e3e86bc6eb4c8f79d.jpg"
                />
                <div>
                  <div className="font-bold">Marcus Reid</div>
                  <div className="text-[14px] text-white/60">
                    VP Infrastructure, Northwind
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
