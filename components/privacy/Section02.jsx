export default function Section02() {
  return (
    <section className="bg-white text-ink py-20 md:py-28 lg:py-32 relative !pt-14">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[260px_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Contents
              </div>
              <ol className="mt-4 flex flex-col gap-1">
                <li>
                  <a
                    href="#s0"
                    className="block rounded-lg px-3 py-2 text-[14px] text-muted hover:bg-paper hover:text-ink"
                  >
                    1. Who we are
                  </a>
                </li>
                <li>
                  <a
                    href="#s1"
                    className="block rounded-lg px-3 py-2 text-[14px] text-muted hover:bg-paper hover:text-ink"
                  >
                    2. Data we collect
                  </a>
                </li>
                <li>
                  <a
                    href="#s2"
                    className="block rounded-lg px-3 py-2 text-[14px] text-muted hover:bg-paper hover:text-ink"
                  >
                    3. How we use your data
                  </a>
                </li>
                <li>
                  <a
                    href="#s3"
                    className="block rounded-lg px-3 py-2 text-[14px] text-muted hover:bg-paper hover:text-ink"
                  >
                    4. Legal bases
                  </a>
                </li>
                <li>
                  <a
                    href="#s4"
                    className="block rounded-lg px-3 py-2 text-[14px] text-muted hover:bg-paper hover:text-ink"
                  >
                    5. Sharing
                  </a>
                </li>
                <li>
                  <a
                    href="#s5"
                    className="block rounded-lg px-3 py-2 text-[14px] text-muted hover:bg-paper hover:text-ink"
                  >
                    6. International transfers
                  </a>
                </li>
                <li>
                  <a
                    href="#s6"
                    className="block rounded-lg px-3 py-2 text-[14px] text-muted hover:bg-paper hover:text-ink"
                  >
                    7. Your rights
                  </a>
                </li>
                <li>
                  <a
                    href="#s7"
                    className="block rounded-lg px-3 py-2 text-[14px] text-muted hover:bg-paper hover:text-ink"
                  >
                    8. Retention
                  </a>
                </li>
              </ol>
              <div className="mt-8 flex flex-col gap-1 border-t border-line pt-6">
                <a
                  href="/privacy"
                  className="rounded-lg px-3 py-2 text-[14px] font-bold bg-forest text-white"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms"
                  className="rounded-lg px-3 py-2 text-[14px] font-bold hover:bg-paper"
                >
                  Terms &amp; Conditions
                </a>
                <a
                  href="/cookies"
                  className="rounded-lg px-3 py-2 text-[14px] font-bold hover:bg-paper"
                >
                  Cookie Policy
                </a>
                <a
                  href="/sitemap"
                  className="rounded-lg px-3 py-2 text-[14px] font-bold hover:bg-paper"
                >
                  Sitemap
                </a>
              </div>
            </div>
          </aside>
          <article className="prose-nv max-w-[760px] text-[17px] leading-[1.75]">
            <div id="s0">
              <h2 className="!mt-0">1. Who we are</h2>
              <p>
                Nuvoryx Technologies Inc. (“Nuvoryx”, “we”, “us”) is a software
                engineering and AI company headquartered at 535 Mission St, San
                Francisco, CA 94105. This policy explains how we collect, use
                and protect personal data.
              </p>
            </div>
            <div id="s1">
              <h2 className="">2. Data we collect</h2>
              <ul>
                <li>
                  Information you provide, such as your name, email, company and
                  message when you contact us, register for events or apply for
                  jobs.
                </li>
                <li>
                  Technical data such as IP address, browser type and pages
                  visited, collected through cookies and similar technologies.
                </li>
              </ul>
            </div>
            <div id="s2">
              <h2 className="">3. How we use your data</h2>
              <ul>
                <li>To respond to enquiries and provide our services.</li>
                <li>
                  To send marketing communications where you have opted in. You
                  can unsubscribe at any time.
                </li>
                <li>
                  To improve our website and understand how visitors use it.
                </li>
              </ul>
            </div>
            <div id="s3">
              <h2 className="">4. Legal bases</h2>
              <p>
                We process personal data on the basis of consent, contract
                performance, legitimate interests and legal obligations, as
                applicable.
              </p>
            </div>
            <div id="s4">
              <h2 className="">5. Sharing</h2>
              <p>
                We never sell personal data. We share it only with vetted
                processors (e.g. hosting, CRM, analytics) under data processing
                agreements.
              </p>
            </div>
            <div id="s5">
              <h2 className="">6. International transfers</h2>
              <p>
                Where data is transferred outside the EEA or UK, we rely on
                Standard Contractual Clauses and supplementary measures.
              </p>
            </div>
            <div id="s6">
              <h2 className="">7. Your rights</h2>
              <p>
                You may request access, correction, deletion, restriction or
                portability of your data, and object to processing. Contact
                privacy@nuvoryx.com.
              </p>
            </div>
            <div id="s7">
              <h2 className="">8. Retention</h2>
              <p>
                We retain data only as long as necessary for the purposes
                described, typically 24 months for marketing data and 12 months
                for candidate data.
              </p>
            </div>
            <div className="mt-12 rounded-[20px] bg-paper p-6 text-[15px]">
              Questions about this policy? Contact our Data Protection Officer
              at <a href="mailto:privacy@nuvoryx.com">privacy@nuvoryx.com</a>.
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
