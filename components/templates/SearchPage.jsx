"use client";

import { useMemo, useState } from "react";

export default function SearchPage({ page }) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const value = query.trim().toLowerCase();
    return value
      ? page.items.filter((item) =>
          `${item.title} ${item.description}`.toLowerCase().includes(value),
        )
      : page.items;
  }, [page.items, query]);
  return (
    <>
      <section
        data-hero="dark"
        className="relative -mt-[72px] overflow-hidden bg-ink pt-[72px] text-white"
      >
        <div className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_right,#000_20%,transparent_70%)]" />
        <div className="relative mx-auto max-w-[1280px] px-5 pb-20 pt-12 md:px-8 md:pb-24 md:pt-16">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand">
            NUVORYX SEARCH
          </span>
          <h1 className="mt-5 text-[42px] font-bold sm:text-[60px]">
            Find what you’re looking for.
          </h1>
          <label className="mt-8 flex max-w-3xl items-center gap-3 rounded-2xl bg-white px-5 text-ink">
            <span aria-hidden="true">⌕</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="h-16 flex-1 bg-transparent text-[17px] outline-none"
              placeholder="Search services, work, insights…"
              aria-label="Search Nuvoryx"
            />
            <kbd className="hidden rounded border border-line px-2 py-1 text-[11px] text-muted sm:block">
              ⌘ K
            </kbd>
          </label>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8">
          <p className="mb-6 text-[14px] text-muted">
            {query
              ? `${results.length} results for “${query}”`
              : "Popular pages and resources"}
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {results.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-[22px] border border-line p-6 transition hover:-translate-y-1 hover:border-brand hover:shadow-lift"
              >
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                  {item.eyebrow}
                </span>
                <h2 className="mt-3 text-[20px] font-bold">{item.title}</h2>
                <p className="mt-2 text-[14px] leading-relaxed text-muted">
                  {item.description}
                </p>
              </a>
            ))}
          </div>
          {!results.length && (
            <p className="rounded-2xl bg-paper p-6 text-muted">
              No results found. Try a different search or contact our team.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
