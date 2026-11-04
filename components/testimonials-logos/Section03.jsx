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
                Long-form stories
              </span>
            </div>
            <div className="reveal in" style={{ transitionDelay: "80ms" }}>
              <h2 className="mt-4 text-[34px] sm:text-[44px] lg:text-[52px]">
                Quotes from the work.
              </h2>
            </div>
          </div>
        </div>
        <div className="columns-1 gap-5 md:columns-2 lg:columns-3">
          <figure className="mb-5 break-inside-avoid rounded-[22px] border p-7 border-line bg-paper">
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
              className="lucide lucide-quote h-6 w-6 text-brand"
              aria-hidden="true"
            >
              <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
              <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
            </svg>
            <blockquote className="mt-4 text-[16px] font-semibold leading-relaxed">
              “Nuvoryx shipped a model our risk team trusts and our engineers
              can operate. It paid for itself in the first quarter.”
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <img
                alt="Amara Okafor"
                loading="lazy"
                className="h-11 w-11 rounded-full object-cover"
                src="/agency-assets/64fc47639d5c3f087c78903c57faf4827168ba7fa8c8cd1e3e86bc6eb4c8f79d.jpg"
              />
              <div>
                <div className="text-[14.5px] font-bold">Amara Okafor</div>
                <div className="text-[13px] text-muted">
                  Chief Risk Officer, LumenPay
                </div>
              </div>
            </figcaption>
          </figure>
          <figure className="mb-5 break-inside-avoid rounded-[22px] border p-7 border-forest bg-forest text-white">
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
              className="lucide lucide-quote h-6 w-6 text-brand"
              aria-hidden="true"
            >
              <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
              <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
            </svg>
            <blockquote className="mt-4 text-[16px] font-semibold leading-relaxed">
              “Our clinicians finally spend their time with patients, not
              keyboards. Adoption was the fastest we have ever seen.”
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <img
                alt="Dr. Lena Fischer"
                loading="lazy"
                className="h-11 w-11 rounded-full object-cover"
                src="/agency-assets/d324e7bacbf7f3fe92080d103f79351a05e37e74831daecf1f438c456a9acc10.jpg"
              />
              <div>
                <div className="text-[14.5px] font-bold">Dr. Lena Fischer</div>
                <div className="text-[13px] text-white/60">
                  CMIO, MedaCore Health
                </div>
              </div>
            </figcaption>
          </figure>
          <figure className="mb-5 break-inside-avoid rounded-[22px] border p-7 border-line bg-paper">
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
              className="lucide lucide-quote h-6 w-6 text-brand"
              aria-hidden="true"
            >
              <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
              <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
            </svg>
            <blockquote className="mt-4 text-[16px] font-semibold leading-relaxed">
              “They treated our cutover weekend like a launch at NASA. Nothing
              went wrong, and our bill went down.”
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <img
                alt="Marcus Reid"
                loading="lazy"
                className="h-11 w-11 rounded-full object-cover"
                src="/agency-assets/fe53b1a2005b255a37da5724cb3fc6929ba59e73e719ee90c48f0eb0c81126db.jpg"
              />
              <div>
                <div className="text-[14.5px] font-bold">Marcus Reid</div>
                <div className="text-[13px] text-muted">
                  VP Infrastructure, Northwind
                </div>
              </div>
            </figcaption>
          </figure>
          <figure className="mb-5 break-inside-avoid rounded-[22px] border p-7 border-line bg-paper">
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
              className="lucide lucide-quote h-6 w-6 text-brand"
              aria-hidden="true"
            >
              <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
              <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
            </svg>
            <blockquote className="mt-4 text-[16px] font-semibold leading-relaxed">
              “The new storefront is faster, prettier and our merchandisers can
              launch campaigns without a ticket.”
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <img
                alt="Sofia Martins"
                loading="lazy"
                className="h-11 w-11 rounded-full object-cover"
                src="/agency-assets/4611a815121bfed825d1b6181da1464573ce9a4ab7dafdd87d3f0d2ebc7ae9af.jpg"
              />
              <div>
                <div className="text-[14.5px] font-bold">Sofia Martins</div>
                <div className="text-[13px] text-muted">
                  Head of Digital, Fernhill
                </div>
              </div>
            </figcaption>
          </figure>
          <figure className="mb-5 break-inside-avoid rounded-[22px] border p-7 border-line bg-paper">
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
              className="lucide lucide-quote h-6 w-6 text-brand"
              aria-hidden="true"
            >
              <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
              <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
            </svg>
            <blockquote className="mt-4 text-[16px] font-semibold leading-relaxed">
              “We expected a chatbot. We got a digital workforce with an audit
              trail our regulators actually like.”
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <img
                alt="James Whitfield"
                loading="lazy"
                className="h-11 w-11 rounded-full object-cover"
                src="/agency-assets/089f20744645a15395b2f6e33ba4cb08e386584ed90835f47c6af3657d0c9d7a.jpg"
              />
              <div>
                <div className="text-[14.5px] font-bold">James Whitfield</div>
                <div className="text-[13px] text-muted">
                  COO, Kestrel Insurance
                </div>
              </div>
            </figcaption>
          </figure>
          <figure className="mb-5 break-inside-avoid rounded-[22px] border p-7 border-forest bg-forest text-white">
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
              className="lucide lucide-quote h-6 w-6 text-brand"
              aria-hidden="true"
            >
              <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
              <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
            </svg>
            <blockquote className="mt-4 text-[16px] font-semibold leading-relaxed">
              “Nuvoryx felt like our own team from week one. They pushed back
              when it mattered and shipped relentlessly.”
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <img
                alt="Priya Natarajan"
                loading="lazy"
                className="h-11 w-11 rounded-full object-cover"
                src="/agency-assets/beec6426c045f4398902c3cbb2bf59861c981673bf055b1e0a9a656fbaf29136.jpg"
              />
              <div>
                <div className="text-[14.5px] font-bold">Priya Natarajan</div>
                <div className="text-[13px] text-white/60">
                  CEO &amp; Co-founder, Orbitly
                </div>
              </div>
            </figcaption>
          </figure>
          <figure className="mb-5 break-inside-avoid rounded-[22px] border p-7 border-line bg-paper">
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
              className="lucide lucide-quote h-6 w-6 text-brand"
              aria-hidden="true"
            >
              <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
              <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
            </svg>
            <blockquote className="mt-4 text-[16px] font-semibold leading-relaxed">
              “For the first time we know which machine will fail before it
              does. That changes how we run every shift.”
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <img
                alt="Henrik Larsen"
                loading="lazy"
                className="h-11 w-11 rounded-full object-cover"
                src="/agency-assets/c78fe39cfa6d3b8fe9ea80fec6107fd74c9d5f60a871f7a07abcfddfa241218c.jpg"
              />
              <div>
                <div className="text-[14.5px] font-bold">Henrik Larsen</div>
                <div className="text-[13px] text-muted">
                  Director of Operations, Vectra
                </div>
              </div>
            </figcaption>
          </figure>
          <figure className="mb-5 break-inside-avoid rounded-[22px] border p-7 border-line bg-paper">
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
              className="lucide lucide-quote h-6 w-6 text-brand"
              aria-hidden="true"
            >
              <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
              <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
            </svg>
            <blockquote className="mt-4 text-[16px] font-semibold leading-relaxed">
              “Security went from a sales blocker to a selling point. Their team
              made the audit almost uneventful.”
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <img
                alt="Rachel Kim"
                loading="lazy"
                className="h-11 w-11 rounded-full object-cover"
                src="/agency-assets/1bdedd80b1b9718c857f5c59926a6754b22af989a250fd1266137ada32e0ef6b.jpg"
              />
              <div>
                <div className="text-[14.5px] font-bold">Rachel Kim</div>
                <div className="text-[13px] text-muted">CTO, Halcyon Cloud</div>
              </div>
            </figcaption>
          </figure>
          <figure className="mb-5 break-inside-avoid rounded-[22px] border p-7 border-line bg-paper">
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
              className="lucide lucide-quote h-6 w-6 text-brand"
              aria-hidden="true"
            >
              <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
              <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
            </svg>
            <blockquote className="mt-4 text-[16px] font-semibold leading-relaxed">
              “They pushed back when it mattered and shipped relentlessly. It
              never felt like an agency.”
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <img
                alt="Priya Natarajan"
                loading="lazy"
                className="h-11 w-11 rounded-full object-cover"
                src="/agency-assets/beec6426c045f4398902c3cbb2bf59861c981673bf055b1e0a9a656fbaf29136.jpg"
              />
              <div>
                <div className="text-[14.5px] font-bold">Priya Natarajan</div>
                <div className="text-[13px] text-muted">CEO, Orbitly</div>
              </div>
            </figcaption>
          </figure>
          <figure className="mb-5 break-inside-avoid rounded-[22px] border p-7 border-forest bg-forest text-white">
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
              className="lucide lucide-quote h-6 w-6 text-brand"
              aria-hidden="true"
            >
              <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
              <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
            </svg>
            <blockquote className="mt-4 text-[16px] font-semibold leading-relaxed">
              “Our migration weekend was uneventful, which is the highest praise
              I can give.”
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <img
                alt="Marcus Reid"
                loading="lazy"
                className="h-11 w-11 rounded-full object-cover"
                src="/agency-assets/fe53b1a2005b255a37da5724cb3fc6929ba59e73e719ee90c48f0eb0c81126db.jpg"
              />
              <div>
                <div className="text-[14.5px] font-bold">Marcus Reid</div>
                <div className="text-[13px] text-white/60">
                  VP Infrastructure, Northwind
                </div>
              </div>
            </figcaption>
          </figure>
          <figure className="mb-5 break-inside-avoid rounded-[22px] border p-7 border-line bg-paper">
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
              className="lucide lucide-quote h-6 w-6 text-brand"
              aria-hidden="true"
            >
              <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
              <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
            </svg>
            <blockquote className="mt-4 text-[16px] font-semibold leading-relaxed">
              “A rare partner that cares about design and engineering equally.
              Revenue followed.”
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <img
                alt="Sofia Martins"
                loading="lazy"
                className="h-11 w-11 rounded-full object-cover"
                src="/agency-assets/4611a815121bfed825d1b6181da1464573ce9a4ab7dafdd87d3f0d2ebc7ae9af.jpg"
              />
              <div>
                <div className="text-[14.5px] font-bold">Sofia Martins</div>
                <div className="text-[13px] text-muted">
                  Head of Digital, Fernhill
                </div>
              </div>
            </figcaption>
          </figure>
          <figure className="mb-5 break-inside-avoid rounded-[22px] border p-7 border-line bg-paper">
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
              className="lucide lucide-quote h-6 w-6 text-brand"
              aria-hidden="true"
            >
              <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
              <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
            </svg>
            <blockquote className="mt-4 text-[16px] font-semibold leading-relaxed">
              “Their AI agents now handle most of our claims with an audit trail
              regulators like.”
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <img
                alt="James Whitfield"
                loading="lazy"
                className="h-11 w-11 rounded-full object-cover"
                src="/agency-assets/089f20744645a15395b2f6e33ba4cb08e386584ed90835f47c6af3657d0c9d7a.jpg"
              />
              <div>
                <div className="text-[14.5px] font-bold">James Whitfield</div>
                <div className="text-[13px] text-muted">
                  COO, Kestrel Insurance
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
