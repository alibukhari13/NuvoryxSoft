import Page from "@/components/templates/StatusPage";
const page = {
  title: "We’ll be back shortly.",
  eyebrow: "SCHEDULED MAINTENANCE",
  description:
    "This page is temporarily unavailable while we make improvements. Please check back soon or contact our team if you need help.",
  primary: "Back to Nuvoryx",
  primaryHref: "/",
  secondary: "Contact us",
  secondaryHref: "/contact",
};

export default function maintenancePage() {
  return <Page page={page} />;
}
