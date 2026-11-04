import Page from "@/components/templates/PartnerPage";
const page = {
  name: "Microsoft",
  description:
    "Enterprise cloud and AI solutions across Azure, Microsoft 365 and the Power Platform.",
  mark: "M",
  capabilities: [
    {
      title: "Architecture",
      description:
        "Design secure, scalable Microsoft foundations aligned to business and technical goals.",
    },
    {
      title: "Engineering",
      description:
        "Build product capabilities and integrations with experienced Microsoft specialists.",
    },
    {
      title: "Operate",
      description:
        "Improve reliability, governance and cost as your Microsoft footprint grows.",
    },
  ],
  proofs: [
    "Certified practitioners across Microsoft technologies",
    "Outcome-led architecture and delivery",
    "Knowledge transfer built into every engagement",
    "Security and governance designed into the solution",
  ],
};

export default function partnersmicrosoftPage() {
  return <Page page={page} />;
}
