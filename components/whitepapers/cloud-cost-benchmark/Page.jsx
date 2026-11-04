import Page from "@/components/templates/ArticlePage";
const page = {
  title: "Cloud cost benchmark report 2025",
  eyebrow: "NUVORYX RESEARCH",
  date: "Jul 10, 2025",
  readTime: "28 pages",
  description:
    "Data from 180 cloud estates on where spend goes and how leaders cut it.",
  paragraphs: [
    "Cloud bills are easier to manage when teams can connect spend to products, workloads and customer value.",
    "This benchmark framework helps engineering leaders establish a baseline across compute, storage, networking and managed services, then compare unit costs by workload.",
    "Use the findings to prioritise rightsizing, commitment planning, architecture improvements and better cost allocation. The objective is to protect reliability while reducing waste.",
    "The companion scorecard gives teams a repeatable way to review progress and communicate the impact of cost changes.",
  ],
  pullQuote:
    "Cost transparency turns cloud optimisation into a product decision instead of a finance surprise.",
};

export default function whitepaperscloudcostbenchmarkPage() {
  return <Page page={page} />;
}
