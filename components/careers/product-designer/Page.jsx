import Page from "@/components/templates/JobDetailPage";
const page = {
  title: "Product Designer",
  team: "Digital Experience",
  location: "Remote",
  type: "Full-time",
  level: "Mid-level",
  description:
    "Turn complex workflows into accessible product experiences through research, prototyping and collaboration.",
  about:
    "Turn complex workflows into accessible product experiences through research, prototyping and collaboration. You will work with a distributed group of engineers, designers and product leaders on meaningful client challenges.",
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

export default function careersproductdesignerPage() {
  return <Page page={page} />;
}
