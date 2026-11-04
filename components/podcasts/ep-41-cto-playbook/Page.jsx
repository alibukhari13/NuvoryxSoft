import Page from "@/components/templates/ArticlePage";
const page = {
  title: "A first-90-days playbook for new CTOs",
  eyebrow: "BEYOND THE CODE · EPISODE 41",
  date: "Oct 08, 2025",
  readTime: "52 min listen",
  description:
    "Ep. 41 with three CTOs on inheriting teams, debt and expectations.",
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
