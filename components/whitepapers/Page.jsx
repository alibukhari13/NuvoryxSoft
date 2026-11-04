import Page from "@/components/templates/ListingPage";
const page = {
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
      image:
        "https://images.unsplash.com/photo-1685871286419-58e4fc0de8e1?auto=format&fit=crop&w=1200&q=75",
      eyebrow: "32 PAGES · OCT 01, 2025",
      href: "/whitepapers/ai-adoption-2026",
      action: "Explore the white paper",
    },
    {
      title: "The C-suite guide to digital transformation",
      description:
        "A leadership guide to aligning investment, teams and measurable business outcomes.",
      image:
        "https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?auto=format&fit=crop&w=800&q=75",
      href: "/whitepapers/c-suite-digital-transformation",
      action: "Explore the guide",
    },
    {
      title: "Cloud cost benchmark: where engineering spend goes",
      description:
        "A practical benchmark for understanding cloud unit economics and optimisation opportunities.",
      image:
        "https://images.unsplash.com/photo-1616072775440-ca2ea7c7ce13?auto=format&fit=crop&w=1200&q=75",
      href: "/whitepapers/cloud-cost-benchmark",
      action: "Explore the benchmark",
    },
  ],
};

export default function whitepapersPage() {
  return <Page page={page} />;
}
