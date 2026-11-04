import Page from "@/components/templates/CaseStudyPage";
const page = {
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
};

export default function casestudieshalcyonsecuritysoc2Page() {
  return <Page page={page} />;
}
