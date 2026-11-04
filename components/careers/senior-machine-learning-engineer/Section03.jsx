export default function Section03() {
  return (
    <section className="bg-paper text-ink py-16 md:py-20 relative">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="reveal in" style={{ transitionDelay: "0ms" }}>
              <span className="inline-flex items-center gap-2 font-mono text-[11.5px] font-medium uppercase tracking-[0.18em] text-muted">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-brand"
                  aria-hidden="true"
                ></span>
                Similar roles
              </span>
            </div>
            <div className="reveal in" style={{ transitionDelay: "80ms" }}>
              <h2 className="mt-4 text-[34px] sm:text-[44px] lg:text-[52px]">
                You might also like.
              </h2>
            </div>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <a href="/careers/staff-frontend-engineer" className="group">
            <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift p-6">
              <span className="inline-flex items-center rounded-full px-3 py-1 text-[12.5px] font-semibold bg-ink/[0.05] text-ink/75">
                Engineering
              </span>
              <h3 className="mt-4 text-[18px]">
                Staff Frontend Engineer (React)
              </h3>
              <div className="mt-2 text-[14px] text-muted">
                Remote (EU) · Full-time
              </div>
            </div>
          </a>
          <a href="/careers/cloud-architect-aws" className="group">
            <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift p-6">
              <span className="inline-flex items-center rounded-full px-3 py-1 text-[12.5px] font-semibold bg-ink/[0.05] text-ink/75">
                Cloud
              </span>
              <h3 className="mt-4 text-[18px]">
                Principal Cloud Architect, AWS
              </h3>
              <div className="mt-2 text-[14px] text-muted">
                London · Full-time
              </div>
            </div>
          </a>
          <a href="/careers/product-designer" className="group">
            <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift p-6">
              <span className="inline-flex items-center rounded-full px-3 py-1 text-[12.5px] font-semibold bg-ink/[0.05] text-ink/75">
                Design
              </span>
              <h3 className="mt-4 text-[18px]">Senior Product Designer</h3>
              <div className="mt-2 text-[14px] text-muted">
                San Francisco · Full-time
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
