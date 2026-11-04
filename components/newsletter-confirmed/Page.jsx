import Page from "@/components/templates/StatusPage";
const page = {
  title: "You’re on the list.",
  eyebrow: "SUBSCRIPTION CONFIRMED",
  description:
    "Thanks for subscribing. We’ll send one thoughtful update each month on AI, engineering and cloud.",
  primary: "Explore resources",
  primaryHref: "/resources",
  secondary: "Visit the blog",
  secondaryHref: "/blog",
};

export default function newsletterconfirmedPage() {
  return <Page page={page} />;
}
