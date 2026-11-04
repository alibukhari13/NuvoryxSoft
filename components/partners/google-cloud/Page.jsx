import Page from "@/components/templates/PartnerPage";
const page = {
  name: "Google Cloud",
  description:
    "Cloud and AI engineering built with Google Cloud Premier Partner capabilities.",
  mark: "G",
  capabilities: [
    {
      title: "Architecture",
      description:
        "Design secure, scalable Google Cloud foundations aligned to business and technical goals.",
    },
    {
      title: "Engineering",
      description:
        "Build product capabilities and integrations with experienced Google Cloud specialists.",
    },
    {
      title: "Operate",
      description:
        "Improve reliability, governance and cost as your Google Cloud footprint grows.",
    },
  ],
  proofs: [
    "Certified practitioners across Google Cloud technologies",
    "Outcome-led architecture and delivery",
    "Knowledge transfer built into every engagement",
    "Security and governance designed into the solution",
  ],
};

export default function partnersgooglecloudPage() {
  return <Page page={page} />;
}
