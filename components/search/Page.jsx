import Page from "@/components/templates/SearchPage";
const page = {
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
};

export default function searchPage() {
  return <Page page={page} />;
}
