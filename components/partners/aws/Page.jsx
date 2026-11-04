import Page from "@/components/templates/PartnerPage";
const page = {
  name: "AWS",
  description:
    "Cloud architecture and modernisation delivered by an AWS Advanced Tier Services Partner.",
  mark: "AWS",
  capabilities: [
    {
      title: "Architecture",
      description:
        "Design secure, scalable AWS foundations aligned to business and technical goals.",
    },
    {
      title: "Engineering",
      description:
        "Build product capabilities and integrations with experienced AWS specialists.",
    },
    {
      title: "Operate",
      description:
        "Improve reliability, governance and cost as your AWS footprint grows.",
    },
  ],
  proofs: [
    "Certified practitioners across AWS technologies",
    "Outcome-led architecture and delivery",
    "Knowledge transfer built into every engagement",
    "Security and governance designed into the solution",
  ],
};

export default function partnersawsPage() {
  return <Page page={page} />;
}
