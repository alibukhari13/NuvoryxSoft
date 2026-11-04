"use client";

import { useState } from "react";
import { resources } from "@/data/resources";
import ResourceCard, { FeaturedResource } from "@/components/resources/ResourceCard";

export default function TypeListing({ type }) {
  const [topic, setTopic] = useState("All");
  const typed = resources.filter((item) => item.type === type);
  const topics = ["All", ...new Set(typed.map((item) => item.topic))];
  const matching = typed.filter((item) => topic === "All" || item.topic === topic);
  const [featured, ...rest] = matching;
  const extras = resources
    .filter((item) => item.type !== type)
    .slice(0, Math.max(0, 3 - rest.length));
  const grid = [...rest, ...extras];

  return (
    <section className="relative bg-paper py-20 text-ink md:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <div className="mb-10 flex flex-wrap gap-2">
          {topics.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setTopic(item)}
              className={`h-10 rounded-full px-4 text-[14px] font-bold transition-colors ${
                topic === item
                  ? "bg-ink text-white"
                  : "border border-line bg-white hover:border-ink/30"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        {featured ? <FeaturedResource item={featured} /> : null}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {grid.map((item, index) => (
            <div key={item.slug} className="reveal in" style={{ transitionDelay: `${(index % 3) * 80}ms` }}>
              <ResourceCard item={item} />
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            disabled
            className="inline-flex h-[52px] items-center rounded-full border-[1.5px] border-ink/20 px-6 font-display text-[14.5px] font-semibold tracking-[-0.01em] text-ink opacity-40"
          >
            You’re all caught up
          </button>
        </div>
      </div>
    </section>
  );
}
