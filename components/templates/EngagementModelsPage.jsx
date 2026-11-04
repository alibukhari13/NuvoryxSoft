"use client";

import { useState } from "react";

const models = [
  {
    title: "Dedicated Team",
    description:
      "A cross-functional squad working exclusively on your roadmap, in your rituals and tools.",
    bullets: [
      "Full-time vetted specialists",
      "Scale up or down monthly",
      "You direct priorities",
    ],
    best: "Long-term product development",
  },
  {
    title: "Fixed Price Project",
    description:
      "Clear scope, timeline and budget agreed upfront, with milestones tied to deliverables.",
    bullets: [
      "Predictable budget",
      "Milestone-based payments",
      "Warranty period included",
    ],
    best: "Well-defined scope & MVPs",
  },
  {
    title: "Hybrid",
    description:
      "Fixed-price discovery and MVP, then a flexible dedicated team to iterate and scale.",
    bullets: [
      "Lower upfront risk",
      "Smooth hand-off to scale",
      "Blended rate options",
    ],
    best: "New products with evolving needs",
  },
  {
    title: "Offshore Development Center",
    description:
      "Your own branded delivery hub, staffed, managed and governed by Nuvoryx.",
    bullets: [
      "Your brand, our operations",
      "Build-operate-transfer option",
      "Full compliance & security",
    ],
    best: "Enterprises scaling capacity",
  },
];

export default function EngagementModelsPage() {
  const [teamSize, setTeamSize] = useState(5);
  const [months, setMonths] = useState(6);
  const investment = teamSize * months * 6200;
  return (
    <>
      <section
        data-hero="dark"
        className="relative -mt-[72px] overflow-hidden bg-ink pt-[72px] text-white"
      >
        <div className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_right,#000_20%,transparent_70%)]" />
        <div className="relative mx-auto max-w-[1280px] px-5 pb-20 pt-12 md:px-8 md:pb-24 md:pt-16">
          <nav
            aria-label="Breadcrumb"
            className="flex gap-2 text-[13.5px] font-semibold text-white/50"
          >
            <a href="/" className="hover:text-white">
              Home
            </a>
            <span>/</span>
            <span className="text-white">Engagement Models</span>
          </nav>
          <div className="mt-12 max-w-3xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand">
              ENGAGEMENT MODELS & PRICING
            </span>
            <h1 className="mt-5 text-[42px] font-bold leading-[1.05] sm:text-[60px]">
              Transparent pricing. Flexible models.
            </h1>
            <p className="mt-6 text-[18px] leading-relaxed text-white/70">
              Choose the model that matches your scope clarity and risk
              appetite. Switch as your needs evolve, with no penalties.
            </p>
            <a
              href="/book-consultation"
              className="mt-8 inline-flex rounded-full bg-brand px-7 py-4 font-bold text-ink"
            >
              Get a tailored quote →
            </a>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-[1280px] gap-5 px-5 md:grid-cols-2 md:px-8">
          {models.map((model, index) => (
            <article
              key={model.title}
              className="relative rounded-[24px] border border-line bg-white p-7 transition hover:-translate-y-1 hover:shadow-lift"
            >
              {index === 0 && (
                <span className="absolute right-6 top-6 rounded-full bg-brand/20 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-forest">
                  Most popular
                </span>
              )}
              <h2 className="text-[24px] font-bold">{model.title}</h2>
              <p className="mt-3 max-w-lg text-[14.5px] leading-relaxed text-muted">
                {model.description}
              </p>
              <ul className="mt-6 space-y-2 text-[14px]">
                {model.bullets.map((bullet) => (
                  <li key={bullet} className="text-muted">
                    ✓ <span className="ml-2">{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-line pt-5">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                  BEST FOR
                </span>
                <p className="mt-2 font-bold">{model.best}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-paper py-16 md:py-20">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-5 md:grid-cols-2 md:px-8">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              HOW WE ESTIMATE
            </span>
            <h2 className="mt-3 text-[32px] font-bold">
              Estimates you can take to your CFO.
            </h2>
            <div className="mt-7 space-y-5">
              {[
                [
                  "Understand",
                  "A 45-minute call to understand goals, constraints and timelines.",
                ],
                [
                  "Decompose",
                  "We break scope into epics and estimate each with three-point ranges.",
                ],
                [
                  "Validate",
                  "A senior architect reviews risk, dependencies and team shape.",
                ],
                [
                  "Propose",
                  "A written proposal with options, timeline and a fixed or capped budget.",
                ],
              ].map(([title, description], index) => (
                <div key={title} className="flex gap-4">
                  <span className="font-mono text-forest">0{index + 1}</span>
                  <div>
                    <h3 className="font-bold">{title}</h3>
                    <p className="mt-1 text-[14px] text-muted">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[24px] bg-white p-7 shadow-lift">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              DEDICATED TEAM ESTIMATOR
            </span>
            <label className="mt-7 block text-[14px] font-bold">
              Team size <span className="float-right">{teamSize} people</span>
              <input
                className="mt-3 w-full accent-[#05CF45]"
                type="range"
                min="2"
                max="20"
                value={teamSize}
                onChange={(event) => setTeamSize(Number(event.target.value))}
              />
            </label>
            <label className="mt-7 block text-[14px] font-bold">
              Duration <span className="float-right">{months} months</span>
              <input
                className="mt-3 w-full accent-[#05CF45]"
                type="range"
                min="1"
                max="24"
                value={months}
                onChange={(event) => setMonths(Number(event.target.value))}
              />
            </label>
            <div className="mt-8 border-t border-line pt-6">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                INDICATIVE INVESTMENT
              </span>
              <div className="mt-2 text-[34px] font-bold">
                ${investment.toLocaleString("en-US")}
              </div>
              <p className="mt-2 text-[13px] text-muted">
                Based on a blended rate. Final pricing depends on seniority mix
                and location.
              </p>
              <a
                href="/book-consultation"
                className="mt-5 inline-flex rounded-full bg-brand px-6 py-3 font-bold text-ink"
              >
                Get an exact quote →
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            START A PROJECT
          </span>
          <h2 className="mt-3 text-[32px] font-bold">
            Let’s build what’s next, together.
          </h2>
          <p className="mt-3 text-muted">
            Tell us about your goals. A senior architect will reply within one
            business day.
          </p>
          <a
            href="/book-consultation"
            className="mt-6 inline-flex rounded-full bg-brand px-6 py-3 font-bold"
          >
            Book a free consultation →
          </a>
        </div>
      </section>
    </>
  );
}
