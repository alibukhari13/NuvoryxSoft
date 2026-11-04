export default function Section03() {
  return (
    <section className="bg-paper text-ink py-20 md:py-28 lg:py-32 relative">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="reveal in" style={{ transitionDelay: "0ms" }}>
              <span className="inline-flex items-center gap-2 font-mono text-[11.5px] font-medium uppercase tracking-[0.18em] text-muted">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-brand"
                  aria-hidden="true"
                ></span>
                Where we work
              </span>
            </div>
            <div className="reveal in" style={{ transitionDelay: "80ms" }}>
              <h2 className="mt-4 text-[34px] sm:text-[44px] lg:text-[52px]">
                Ten industries, one standard of excellence.
              </h2>
            </div>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div
            className="reveal in sm:col-span-2"
            style={{ transitionDelay: "0ms" }}
          >
            <a
              href="/industries/fintech-banking"
              className="group relative block aspect-[4/3.3] overflow-hidden rounded-[24px] sm:aspect-auto sm:h-[380px]"
            >
              <img
                alt="Fintech &amp; Banking"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="/agency-assets/e09d2c8848c480504502ae68e9358c5e71c4958671b5ed9faf375a22814175da.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-white">
                <div>
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
                    className="lucide lucide-landmark h-6 w-6 text-brand"
                    aria-hidden="true"
                  >
                    <path d="M10 18v-7"></path>
                    <path d="M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z"></path>
                    <path d="M14 18v-7"></path>
                    <path d="M18 18v-7"></path>
                    <path d="M3 22h18"></path>
                    <path d="M6 18v-7"></path>
                  </svg>
                  <h3 className="mt-3 text-[24px]">Fintech &amp; Banking</h3>
                  <p className="mt-2 line-clamp-2 max-w-md text-[14.5px] text-white/70">
                    Real-time payments, fraud models and digital banking built
                    for regulators and customers alike.
                  </p>
                </div>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full transition-all duration-300 group-hover:rotate-45 group-hover:bg-brand group-hover:text-ink bg-white/10 text-white">
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
          </div>
          <div className="reveal in" style={{ transitionDelay: "80ms" }}>
            <a
              href="/industries/healthcare"
              className="group relative block aspect-[4/3.3] overflow-hidden rounded-[24px] sm:aspect-auto sm:h-[380px]"
            >
              <img
                alt="Healthcare"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="/agency-assets/33e7444a9204ffc5113cf67d498ac7089152c48d90abd3c035fabc015c4e9ef6.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-white">
                <div>
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
                    className="lucide lucide-heart-pulse h-6 w-6 text-brand"
                    aria-hidden="true"
                  >
                    <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                    <path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path>
                  </svg>
                  <h3 className="mt-3 text-[24px]">Healthcare</h3>
                  <p className="mt-2 line-clamp-2 max-w-md text-[14.5px] text-white/70">
                    Interoperable clinical platforms and AI that give clinicians
                    time back.
                  </p>
                </div>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full transition-all duration-300 group-hover:rotate-45 group-hover:bg-brand group-hover:text-ink bg-white/10 text-white">
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
          </div>
          <div className="reveal in" style={{ transitionDelay: "160ms" }}>
            <a
              href="/industries/retail-ecommerce"
              className="group relative block aspect-[4/3.3] overflow-hidden rounded-[24px] sm:aspect-auto sm:h-[380px]"
            >
              <img
                alt="Retail &amp; E-commerce"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="/agency-assets/0c3bcbccb17d595741213db218fbc2b996b1e82be400f873a50aa93010e1578c.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-white">
                <div>
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
                    className="lucide lucide-shopping-bag h-6 w-6 text-brand"
                    aria-hidden="true"
                  >
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                    <path d="M3.103 6.034h17.794"></path>
                    <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                  </svg>
                  <h3 className="mt-3 text-[24px]">Retail &amp; E-commerce</h3>
                  <p className="mt-2 line-clamp-2 max-w-md text-[14.5px] text-white/70">
                    Composable commerce, personalisation and supply visibility
                    that protect margin.
                  </p>
                </div>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full transition-all duration-300 group-hover:rotate-45 group-hover:bg-brand group-hover:text-ink bg-white/10 text-white">
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
          </div>
          <div className="reveal in" style={{ transitionDelay: "0ms" }}>
            <a
              href="/industries/logistics-supply-chain"
              className="group relative block aspect-[4/3.3] overflow-hidden rounded-[24px] sm:aspect-auto sm:h-[380px]"
            >
              <img
                alt="Logistics &amp; Supply Chain"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="/agency-assets/d5a0c5a5b16a4f24b001e4badf1e866ec60c246c0347c1ab36b1f79b8a3913e6.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-white">
                <div>
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
                    className="lucide lucide-truck h-6 w-6 text-brand"
                    aria-hidden="true"
                  >
                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                    <path d="M15 18H9"></path>
                    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                    <circle cx="17" cy="18" r="2"></circle>
                    <circle cx="7" cy="18" r="2"></circle>
                  </svg>
                  <h3 className="mt-3 text-[24px]">
                    Logistics &amp; Supply Chain
                  </h3>
                  <p className="mt-2 line-clamp-2 max-w-md text-[14.5px] text-white/70">
                    Route optimisation, telematics and control towers for
                    end-to-end visibility.
                  </p>
                </div>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full transition-all duration-300 group-hover:rotate-45 group-hover:bg-brand group-hover:text-ink bg-white/10 text-white">
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
          </div>
          <div className="reveal in" style={{ transitionDelay: "80ms" }}>
            <a
              href="/industries/education-edtech"
              className="group relative block aspect-[4/3.3] overflow-hidden rounded-[24px] sm:aspect-auto sm:h-[380px]"
            >
              <img
                alt="Education / EdTech"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="/agency-assets/0d3ea65225b2a54a60c80cac41d769298e2ddebd1d3daff4ab7d423a3d4a3cea.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-white">
                <div>
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
                    className="lucide lucide-graduation-cap h-6 w-6 text-brand"
                    aria-hidden="true"
                  >
                    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                    <path d="M22 10v6"></path>
                    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                  </svg>
                  <h3 className="mt-3 text-[24px]">Education / EdTech</h3>
                  <p className="mt-2 line-clamp-2 max-w-md text-[14.5px] text-white/70">
                    Learning platforms and AI tutors that scale to millions of
                    learners.
                  </p>
                </div>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full transition-all duration-300 group-hover:rotate-45 group-hover:bg-brand group-hover:text-ink bg-white/10 text-white">
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
          </div>
          <div className="reveal in" style={{ transitionDelay: "160ms" }}>
            <a
              href="/industries/real-estate-proptech"
              className="group relative block aspect-[4/3.3] overflow-hidden rounded-[24px] sm:aspect-auto sm:h-[380px]"
            >
              <img
                alt="Real Estate / PropTech"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="/agency-assets/aae35c85d952a6977292a26e5ea3b8c419b067f83644fbb8cfc88d3bd10eb5b3.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-white">
                <div>
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
                    className="lucide lucide-building-complex lucide-building-2 h-6 w-6 text-brand"
                    aria-hidden="true"
                  >
                    <path d="M10 12h4"></path>
                    <path d="M10 8h4"></path>
                    <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                    <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
                    <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
                  </svg>
                  <h3 className="mt-3 text-[24px]">Real Estate / PropTech</h3>
                  <p className="mt-2 line-clamp-2 max-w-md text-[14.5px] text-white/70">
                    Portfolio intelligence, tenant apps and smart-building
                    integrations.
                  </p>
                </div>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full transition-all duration-300 group-hover:rotate-45 group-hover:bg-brand group-hover:text-ink bg-white/10 text-white">
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
          </div>
          <div className="reveal in" style={{ transitionDelay: "0ms" }}>
            <a
              href="/industries/telecom"
              className="group relative block aspect-[4/3.3] overflow-hidden rounded-[24px] sm:aspect-auto sm:h-[380px]"
            >
              <img
                alt="Telecom"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="/agency-assets/389505116293c5936946d50d645483f1a4dda156c056b8ad1ae9a221b6ca7f90.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-white">
                <div>
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
                    className="lucide lucide-radio-tower h-6 w-6 text-brand"
                    aria-hidden="true"
                  >
                    <path d="M4.9 16.1C1 12.2 1 5.8 4.9 1.9"></path>
                    <path d="M7.8 4.7a6.14 6.14 0 0 0-.8 7.5"></path>
                    <circle cx="12" cy="9" r="2"></circle>
                    <path d="M16.2 4.8c2 2 2.26 5.11.8 7.47"></path>
                    <path d="M19.1 1.9a9.96 9.96 0 0 1 0 14.1"></path>
                    <path d="M9.5 18h5"></path>
                    <path d="m8 22 4-11 4 11"></path>
                  </svg>
                  <h3 className="mt-3 text-[24px]">Telecom</h3>
                  <p className="mt-2 line-clamp-2 max-w-md text-[14.5px] text-white/70">
                    OSS/BSS modernisation, network analytics and self-serve
                    digital channels.
                  </p>
                </div>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full transition-all duration-300 group-hover:rotate-45 group-hover:bg-brand group-hover:text-ink bg-white/10 text-white">
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
          </div>
          <div className="reveal in" style={{ transitionDelay: "80ms" }}>
            <a
              href="/industries/saas-startups"
              className="group relative block aspect-[4/3.3] overflow-hidden rounded-[24px] sm:aspect-auto sm:h-[380px]"
            >
              <img
                alt="SaaS &amp; Startups"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="/agency-assets/1c779ce8de1ee75565dee7aa908e931b94c0d1f3f89ded1ceb1a5f78a0b9f745.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-white">
                <div>
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
                    className="lucide lucide-rocket h-6 w-6 text-brand"
                    aria-hidden="true"
                  >
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"></path>
                    <path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"></path>
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"></path>
                  </svg>
                  <h3 className="mt-3 text-[24px]">SaaS &amp; Startups</h3>
                  <p className="mt-2 line-clamp-2 max-w-md text-[14.5px] text-white/70">
                    From MVP to Series C: product engineering that keeps pace
                    with growth.
                  </p>
                </div>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full transition-all duration-300 group-hover:rotate-45 group-hover:bg-brand group-hover:text-ink bg-white/10 text-white">
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
          </div>
          <div className="reveal in" style={{ transitionDelay: "160ms" }}>
            <a
              href="/industries/public-sector"
              className="group relative block aspect-[4/3.3] overflow-hidden rounded-[24px] sm:aspect-auto sm:h-[380px]"
            >
              <img
                alt="Public Sector"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="/agency-assets/3a338a62ae5fdcaf263bfaa81cd8dab42ff0952350f215d6014cfff8767191f1.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-white">
                <div>
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
                    className="lucide lucide-scale h-6 w-6 text-brand"
                    aria-hidden="true"
                  >
                    <path d="M12 3v18"></path>
                    <path d="m19 8 3 8a5 5 0 0 1-6 0zV7"></path>
                    <path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1"></path>
                    <path d="m5 8 3 8a5 5 0 0 1-6 0zV7"></path>
                    <path d="M7 21h10"></path>
                  </svg>
                  <h3 className="mt-3 text-[24px]">Public Sector</h3>
                  <p className="mt-2 line-clamp-2 max-w-md text-[14.5px] text-white/70">
                    Accessible, secure citizen services delivered on time and on
                    budget.
                  </p>
                </div>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full transition-all duration-300 group-hover:rotate-45 group-hover:bg-brand group-hover:text-ink bg-white/10 text-white">
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
          </div>
          <div className="reveal in" style={{ transitionDelay: "0ms" }}>
            <a
              href="/industries/manufacturing"
              className="group relative block aspect-[4/3.3] overflow-hidden rounded-[24px] sm:aspect-auto sm:h-[380px]"
            >
              <img
                alt="Manufacturing"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="/agency-assets/9c89204d1ae907e433c21cddb03392d9fd52d378359195073dc9bfc4e06e65a1.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-white">
                <div>
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
                    className="lucide lucide-factory h-6 w-6 text-brand"
                    aria-hidden="true"
                  >
                    <path d="M12 16h.01"></path>
                    <path d="M16 16h.01"></path>
                    <path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"></path>
                    <path d="M8 16h.01"></path>
                  </svg>
                  <h3 className="mt-3 text-[24px]">Manufacturing</h3>
                  <p className="mt-2 line-clamp-2 max-w-md text-[14.5px] text-white/70">
                    Industrial IoT, predictive maintenance and vision-based
                    quality control.
                  </p>
                </div>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full transition-all duration-300 group-hover:rotate-45 group-hover:bg-brand group-hover:text-ink bg-white/10 text-white">
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
          </div>
          <div className="reveal in" style={{ transitionDelay: "0ms" }}>
            <div className="flex h-full min-h-[300px] flex-col justify-between rounded-[24px] bg-forest p-8 text-white">
              <div>
                <h3 className="text-[24px]">Don’t see your industry?</h3>
                <p className="mt-3 text-white/70">
                  Our engineering and AI practices transfer across domains.
                  Let’s talk about your context.
                </p>
              </div>
              <a
                href="/contact"
                className="group/btn relative isolate items-center overflow-hidden rounded-full font-display font-semibold tracking-[-0.01em] whitespace-nowrap select-none transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-40 aria-disabled:pointer-events-none aria-disabled:opacity-40 inline-flex bg-brand text-ink shadow-[0_12px_32px_-14px_rgba(5,207,69,0.75)] hover:shadow-[0_18px_44px_-12px_rgba(5,207,69,0.95)] h-[52px] text-[14.5px] pl-6 pr-[5px] gap-4"
              >
                <span
                  aria-hidden="true"
                  className="absolute -z-10 aspect-square rounded-full transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] top-[5px] bottom-[5px] right-[5px] bg-forest scale-100 group-hover/btn:scale-[26]"
                ></span>
                <span className="relative inline-flex items-center gap-2 transition-colors duration-300 group-hover/btn:text-white mr-auto">
                  Talk to us
                </span>
                <span className="relative grid shrink-0 place-items-center overflow-hidden rounded-full h-[42px] w-[42px] bg-forest text-white">
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
                    className="lucide lucide-arrow-right absolute transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-x-[220%] h-4 w-4"
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
                    className="lucide lucide-arrow-right absolute -translate-x-[220%] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-x-0 h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
