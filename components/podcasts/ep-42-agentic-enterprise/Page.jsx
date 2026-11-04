import Page from "@/components/templates/ArticlePage";
const page = {
  title: "The agentic enterprise: what changes when software acts on its own",
  eyebrow: "BEYOND THE CODE · EPISODE 42",
  date: "Oct 22, 2025",
  readTime: "48 min listen",
  description:
    "Episode 42 with the Head of AI at a global insurer on deploying governed digital agents.",
  paragraphs: [
    "What changes when software can plan, call tools and complete work across business systems? In this episode we look at the practical operating questions behind agentic workflows.",
    "Our guest shares lessons about governance, clear permissions, evaluation and keeping people in control of consequential decisions.",
    "We discuss where agents can reduce repetitive effort today, what teams should measure and how to build trust before expanding automation.",
  ],
  pullQuote:
    "Start with a workflow people understand, then expand only when the evidence supports it.",
};

export default function podcastsep42agenticenterprisePage() {
  return <Page page={page} />;
}
