import Page from "@/components/templates/PartnerPage";
const page = {
  name: "Salesforce",
  description:
    "Connected customer experiences built with Salesforce Consulting Partner expertise.",
  mark: "S",
  capabilities: [
    {
      title: "Architecture",
      description:
        "Design secure, scalable Salesforce foundations aligned to business and technical goals.",
    },
    {
      title: "Engineering",
      description:
        "Build product capabilities and integrations with experienced Salesforce specialists.",
    },
    {
      title: "Operate",
      description:
        "Improve reliability, governance and cost as your Salesforce footprint grows.",
    },
  ],
  proofs: [
    "Certified practitioners across Salesforce technologies",
    "Outcome-led architecture and delivery",
    "Knowledge transfer built into every engagement",
    "Security and governance designed into the solution",
  ],
};

export default function partnerssalesforcePage() {
  return <Page page={page} />;
}
