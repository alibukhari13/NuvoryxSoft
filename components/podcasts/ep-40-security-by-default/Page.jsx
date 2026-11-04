import Page from "@/components/templates/ArticlePage";
const page = {
  title: "Security by default: shifting left without slowing down",
  eyebrow: "BEYOND THE CODE · EPISODE 40",
  date: "Sep 24, 2025",
  readTime: "45 min listen",
  description:
    "Ep. 40 with a former bank CISO on secure engineering culture.",
  paragraphs: [
    "Security works best when it is part of how teams plan, build and operate software. In this episode, our guests discuss practical habits that make secure choices easier for product teams.",
    "We cover threat modelling, useful developer guardrails and how security specialists can partner with engineers without becoming a release bottleneck.",
    "The conversation also looks at how teams can learn from incidents and turn those lessons into stronger defaults.",
  ],
  pullQuote:
    "Trust is earned through the small decisions a product team makes every day.",
};

export default function podcastsep40securitybydefaultPage() {
  return <Page page={page} />;
}
