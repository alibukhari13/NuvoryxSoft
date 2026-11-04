import { authorPhoto, resourceActions, resourceHref } from "@/data/resources";

function Icon({ children, className = "h-3.5 w-3.5" }) {
  return (
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
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function TypeIcon({ type }) {
  if (type === "Webinar") {
    return (
      <Icon className="h-3.5 w-3.5 text-forest">
        <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
      </Icon>
    );
  }
  if (type === "Podcast") {
    return (
      <Icon className="h-3.5 w-3.5 text-forest">
        <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
      </Icon>
    );
  }
  if (type === "News") {
    return (
      <Icon className="h-3.5 w-3.5 text-forest">
        <path d="M15 18h-5" />
        <path d="M18 14h-8" />
        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2" />
        <rect width="8" height="4" x="10" y="6" rx="1" />
      </Icon>
    );
  }
  return (
    <Icon className="h-3.5 w-3.5 text-forest">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </Icon>
  );
}

export function PaperCover({ title, width = "w-full" }) {
  const id = `cover-${width}-${title.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`;
  return (
    <div className={`relative aspect-[3/4] overflow-hidden rounded-[10px] bg-white p-5 shadow-lift ${width}`}>
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand/60 blur-2xl" />
      <svg viewBox="0 0 200 200" className="absolute -right-6 top-6 h-32 w-32" aria-hidden="true">
        <defs>
          <radialGradient id={id} cx="35%" cy="30%" r="80%">
            <stop offset="0%" stopColor="#C8FFD8" />
            <stop offset="40%" stopColor="#05CF45" />
            <stop offset="100%" stopColor="#1B3329" />
          </radialGradient>
          <filter id={`${id}-blur`}>
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>
        <path
          d="M100 10 C108 70 130 92 190 100 C130 108 108 130 100 190 C92 130 70 108 10 100 C70 92 92 70 100 10Z"
          fill="#05CF45"
          opacity="0.35"
          filter={`url(#${id}-blur)`}
          transform="translate(0 10)"
        />
        <path
          d="M100 10 C108 70 130 92 190 100 C130 108 108 130 100 190 C92 130 70 108 10 100 C70 92 92 70 100 10Z"
          fill={`url(#${id})`}
        />
      </svg>
      <div className="relative flex h-full flex-col">
        <div className="flex items-center gap-1.5 font-display text-[11px] font-extrabold tracking-tight">
          <svg viewBox="0 0 32 32" className="h-4 w-4" aria-hidden="true">
            <rect width="32" height="32" rx="9" fill="#05CF45" />
            <path d="M9 23V9l14 14V9" fill="none" stroke="#111" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          nuvoryx
        </div>
        <div className="mt-auto">
          <span className="rounded bg-brand/15 px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-widest text-forest">
            White paper
          </span>
          <div className="mt-2 font-display text-[14px] font-bold leading-tight text-ink">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
}

function Media({ item }) {
  if (item.type === "White paper") {
    return (
      <div className="grid aspect-[16/10] place-items-center bg-[radial-gradient(circle_at_50%_40%,rgba(5,207,69,0.4),#1B3329_70%)]">
        <PaperCover title={item.title.split(":")[0]} width="w-28" />
      </div>
    );
  }
  return (
    <div className="relative aspect-[16/10] overflow-hidden">
      <img
        alt=""
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        src={item.image}
      />
      <span className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[12px] font-bold text-ink backdrop-blur">
        <TypeIcon type={item.type} /> {item.type}
      </span>
      {item.type === "Webinar" || item.type === "Podcast" ? (
        <span className="absolute bottom-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-brand text-ink transition-transform group-hover:scale-110">
          <Icon className="h-4 w-4 fill-current">
            <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
          </Icon>
        </span>
      ) : null}
    </div>
  );
}

export default function ResourceCard({ item }) {
  return (
    <a href={resourceHref(item)} className="group block h-full">
      <div className="flex h-full flex-col overflow-hidden rounded-[22px] border border-line bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lift">
        {item.type === "White paper" ? (
          <div className="relative">
            <Media item={item} />
            <span className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[12px] font-bold text-ink backdrop-blur">
              <TypeIcon type={item.type} /> {item.type}
            </span>
          </div>
        ) : (
          <Media item={item} />
        )}
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center gap-3 text-[12.5px] font-semibold text-muted">
            <span className="flex items-center gap-1.5">
              <Icon>
                <path d="M8 2v3" />
                <path d="M16 2v3" />
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18" />
              </Icon>
              {item.date}
            </span>
            {item.read ? (
              <span className="flex items-center gap-1.5">
                <Icon>
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </Icon>
                {item.read}
              </span>
            ) : null}
          </div>
          <h3 className="mt-3 text-[18px] leading-snug">{item.title}</h3>
          <p className="mt-2 line-clamp-2 text-[14.5px] text-muted">{item.excerpt}</p>
          <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[14px] font-bold text-ink group-hover:text-forest">
            {resourceActions[item.type]}
            <Icon className="h-4 w-4 transition-transform group-hover:translate-x-1">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </Icon>
          </span>
        </div>
      </div>
    </a>
  );
}

export function FeaturedResource({ item }) {
  return (
    <a
      href={resourceHref(item)}
      className="group mb-10 grid overflow-hidden rounded-[28px] border border-line bg-white shadow-soft transition-shadow hover:shadow-lift lg:grid-cols-2"
    >
      <div className="relative min-h-[300px] overflow-hidden">
        {item.type === "White paper" ? (
          <div className="grid h-full place-items-center bg-[radial-gradient(circle_at_50%_40%,rgba(5,207,69,0.4),#1B3329_70%)]">
            <PaperCover title={item.title.split(":")[0]} width="w-44" />
          </div>
        ) : (
          <img
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            src={item.image}
          />
        )}
      </div>
      <div className="flex flex-col p-8 md:p-12">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center rounded-full bg-brand px-3 py-1 text-[12.5px] font-semibold text-ink">
            Latest
          </span>
          <span className="text-[13.5px] text-muted">{item.date}</span>
        </div>
        <h2 className="mt-5 text-[28px] leading-tight md:text-[36px]">{item.title}</h2>
        <p className="mt-4 text-[16px] text-muted">{item.excerpt}</p>
        <div className="mt-auto flex items-center gap-3 pt-8 text-[14px]">
          <img src={authorPhoto(item.slug)} alt="" className="h-10 w-10 rounded-full object-cover" />
          <div>
            <div className="font-bold">{item.author}</div>
            {item.read ? <div className="text-muted">{item.read}</div> : null}
          </div>
        </div>
      </div>
    </a>
  );
}
