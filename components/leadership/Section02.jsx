"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const leaders = [
  {
    name: "Ethan Brooks",
    role: "Co-founder & CEO",
    image: "/agency-assets/d7422bed27487716b559bb42b8b297972b5209268cdead958a64a38f19ae7c18.jpg",
    bio: "Ethan founded Nuvoryx in 2012 after a decade leading platform engineering at two high-growth fintechs. He sets company strategy and still reviews architecture docs on Sundays.",
  },
  {
    name: "Leila Haddad",
    role: "Chief AI Officer",
    image: "/agency-assets/64fc47639d5c3f087c78903c57faf4827168ba7fa8c8cd1e3e86bc6eb4c8f79d.jpg",
    bio: "Leila leads our AI practice and responsible AI board. Previously she ran applied ML at a global bank and holds a PhD in machine learning from ETH Zürich.",
  },
  {
    name: "Daniel Ortega",
    role: "Chief Technology Officer",
    image: "/agency-assets/c78fe39cfa6d3b8fe9ea80fec6107fd74c9d5f60a871f7a07abcfddfa241218c.jpg",
    bio: "Daniel oversees engineering standards across 1,400 engineers. He has shipped systems used by over 100 million people and is a frequent conference speaker on distributed systems.",
  },
  {
    name: "Hannah Clarke",
    role: "Chief Operating Officer",
    image: "/agency-assets/d324e7bacbf7f3fe92080d103f79351a05e37e74831daecf1f438c456a9acc10.jpg",
    bio: "Hannah runs delivery, quality and client success. She built our delivery framework and has a reputation for calm in a crisis.",
  },
  {
    name: "Marco Bianchi",
    role: "VP, Cloud & Infrastructure",
    image: "/agency-assets/089f20744645a15395b2f6e33ba4cb08e386584ed90835f47c6af3657d0c9d7a.jpg",
    bio: "Marco leads our cloud practice and FinOps offering. A former AWS solutions architect, he holds every professional-level cloud certification worth having.",
  },
  {
    name: "Aisha Rahman",
    role: "Chief People Officer",
    image: "/agency-assets/1bdedd80b1b9718c857f5c59926a6754b22af989a250fd1266137ada32e0ef6b.jpg",
    bio: "Aisha leads talent, culture and learning. Under her, engineer retention has stayed above 94% for five consecutive years.",
  },
  {
    name: "Tom Wexler",
    role: "Chief Financial Officer",
    image: "/agency-assets/fe53b1a2005b255a37da5724cb3fc6929ba59e73e719ee90c48f0eb0c81126db.jpg",
    bio: "Tom joined from a listed software company where he led two acquisitions. He keeps Nuvoryx profitable and growing.",
  },
  {
    name: "Yuki Tanaka",
    role: "VP, Design",
    image: "/agency-assets/beec6426c045f4398902c3cbb2bf59861c981673bf055b1e0a9a656fbaf29136.jpg",
    bio: "Yuki leads our design studio of 80 designers and researchers. Her teams have won a Webby and two Red Dot awards.",
  },
];

const socials = [
  {
    label: "LinkedIn",
    d: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4V21H3zM9.5 9.75h3.8v1.6h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.770 2.65 4.770 6.1V21h-4v-4.95c0-1.18-.02-2.7-1.65-2.7-1.65 0-1.9 1.29-1.9 2.62V21h-4z",
  },
  {
    label: "X",
    d: "M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.77zm-1.08 16.17h1.7L7.4 4.74H5.58z",
  },
  {
    label: "YouTube",
    d: "M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.75 15.02V8.98L15.5 12z",
  },
  {
    label: "Instagram",
    d: "M12 2.2c3.2 0 3.58 0 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58 0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92C2.17 15.58 2.16 15.2 2.16 12s0-3.58.07-4.85C2.38 3.92 3.9 2.380 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zm0 4.86a4.94 4.94 0 1 0 0 9.88 4.94 4.94 0 0 0 0-9.88zm0 8.15a3.21 3.21 0 1 1 0-6.42 3.21 3.21 0 0 1 0 6.42zm5.14-9.5a1.15 1.15 0 1 0 0 2.3 1.15 1.15 0 0 0 0-2.3z",
  },
];

export default function Section02() {
  const [leader, setLeader] = useState(null);

  useEffect(() => {
    if (!leader) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setLeader(null);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [leader]);

  return (
    <section className="relative bg-paper py-20 text-ink md:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {leaders.map((person, index) => (
            <div key={person.name} className="reveal in" style={{ transitionDelay: `${(index % 4) * 80}ms` }}>
              <button
                type="button"
                onClick={() => setLeader(person)}
                className="group block w-full text-left"
                aria-label={`Read bio of ${person.name}`}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-forest">
                  <img
                    alt={person.name}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                    src={person.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <span className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-brand px-3 py-1.5 text-[12.5px] font-bold text-ink opacity-0 transition-all group-hover:opacity-100">
                    Read bio
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </div>
                <div className="mt-4 font-display text-[18px] font-bold">{person.name}</div>
                <div className="text-[14.5px] text-muted">{person.role}</div>
              </button>
            </div>
          ))}
        </div>
      </div>
      {leader
        ? createPortal(
        <div
          className="fixed inset-0 z-[80] grid place-items-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Leader bio"
        >
          <div
            className="absolute inset-0 animate-fade-up bg-ink/60 backdrop-blur-sm"
            onClick={() => setLeader(null)}
          />
          <div
            data-lenis-prevent="true"
            className="relative max-h-[90vh] w-full max-w-3xl overflow-auto rounded-[28px] bg-white shadow-lift animate-scale-in"
          >
            <button
              type="button"
              onClick={() => setLeader(null)}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-paper hover:bg-ink hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
            <div className="grid md:grid-cols-[1fr_1.3fr]">
              <div className="relative h-full min-h-[320px]">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="absolute inset-0 h-full w-full object-cover md:rounded-l-[28px]"
                />
              </div>
              <div className="p-8 md:p-10">
                <span className="inline-flex items-center gap-2 font-mono text-[11.5px] font-medium uppercase tracking-[0.18em] text-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
                  {leader.role}
                </span>
                <h2 className="mt-4 text-[32px]">{leader.name}</h2>
                <p className="mt-5 text-[16px] text-muted">{leader.bio}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Board member", "Speaker", "Mentor"].map((tag) => (
                    <span key={tag} className="inline-flex items-center rounded-full bg-ink/5 px-3 py-1 text-[12.5px] font-semibold text-ink">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex gap-2">
                  {socials.map((item) => (
                    <a
                      key={item.label}
                      href="#"
                      aria-label={item.label}
                      onClick={(event) => event.preventDefault()}
                      className="grid h-10 w-10 place-items-center rounded-full bg-ink/5 text-ink transition-colors hover:bg-brand hover:text-ink"
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                        <path d={item.d} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body,
      ) : null}
    </section>
  );
}
