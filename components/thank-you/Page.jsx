import Page from "@/components/templates/StatusPage";
const page = {
  title: "Thanks for reaching out.",
  eyebrow: "MESSAGE RECEIVED",
  description:
    "Your message is with our team. A senior specialist will get back to you within one business day.",
  primary: "Explore our work",
  primaryHref: "/case-studies",
  secondary: "Back to home",
  secondaryHref: "/",
};

export default function thankyouPage() {
  return <Page page={page} />;
}
