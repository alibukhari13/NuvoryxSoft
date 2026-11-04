import Link from "next/link";

function Arrow({ className = "h-3.5 w-3.5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function Badge({ children, tone = "green" }) {
  if (tone === "new") {
    return (
      <span className="rounded-md bg-brand/15 px-1.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-forest">
        {children}
      </span>
    );
  }
  const toneClass =
    tone === "amber"
      ? "bg-[#FFF2D8] text-[#9A6200]"
      : "bg-brand/15 text-forest";
  return (
    <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${toneClass}`}>
      {children}
    </span>
  );
}

function ClaudeMark() {
  return (
    <span className="inline-flex items-center gap-3 whitespace-nowrap font-display text-[15px] font-bold tracking-[-0.02em] text-ink">
      <svg
        viewBox="0 0 24 24"
        role="img"
        aria-label="Claude"
        className="aspect-square h-5 shrink-0"
        fill="#D97757"
      >
        <path d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z" />
      </svg>
      Claude
    </span>
  );
}

function OpenAIMark() {
  return (
    <span className="inline-flex items-center gap-3 whitespace-nowrap font-display text-[15px] font-bold tracking-[-0.02em] text-ink">
      <span
        role="img"
        aria-label="OpenAI"
        className="inline-flex h-5 shrink-0 items-center [&_svg]:h-full [&_svg]:w-auto [&_svg]:fill-ink"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 260">
          <path d="M239.184 106.203a64.72 64.72 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.72 64.72 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.67 64.67 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.77 64.77 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483m-97.56 136.338a48.4 48.4 0 0 1-31.105-11.255l1.535-.87l51.67-29.825a8.6 8.6 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601M37.158 197.93a48.35 48.35 0 0 1-5.781-32.589l1.534.921l51.722 29.826a8.34 8.34 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803M23.549 85.38a48.5 48.5 0 0 1 25.58-21.333v61.39a8.29 8.29 0 0 0 4.195 7.316l62.874 36.272l-21.845 12.636a.82.82 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405zm179.466 41.695l-63.08-36.63L161.73 77.86a.82.82 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.54 8.54 0 0 0-4.4-7.213m21.742-32.69l-1.535-.922l-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.72.72 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391zM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87l-51.67 29.825a8.6 8.6 0 0 0-4.246 7.367zm11.868-25.58L128.067 97.3l28.188 16.218v32.434l-28.086 16.218l-28.188-16.218z" />
        </svg>
      </span>
      OpenAI
    </span>
  );
}

function MenuLink({ href, title, description, badge, tone }) {
  return (
    <Link
      href={href}
      className="group flex gap-3 rounded-2xl p-3 transition-colors hover:bg-paper"
    >
      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-[2px] bg-ink/30 transition-colors group-hover:bg-brand" />
      <span>
        <span className="flex items-center gap-2 text-[15px] font-bold text-ink group-hover:text-forest">
          {title}
          {badge ? <Badge tone={tone}>{badge}</Badge> : null}
        </span>
        {description ? (
          <span className="mt-0.5 block text-[13.5px] leading-snug text-muted">
            {description}
          </span>
        ) : null}
      </span>
    </Link>
  );
}

function SpotlightLink({ href, title, cta, children }) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-4 rounded-2xl p-2 transition-colors hover:bg-white"
    >
      <div className="relative h-[92px] w-[136px] shrink-0 overflow-hidden rounded-xl bg-forest">
        {children}
      </div>
      <span>
        <span className="block font-display text-[15px] font-bold leading-tight tracking-[-0.02em] text-ink">
          {title}
        </span>
        <span className="mt-2 flex items-center gap-1 text-[13px] font-bold text-muted group-hover:text-forest">
          {cta} <Arrow className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </span>
    </Link>
  );
}

function BrandTile({ position, children }) {
  return (
    <div className={`absolute inset-0 grid place-items-center ${position}`}>
      <div className="rounded-md bg-white px-2.5 py-1.5">{children}</div>
    </div>
  );
}

const customers = [
  ["Case Studies", "Outcomes we have delivered", "/case-studies"],
  ["Testimonials", "In our clients’ own words", "/testimonials"],
  ["Client Logos", "Who we work with", "/testimonials?logos=1"],
];

const company = [
  ["About Us", "Who we are, our mission and how we make a difference", "/about"],
  ["AI-First Company", "Our approach to building intelligent, scalable solutions", "/ai-first", "New"],
  ["How We Work", "Our methodology for reliable, future-proof software", "/how-we-work"],
  ["Leadership", "The people steering Nuvoryx", "/leadership"],
  ["Global Presence", "Seven hubs across four continents", "/global-presence"],
  ["Our Partners / Alliances", "Microsoft, AWS, Google Cloud, OpenAI and more", "/partners"],
  ["ESG & Culture", "How we care for people and planet", "/esg"],
  ["Newsroom", "Announcements and press coverage", "/newsroom"],
];

const resources = [
  ["Webinars", "Led by Nuvoryx's research & advisory experts", "/webinars", "Popular"],
  ["White papers & Ebooks", "Research-backed guidance on emerging tech", "/whitepapers"],
  ["Podcasts", "Tech-driven dialogues with industry experts", "/podcasts"],
  ["Blogs", "Expert-driven articles on engineering and AI", "/blog"],
  ["Newsroom", "Updates on Nuvoryx and global tech insights", "/newsroom"],
];

export function CustomersMenu() {
  return (
    <div className="mx-auto grid max-w-[1440px] grid-cols-[1fr_480px]">
      <div className="nv-stagger grid grid-cols-3 content-start gap-4 p-10">
        {customers.map(([title, description, href]) => (
          <MenuLink key={title} href={href} title={title} description={description} />
        ))}
      </div>
      <div className="bg-paper p-8">
        <div className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
          Featured story
        </div>
        <Link
          href="/case-studies/medacore-clinical-copilot"
          className="group mt-4 flex gap-4"
        >
          <span className="h-24 w-36 shrink-0 overflow-hidden rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1758691462668-046fd85ceac9?auto=format&fit=crop&w=600&q=75"
              alt=""
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
            />
          </span>
          <span>
            <span className="font-display text-[15px] font-bold leading-tight">
              A clinical copilot that gives physicians 9 hours back every week
            </span>
            <span className="mt-2 flex items-center gap-1 text-[13px] font-bold text-muted group-hover:text-forest">
              Read the story <Arrow />
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
}

export function CompanyMenu() {
  return (
    <div className="mx-auto grid max-w-[1440px] grid-cols-[1fr_480px]">
      <div className="nv-stagger grid grid-cols-2 content-start gap-x-6 gap-y-1 p-10">
        {company.map(([title, description, href, badge]) => (
          <MenuLink
            key={title}
            href={href}
            title={title}
            description={description}
            badge={badge}
            tone={badge === "New" ? "new" : "green"}
          />
        ))}
      </div>
      <div className="bg-paper p-8">
        <div className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
          Featured
        </div>
        <div className="mt-4 flex flex-col gap-3">
          <SpotlightLink
            href="/newsroom/anthropic-partner-network"
            title="Nuvoryx joins Anthropic's Claude Partner Network"
            cta="Read the news"
          >
            <BrandTile position="bg-[radial-gradient(circle_at_80%_20%,rgba(5,207,69,0.5),transparent_60%)]">
              <ClaudeMark />
            </BrandTile>
          </SpotlightLink>
          <SpotlightLink
            href="/newsroom/openai-select-partner"
            title="Nuvoryx named an OpenAI Select Partner"
            cta="Read the news"
          >
            <BrandTile position="bg-[radial-gradient(circle_at_20%_80%,rgba(5,207,69,0.5),transparent_60%)]">
              <OpenAIMark />
            </BrandTile>
          </SpotlightLink>
        </div>
      </div>
    </div>
  );
}

export function ResourcesMenu() {
  return (
    <div className="mx-auto grid max-w-[1440px] grid-cols-[1fr_480px]">
      <div className="flex flex-col p-10">
        <div className="nv-stagger grid grid-cols-2 gap-x-6 gap-y-1">
          {resources.map(([title, description, href, badge]) => (
            <MenuLink
              key={title}
              href={href}
              title={title}
              description={description}
              badge={badge}
              tone={badge === "Popular" ? "amber" : "green"}
            />
          ))}
        </div>
        <Link
          href="/resources"
          className="group relative mt-6 flex items-center justify-between overflow-hidden rounded-[18px] bg-gradient-to-r from-forest to-ink px-7 py-6 text-white"
        >
          <span className="absolute -top-16 -right-10 h-48 w-48 rounded-full bg-brand/30 blur-3xl" />
          <span className="relative">
            <span className="block font-display text-[17px] font-bold">Resource Center</span>
            <span className="text-[14px] text-white/65">
              A collection of every Nuvoryx resource
            </span>
          </span>
          <Arrow className="relative h-5 w-5 text-brand transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
      <div className="bg-paper p-8">
        <div className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
          Featured
        </div>
        <Link href="/whitepapers/ai-adoption-2026" className="group mt-4 block">
          <div className="grid aspect-[16/9] place-items-center overflow-hidden rounded-[18px] bg-[radial-gradient(circle_at_50%_40%,rgba(5,207,69,0.35),#1B3329_70%)]">
            <div className="relative aspect-[3/4] w-32 overflow-hidden rounded-[10px] bg-white p-5 shadow-lift transition-transform duration-500 group-hover:-rotate-2 group-hover:scale-105">
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-brand/60 blur-2xl" />
              <svg viewBox="0 0 200 200" className="absolute top-6 -right-6 h-32 w-32" aria-hidden="true">
                <path
                  d="M100 10 C108 70 130 92 190 100 C130 108 108 130 100 190 C92 130 70 108 10 100 C70 92 92 70 100 10Z"
                  fill="#05CF45"
                />
              </svg>
              <div className="relative flex h-full flex-col">
                <div className="flex items-center gap-1.5 font-display text-[11px] font-extrabold tracking-tight text-ink">
                  <svg viewBox="0 0 32 32" className="h-4 w-4" aria-hidden="true">
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
                <div className="relative mt-auto">
                  <span className="rounded bg-brand/15 px-1.5 py-0.5 font-mono text-[8px] tracking-widest text-forest uppercase">
                    White paper
                  </span>
                  <div className="mt-2 font-display text-[14px] font-bold leading-tight text-ink">
                    AI Adoption in 2026
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span className="mt-4 block font-display text-[16px] font-bold leading-snug tracking-[-0.02em]">
            AI adoption in 2026: a practical framework for enterprise-scale impact
          </span>
          <span className="mt-2 flex items-center gap-1 text-[13.5px] font-bold text-muted transition-colors group-hover:text-forest">
            Get the white paper
            <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </Link>
      </div>
    </div>
  );
}

const menus = {
  Customers: CustomersMenu,
  Company: CompanyMenu,
  Resources: ResourcesMenu,
};

export default function DropdownMenus({ group }) {
  const Menu = menus[group];
  if (!Menu) return null;
  return <Menu key={group} />;
}
