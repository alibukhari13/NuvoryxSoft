import Page from "@/components/templates/LegalPage";
const page = {
  title: "Trust & Compliance",
  eyebrow: "SECURITY & PRIVACY",
  updated: "November 2025",
  description:
    "How we build, operate and protect the systems and information entrusted to Nuvoryx.",
  sections: [
    {
      title: "Information security",
      body: "Our security programme is guided by risk management, access controls, secure development practices and continuous improvement. Nuvoryx maintains ISO 27001 and SOC 2 Type II certifications.",
    },
    {
      title: "Secure delivery",
      body: "Teams include security in architecture and delivery work through reviews, dependency management, testing and controlled releases.",
    },
    {
      title: "Privacy and data handling",
      body: "We use information for the purposes described in our privacy policy and apply appropriate access and retention practices to project data.",
    },
    {
      title: "Responsible AI",
      body: "AI engagements include risk assessment, clear ownership, evaluation and appropriate human review for consequential decisions.",
    },
    {
      title: "Contact our team",
      body: "For trust and security questions, contact security@nuvoryx.com.",
    },
  ],
};

export default function trustPage() {
  return <Page page={page} />;
}
