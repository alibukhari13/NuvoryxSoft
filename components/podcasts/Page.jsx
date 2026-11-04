import Page from "@/components/templates/ListingPage";
const page = {
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
      image:
        "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=75",
      eyebrow: "EP. 42 · OCT 22, 2025 · 48 MIN",
      href: "/podcasts/ep-42-agentic-enterprise",
      action: "Listen to episode",
    },
    {
      title: "Security by default: building products people can trust",
      description:
        "Episode 40 on security culture, secure delivery and designing for resilience.",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=75",
      eyebrow: "EP. 40 · SEP 18, 2025 · 41 MIN",
      href: "/podcasts/ep-40-security-by-default",
      action: "Listen to episode",
    },
    {
      title: "The CTO playbook for scaling product teams",
      description:
        "Episode 41 on the systems and habits that help engineering teams grow without losing focus.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=75",
      eyebrow: "EP. 41 · OCT 02, 2025 · 45 MIN",
      href: "/podcasts/ep-41-cto-playbook",
      action: "Listen to episode",
    },
  ],
};

export default function podcastsPage() {
  return <Page page={page} />;
}
