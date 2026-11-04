export default function Section02() {
  return (
    <section className="bg-paper text-ink py-20 md:py-28 lg:py-32 relative">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <span className="inline-flex items-center gap-2 font-mono text-[11.5px] font-medium uppercase tracking-[0.18em] text-muted">
              <span
                className="h-1.5 w-1.5 rounded-full bg-brand"
                aria-hidden="true"
              ></span>
              What you’ll learn
            </span>
            <h2 className="mt-4 text-[32px] sm:text-[40px]">Agenda</h2>
            <ol className="mt-8 flex flex-col gap-3">
              <li className="flex gap-4 rounded-2xl border border-line bg-white p-5">
                <span className="font-mono text-[13px] text-forest">00:00</span>
                <span className="font-semibold">
                  Where legacy estates block AI adoption, and how to find out
                  fast
                </span>
              </li>
              <li className="flex gap-4 rounded-2xl border border-line bg-white p-5">
                <span className="font-mono text-[13px] text-forest">12:00</span>
                <span className="font-semibold">
                  Strangler-fig patterns for incremental modernization
                </span>
              </li>
              <li className="flex gap-4 rounded-2xl border border-line bg-white p-5">
                <span className="font-mono text-[13px] text-forest">24:00</span>
                <span className="font-semibold">
                  Making legacy data AI-ready without a data lake rewrite
                </span>
              </li>
              <li className="flex gap-4 rounded-2xl border border-line bg-white p-5">
                <span className="font-mono text-[13px] text-forest">36:00</span>
                <span className="font-semibold">
                  Funding models and partner programmes that cut cost
                </span>
              </li>
              <li className="flex gap-4 rounded-2xl border border-line bg-white p-5">
                <span className="font-mono text-[13px] text-forest">48:00</span>
                <span className="font-semibold">
                  Live Q&amp;A with the speakers
                </span>
              </li>
            </ol>
          </div>
          <div>
            <span className="inline-flex items-center gap-2 font-mono text-[11.5px] font-medium uppercase tracking-[0.18em] text-muted">
              <span
                className="h-1.5 w-1.5 rounded-full bg-brand"
                aria-hidden="true"
              ></span>
              Speakers
            </span>
            <div className="mt-6 flex flex-col gap-4">
              <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift flex items-center gap-4 p-4">
                <img
                  alt="Daniel Ortega"
                  className="h-16 w-16 rounded-2xl object-cover"
                  src="/agency-assets/c78fe39cfa6d3b8fe9ea80fec6107fd74c9d5f60a871f7a07abcfddfa241218c.jpg"
                />
                <div>
                  <div className="font-display text-[16px] font-bold">
                    Daniel Ortega
                  </div>
                  <div className="text-[14px] text-muted">CTO, Nuvoryx</div>
                </div>
              </div>
              <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift flex items-center gap-4 p-4">
                <img
                  alt="Ravi Menon"
                  className="h-16 w-16 rounded-2xl object-cover"
                  src="/agency-assets/fe53b1a2005b255a37da5724cb3fc6929ba59e73e719ee90c48f0eb0c81126db.jpg"
                />
                <div>
                  <div className="font-display text-[16px] font-bold">
                    Ravi Menon
                  </div>
                  <div className="text-[14px] text-muted">
                    Principal Solutions Architect, AWS
                  </div>
                </div>
              </div>
              <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift flex items-center gap-4 p-4">
                <img
                  alt="Leila Haddad"
                  className="h-16 w-16 rounded-2xl object-cover"
                  src="/agency-assets/64fc47639d5c3f087c78903c57faf4827168ba7fa8c8cd1e3e86bc6eb4c8f79d.jpg"
                />
                <div>
                  <div className="font-display text-[16px] font-bold">
                    Leila Haddad
                  </div>
                  <div className="text-[14px] text-muted">
                    Chief AI Officer, Nuvoryx
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
