import Page from "@/components/templates/ArticlePage";
const page = {
  title: "Nuvoryx named to the Inc. 5000 list for 2025",
  eyebrow: "NEWSROOM",
  date: "Aug 12, 2025",
  readTime: "3 min read",
  description:
    "The recognition reflects sustained growth as Nuvoryx helps ambitious companies engineer intelligent software.",
  paragraphs: [
    "Nuvoryx has been recognised on the Inc. 5000 list of fastest-growing private companies in the United States.",
    "The milestone reflects the work of our teams and clients across product engineering, cloud and applied AI. We remain focused on building durable partnerships and software that creates measurable value.",
    "We are grateful to the people who have trusted us with their most important technology programmes and to the teams who make that work possible.",
  ],
  pullQuote:
    "Growth matters most when it helps teams deliver better outcomes for the people they serve.",
};

export default function newsroominc50002025Page() {
  return <Page page={page} />;
}
