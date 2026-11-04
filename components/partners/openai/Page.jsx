import Page from "@/components/templates/PartnerPage";
const page = {
  name: "OpenAI",
  description:
    "Product engineering and advisory support through the OpenAI Select Partner programme.",
  mark: "O",
  capabilities: [
    {
      title: "Architecture",
      description:
        "Design secure, scalable OpenAI foundations aligned to business and technical goals.",
    },
    {
      title: "Engineering",
      description:
        "Build product capabilities and integrations with experienced OpenAI specialists.",
    },
    {
      title: "Operate",
      description:
        "Improve reliability, governance and cost as your OpenAI footprint grows.",
    },
  ],
  proofs: [
    "Certified practitioners across OpenAI technologies",
    "Outcome-led architecture and delivery",
    "Knowledge transfer built into every engagement",
    "Security and governance designed into the solution",
  ],
};

export default function partnersopenaiPage() {
  return <Page page={page} />;
}
