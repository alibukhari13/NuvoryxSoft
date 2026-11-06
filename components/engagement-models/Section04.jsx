"use client";

import { useState } from "react";

export default function Section04() {
  const [teamSize, setTeamSize] = useState(5);
  const [months, setMonths] = useState(6);
  const investment = teamSize * months * 6200;

  return (
    <section className="bg-ink text-white py-20 md:py-28 lg:py-32 relative overflow-hidden">
      <div className="absolute -right-20 top-20 h-[400px] w-[400px] rounded-full bg-brand/15 blur-[120px]"></div>
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8 relative">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <span className="inline-flex items-center gap-2 font-mono text-[11.5px] font-medium uppercase tracking-[0.18em] text-white/60">
              <span
                className="h-1.5 w-1.5 rounded-full bg-brand"
                aria-hidden="true"
              ></span>
              How we estimate
            </span>
            <h2 className="mt-4 text-[34px] sm:text-[44px]">
              Estimates you can take to your CFO.
            </h2>
            <div className="mt-8 flex flex-col gap-4">
              <div className="flex gap-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand font-display text-[13px] font-bold text-ink">
                  1
                </span>
                <div>
                  <div className="font-bold">Understand</div>
                  <div className="text-[15px] text-white/60">
                    A 45-minute call to understand goals, constraints and
                    timelines.
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand font-display text-[13px] font-bold text-ink">
                  2
                </span>
                <div>
                  <div className="font-bold">Decompose</div>
                  <div className="text-[15px] text-white/60">
                    We break scope into epics and estimate each with three-point
                    ranges.
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand font-display text-[13px] font-bold text-ink">
                  3
                </span>
                <div>
                  <div className="font-bold">Validate</div>
                  <div className="text-[15px] text-white/60">
                    A senior architect reviews risk, dependencies and team
                    shape.
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand font-display text-[13px] font-bold text-ink">
                  4
                </span>
                <div>
                  <div className="font-bold">Propose</div>
                  <div className="text-[15px] text-white/60">
                    A written proposal with options, timeline and fixed or
                    capped budget.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-[28px] bg-white p-8 text-ink md:p-10">
            <div className="flex items-center gap-3">
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
                className="lucide lucide-calculator h-6 w-6 text-forest"
                aria-hidden="true"
              >
                <rect width="16" height="20" x="4" y="2" rx="2"></rect>
                <line x1="8" x2="16" y1="6" y2="6"></line>
                <line x1="16" x2="16" y1="14" y2="18"></line>
                <path d="M16 10h.01"></path>
                <path d="M12 10h.01"></path>
                <path d="M8 10h.01"></path>
                <path d="M12 14h.01"></path>
                <path d="M8 14h.01"></path>
                <path d="M12 18h.01"></path>
                <path d="M8 18h.01"></path>
              </svg>
              <h3 className="text-[22px]">Dedicated team estimator</h3>
            </div>
            <div className="mt-8 flex flex-col gap-8">
              <label className="block">
                <div className="flex justify-between text-[14px] font-bold">
                  Team size{" "}
                  <span className="text-forest">{teamSize} people</span>
                </div>
                <input
                  min="2"
                  max="25"
                  className="mt-3 w-full accent-[#05CF45]"
                  type="range"
                  value={teamSize}
                  onChange={(event) => setTeamSize(Number(event.target.value))}
                />
              </label>
              <label className="block">
                <div className="flex justify-between text-[14px] font-bold">
                  Duration <span className="text-forest">{months} months</span>
                </div>
                <input
                  min="1"
                  max="24"
                  className="mt-3 w-full accent-[#05CF45]"
                  type="range"
                  value={months}
                  onChange={(event) => setMonths(Number(event.target.value))}
                />
              </label>
            </div>
            <div className="mt-8 rounded-2xl bg-paper p-6">
              <div className="text-[13px] font-semibold uppercase tracking-[0.1em] text-muted">
                Indicative investment
              </div>
              <div className="mt-2 font-display text-[40px] font-bold tracking-[-0.03em]">
                ${investment.toLocaleString("en-US")}
              </div>
              <div className="text-[13.5px] text-muted">
                Based on a blended rate. Final pricing depends on seniority mix
                and location.
              </div>
            </div>
            <a
              href="/book-consultation"
              className="group/btn relative isolate items-center overflow-hidden rounded-full font-display font-semibold tracking-[-0.01em] whitespace-nowrap select-none transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-40 aria-disabled:pointer-events-none aria-disabled:opacity-40 inline-flex bg-brand text-ink shadow-[0_12px_32px_-14px_rgba(5,207,69,0.75)] hover:shadow-[0_18px_44px_-12px_rgba(5,207,69,0.95)] h-[52px] text-[14.5px] pl-6 pr-[5px] gap-4 mt-6 w-full"
            >
              <span
                aria-hidden="true"
                className="absolute -z-10 aspect-square rounded-full transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] top-[5px] bottom-[5px] right-[5px] bg-forest scale-100 group-hover/btn:scale-[26]"
              ></span>
              <span className="relative inline-flex items-center gap-2 transition-colors duration-300 group-hover/btn:text-white mr-auto">
                Get an exact quote
              </span>
              <span className="relative grid shrink-0 place-items-center overflow-hidden rounded-full h-[42px] w-[42px] bg-forest text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right absolute transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-x-[220%] h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right absolute -translate-x-[220%] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-x-0 h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
