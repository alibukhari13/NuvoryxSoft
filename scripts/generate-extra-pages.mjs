import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const pagesRoot = path.join(root, "pages");
const componentsRoot = path.join(root, "components");
const templates = {
  ArticlePage: "@/components/templates/ArticlePage",
  CaseStudyPage: "@/components/templates/CaseStudyPage",
  EngagementModelsPage: "@/components/templates/EngagementModelsPage",
  JobDetailPage: "@/components/templates/JobDetailPage",
  LegalPage: "@/components/templates/LegalPage",
  ListingPage: "@/components/templates/ListingPage",
  MarketingPage: "@/components/templates/MarketingPage",
  PartnerPage: "@/components/templates/PartnerPage",
  SearchPage: "@/components/templates/SearchPage",
  StatusPage: "@/components/templates/StatusPage",
};
const routes = [];
const article = (
  title,
  eyebrow,
  date,
  readTime,
  description,
  paragraphs,
  pullQuote,
) => ({ title, eyebrow, date, readTime, description, paragraphs, pullQuote });

routes.push({
  route: "blog",
  template: "ListingPage",
  page: {
    title: "Blog",
    headline: "Ideas for building what’s next.",
    eyebrow: "INSIGHTS & ARTICLES",
    description:
      "Practical thinking on AI, product engineering, cloud and the teams bringing it all together.",
    filterLabel: "Browse insights",
    filters: ["All", "AI & Data", "Engineering", "Cloud", "Leadership"],
    itemLabel: "ARTICLE",
    items: [
      {
        title:
          "AI agents in production: guardrails, evals and the boring bits that matter",
        description:
          "What separates an impressive agent demo from one that runs your claims desk at 3am.",
        eyebrow: "AI & DATA · OCT 28, 2025 · 9 MIN",
        href: "/blog/ai-agents-in-production",
        action: "Read article",
      },
      {
        title:
          "The FinOps playbook: cutting cloud spend 30% without slowing teams",
        description:
          "Tagging, rightsizing and unit economics: the order of operations that actually works.",
        eyebrow: "CLOUD · SEP 30, 2025 · 11 MIN",
        href: "/blog/finops-playbook",
        action: "Read article",
      },
      {
        title: "Legacy modernization patterns that keep delivery moving",
        description:
          "A practical guide to incremental modernization, service boundaries and safe migration.",
        href: "/blog/legacy-modernization-patterns",
        action: "Read article",
      },
      {
        title: "From pilot to production: an operating model for enterprise AI",
        description:
          "Move promising AI experiments into secure, measurable products teams can run.",
        href: "/blog/pilot-to-production",
        action: "Read article",
      },
      {
        title: "RAG evaluation: measure retrieval quality before users do",
        description:
          "Build a repeatable evaluation loop for the quality, safety and freshness of RAG systems.",
        href: "/blog/rag-evaluation",
        action: "Read article",
      },
    ],
  },
});

routes.push({
  route: "blog/ai-agents-in-production",
  template: "ArticlePage",
  page: article(
    "AI agents in production: guardrails, evals and the boring bits that matter",
    "AI & DATA",
    "Oct 28, 2025",
    "9 min read",
    "What separates an impressive agent demo from one that runs your claims desk at 3am.",
    [
      "A useful agent does more than produce a convincing answer. In production it must know what it can do, when to ask for help and how to leave a reliable audit trail.",
      "Start with a narrow workflow and explicit permissions. Define the tools the agent may call, the records it may access and the decisions that must stay with a person. Keep those boundaries visible to the team operating the system.",
      "Evaluation needs to cover the complete workflow: retrieval, tool selection, action quality, latency and safe failure. A small set of representative cases, reviewed continuously, catches regressions before they reach customers.",
      "Finally, instrument every step. Track successful completion, hand-offs, retries, cost and user corrections. Those signals help teams improve the product without widening autonomy faster than trust.",
    ],
    "A dependable agent is a product with clear boundaries, evaluation and an owner.",
  ),
});
routes.push({
  route: "blog/finops-playbook",
  template: "ArticlePage",
  page: article(
    "The FinOps playbook: cutting cloud spend 30% without slowing teams",
    "CLOUD & INFRASTRUCTURE",
    "Sep 30, 2025",
    "11 min read",
    "Tagging, rightsizing and unit economics: the order of operations that actually works.",
    [
      "Cloud cost optimisation works best when engineering teams can connect infrastructure choices to customer and product outcomes. Begin with a shared view of spend, ownership and the workloads behind each line item.",
      "Reliable allocation tags and account boundaries make the bill actionable. Then look at utilisation, idle resources, storage lifecycle, commitments and the places where architecture creates avoidable traffic.",
      "Rightsizing is a continuous engineering practice. Put cost signals into team reviews, agree service-level guardrails and give teams room to test changes safely.",
      "The strongest FinOps programmes measure unit economics as well as total spend. Cost per transaction, inference or active customer helps teams make trade-offs without slowing delivery.",
    ],
    "Good FinOps makes the cost of a product decision visible while there is still time to change it.",
  ),
});
routes.push({
  route: "blog/legacy-modernization-patterns",
  template: "ArticlePage",
  page: article(
    "Legacy modernization patterns that keep delivery moving",
    "ENGINEERING",
    "Sep 12, 2025",
    "8 min read",
    "A practical guide to incremental modernization, service boundaries and safe migration.",
    [
      "Modernization becomes manageable when teams replace one capability at a time and keep the product available throughout the change.",
      "Map the business capability, data ownership and operational dependencies before choosing a pattern. A strangler approach can move a well-bounded workflow behind a new interface while the rest of the application continues to run.",
      "Use automated tests, observability and reversible releases as part of the migration plan. They give teams evidence that a new path behaves correctly under real workloads.",
      "Set a measure for each stage, such as change lead time, incident rate or infrastructure cost. Those measures show whether the modernization is helping the business.",
    ],
    "Make the next safe change small enough to learn from and meaningful enough to matter.",
  ),
});
routes.push({
  route: "blog/pilot-to-production",
  template: "ArticlePage",
  page: article(
    "From pilot to production: an operating model for enterprise AI",
    "AI & DATA",
    "Aug 26, 2025",
    "10 min read",
    "Move promising AI experiments into secure, measurable products teams can run.",
    [
      "A promising pilot needs a product owner, a real user workflow and a production environment before it can create durable value.",
      "Treat data access, privacy, evaluation and support as first-class design work. Agree how people will review outputs and what the system should do when it is uncertain.",
      "Build the operating model alongside the software: named owners, model monitoring, release gates, incident handling and a plan for regular evaluation.",
      "Roll out in stages and compare results with a baseline. Adoption, completion quality and operating cost give stakeholders a clearer view than a demo alone.",
    ],
    "A pilot becomes a product when a team can support it, measure it and improve it.",
  ),
});
routes.push({
  route: "blog/rag-evaluation",
  template: "ArticlePage",
  page: article(
    "RAG evaluation: measure retrieval quality before users do",
    "AI & DATA",
    "Aug 08, 2025",
    "7 min read",
    "Build a repeatable evaluation loop for the quality, safety and freshness of RAG systems.",
    [
      "Retrieval quality is often the hidden reason a RAG answer is incomplete. Evaluate the retrieved context separately from the final response so the team can see where errors begin.",
      "Create a representative set of questions with expected evidence. Measure whether the right sources appear near the top, whether answers cite those sources and whether the system correctly declines unsupported questions.",
      "Keep the evaluation set versioned with the content and retrieval configuration. That lets teams compare chunking, ranking, filters and model changes over time.",
      "Pair automated metrics with human review for sensitive or ambiguous cases. The result is a feedback loop that improves trust as the knowledge base changes.",
    ],
    "Measure what the system retrieved before judging what it said.",
  ),
});

const roles = [
  [
    "ai-research-intern",
    "AI Research Intern",
    "AI Research",
    "Lahore / Remote",
    "Internship",
    "Help evaluate applied AI workflows and build prototypes with our research and product teams.",
  ],
  [
    "cloud-architect-aws",
    "Cloud Architect, AWS",
    "Cloud & Infrastructure",
    "Remote · Americas / Europe",
    "Full-time",
    "Design resilient AWS platforms and guide client teams through secure, cost-aware cloud transformation.",
  ],
  [
    "data-engineer-contract",
    "Data Engineer (Contract)",
    "AI & Data",
    "Remote",
    "Contract",
    "Build reliable data pipelines and quality checks that make analytics and AI workloads production-ready.",
  ],
  [
    "devops-engineer",
    "DevOps Engineer",
    "Platform Engineering",
    "Lahore / Remote",
    "Full-time",
    "Improve developer experience with dependable CI/CD, infrastructure as code and observability.",
  ],
  [
    "engagement-manager",
    "Engagement Manager",
    "Delivery",
    "Remote · Americas / Europe",
    "Full-time",
    "Build strong client partnerships and keep cross-functional delivery focused on measurable outcomes.",
  ],
  [
    "product-designer",
    "Product Designer",
    "Digital Experience",
    "Remote",
    "Full-time",
    "Turn complex workflows into accessible product experiences through research, prototyping and collaboration.",
  ],
  [
    "qa-automation-lead",
    "QA Automation Lead",
    "Engineering Quality",
    "Lahore / Remote",
    "Full-time",
    "Lead automation strategy and help product teams ship reliable software with confidence.",
  ],
  [
    "security-engineer",
    "Security Engineer",
    "Cybersecurity",
    "Remote",
    "Full-time",
    "Embed secure engineering practices into cloud platforms, applications and delivery workflows.",
  ],
  [
    "senior-ml-engineer",
    "Senior Machine Learning Engineer",
    "AI & Data",
    "Lahore / Remote",
    "Full-time",
    "Build, evaluate and operate machine-learning systems that solve practical customer problems.",
  ],
  [
    "staff-frontend-engineer",
    "Staff Frontend Engineer",
    "Engineering",
    "Remote · Americas / Europe",
    "Full-time",
    "Shape accessible frontend architecture and mentor teams delivering responsive web products.",
  ],
];
const responsibility = [
  "Partner with product, design and engineering to define outcomes and a clear delivery plan.",
  "Build maintainable solutions with automated checks, documentation and observability.",
  "Share progress openly and help the wider team improve its craft.",
];
const qualifications = [
  "Experience shipping production work in your discipline.",
  "Clear communication and a collaborative approach to solving problems.",
  "Care for quality, security and the people who use what you build.",
];
for (const [slug, title, team, location, type, description] of roles) {
  routes.push({
    route: `careers/${slug}`,
    template: "JobDetailPage",
    page: {
      title,
      team,
      location,
      type,
      level:
        title.startsWith("Senior") ||
        title.startsWith("Staff") ||
        title.startsWith("Lead")
          ? "Senior"
          : "Mid-level",
      description,
      about: `${description} You will work with a distributed group of engineers, designers and product leaders on meaningful client challenges.`,
      responsibilities: responsibility,
      qualifications,
    },
  });
}

routes.push({
  route: "case-studies/halcyon-security-soc2",
  template: "CaseStudyPage",
  page: {
    client: "Halcyon",
    industry: "SaaS & Startups",
    service: "Cybersecurity",
    title: "SOC 2 Type II in 14 weeks with a zero-trust foundation",
    summary:
      "A growing SaaS company needed to meet enterprise security requirements without pausing its product roadmap.",
    metrics: [
      ["14 weeks", "to SOC 2 Type II readiness"],
      ["0", "critical audit findings"],
      ["100%", "engineering control coverage"],
    ],
    challenge:
      "Halcyon was winning larger customers, but its security processes and evidence collection had not kept pace with growth. The team needed a practical route to compliance that could fit its existing release cadence.",
    approach:
      "We mapped the control environment, strengthened identity and cloud safeguards, automated evidence collection and paired with engineering to make secure defaults part of delivery.",
    outcomes: [
      {
        title: "Audit-ready controls",
        description:
          "A clear evidence trail and ownership model reduced last-minute audit work.",
      },
      {
        title: "Safer releases",
        description:
          "Security checks became part of everyday engineering workflows.",
      },
    ],
    quote:
      "The plan made security something our engineers could act on every sprint.",
    author: "Halcyon Security Team",
    role: "SaaS platform",
  },
});
routes.push({
  route: "case-studies/vectra-predictive-maintenance",
  template: "CaseStudyPage",
  page: {
    client: "Vectra Manufacturing",
    industry: "Manufacturing",
    service: "AI & Data Innovation",
    title: "Predictive maintenance cuts unplanned downtime by 61%",
    summary:
      "An industrial manufacturer used equipment data and machine learning to spot failures earlier and plan maintenance with less disruption.",
    metrics: [
      ["61%", "fewer unplanned stoppages"],
      ["28%", "lower maintenance cost"],
      ["6 plants", "connected to the platform"],
    ],
    challenge:
      "Maintenance teams relied on fixed schedules and reactive alerts across several plants. They needed a dependable way to prioritise interventions without overwhelming operators with false alarms.",
    approach:
      "We connected historian and sensor data, created condition features with plant specialists and delivered risk-ranked alerts integrated into existing maintenance workflows.",
    outcomes: [
      {
        title: "Earlier intervention",
        description:
          "Operations teams receive interpretable indicators before critical equipment fails.",
      },
      {
        title: "A shared view",
        description:
          "Plant and central teams can compare asset health and maintenance outcomes.",
      },
    ],
    quote:
      "We can now plan around the signal instead of waiting for the next breakdown.",
    author: "Operations Director",
    role: "Vectra Manufacturing",
  },
});

routes.push({
  route: "cookies",
  template: "LegalPage",
  page: {
    title: "Cookie Policy",
    eyebrow: "PRIVACY & COOKIES",
    updated: "November 2025",
    description:
      "How Nuvoryx uses cookies and similar technologies on this website.",
    sections: [
      [
        "What cookies are",
        "Cookies are small files stored by your browser. They help a website remember preferences, understand aggregate usage and support features you choose to use.",
      ],
      [
        "How we use them",
        "We use essential storage to keep the site working and, where enabled, analytics technologies to understand performance. Optional technologies should only run according to your choices and applicable requirements.",
      ],
      [
        "Your choices",
        "You can manage cookies through your browser settings. Blocking essential storage may affect some site features. You can revisit your preferences when a consent control is available.",
      ],
      [
        "Questions",
        "For questions about privacy or this policy, contact privacy@nuvoryx.com.",
      ],
    ].map(([title, body]) => ({ title, body })),
  },
});
routes.push({
  route: "maintenance",
  template: "StatusPage",
  page: {
    title: "We’ll be back shortly.",
    eyebrow: "SCHEDULED MAINTENANCE",
    description:
      "This page is temporarily unavailable while we make improvements. Please check back soon or contact our team if you need help.",
    primary: "Back to Nuvoryx",
    primaryHref: "/",
    secondary: "Contact us",
    secondaryHref: "/contact",
  },
});
routes.push({
  route: "newsletter-confirmed",
  template: "StatusPage",
  page: {
    title: "You’re on the list.",
    eyebrow: "SUBSCRIPTION CONFIRMED",
    description:
      "Thanks for subscribing. We’ll send one thoughtful update each month on AI, engineering and cloud.",
    primary: "Explore resources",
    primaryHref: "/resources",
    secondary: "Visit the blog",
    secondaryHref: "/blog",
  },
});
routes.push({
  route: "newsroom/inc-5000-2025",
  template: "ArticlePage",
  page: article(
    "Nuvoryx named to the Inc. 5000 list for 2025",
    "NEWSROOM",
    "Aug 12, 2025",
    "3 min read",
    "The recognition reflects sustained growth as Nuvoryx helps ambitious companies engineer intelligent software.",
    [
      "Nuvoryx has been recognised on the Inc. 5000 list of fastest-growing private companies in the United States.",
      "The milestone reflects the work of our teams and clients across product engineering, cloud and applied AI. We remain focused on building durable partnerships and software that creates measurable value.",
      "We are grateful to the people who have trusted us with their most important technology programmes and to the teams who make that work possible.",
    ],
    "Growth matters most when it helps teams deliver better outcomes for the people they serve.",
  ),
});
routes.push({
  route: "newsroom/lisbon-hub-opening",
  template: "ArticlePage",
  page: article(
    "Nuvoryx opens a new delivery hub in Lisbon",
    "COMPANY NEWS",
    "Jul 17, 2025",
    "3 min read",
    "The new Lisbon hub expands our European presence and creates closer collaboration across client teams.",
    [
      "Nuvoryx has opened a new delivery hub in Lisbon, Portugal, adding to its distributed network of engineering and client teams.",
      "The hub will support collaboration with clients across Europe and bring engineers, designers and delivery specialists together around shared product goals.",
      "Lisbon joins our existing locations in San Francisco, New York, Dubai, Lahore and Singapore.",
    ],
    "A strong local team helps us stay close to the people and products we support.",
  ),
});

const partnerInfo = {
  anthropic: [
    "Anthropic",
    "A partner network for teams building with Claude models and responsible AI practices.",
    "A",
  ],
  aws: [
    "AWS",
    "Cloud architecture and modernisation delivered by an AWS Advanced Tier Services Partner.",
    "AWS",
  ],
  databricks: [
    "Databricks",
    "Data engineering and AI platforms that help teams turn governed data into production outcomes.",
    "D",
  ],
  "google-cloud": [
    "Google Cloud",
    "Cloud and AI engineering built with Google Cloud Premier Partner capabilities.",
    "G",
  ],
  microsoft: [
    "Microsoft",
    "Enterprise cloud and AI solutions across Azure, Microsoft 365 and the Power Platform.",
    "M",
  ],
  openai: [
    "OpenAI",
    "Product engineering and advisory support through the OpenAI Select Partner programme.",
    "O",
  ],
  salesforce: [
    "Salesforce",
    "Connected customer experiences built with Salesforce Consulting Partner expertise.",
    "S",
  ],
  snowflake: [
    "Snowflake",
    "Modern data platforms and analytics built for governed, reliable access to business data.",
    "S",
  ],
};
for (const [slug, [name, description, mark]] of Object.entries(partnerInfo))
  routes.push({
    route: `partners/${slug}`,
    template: "PartnerPage",
    page: {
      name,
      description,
      mark,
      capabilities: [
        {
          title: "Architecture",
          description: `Design secure, scalable ${name} foundations aligned to business and technical goals.`,
        },
        {
          title: "Engineering",
          description: `Build product capabilities and integrations with experienced ${name} specialists.`,
        },
        {
          title: "Operate",
          description: `Improve reliability, governance and cost as your ${name} footprint grows.`,
        },
      ],
      proofs: [
        `Certified practitioners across ${name} technologies`,
        "Outcome-led architecture and delivery",
        "Knowledge transfer built into every engagement",
        "Security and governance designed into the solution",
      ],
    },
  });

routes.push({
  route: "podcasts",
  template: "ListingPage",
  page: {
    title: "Podcasts",
    headline: "Conversations that go beyond the code.",
    eyebrow: "BEYOND THE CODE PODCAST",
    description:
      "Candid talks with CTOs, AI leaders and founders on what it really takes to ship.",
    itemLabel: "EPISODE",
    items: [
      {
        title:
          "The agentic enterprise: what changes when software acts on its own",
        description:
          "Episode 42 with the Head of AI at a global insurer. A practical conversation about governance, trust and operational change.",
        eyebrow: "EP. 42 · OCT 22, 2025 · 48 MIN",
        href: "/podcasts/ep-42-agentic-enterprise",
        action: "Listen to episode",
      },
      {
        title: "Security by default: building products people can trust",
        description:
          "Episode 40 on security culture, secure delivery and designing for resilience.",
        eyebrow: "EP. 40 · SEP 18, 2025 · 41 MIN",
        href: "/podcasts/ep-40-security-by-default",
        action: "Listen to episode",
      },
      {
        title: "The CTO playbook for scaling product teams",
        description:
          "Episode 41 on the systems and habits that help engineering teams grow without losing focus.",
        eyebrow: "EP. 41 · OCT 02, 2025 · 45 MIN",
        href: "/podcasts/ep-41-cto-playbook",
        action: "Listen to episode",
      },
    ],
  },
});
routes.push({
  route: "podcasts/ep-40-security-by-default",
  template: "ArticlePage",
  page: article(
    "Security by default: building products people can trust",
    "BEYOND THE CODE · EPISODE 40",
    "Sep 18, 2025",
    "41 min listen",
    "A conversation about security culture, secure delivery and designing for resilience.",
    [
      "Security works best when it is part of how teams plan, build and operate software. In this episode, our guests discuss practical habits that make secure choices easier for product teams.",
      "We cover threat modelling, useful developer guardrails and how security specialists can partner with engineers without becoming a release bottleneck.",
      "The conversation also looks at how teams can learn from incidents and turn those lessons into stronger defaults.",
    ],
    "Trust is earned through the small decisions a product team makes every day.",
  ),
});
routes.push({
  route: "podcasts/ep-41-cto-playbook",
  template: "ArticlePage",
  page: article(
    "The CTO playbook for scaling product teams",
    "BEYOND THE CODE · EPISODE 41",
    "Oct 02, 2025",
    "45 min listen",
    "A conversation about the systems and habits that help engineering teams grow without losing focus.",
    [
      "Scaling a product team changes the work of a CTO. More people, more services and more stakeholders make clarity and strong technical leadership essential.",
      "In this episode we discuss how to keep architecture decisions close to product goals, set useful engineering measures and help teams own outcomes.",
      "We also talk about hiring, team boundaries and the operating routines that protect time for deep work.",
    ],
    "The best operating model gives teams context, ownership and room to do focused work.",
  ),
});
routes.push({
  route: "podcasts/ep-42-agentic-enterprise",
  template: "ArticlePage",
  page: article(
    "The agentic enterprise: what changes when software acts on its own",
    "BEYOND THE CODE · EPISODE 42",
    "Oct 22, 2025",
    "48 min listen",
    "Episode 42 with the Head of AI at a global insurer on deploying governed digital agents.",
    [
      "What changes when software can plan, call tools and complete work across business systems? In this episode we look at the practical operating questions behind agentic workflows.",
      "Our guest shares lessons about governance, clear permissions, evaluation and keeping people in control of consequential decisions.",
      "We discuss where agents can reduce repetitive effort today, what teams should measure and how to build trust before expanding automation.",
    ],
    "Start with a workflow people understand, then expand only when the evidence supports it.",
  ),
});

routes.push({
  route: "search",
  template: "SearchPage",
  page: {
    title: "Search",
    items: [
      {
        title: "AI & Data Innovation",
        description: "Production-grade AI, analytics and data platforms.",
        eyebrow: "SERVICE",
        href: "/services/ai-data-innovation",
      },
      {
        title: "Cloud & Infrastructure",
        description: "Resilient, cost-efficient cloud platforms.",
        eyebrow: "SERVICE",
        href: "/services/cloud-infrastructure",
      },
      {
        title: "Healthcare",
        description:
          "Interoperable clinical platforms and AI that give clinicians time back.",
        eyebrow: "INDUSTRY",
        href: "/industries/healthcare",
      },
      {
        title: "Fintech & Banking",
        description: "Real-time payments, fraud models and digital banking.",
        eyebrow: "INDUSTRY",
        href: "/industries/fintech-banking",
      },
      {
        title: "AI agents in production",
        description: "Guardrails, evals and the details that matter.",
        eyebrow: "INSIGHT",
        href: "/blog/ai-agents-in-production",
      },
      {
        title: "Careers",
        description: "Join our engineers, designers and AI specialists.",
        eyebrow: "COMPANY",
        href: "/careers",
      },
      {
        title: "Contact",
        description: "Talk to our team about your next project.",
        eyebrow: "COMPANY",
        href: "/contact",
      },
    ],
  },
});

routes.push({
  route: "terms",
  template: "LegalPage",
  page: {
    title: "Terms & Conditions",
    eyebrow: "SITE TERMS",
    updated: "November 2025",
    description: "The terms that apply when you use the Nuvoryx website.",
    sections: [
      [
        "Using this website",
        "You may use this website for lawful purposes and in a way that does not interfere with its operation or other visitors’ use. Content is provided for general information about Nuvoryx and its services.",
      ],
      [
        "Intellectual property",
        "The website design, text, graphics and marks are owned by Nuvoryx or used with permission. You may not reproduce or redistribute material except as allowed by law or with prior written consent.",
      ],
      [
        "No professional advice",
        "Website information is not a substitute for project-specific technical, legal or commercial advice. Any services are governed by a separate written agreement.",
      ],
      [
        "Third-party links",
        "Links to third-party sites are provided for convenience. Nuvoryx does not control those sites or their content.",
      ],
      [
        "Contact",
        "Questions about these terms can be sent to legal@nuvoryx.com.",
      ],
    ].map(([title, body]) => ({ title, body })),
  },
});
routes.push({
  route: "thank-you",
  template: "StatusPage",
  page: {
    title: "Thanks for reaching out.",
    eyebrow: "MESSAGE RECEIVED",
    description:
      "Your message is with our team. A senior specialist will get back to you within one business day.",
    primary: "Explore our work",
    primaryHref: "/case-studies",
    secondary: "Back to home",
    secondaryHref: "/",
  },
});
routes.push({
  route: "this-page-does-not-exist",
  template: "StatusPage",
  page: {
    title: "This page isn’t here.",
    eyebrow: "404 · PAGE NOT FOUND",
    description:
      "The link may be out of date or the page may have moved. Use the links below to find your way around.",
    primary: "Back to home",
    primaryHref: "/",
    secondary: "Browse services",
    secondaryHref: "/services",
  },
});
routes.push({
  route: "trust",
  template: "LegalPage",
  page: {
    title: "Trust & Compliance",
    eyebrow: "SECURITY & PRIVACY",
    updated: "November 2025",
    description:
      "How we build, operate and protect the systems and information entrusted to Nuvoryx.",
    sections: [
      [
        "Information security",
        "Our security programme is guided by risk management, access controls, secure development practices and continuous improvement. Nuvoryx maintains ISO 27001 and SOC 2 Type II certifications.",
      ],
      [
        "Secure delivery",
        "Teams include security in architecture and delivery work through reviews, dependency management, testing and controlled releases.",
      ],
      [
        "Privacy and data handling",
        "We use information for the purposes described in our privacy policy and apply appropriate access and retention practices to project data.",
      ],
      [
        "Responsible AI",
        "AI engagements include risk assessment, clear ownership, evaluation and appropriate human review for consequential decisions.",
      ],
      [
        "Contact our team",
        "For trust and security questions, contact security@nuvoryx.com.",
      ],
    ].map(([title, body]) => ({ title, body })),
  },
});

routes.push({
  route: "whitepapers",
  template: "ListingPage",
  page: {
    title: "White papers",
    headline: "Research to guide your next move.",
    eyebrow: "WHITE PAPERS & GUIDES",
    description:
      "Practical frameworks and research for leaders making technology, AI and cloud decisions.",
    itemLabel: "WHITE PAPER",
    items: [
      {
        title:
          "AI adoption in 2026: a practical framework for enterprise-scale impact",
        description:
          "A 32-page framework covering use-case selection, operating model, governance and ROI.",
        eyebrow: "32 PAGES · OCT 01, 2025",
        href: "/whitepapers/ai-adoption-2026",
        action: "Explore the white paper",
      },
      {
        title: "The C-suite guide to digital transformation",
        description:
          "A leadership guide to aligning investment, teams and measurable business outcomes.",
        href: "/whitepapers/c-suite-digital-transformation",
        action: "Explore the guide",
      },
      {
        title: "Cloud cost benchmark: where engineering spend goes",
        description:
          "A practical benchmark for understanding cloud unit economics and optimisation opportunities.",
        href: "/whitepapers/cloud-cost-benchmark",
        action: "Explore the benchmark",
      },
    ],
  },
});
routes.push({
  route: "whitepapers/cloud-cost-benchmark",
  template: "ArticlePage",
  page: article(
    "Cloud cost benchmark: where engineering spend goes",
    "NUVORYX RESEARCH",
    "Jun 18, 2025",
    "18 pages",
    "A practical benchmark for understanding cloud unit economics and optimisation opportunities.",
    [
      "Cloud bills are easier to manage when teams can connect spend to products, workloads and customer value.",
      "This benchmark framework helps engineering leaders establish a baseline across compute, storage, networking and managed services, then compare unit costs by workload.",
      "Use the findings to prioritise rightsizing, commitment planning, architecture improvements and better cost allocation. The objective is to protect reliability while reducing waste.",
      "The companion scorecard gives teams a repeatable way to review progress and communicate the impact of cost changes.",
    ],
    "Cost transparency turns cloud optimisation into a product decision instead of a finance surprise.",
  ),
});

const cookie = routes.find((entry) => entry.route === "cookies");
for (const entry of routes) {
  const route = entry.route;
  const slug = route.replaceAll("/", "__").replace(/[^a-zA-Z0-9_-]/g, "_");
  const componentDirectory = path.join(componentsRoot, ...route.split("/"));
  const pageDirectory = path.join(pagesRoot, ...route.split("/"));
  fs.mkdirSync(componentDirectory, { recursive: true });
  fs.mkdirSync(pageDirectory, { recursive: true });
  const template = templates[entry.template];
  const content =
    entry.template === "EngagementModelsPage"
      ? `<Page />`
      : `<Page page={page} />`;
  const pageData = entry.page
    ? `const page = ${JSON.stringify(entry.page, null, 2)};\n`
    : "";
  const component = `import Page from ${JSON.stringify(template)};\n${pageData}\nexport default function ${slug.replace(/[^a-zA-Z0-9]/g, "")}Page() {\n  return ${content};\n}\n`;
  fs.writeFileSync(path.join(componentDirectory, "Page.jsx"), component);
  fs.writeFileSync(
    path.join(pageDirectory, "page.jsx"),
    `import Page from ${JSON.stringify(`@/components/${route}/Page`)};\n\nexport default function RoutePageContent() {\n  return <Page />;\n}\n`,
  );
  const routeSegments = route.split("/");
  const appDirectory = path.join(root, "app", ...routeSegments);
  fs.mkdirSync(appDirectory, { recursive: true });
  const appPage = `import PageShell from "@/components/layout/PageShell";\nimport Page from ${JSON.stringify(`@/pages/${route}/page`)};\n\nexport const metadata = { title: ${JSON.stringify(`${entry.page?.title || entry.page?.name || routeSegments.at(-1).replaceAll("-", " ")} · Nuvoryx`)} };\n\nexport default function RoutePage() {\n  return <PageShell><Page /></PageShell>;\n}\n`;
  fs.writeFileSync(path.join(appDirectory, "page.jsx"), appPage);
}
console.log(
  `Generated ${routes.length} additional route components for linked pages without standalone agency HTML.`,
);
