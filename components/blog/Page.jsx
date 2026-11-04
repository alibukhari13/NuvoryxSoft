import Page from "@/components/templates/ListingPage";
const page = {
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
};

export default function blogPage() {
  return <Page page={page} />;
}
