export default function Section01() {
  return (
    <section
      data-hero="dark"
      className="relative overflow-hidden -mt-[72px] bg-ink pt-[72px] text-white"
    >
      <div className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_right,#000_20%,transparent_70%)]"></div>
      <div
        data-parallax="-0.12"
        className="absolute -right-32 -top-40 h-[560px] w-[560px] rounded-full bg-brand/25 blur-[140px]"
        style={{ transform: "translate3d(0px, 136.1px, 0px) scale(1)" }}
      ></div>
      <div
        data-parallax="0.1"
        className="absolute -bottom-40 left-0 h-[400px] w-[600px] rounded-full bg-forest blur-[120px]"
        style={{ transform: "translate3d(0px, -113.4px, 0px) scale(1)" }}
      ></div>
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8 relative pb-20 pt-12 md:pb-28 md:pt-16">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-1.5 text-[13.5px] font-semibold text-white/50"
        >
          <a href="/" className="hover:text-white">
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
            <a href="/case-studies" className="hover:text-white">
              Case Studies
            </a>
          </span>
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
            <span className="text-white">Fernhill</span>
          </span>
        </nav>
        <div className="mt-10 grid gap-12">
          <div>
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 font-mono text-[11.5px] font-medium uppercase tracking-[0.18em] text-white/60">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-brand"
                  aria-hidden="true"
                ></span>
                LumenPay · Fintech &amp; Banking
              </span>
            </div>
            <h1 className="mt-5 text-[40px] sm:text-[56px] lg:text-[68px]">
              Headless replatform lifts online revenue 52% in six months
            </h1>
            <p className="mt-6 max-w-2xl animate-fade-up text-[18px] [animation-delay:450ms] md:text-[19px] text-white/70">
              A premium homeware retailer had outgrown a monolithic platform
              that slowed every campaign launch.
            </p>
            <div className="mt-9 flex animate-fade-up flex-wrap gap-3 [animation-delay:600ms]">
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full px-3 py-1 text-[12.5px] font-semibold bg-white/10 text-white/80">
                  Retail &amp; E-commerce
                </span>
                <span className="inline-flex items-center rounded-full px-3 py-1 text-[12.5px] font-semibold bg-white/10 text-white/80">
                  Digital Experience
                </span>
                <span className="inline-flex items-center rounded-full px-3 py-1 text-[12.5px] font-semibold bg-white/10 text-white/80">
                  Next.js
                </span>
                <span className="inline-flex items-center rounded-full px-3 py-1 text-[12.5px] font-semibold bg-white/10 text-white/80">
                  Shopify Plus
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14 aspect-[21/9] overflow-hidden rounded-[28px]">
          <img
            alt="LumenPay project imagery"
            loading="eager"
            decoding="async"
            data-parallax="0.08"
            data-parallax-scale="1.14"
            className="h-full w-full object-cover"
            src="/agency-assets/e09d2c8848c480504502ae68e9358c5e71c4958671b5ed9faf375a22814175da.jpg"
            style={{ transform: "translate3d(0px, -65.4px, 0px) scale(1.14)" }}
          />
        </div>
      </div>
    </section>
  );
}
