import PageShell from "@/components/layout/PageShell";
import Page from "@/pages/services/cybersecurity/application-security-and-pen-testing/page";

export const metadata = {
  title: "Application Security & Pen Testing · Nuvoryx",
};

export default function RoutePage() {
  return (
    <PageShell>
      <Page />
    </PageShell>
  );
}
