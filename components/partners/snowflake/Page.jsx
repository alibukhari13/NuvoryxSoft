import Page from "@/components/templates/PartnerPage";
const page = {
  name: "Snowflake",
  description:
    "Modern data platforms and analytics built for governed, reliable access to business data.",
  mark: "S",
  capabilities: [
    {
      title: "Architecture",
      description:
        "Design secure, scalable Snowflake foundations aligned to business and technical goals.",
    },
    {
      title: "Engineering",
      description:
        "Build product capabilities and integrations with experienced Snowflake specialists.",
    },
    {
      title: "Operate",
      description:
        "Improve reliability, governance and cost as your Snowflake footprint grows.",
    },
  ],
  proofs: [
    "Certified practitioners across Snowflake technologies",
    "Outcome-led architecture and delivery",
    "Knowledge transfer built into every engagement",
    "Security and governance designed into the solution",
  ],
};

export default function partnerssnowflakePage() {
  return <Page page={page} />;
}
