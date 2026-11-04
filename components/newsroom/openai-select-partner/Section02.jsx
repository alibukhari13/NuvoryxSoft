export default function Section02() {
  return (
    <section className="bg-paper text-ink py-20 md:py-28 lg:py-32 relative !pt-0">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <div className="aspect-[21/9] overflow-hidden rounded-[28px]">
          <img
            alt=""
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
            src="/agency-assets/d78dff08536844d544fe9d4eb8a2ba470b662140848218c20817cc878cb9b113.jpg"
          />
        </div>
        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_320px]">
          <article className="prose-nv max-w-[720px] text-[18px] leading-[1.75]">
            <p>
              <b>SAN FRANCISCO, Sep 18, 2025</b> — Nuvoryx, the software
              engineering and AI studio, today announced named an openai select
              partner. The milestone reflects the company’s growing portfolio of
              production AI systems across financial services, healthcare and
              logistics.
            </p>
            <p>
              “Our clients don’t want AI experiments, they want outcomes they
              can defend to their boards,” said Ethan Brooks, co-founder and CEO
              of Nuvoryx. “This recognition gives them faster access to the
              latest capabilities, delivered with the engineering rigour they
              expect from us.”
            </p>
            <h2>Expanding enterprise AI delivery</h2>
            <p>
              Through the programme, Nuvoryx will expand co-delivery with
              partner engineering teams, gain early access to new models and
              tooling, and offer clients funded proof-of-concept engagements.
            </p>
            <h2>About Nuvoryx</h2>
            <p>
              Founded in 2012, Nuvoryx designs, builds and runs intelligent
              software for ambitious companies in 24 countries. With 1,400+
              people across seven global hubs, the company is ISO 27001 and SOC
              2 Type II certified.
            </p>
          </article>
          <aside className="flex flex-col gap-4 lg:sticky lg:top-28 lg:self-start">
            <div className="relative rounded-[22px] border shadow-soft bg-white border-line p-6">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Media contact
              </div>
              <div className="mt-4 font-bold">Sarah Lindqvist</div>
              <div className="text-[14px] text-muted">
                Head of Communications
              </div>
              <a
                href="mailto:press@nuvoryx.com"
                className="mt-3 flex items-center gap-2 text-[14.5px] font-bold hover:text-forest"
              >
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
                  className="lucide lucide-mail h-4 w-4 text-brand"
                  aria-hidden="true"
                >
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                </svg>{" "}
                press@nuvoryx.com
              </a>
            </div>
            <div className="relative rounded-[22px] border shadow-soft bg-white border-line p-6">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Press kit
              </div>
              <button className="mt-4 flex w-full items-center justify-between rounded-xl bg-paper px-4 py-3 text-[14px] font-bold hover:bg-ink hover:text-white">
                Logos &amp; brand assets{" "}
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
                  className="lucide lucide-download h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M12 15V3"></path>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <path d="m7 10 5 5 5-5"></path>
                </svg>
              </button>
              <button className="mt-2 flex w-full items-center justify-between rounded-xl bg-paper px-4 py-3 text-[14px] font-bold hover:bg-ink hover:text-white">
                Leadership photos{" "}
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
                  className="lucide lucide-download h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M12 15V3"></path>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <path d="m7 10 5 5 5-5"></path>
                </svg>
              </button>
            </div>
            <a
              href="/newsroom"
              className="flex items-center gap-2 text-[14px] font-bold text-muted hover:text-ink"
            >
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
                className="lucide lucide-arrow-left h-4 w-4"
                aria-hidden="true"
              >
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path>
              </svg>{" "}
              Back to newsroom
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
