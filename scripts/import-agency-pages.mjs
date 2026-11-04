import fs from "node:fs";
import path from "node:path";
import { load } from "cheerio";
import {
  serviceCatalog,
  categorySlug,
  pageSlug,
} from "../data/serviceCatalog.mjs";
import { industryCatalog, industrySlug } from "../data/industryCatalog.mjs";
import { caseStudyCatalog } from "../data/caseStudyCatalog.mjs";

const sourceRoot = path.resolve(process.cwd(), "../agency-pages");
const intermediateRoot = path.resolve(process.cwd(), ".agency-import");
const routes = {
  "careers/Careers · Nuvoryx.html": "careers",
  "careers/Senior Ml Engineer · Nuvoryx.html":
    "careers/senior-machine-learning-engineer",
  "company/About · Nuvoryx.html": "about",
  "company/Ai First · Nuvoryx.html": "ai-first",
  "company/Anthropic Partner Network · Nuvoryx.html":
    "newsroom/anthropic-partner-network",
  "company/Esg · Nuvoryx.html": "esg",
  "company/Global Presence · Nuvoryx.html": "global-presence",
  "company/How We Work · Nuvoryx.html": "how-we-work",
  "company/Leadership · Nuvoryx.html": "leadership",
  "company/Newsroom · Nuvoryx.html": "newsroom",
  "company/Openai Select Partner · Nuvoryx.html":
    "newsroom/openai-select-partner",
  "company/Partners · Nuvoryx.html": "partners",
  "contact/Contact · Nuvoryx.html": "contact",
  "customers/Case Studies · Nuvoryx.html": "case-studies",
  "customers/Testimonials · Nuvoryx.html": "testimonials",
  "customers/:testimonials?logos=1.html": "testimonials?logos=1",
  "industries/Industries · Nuvoryx.html": "industries",
  "industries/Fintech Banking · Nuvoryx.html": "industries/fintech-banking",
  "industries/Lumenpay Fraud Ai · Nuvoryx.html":
    "case-studies/lumenpay-fraud-ai",
  "polices/Privacy · Nuvoryx.html": "privacy",
  "polices/Sitemap · Nuvoryx.html": "sitemap",
  "resources/Resources · Nuvoryx.html": "resources",
  "resources/Webinars · Nuvoryx.html": "webinars",
  "resources/Ai Adoption 2026 · Nuvoryx.html": "whitepapers/ai-adoption-2026",
  "services/Advisory Strategy · Nuvoryx.html": "services/advisory-strategy",
  "services/Ai Data Innovation.html": "services/ai-data-innovation",
  "services/All-Services.html": "services",
  "services/Book Consultation · Nuvoryx.html": "book-consultation",
  "services/Business Process Services · Nuvoryx.html":
    "services/business-process-services",
  "services/C Suite Digital Transformation · Nuvoryx.html":
    "whitepapers/c-suite-digital-transformation",
  "services/Cloud Infrastructure · Nuvoryx.html":
    "services/cloud-infrastructure",
  "services/Cybersecurity · Nuvoryx.html": "services/cybersecurity",
  "services/Digital Experience · Nuvoryx.html": "services/digital-experience",
  "services/Engineering · Nuvoryx.html": "services/engineering",
  "services/Optimization Quality · Nuvoryx.html":
    "services/optimization-quality",
  "services/sub-services/Ai Strategy And Roadmap · Nuvoryx.html":
    "services/ai-data-innovation/ai-strategy-and-roadmap",
  "services/webinars:Modernizing For Ai Era · Nuvoryx.html":
    "webinars/modernizing-for-ai-era",
  "system-design/Style Guide · Nuvoryx.html": "style-guide",
};

const pages = {};
fs.mkdirSync(intermediateRoot, { recursive: true });
for (const [relative, route] of Object.entries(routes)) {
  const html = fs.readFileSync(path.join(sourceRoot, relative), "utf8");
  const $ = load(html);
  const main = $("#main > .animate-page").first();
  if (!main.length)
    throw new Error(`Could not find page content in ${relative}`);
  main.find('a[href^="#/"]').each((_, anchor) => {
    const el = $(anchor);
    el.attr("href", el.attr("href").replace(/^#\//, "/"));
  });
  const content = main.html();
  const file = `${route.replace(/\//g, "__").replace(/[?=&]/g, "_")}.json`;
  const page = {
    title: $("title")
      .text()
      .replace(/\s*·\s*Nuvoryx\s*$/, "")
      .trim(),
    content,
    source: relative,
  };
  fs.writeFileSync(path.join(intermediateRoot, file), JSON.stringify(page));
  pages[route] = { title: page.title, file, source: relative };
}
const baseServicePage = JSON.parse(
  fs.readFileSync(
    path.join(
      intermediateRoot,
      pages["services/ai-data-innovation/ai-strategy-and-roadmap"].file,
    ),
    "utf8",
  ),
);
for (const [category, serviceNames] of Object.entries(serviceCatalog)) {
  for (const service of serviceNames) {
    const slug = pageSlug(service);
    const route = `services/${categorySlug(category)}/${slug}`;
    if (pages[route]) continue;
    const $page = load(baseServicePage.content);
    $page("body")
      .find("*")
      .contents()
      .each((_, node) => {
        if (node.type === "text")
          node.data = node.data.replace(/AI Strategy & Roadmap/gi, service);
      });
    const h1 = $page("h1").first();
    h1.text(`Deliver ${service} that moves your business forward.`);
    h1.parent()
      .find("p")
      .first()
      .text(
        `Our ${service} practice combines senior specialists, proven accelerators and an outcome-first approach. Every engagement is shaped around your goals, constraints and measures of success.`,
      );
    $page("h2").each((_, heading) => {
      const el = $page(heading);
      if (el.text().includes("What’s included in"))
        el.text(`What’s included in ${service}.`);
      if (el.text().startsWith("More from ")) el.text(`More from ${category}`);
      if (el.text().endsWith(": FAQs")) el.text(`${service}: FAQs`);
    });
    $page("h3").each((_, heading) => {
      const el = $page(heading);
      if (el.text() === "Assessment & roadmap")
        el.text(`${service} assessment`);
      if (el.text() === "Architecture & design")
        el.text("Architecture & design");
    });
    const related = $page("h2")
      .filter((_, el) => $page(el).text().startsWith("More from "))
      .first()
      .closest("section");
    const relatedItems = serviceNames
      .filter((name) => name !== service)
      .slice(0, 3);
    related.find('a[href^="/services/"]').each((index, anchor) => {
      const name = relatedItems[index];
      if (!name) return;
      const item = $page(anchor);
      item.attr(
        "href",
        `/${route === "" ? "" : route.split("/").slice(0, 2).join("/")}/${pageSlug(name)}`,
      );
      item.find(".font-display").first().text(name);
      item
        .find(".text-muted")
        .first()
        .text(`Explore our ${name.toLowerCase()} capabilities.`);
      item.attr(
        "href",
        `/services/${categorySlug(category)}/${pageSlug(name)}`,
      );
    });
    $page('a[href="/services/ai-data-innovation"]')
      .attr("href", `/services/${categorySlug(category)}`)
      .text(category);
    let content = $page("body").html() || $page.root().html();
    const file = `${route.replace(/\//g, "__")}.json`;
    const page = {
      title: service,
      content,
      source: "generated from the shared service detail template",
    };
    fs.writeFileSync(path.join(intermediateRoot, file), JSON.stringify(page));
    pages[route] = { title: service, file, source: page.source };
  }
}
const baseIndustryPage = JSON.parse(
  fs.readFileSync(
    path.join(intermediateRoot, pages["industries/fintech-banking"].file),
    "utf8",
  ),
);
const industryChallenges = {
  Healthcare: [
    "Disconnected clinical systems slow care",
    "Clinician time lost to administration",
    "Privacy and interoperability demands keep growing",
  ],
  "Retail & E-commerce": [
    "Disconnected shopping journeys",
    "Thin margins and shifting demand",
    "Customers expect faster, more personal service",
  ],
  "Logistics & Supply Chain": [
    "Limited real-time network visibility",
    "Rising fuel and operating costs",
    "Complex, global fulfilment requirements",
  ],
  "Education / EdTech": [
    "Learning tools that do not work together",
    "Uneven access to quality learning",
    "Student data needs strong protection",
  ],
  "Real Estate / PropTech": [
    "Property data split across systems",
    "High operating costs across portfolios",
    "Tenant expectations keep changing",
  ],
  Telecom: [
    "Legacy OSS/BSS slows service changes",
    "Network complexity makes operations harder",
    "Customers expect seamless digital support",
  ],
  "SaaS & Startups": [
    "Product roadmaps outgrow engineering capacity",
    "Reliability must improve while the product scales",
    "Teams need to ship without building up technical debt",
  ],
  "Public Sector": [
    "Residents face fragmented digital services",
    "Legacy systems make change difficult",
    "Accessibility and security must be built in",
  ],
  Manufacturing: [
    "Unplanned downtime disrupts production",
    "Operational data is difficult to act on",
    "Quality and traceability requirements keep rising",
  ],
};
for (const [industry, [description, standards]] of Object.entries(
  industryCatalog,
)) {
  const route = `industries/${industrySlug(industry)}`;
  if (pages[route]) continue;
  const $page = load(baseIndustryPage.content);
  $page("h1").first().text(description);
  $page("h2").each((_, heading) => {
    const el = $page(heading);
    if (el.text().startsWith("What’s holding"))
      el.text(`What’s holding ${industry} leaders back.`);
    if (el.text().includes("Fintech & Banking success stories"))
      el.text("Selected client outcomes.");
    if (el.text() === "Transform fintech with Nuvoryx.")
      el.text(`Build for ${industry} with Nuvoryx.`);
  });
  const challenges = industryChallenges[industry] || [];
  $page("h3").each((_, heading) => {
    const text = $page(heading).text();
    if (
      [
        "Legacy core systems slowing product launches",
        "Rising fraud and AML scrutiny",
        "Customer expectations set by neobanks",
      ].includes(text)
    ) {
      const index = [
        "Legacy core systems slowing product launches",
        "Rising fraud and AML scrutiny",
        "Customer expectations set by neobanks",
      ].indexOf(text);
      if (challenges[index]) $page(heading).text(challenges[index]);
    }
  });
  $page("p").each((_, paragraph) => {
    const el = $page(paragraph);
    if (el.text().includes("fintech & banking workflows"))
      el.text(
        `${description} We shape digital products and platforms around the way ${industry} teams work.`,
      );
  });
  $page("span").each((_, span) => {
    const el = $page(span);
    if (el.text().includes("PCI DSS") && el.text().includes("PSD2"))
      el.text(standards);
  });
  const file = `${route.replace(/\//g, "__")}.json`;
  const page = {
    title: industry,
    content: $page("body").html() || $page.root().html(),
    source: "generated from the shared industry detail template",
  };
  fs.writeFileSync(path.join(intermediateRoot, file), JSON.stringify(page));
  pages[route] = { title: industry, file, source: page.source };
}
const baseCaseStudy = JSON.parse(
  fs.readFileSync(
    path.join(intermediateRoot, pages["case-studies/lumenpay-fraud-ai"].file),
    "utf8",
  ),
);
for (const [slug, study] of Object.entries(caseStudyCatalog)) {
  const route = `case-studies/${slug}`;
  if (pages[route]) continue;
  const $page = load(baseCaseStudy.content);
  const oldValues = [
    ["LumenPay", study.client],
    ["Fintech & Banking", study.industry],
    ["AI & Data Innovation", study.service],
    [
      "A payments platform processing 4M transactions a day needed fraud decisions in under 50ms without blocking good customers.",
      study.summary,
    ],
    ["43%", study.metrics[0][0]],
    ["drop in fraud losses", study.metrics[0][1]],
    ["38ms", study.metrics[1][0]],
    ["scoring latency", study.metrics[1][1]],
    ["$12M", study.metrics[2][0]],
    ["annual savings", study.metrics[2][1]],
    ["Python", study.tech[0]],
    ["Kafka", study.tech[1]],
    ["AWS SageMaker", study.tech[2]],
    ["Snowflake", study.tech[3]],
    [
      "“Nuvoryx shipped a model our risk team trusts and our engineers can operate. It paid for itself in the first quarter.”",
      `“${study.quote}”`,
    ],
    ["Amara Okafor", study.author],
    ["Chief Risk Officer, LumenPay", study.role],
  ];
  $page("body")
    .find("*")
    .contents()
    .each((_, node) => {
      if (node.type !== "text") return;
      for (const [from, to] of oldValues)
        if (node.data.trim() === from) node.data = node.data.replace(from, to);
    });
  $page("h1").first().text(study.title);
  $page("p").each((_, paragraph) => {
    const el = $page(paragraph);
    if (el.text().includes("A payments platform processing 4M transactions"))
      el.text(study.summary);
  });
  const file = `${route.replace(/\//g, "__")}.json`;
  const page = {
    title: study.title,
    content: $page("body").html() || $page.root().html(),
    source:
      "generated from the shared case study template and Figma route content",
  };
  fs.writeFileSync(path.join(intermediateRoot, file), JSON.stringify(page));
  pages[route] = { title: study.title, file, source: page.source };
}
const baseWebinar = JSON.parse(
  fs.readFileSync(
    path.join(intermediateRoot, pages["webinars/modernizing-for-ai-era"].file),
    "utf8",
  ),
);
const webinarCatalog = {
  "finops-for-ai-workloads": {
    title: "FinOps for AI workloads: controlling GPU costs at scale",
    description:
      "Practical tactics to forecast, govern and reduce AI infrastructure spend.",
    date: "Oct 09, 2025",
  },
  "responsible-ai-governance": {
    title: "Responsible AI governance that does not slow you down",
    description:
      "Building review boards, model cards and risk tiers that teams embrace.",
    date: "Sep 04, 2025",
  },
};
for (const [slug, webinar] of Object.entries(webinarCatalog)) {
  const route = `webinars/${slug}`;
  if (pages[route]) continue;
  const $page = load(baseWebinar.content);
  $page("body")
    .find("*")
    .contents()
    .each((_, node) => {
      if (node.type !== "text") return;
      node.data = node.data
        .replace(/Modernizing legacy apps for the AI era/g, webinar.title)
        .replace(
          /A live session with our CTO and AWS on making legacy estates AI-ready\./g,
          webinar.description,
        )
        .replace(/Nov 20, 2025/g, webinar.date)
        .replace(/Upcoming live webinar/g, "On-demand webinar");
    });
  $page("h1").first().text(webinar.title);
  $page("p").first().text(webinar.description);
  const file = `${route.replace(/\//g, "__")}.json`;
  const page = {
    title: webinar.title,
    content: $page("body").html() || $page.root().html(),
    source:
      "generated from the shared webinar detail template and Figma route content",
  };
  fs.writeFileSync(path.join(intermediateRoot, file), JSON.stringify(page));
  pages[route] = { title: webinar.title, file, source: page.source };
}
fs.writeFileSync(
  path.join(intermediateRoot, "manifest.json"),
  JSON.stringify(pages, null, 2),
);
console.log(
  `Imported ${Object.keys(pages).length} agency pages and shared-template routes.`,
);
