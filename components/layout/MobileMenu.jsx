"use client";

import { useState } from "react";
import Link from "next/link";
import { categorySlug, pageSlug, serviceCatalog } from "@/data/serviceCatalog.mjs";
import { industryCatalog, industrySlug } from "@/data/industryCatalog.mjs";

function Chevron({ open }) {
  return (
    <span
      className={`grid h-7 w-7 place-items-center rounded-full transition-all ${
        open ? "rotate-180 bg-brand" : "bg-paper"
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </span>
  );
}

function Arrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

const groups = [
  {
    id: "Customers",
    links: [
      ["Case Studies", "/case-studies"],
      ["Testimonials", "/testimonials"],
      ["Client Logos", "/testimonials?logos=1"],
    ],
  },
  {
    id: "Company",
    links: [
      ["About Us", "/about"],
      ["AI-First Company", "/ai-first"],
      ["How We Work", "/how-we-work"],
      ["Leadership", "/leadership"],
      ["Global Presence", "/global-presence"],
      ["Our Partners / Alliances", "/partners"],
      ["ESG & Culture", "/esg"],
      ["Newsroom", "/newsroom"],
    ],
  },
  {
    id: "Resources",
    links: [
      ["Webinars", "/webinars"],
      ["White papers & Ebooks", "/whitepapers"],
      ["Podcasts", "/podcasts"],
      ["Blogs", "/blog"],
      ["Newsroom", "/newsroom"],
      ["Resource Center", "/resources"],
    ],
  },
];

export default function MobileMenu() {
  const [openGroup, setOpenGroup] = useState("Services");
  const [openCategory, setOpenCategory] = useState("Engineering");

  return (
    <div className="fixed inset-0 z-[70] invisible lg:hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-ink/50 opacity-0 transition-opacity" />
      <div
        className="absolute inset-y-0 right-0 flex w-full max-w-[420px] translate-x-full flex-col bg-white transition-transform duration-300"
        role="dialog"
        aria-label="Menu"
      >
        <div className="flex h-[72px] items-center justify-between border-b border-line px-5">
          <Link href="/" aria-label="Nuvoryx home" className="flex items-center gap-2.5">
            <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
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
            <span className="font-display text-[20px] font-extrabold tracking-[-0.04em] text-ink">
              nuvoryx
            </span>
          </Link>
          <button
            aria-label="Close menu"
            className="grid h-10 w-10 place-items-center rounded-full bg-paper"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
        <div data-lenis-prevent="true" className="flex-1 overflow-y-auto px-5 py-4">
          <button className="mb-4 flex h-12 w-full items-center gap-3 rounded-[14px] border border-line bg-paper px-4 text-left text-[15px] text-ink/50">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.34-4.34" />
            </svg>
            Search Nuvoryx
          </button>

          <div className="border-b border-line">
            <button
              type="button"
              data-mobile-accordion="true"
              aria-expanded={openGroup === "Services"}
              className="flex w-full items-center justify-between py-4 text-left font-display text-[17px] font-bold"
              onClick={() => setOpenGroup((current) => (current === "Services" ? "" : "Services"))}
            >
              Services
              <Chevron open={openGroup === "Services"} />
            </button>
            {openGroup === "Services" && (
              <div className="animate-fade-up pb-3">
                {Object.entries(serviceCatalog).map(([title, services]) => {
                  const open = openCategory === title;
                  return (
                    <div key={title} className="border-b border-line/70 last:border-0">
                      <button
                        type="button"
                        data-mobile-accordion="true"
                        aria-expanded={open}
                        className="flex w-full items-center justify-between py-3 text-left text-[15px] font-bold"
                        onClick={() => setOpenCategory(open ? "" : title)}
                      >
                        {title}
                        <Chevron open={open} />
                      </button>
                      {open && (
                        <div className="animate-fade-up flex flex-col gap-1 pb-3 pl-1">
                          {services.map((service) => (
                            <Link
                              key={service}
                              href={`/services/${categorySlug(title)}/${pageSlug(service)}`}
                              className="rounded-xl px-3 py-2 text-[14.5px] font-semibold text-ink/80 hover:bg-paper hover:text-forest"
                            >
                              {service}
                            </Link>
                          ))}
                          <Link
                            href={`/services/${categorySlug(title)}`}
                            className="px-3 py-2 text-[13.5px] font-bold text-forest"
                          >
                            All {title} services
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                })}
                <Link href="/services" className="mt-2 block px-1 text-[14px] font-bold text-ink">
                  View all services
                </Link>
              </div>
            )}
          </div>

          <div className="border-b border-line">
            <button
              type="button"
              data-mobile-accordion="true"
              aria-expanded={openGroup === "Industries"}
              className="flex w-full items-center justify-between py-4 text-left font-display text-[17px] font-bold"
              onClick={() =>
                setOpenGroup((current) => (current === "Industries" ? "" : "Industries"))
              }
            >
              Industries
              <Chevron open={openGroup === "Industries"} />
            </button>
            {openGroup === "Industries" && (
              <div className="animate-fade-up flex flex-col gap-1 pb-3">
                {Object.keys(industryCatalog).map((title) => (
                  <Link
                    key={title}
                    href={`/industries/${industrySlug(title)}`}
                    className="rounded-xl px-3 py-2.5 text-[15px] font-semibold text-ink/80 hover:bg-paper hover:text-forest"
                  >
                    {title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {groups.map((group) => (
            <div key={group.id} className="border-b border-line">
              <button
                type="button"
                data-mobile-accordion="true"
                aria-expanded={openGroup === group.id}
                className="flex w-full items-center justify-between py-4 text-left font-display text-[17px] font-bold"
                onClick={() =>
                  setOpenGroup((current) => (current === group.id ? "" : group.id))
                }
              >
                {group.id}
                <Chevron open={openGroup === group.id} />
              </button>
              {openGroup === group.id && (
                <div className="animate-fade-up flex flex-col gap-1 pb-3">
                  {group.links.map(([label, href]) => (
                    <Link
                      key={label}
                      href={href}
                      className="rounded-xl px-3 py-2.5 text-[15px] font-semibold text-ink/80 hover:bg-paper hover:text-forest"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            href="/careers"
            className="flex items-center justify-between border-b border-line py-4 font-display text-[17px] font-bold"
          >
            Careers <Arrow />
          </Link>
          <Link
            href="/contact"
            className="flex items-center justify-between border-b border-line py-4 font-display text-[17px] font-bold"
          >
            Contact <Arrow />
          </Link>
        </div>
        <div className="border-t border-line p-5">
          <Link
            href="/book-consultation"
            className="inline-flex h-[52px] w-full items-center justify-center rounded-full bg-brand px-6 font-display text-[14.5px] font-semibold text-ink"
          >
            Book a Free Consultation
          </Link>
          <div className="mt-4 flex items-center justify-between text-[13px] text-muted">
            <span>English (EN)</span>
            <a href="mailto:hello@nuvoryx.com" className="font-bold text-ink">
              hello@nuvoryx.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
