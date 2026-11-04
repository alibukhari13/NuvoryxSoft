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
                Key capabilities
              </span>
            </div>
            <div className="reveal in" style={{ transitionDelay: "80ms" }}>
              <h2 className="mt-4 text-[34px] sm:text-[44px] lg:text-[52px]">
                What’s included in Code Audit.
              </h2>
            </div>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="reveal in" style={{ transitionDelay: "0ms" }}>
            <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift group h-full p-7">
              <span className="font-mono text-[12px] text-muted">01</span>
              <h3 className="mt-3 text-[20px]">Code Audit assessment</h3>
              <p className="mt-2 text-[15px] text-muted">
                A clear view of where Code Audit adds the most value, sequenced
                by impact and effort.
              </p>
              <div className="absolute bottom-0 left-7 right-7 h-[3px] origin-left scale-x-0 rounded-full bg-brand transition-transform duration-300 group-hover:scale-x-100"></div>
            </div>
          </div>
          <div className="reveal in" style={{ transitionDelay: "80ms" }}>
            <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift group h-full p-7">
              <span className="font-mono text-[12px] text-muted">02</span>
              <h3 className="mt-3 text-[20px]">Architecture &amp; design</h3>
              <p className="mt-2 text-[15px] text-muted">
                Reference architectures, prototypes and decision records your
                team can build on.
              </p>
              <div className="absolute bottom-0 left-7 right-7 h-[3px] origin-left scale-x-0 rounded-full bg-brand transition-transform duration-300 group-hover:scale-x-100"></div>
            </div>
          </div>
          <div className="reveal in" style={{ transitionDelay: "160ms" }}>
            <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift group h-full p-7">
              <span className="font-mono text-[12px] text-muted">03</span>
              <h3 className="mt-3 text-[20px]">
                Engineering &amp; integration
              </h3>
              <p className="mt-2 text-[15px] text-muted">
                Production-grade implementation integrated with your existing
                systems and data.
              </p>
              <div className="absolute bottom-0 left-7 right-7 h-[3px] origin-left scale-x-0 rounded-full bg-brand transition-transform duration-300 group-hover:scale-x-100"></div>
            </div>
          </div>
          <div className="reveal in" style={{ transitionDelay: "0ms" }}>
            <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift group h-full p-7">
              <span className="font-mono text-[12px] text-muted">04</span>
              <h3 className="mt-3 text-[20px]">Testing &amp; hardening</h3>
              <p className="mt-2 text-[15px] text-muted">
                Automated testing, performance tuning and security review before
                launch.
              </p>
              <div className="absolute bottom-0 left-7 right-7 h-[3px] origin-left scale-x-0 rounded-full bg-brand transition-transform duration-300 group-hover:scale-x-100"></div>
            </div>
          </div>
          <div className="reveal in" style={{ transitionDelay: "80ms" }}>
            <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift group h-full p-7">
              <span className="font-mono text-[12px] text-muted">05</span>
              <h3 className="mt-3 text-[20px]">Enablement &amp; handover</h3>
              <p className="mt-2 text-[15px] text-muted">
                Documentation, pairing and training so your team can own it
                confidently.
              </p>
              <div className="absolute bottom-0 left-7 right-7 h-[3px] origin-left scale-x-0 rounded-full bg-brand transition-transform duration-300 group-hover:scale-x-100"></div>
            </div>
          </div>
          <div className="reveal in" style={{ transitionDelay: "160ms" }}>
            <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift group h-full p-7">
              <span className="font-mono text-[12px] text-muted">06</span>
              <h3 className="mt-3 text-[20px]">Run &amp; optimise</h3>
              <p className="mt-2 text-[15px] text-muted">
                Optional managed service with SLAs, monitoring and continuous
                improvement.
              </p>
              <div className="absolute bottom-0 left-7 right-7 h-[3px] origin-left scale-x-0 rounded-full bg-brand transition-transform duration-300 group-hover:scale-x-100"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
