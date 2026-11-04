import Page from "@/components/templates/LegalPage";
const page = {
  title: "Cookie Policy",
  eyebrow: "PRIVACY & COOKIES",
  updated: "November 2025",
  description:
    "How Nuvoryx uses cookies and similar technologies on this website.",
  sections: [
    {
      title: "What cookies are",
      body: "Cookies are small files stored by your browser. They help a website remember preferences, understand aggregate usage and support features you choose to use.",
    },
    {
      title: "How we use them",
      body: "We use essential storage to keep the site working and, where enabled, analytics technologies to understand performance. Optional technologies should only run according to your choices and applicable requirements.",
    },
    {
      title: "Your choices",
      body: "You can manage cookies through your browser settings. Blocking essential storage may affect some site features. You can revisit your preferences when a consent control is available.",
    },
    {
      title: "Questions",
      body: "For questions about privacy or this policy, contact privacy@nuvoryx.com.",
    },
  ],
};

export default function cookiesPage() {
  return <Page page={page} />;
}
