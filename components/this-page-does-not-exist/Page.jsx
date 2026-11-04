import Page from "@/components/templates/StatusPage";
const page = {
  title: "This page isn’t here.",
  eyebrow: "404 · PAGE NOT FOUND",
  description:
    "The link may be out of date or the page may have moved. Use the links below to find your way around.",
  primary: "Back to home",
  primaryHref: "/",
  secondary: "Browse services",
  secondaryHref: "/services",
};

export default function thispagedoesnotexistPage() {
  return <Page page={page} />;
}
