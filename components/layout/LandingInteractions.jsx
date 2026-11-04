"use client";

import { useEffect, useState } from "react";
import { serviceCatalog } from "@/data/serviceCatalog.mjs";
import { industryCatalog } from "@/data/industryCatalog.mjs";

const heroSlides = [
  {
    eyebrow: "Software & AI studio",
    before: "We build ",
    highlight: "intelligent",
    after: " software that scales your business.",
    text: "Nuvoryx designs, engineers and runs AI-powered products for ambitious companies, from first prototype to platforms serving millions.",
  },
  {
    eyebrow: "Case study · Kestrel Insurance",
    before: "AI agents now settle ",
    highlight: "70% of claims",
    after: " end to end.",
    text: "How we built a governed, auditable digital workforce that cut settlement time by 4.2 days and lifted NPS by 18 points.",
  },
  {
    eyebrow: "Cloud & Infrastructure",
    before: "Cloud that scales with you, ",
    highlight: "not your bill.",
    after: "",
    text: "1,200+ workloads migrated with zero-surprise cutovers and an average 34% reduction in run costs.",
  },
];

const industries = industryCatalog;
const industryPhotos = {
  "Fintech & Banking": "photo-1681826291722-70bd7e9e6fc3",
  Healthcare: "photo-1758691463203-cce9d415b2b5",
  "Retail & E-commerce": "photo-1441986300917-64674bd600d8",
  "Logistics & Supply Chain": "photo-1553413077-190dd305871c",
  "Education / EdTech": "photo-1522202176988-66273c2fd55f",
  "Real Estate / PropTech": "photo-1613490493576-7fde63acd811",
  Telecom: "photo-1533664488202-6af66d26c44a",
  "SaaS & Startups": "photo-1598520106830-8c45c2035460",
  "Public Sector": "photo-1523292562811-8fa7962a78c8",
  Manufacturing: "photo-1716191299980-a6e8827ba10b",
};

const menuData = {
  Services: [
    "AI & Data Innovation",
    "Engineering",
    "Advisory & Strategy",
    "Cybersecurity",
    "Optimization & Quality",
    "Cloud & Infrastructure",
    "Digital Experience",
    "Business Process Services",
  ],
  Industries: Object.keys(industries),
  Customers: ["Case Studies", "Testimonials", "Client Logos"],
  Company: [
    "About Us",
    "AI-First Company",
    "How We Work",
    "Leadership",
    "Global Presence",
    "Our Partners / Alliances",
    "ESG & Culture",
    "Newsroom",
  ],
  Resources: [
    "Webinars",
    "White papers & Ebooks",
    "Podcasts",
    "Blogs",
    "Newsroom",
    "Resource Center",
  ],
};

const serviceMenuItems = serviceCatalog;

const linkForMenu = (group, title) => {
  const slugs = {
    "AI & Data Innovation": "ai-data-innovation",
    "Advisory & Strategy": "advisory-strategy",
    "Optimization & Quality": "optimization-quality",
    "Cloud & Infrastructure": "cloud-infrastructure",
    "Fintech & Banking": "fintech-banking",
    "Retail & E-commerce": "retail-ecommerce",
    "Logistics & Supply Chain": "logistics-supply-chain",
    "Education / EdTech": "education-edtech",
    "Real Estate / PropTech": "real-estate-proptech",
    "SaaS & Startups": "saas-startups",
    "Client Logos": "testimonials?logos=1",
    "About Us": "about",
    "AI-First Company": "ai-first",
    "How We Work": "how-we-work",
    "Global Presence": "global-presence",
    "Our Partners / Alliances": "partners",
    "ESG & Culture": "esg",
    "Resource center": "resources",
    "Resource Center": "resources",
    "White papers & Ebooks": "whitepapers",
    Blogs: "blog",
  };
  if (title === "Client Logos") return "/testimonials?logos=1";
  const slug =
    slugs[title] ||
    title
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  if (group === "Services") return `/services/${slug}`;
  if (group === "Industries") return `/industries/${slug}`;
  if (group === "Customers")
    return title === "Testimonials" ? "/testimonials" : "/case-studies";
  if (group === "Company") return `/${slug}`;
  if (group === "Resources") return `/${slug}`;
  return "/";
};

function SearchDialog({ open, onClose }) {
  const [query, setQuery] = useState("");
  useEffect(() => {
    if (!open) return;
    document.documentElement.classList.add("lenis-stopped");
    return () => document.documentElement.classList.remove("lenis-stopped");
  }, [open]);
  const entries = [
    [
      "Service",
      "AI & Data Innovation",
      "Production-grade AI, analytics and data platforms.",
      "/services/ai-data-innovation",
    ],
    [
      "Service",
      "Cloud & Infrastructure",
      "Resilient, cost-efficient cloud platforms.",
      "/services/cloud-infrastructure",
    ],
    [
      "Industry",
      "Healthcare",
      industries.Healthcare[0],
      "/industries/healthcare",
    ],
    [
      "Industry",
      "Fintech & Banking",
      industries["Fintech & Banking"][0],
      "/industries/fintech-banking",
    ],
    [
      "Case study",
      "LumenPay fraud AI",
      "43% fewer fraudulent transactions with real-time ML scoring.",
      "/case-studies/lumenpay-fraud-ai",
    ],
    [
      "Case study",
      "Kestrel AI agents",
      "AI agents process 70% of claims end to end.",
      "/case-studies/kestrel-ai-agents",
    ],
    [
      "Insight",
      "AI agents in production",
      "Guardrails, evals and the details that matter.",
      "/blog/ai-agents-in-production",
    ],
    [
      "Company",
      "Careers",
      "Join our engineers, designers and AI specialists.",
      "/careers",
    ],
    [
      "Company",
      "Contact",
      "Talk to our team about your next project.",
      "/contact",
    ],
  ];
  const results = query.trim()
    ? entries.filter(([, title, desc]) =>
        `${title} ${desc}`.toLowerCase().includes(query.toLowerCase()),
      )
    : [];
  const popular = [
    "AI agents",
    "Cloud migration",
    "Healthcare",
    "Pricing",
    "Generative AI",
    "Careers",
  ];
  const quickLinks = [
    ["All services", "/services"],
    ["Case studies", "/case-studies"],
    ["Resource Center", "/resources"],
    ["Book a consultation", "/book-consultation"],
  ];
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[90]"
      role="dialog"
      aria-modal="true"
      aria-label="Search"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <div
        className="absolute inset-0 animate-fade-up bg-ink/70 backdrop-blur-md"
        onClick={onClose}
      />
      <section className="relative mx-auto mt-[8vh] w-[min(760px,calc(100%-32px))] animate-fade-up overflow-hidden rounded-[28px] bg-white text-ink shadow-lift">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (query.trim())
              window.location.assign(
                `/search?q=${encodeURIComponent(query.trim())}`,
              );
          }}
          className="flex items-center gap-3 border-b border-line px-6"
        >
          <span aria-hidden="true" className="text-xl text-forest">
            ⌕
          </span>
          <input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search services, case studies, insights…"
            aria-label="Search query"
            className="h-[72px] flex-1 bg-transparent text-[18px] font-semibold outline-none placeholder:text-ink/35"
          />
          <kbd className="hidden rounded-md border border-line px-2 py-1 font-mono text-[11px] text-muted sm:block">
            ESC
          </kbd>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="grid h-9 w-9 place-items-center rounded-full bg-paper sm:hidden"
          >
            ×
          </button>
        </form>
        <div
          data-lenis-prevent="true"
          className="max-h-[60vh] overflow-y-auto p-4"
        >
          {!query && (
            <div className="p-2">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Popular searches
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {popular.map((item) => (
                  <button
                    key={item}
                    onClick={() => setQuery(item)}
                    className="rounded-full border border-line px-3.5 py-1.5 text-[14px] font-semibold hover:border-ink"
                  >
                    {item}
                  </button>
                ))}
              </div>
              <div className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Quick links
              </div>
              <div className="mt-2 grid gap-1 sm:grid-cols-2">
                {quickLinks.map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    onClick={onClose}
                    className="flex items-center justify-between rounded-xl px-3 py-3 text-[15px] font-bold hover:bg-paper"
                  >
                    {label}
                    <span className="text-brand">↗</span>
                  </a>
                ))}
              </div>
            </div>
          )}
          {query && results.length === 0 && (
            <div className="p-8 text-center">
              <p className="mt-3 font-bold">No results for “{query}”</p>
              <p className="text-[14px] text-muted">
                Try “AI”, “cloud” or “healthcare”.
              </p>
            </div>
          )}
          {results.map(([kind, title, desc, href]) => (
            <a
              key={href}
              href={href}
              onClick={onClose}
              className="group flex items-center gap-4 rounded-2xl px-3 py-3 hover:bg-paper"
            >
              <span className="w-24 shrink-0 font-mono text-[10.5px] uppercase tracking-[0.12em] text-muted">
                {kind}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[15px] font-bold">
                  {title}
                </span>
                <span className="block truncate text-[13px] text-muted">
                  {desc}
                </span>
              </span>
              <span className="text-brand opacity-0 transition-opacity group-hover:opacity-100">
                ↗
              </span>
            </a>
          ))}
          {query && results.length > 0 && (
            <button
              onClick={() => {
                window.location.assign(
                  `/search?q=${encodeURIComponent(query.trim())}`,
                );
                onClose();
              }}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-2xl bg-paper py-3 text-[14px] font-bold hover:bg-ink hover:text-white"
            >
              See all results for “{query}” ↗
            </button>
          )}
        </div>
      </section>
    </div>
  );
}

function CookieNotice({ onClose }) {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    try {
      setVisible(!window.localStorage?.getItem("nuvoryx-cookie-choice"));
    } catch {
      setVisible(true);
    }
  }, []);
  const choose = (choice) => {
    try {
      window.localStorage?.setItem("nuvoryx-cookie-choice", choice);
    } catch {}
    setVisible(false);
    onClose?.();
  };
  if (!visible) return null;
  return (
    <aside
      aria-label="Cookie preferences"
      className="fixed bottom-5 left-5 z-[60] w-[min(420px,calc(100vw-110px))] animate-fade-up rounded-[22px] border border-line bg-white p-5 text-ink shadow-lift"
    >
      <div className="flex items-start gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand/15 text-forest">
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M12 3a9 9 0 1 0 9 9c0-.6-.5-1-1.1-.9a4 4 0 0 1-4-4c.1-.6-.3-1.1-.9-1.1A9 9 0 0 0 12 3Z" />
            <circle cx="8" cy="10" r="1" />
            <circle cx="12" cy="7" r="1" />
            <circle cx="8" cy="15" r="1" />
          </svg>
        </span>
        <div>
          <div className="font-display text-[15px] font-bold">
            We value your privacy
          </div>
          <p className="mt-1 text-[13.5px] leading-snug text-muted">
            We use cookies to improve your experience and analyse traffic. Read
            our{" "}
            <a
              href="/cookies"
              className="font-bold text-ink underline decoration-brand underline-offset-2"
            >
              Cookie Policy
            </a>
            .
          </p>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <button
          onClick={() => choose("all")}
          className="h-10 flex-1 rounded-full bg-ink px-5 text-[13px] font-bold text-white transition-all hover:bg-forest"
        >
          Accept all
        </button>
        <button
          onClick={() => choose("essential")}
          className="h-10 flex-1 rounded-full border border-line px-5 text-[13px] font-bold transition-all hover:border-ink hover:bg-paper"
        >
          Essential only
        </button>
      </div>
    </aside>
  );
}

function ChatPanel({ onClose }) {
  const links = [
    ["Book a free consultation", "/book-consultation"],
    ["Get a project estimate", "/book-consultation"],
    ["Contact sales", "/contact"],
    ["Explore careers", "/careers"],
  ];
  return (
    <section
      aria-label="How can we help?"
      className="fixed bottom-[88px] right-5 z-[60] w-[min(340px,calc(100vw-40px))] animate-scale-in overflow-hidden rounded-[24px] border border-line bg-white text-ink shadow-lift"
      data-lenis-prevent
    >
      <div className="relative overflow-hidden bg-forest p-5 text-white">
        <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-brand/40 blur-2xl" />
        <div className="relative flex items-center justify-between">
          <div className="font-display text-[17px] font-bold">
            How can we help?
          </div>
          <button
            aria-label="Close chat"
            onClick={onClose}
            className="grid h-8 w-8 place-items-center rounded-full bg-white/10"
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
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
        <p className="relative mt-1 text-[14px] text-white/70">
          We typically reply within an hour during business hours.
        </p>
      </div>
      <div className="flex flex-col gap-2 p-4">
        {links.map(([label, href]) => (
          <a
            key={label}
            href={href}
            onClick={onClose}
            className="group flex items-center justify-between rounded-2xl border border-line px-4 py-3 text-[14.5px] font-bold hover:border-brand hover:bg-paper"
          >
            {label}
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
              className="h-4 w-4 text-brand transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        ))}
      </div>
    </section>
  );
}

export default function LandingInteractions() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const setChatVisibility = (open) => {
    setChatOpen(open);
    const trigger = document.querySelector("[data-chat-trigger]");
    if (!trigger) return;
    trigger.setAttribute("aria-label", open ? "Close chat" : "Open chat");
    trigger.setAttribute("aria-expanded", String(open));
    trigger.innerHTML = open
      ? '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>'
      : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6" aria-hidden="true"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg><span class="absolute right-0.5 top-0.5 h-3 w-3 rounded-full border-2 border-brand bg-ink"></span>';
  };

  useEffect(() => {
    const sectionsWithoutReveal = [
      ...document.querySelectorAll("main section"),
    ].filter((section) => !section.querySelector(".reveal"));
    sectionsWithoutReveal.forEach((section) =>
      section.classList.add("reveal", "in"),
    );
    const revealItems = [...document.querySelectorAll("main .reveal")];
    revealItems.forEach((item) => item.classList.remove("in"));
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    revealItems.forEach((item) => revealObserver.observe(item));

    const hero = document.querySelector("[data-hero]");
    const eyebrow = hero?.querySelector(".animate-fade-up span");
    const heading = hero?.querySelector("h1");
    const summary = hero?.querySelector("h1 + p");
    const tabs = [...(hero?.querySelectorAll('[role="tab"]') || [])];
    let activeSlide = 0;
    let heroTimer;
    const renderSlide = (index) => {
      if (!tabs.length) return;
      activeSlide = index;
      const slide = heroSlides[index];
      if (eyebrow) eyebrow.childNodes[1].textContent = slide.eyebrow;
      const words = (text, offset) =>
        text
          .trim()
          .split(/\s+/)
          .map(
            (word, wordIndex) =>
              `<span class="word-mask"><span style="animation-delay:${offset + wordIndex * 55}ms">${word}</span></span>`,
          )
          .join(" ");
      if (heading)
        heading.innerHTML = `${words(slide.before, 100)} <span class="text-brand">${words(slide.highlight, 100 + slide.before.trim().split(/\s+/).length * 55)}</span>${slide.after ? ` ${words(slide.after, 160)}` : ""}`;
      if (summary) summary.textContent = slide.text;
      tabs.forEach((tab, tabIndex) => {
        const selected = tabIndex === index;
        tab.setAttribute("aria-selected", String(selected));
        tab.className = `relative h-1.5 overflow-hidden rounded-full transition-all ${selected ? "w-14 bg-white/20" : "w-6 bg-white/20 hover:bg-white/40"}`;
        tab.innerHTML = selected
          ? '<span class="absolute inset-y-0 left-0 bg-brand" style="animation:grow 7s linear forwards"></span>'
          : "";
      });
      const count = hero?.querySelector('[role="tablist"] > span');
      if (count) count.textContent = `0${index + 1} / 0${heroSlides.length}`;
      window.clearTimeout(heroTimer);
      heroTimer = window.setTimeout(
        () => renderSlide((activeSlide + 1) % heroSlides.length),
        7000,
      );
    };
    if (tabs.length) renderSlide(0);

    const counters = [...document.querySelectorAll(".tabular-nums")];
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || entry.target.dataset.counting === "true")
            return;
          const element = entry.target;
          const target = Number(element.textContent.replace(/,/g, ""));
          if (!Number.isFinite(target) || target <= 0) return;
          element.dataset.counting = "true";
          element.textContent = "0";
          const start = performance.now();
          const tick = (now) => {
            const progress = Math.min(1, (now - start) / 1600);
            const value = Math.round(target * (1 - Math.pow(1 - progress, 3)));
            element.textContent =
              target >= 1000 ? value.toLocaleString("en-US") : String(value);
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.45 },
    );
    counters.forEach((counter) => counterObserver.observe(counter));

    const parallaxItems = [...document.querySelectorAll("[data-parallax]")];
    let parallaxFrame = 0;
    const updateParallax = () => {
      if (
        window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        parallaxFrame
      )
        return;
      parallaxFrame = requestAnimationFrame(() => {
        parallaxFrame = 0;
        const viewportHeight = window.innerHeight;
        parallaxItems.forEach((item) => {
          const bounds = (item.parentElement || item).getBoundingClientRect();
          if (bounds.bottom < -200 || bounds.top > viewportHeight + 200) return;
          const ratio = Number.parseFloat(item.dataset.parallax || "0");
          const scale = item.dataset.parallaxScale || "1";
          const offset =
            (bounds.top + bounds.height / 2 - viewportHeight / 2) * ratio;
          item.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0) scale(${scale})`;
        });
      });
    };
    updateParallax();
    window.addEventListener("scroll", updateParallax, { passive: true });
    window.addEventListener("resize", updateParallax);

    const header = document.querySelector("header.sticky");
    const megaMenu = header?.querySelector(".absolute.inset-x-0.top-full");
    const megaContent = megaMenu?.querySelector("[data-lenis-prevent]");
    const originalIndustryMenu = megaContent?.innerHTML || "";
    document
      .querySelectorAll(".nv-nav-backdrop")
      .forEach((layer) => layer.remove());
    let menuTimer;
    let closeMenuTimer;
    const serviceMenuMarkup = (selected) => {
      const serviceNames = menuData.Services;
      const serviceLinks = serviceMenuItems[selected] || [];
      const categoryRows = serviceNames
        .map(
          (name) =>
            `<a href="${linkForMenu("Services", name)}" data-service-category="${name}" class="flex items-center justify-between px-8 py-[11px] text-[14.5px] font-bold transition-colors ${name === selected ? "bg-forest text-white" : "text-ink/80 hover:bg-paper"}"><span>${name}</span>${name === selected ? '<span class="text-brand">›</span>' : ""}</a>`,
        )
        .join("");
      const links = serviceLinks
        .map(
          (name) =>
            `<a href="${linkForMenu("Services", selected)}/${name
              .toLowerCase()
              .replace(/&/g, "and")
              .replace(/[^a-z0-9]+/g, "-")
              .replace(
                /(^-|-$)/g,
                "",
              )}" class="group flex flex-col rounded-2xl p-3 transition-colors hover:bg-paper"><span class="text-[15px] font-bold text-ink group-hover:text-forest">${name}</span><span class="mt-0.5 text-[13.5px] leading-snug text-muted">Explore our ${name.toLowerCase()} capabilities.</span></a>`,
        )
        .join("");
      return `<div class="mx-auto grid max-w-[1440px] grid-cols-[300px_1fr_380px]"><div class="flex flex-col border-r border-line py-6"><div class="nv-stagger flex flex-col">${categoryRows}</div><div class="mt-auto px-8 pt-6"><a href="/services" class="font-bold text-ink hover:text-forest">View all services <span class="text-brand">→</span></a><div class="mt-3 flex items-center gap-5 text-[12px] font-bold text-muted"><span>AWS</span><span>Microsoft</span><span>Google Cloud</span></div></div></div><div class="flex flex-col px-8 py-8"><div class="mb-4 flex items-baseline justify-between"><div class="font-display text-[22px] font-bold tracking-[-0.03em]">${selected}</div><span class="text-[13px] text-muted">${serviceLinks.length} services</span></div><div class="nv-stagger grid grid-cols-2 gap-x-4 gap-y-1">${links}</div><a href="${linkForMenu("Services", selected)}" class="group mt-auto inline-flex items-center gap-1 pt-6 text-[14px] font-bold text-ink/70 hover:text-forest">All ${selected} services <span class="text-brand transition-transform group-hover:translate-x-0.5">→</span></a></div><div class="relative overflow-hidden bg-paper px-6 py-8"><div class="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand/15 blur-3xl"></div><div class="relative font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Spotlight</div><div class="relative mt-4 flex flex-col gap-3"><a href="/webinars/modernizing-for-ai-era" class="group flex items-center gap-4 rounded-2xl p-2 transition-colors hover:bg-white"><div class="relative h-[92px] w-[136px] shrink-0 overflow-hidden rounded-xl bg-forest"><img src="https://images.unsplash.com/photo-1614023342667-6f060e9d1e04?auto=format&fit=crop&w=500&q=75" alt="" class="absolute bottom-0 right-0 h-[85%] w-[55%] object-cover object-top"/><div class="absolute inset-0 bg-gradient-to-r from-forest via-forest/80 to-transparent"></div><div class="absolute left-2.5 top-2.5"><span class="rounded bg-brand px-1 py-0.5 font-mono text-[7px] font-bold uppercase text-ink">Webinar</span><div class="mt-1.5 w-16 font-display text-[9px] font-bold leading-tight text-white">Legacy apps for the AI era</div></div></div><span><span class="block font-display text-[15px] font-bold leading-tight tracking-[-0.02em] text-ink">Modernizing Legacy Apps for the AI Era</span><span class="mt-2 block text-[13px] font-bold text-muted group-hover:text-forest">Watch now <span class="inline-block transition-transform group-hover:translate-x-0.5">→</span></span></span></a><a href="/whitepapers/c-suite-digital-transformation" class="group flex items-center gap-4 rounded-2xl p-2 transition-colors hover:bg-white"><span class="grid h-[92px] w-[136px] shrink-0 place-items-center overflow-hidden rounded-xl bg-[radial-gradient(circle_at_70%_30%,#05CF45_0%,#1B3329_60%)]"><span class="rounded-md bg-white px-2.5 py-1.5 text-[10px] font-bold text-ink">nuvoryx<br/>C-suite guide</span></span><span><span class="block font-display text-[15px] font-bold leading-tight tracking-[-0.02em] text-ink">C-suite’s Guide to Mastering Digital Transformation</span><span class="mt-2 block text-[13px] font-bold text-muted group-hover:text-forest">Get the white paper <span class="inline-block transition-transform group-hover:translate-x-0.5">→</span></span></span></a></div><div class="relative mt-6 rounded-2xl bg-ink p-5 text-white"><div class="text-[13px] text-white/60">Not sure where to start?</div><div class="mt-1 font-display text-[16px] font-bold">Talk to a solutions architect</div><a href="/book-consultation" class="mt-3 inline-flex items-center gap-1.5 text-[13.5px] font-bold text-brand">Book a free consultation <span>→</span></a></div></div></div>`;
    };
    const simpleMenuMarkup = (group) => {
      const descriptions = {
        "Case Studies": "Outcomes we have delivered",
        Testimonials: "In our clients’ own words",
        "Client Logos": "Who we work with",
        "About Us": "Who we are, our mission and how we make a difference",
        "AI-First Company":
          "Our approach to building intelligent, scalable solutions",
        "How We Work": "Our methodology for reliable, future-proof software",
        Leadership: "The people steering Nuvoryx",
        "Global Presence": "Seven hubs across four continents",
        "Our Partners / Alliances":
          "Microsoft, AWS, Google Cloud, OpenAI and more",
        "ESG & Culture": "How we care for people and planet",
        Webinars: "Led by Nuvoryx’s research and advisory experts",
        "White papers & Ebooks": "Research-backed guidance on emerging tech",
        Podcasts: "Tech-driven dialogues with industry experts",
        Blogs: "Expert-driven articles on engineering and AI",
        Newsroom: "Updates on Nuvoryx and global tech insights",
        "Resource Center": "A collection of every Nuvoryx resource",
      };
      const links = menuData[group]
        .filter((label) => label !== "Resource Center")
        .map((label) => {
          const badge =
            group === "Resources" && label === "Webinars"
              ? '<span class="rounded-full bg-[#FFF2D8] px-2 py-0.5 text-[10px] font-bold text-[#9A6200]">Popular</span>'
              : "";
          return `<a href="${linkForMenu(group, label)}" class="group flex gap-3 rounded-2xl p-3 transition-colors hover:bg-paper"><span class="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-[2px] bg-ink/30 transition-colors group-hover:bg-brand"></span><span><span class="flex items-center gap-2 text-[15px] font-bold text-ink group-hover:text-forest">${label}${badge}</span><span class="mt-0.5 block text-[13.5px] leading-snug text-muted">${descriptions[label] || "Explore how Nuvoryx can help."}</span></span></a>`;
        })
        .join("");
      const columns = group === "Customers" ? "grid-cols-3" : "grid-cols-2";
      const feature =
        group === "Customers"
          ? `<div class="bg-paper p-8"><div class="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Featured story</div><a href="/case-studies/medacore-clinical-copilot" class="group mt-4 flex gap-4"><img src="https://images.unsplash.com/photo-1758691463203-cce9d415b2b5?auto=format&fit=crop&w=600&q=75" alt="" class="h-24 w-36 shrink-0 rounded-xl object-cover transition-transform group-hover:scale-105"/><span><span class="font-display text-[15px] font-bold leading-tight">A clinical copilot that gives physicians 9 hours back every week</span><span class="mt-2 block text-[13px] font-bold text-muted group-hover:text-forest">Read the story →</span></span></a></div>`
          : group === "Company"
            ? `<div class="bg-paper p-8"><div class="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Featured</div><div class="mt-4 flex flex-col gap-3"><a href="/newsroom/anthropic-partner-network" class="group flex items-center gap-4 rounded-2xl p-2 transition-colors hover:bg-white"><span class="relative grid h-[92px] w-[136px] shrink-0 place-items-center overflow-hidden rounded-xl bg-[radial-gradient(circle_at_80%_20%,rgba(5,207,69,0.5),transparent_60%),#1B3329]"><span class="rounded-md bg-white px-2.5 py-1.5 text-[12px] font-bold text-ink">Claude</span></span><span><span class="block font-display text-[15px] font-bold leading-tight tracking-[-0.02em] text-ink">Nuvoryx joins Anthropic’s Claude Partner Network</span><span class="mt-2 block text-[13px] font-bold text-muted group-hover:text-forest">Read the news <span class="inline-block transition-transform group-hover:translate-x-0.5">→</span></span></span></a><a href="/newsroom/openai-select-partner" class="group flex items-center gap-4 rounded-2xl p-2 transition-colors hover:bg-white"><span class="relative grid h-[92px] w-[136px] shrink-0 place-items-center overflow-hidden rounded-xl bg-[radial-gradient(circle_at_20%_80%,rgba(5,207,69,0.5),transparent_60%),#1B3329]"><span class="rounded-md bg-white px-2.5 py-1.5 text-[12px] font-bold text-ink">OpenAI</span></span><span><span class="block font-display text-[15px] font-bold leading-tight tracking-[-0.02em] text-ink">Nuvoryx named an OpenAI Select Partner</span><span class="mt-2 block text-[13px] font-bold text-muted group-hover:text-forest">Read the news <span class="inline-block transition-transform group-hover:translate-x-0.5">→</span></span></span></a></div></div>`
            : `<div class="bg-paper p-8"><div class="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Featured</div><a href="/whitepapers/ai-adoption-2026" class="group mt-4 block"><div class="grid aspect-[16/9] place-items-center overflow-hidden rounded-[18px] bg-[radial-gradient(circle_at_50%_40%,rgba(5,207,69,0.35),#1B3329_70%)]"><div class="relative aspect-[3/4] w-32 overflow-hidden rounded-[10px] bg-white p-5 shadow-lift transition-transform duration-500 group-hover:-rotate-2 group-hover:scale-105"><div class="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand/60 blur-2xl"></div><svg viewBox="0 0 200 200" class="absolute -right-6 top-6 h-32 w-32" aria-hidden="true"><defs><radialGradient id="resource-cover-mark" cx="35%" cy="30%" r="80%"><stop offset="0%" stop-color="#C8FFD8"/><stop offset="40%" stop-color="#05CF45"/><stop offset="100%" stop-color="#1B3329"/></radialGradient><filter id="resource-cover-mark-blur"><feGaussianBlur stdDeviation="8"/></filter></defs><path d="M100 10 C108 70 130 92 190 100 C130 108 108 130 100 190 C92 130 70 108 10 100 C70 92 92 70 100 10Z" fill="#05CF45" opacity="0.35" filter="url(#resource-cover-mark-blur)" transform="translate(0 10)"/><path d="M100 10 C108 70 130 92 190 100 C130 108 108 130 100 190 C92 130 70 108 10 100 C70 92 92 70 100 10Z" fill="url(#resource-cover-mark)"/></svg><div class="relative flex h-full flex-col"><div class="flex items-center gap-1.5 font-display text-[11px] font-extrabold tracking-tight text-ink"><svg viewBox="0 0 32 32" class="h-4 w-4" aria-hidden="true"><rect width="32" height="32" rx="9" fill="#05CF45"/><path d="M9 23V9l14 14V9" fill="none" stroke="#111" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></svg>nuvoryx</div><div class="relative mt-auto"><span class="rounded bg-brand/15 px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-widest text-forest">White paper</span><div class="mt-2 font-display text-[14px] font-bold leading-tight text-ink">AI Adoption in 2026</div></div></div></div></div><span class="mt-4 block font-display text-[16px] font-bold leading-snug tracking-[-0.02em]">AI adoption in 2026: a practical framework for enterprise-scale impact</span><span class="mt-2 flex items-center gap-1 text-[13.5px] font-bold text-muted transition-colors group-hover:text-forest">Get the white paper <span class="inline-block transition-transform group-hover:translate-x-0.5">→</span></span></a></div>`;
      const resourceCta =
        group === "Resources"
          ? `<a href="/resources" class="group relative mt-6 flex items-center justify-between overflow-hidden rounded-[18px] bg-gradient-to-r from-forest to-ink px-7 py-6 text-white"><span><span class="block font-display text-[17px] font-bold">Resource Center</span><span class="text-[14px] text-white/65">A collection of every Nuvoryx resource</span></span><span class="text-xl text-brand transition-transform group-hover:translate-x-1">→</span></a>`
          : "";
      return `<div class="mx-auto grid max-w-[1440px] grid-cols-[1fr_480px]"><div class="p-10"><div class="nv-stagger grid ${columns} gap-3">${links}</div>${resourceCta}</div>${feature}</div>`;
    };
    const renderMenu = (group) => {
      if (!megaContent) return;
      if (group === "Industries") megaContent.innerHTML = originalIndustryMenu;
      else if (group === "Services")
        megaContent.innerHTML = serviceMenuMarkup("Engineering");
      else megaContent.innerHTML = simpleMenuMarkup(group);
    };
    const showMegaMenu = (button) => {
      if (!header || !megaMenu || !button) return;
      const group = button.textContent.trim();
      window.clearTimeout(menuTimer);
      window.clearTimeout(closeMenuTimer);
      header
        .querySelectorAll("nav > div > button[aria-expanded]")
        .forEach((item) => {
          const selected = item === button;
          item.setAttribute("aria-expanded", String(selected));
          item.querySelector("svg")?.classList.toggle("rotate-180", selected);
          item.nextElementSibling?.classList.toggle("scale-x-100", selected);
          item.nextElementSibling?.classList.toggle("scale-x-0", !selected);
        });
      const heading = megaMenu.querySelector(
        ".mx-auto.grid.max-w-\\[1440px\\] > div:first-child > .font-display",
      );
      if (heading) heading.textContent = group;
      if (menuData[group]) renderMenu(group);
      megaMenu.classList.remove(
        "hidden",
        "invisible",
        "-translate-y-3",
        "opacity-0",
      );
      megaMenu.classList.add("visible", "translate-y-0", "opacity-100");
      if (backdrop) backdrop.style.display = "block";
      setHeaderTone();
    };
    const hideMegaMenu = () => {
      if (!header || !megaMenu) return;
      window.clearTimeout(menuTimer);
      window.clearTimeout(closeMenuTimer);
      header
        .querySelectorAll("nav > div > button[aria-expanded]")
        .forEach((item) => item.setAttribute("aria-expanded", "false"));
      megaMenu.classList.add("invisible", "-translate-y-3", "opacity-0");
      megaMenu.classList.remove("visible", "translate-y-0", "opacity-100");
      if (backdrop) backdrop.style.display = "none";
      setHeaderTone();
    };
    const onHeaderMouseOver = (event) => {
      const button =
        event.target instanceof Element
          ? event.target.closest("nav > div > button[aria-expanded]")
          : null;
      if (
        button &&
        menuData[button.textContent.trim()] &&
        button.getAttribute("aria-expanded") !== "true"
      ) {
        window.clearTimeout(closeMenuTimer);
        window.clearTimeout(menuTimer);
        menuTimer = window.setTimeout(() => showMegaMenu(button), 80);
      }
    };
    const onHeaderMouseLeave = () => {
      window.clearTimeout(menuTimer);
      closeMenuTimer = window.setTimeout(hideMegaMenu, 160);
    };
    const onMegaMenuMouseEnter = () => window.clearTimeout(closeMenuTimer);
    const backdrop = document.createElement("div");
    backdrop.className =
      "nv-nav-backdrop fixed inset-0 top-[72px] z-40 bg-ink/20 backdrop-blur-[2px]";
    backdrop.style.display = "none";
    backdrop.addEventListener("mouseenter", onHeaderMouseLeave);
    backdrop.addEventListener("click", hideMegaMenu);
    header?.after(backdrop);
    megaMenu?.addEventListener("mouseenter", onMegaMenuMouseEnter);
    megaMenu?.addEventListener("mouseleave", onHeaderMouseLeave);
    header?.addEventListener("mouseover", onHeaderMouseOver);
    header?.addEventListener("mouseleave", onHeaderMouseLeave);
    header
      ?.querySelector(".ml-auto")
      ?.addEventListener("mouseenter", onHeaderMouseLeave);
    const onRouteChange = () => hideMegaMenu();
    window.addEventListener("hashchange", onRouteChange);
    const updateServiceCategory = (event) => {
      const target = event.target instanceof Element ? event.target : null;
      const link = target?.closest("[data-service-category]");
      if (!link || !megaContent?.contains(link)) return;
      const category = link.getAttribute("data-service-category");
      if (link.classList.contains("bg-forest")) return;
      megaContent
        .querySelectorAll("[data-service-category]")
        .forEach((item) => {
          const selected = item === link;
          item.className = `flex items-center justify-between px-8 py-[11px] text-[14.5px] font-bold transition-colors ${selected ? "bg-forest text-white" : "text-ink/80 hover:bg-paper"}`;
          const arrow = item.querySelector(".text-brand");
          if (selected && !arrow) {
            const mark = document.createElement("span");
            mark.className = "text-brand";
            mark.textContent = "›";
            item.append(mark);
          } else if (!selected && arrow) arrow.remove();
        });
      const template = document.createElement("template");
      template.innerHTML = serviceMenuMarkup(category);
      const nextCenter = template.content.firstElementChild?.children[1];
      const currentCenter = megaContent.querySelector(
        ".flex.flex-col.px-8.py-8",
      );
      if (nextCenter && currentCenter) currentCenter.replaceWith(nextCenter);
    };
    megaMenu?.addEventListener("pointerover", updateServiceCategory);
    megaMenu?.addEventListener("focusin", updateServiceCategory);
    const setHeaderTone = () => {
      if (!header) return;
      const heroIsDark = hero?.getAttribute("data-hero") === "dark";
      const dark =
        heroIsDark &&
        window.scrollY < Math.max(100, (hero?.offsetHeight || 600) - 100);
      header.classList.toggle("bg-white/85", !dark);
      header.classList.toggle("backdrop-blur-xl", !dark);
      header.classList.toggle("border-line", !dark);
      header.classList.toggle("bg-paper/0", dark);
      header.classList.toggle("border-transparent", dark);
      header.querySelectorAll("nav > div > button").forEach((button) => {
        const expanded = button.getAttribute("aria-expanded") === "true";
        button.classList.toggle("text-white", dark && expanded);
        button.classList.toggle("text-white/75", dark && !expanded);
        button.classList.toggle("text-ink", !dark && expanded);
        button.classList.toggle("text-ink/70", !dark && !expanded);
        button.classList.toggle("hover:text-white", dark);
        button.classList.toggle("hover:text-ink", !dark);
      });
      header.querySelectorAll("nav > div > a").forEach((link) => {
        link.classList.toggle("text-white/75", dark);
        link.classList.toggle("text-ink/70", !dark);
        link.classList.toggle("hover:text-white", dark);
        link.classList.toggle("hover:text-ink", !dark);
      });
      header
        .querySelectorAll(
          'button[aria-label="Search (Ctrl+K)"],button[aria-label="Change language"]',
        )
        .forEach((button) => {
          button.classList.toggle("text-white/80", dark);
          button.classList.toggle("text-ink/75", !dark);
          button.classList.toggle("hover:bg-white/10", dark);
          button.classList.toggle("hover:bg-ink/5", !dark);
          button.classList.toggle("hover:text-white", dark);
          button.classList.toggle("hover:text-ink", !dark);
        });
      header
        .querySelector('a[aria-label="Nuvoryx home"] span')
        ?.classList.toggle("text-white", dark);
    };
    setHeaderTone();
    window.addEventListener("scroll", setHeaderTone, { passive: true });
    let previousScrollY = window.scrollY;
    const updateHeaderVisibility = () => {
      const currentScrollY = window.scrollY;
      if (
        header &&
        currentScrollY > 120 &&
        currentScrollY > previousScrollY + 2
      ) {
        header.classList.remove("translate-y-0");
        header.classList.add("-translate-y-full");
        hideMegaMenu();
      } else if (
        header &&
        (currentScrollY < previousScrollY - 2 || currentScrollY <= 120)
      ) {
        header.classList.remove("-translate-y-full");
        header.classList.add("translate-y-0");
      }
      previousScrollY = currentScrollY;
    };
    window.addEventListener("scroll", updateHeaderVisibility, {
      passive: true,
    });

    const updateProcessStep = (button) => {
      const group = button.closest(".relative.grid.gap-4");
      if (!group) return;
      const buttons = [...group.querySelectorAll(":scope > button")];
      const activeIndex = buttons.indexOf(button);
      if (activeIndex < 0 || buttons.length < 2) return;
      const progressLines = group.querySelectorAll(
        ":scope > .absolute.left-0.top-6",
      );
      if (progressLines.length < 2) return;
      const progress = progressLines[1];
      progress.setAttribute(
        "style",
        `width: ${(activeIndex / (buttons.length - 1)) * 100}%;`,
      );
      buttons.forEach((stepButton, index) => {
        const completed = index <= activeIndex;
        const selected = index === activeIndex;
        const number = stepButton.querySelector("span");
        const detail = stepButton.querySelector("div.mt-6");
        if (number)
          number.className = `relative z-10 grid h-12 w-12 place-items-center rounded-full border-2 font-display text-[15px] font-bold transition-all ${completed ? "border-brand bg-brand text-ink" : "border-line bg-white text-ink"}`;
        if (detail)
          detail.className = `mt-6 rounded-[20px] border p-6 transition-all ${selected ? "border-brand" : "border-transparent"}`;
      });
    };
    const onProcessHover = (event) => {
      const target = event.target instanceof Element ? event.target : null;
      const button = target?.closest(".relative.grid.gap-4 > button");
      const timeline = button?.parentElement?.querySelectorAll(
        ":scope > .absolute.left-0.top-6",
      );
      if (button && timeline?.length >= 2) updateProcessStep(button);
    };
    document
      .querySelectorAll("main section .relative.grid.gap-4")
      .forEach((timeline) => {
        const buttons = timeline.querySelectorAll(":scope > button");
        const progressLines = timeline.querySelectorAll(
          ":scope > .absolute.left-0.top-6",
        );
        if (buttons.length > 1 && progressLines.length > 1) {
          updateProcessStep(buttons[0]);
        }
      });
    document.addEventListener("pointerover", onProcessHover);

    const updateIndustry = (industryButton) => {
      const section = industryButton.closest("section");
      const titleText = industryButton.textContent.trim();
      const details = industries[titleText];
      if (
        !section ||
        !details ||
        !section.querySelector("h2")?.textContent.includes("domain expertise")
      )
        return;

      const [description, standards] = details;
      section.querySelectorAll("button").forEach((button) => {
        const selected = button === industryButton;
        button.className = `flex shrink-0 items-center gap-3 rounded-2xl px-4 py-3 text-left text-[15px] font-bold transition-all ${selected ? "bg-forest text-white" : "bg-white text-ink/75 hover:text-ink lg:bg-transparent lg:hover:bg-white"}`;
        const icon = button.querySelector("svg:first-child");
        const arrow = button.querySelector("svg:last-child");
        if (icon)
          (icon.classList.toggle("text-brand", selected),
            icon.classList.toggle("text-ink/40", !selected));
        if (arrow) arrow.classList.toggle("opacity-0", !selected);
      });

      const title = [...section.querySelectorAll("h3")].find(
        (heading) => heading.textContent.trim() in industries,
      );
      const text = title?.parentElement?.querySelector("p");
      if (title) title.textContent = titleText;
      if (text) text.textContent = description;

      const panel =
        title?.closest(".grid") || title?.parentElement?.parentElement;
      if (!panel) return;
      const compliance = [...panel.querySelectorAll("span")].filter((span) =>
        /ISO|GDPR|PCI|HIPAA|SOC 2|FERPA|FedRAMP|HL7|WCAG|NIST|AML|CPNI|C-TPAT|TM Forum|IEC/.test(
          span.textContent,
        ),
      );
      standards.split(" · ").forEach((standard, index) => {
        if (compliance[index]) compliance[index].textContent = standard;
      });
      const image = panel.querySelector("img[alt]");
      if (image) {
        image.alt = titleText;
        image.src = `https://images.unsplash.com/${industryPhotos[titleText]}?auto=format&fit=crop&w=1200&q=75`;
      }
      const explore = panel.querySelector("a[href^='/industries/']");
      const slug = titleText
        .toLowerCase()
        .replace(/&/g, "and")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      if (explore) {
        explore.href = `/industries/${slug}`;
        explore.textContent = `Explore ${titleText}`;
      }
    };
    const onIndustryHover = (event) => {
      const target = event.target instanceof Element ? event.target : null;
      const button = target?.closest("section button");
      if (button) updateIndustry(button);
    };
    document.addEventListener("pointerover", onIndustryHover);

    const onClick = (event) => {
      const target = event.target instanceof Element ? event.target : null;
      if (!target) return;
      const searchButton = target.closest('[aria-label="Search (Ctrl+K)"]');
      if (searchButton) {
        setSearchOpen(true);
        return;
      }
      const chatButton = target.closest("[data-chat-trigger]");
      if (chatButton) {
        setChatVisibility(chatButton.getAttribute("aria-expanded") !== "true");
        return;
      }
      const heroTab = target.closest('[role="tab"][aria-label^="Slide "]');
      if (heroTab && hero?.contains(heroTab)) {
        renderSlide(
          Math.max(
            0,
            Number(heroTab.getAttribute("aria-label").replace("Slide ", "")) -
              1,
          ),
        );
        return;
      }
      const faqButton = target.closest("[aria-expanded]");
      if (
        faqButton &&
        faqButton
          .closest("section")
          ?.querySelector("h2")
          ?.textContent.includes("Questions, answered")
      ) {
        const expanded = faqButton.getAttribute("aria-expanded") === "true";
        faqButton.setAttribute("aria-expanded", String(!expanded));
        const answer = faqButton.nextElementSibling;
        if (answer) {
          answer.hidden = expanded;
          answer.classList.toggle("hidden", expanded);
        }
        return;
      }
      const menuButton = target.closest(
        '[aria-label="Open menu"], [aria-label="Close menu"]',
      );
      const mobilePanel = document.querySelector(".fixed.inset-0.z-\\[70\\]");
      const mobileSearch =
        mobilePanel?.contains(target) && target.closest("button");
      if (mobileSearch && mobileSearch.textContent.includes("Search Nuvoryx")) {
        mobilePanel.classList.add("invisible");
        mobilePanel.setAttribute("aria-hidden", "true");
        mobilePanel.querySelector(":scope > div")?.classList.add("opacity-0");
        const mobileDrawer = mobilePanel.querySelector(
          ":scope > div:last-child",
        );
        mobileDrawer?.classList.add("translate-x-full");
        mobileDrawer?.classList.remove("translate-x-0");
        document.body.classList.remove("overflow-hidden");
        document.documentElement.classList.remove("lenis-stopped");
        setSearchOpen(true);
        return;
      }
      if (menuButton && mobilePanel) {
        const open = menuButton.getAttribute("aria-label") === "Open menu";
        mobilePanel.classList.toggle("invisible", !open);
        mobilePanel.setAttribute("aria-hidden", String(!open));
        mobilePanel
          .querySelector(":scope > div")
          ?.classList.toggle("opacity-0", !open);
        const mobileDrawer = mobilePanel.querySelector(
          ":scope > div:last-child",
        );
        mobileDrawer?.classList.toggle("translate-x-full", !open);
        mobileDrawer?.classList.toggle("translate-x-0", open);
        document.body.classList.toggle("overflow-hidden", open);
        document.documentElement.classList.toggle("lenis-stopped", open);
        return;
      }
      if (mobilePanel && target.closest("a") && mobilePanel.contains(target)) {
        mobilePanel.classList.add("invisible");
        mobilePanel.setAttribute("aria-hidden", "true");
        mobilePanel.querySelector(":scope > div")?.classList.add("opacity-0");
        const mobileDrawer = mobilePanel.querySelector(
          ":scope > div:last-child",
        );
        mobileDrawer?.classList.add("translate-x-full");
        mobileDrawer?.classList.remove("translate-x-0");
        document.body.classList.remove("overflow-hidden");
        document.documentElement.classList.remove("lenis-stopped");
        return;
      }
      const mobileToggle = target.closest(
        ".fixed.inset-0.z-\\[70\\] button[aria-expanded]",
      );
      if (mobileToggle) {
        const expanded = mobileToggle.getAttribute("aria-expanded") === "true";
        const groupButtons = [
          ...mobilePanel.querySelectorAll(
            "div[data-lenis-prevent] > div.border-b > button[aria-expanded]",
          ),
        ];
        groupButtons.forEach((button) => {
          const open = button === mobileToggle && !expanded;
          button.setAttribute("aria-expanded", String(open));
          button.nextElementSibling?.classList.toggle("hidden", !open);
          const toggleIcon = button.querySelector("span.grid");
          toggleIcon?.classList.toggle("rotate-180", open);
          toggleIcon?.classList.toggle("bg-brand", open);
        });
        return;
      }
      const navToggle = target.closest(
        "header.sticky nav > div > button[aria-expanded]",
      );
      const menuGroup = navToggle?.textContent.trim();
      if (navToggle && header && menuData[menuGroup]) {
        const expanded = navToggle.getAttribute("aria-expanded") === "true";
        if (expanded) hideMegaMenu();
        else showMegaMenu(navToggle);
        return;
      }
      if (megaMenu?.contains(target) && target.closest("a")) {
        hideMegaMenu();
        return;
      }
      const languageButton = target.closest(
        'button[aria-label="Change language"]',
      );
      if (languageButton) {
        let popover = languageButton.parentElement.querySelector(
          "[data-language-popover]",
        );
        if (!popover) {
          popover = document.createElement("div");
          popover.dataset.languagePopover = "true";
          popover.hidden = true;
          popover.className =
            "absolute right-0 top-12 z-50 w-44 animate-fade-up rounded-2xl border border-line bg-white p-1.5 shadow-lift";
          ["English", "العربية", "Deutsch", "Português"].forEach(
            (language, index) => {
              const option = document.createElement("button");
              option.type = "button";
              option.className =
                "flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-[14px] font-semibold hover:bg-paper";
              option.append(document.createTextNode(language));
              if (index === 0) {
                const check = document.createElement("span");
                check.className = "text-brand";
                check.textContent = "✓";
                option.append(check);
              }
              option.addEventListener("click", () => {
                popover.hidden = true;
                languageButton.setAttribute("aria-expanded", "false");
              });
              popover.append(option);
            },
          );
          languageButton.parentElement.classList.add("relative");
          languageButton.parentElement.append(popover);
        }
        popover.hidden = !popover.hidden;
        languageButton.setAttribute("aria-expanded", String(!popover.hidden));
        return;
      }
      if (!target.closest("[data-language-popover]")) {
        document
          .querySelectorAll("[data-language-popover]")
          .forEach((popover) => {
            popover.hidden = true;
          });
        document
          .querySelector('button[aria-label="Change language"]')
          ?.setAttribute("aria-expanded", "false");
      }
      const accordion = target.closest("button");
      if (
        accordion &&
        accordion
          .closest("section")
          ?.querySelector("h2")
          ?.textContent.includes("initial spark")
      ) {
        updateProcessStep(accordion);
        return;
      }
      const industryButton = target.closest("button");
      if (
        industryButton &&
        industries[industryButton.textContent.trim()] &&
        industryButton
          .closest("section")
          ?.querySelector("h2")
          ?.textContent.includes("domain expertise")
      ) {
        updateIndustry(industryButton);
        return;
      }
      const slideButton = target.closest(
        "button[aria-label^='Previous'],button[aria-label^='Next']",
      );
      if (slideButton && !hero?.contains(slideButton)) {
        const section = slideButton.closest("section");
        const carousel = section?.querySelector(
          "[aria-label='Case studies'],[aria-label='Testimonials']",
        );
        if (carousel)
          carousel.scrollBy({
            left:
              slideButton.getAttribute("aria-label") === "Next"
                ? carousel.clientWidth * 0.8
                : -carousel.clientWidth * 0.8,
            behavior: "smooth",
          });
        return;
      }
      if (target.closest('[aria-label="Back to top"]'))
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const onSubmit = (event) => {
      const form = event.target;
      if (!(form instanceof HTMLFormElement)) return;
      event.preventDefault();
      const contactForm = Boolean(form.querySelector("textarea"));
      const button = form.querySelector(
        'button[type="submit"],button:not([type])',
      );
      if (!contactForm) {
        if (button) {
          button.disabled = true;
          button.textContent = "You’re subscribed";
        }
        window.setTimeout(() => {
          window.location.assign("/newsletter-confirmed");
        }, 700);
        return;
      }
      const fieldError = (control, message) => {
        const label = control.closest("label") || control.parentElement;
        if (!label) return;
        let error = label.querySelector(":scope > [data-field-error]");
        if (!error) {
          error = document.createElement("span");
          error.dataset.fieldError = "true";
          error.className =
            "mt-1 block text-[13px] font-semibold text-[#C23434]";
          error.setAttribute("role", "alert");
          label.append(error);
        }
        error.textContent = message;
        control.setAttribute("aria-invalid", "true");
        if (control.type !== "checkbox") {
          control.classList.add(
            "!border-[#C23434]",
            "focus:!border-[#C23434]",
            "focus:!ring-[#C23434]/15",
          );
        }
      };
      const clearFieldError = (control) => {
        const label = control.closest("label") || control.parentElement;
        label?.querySelector(":scope > [data-field-error]")?.remove();
        control.removeAttribute("aria-invalid");
        control.classList.remove(
          "!border-[#C23434]",
          "focus:!border-[#C23434]",
          "focus:!ring-[#C23434]/15",
        );
      };
      const controls = [...form.querySelectorAll("input,select,textarea")];
      let firstInvalid = null;
      const fail = (control, message) => {
        fieldError(control, message);
        firstInvalid ||= control;
      };
      const byPlaceholder = (value) =>
        controls.find((control) => control.placeholder === value);
      const first = byPlaceholder("Jane");
      const last = byPlaceholder("Cooper");
      const email = byPlaceholder("jane@company.com");
      const company = byPlaceholder("Acme Inc.");
      const service = controls.find(
        (control) =>
          control.tagName === "SELECT" &&
          /service/i.test(control.closest("label")?.innerText || ""),
      );
      const message = controls.find(
        (control) => control.tagName === "TEXTAREA",
      );
      const consent = controls.find((control) => control.type === "checkbox");
      if (first && !first.value.trim())
        fail(first, "Please enter your first name.");
      if (last && !last.value.trim())
        fail(last, "Please enter your last name.");
      if (email && !/^\S+@\S+\.\S+$/.test(email.value.trim()))
        fail(email, "Enter a valid work email, e.g. name@company.com.");
      if (company && !company.value.trim())
        fail(company, "Company name is required.");
      if (service && !service.value)
        fail(service, "Select the service you’re interested in.");
      if (message && message.value.trim().length < 20)
        fail(message, "Tell us a little more (at least 20 characters).");
      if (consent && !consent.checked)
        fail(consent, "Please accept the privacy policy to continue.");
      if (firstInvalid) {
        firstInvalid.focus();
        return;
      }
      if (button) {
        button.disabled = true;
        button.textContent = "Sending…";
      }
      window.setTimeout(() => {
        window.location.assign("/thank-you");
      }, 700);
    };
    const onInput = (event) => {
      const control = event.target;
      if (
        control instanceof HTMLInputElement ||
        control instanceof HTMLSelectElement ||
        control instanceof HTMLTextAreaElement
      ) {
        const label = control.closest("label") || control.parentElement;
        if (label?.querySelector(":scope > [data-field-error]")) {
          label.querySelector(":scope > [data-field-error]").remove();
          control.removeAttribute("aria-invalid");
          control.classList.remove(
            "!border-[#C23434]",
            "focus:!border-[#C23434]",
            "focus:!ring-[#C23434]/15",
          );
        }
      }
    };
    const onKey = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen(true);
      }
      if (event.key === "Escape") {
        setSearchOpen(false);
        setChatVisibility(false);
        hideMegaMenu();
        const mobilePanel = document.querySelector(".fixed.inset-0.z-\\[70\\]");
        if (
          mobilePanel &&
          mobilePanel.getAttribute("aria-hidden") === "false"
        ) {
          mobilePanel.classList.add("invisible");
          mobilePanel.setAttribute("aria-hidden", "true");
          mobilePanel.querySelector(":scope > div")?.classList.add("opacity-0");
          const mobileDrawer = mobilePanel.querySelector(
            ":scope > div:last-child",
          );
          mobileDrawer?.classList.add("translate-x-full");
          mobileDrawer?.classList.remove("translate-x-0");
          document.body.classList.remove("overflow-hidden");
          document.documentElement.classList.remove("lenis-stopped");
        }
      }
    };
    document.addEventListener("click", onClick);
    document.addEventListener("submit", onSubmit);
    document.addEventListener("input", onInput);
    document.addEventListener("change", onInput);
    document.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(heroTimer);
      counterObserver.disconnect();
      revealObserver.disconnect();
      if (parallaxFrame) cancelAnimationFrame(parallaxFrame);
      window.removeEventListener("scroll", updateParallax);
      window.removeEventListener("resize", updateParallax);
      window.clearTimeout(menuTimer);
      window.clearTimeout(closeMenuTimer);
      header?.removeEventListener("mouseover", onHeaderMouseOver);
      header?.removeEventListener("mouseleave", onHeaderMouseLeave);
      header
        ?.querySelector(".ml-auto")
        ?.removeEventListener("mouseenter", onHeaderMouseLeave);
      megaMenu?.removeEventListener("mouseenter", onMegaMenuMouseEnter);
      megaMenu?.removeEventListener("mouseleave", onHeaderMouseLeave);
      megaMenu?.removeEventListener("pointerover", updateServiceCategory);
      megaMenu?.removeEventListener("focusin", updateServiceCategory);
      window.removeEventListener("hashchange", onRouteChange);
      backdrop.removeEventListener("mouseenter", onHeaderMouseLeave);
      backdrop.removeEventListener("click", hideMegaMenu);
      backdrop.remove();
      window.removeEventListener("scroll", setHeaderTone);
      window.removeEventListener("scroll", updateHeaderVisibility);
      document.removeEventListener("pointerover", onProcessHover);
      document.removeEventListener("pointerover", onIndustryHover);
      document.removeEventListener("click", onClick);
      document.removeEventListener("submit", onSubmit);
      document.removeEventListener("input", onInput);
      document.removeEventListener("change", onInput);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <>
      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
      <CookieNotice />
      {chatOpen && <ChatPanel onClose={() => setChatVisibility(false)} />}
    </>
  );
}
