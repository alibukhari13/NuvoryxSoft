import Page from "@/components/templates/ArticlePage";
const page = {
  title: "The CTO playbook for scaling product teams",
  eyebrow: "BEYOND THE CODE · EPISODE 41",
  date: "Oct 02, 2025",
  readTime: "45 min listen",
  description:
    "A conversation about the systems and habits that help engineering teams grow without losing focus.",
  paragraphs: [
    "Scaling a product team changes the work of a CTO. More people, more services and more stakeholders make clarity and strong technical leadership essential.",
    "In this episode we discuss how to keep architecture decisions close to product goals, set useful engineering measures and help teams own outcomes.",
    "We also talk about hiring, team boundaries and the operating routines that protect time for deep work.",
  ],
  pullQuote:
    "The best operating model gives teams context, ownership and room to do focused work.",
};

export default function podcastsep41ctoplaybookPage() {
  return <Page page={page} />;
}
