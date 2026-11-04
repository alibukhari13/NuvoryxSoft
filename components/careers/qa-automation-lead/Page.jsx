import Page from "@/components/templates/JobDetailPage";
const page = {
  title: "QA Automation Lead",
  team: "Engineering Quality",
  location: "Lahore / Remote",
  type: "Full-time",
  level: "Mid-level",
  description:
    "Lead automation strategy and help product teams ship reliable software with confidence.",
  about:
    "Lead automation strategy and help product teams ship reliable software with confidence. You will work with a distributed group of engineers, designers and product leaders on meaningful client challenges.",
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

export default function careersqaautomationleadPage() {
  return <Page page={page} />;
}
