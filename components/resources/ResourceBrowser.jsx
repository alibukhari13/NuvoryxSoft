"use client";

import { createContext, useContext, useMemo, useState } from "react";
import {
  resourceLabels,
  resources,
} from "@/data/resources";
import ResourceCard, { PaperCover } from "@/components/resources/ResourceCard";

const ResourcesContext = createContext(null);

export function ResourcesProvider({ children }) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("All");
  const [topic, setTopic] = useState("All topics");
  const value = useMemo(
    () => ({ query, setQuery, type, setType, topic, setTopic }),
    [query, type, topic],
  );
  return (
    <ResourcesContext.Provider value={value}>{children}</ResourcesContext.Provider>
  );
}

function useResources() {
  const value = useContext(ResourcesContext);
  if (!value) throw new Error("Resource search must sit inside ResourcesProvider");
  return value;
}

export function ResourceSearch() {
  const { query, setQuery } = useResources();
  return (
    <div className="relative">
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
        className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40"
        aria-hidden="true"
      >
        <path d="m21 21-4.34-4.34" />
        <circle cx="11" cy="11" r="8" />
      </svg>
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={`Search ${resources.length} resources…`}
        aria-label={`Search ${resources.length} resources…`}
        className="h-12 w-full rounded-full border border-line bg-white pl-11 pr-4 text-[15px] text-ink outline-none transition focus:border-forest focus:ring-4 focus:ring-brand/25"
      />
    </div>
  );
}

const typeTabs = ["All", "Blog", "Webinar", "Podcast", "White paper", "News"];

export function ResourceGrid() {
  const { query, setQuery, type, setType, topic, setTopic } = useResources();
  const topics = ["All topics", ...new Set(resources.map((item) => item.topic))];
  const visible = resources.filter((item) => {
    const typeMatch = type === "All" || item.type === type;
    const topicMatch = topic === "All topics" || item.topic === topic;
    const haystack = `${item.title} ${item.excerpt}`.toLowerCase();
    const queryMatch = !query || haystack.includes(query.toLowerCase());
    return typeMatch && topicMatch && queryMatch;
  });
  const featured = resources.find((item) => item.slug === "ai-adoption-2026");

  return (
    <section className="relative bg-paper py-20 text-ink md:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <a
          href="/whitepapers/ai-adoption-2026"
          className="group mb-14 grid overflow-hidden rounded-[28px] bg-forest text-white lg:grid-cols-[1.2fr_1fr]"
        >
          <div className="p-8 md:p-12">
            <span className="rounded-md bg-brand/15 px-1.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-brand">
              Featured white paper
            </span>
            <h2 className="mt-5 text-[30px] leading-tight sm:text-[40px]">{featured.title}</h2>
            <p className="mt-4 text-white/70">{featured.excerpt}</p>
            <span className="mt-8 inline-flex items-center gap-2 font-bold text-brand">
              Download free
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 15V3" />
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <path d="m7 10 5 5 5-5" />
              </svg>
            </span>
          </div>
          <div className="relative grid min-h-[260px] place-items-center bg-[radial-gradient(circle_at_50%_50%,rgba(5,207,69,0.4),transparent_70%)]">
            <div className="w-40 rotate-[-5deg] transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105 md:w-48">
              <PaperCover title="AI Adoption in 2026" />
            </div>
          </div>
        </a>
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="no-scrollbar flex gap-2 overflow-x-auto" role="tablist">
            {typeTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={type === tab}
                onClick={() => setType(tab)}
                className={`h-10 shrink-0 rounded-full px-4 text-[14px] font-bold transition-colors ${
                  type === tab
                    ? "bg-ink text-white"
                    : "border border-line bg-white text-ink/75 hover:border-ink/30"
                }`}
              >
                {tab === "All" ? "All" : resourceLabels[tab]}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {topics.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setTopic(item)}
                className={`rounded-full px-3 py-1.5 text-[13px] font-bold transition-colors ${
                  topic === item
                    ? "bg-brand text-ink"
                    : "bg-ink/5 text-ink/70 hover:bg-ink/10"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        {visible.length ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((item, index) => (
              <div key={item.slug} className="reveal in" style={{ transitionDelay: `${(index % 3) * 80}ms` }}>
                <ResourceCard item={item} />
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-[28px] border border-line bg-white px-6 py-16 text-center">
            <p className="text-[18px] font-semibold">Nothing matches yet. Try a different filter.</p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setType("All");
                setTopic("All topics");
              }}
              className="mt-6 inline-flex h-10 items-center rounded-full border border-line bg-white px-4 text-[14px] font-bold hover:border-ink/30"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
