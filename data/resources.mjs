const photo = (id, width = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=75`;

export const portraits = [
  "photo-1614786269829-d24616faf56d",
  "photo-1614023342667-6f060e9d1e04",
  "photo-1604904612715-47bf9d9bc670",
  "photo-1642257859842-c95f9fa8121d",
  "photo-1582896911227-c966f6e7fb93",
  "photo-1559718062-361155fad299",
  "photo-1684262855364-f3ca7786c734",
  "photo-1791573454554-97062d350ab0",
  "photo-1781888681811-332968760c2a",
  "photo-1791573454618-67d47fca4dc8",
].map((id) => photo(id, 800));

export function authorPhoto(slug) {
  return portraits[slug.length % 8 + 1];
}

export const resourceRoutes = {
  Blog: "/blog",
  Webinar: "/webinars",
  Podcast: "/podcasts",
  "White paper": "/whitepapers",
  News: "/newsroom",
};

export const resourceLabels = {
  Blog: "Blog",
  Webinar: "Webinars",
  Podcast: "Podcasts",
  "White paper": "White papers & Ebooks",
  News: "Newsroom",
};

export const resourceActions = {
  Blog: "Read more",
  Webinar: "Watch now",
  Podcast: "Listen",
  "White paper": "Download",
  News: "Read more",
};

export const resources = [
  {
    slug: "ai-agents-in-production",
    type: "Blog",
    title:
      "AI agents in production: guardrails, evals and the boring bits that matter",
    excerpt:
      "What separates an impressive agent demo from one that runs your claims desk at 3am.",
    image: photo("photo-1677611998429-1baa4371456b"),
    date: "Oct 28, 2025",
    read: "9 min",
    author: "Daniel Ortega",
    topic: "AI",
  },
  {
    slug: "pilot-to-production",
    type: "Blog",
    title: "How enterprises can move past the AI pilot phase",
    excerpt:
      "Most AI pilots stall for organisational reasons, not technical ones. Here is how to unstick them.",
    image: photo("photo-1557804506-669a67965ba0"),
    date: "Oct 14, 2025",
    read: "7 min",
    author: "Leila Haddad",
    topic: "Strategy",
  },
  {
    slug: "finops-playbook",
    type: "Blog",
    title: "The FinOps playbook: cutting cloud spend 30% without slowing teams",
    excerpt:
      "Tagging, rightsizing and unit economics: the order of operations that actually works.",
    image: photo("photo-1558494949-ef010cbdcc31"),
    date: "Sep 30, 2025",
    read: "11 min",
    author: "Marco Bianchi",
    topic: "Cloud",
  },
  {
    slug: "legacy-modernization-patterns",
    type: "Blog",
    title: "Strangler, rehost or rebuild? Choosing your modernization pattern",
    excerpt:
      "A decision framework for legacy systems that can not afford a big-bang rewrite.",
    image: photo("photo-1515879218367-8466d910aaa4"),
    date: "Sep 12, 2025",
    read: "8 min",
    author: "Hannah Clarke",
    topic: "Engineering",
  },
  {
    slug: "rag-evaluation",
    type: "Blog",
    title: "Evaluating RAG systems: metrics that correlate with user trust",
    excerpt:
      "Faithfulness, groundedness and answer relevance, measured the right way.",
    image: photo("photo-1707430393809-784967fe6fee"),
    date: "Aug 21, 2025",
    read: "10 min",
    author: "Daniel Ortega",
    topic: "AI",
  },
  {
    slug: "modernizing-for-ai-era",
    type: "Webinar",
    title: "Modernizing legacy apps for the AI era",
    excerpt:
      "A live session with our CTO and AWS on making legacy estates AI-ready.",
    image: photo("photo-1556761175-b413da4baf72"),
    date: "Nov 20, 2025",
    author: "Ethan Brooks & AWS",
    topic: "Engineering",
  },
  {
    slug: "finops-for-ai-workloads",
    type: "Webinar",
    title: "FinOps for AI workloads: controlling GPU costs at scale",
    excerpt:
      "Practical tactics to forecast, govern and reduce AI infrastructure spend.",
    image: photo("photo-1606857521015-7f9fcf423740"),
    date: "Oct 09, 2025",
    author: "Marco Bianchi",
    topic: "Cloud",
  },
  {
    slug: "responsible-ai-governance",
    type: "Webinar",
    title: "Responsible AI governance that does not slow you down",
    excerpt:
      "Building review boards, model cards and risk tiers that teams embrace.",
    image: photo("photo-1598520106830-8c45c2035460"),
    date: "Sep 04, 2025",
    author: "Leila Haddad",
    topic: "AI",
  },
  {
    slug: "ep-42-agentic-enterprise",
    type: "Podcast",
    title:
      "The agentic enterprise: what changes when software acts on its own",
    excerpt: "Ep. 42 with the Head of AI at a global insurer.",
    image: photo("photo-1478737270239-2f02b77fc618"),
    date: "Oct 22, 2025",
    read: "48 min",
    author: "Beyond the Code",
    topic: "AI",
  },
  {
    slug: "ep-41-cto-playbook",
    type: "Podcast",
    title: "A first-90-days playbook for new CTOs",
    excerpt:
      "Ep. 41 with three CTOs on inheriting teams, debt and expectations.",
    image: photo("photo-1589903308904-1010c2294adc"),
    date: "Oct 08, 2025",
    read: "52 min",
    author: "Beyond the Code",
    topic: "Strategy",
  },
  {
    slug: "ep-40-security-by-default",
    type: "Podcast",
    title: "Security by default: shifting left without slowing down",
    excerpt: "Ep. 40 with a former bank CISO on secure engineering culture.",
    image: photo("photo-1660631228116-b3643559f611"),
    date: "Sep 24, 2025",
    read: "45 min",
    author: "Beyond the Code",
    topic: "Security",
  },
  {
    slug: "ai-adoption-2026",
    type: "White paper",
    title:
      "AI adoption in 2026: a practical framework for enterprise-scale impact",
    excerpt:
      "A 32-page framework covering use-case selection, operating model, governance and ROI.",
    image: photo("photo-1710438399422-2fca27686bcd"),
    date: "Oct 01, 2025",
    read: "32 pages",
    author: "Nuvoryx Research",
    topic: "AI",
  },
  {
    slug: "c-suite-digital-transformation",
    type: "White paper",
    title: "The C-suite's guide to mastering digital transformation",
    excerpt:
      "How boards and executive teams fund, sequence and measure transformation.",
    image: photo("photo-1689443111287-5c2e129ec756"),
    date: "Aug 15, 2025",
    read: "24 pages",
    author: "Nuvoryx Research",
    topic: "Strategy",
  },
  {
    slug: "cloud-cost-benchmark",
    type: "White paper",
    title: "Cloud cost benchmark report 2025",
    excerpt:
      "Data from 180 cloud estates on where spend goes and how leaders cut it.",
    image: photo("photo-1690321607822-669326f4e3cc"),
    date: "Jul 10, 2025",
    read: "28 pages",
    author: "Nuvoryx Research",
    topic: "Cloud",
  },
  {
    slug: "anthropic-partner-network",
    type: "News",
    title:
      "Nuvoryx joins Anthropic's Claude Partner Network as a Select Services Partner",
    excerpt:
      "Expanded access to Claude models and co-delivery for enterprise AI programmes.",
    image: photo("photo-1685871286419-58e4fc0de8e1"),
    date: "Oct 30, 2025",
    author: "Newsroom",
    topic: "Company",
  },
  {
    slug: "openai-select-partner",
    type: "News",
    title: "Nuvoryx named an OpenAI Select Partner",
    excerpt:
      "Recognition for production deployments of GPT-based solutions across regulated industries.",
    image: photo("photo-1616072775440-ca2ea7c7ce13"),
    date: "Sep 18, 2025",
    author: "Newsroom",
    topic: "Company",
  },
  {
    slug: "lisbon-hub-opening",
    type: "News",
    title: "Nuvoryx opens Lisbon engineering hub to serve European clients",
    excerpt: "The new hub will host 200 engineers by the end of 2026.",
    image: photo("photo-1523477593243-78bbf626fd3b"),
    date: "Aug 02, 2025",
    author: "Newsroom",
    topic: "Company",
  },
  {
    slug: "inc-5000-2025",
    type: "News",
    title:
      "Nuvoryx ranks on the Inc. 5000 list for the fourth consecutive year",
    excerpt:
      "Sustained growth driven by AI and cloud modernisation programmes.",
    image: photo("photo-1579445505461-acecf2596190"),
    date: "Jul 22, 2025",
    author: "Newsroom",
    topic: "Company",
  },
];

export function resourceHref(item) {
  return `${resourceRoutes[item.type]}/${item.slug}`;
}
