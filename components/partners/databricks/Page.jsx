import Page from "@/components/templates/PartnerPage";
const page = {
  name: "Databricks",
  description:
    "Data engineering and AI platforms that help teams turn governed data into production outcomes.",
  mark: "D",
  capabilities: [
    {
      title: "Architecture",
      description:
        "Design secure, scalable Databricks foundations aligned to business and technical goals.",
    },
    {
      title: "Engineering",
      description:
        "Build product capabilities and integrations with experienced Databricks specialists.",
    },
    {
      title: "Operate",
      description:
        "Improve reliability, governance and cost as your Databricks footprint grows.",
    },
  ],
  proofs: [
    "Certified practitioners across Databricks technologies",
    "Outcome-led architecture and delivery",
    "Knowledge transfer built into every engagement",
    "Security and governance designed into the solution",
  ],
};

export default function partnersdatabricksPage() {
  return <Page page={page} />;
}
