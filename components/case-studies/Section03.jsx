export default function Section03() {
  return (
    <section className="bg-paper text-ink py-20 md:py-28 lg:py-32 relative">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <div className="mb-10 grid gap-3 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
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
              placeholder="Search case studies"
              aria-label="Search case studies"
              className="h-12 w-full rounded-full border border-line bg-white pl-11 pr-4 text-[15px] outline-none transition focus:border-forest focus:ring-4 focus:ring-brand/25"
              defaultValue=""
            />
          </div>
          <select
            aria-label="Industry"
            className='h-12 rounded-full border border-line bg-white px-4 pr-9 text-[14.5px] font-bold outline-none focus:border-forest focus:ring-4 focus:ring-brand/25 appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23111%27 stroke-width=%272%27%3E%3Cpath d=%27M2 4l4 4 4-4%27/%3E%3C/svg%3E")] bg-[right_14px_center] bg-no-repeat'
          >
            <option>All industries</option>
            <option>Fintech &amp; Banking</option>
            <option>Healthcare</option>
            <option>Retail &amp; E-commerce</option>
            <option>Logistics &amp; Supply Chain</option>
            <option>Education / EdTech</option>
            <option>Real Estate / PropTech</option>
            <option>Telecom</option>
            <option>SaaS &amp; Startups</option>
            <option>Public Sector</option>
            <option>Manufacturing</option>
          </select>
          <select
            aria-label="Service"
            className='h-12 rounded-full border border-line bg-white px-4 pr-9 text-[14.5px] font-bold outline-none focus:border-forest focus:ring-4 focus:ring-brand/25 appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23111%27 stroke-width=%272%27%3E%3Cpath d=%27M2 4l4 4 4-4%27/%3E%3C/svg%3E")] bg-[right_14px_center] bg-no-repeat'
          >
            <option>All services</option>
            <option>AI &amp; Data Innovation</option>
            <option>Engineering</option>
            <option>Advisory &amp; Strategy</option>
            <option>Cybersecurity</option>
            <option>Optimization &amp; Quality</option>
            <option>Cloud &amp; Infrastructure</option>
            <option>Digital Experience</option>
            <option>Business Process Services</option>
          </select>
          <select
            aria-label="Technology"
            className='h-12 rounded-full border border-line bg-white px-4 pr-9 text-[14.5px] font-bold outline-none focus:border-forest focus:ring-4 focus:ring-brand/25 appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23111%27 stroke-width=%272%27%3E%3Cpath d=%27M2 4l4 4 4-4%27/%3E%3C/svg%3E")] bg-[right_14px_center] bg-no-repeat'
          >
            <option>All tech</option>
            <option>AWS</option>
            <option>AWS SageMaker</option>
            <option>Algolia</option>
            <option>Anthropic Claude</option>
            <option>Azure</option>
            <option>Azure IoT</option>
            <option>Databricks</option>
            <option>Datadog</option>
            <option>FHIR</option>
            <option>GCP</option>
            <option>Go</option>
            <option>Kafka</option>
            <option>Kubernetes</option>
            <option>LangGraph</option>
            <option>Next.js</option>
            <option>OpenAI</option>
            <option>PostgreSQL</option>
            <option>Power BI</option>
            <option>PyTorch</option>
            <option>Python</option>
            <option>React</option>
            <option>React Native</option>
            <option>Sanity</option>
            <option>Shopify Plus</option>
            <option>Snowflake</option>
            <option>Terraform</option>
            <option>TypeScript</option>
            <option>Vanta</option>
            <option>Wiz</option>
          </select>
        </div>
        <div className="mb-6 flex items-center justify-between text-[14px] text-muted">
          <span>
            Showing <b className="text-ink">8</b> of 8 stories
          </span>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <div className="reveal in" style={{ transitionDelay: "0ms" }}>
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
                    src="/agency-assets/e09d2c8848c480504502ae68e9358c5e71c4958671b5ed9faf375a22814175da.jpg"
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
          </div>
          <div className="reveal in" style={{ transitionDelay: "80ms" }}>
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
                    src="/agency-assets/82af4cd5afbf2b0570b22b32617943dda126bf537cb0bb833b9542e38f374d4c.jpg"
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
          </div>
          <div className="reveal in" style={{ transitionDelay: "160ms" }}>
            <a
              href="/case-studies/northwind-cloud-migration"
              className="group block shrink-0 snap-start w-full"
            >
              <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift flex h-full flex-col overflow-hidden">
                <div className="relative aspect-[16/9] overflow-hidden rounded-t-[22px]">
                  <img
                    alt="Northwind Logistics project"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="/agency-assets/ecfe6aa14456f0789202bd68d4397cf72b2230ac0f4a333ad322edd7369a9ebe.jpg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent"></div>
                  <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full px-3 py-1 text-[12.5px] font-semibold text-ink/80 bg-white/90 backdrop-blur">
                      Logistics &amp; Supply Chain
                    </span>
                    <span className="inline-flex items-center rounded-full px-3 py-1 text-[12.5px] font-semibold text-ink/80 bg-white/90 backdrop-blur">
                      Cloud &amp; Infrastructure
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 font-display text-[18px] font-bold text-white">
                    Northwind Logistics
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-[19px] leading-snug">
                    Migrating 340 workloads to AWS with zero unplanned downtime
                  </h3>
                  <div className="mt-5 grid grid-cols-3 gap-3 border-y border-line py-4">
                    <div>
                      <div className="font-display text-[20px] font-bold text-forest">
                        340
                      </div>
                      <div className="text-[12px] leading-tight text-muted">
                        workloads migrated
                      </div>
                    </div>
                    <div>
                      <div className="font-display text-[20px] font-bold text-forest">
                        36%
                      </div>
                      <div className="text-[12px] leading-tight text-muted">
                        lower infra cost
                      </div>
                    </div>
                    <div>
                      <div className="font-display text-[20px] font-bold text-forest">
                        0
                      </div>
                      <div className="text-[12px] leading-tight text-muted">
                        unplanned outages
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 flex items-start gap-3">
                    <img
                      alt="Marcus Reid"
                      loading="lazy"
                      className="h-10 w-10 shrink-0 rounded-full object-cover"
                      src="/agency-assets/fe53b1a2005b255a37da5724cb3fc6929ba59e73e719ee90c48f0eb0c81126db.jpg"
                    />
                    <div>
                      <p className="line-clamp-2 text-[14px] italic text-ink/80">
                        “They treated our cutover weekend like a launch at NASA.
                        Nothing went wrong, and our bill went down.”
                      </p>
                      <p className="mt-1 text-[12.5px] font-bold">
                        Marcus Reid{" "}
                        <span className="font-normal text-muted">
                          · VP Infrastructure, Northwind
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="reveal in" style={{ transitionDelay: "0ms" }}>
            <a
              href="/case-studies/fernhill-commerce-replatform"
              className="group block shrink-0 snap-start w-full"
            >
              <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift flex h-full flex-col overflow-hidden">
                <div className="relative aspect-[16/9] overflow-hidden rounded-t-[22px]">
                  <img
                    alt="Fernhill project"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="/agency-assets/0c3bcbccb17d595741213db218fbc2b996b1e82be400f873a50aa93010e1578c.jpg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent"></div>
                  <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full px-3 py-1 text-[12.5px] font-semibold text-ink/80 bg-white/90 backdrop-blur">
                      Retail &amp; E-commerce
                    </span>
                    <span className="inline-flex items-center rounded-full px-3 py-1 text-[12.5px] font-semibold text-ink/80 bg-white/90 backdrop-blur">
                      Digital Experience
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 font-display text-[18px] font-bold text-white">
                    Fernhill
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-[19px] leading-snug">
                    Headless replatform lifts online revenue 52% in six months
                  </h3>
                  <div className="mt-5 grid grid-cols-3 gap-3 border-y border-line py-4">
                    <div>
                      <div className="font-display text-[20px] font-bold text-forest">
                        +52%
                      </div>
                      <div className="text-[12px] leading-tight text-muted">
                        online revenue
                      </div>
                    </div>
                    <div>
                      <div className="font-display text-[20px] font-bold text-forest">
                        1.1s
                      </div>
                      <div className="text-[12px] leading-tight text-muted">
                        median page load
                      </div>
                    </div>
                    <div>
                      <div className="font-display text-[20px] font-bold text-forest">
                        +29%
                      </div>
                      <div className="text-[12px] leading-tight text-muted">
                        mobile conversion
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 flex items-start gap-3">
                    <img
                      alt="Sofia Martins"
                      loading="lazy"
                      className="h-10 w-10 shrink-0 rounded-full object-cover"
                      src="/agency-assets/4611a815121bfed825d1b6181da1464573ce9a4ab7dafdd87d3f0d2ebc7ae9af.jpg"
                    />
                    <div>
                      <p className="line-clamp-2 text-[14px] italic text-ink/80">
                        “The new storefront is faster, prettier and our
                        merchandisers can launch campaigns without a ticket.”
                      </p>
                      <p className="mt-1 text-[12.5px] font-bold">
                        Sofia Martins{" "}
                        <span className="font-normal text-muted">
                          · Head of Digital, Fernhill
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="reveal in" style={{ transitionDelay: "80ms" }}>
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
                    src="/agency-assets/9c8de0c77c9da88f26e482a351c86908ec748448f3430f4505e83f50ed63891d.jpg"
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
                        “We expected a chatbot. We got a digital workforce with
                        an audit trail our regulators actually like.”
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
          <div className="reveal in" style={{ transitionDelay: "160ms" }}>
            <a
              href="/case-studies/orbitly-saas-scale"
              className="group block shrink-0 snap-start w-full"
            >
              <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift flex h-full flex-col overflow-hidden">
                <div className="relative aspect-[16/9] overflow-hidden rounded-t-[22px]">
                  <img
                    alt="Orbitly project"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="/agency-assets/d36c96d79e27ede562756e165d11328cc0b9e496866d0afbe0dcd68b4093cf87.jpg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent"></div>
                  <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full px-3 py-1 text-[12.5px] font-semibold text-ink/80 bg-white/90 backdrop-blur">
                      SaaS &amp; Startups
                    </span>
                    <span className="inline-flex items-center rounded-full px-3 py-1 text-[12.5px] font-semibold text-ink/80 bg-white/90 backdrop-blur">
                      Engineering
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 font-display text-[18px] font-bold text-white">
                    Orbitly
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-[19px] leading-snug">
                    From MVP to 2M users with a dedicated product squad
                  </h3>
                  <div className="mt-5 grid grid-cols-3 gap-3 border-y border-line py-4">
                    <div>
                      <div className="font-display text-[20px] font-bold text-forest">
                        2M
                      </div>
                      <div className="text-[12px] leading-tight text-muted">
                        monthly active users
                      </div>
                    </div>
                    <div>
                      <div className="font-display text-[20px] font-bold text-forest">
                        14 days
                      </div>
                      <div className="text-[12px] leading-tight text-muted">
                        to onboard squad
                      </div>
                    </div>
                    <div>
                      <div className="font-display text-[20px] font-bold text-forest">
                        Series B
                      </div>
                      <div className="text-[12px] leading-tight text-muted">
                        raised post-launch
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 flex items-start gap-3">
                    <img
                      alt="Priya Natarajan"
                      loading="lazy"
                      className="h-10 w-10 shrink-0 rounded-full object-cover"
                      src="/agency-assets/beec6426c045f4398902c3cbb2bf59861c981673bf055b1e0a9a656fbaf29136.jpg"
                    />
                    <div>
                      <p className="line-clamp-2 text-[14px] italic text-ink/80">
                        “Nuvoryx felt like our own team from week one. They
                        pushed back when it mattered and shipped relentlessly.”
                      </p>
                      <p className="mt-1 text-[12.5px] font-bold">
                        Priya Natarajan{" "}
                        <span className="font-normal text-muted">
                          · CEO &amp; Co-founder, Orbitly
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="reveal in" style={{ transitionDelay: "0ms" }}>
            <a
              href="/case-studies/vectra-predictive-maintenance"
              className="group block shrink-0 snap-start w-full"
            >
              <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift flex h-full flex-col overflow-hidden">
                <div className="relative aspect-[16/9] overflow-hidden rounded-t-[22px]">
                  <img
                    alt="Vectra Industries project"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="/agency-assets/9c89204d1ae907e433c21cddb03392d9fd52d378359195073dc9bfc4e06e65a1.jpg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent"></div>
                  <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full px-3 py-1 text-[12.5px] font-semibold text-ink/80 bg-white/90 backdrop-blur">
                      Manufacturing
                    </span>
                    <span className="inline-flex items-center rounded-full px-3 py-1 text-[12.5px] font-semibold text-ink/80 bg-white/90 backdrop-blur">
                      AI &amp; Data Innovation
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 font-display text-[18px] font-bold text-white">
                    Vectra Industries
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-[19px] leading-snug">
                    Predictive maintenance cuts unplanned downtime by 61%
                  </h3>
                  <div className="mt-5 grid grid-cols-3 gap-3 border-y border-line py-4">
                    <div>
                      <div className="font-display text-[20px] font-bold text-forest">
                        61%
                      </div>
                      <div className="text-[12px] leading-tight text-muted">
                        less unplanned downtime
                      </div>
                    </div>
                    <div>
                      <div className="font-display text-[20px] font-bold text-forest">
                        2,400
                      </div>
                      <div className="text-[12px] leading-tight text-muted">
                        sensors connected
                      </div>
                    </div>
                    <div>
                      <div className="font-display text-[20px] font-bold text-forest">
                        8 mo
                      </div>
                      <div className="text-[12px] leading-tight text-muted">
                        payback period
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 flex items-start gap-3">
                    <img
                      alt="Henrik Larsen"
                      loading="lazy"
                      className="h-10 w-10 shrink-0 rounded-full object-cover"
                      src="/agency-assets/c78fe39cfa6d3b8fe9ea80fec6107fd74c9d5f60a871f7a07abcfddfa241218c.jpg"
                    />
                    <div>
                      <p className="line-clamp-2 text-[14px] italic text-ink/80">
                        “For the first time we know which machine will fail
                        before it does. That changes how we run every shift.”
                      </p>
                      <p className="mt-1 text-[12.5px] font-bold">
                        Henrik Larsen{" "}
                        <span className="font-normal text-muted">
                          · Director of Operations, Vectra
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="reveal in" style={{ transitionDelay: "80ms" }}>
            <a
              href="/case-studies/halcyon-security-soc2"
              className="group block shrink-0 snap-start w-full"
            >
              <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift flex h-full flex-col overflow-hidden">
                <div className="relative aspect-[16/9] overflow-hidden rounded-t-[22px]">
                  <img
                    alt="Halcyon Cloud project"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="/agency-assets/0161de819a6346ec080dc17f6361f37e1bbeae211aeca490ae42d5bacb46da0e.jpg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent"></div>
                  <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full px-3 py-1 text-[12.5px] font-semibold text-ink/80 bg-white/90 backdrop-blur">
                      SaaS &amp; Startups
                    </span>
                    <span className="inline-flex items-center rounded-full px-3 py-1 text-[12.5px] font-semibold text-ink/80 bg-white/90 backdrop-blur">
                      Cybersecurity
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 font-display text-[18px] font-bold text-white">
                    Halcyon Cloud
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-[19px] leading-snug">
                    SOC 2 Type II in 14 weeks with a zero-finding audit
                  </h3>
                  <div className="mt-5 grid grid-cols-3 gap-3 border-y border-line py-4">
                    <div>
                      <div className="font-display text-[20px] font-bold text-forest">
                        14 wks
                      </div>
                      <div className="text-[12px] leading-tight text-muted">
                        to SOC 2 Type II
                      </div>
                    </div>
                    <div>
                      <div className="font-display text-[20px] font-bold text-forest">
                        0
                      </div>
                      <div className="text-[12px] leading-tight text-muted">
                        audit exceptions
                      </div>
                    </div>
                    <div>
                      <div className="font-display text-[20px] font-bold text-forest">
                        3
                      </div>
                      <div className="text-[12px] leading-tight text-muted">
                        enterprise deals unlocked
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 flex items-start gap-3">
                    <img
                      alt="Rachel Kim"
                      loading="lazy"
                      className="h-10 w-10 shrink-0 rounded-full object-cover"
                      src="/agency-assets/1bdedd80b1b9718c857f5c59926a6754b22af989a250fd1266137ada32e0ef6b.jpg"
                    />
                    <div>
                      <p className="line-clamp-2 text-[14px] italic text-ink/80">
                        “Security went from a sales blocker to a selling point.
                        Their team made the audit almost uneventful.”
                      </p>
                      <p className="mt-1 text-[12.5px] font-bold">
                        Rachel Kim{" "}
                        <span className="font-normal text-muted">
                          · CTO, Halcyon Cloud
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
