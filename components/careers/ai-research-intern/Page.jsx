import Page from "@/components/templates/JobDetailPage";
const page = {
  title: "AI Research Intern",
  team: "AI Research",
  location: "Lahore / Remote",
  type: "Internship",
  level: "Mid-level",
  description:
    "Help evaluate applied AI workflows and build prototypes with our research and product teams.",
  about:
    "Help evaluate applied AI workflows and build prototypes with our research and product teams. You will work with a distributed group of engineers, designers and product leaders on meaningful client challenges.",
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

export default function careersairesearchinternPage() {
  return <Page page={page} />;
}
