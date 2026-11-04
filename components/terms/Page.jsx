import Page from "@/components/templates/LegalPage";
const page = {
  title: "Terms & Conditions",
  eyebrow: "SITE TERMS",
  updated: "November 2025",
  description: "The terms that apply when you use the Nuvoryx website.",
  sections: [
    {
      title: "Using this website",
      body: "You may use this website for lawful purposes and in a way that does not interfere with its operation or other visitors’ use. Content is provided for general information about Nuvoryx and its services.",
    },
    {
      title: "Intellectual property",
      body: "The website design, text, graphics and marks are owned by Nuvoryx or used with permission. You may not reproduce or redistribute material except as allowed by law or with prior written consent.",
    },
    {
      title: "No professional advice",
      body: "Website information is not a substitute for project-specific technical, legal or commercial advice. Any services are governed by a separate written agreement.",
    },
    {
      title: "Third-party links",
      body: "Links to third-party sites are provided for convenience. Nuvoryx does not control those sites or their content.",
    },
    {
      title: "Contact",
      body: "Questions about these terms can be sent to legal@nuvoryx.com.",
    },
  ],
};

export default function termsPage() {
  return <Page page={page} />;
}
