"use client";

import { useState } from "react";
import Link from "next/link";

const slugify = (title) =>
  title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const categories = [
  {
    slug: "ai-data-innovation",
    title: "AI & Data Innovation",
    icon: "brain",
    services: [
      ["AI Strategy & Roadmap", "Prioritise use cases by value, feasibility and risk."],
      ["Generative AI & LLM Solutions", "Ship copilots and RAG systems grounded in your data."],
      ["AI Agents & Workflow Automation", "Autonomous agents that complete real, multi-step work."],
      ["Machine Learning & Predictive Analytics", "Forecast demand, churn and risk with confidence."],
      ["Data Engineering & Pipelines", "Reliable, observable pipelines from source to model."],
      ["Data Analytics & BI", "Self-serve dashboards your leadership will trust."],
      ["Computer Vision", "Inspect, detect and measure from images and video."],
      ["Conversational AI / Chatbots", "Assistants that resolve, not just respond."],
    ],
  },
  {
    slug: "engineering",
    title: "Engineering",
    icon: "code",
    services: [
      ["UX/UI Design", "Design experiences that cut friction and lift conversion."],
      ["Product Development", "Web, mobile and enterprise products on solid architecture."],
      ["Application Modernization", "Move legacy apps to cloud-native, AI-ready foundations."],
      ["Quality Assurance & Continuous Delivery", "Automated tests and CI/CD that make releases boring."],
      ["POC / MVP Development", "Validate feasibility and market fit in weeks."],
      ["Application Development", "Scalable apps with secure integrations built in."],
      ["AI Development Services", "Secure, scalable AI features tailored to your product."],
    ],
  },
  {
    slug: "advisory-strategy",
    title: "Advisory & Strategy",
    icon: "compass",
    services: [
      ["Digital Transformation Consulting", "Sequence change so value lands quarter by quarter."],
      ["Technology Roadmapping", "A 12–36 month plan your board can fund."],
      ["Fractional CTO", "Senior technical leadership, without the full-time hire."],
      ["Product Strategy", "Find the bets worth making and the ones to drop."],
      ["Architecture Review", "Independent assessment of scale, cost and risk."],
    ],
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    icon: "shield",
    services: [
      ["Application Security & Pen Testing", "Find exploitable flaws before attackers do."],
      ["Cloud Security", "Posture management across AWS, Azure and GCP."],
      ["Security Audits & Compliance", "SOC 2, ISO 27001, HIPAA and PCI readiness."],
      ["Managed Security / SOC", "Round-the-clock detection and response."],
      ["Data Protection", "Encryption, DLP and privacy-by-design controls."],
    ],
  },
  {
    slug: "optimization-quality",
    title: "Optimization & Quality",
    icon: "gauge",
    services: [
      ["Performance Optimization", "Find and fix the bottlenecks that cost revenue."],
      ["Software Testing & Automation", "Fast, stable suites that run on every commit."],
      ["Code Audit", "An honest view of maintainability and risk."],
      ["Technical Debt Reduction", "Pay down debt without pausing delivery."],
      ["Process Optimization", "Streamline delivery from backlog to production."],
    ],
  },
  {
    slug: "cloud-infrastructure",
    title: "Cloud & Infrastructure",
    icon: "cloud",
    services: [
      ["Cloud Strategy & Architecture", "Landing zones and reference architectures that scale."],
      ["Cloud Migration", "Move workloads with zero-surprise cutovers."],
      ["DevOps & CI/CD", "Pipelines that ship safely, many times a day."],
      ["Managed Cloud Operations", "24/7 operations backed by real SLAs."],
      ["Infrastructure Modernization", "Containers, serverless and infrastructure as code."],
      ["FinOps / Cost Optimization", "Visibility and governance that cut waste."],
      ["Multi-Cloud (AWS, Azure, GCP)", "Portable platforms without lock-in."],
    ],
  },
  {
    slug: "digital-experience",
    title: "Digital Experience",
    icon: "devices",
    services: [
      ["Web Development", "Fast, accessible sites built on modern stacks."],
      ["Mobile App Development", "Native and cross-platform apps for iOS and Android."],
      ["E-commerce Solutions", "Storefronts and checkouts that convert."],
      ["CMS & Headless", "Content platforms your marketers will actually enjoy."],
      ["Digital Marketing", "Performance marketing grounded in analytics."],
      ["Branding & Design", "Identities and design systems with staying power."],
    ],
  },
  {
    slug: "business-process-services",
    title: "Business Process Services",
    icon: "users",
    services: [
      ["Staff Augmentation / Dedicated Teams", "Vetted engineers embedded in your team."],
      ["Offshore Development Center", "Your own managed delivery hub, fully staffed."],
      ["IT Support", "Responsive L1–L3 support for your people and systems."],
      ["Recruitment Support", "Technical hiring with a sharper bar and faster pipeline."],
    ],
  },
];

function Glyph({ className, children, strokeWidth = 1.75 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function CategoryIcon({ name, className }) {
  if (name === "brain") {
    return (
      <Glyph className={className}>
        <path d="M12 13h4" />
        <path d="M12 18h6a2 2 0 012 2v1" />
        <path d="M12 8h8" />
        <path d="M12 9a4.17 4.17 0 01-3 4" />
        <path d="M16 8V5a2 2 0 012-2" />
        <path d="M6 18a4 4 0 01-2-7.465" />
        <path d="M6.004 5.125a4 4 0 00-2.526 5.77" />
        <path d="M6.294 6.294A3 3 0 1112 5v13a4 4 0 11-7.967-.518" />
        <circle cx="16" cy="13" r="0.5" fill="currentColor" />
        <circle cx="18" cy="3" r="0.5" fill="currentColor" />
        <circle cx="20" cy="21" r="0.5" fill="currentColor" />
        <circle cx="20" cy="8" r="0.5" fill="currentColor" />
      </Glyph>
    );
  }
  if (name === "code") {
    return (
      <Glyph className={className}>
        <path d="m18 16 4-4-4-4" />
        <path d="m6 8-4 4 4 4" />
        <path d="m14.5 4-5 16" />
      </Glyph>
    );
  }
  if (name === "compass") {
    return (
      <Glyph className={className}>
        <circle cx="12" cy="12" r="10" />
        <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
      </Glyph>
    );
  }
  if (name === "shield") {
    return (
      <Glyph className={className}>
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </Glyph>
    );
  }
  if (name === "gauge") {
    return (
      <Glyph className={className}>
        <path d="m12 14 4-4" />
        <path d="M3.34 19a10 10 0 1 1 17.32 0" />
      </Glyph>
    );
  }
  if (name === "cloud") {
    return (
      <Glyph className={className}>
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </Glyph>
    );
  }
  if (name === "devices") {
    return (
      <Glyph className={className}>
        <path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8" />
        <path d="M10 19v-3.96 3.15" />
        <path d="M7 19h5" />
        <rect width="6" height="10" x="16" y="12" rx="2" />
      </Glyph>
    );
  }
  return (
    <Glyph className={className}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <path d="M16 3.128a4 4 0 0 1 0 7.744" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <circle cx="9" cy="7" r="4" />
    </Glyph>
  );
}

function Chevron({ className }) {
  return (
    <Glyph className={className} strokeWidth={1.5}>
      <path d="m9 18 6-6-6-6" />
    </Glyph>
  );
}

function Arrow({ className }) {
  return (
    <Glyph className={className} strokeWidth={2}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </Glyph>
  );
}

function PaperCover() {
  return (
    <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_70%_30%,#05CF45_0%,#1B3329_60%)]">
      <div className="relative aspect-[3/4] w-14 overflow-hidden rounded-[6px] bg-white p-2 shadow-lift">
        <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-brand/60 blur-xl" />
        <svg viewBox="0 0 200 200" className="absolute -right-3 top-2 h-12 w-12" aria-hidden="true">
          <path
            d="M100 10 C108 70 130 92 190 100 C130 108 108 130 100 190 C92 130 70 108 10 100 C70 92 92 70 100 10Z"
            fill="#05CF45"
          />
        </svg>
        <div className="relative flex h-full flex-col">
          <div className="flex items-center gap-1 font-display text-[6px] font-extrabold tracking-tight text-ink">
            <svg viewBox="0 0 32 32" className="h-2.5 w-2.5" aria-hidden="true">
              <rect width="32" height="32" rx="9" fill="#05CF45" />
              <path
                d="M9 23V9l14 14V9"
                fill="none"
                stroke="#111"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            nuvoryx
          </div>
          <div className="mt-auto">
            <span className="rounded bg-brand/15 px-1 py-0.5 font-mono text-[5px] uppercase tracking-widest text-forest">
              White paper
            </span>
            <div className="mt-1 font-display text-[6px] font-bold leading-tight text-ink">
              C-suite guide
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesMegaMenu() {
  const [slug, setSlug] = useState("engineering");
  const active = categories.find((item) => item.slug === slug) || categories[1];

  return (
    <div className="mx-auto grid max-w-[1440px] grid-cols-[300px_1fr_380px]">
      <div className="flex flex-col border-r border-line py-6">
        <ul className="nv-stagger flex flex-col">
          {categories.map((category) => {
            const selected = category.slug === active.slug;
            return (
              <li key={category.slug}>
                <Link
                  href={`/services/${category.slug}`}
                  onMouseEnter={() => setSlug(category.slug)}
                  onFocus={() => setSlug(category.slug)}
                  className={`flex items-center justify-between px-8 py-[11px] text-[14.5px] font-bold transition-colors ${
                    selected ? "bg-forest text-white" : "text-ink/80 hover:bg-paper"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <CategoryIcon
                      name={category.icon}
                      className={`h-4 w-4 ${selected ? "text-brand" : "text-ink/40"}`}
                    />
                    {category.title}
                  </span>
                  {selected && <Chevron className="h-4 w-4 text-brand" />}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="mt-auto flex flex-col gap-6 px-8 pt-6">
          <Link
            href="/services"
            className="group/btn relative isolate inline-flex w-full items-center gap-3 overflow-hidden rounded-full border-[1.5px] border-ink/20 py-0 pl-5 pr-1 font-display text-[13px] font-semibold tracking-[-0.01em] whitespace-nowrap text-ink transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] select-none hover:border-ink active:scale-[0.97] h-10"
          >
            <span
              aria-hidden="true"
              className="absolute top-1 right-1 bottom-1 -z-10 aspect-square scale-100 rounded-full bg-ink transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:scale-[26]"
            />
            <span className="relative mr-auto inline-flex items-center gap-2 transition-colors duration-300 group-hover/btn:text-white">
              View all services
            </span>
            <span className="relative grid h-8 w-8 shrink-0 place-items-center overflow-hidden rounded-full bg-ink text-white">
              <Arrow className="absolute h-3.5 w-3.5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-x-[220%]" />
              <Arrow className="absolute h-3.5 w-3.5 -translate-x-[220%] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-x-0" />
            </span>
          </Link>
          <div>
            <div className="font-mono text-[10.5px] tracking-[0.18em] text-muted uppercase">
              Certified partner of
            </div>
            <div className="mt-3 flex items-center gap-5">
              <img src="/brand/aws.svg" alt="AWS" className="h-6 w-auto" />
              <img src="/brand/microsoft.svg" alt="Microsoft" className="h-5 w-auto" />
              <img src="/brand/google-cloud.svg" alt="Google Cloud" className="h-5 w-auto" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col px-8 py-8">
        <div className="mb-4 flex items-baseline justify-between">
          <div className="font-display text-[22px] font-bold tracking-[-0.03em]">
            {active.title}
          </div>
          <span className="text-[13px] text-muted">{active.services.length} services</span>
        </div>
        <div key={active.slug} className="nv-stagger grid grid-cols-2 gap-x-4 gap-y-1">
          {active.services.map(([title, desc]) => (
            <Link
              key={title}
              href={`/services/${active.slug}/${slugify(title)}`}
              className="group flex gap-3 rounded-2xl p-3 transition-colors hover:bg-paper"
            >
              <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-[2px] bg-ink/30 transition-colors group-hover:bg-brand" />
              <span>
                <span className="block text-[15px] font-bold text-ink group-hover:text-forest">
                  {title}
                </span>
                <span className="mt-0.5 block text-[13.5px] leading-snug text-muted">
                  {desc}
                </span>
              </span>
            </Link>
          ))}
        </div>
        <Link
          href={`/services/${active.slug}`}
          className="group mt-auto inline-flex items-center gap-1 pt-6 text-[14px] font-bold text-ink/70 hover:text-forest"
        >
          All {active.title} services
          <Chevron className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>

      <div className="relative overflow-hidden bg-paper px-6 py-8">
        <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-brand/15 blur-3xl" />
        <div className="relative px-2 font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
          Spotlight
        </div>
        <div className="relative mt-4 flex flex-col gap-3">
          <Link
            href="/webinars/modernizing-for-ai-era"
            className="group flex items-center gap-4 rounded-2xl p-2 transition-colors hover:bg-white"
          >
            <div className="relative h-[92px] w-[136px] shrink-0 overflow-hidden rounded-xl bg-forest">
              <img
                src="https://images.unsplash.com/photo-1614023342667-6f060e9d1e04?auto=format&fit=crop&w=800&q=75"
                alt=""
                className="absolute right-0 bottom-0 h-[85%] w-[55%] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/80 to-transparent" />
              <div className="absolute top-2.5 left-2.5">
                <span className="rounded bg-brand px-1 py-0.5 font-mono text-[7px] font-bold text-ink uppercase">
                  Webinar
                </span>
                <div className="mt-1.5 w-16 font-display text-[9px] leading-tight font-bold text-white">
                  Legacy apps for the AI era
                </div>
              </div>
            </div>
            <div>
              <div className="font-display text-[15px] leading-tight font-bold tracking-[-0.02em] text-ink">
                Modernizing Legacy Apps for the AI Era
              </div>
              <div className="mt-2 flex items-center gap-1 text-[13px] font-bold text-muted group-hover:text-forest">
                Watch now
                <Chevron className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </div>
            </div>
          </Link>
          <Link
            href="/whitepapers/c-suite-digital-transformation"
            className="group flex items-center gap-4 rounded-2xl p-2 transition-colors hover:bg-white"
          >
            <div className="relative h-[92px] w-[136px] shrink-0 overflow-hidden rounded-xl bg-forest">
              <PaperCover />
            </div>
            <div>
              <div className="font-display text-[15px] leading-tight font-bold tracking-[-0.02em] text-ink">
                C-suite&apos;s guide to Master Digital Transformation
              </div>
              <div className="mt-2 flex items-center gap-1 text-[13px] font-bold text-muted group-hover:text-forest">
                Get the white paper
                <Chevron className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </div>
            </div>
          </Link>
        </div>
        <div className="relative mt-6 rounded-2xl bg-ink p-5 text-white">
          <div className="text-[13px] text-white/60">Not sure where to start?</div>
          <div className="mt-1 font-display text-[16px] font-bold">
            Talk to a solutions architect
          </div>
          <Link
            href="/book-consultation"
            className="mt-3 inline-flex items-center gap-1.5 text-[13.5px] font-bold text-brand"
          >
            Book a free consultation
            <Arrow className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
