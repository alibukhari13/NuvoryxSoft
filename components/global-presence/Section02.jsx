export default function Section02() {
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
                Offices
              </span>
            </div>
            <div className="reveal in" style={{ transitionDelay: "80ms" }}>
              <h2 className="mt-4 text-[34px] sm:text-[44px] lg:text-[52px]">
                Find us around the world.
              </h2>
            </div>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <button className="text-left">
            <div className="relative rounded-[22px] border shadow-soft bg-white transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift h-full p-6 border-brand shadow-glow">
              <div className="flex items-center justify-between">
                <span className="rounded bg-forest px-1.5 py-0.5 font-mono text-[11px] font-bold text-brand">
                  US
                </span>
                <span className="rounded-md px-1.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-[0.12em] bg-brand/15 text-forest">
                  HQ
                </span>
              </div>
              <h3 className="mt-4 text-[22px]">San Francisco</h3>
              <p className="text-[14px] text-muted">United States</p>
              <p className="mt-4 text-[14px] text-ink/80">
                535 Mission St, 14th Floor, San Francisco, CA 94105
              </p>
              <p className="mt-2 text-[14px] font-bold">+1 (415) 555-0142</p>
            </div>
          </button>
          <button className="text-left">
            <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift h-full p-6">
              <div className="flex items-center justify-between">
                <span className="rounded bg-forest px-1.5 py-0.5 font-mono text-[11px] font-bold text-brand">
                  US
                </span>
              </div>
              <h3 className="mt-4 text-[22px]">New York</h3>
              <p className="text-[14px] text-muted">United States</p>
              <p className="mt-4 text-[14px] text-ink/80">
                28 W 23rd St, New York, NY 10010
              </p>
              <p className="mt-2 text-[14px] font-bold">+1 (212) 555-0198</p>
            </div>
          </button>
          <button className="text-left">
            <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift h-full p-6">
              <div className="flex items-center justify-between">
                <span className="rounded bg-forest px-1.5 py-0.5 font-mono text-[11px] font-bold text-brand">
                  UK
                </span>
              </div>
              <h3 className="mt-4 text-[22px]">London</h3>
              <p className="text-[14px] text-muted">United Kingdom</p>
              <p className="mt-4 text-[14px] text-ink/80">
                1 Finsbury Avenue, London EC2M 2PF
              </p>
              <p className="mt-2 text-[14px] font-bold">+44 20 7946 0321</p>
            </div>
          </button>
          <button className="text-left">
            <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift h-full p-6">
              <div className="flex items-center justify-between">
                <span className="rounded bg-forest px-1.5 py-0.5 font-mono text-[11px] font-bold text-brand">
                  PT
                </span>
              </div>
              <h3 className="mt-4 text-[22px]">Lisbon</h3>
              <p className="text-[14px] text-muted">Portugal</p>
              <p className="mt-4 text-[14px] text-ink/80">
                Av. da Liberdade 110, 1250-146 Lisboa
              </p>
              <p className="mt-2 text-[14px] font-bold">+351 21 555 0174</p>
            </div>
          </button>
          <button className="text-left">
            <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift h-full p-6">
              <div className="flex items-center justify-between">
                <span className="rounded bg-forest px-1.5 py-0.5 font-mono text-[11px] font-bold text-brand">
                  AE
                </span>
              </div>
              <h3 className="mt-4 text-[22px]">Dubai</h3>
              <p className="text-[14px] text-muted">United Arab Emirates</p>
              <p className="mt-4 text-[14px] text-ink/80">
                Dubai Internet City, Building 3, Dubai
              </p>
              <p className="mt-2 text-[14px] font-bold">+971 4 555 0110</p>
            </div>
          </button>
          <button className="text-left">
            <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift h-full p-6">
              <div className="flex items-center justify-between">
                <span className="rounded bg-forest px-1.5 py-0.5 font-mono text-[11px] font-bold text-brand">
                  PK
                </span>
              </div>
              <h3 className="mt-4 text-[22px]">Lahore</h3>
              <p className="text-[14px] text-muted">Pakistan</p>
              <p className="mt-4 text-[14px] text-ink/80">
                Arfa Software Technology Park, Lahore
              </p>
              <p className="mt-2 text-[14px] font-bold">+92 42 555 0190</p>
            </div>
          </button>
          <button className="text-left">
            <div className="relative rounded-[22px] border shadow-soft bg-white border-line transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-lift h-full p-6">
              <div className="flex items-center justify-between">
                <span className="rounded bg-forest px-1.5 py-0.5 font-mono text-[11px] font-bold text-brand">
                  SG
                </span>
              </div>
              <h3 className="mt-4 text-[22px]">Singapore</h3>
              <p className="text-[14px] text-muted">Singapore</p>
              <p className="mt-4 text-[14px] text-ink/80">
                1 Raffles Place, #20-01, Singapore 048616
              </p>
              <p className="mt-2 text-[14px] font-bold">+65 6555 0123</p>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
