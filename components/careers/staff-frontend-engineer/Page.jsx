import Page from "@/components/templates/JobDetailPage";
const page = {
  title: "Staff Frontend Engineer",
  team: "Engineering",
  location: "Remote · Americas / Europe",
  type: "Full-time",
  level: "Senior",
  description:
    "Shape accessible frontend architecture and mentor teams delivering responsive web products.",
  about:
    "Shape accessible frontend architecture and mentor teams delivering responsive web products. You will work with a distributed group of engineers, designers and product leaders on meaningful client challenges.",
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

export default function careersstafffrontendengineerPage() {
  return <Page page={page} />;
}
