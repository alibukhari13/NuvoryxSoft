import Page from "@/components/templates/PartnerPage";
const page = {
  name: "Anthropic",
  description:
    "A partner network for teams building with Claude models and responsible AI practices.",
  mark: "A",
  capabilities: [
    {
      title: "Architecture",
      description:
        "Design secure, scalable Anthropic foundations aligned to business and technical goals.",
    },
    {
      title: "Engineering",
      description:
        "Build product capabilities and integrations with experienced Anthropic specialists.",
    },
    {
      title: "Operate",
      description:
        "Improve reliability, governance and cost as your Anthropic footprint grows.",
    },
  ],
  proofs: [
    "Certified practitioners across Anthropic technologies",
    "Outcome-led architecture and delivery",
    "Knowledge transfer built into every engagement",
    "Security and governance designed into the solution",
  ],
};

export default function partnersanthropicPage() {
  return <Page page={page} />;
}
