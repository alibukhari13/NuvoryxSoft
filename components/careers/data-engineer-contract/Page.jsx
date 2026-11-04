import Page from "@/components/templates/JobDetailPage";
const page = {
  title: "Data Engineer (Contract)",
  team: "AI & Data",
  location: "Remote",
  type: "Contract",
  level: "Mid-level",
  description:
    "Build reliable data pipelines and quality checks that make analytics and AI workloads production-ready.",
  about:
    "Build reliable data pipelines and quality checks that make analytics and AI workloads production-ready. You will work with a distributed group of engineers, designers and product leaders on meaningful client challenges.",
  responsibilities: [
    "Partner with product, design and engineering to define outcomes and a clear delivery plan.",
    "Build maintainable solutions with automated checks, documentation and observability.",
    "Share progress openly and help the wider team improve its craft.",
  ],
  qualifications: [
    "Experience shipping production work in your discipline.",
    "Clear communication and a collaborative approach to solving problems.",
    "Care for quality, security and the people who use what you build.",
  ],
};

export default function careersdataengineercontractPage() {
  return <Page page={page} />;
}
