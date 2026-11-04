export default function Section08() {
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
                Case studies
              </span>
            </div>
            <div className="reveal in" style={{ transitionDelay: "80ms" }}>
              <h2 className="mt-4 text-[34px] sm:text-[44px] lg:text-[52px]">
                Related success stories
              </h2>
            </div>
          </div>
          <div
            className="reveal in shrink-0"
            style={{ transitionDelay: "240ms" }}
          >
            <a
              href="/case-studies"
              className="group inline-flex items-center gap-1.5 text-[15px] font-bold text-ink hover:text-forest"
            >
              <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1.5px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-300 group-hover:bg-[length:100%_1.5px]">
                All case studies
              </span>
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
                className="lucide lucide-arrow-right h-4 w-4 text-brand transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <a
            href="/case-studies/lumenpay-fraud-ai"
            className="group block shrink-0 snap-start w-full"
          >
            <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift flex h-full flex-col overflow-hidden">
              <div className="relative aspect-[16/9] overflow-hidden rounded-t-[22px]">
                <img
                  alt="LumenPay project"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://images.unsplash.com/photo-1681826291722-70bd7e9e6fc3?auto=format&fit=crop&w=1600&q=75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent"></div>
                <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full px-3 py-1 text-[12.5px] font-semibold text-ink/80 bg-white/90 backdrop-blur">
                    Fintech &amp; Banking
                  </span>
                  <span className="inline-flex items-center rounded-full px-3 py-1 text-[12.5px] font-semibold text-ink/80 bg-white/90 backdrop-blur">
                    AI &amp; Data Innovation
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 font-display text-[18px] font-bold text-white">
                  LumenPay
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-[19px] leading-snug">
                  43% fewer fraudulent transactions with real-time ML scoring
                </h3>
                <div className="mt-5 grid grid-cols-3 gap-3 border-y border-line py-4">
                  <div>
                    <div className="font-display text-[20px] font-bold text-forest">
                      43%
                    </div>
                    <div className="text-[12px] leading-tight text-muted">
                      drop in fraud losses
                    </div>
                  </div>
                  <div>
                    <div className="font-display text-[20px] font-bold text-forest">
                      38ms
                    </div>
                    <div className="text-[12px] leading-tight text-muted">
                      scoring latency
                    </div>
                  </div>
                  <div>
                    <div className="font-display text-[20px] font-bold text-forest">
                      $12M
                    </div>
                    <div className="text-[12px] leading-tight text-muted">
                      annual savings
                    </div>
                  </div>
                </div>
                <div className="mt-5 flex items-start gap-3">
                  <img
                    alt="Amara Okafor"
                    loading="lazy"
                    className="h-10 w-10 shrink-0 rounded-full object-cover"
                    src="/agency-assets/64fc47639d5c3f087c78903c57faf4827168ba7fa8c8cd1e3e86bc6eb4c8f79d.jpg"
                  />
                  <div>
                    <p className="line-clamp-2 text-[14px] italic text-ink/80">
                      “Nuvoryx shipped a model our risk team trusts and our
                      engineers can operate. It paid for itself in the first
                      quarter.”
                    </p>
                    <p className="mt-1 text-[12.5px] font-bold">
                      Amara Okafor{" "}
                      <span className="font-normal text-muted">
                        · Chief Risk Officer, LumenPay
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a
            href="/case-studies/medacore-clinical-copilot"
            className="group block shrink-0 snap-start w-full"
          >
            <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift flex h-full flex-col overflow-hidden">
              <div className="relative aspect-[16/9] overflow-hidden rounded-t-[22px]">
                <img
                  alt="MedaCore Health project"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://images.unsplash.com/photo-1758691462668-046fd85ceac9?auto=format&fit=crop&w=1600&q=75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent"></div>
                <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full px-3 py-1 text-[12.5px] font-semibold text-ink/80 bg-white/90 backdrop-blur">
                    Healthcare
                  </span>
                  <span className="inline-flex items-center rounded-full px-3 py-1 text-[12.5px] font-semibold text-ink/80 bg-white/90 backdrop-blur">
                    AI &amp; Data Innovation
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 font-display text-[18px] font-bold text-white">
                  MedaCore Health
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-[19px] leading-snug">
                  A clinical copilot that gives physicians 9 hours back every
                  week
                </h3>
                <div className="mt-5 grid grid-cols-3 gap-3 border-y border-line py-4">
                  <div>
                    <div className="font-display text-[20px] font-bold text-forest">
                      9 hrs
                    </div>
                    <div className="text-[12px] leading-tight text-muted">
                      saved per clinician weekly
                    </div>
                  </div>
                  <div>
                    <div className="font-display text-[20px] font-bold text-forest">
                      97%
                    </div>
                    <div className="text-[12px] leading-tight text-muted">
                      note accuracy
                    </div>
                  </div>
                  <div>
                    <div className="font-display text-[20px] font-bold text-forest">
                      31
                    </div>
                    <div className="text-[12px] leading-tight text-muted">
                      hospitals live
                    </div>
                  </div>
                </div>
                <div className="mt-5 flex items-start gap-3">
                  <img
                    alt="Dr. Lena Fischer"
                    loading="lazy"
                    className="h-10 w-10 shrink-0 rounded-full object-cover"
                    src="/agency-assets/d324e7bacbf7f3fe92080d103f79351a05e37e74831daecf1f438c456a9acc10.jpg"
                  />
                  <div>
                    <p className="line-clamp-2 text-[14px] italic text-ink/80">
                      “Our clinicians finally spend their time with patients,
                      not keyboards. Adoption was the fastest we have ever
                      seen.”
                    </p>
                    <p className="mt-1 text-[12.5px] font-bold">
                      Dr. Lena Fischer{" "}
                      <span className="font-normal text-muted">
                        · CMIO, MedaCore Health
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a
            href="/case-studies/kestrel-ai-agents"
            className="group block shrink-0 snap-start w-full"
          >
            <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift flex h-full flex-col overflow-hidden">
              <div className="relative aspect-[16/9] overflow-hidden rounded-t-[22px]">
                <img
                  alt="Kestrel Insurance project"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://images.unsplash.com/photo-1677611998429-1baa4371456b?auto=format&fit=crop&w=1600&q=75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent"></div>
                <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full px-3 py-1 text-[12.5px] font-semibold text-ink/80 bg-white/90 backdrop-blur">
                    Fintech &amp; Banking
                  </span>
                  <span className="inline-flex items-center rounded-full px-3 py-1 text-[12.5px] font-semibold text-ink/80 bg-white/90 backdrop-blur">
                    AI &amp; Data Innovation
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 font-display text-[18px] font-bold text-white">
                  Kestrel Insurance
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-[19px] leading-snug">
                  AI agents process 70% of claims end to end
                </h3>
                <div className="mt-5 grid grid-cols-3 gap-3 border-y border-line py-4">
                  <div>
                    <div className="font-display text-[20px] font-bold text-forest">
                      70%
                    </div>
                    <div className="text-[12px] leading-tight text-muted">
                      claims fully automated
                    </div>
                  </div>
                  <div>
                    <div className="font-display text-[20px] font-bold text-forest">
                      4.2 days
                    </div>
                    <div className="text-[12px] leading-tight text-muted">
                      faster settlement
                    </div>
                  </div>
                  <div>
                    <div className="font-display text-[20px] font-bold text-forest">
                      +18
                    </div>
                    <div className="text-[12px] leading-tight text-muted">
                      NPS points
                    </div>
                  </div>
                </div>
                <div className="mt-5 flex items-start gap-3">
                  <img
                    alt="James Whitfield"
                    loading="lazy"
                    className="h-10 w-10 shrink-0 rounded-full object-cover"
                    src="/agency-assets/089f20744645a15395b2f6e33ba4cb08e386584ed90835f47c6af3657d0c9d7a.jpg"
                  />
                  <div>
                    <p className="line-clamp-2 text-[14px] italic text-ink/80">
                      “We expected a chatbot. We got a digital workforce with an
                      audit trail our regulators actually like.”
                    </p>
                    <p className="mt-1 text-[12.5px] font-bold">
                      James Whitfield{" "}
                      <span className="font-normal text-muted">
                        · COO, Kestrel Insurance
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
